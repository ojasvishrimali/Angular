import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesMockingComponent } from './categories-mocking/categories-mocking.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path:'',component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'main', component: MainComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'mocking',component: CategoriesMockingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
