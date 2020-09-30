import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './components/login/login.module';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {httpInterceptProviders} from './httpInterceptors/HttpInteceptProviders';
import {DefaultErrorHandler} from './errorHandlers/default-error-handler';
import {AuthErrorHandler} from './errorHandlers/auth-error-handler';
import {ValidationErrorHandler} from './errorHandlers/validation-error-handler';
import {InternalServerErrorHandler} from './errorHandlers/internal-server-error-handler';
import {NotFoundErrorHandler} from './errorHandlers/not-found-error-handler';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import {RoomsListModule} from './components/rooms-list/rooms-list.module';
import { RoomViewComponent } from './components/room-view/room-view.component';
import {RoomViewModule} from './components/room-view/room-view.module';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: RoomsListComponent},
  {path: 'room/:roomId', component: RoomViewComponent},
  {path: '**', redirectTo:"/login"},
]


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en'
    }),
    LoginModule,
    RoomsListModule,
    RoomViewModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    MessageService,
    httpInterceptProviders,
    DefaultErrorHandler,
    AuthErrorHandler,
    ValidationErrorHandler,
    InternalServerErrorHandler,
    NotFoundErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
