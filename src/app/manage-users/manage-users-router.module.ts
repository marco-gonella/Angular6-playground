import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUsersComponent } from './manage-users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersResolver } from '../shared/resolvers/users.resolve';

const routes: Routes = [
    {
        path: '',
        component: ManageUsersComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },
            {
                path: 'list',
                component: UsersListComponent
            },
            {
                path: 'list/:userId',
                component: UserDetailsComponent,
                resolve: {
                    user: UsersResolver
                }
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [UsersResolver]
})

export class ManageUsersRoutingModule { };


