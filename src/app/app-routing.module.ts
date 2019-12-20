import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './@pages/characters/characters.component';
import { VotesComponent } from './@pages/votes/votes.component';


const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'votes',
    component: VotesComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'characters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
