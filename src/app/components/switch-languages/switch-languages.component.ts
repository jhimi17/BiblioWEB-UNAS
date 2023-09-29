import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-switch-languages',
  templateUrl: './switch-languages.component.html',
  styleUrls: ['./switch-languages.component.css']
})
export class SwitchLanguagesComponent {

  options = [
    {value: 'es', display: 'Español'},
    {value: 'en', display: 'English'},
    {value: 'po', display: 'Portugués'},
    {value: 'ru', display: 'Ruso'},
  ]

  constructor(private translate: TranslateService){}

  onchange = (event: Event) => {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
  }
}
