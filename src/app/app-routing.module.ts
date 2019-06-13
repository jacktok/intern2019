import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NotifyPageComponent } from './notify-page/notify-page.component';

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "notify/:id", component: NotifyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
