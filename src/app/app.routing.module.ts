import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirectGuard } from './shared/components/redirect/redirect.component';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'youtube',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://www.youtube.com/@Trakto'
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

