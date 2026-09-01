import { Routes } from '@angular/router';
import { Homepage } from './Core/homepage/homepage';
import { Workpage } from './Core/workpage/workpage';

export const routes: Routes = [
    {
        path: '', 
         redirectTo: 'home', 
         pathMatch: 'full' 
    },
    {
        path: 'home',
        component: Homepage
    },
    {
        path: 'home/work',
        component: Workpage
    }
];
