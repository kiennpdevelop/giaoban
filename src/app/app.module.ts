
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/shared/interceptor/token.interceptor';

const appRoutes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'todo', component: TodoComponent,
    canActivate: [
      AuthGuard,
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TodoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [
    // MenuIte
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor,  multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
