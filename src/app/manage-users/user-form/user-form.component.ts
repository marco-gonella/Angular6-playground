import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { UsersService } from '@shared/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '@shared/interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() operation: string;
  @Input() user: User;
  @Output() updateUser: EventEmitter<User> = new EventEmitter();

  formUser: User; // per template driven form
  // reactiveForm: FormGroup;
  validateRequired: boolean = false;// abilita validazione required con label

  constructor(public usersService: UsersService,
    // private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formUser = { ...this.user };

    // this.reactiveForm = this.fb.group({
    //   name: ['', [Validators.pattern('[A-Z][\w]+'), Validators.required]],

    //   surname: ['', [Validators.pattern('[A-Z][\w]+'), Validators.required]],
    //   email: ['', [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'), Validators.required]]
    // });
  }

  save(form) {

    if (form.invalid) { // blocca salvataggio
      console.error("Form non valida")
    } else {
      console.log(form)
      switch (this.operation) {
        case 'modify':
          this.usersService.modifyUser({ ...form.value, id: this.user.id })
            .then(() => {
              this.updateUser.emit({ ...this.user, ...form.value });
            }, () => {
              console.error("can't update")
            })
          break;
        case 'add':
          this.usersService.addUser(form.value).then(() => {
            this.validateRequired = false;
            this.formUser = {
              id: null,
              name: '',
              surname: '',
              email: ''
            };
          })
          break;
        default:
      }
    }
  }

}
