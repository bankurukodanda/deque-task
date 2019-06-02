import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'search',
  loadChildren: './search/search.module#SearchModule'
},{
  path:'detail/:ccode',
  loadChildren: './detail/detail.module#DetailModule'
},{
  path:'*',
  loadChildren: './search/search.module#SearchModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
