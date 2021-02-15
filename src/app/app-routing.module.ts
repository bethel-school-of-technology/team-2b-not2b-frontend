import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/user-auth/login-page/login-page.component';
import { SignupPageComponent } from './components/user-auth/signup-page/signup-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SkillTanjiroComponent } from './components/skill-tanjiro/skill-tanjiro.component';
import { SkillNezukoComponent } from './components/skill-nezuko/skill-nezuko.component';
import { SkillKamadoComponent } from './components/skill-kamado/skill-kamado.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup-page', component: SignupPageComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'skill-tanjiro', component: SkillTanjiroComponent },
  { path: 'skill-nezuko', component: SkillNezukoComponent },
  { path: 'skill-kamado', component: SkillKamadoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
