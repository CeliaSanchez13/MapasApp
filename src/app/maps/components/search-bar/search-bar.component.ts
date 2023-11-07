import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor( private placesService: PlacesService ){}

  //METODOS
  onQueryChanged(query:string = ''){ //Indicamos el tipo de dato inicializado a ''
    if( this.debounceTimer ) clearTimeout( this.debounceTimer ) //Si tiene un valor, lo limpiamos

    this.debounceTimer = setTimeout( () => {
      this.placesService.getPlacesByQuery( query )
    }, 1000); //Solo se va a quedar con el ultimo que se envia. Si pasa mas de 1 seg se envia.

  }
}
