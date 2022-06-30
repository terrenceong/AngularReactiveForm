import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StartReactiveFormComponent } from './practices/start-reactive-form/start-reactive-form.component';
import { AssignmentReactiveFormComponent } from './assignment/assignment-reactive-form/assignment-reactive-form.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes =[{path:'practice',component:StartReactiveFormComponent},
{path:'assignment',component:AssignmentReactiveFormComponent}];
@NgModule({
  declarations: [
    AppComponent,
    StartReactiveFormComponent,
    AssignmentReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
