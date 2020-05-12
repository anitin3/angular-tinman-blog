import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
const appRoutes:Routes=[
{path:'home',component:HomeComponent},
{path:'blog',component:BlogComponent},
{path:'',component:HomeComponent},

];
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, BlogComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
