import { CategoriesJdbcComponent } from './categories-jdbc/categories-jdbc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesMockingComponent } from './categories-mocking/categories-mocking.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { CategoriesTestingComponent } from './categories-testing/categories-testing.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
  { path: 'sidenavbar', component: SideNavbarComponent },
  { path: 'categories', component: CategoriesComponent },
  {
    path: 'testing',
    component: CategoriesTestingComponent,
  },
  { path: 'mocking', component: CategoriesMockingComponent },
  { path: 'jdbc', component: CategoriesJdbcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
