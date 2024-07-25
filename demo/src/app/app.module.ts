import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListprComponent } from './listpr/listpr.component';
import { AddprComponent } from './addpr/addpr.component';
import { EditprComponent } from './editpr/editpr.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    ProductService,
    PostService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
