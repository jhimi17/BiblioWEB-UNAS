import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';


export const routes: Routes = [
 /*  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'private',
  }, */
  {
    path: 'private',
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/private.module').then(p => p.PrivateModule),
      },
    ],
  },
  {
    path: 'public',
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
