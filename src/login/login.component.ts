import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService, Users } from '../servic/users.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// @Component({
//   selector: 'app-login',
//   imports: [FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   constructor(private usersService: UsersService, private router: Router)
//   {
//   }
//   userName:string = "";
//   password:string = "";
//   subject = '';


//   login(){
//     console.log('Username:', this.userName);
//     console.log('Password:', this.password);
//     const user = this.usersService.getUser(this.userName, this.password);

//     if (user) {

//       if (user.subject === 'teacher') {
//         this.router.navigate(['./teacher']);
//       } else if (user.subject === 'secretary') {
//         this.router.navigate(['./secretary']);
//       }
//     } else {
//       console.log(user)
//       console.log(this.userName)
//       console.log(this.password)
//       alert('שם משתמש או סיסמה לא נכונים');
//     }
//   }
// }
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    const user = this.usersService.getUser(userName, password);
    if (user) {
      localStorage.setItem("subject", user.subject);

      if (user.subject === 'teacher') {
        this.router.navigate(['./teacher']);
      } else if (user.subject === 'secretary') {
        this.router.navigate(['./secretary']);
      }
    } else {
      alert('שם משתמש או סיסמה לא נכונים');
    }
  }
}

