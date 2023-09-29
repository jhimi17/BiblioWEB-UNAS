import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})

export class AlertServise {

  private alertSource = new Subject();
  alert$ = this.alertSource.asObservable();
  constructor() { }

  showAlert(message: string, time: number = 2500){
    this.alertSource.next({message, time});
  
  }

}