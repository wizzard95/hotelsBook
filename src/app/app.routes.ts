import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

/*  //* almacenar en una constante un arreglo de rutas y
    * lo exporto para que quede disponible en la app
*/ 
export const routes: Routes = [

    {path: '', component: HomeComponent}
];
