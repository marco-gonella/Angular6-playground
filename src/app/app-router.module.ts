import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { I18nComponent } from './I18n/I18n.component';
import { AuthService } from './shared/services/auth.service';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthService]
    },
    {
        path: 'users',
        //angular 8
        //loadChildren: () => import('./manage-users/manage-users.module').then(mod => mod.ManageUsersModule) 
 
        //angular 6
        loadChildren: './manage-users/manage-users.module#ManageUsersModule'
    },
    {
        path: 'i18n',
        component: I18nComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: false,
    })],
    exports: [RouterModule],
    providers: [AuthService]
})

export class AppRoutingModule { };


