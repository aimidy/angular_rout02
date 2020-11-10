import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';
// import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: 'crisis-center', component: CrisisListComponent},
  // {path: 'heroes', component: HeroListComponent},
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup',
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  // {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, { enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
