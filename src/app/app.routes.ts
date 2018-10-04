import { AddItemComponent } from './shared/views/add-item/add-item.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FridgeComponent } from './shared/views/fridge/fridge.component';
import { RemoveItemComponent } from './shared/views/remove-item/remove-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'stock/add', pathMatch: 'full' },
  { path: 'stock', component: FridgeComponent, children: [
    {
      path: 'add', component: AddItemComponent
    },
    {
      path: 'remove', component: RemoveItemComponent
    }
  ] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);