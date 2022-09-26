import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';



export const RootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        data: {
            breadcrumb: {
                label: 'Inicio',
                info: 'home'
            }
        },

    },
    {
        path: 'home',
        component: LayoutComponent,
        data: { breadcrumb: { skip: true, alias: '' } },
        children: [
            {
                path: '',
                loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/'
    },
];
