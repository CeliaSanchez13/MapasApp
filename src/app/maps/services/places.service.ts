import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api/placesApiClient';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  userLocation?: [number,number] | undefined ;

  isLoadingPlaces:boolean = false;
  places:Feature[] = [];



  get isUserLocationReady():boolean{
    return !!this.userLocation;
    // Si la variable tiene ! significa QUE NO TIENE NINGUN VALOR
    // Si la variable tiene !! seria un true, que EXISTE Y TIENE UN VALOR
  }

  constructor( private placesApi: PlacesApiClient ) {
    this.getUserLocation();
   }


  //METODOS
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


  getPlacesByQuery( query: string = '' ) {


    if ( !this.userLocation ) throw Error('No hay userLocation');

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${ query }.json`, {
      params: {
        proximity: this.userLocation.join(',')
      }
    })
      .subscribe( resp => {
        this.isLoadingPlaces = false;
        this.places = resp.features;
        console.log(resp.features);
      });

  }



}
