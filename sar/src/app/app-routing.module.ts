import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';

const routes: Routes = [
  { path: 'first-screen', component: FirstScreenComponent },
  { path: 'second-screen', component: SecondScreenComponent },
  { path: 'third-screen', component: ThirdScreenComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
  // {
  //   path: 'second-screen',
  //   component: SecondScreenComponent,
  //   data: { title: 'Heroes List' }
  // },
  {
    path: '',
    redirectTo: '/first-screen',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
