import { NgModule } from '@angular/core';
import { SignInComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../shared/components/loader/loader.module';
@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    LoaderModule
  ]
})
export class SigninModule { }