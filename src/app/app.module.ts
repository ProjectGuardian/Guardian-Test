import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { fakeBackendProvider } from './_helpers';
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule} from 'angularfire2/firestore'


import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { AdminComponent } from './admin/admin.component';

import { environment } from 'environments/environment';
import { ItemsComponent } from './items/items.component';
import {ItemService} from './_services/item.service';
import { AddPostComponent } from './add-post/add-post.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        AngularFireModule.initializeApp(environment.firebase,'angularfs'),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        FormsModule,
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        AdminComponent,
        ItemsComponent,
        AddPostComponent,

       
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        fakeBackendProvider,ItemService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };