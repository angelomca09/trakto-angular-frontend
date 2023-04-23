import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RedirectGuard } from './shared/components/redirect/redirect.component';

import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';
import { SigninModule } from './signin/signin.module';
import { HomeModule } from './home/home.module';
import { MaterialDidaticoModule } from './material-didatico/material-didatico.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    ErrorsModule,
    SigninModule,
    HomeModule,
    MaterialDidaticoModule
  ],
  providers: [RedirectGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
