import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirectGuard } from './shared/components/redirect/redirect.component';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { MaterialDidaticoComponent } from './material-didatico/material-didatico.component';
import { AuthGuard } from './core/auth/auth.guard';
import { NoAuthGuard } from './core/auth/noAuth.guard';
import { AllMaterialDidaticoComponent } from './material-didatico/all-material-didatico.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'materialdidatico',
    component: MaterialDidaticoComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'allmaterials',
    component: AllMaterialDidaticoComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'youtube',
    canActivate: [NoAuthGuard, RedirectGuard],
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

