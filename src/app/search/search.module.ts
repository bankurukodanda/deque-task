import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SearchComponent, FilterPipe],
  imports: [
    CommonModule, SearchRoutingModule, FormsModule
  ]
})
export class SearchModule { }
