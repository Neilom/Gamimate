import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivComponent } from './div/div.component';
import { HomeComponent } from './home/home.component';
import { MultComponent } from './mult/mult.component';
import { RandComponent } from './rand/rand.component';
import { SomaComponent } from './soma/soma.component';
import { SubComponent } from './sub/sub.component';

const routes: Routes = [
  {
    path: "soma",
    component: SomaComponent
  },
  {
    path: "sub",
    component: SubComponent
  },
  {
    path: "mult",
    component: MultComponent
  },
  {
    path: "div",
    component: DivComponent
  },
  {
    path: "rand",
    component: RandComponent
  },
  {
    path: "",
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
