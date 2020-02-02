import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlumnoGuardGuard } from './services/guards/alumno-guard.guard';
import { LoginQuizComponent } from './login-quiz/login-quiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { PrincipalComponent } from './principal/principal.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: LoginQuizComponent },
  { path: 'quiz', component: QuizComponent, canActivate: [AlumnoGuardGuard] },
  {
    path: 'administracion',
    component: AdministracionComponent,
    canActivate: [LoginGuardGuard],
    loadChildren: './administracion/administracion.module#AdministracionModule'
  },
  {
    path: '',
    component: PrincipalComponent,
    loadChildren: './principal/principal.module#PrincipalModule'
  },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
