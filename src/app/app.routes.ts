import { Routes } from '@angular/router';
import { Homepage } from './Core/homepage/homepage';

export const routes: Routes = [
    {
        path: '', 
         redirectTo: 'nizamk/homepage', 
         pathMatch: 'full' 
    },
    {
        path: 'nizamk/homepage',
        component: Homepage
    },
];
