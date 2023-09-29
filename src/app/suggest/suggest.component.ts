import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListComponent } from '../list/list.component';
import { AlertServise } from '../components/services/alert.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent{
  
  formSuggest: FormGroup;
  status = true;

  constructor(
    public _dialogRef: MatDialogRef<ListComponent>,
    private _fb: FormBuilder,
    private alertService: AlertServise
  ) {

    this.formSuggest = this._fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      area: ['', Validators.required],
      details: ['']
    });

  }

  sendSuggest(){
    if(this.formSuggest.invalid){
      this.status=false;
    }else{
      this.alertService.showAlert('Envio exitoso!');
      this._dialogRef.close();
    }
  }
}
