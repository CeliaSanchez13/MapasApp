import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import {Map, Marker, Popup} from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit{

   //Busca algo con la refencia local que le indicamos
  @ViewChild('mapDiv') mapDivElement!: ElementRef

  constructor( private placesService: PlacesService,
               private mapService: MapService ){}

  ngAfterViewInit(): void {
    if ( !this.placesService.userLocation) throw Error('No hay placesService.userLog');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
      });

      const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);
      
      new Marker({color: 'red'}) //Puedes indicarle parametros o sino, se pondrán lo de por defecto
        .setLngLat( this.placesService.userLocation )
        .setPopup( popup )
        .addTo( map )


      this.mapService.setMap( map ); //Insertamos el mapa
  }

 

}
