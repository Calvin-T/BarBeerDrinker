import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers/beers.component';
import { InsightComponent } from './insight/insight.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { ModificationComponent } from './modification/modification.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'bars'
  },
  {
    path:'bars',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'bars/:bar',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path: 'beers/:beer',
    pathMatch: 'full',
    component: BeerDetailsComponent
  },
  {
    path: 'beers',
    pathMatch: 'full',
    component: BeersComponent
  },
  {
    path: 'insight',
    pathMatch: 'full',
    component: InsightComponent
  },
  {
    path: 'drinkers',
    pathMatch: 'full',
    component: DrinkersComponent
  },
  {
    path: 'drinkers/:drinker',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  },
  {
    path: 'modify',
    pathMatch: 'full',
    component: ModificationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
