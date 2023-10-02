import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRouterModule } from './pivate-router.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './layout/header/header.component'; 
import { ListComponent } from './list/list.component';
import { SuggestComponent } from './suggest/suggest.component';
import { ReserveComponent } from './reserve/reserve.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwitchLanguagesComponent } from './components/switch-languages/switch-languages.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { MatTooltipModule} from '@angular/material/tooltip'
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from './layout/page-layout.component';

register();

@NgModule({
 declarations: [PageLayoutComponent, HeaderComponent, ListComponent, SuggestComponent, ReserveComponent,HomeComponent,SidebarComponent, SliderComponent, SwitchLanguagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    PrivateRouterModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    TranslateModule
  ],
  exports:
  [
  PageLayoutComponent
  ]
})
export class PrivateModule { }
