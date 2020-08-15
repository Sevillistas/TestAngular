import { Injectable } from '@angular/core'

@Injectable()
export class PagerService {

    private currentPage: number = 1

    private totalPages: number

    private pageSize: number = 5

    private totalItemsCount: number

    private totalItems: any = []

    private pagedItems: any

    private startIndex: number

    private endIndex: number

    private startBorder: number

    private endBorder: number

    setPagerPreferences(totalItems = [], pageSize = 5){
        this.totalItems=totalItems
        this.totalItemsCount=totalItems?.length
        this.pageSize=pageSize
        this.setTotalPages()
        this.setBorders()
        this.setStartIndex()
        this.setEndIndex()
        this.setPagedItems()
    }

    previousPage(){
        if (this.currentPage <= 1) { 
            this.currentPage = 1; 
        } else {
            this.currentPage--
        }
        this.setStartIndex()
        this.setEndIndex()
        this.setPagedItems()
    }
    
    nextPage(){
        if (this.currentPage >= this.totalPages) { 
            this.currentPage = this.totalPages; 
        } else {
            this.currentPage++
        }
        this.setStartIndex()
        this.setEndIndex()
        this.setPagedItems()
    }

    setTotalPages(){
        this.totalPages=Math.ceil(this.totalItemsCount / this.pageSize)
    }

    getTotalPages(){
        return this.totalPages
    }

    setStartIndex(){
        this.startIndex = (this.currentPage - 1) * this.pageSize
    }

    setEndIndex(){
        this.endIndex = Math.min(this.startIndex + this.pageSize - 1, this.totalItemsCount - 1)
    }

    setPagedItems(){
        this.pagedItems = this.totalItems.slice(this.startIndex, this.endIndex + 1)
    }

    getPagedItems(){
        return this.pagedItems
    }

    setBorders(){
        this.startBorder=1
        this.endBorder=this.totalPages
    }

    refreshCurrentPage(){
        this.currentPage=1
    }

    refreshPagerPreferences(){
        this.totalItems=[]
        this.totalItemsCount=this.totalItems?.length
        this.pageSize=5
        this.totalPages = 0
        this.startIndex = 0
        this.endIndex = 0
    }

    getCurrentPage(){
        return this.currentPage
    }

    getStartBorder(){
        return this.startBorder
    }

    getEndBorder(){
        return this.endBorder
    }
}