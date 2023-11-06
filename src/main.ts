import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsaWFzdWxsaXZhbiIsImEiOiJjbG5pcGthaXIxYXJqMm1ydWlqa3g2MGNzIn0.4TxWIoGOUVI_ecgPDG81uw';

if( !navigator.geolocation ){
  alert('Navegador no soporta la Geolocalizacion'); //Error pantalla
  throw new Error('Navegador no soporta la Geolocalizacion'); //Error consola
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
