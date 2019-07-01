import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { ProductObjectComponent } from './product-object/product-object.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ChartComponent } from './chart/chart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }, 
    {path: 'products', component : ProductObjectComponent},
    {path: 'product/:id/:product', component: ProductDetailComponent}, 
    {path: "product/edit/:id", component: ProductEditComponent},
    {path: "product/new", component: ProductNewComponent},
    {path: "products/chart/:typeOfChart", component: ChartComponent}
    // {path: "**", component: PageNotFoundComponent}
];

export const appRoutingModule = RouterModule.forRoot(routes);