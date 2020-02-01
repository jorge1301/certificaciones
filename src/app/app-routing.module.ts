import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlumnoGuardGuard } from './services/guards/alumno-guard.guard';
import { LoginQuizComponent } from './login-quiz/login-quiz.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: LoginQuizComponent },
  { path: 'quiz', component: QuizComponent, canActivate: [AlumnoGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
