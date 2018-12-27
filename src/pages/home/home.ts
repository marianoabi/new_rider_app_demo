import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

import { ReservationPage } from '../reservation/reservation';
// import { demo_bus } from '../../assets/imgs/demo_bus.png';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map')mapElement: ElementRef;
  map: any;

  destination = '15.8477, 120.9188';

  pickup = [
    {
      location : 'Sta. Rosa',
      coordinates : '15.4251, 120.9384'
    },
    {
      location : 'Isabela',
      coordinates : '16.9754, 121.8107'
    },
    {
      location : 'Olongapo City',
      coordinates : '14.8386, 120.2842'
    }
  ]; 

  constructor(public navCtrl: NavController, private plt: Platform, private geolocation: Geolocation, private storage: Storage) {

  }

  ionViewDidLoad() {
    this.plt.ready().then(() => {
       this.calcRoute(this.pickup);
      
    });
  }

  calcRoute(pickups) {
    var i = 0;
    var directionsService = new google.maps.DirectionsService();

    let mapOptions = {
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    }

    let map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.geolocation.getCurrentPosition().then(pos => {
      let splitted = this.destination.split(',',2);
      // console.log(splitted);
      // let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      let latLng = new google.maps.LatLng(splitted[0],splitted[1]);

      map.setCenter(latLng);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    
    for(i = 0; i < pickups.length; i++) {
      // console.log(pickups[this.i].coordinates);
      // console.log(pickups[i].coordinates);
      var request = {
        origin: pickups[i].coordinates,
        destination: this.destination,
        travelMode: 'DRIVING'
      };

      let dep_latlng = request.origin.split(',',2);
      let departure = new google.maps.LatLng(dep_latlng[0], dep_latlng[1]);

      let arr_latlng = request.destination.split(',',2);
      let arrival = new google.maps.LatLng(arr_latlng[0], arr_latlng[1]);

      // console.log(dep_latlng);
      directionsService.route(request, function(result, status){
        if (status == 'OK') {
          let directionsDisplay = new google.maps.DirectionsRenderer({
            preserveViewport: true, suppressMarkers: false
          });

          var lineSymbol = {
            path: 'M -2,0 0,-2 2,0 0,2 z',
            // path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            strokeColor: '#393'
          };
          var iconBase = '../../assets/imgs/demo_bus.png';

          var line = new google.maps.Polyline({
            path: [departure, arrival],
            strokeColor: "transparent",
            strokeOpacity: 1,
            strokeWeight: 0,
            map: map,
            icons: [{
              icon: lineSymbol,
              // icon: iconBase + 'parking_lot_maps.png',
              scale: 8
              // icon: demo_bus,
              // offset: '100%'
            }],

          });

          var step = 0;
          var numSteps = 1000; 
          var timePerStep = 50; 
          var interval = setInterval(function() {
              step += 1;
              if (step > numSteps) {
                  clearInterval(interval);
              } else {
                  var are_we_there_yet = google.maps.geometry.spherical.interpolate(departure,arrival,step/numSteps);
                  line.setPath([departure, are_we_there_yet]);
              }
          }, timePerStep);

          directionsDisplay.setMap(map);
          directionsDisplay.setDirections(result);
        }
      });
    }

    // var lineSymbol = {
    //   path: google.maps.SymbolPath.CIRCLE,
    //   scale: 8,
    //   strokeColor: '#393'
    // };

    // // Create the polyline and add the symbol to it via the 'icons' property.
    // var line = new google.maps.Polyline({
    //   path: [{lat: 15.4251, lng: 120.9384}, {lat: 14.8386, lng: 120.2842}],
    //   icons: [{
    //     icon: lineSymbol,
    //     offset: '100%'
    //   }],
    //   map: this.map
    // });

    // this.animateCircle(line);
  }

  // animateCircle(line) {
  //   var count = 0;
  //   window.setInterval(function() {
  //     count = (count + 1) % 4000;

  //     var icons = line.get('icons');
  //     icons[0].offset = (count / 2) + '%';
  //     line.set('icons', icons);
  // }, 400);
// }

  onBookButtonClick() {
    this.navCtrl.push(ReservationPage);
  }
}
