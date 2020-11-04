import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  {path: 'heroes', component: HeroListComponent},
  {path: 'hero/:id', component: HeroDetailComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
