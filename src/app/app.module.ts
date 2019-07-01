import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider, AuthGuard } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductObjectComponent } from './product-object/product-object.component';
import { CapitalizePipe } from './capitalize.pipe';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartComponent } from './chart/chart.component';
// import { AppRoutingModule } from './app-routing.module';
// import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule, 
        // AppRoutingModule, 
        FormsModule
        // RouterModule.forRoot([
        //     { path: '', component: HomeComponent, canActivate: [AuthGuard] },
        //     { path: 'login', component: LoginComponent },
        //     { path: 'register', component: RegisterComponent },
        //     { path: '**', redirectTo: '' }
        //   ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent, 
        ProductObjectComponent,
        ProductDetailComponent,
        CapitalizePipe,
        ProductEditComponent,
        ProductNewComponent,
        PageNotFoundComponent,
        ChartComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };