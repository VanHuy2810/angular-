import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListprComponent } from './listpr/listpr.component';
import { AddprComponent } from './addpr/addpr.component';
import { EditprComponent } from './editpr/editpr.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'listpr', component: ListprComponent },
  { path: 'newpost', component: NewPostComponent },
  { path: 'addpr', component: AddprComponent },
  { path: 'post', component: PostComponent },
  { path: 'listpr/:id', component: EditprComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ProductComponent,
  PageNotFoundComponent,
  ProductDetailComponent,
  LoginComponent,
  RegisterComponent,
  ListprComponent,
  AddprComponent,
  EditprComponent,
  NewPostComponent,
  PostComponent,
];
