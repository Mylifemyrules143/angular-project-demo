import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';

const routes: Routes = [

{path:'firstcomponent',component:FirstComponent},
{path:'secondcomponent',component:SecondComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
