import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemListComponent } from './components/views/item-list/item-list.view';
import { HomeComponent } from './components/home/home.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Home Route,
  },
  {
    path: 'item-list',
    component: ItemListComponent // Item-List View Route,
  },
  { path: '**', component: HomeComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule { }
>>>>>>> bca3a670f671be1504af303d572ef3e6002c57bc
