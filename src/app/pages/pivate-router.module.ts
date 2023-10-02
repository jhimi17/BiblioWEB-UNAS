import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './layout/page-layout.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ReserveComponent } from './reserve/reserve.component';
import { SuggestComponent } from './suggest/suggest.component';



const routes: Routes = [{

  path: '',
  component: PageLayoutComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'list',
      component: ListComponent,
    },
    {
      path: 'reserve',
      component: ReserveComponent,
    },
    {
      path: 'suggest',
      component: SuggestComponent,
    },
  ],
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRouterModule { }
