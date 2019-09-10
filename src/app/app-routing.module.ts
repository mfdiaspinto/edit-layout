import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditLayoutComponent } from './components/edit-layout/edit-layout.component';

const routes: Routes = [
    { path: 'edit', component: EditLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
