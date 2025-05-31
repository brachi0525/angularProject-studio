import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LessonsListComponent } from '../lessons-list/lessons-list.component';
import { RegisterationComponent } from '../registeration/registeration.component';
import { authGuard } from '../auth.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'teacher', component: LessonsListComponent },
    { path: 'secretary', component: RegisterationComponent ,canActivate:[authGuard]  },
];
