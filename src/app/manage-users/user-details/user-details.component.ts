import { Component, OnInit } from '@angular/core';
import { UsersService } from '@shared/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '@shared/interfaces/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  currentUser: any;

  constructor(public usersService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.currentUser = data["user"];
    })
  }

  updateCurrentUser(newUser: User){
    this.currentUser = newUser;
  }

}
