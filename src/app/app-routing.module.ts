import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesListComponent} from "./games-list/games-list.component";
import {GameComponent} from "./game/game.component";

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo : '/games' },
                        { path: 'games', component: GamesListComponent },
                        { path: 'game/:gameId', component: GameComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
