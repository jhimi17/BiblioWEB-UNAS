import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertServise } from '../../shared/services/alert.service';
import { SliderComponent } from '../components/slider/slider.component';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})

export class ReserveComponent {
  
  formReserve: FormGroup;
  status = true;

  constructor(
    public _dialogRef: MatDialogRef<SliderComponent>,
    private _fb: FormBuilder,
    private alertService: AlertServise
  ) {

    this.formReserve = this._fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      area: ['', Validators.required],
      details: ['']
    });

  }

  sendReserve(){
    if(this.formReserve.invalid){
      this.status=false;
    }else{
      this.alertService.showAlert('Envio exitoso!');
      this._dialogRef.close();
    }
  }

  libro = {
    urlImagen: '../assets/img/img_1.jpg',
    disponible: true,
    titulo: 'Programación para principiantes',
    autor: 'Alexander Cane',
    area: 'Informática',
    codigo: 'LIB0001UNAS',
    edicion: 'Primera edición',
    fechaReserva: '01/01/2023' 
  };
}
