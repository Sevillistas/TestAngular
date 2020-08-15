import { Injectable } from '@angular/core'

@Injectable()
export class FilterService {
    
    private chosenFilters: Set<String> = new Set()

    private chosenLanguages = []

    private chosenDate: any = null

    private filteredItems = []

    private filtersIsVisilbe: boolean = false

    checkChosenFilters(typeOfFilter: string){
        switch(typeOfFilter){
            case "Language":{
                if(this.chosenLanguages.length){
                    this.chosenFilters.add(typeOfFilter)
                } else {
                    this.chosenFilters.delete(typeOfFilter)
                }
                break
            }
            case "Date": {
                if(this.chosenDate){
                    this.chosenFilters.add(typeOfFilter)
                } else {
                    this.chosenFilters.delete(typeOfFilter)
                }
                break
            }
            default:{
                return
            }
        }
        console.log("Используемые фильтры: ", this.chosenFilters)
    }

    addLanguage(languageName: string){
        this.chosenLanguages.push(languageName)
        console.log(`Добавлен элемент ${languageName} в ${this.chosenLanguages}`)
        this.checkChosenFilters("Language")
    }

    removeLanguage(languageName: string){
        this.chosenLanguages=this.chosenLanguages.filter(el => el !== languageName)
        console.log(`Удалён элемент ${languageName} из ${this.chosenLanguages}`)
        this.checkChosenFilters("Language")
    }

    addDate(date){
        this.chosenDate=date
        console.log("Выбрана дата", this.chosenDate)
        this.checkChosenFilters("Date")
    }

    removeDate(date){
        this.chosenDate=null
        console.log("Убрана дата", date)
        this.checkChosenFilters("Date")
    }

    getCountChosenLanguages(){
        return this.chosenLanguages.length;
    }

    filterItems(allItems){
        this.filteredItems=[...allItems]
        let filters = Array.from(this.chosenFilters)
        filters.forEach(filterName => {
            switch(filterName){
                case "Language": {
                    this.filteredItems = this.filteredItems
                        .filter(el => this.chosenLanguages.includes(el.node.primaryLanguage?.name))
                    break
                }
                case "Date": {
                    this.filteredItems = this.filteredItems
                        .filter(el => new Date(el.node.createdAt).getFullYear() === this.chosenDate)
                    break
                }
                default: {
                    break
                }
            }
        })
        return this.filteredItems
    }

    
    refreshFilters(){
        this.chosenFilters=new Set()
        this.chosenLanguages=[]
        this.chosenDate=null
        this.filteredItems=[]
    }

    setVisibleFilters(){
		this.filtersIsVisilbe=true
	}

	setInvisibleFilters(){
		this.filtersIsVisilbe=false
    }
    
    getFiltersVisibility(){
        return this.filtersIsVisilbe
    }
}