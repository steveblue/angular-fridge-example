
export interface GroceryItem {
  type: number;
  id: string;
  name: string;
}

export interface FridgeStock {
    maxQuantity: number;
    uiName: string;
    items: GroceryItem[];
}

export interface Fridge {
   stock: { [key: string]: FridgeStock }
}
