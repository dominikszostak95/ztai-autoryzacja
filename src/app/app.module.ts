import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from
        '@angular/common/http';
import {AuthInterceptor} from './services/auth/auth.interceptor';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { SummaryPipe } from './summary.pipe';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from "./services/auth.service";
import { AdminGuard } from './services/admin-guard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { TextFormatDirective } from './directives/text-format.directive';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contact",
      component: QuizComponent,
      canActivate: [AdminGuard],
      data: {state: 'admin'}
  },
  {
    path: "quiz",
    component: QuizComponent
  },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
  {
    path: "blog",
    component: BlogHomeComponent
  },
  {
    path: "blog/details/:id",
    component: BlogItemDetailComponent
  },
    {
      path: "blog/create",
      component: BlogCreateComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponent,
    AppNavbarComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailComponent,
    SummaryPipe,
    FilterPipe,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective,
    BlogCreateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
	FormsModule,
	ReactiveFormsModule
  ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        [AuthService],
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
