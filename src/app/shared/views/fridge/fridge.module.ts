import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';

import { FridgeComponent } from './fridge.component';

import { ColdStorageService } from './../../services/cold-storage.service';

@NgModule({
  imports:      [ RouterModule ],
  declarations: [ FridgeComponent ],
  providers: [ ColdStorageService ]
})

export class FridgeModule {}
