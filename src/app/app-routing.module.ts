import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleAnimComponent } from 'src/app/simple-anim/simple-anim.component';
import { AngularAnimComponent } from 'src/app/angular-anim/angular-anim.component';
import { RouterAnimComponent } from 'src/app/router-anim/router-anim.component';

const routes: Routes = [
  { path: 'simple', component: SimpleAnimComponent, data: { animation: 'SimplePage' } },
  { path: 'angular', component: AngularAnimComponent, data: { animation: 'AngularPage' } },
  { path: 'router', component: RouterAnimComponent, data: { animation: 'RoutePage' } },
  { path: '**', component: SimpleAnimComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
