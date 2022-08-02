// interface lista os requisitos necessários para 
// que outras classes possam ser um argumento para 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  // private bloqueia o acesso externo aos métodos desta classe
  private googleMap: google.maps.Map; 

  //constructor sempre é executado ao chamar uma classe
  constructor(divId) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), { 
      zoom: 1, 
      center: { 
        lat: 0, 
        lng: 0 
      } 
    });
  }

  //adiciona um marcador no mapa
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({ 
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
     });

     //adiciona um evento listener, ativado ao ser clicado com o mouse
     marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      //essa propriedade vem da biblioteca do google maps
      infoWindow.open(this.googleMap, marker);

     });


  }
}