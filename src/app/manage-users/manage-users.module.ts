import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '@shared/services/users.service';
import { UsersListComponent } from './users-list/users-list.component';
import { ManageUsersRoutingModule } from './manage-users-router.module';
import { ManageUsersComponent } from './manage-users.component';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [
    ManageUsersComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ManageUsersRoutingModule
  ],
  providers: [UsersService]
})
export class ManageUsersModule { }
