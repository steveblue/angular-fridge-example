
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing }       from './app.routes';

import { AddItemModule } from './shared/views/add-item/add-item.module';
import { FridgeModule } from './shared/views/fridge/fridge.module';
import { RemoveItemModule } from './shared/views/remove-item/remove-item.module';

@NgModule({

    imports: [ BrowserModule,
               CommonModule,
               FridgeModule,
               AddItemModule,
               RemoveItemModule,
               routing],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}
