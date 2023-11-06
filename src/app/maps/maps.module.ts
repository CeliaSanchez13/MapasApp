import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent //Indico que será el unico que va a ser visible (para poner la etiqueta en el HTML de app-component)
  ]
})
export class MapsModule { }
