import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { groceryMap, ColdStorageService, ColdStorageEvent } from './../../services/cold-storage.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  public form: FormGroup;
  public groceries: string[];
  public isDone: boolean = false;

  constructor(private _fb: FormBuilder,
              private _storage: ColdStorageService) {

    this.reset();

    this._storage.emitter.subscribe((ev: ColdStorageEvent) => {

      if (ev.type === 'ADD') {
        console.log(ev);
        this.isDone = true;
        setTimeout(() => { this.reset(); }, 2000)
      }

    });


  }

  reset() {
    this.isDone = false;
    this.groceries = Array.from( groceryMap.keys() );
    this.form = this._fb.group({
      'uiName': ['water', [ Validators.required,
                     Validators.minLength(2),
                     Validators.maxLength(16) ]],
      'qty': ['', [ Validators.required,
                    Validators.pattern(/^\d+$/) ]]
    });

  }

  onSubmit() {
    if (this.form.valid) {
      this._storage.addQuantity(this.form.value['uiName'], parseInt(this.form.value['qty']));
    }
  }

}
