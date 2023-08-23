import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
// import { Page404Component } from './views/pages/page404/page404.component';
// import { Page500Component } from './views/pages/page500/page500.component';
// import { LoginComponent } from './views/pages/login/login.component';
// import { RegisterComponent } from './views/pages/register/register.component';

// @ts-ignore
// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: '',
    redirectTo: 'history',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'customize',
        loadChildren: () =>
            import('./views/customize/customize.module').then((m) => m.CustomizeModule)
      },
      {
        path: 'history',
        loadChildren: () =>
            import('./views/history/history.module').then((m) => m.HistoryModule)
      },
      {
        path: 'image_table',
        loadChildren: () =>
            import('./views/image_table/image_table.module').then((m) => m.Image_tableModule)
      },
      {
        path: 'matrix',
        loadChildren: () =>
            import('./views/matrix/matrix.module').then((m) => m.MatrixModule)
      }
    ]
  },
  // {path: '**', redirectTo: 'charts'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // @ts-ignore
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
