import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app/Main/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      
      {
        path: '',
        loadChildren: () => import('../app/Main/Products/Products.module').then(mod => mod.ProductsModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../app/Main/Products/Products.module').then(mod => mod.ProductsModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../app/Main/Categories/Categories.module').then(mod => mod.CategoriesModule)
      },
      {
        path: 'vendors',
        loadChildren: () => import('../app/Main/Vendors/Vendors.module').then(mod => mod.VendorsModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
