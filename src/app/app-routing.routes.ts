import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AiAssistantComponent } from './pages/ai-assistant/ai-assistant.component';
import { ReportWritingComponent } from './pages/report-writing/report-writing.component';
import { TaskVisualizationComponent } from './pages/task-visualization/task-visualization.component';
import { AiCodingComponent } from './pages/ai-coding/ai-coding.component';
import { RiskAssessmentComponent } from './pages/risk-assessment/risk-assessment.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'asistente-ia', component: AiAssistantComponent },
      { path: 'redaccion-informes', component: ReportWritingComponent },
      { path: 'visualizacion-tareas', component: TaskVisualizationComponent },
      { path: 'codificacion-ia', component: AiCodingComponent },
      { path: 'evaluacion-riesgos', component: RiskAssessmentComponent },
      { path: '', redirectTo: 'asistente-ia', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }