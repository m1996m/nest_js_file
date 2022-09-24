import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UplaodComponent} from "./uplaod/uplaod.component";

const routes: Routes = [
  {path:'upload',component:UplaodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
