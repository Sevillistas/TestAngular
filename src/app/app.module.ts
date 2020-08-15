import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArrowComponent } from './arrow/arrow.component'
import { MainPageComponent } from './main-page/main-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryListItemComponent } from './repository-list-item/repository-list-item.component';
import { RepositoryCardComponent } from './repository-card/repository-card.component';
import { PagerComponent } from './pager/pager.component';
import { FilterFormComponent } from './filter-form/filter-form.component'
import { CheckboxSelectorComponent } from './svg/checkbox-selector/checkbox-selector.component'
import { RadioSelectorComponent } from './svg/radio-selector/radio-selector.component'
import { CheckboxItemComponent } from './checkbox-item/checkbox-item.component';

import { PagerService } from './services/pager.service';
import { RepositoryService } from './services/repository.service';
import { FilterService } from './services/filter.service';
import { RadioItemComponent } from './radio-item/radio-item.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DetailPageComponent,
    RepositoryListComponent,
    RepositoryListItemComponent,
    RepositoryCardComponent,
    ArrowComponent,
    PagerComponent,
    FilterFormComponent,
    CheckboxSelectorComponent,
    CheckboxItemComponent,
    RadioItemComponent,
    RadioSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    FormsModule
  ],
  providers: [
    PagerService,
    RepositoryService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
