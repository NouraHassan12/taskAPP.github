import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ItemsComponent } from './Components/items/items.component';
import { RggisterComponent } from './Components/rggister/rggister.component';


const routes: Routes = [
  {path:'' , pathMatch:'full',redirectTo:'registetrer'},
  {path:'home' , component:HomeComponent},
  {path:'items' , component:ItemsComponent},
  {path:'registetrer',component:RggisterComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
