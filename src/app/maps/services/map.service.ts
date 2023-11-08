import { Injectable } from '@angular/core';
import { LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?:Map;
  private markers: Marker[] = [];

  get isMapReady(){
    return !!this.map;
  }

  setMap( map: Map ){
    this.map = map;
  }

  flyTo( coords: LngLatLike ){ //Nos moveremos hacia las nuevas coordenadas
    if( !this.isMapReady ) throw Error('El mapa no esta inizializado');

    this.map?.flyTo({
      zoom: 14,
      center: coords 
    });
  }

  createMarkersFromPlaces( places: Feature[], userLocation:[number, number]){
    if( !this.map ) throw Error('Mapa no inicializado');
    

    this.markers.forEach( marker => marker.remove()); //Hacemos limpieza por si hubiera antes alguna info cargada
    const newMarkers = [];

    for(const place of places ){
      const [lng, lat] = place.center;
      const popup = new Popup()
        .setHTML(`
          <h6>${place.text}</h6>
          <span>${place.place_name}</span>
        `);
      const newMarker = new Marker()
        .setLngLat([lng,lat])
        .setPopup(popup)
        .addTo( this.map );

      newMarkers.push( newMarker );
    }

    this.markers = newMarkers; 

    if( places.length === 0 ) return;
    //Limites del mapa
    const bounds = new LngLatBounds();
    newMarkers.forEach( marker => bounds.extend( marker.getLngLat()));
    bounds.extend( userLocation );

    //Busca la LAT,LNG del objeto que le indiquemos. En este caso nos pondrá un padding de 200px en alrededor
    this.map.fitBounds(bounds, {
      padding:200
    })

  }

}
