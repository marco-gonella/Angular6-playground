import { Component, OnInit } from '@angular/core';
import { UsersService } from '@shared/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<any>;
  enableDelete: boolean = false;

  constructor(public usersService: UsersService) {
    this.users$ = this.usersService.getUsers();
  }

  ngOnInit() {
  }

  deleteSelectedUsers(users) {
    users.forEach(user => {
      if (user.selected) {
        this.usersService.deleteUser(user)
      }
    });
  }
}
