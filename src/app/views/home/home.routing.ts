import { Routes } from '@angular/router';
import { SearchComponent } from 'src/app/shared/search/search.component';
import { HomeComponent } from './home.component';


export const HomeRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent,
                data: { title: 'Home' },
            },
            {
                path: 'search',
                component: SearchComponent,
                data: { breadcrumb: 'Search'},
            }
        ] 
    },
];