import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { extract } from './core';
import { UnauthorisedComponent } from './shared/unauthorized/unauthorized.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'add', loadChildren: 'app/add/add.module#AddModule' },
    { path: 'view', loadChildren: 'app/view/view.module#ViewModule' },
    { path: 'user', loadChildren: 'app/profile/profile.module#ProfileModule' },
    { path: 'how-it-works', loadChildren: 'app/how-it-works/how-it-works.module#HowItWorksModule' },
    { path: 'not-found', component: NotFoundComponent, data: { title: extract('Page not found! :(') } },
    { path: 'unauthorized', component: UnauthorisedComponent, data: { title: extract('Unauthorised Access') } }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
