import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesMockingComponent } from './categories-mocking/categories-mocking.component';
import { MatListModule } from '@angular/material/list';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CategoriesTestingComponent } from './categories-testing/categories-testing.component';
import { CategoriesJdbcComponent } from './categories-jdbc/categories-jdbc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    CategoriesComponent,
    CategoriesMockingComponent,
    SideNavbarComponent,
    CategoriesTestingComponent,
    CategoriesJdbcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
