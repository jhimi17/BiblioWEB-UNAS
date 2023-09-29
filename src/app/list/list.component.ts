import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuggestComponent } from '../suggest/suggest.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  constructor(public _dialog: MatDialog,) {

  }

  OpenSuggest() {
    const searchModal = this._dialog.open(SuggestComponent, {
      disableClose: true,
    });
    searchModal.beforeClosed();
  }
 
}
