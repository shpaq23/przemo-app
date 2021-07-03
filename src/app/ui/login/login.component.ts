import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserHttpResource } from 'src/app/infrastructure/user/user.http.resource';
import { UserRequest } from 'src/app/infrastructure/user/user.request';
import { UserStorage } from 'src/app/api/user.storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  @Output()
  logged = new EventEmitter<boolean>();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required])
  })


  constructor(private readonly userHttpResource: UserHttpResource,
              private readonly userStorage: UserStorage) {
  }

  ngOnInit(): void {

  }

  login(): void {
    const email = this.loginForm.get('email')?.value;
    const request: UserRequest = { email };
    this.userHttpResource.login(request)
        .subscribe(user => {
          this.userStorage.setUser(user);
          this.logged.emit(true);
        });
  }

}
