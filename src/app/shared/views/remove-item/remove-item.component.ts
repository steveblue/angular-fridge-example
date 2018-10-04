import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ColdStorageService, ColdStorageEvent } from './../../services/cold-storage.service';

@Component({
  selector: 'app-remove-item',
  templateUrl: './remove-item.component.html',
  styleUrls: ['./remove-item.component.scss']
})
export class RemoveItemComponent {

  public form: FormGroup;
  public groceries: string[];
  public isDone: boolean = false;

  constructor(private _fb: FormBuilder,
              private _storage: ColdStorageService) {

    this.reset();

    this._storage.emitter.subscribe((ev: ColdStorageEvent) => {
      if (ev.type === 'DELETE') {
        console.log(ev);
        this.isDone = true;
        setTimeout(() => { this.reset(); }, 2000)
      }
    });

  }

  reset() {

    this.isDone = false;
    this.groceries = this._storage.getAllUUID();
    this.form = this._fb.group({
      'uuid': ['', [ Validators.required,
                     Validators.pattern(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i) ]]
    });

  }

  onSubmit() {
    if (this.form.valid) {
      this._storage.removeItem(this.form.value['uuid']);
    }
  }

}
