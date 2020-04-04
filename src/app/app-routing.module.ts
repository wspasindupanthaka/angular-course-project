import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Recipe } from "./recipes/recipe.model";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
  // { path: 'users', component: UsersComponent, children : [
  //   { path: ':id/:name', component: UserComponent }
  // ] },
  //   { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children :[
  //   { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
  //   { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  // ] },
  // {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!!'}},
  // {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
