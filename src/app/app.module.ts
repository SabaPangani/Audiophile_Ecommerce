import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductAdComponent } from './pages/home/product-ad/product-ad.component';
import { BeforeFooterComponent } from './components/before-footer/before-footer.component';
import { CatHeroComponent } from './pages/category/cat-hero/cat-hero.component';
import { ProductsShowcaseComponent } from './pages/category/products-showcase/products-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CategoryComponent,
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    ProductAdComponent,
    BeforeFooterComponent,
    CatHeroComponent,
    ProductsShowcaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
