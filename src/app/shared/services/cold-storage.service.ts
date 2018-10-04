import { GroceryItem, Fridge } from './../interfaces/fridge.interface';
import { Injectable, EventEmitter } from '@angular/core';

export interface ColdStorageEvent {
    type: string;
    payload: GroceryItem;
    stock: Fridge;
}
export const groceryMap = new Map([
  ['water', 1],
  ['milk', 2],
  ['coffee', 3],
  ['butter', 4],
  ['cheese', 5],
  ['chicken', 6],
  ['beef', 7],
  ['pork', 8],
  ['onion', 9],
  ['garlic', 10],
  ['tomato', 11],
  ['basil', 12]
]);

export const uuid = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

@Injectable({
  providedIn: 'root'
})
export class ColdStorageService {

  constructor() {
    this.groceries = {
      stock: {}
    }
  }

  public groceries: Fridge;
  public emitter: EventEmitter<ColdStorageEvent> = new EventEmitter();

  addItem(uiName: string) {
    if (!this.groceries.stock[groceryMap.get(uiName)]) {
      return;
    }
    const item = <GroceryItem>new Object();
    item.type = groceryMap.get(uiName);
    item.name = uiName;
    item.id = uuid();
    this.groceries.stock[groceryMap.get(uiName)].items.push(item);
    // TODO: send to API
    this.emitter.emit({
      type: 'ADD',
      payload: item,
      stock: this.groceries
    });

  }

  addQuantity(uiName: string, qty: number) {

    if (!this.groceries.stock[groceryMap.get(uiName)]) {
      this.groceries.stock[groceryMap.get(uiName)] = {
        maxQuantity: qty,
        uiName: uiName,
        items: []
      }
    } else {
      this.groceries.stock[groceryMap.get(uiName)].maxQuantity += qty;
    }

    for (let i=0; i<this.groceries.stock[groceryMap.get(uiName)].maxQuantity; i++) {
      this.addItem(uiName);
    }

  }


  removeItem(uuid: string) {
    for (let prop in this.groceries.stock) {
        const results = this.groceries.stock[prop].items.filter( item => { return item.id === uuid; });
        if (results.length > 0) {
          this.groceries.stock[prop].items = this.groceries.stock[prop].items.filter( item => { return item.id !== uuid; });
          // TODO: send to API
          // update view
          this.emitter.emit({
            type: 'DELETE',
            payload: results[0],
            stock: this.groceries
          });
        }
    }
  }

  getAllUUID() {
    let stock = [];
    for (let prop in this.groceries.stock) {
      stock = stock.concat(this.groceries.stock[prop].items.map(item => { return item.id; }));
    }
    return stock;
  }

}
