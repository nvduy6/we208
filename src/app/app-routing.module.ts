import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogupComponent } from './components/logup/logup.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  // {path:'',pathMatch:'full',redirectTo:'/login'},
  // {path:'login',component:LoginComponent},
  // {path:'welcome',component:WelcomeComponent},
  // {path:'product',component:ProductComponent},
  // {path:'product/add',component:ProductAddComponent}

  {
    path: 'admin',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full',
      },
      {
        path: "product",
        children: [
          {
            path: '',
            component: ProductComponent
          },
          {
            path: 'add',
            component: ProductAddComponent
          },
          {path:'edit/:id',
        component:ProductAddComponent}
        ]
      }
    ]
  },
  {path:'signup',
component:LogupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
