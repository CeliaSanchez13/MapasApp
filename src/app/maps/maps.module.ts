import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    AngularLogoComponent,
    SearchBarComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent //Indico que será el unico que va a ser visible (para poner la etiqueta en el HTML de app-component)
  ]
})
export class MapsModule { }
