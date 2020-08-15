import { Injectable } from '@angular/core'
import { RepositoriesByAuthorGQL, RepositoryDetailsGQL } from '../services/github.service'
import { map } from 'rxjs/operators'
import { PagerService } from './pager.service'
import { FilterService } from './filter.service'

@Injectable()
export class RepositoryService {
    
    private userName: string = ""

    public errorFound: boolean = false

    public errorMessage: string = ""

    public loading: boolean = false

    private allRepos = []

    private repo = null

    private languageFilters = []

    private dateFilters = []

    private repo$

    private repos$

    constructor(private reposByAuthor: RepositoriesByAuthorGQL, private repoDetails: RepositoryDetailsGQL,
        private pagerService: PagerService, private filterService: FilterService){}

    getAllRepos(){
        return this.allRepos
    }

    setAllRepos(login: string){
        this.filterService.setInvisibleFilters()
        this.errorFound = false
        this.allRepos = []
        this.loading = true
        this.repos$ = this.reposByAuthor
            .fetch({login: login, count: 100})
            .pipe(
                map(response => response.data.repositoryOwner.repositories.edges)
            )
            .subscribe(data => {
                this.allRepos=data
                console.log(data)
            }, err => {
                this.pagerService.refreshPagerPreferences()
                this.errorMessage = "Ошибка при поиске. Попробуйте ещё раз"
                this.errorFound=true
                this.loading = false
            }, () => {
                if(!this.getAllRepos().length){
                    this.errorFound=true
                    this.errorMessage = "Репозиториев не найдено"
                    this.loading = false
                    return
                }
                this.setLanguages()
                this.setDates()
                this.pagerService.refreshCurrentPage()
                this.pagerService.setPagerPreferences(this.getAllRepos())
                this.pagerService.setPagedItems()
                this.loading=false
                this.filterService.setVisibleFilters()
            })
    }

    getRepo(){
        return this.repo
    }

    setRepo(repoName: string, owner: string){
        this.repo$ = this.repoDetails
            .fetch({name: repoName, owner: owner})
            .pipe(
                map(res => res.data.repository))
            .subscribe(data => {
                this.repo = data
                console.log("Полученный репозиторй", this.repo)
            }, err => {
                console.log(err)
            }, () => {
                return this.repo
            })
    }

    getUserName(){
        return this.userName;
    }

    setUserName(username: string){
        this.userName=username
    }

    setLanguages(){
        let languageList = this.allRepos.map(el => el.node.primaryLanguage?.name)
            .filter(el => !!el)
        let languageSet = new Set(languageList)
        this.languageFilters=Array.from(languageSet)
        this.languageFilters = this.languageFilters.map(el => Object.create({name: el, checked: false}))
    }

    getLanguages(){
        return this.languageFilters;
    }

    setDates(){
        let dateYearList = this.allRepos.map(el => new Date(el.node.createdAt).getFullYear())
            .filter(el => !!el)
        let dateYearSet = new Set(dateYearList)
        this.dateFilters=Array.from(dateYearSet)
        this.dateFilters = this.dateFilters.map(el => Object.create({year: el, checked: false}))
        console.log(this.dateFilters)
    }

    getDates(){
        return this.dateFilters;
    }
    
}