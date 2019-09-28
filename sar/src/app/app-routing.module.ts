import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondScreenComponent } from './second-screen/second-screen.component';

const routes: Routes = [
  { path: 'second-screen', component: SecondScreenComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
  // {
  //   path: 'second-screen',
  //   component: SecondScreenComponent,
  //   data: { title: 'Heroes List' }
  // },
  // {
  //   path: '',
  //   redirectTo: '/welcome-screen',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
