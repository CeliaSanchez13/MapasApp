import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  userLocation: [number,number] | undefined ;
  get isUserLocationReady():boolean{
    return !!this.userLocation;
    // Si la variable tiene ! significa QUE NO TIENE NINGUN VALOR
    // Si la variable tiene !! seria un true, que EXISTE Y TIENE UN VALOR
  }

  constructor() {
    this.getUserLocation();
   }

  async getUserLocation(): Promise <[number,number]>{
    return new Promise( (resolve, reject ) => {
      navigator.geolocation.getCurrentPosition(
        ( {coords} ) => {
          this.userLocation = [coords.longitude, coords.latitude ];
          resolve(this.userLocation) //Accedemos directamente a las coordenadas dentro de la respuesta del get.
        },
        (error) => {
          alert('No se pudo obtener la geolocalizacion');
          console.log(error);
          reject();
        });
    });
  }



}
