import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { authGuard } from './service/auth.guard';
// import { adminGuard } from './service/admin.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];
// canActivate:[adminGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
