import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core'
import { AlertServise } from './components/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biblio_web';
  sidebarExpanded = true;
  showAlert = false;
  message = '';

  constructor(
    private translate: TranslateService,
    private alertService: AlertServise
    
    ) {
    this.translate.addLangs(['en', 'es']);
    const lang = this.translate.getBrowserLang();
    if(lang != 'en' && lang != 'es') {
      this.translate.setDefaultLang('es');
    } else {
      this.translate.use(lang);
    }
    this.alertService.alert$.subscribe( (res: any) => {
      this.message = res.message;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false
      }, res.time);
    })
  }

}
