import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
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

  destination = '22.270256,114.1313781';

  Routes = [
    {
    name: 'Shek Pai Wan/Aberdeen',
    destination: '22.2499061, 114.15694699999995',
    stations:[
        {
            type: ['pickup'],
            name: 'Fu Hong Society Rehabilitation Centre',
            coordinate: '22.24991, 114.15923299999997',
            time: '55'
        },
        {
            type: ['pickup'],
            name: 'Pik Yuet House, Shek Pai Wan Estate',
            coordinate: '22.248953, 114.15726700000005',
            time: '56'
        },
        {
            type: ['pickup'],
            name: 'On Fai House, Yue Fai Court',
            coordinate: '22.2499061, 114.15694699999995',
            time: '57'
        },
        {
            type: ['pickup'],
            name: '7-Eleven, Nam Ning Street, Aberdeen Centre',
            coordinate: '22.2477689, 114.15500099999997',
            time: '00'
        },
        {
            type: ['pickup'],
            name: 'Chinese Culinary Institute',
            coordinate: '22.259876, 114.13559800000007',
            time: '05'
        },
        {
            type: ['pickup', 'dropoff'],
            name: 'Block K, Queen Mary Hospital',
            coordinate: '22.270256, 114.1313781',
            time: '20'
        },
        {
            type: ['pickup', 'dropoff'],
            name: 'Fung Yiu King Hospital',
            coordinate: '22.2714702, 114.12484840000002',
            time: '27'
        },
        {
            type: ['pickup', 'dropoff'],
            name: 'The Duchess of Kent Children’s Hospital',
            coordinate: '22.2711318, 114.12344410000003',
            time: '27'
        },
        {
            type: ['pickup', 'dropoff'],
            name: 'MacLehose Rehabilitation Hospital',
            coordinate: '22.269896, 114.12425200000007',
            time: '29'
        },
        {
            type: ['dropoff'],
            name: 'Bus Stop, Pokfulam Village',
            coordinate: '22.260234, 114.13668800000005',
            time: '35'
        },
        {
            type: ['dropoff'],
            name: '7-Eleven, Nam Ning Street, Aberdeen Centre',
            coordinate: '22.2477689, 114.15500099999997',
            time: '40'
        },
        {
            type: ['dropoff'],
            name: 'Fu Hong Society Rehabilitation Centre',
            coordinate: '22.24991, 114.15923299999997',
            time: '43'
        },
        {
            type: ['dropoff'],
            name: 'Pik Yuet House, Shek Pai Wan Estate',
            coordinate: '22.248953, 114.15726700000005',
            time: '45'
        },
        {
            type: ['dropoff'],
            name: 'On Fai House, Yue Fai Court',
            coordinate: '22.2499061, 114.15694699999995',
            time: '50'
        }]
    },
    {
        name:'Chi Fu/Wah Fu',
        destination: '22.2714702, 114.12484840000002',
        stations:[
        {
            type: ['pickup'],
            name: 'Bus Stop, Block 1 Chi Fu Fa Yuen',
            coordinate: '22.255534, 114.13980400000003',
            time: '40'
        },
        {
            type: ['pickup'],
            name: 'Bus Terminal, Chi Fu Fa Yuen',
            coordinate: '22.258404, 114.13884499999995',
            time: '41'
        },
        {
            type: ['pickup'],
            name: 'Wah Lok House, Wah Fu Estate',
            coordinate: '22.251702, 114.13870300000008',
            time: '45'
        },
        {
            type: ['pickup'],
            name: 'Wah Mei House, Wah Fu Estate',
            coordinate: '22.249564, 114.13682879999999',
            time: '46'
        },
        {
            type: ['pickup'],
            name: 'Waterfall Bay Park, Wah Fu Estate',
            coordinate: '22.2503633, 114.13482090000002',
            time: '47'
        },
        {
            type: ['pickup'],
            name: 'Bus Terminal, Wah Fu (2) Estate',
            coordinate: '22.2519161, 114.13967320000006',
            time: '49'
        },
        {
            type: ['pickup'],
            name: 'Wah Hing House, Wah Fu Estate',
            coordinate: '22.2524823, 114.13643400000001',
            time: '50'
        },
        {
            type: ['pickup', 'dropoff'],
            name: 'Fung Yiu King Hospital',
            coordinate: '22.2714702, 114.12484840000002',
            time: '00'
        },
        {
            type: ['pickup', 'dropoff'],
            name: 'The Duchess of Kent Children’s Hospital',
            coordinate: '22.2711318, 114.12344410000003',
            time: '00'
        },
        {
            type: ['pickup','dropoff'],
            name: 'MacLehose Rehabilitation Hospital',
            coordinate: '22.269896, 114.12425200000007',
            time: '02'
        },
        {
            type: ['pickup','dropoff'],
            name: 'Block K, Queen Mary Hospital',
            coordinate: '22.270256, 114.1313781',
            time: '10'
        }]   
    },
    {
        name:'Wah Kwai/Tin Wan',
        destination: '22.270256, 114.1313781',
        stations:[
        {
            type: ['pickup'],
            name: 'Wah Kwai Shopping Centre, Wah Kwai Estate',
            coordinate: '22.2498765, 114.13910809999993',
            time: '55'
        },
        {
            type: ['pickup'],
            name: 'Bank of China (HK), Tin Wan Street',
            coordinate: '22.249662, 114.14904200000001',
            time: '05'
        },
        {
            type: ['pickup'],
            name: 'Tin Chak House, Tin Wan Estate',
            coordinate: '22.252499, 114.15069900000003',
            time: '10'
        },
        {
            type: ['pickup'],
            name: 'Bus Stop, Tin Wan Shopping Centre',
            coordinate: '22.251088, 114.14972899999998',
            time: '15'
        },
        {
            type: ['pickup', 'dropoff'],
            name: 'Block K, Queen Mary Hospital',
            coordinate: '22.270256, 114.1313781',
            time: '25'
        },
        {
            type: ['pickup', 'dropoff'],
            name: 'Fung Yiu King Hospital',
            coordinate: '22.2714702, 114.12484840000002',
            time: '32'
        },
        {
            type: ['pickup', 'dropoff'],
            name: 'The Duchess of Kent Children’s Hospital',
            coordinate: '22.2711318, 114.12344410000003',
            time: '32'
        },
        {
            type: ['pickup', 'dropoff'],
            name: 'MacLehose Rehabilitation Hospital',
            coordinate: '22.269896, 114.12425200000007',
            time: '34'
        },
        {
            type: ['dropoff'],
            name: 'Bank of China (HK), Tin Wan Street',
            coordinate: '22.249662, 114.14904200000001',
            time: '42'
        },
        {
            type: ['dropoff'],
            name: 'Tin Chak House, Tin Wan Estate',
            coordinate: '22.252499, 114.15069900000003',
            time: '43'
        },
        {
            type: ['dropoff'],
            name: 'Bus Stop, Tin Wan Shopping Centre',
            coordinate: '22.2498765, 114.13910809999993',
            time: '45'
        }]   
    }
]

waypoints = [ 
    {
        location: '22.2498765, 114.13910809999993',
        stopover: true
    },
    {
        location: '22.249662, 114.14904200000001',
        stopover: true
    },
    {
        location: '22.252499, 114.15069900000003',
        stopover: true
    },
    {
        location: '22.2498765, 114.13910809999993',
        stopover: true
    },
]
//test data
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

  constructor(public navCtrl: NavController, private plt: Platform, private geolocation: Geolocation, public alertController: AlertController) {
    if (localStorage.booking) {
      let booking = JSON.parse(localStorage.getItem("booking"))
      
      // show reminder
      console.log('ASDFGH',booking)
      if (booking.showReminder) {
        const reminder = this.alertController.create({
            title: 'Reminder',
            message: `You have an existing booking on ${booking.date} at ${booking.alertTime} going to ${booking.dropoff} from ${booking.pickup} via ${booking.routeName}.` ,
            inputs: [
                {
                    type: 'checkbox',
                    label: 'Don\'t show this message again'
                }
            ],
            buttons: [
              {
                text: 'Disagree',
                handler: () => {
                  console.log('Disagree clicked');
                }
              },
              {
                text: 'Agree',
                handler: () => {
                  console.log('Agree clicked');
                    booking.showReminder = false;
                    localStorage.setItem('booking', JSON.stringify(booking));
                }
              }
            ]
          });
          reminder.present();
      }
    }
  }

  ionViewDidLoad() {
    this.plt.ready().then(() => {
      this.calcRoute(this.Routes);
    });
  }

  calcRoute(routes) {
    var i = 0;
    var j = 0;
    var directionsService = new google.maps.DirectionsService();

    //configure map
    let mapOptions = {
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    }

    //initialize map
    let map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.geolocation.getCurrentPosition().then(pos => {
        let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        // let latLng = new google.maps.LatLng(14.5768, 121.0332);
        map.setCenter(latLng);
        map.setZoom(16);
      }).catch((error) => {
        console.log('Error getting location', error);
      });


    // let map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // let splitted = this.destination.split(',',2);
    // let latLng = new google.maps.LatLng(splitted[0],splitted[1]);
    // map.setCenter(latLng);

    //iterate to access routes
    for(i = 0; i < routes.length; i++) {

      let station = routes[i].stations;
      //iterate to access stations in route
      for (j = 0; j < 2; j++) {
        // console.log(this.waypoints.length);
        //create request
        let request = {
          origin: routes[i].stations[j].coordinate,
          destination: routes[i].destination,
          waypoints: this.waypoints,
          travelMode: 'DRIVING'
        };
        // console.log(request.destination);
        let dep_latlng = request.origin.split(',',2);
        let departure = new google.maps.LatLng(dep_latlng[0], dep_latlng[1]);
        let arr_latlng = request.destination.split(',',2);
        let arrival = new google.maps.LatLng(arr_latlng[0], arr_latlng[1]);

        directionsService.route(request, function(result, status){
          if (status == 'OK') {
            let directionsDisplay = new google.maps.DirectionsRenderer({
              preserveViewport: true, suppressMarkers: false
            });

            //create the object that will move in map
            var busSymbol = {
              // url: '../../assets/imgs/bus-top-view.svg',
              path: 'M -2,0 0,-2 2,0 0,2 z',
              // path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              strokeColor: '#393'
            };

            // var iconBase = '../../assets/imgs/demo_bus.png';


            var line = new google.maps.Polyline({
              path: [departure, arrival],
              strokeColor: "transparent",
              strokeOpacity: 1,
              strokeWeight: 0,
              map: map,
              icons: [{
                icon: {
                  path: 'M25.432,25.889c-0.882,3.419-0.314,6.74,0.131,9.789l1.394,1.536c0.011-0.06,0.021-0.119,0.029-0.181c-0.82-3.025,0.041-6.394,2.521-8.646c1.658-1.504,3.74-2.244,5.815-2.239c2.075-0.005,4.157,0.734,5.816,2.239c2.478,2.253,3.34,5.621,2.518,8.646c0.01,0.061,0.02,0.121,0.029,0.18l1.396-1.535c0.443-3.034,1.018-6.34,0.142-9.742c-1.838-7.152-6.812-14.732-9.901-21.116l0,0C32.239,11.19,27.276,18.749,25.432,25.889z',
                  // path: 'm36.867519,242.820617c-3.70825,14.93497 -4.67807,42.61874 -4.67807,70.34998c0,27.63626 0.96982,55.31875 4.61963,70.20626c2.73999,11.60877 13.4047,17.17374 28.80741,16.74625l453.89953,0c20.53351,0.1875 39.92932,0.23624 48.93927,-1.19125c19.96393,-3.23624 33.9411,-8.98877 37.0199,-18.50251c5.8772,-17.54998 8.60968,-42.42874 8.60968,-67.30749c0,-24.87625 -2.67853,-49.79999 -8.55273,-67.35376c-3.08026,-9.51126 -17.11292,-15.21997 -37.07685,-18.45499c-9.00995,-1.42752 -28.40576,-1.42752 -48.93927,-1.23623l-453.89953,0c-15.40271,-0.38004 -26.00897,5.13873 -28.74896,16.74374',
                  scale: 0.7,
                  fillColor: '#BA1321',
                  strokeColor: '#000000',
                  fillOpacity: 1
                },
                // icon: iconBase,
                // scale: 8
                // icon: demo_bus,
                // offset: '100%'
              }],

            });

            //animate object to move in line
            // console.log(this.waypoints.length);
            var step = 0;
            var numSteps = 1500; 
            var timePerStep = 50; 
            var interval = setInterval(function() {
                step += 1;
                if (step > numSteps) {
                    clearInterval(interval);
                } else {
                    
                    var k = 0;
                    for (let k = 0; k < station.length; k++) {
                        // console.log(station.length);
                        let arr_latlng = station[k].coordinate.split(',',2);
                        // console.log(arr_latlng);
                        let arrival = new google.maps.LatLng(arr_latlng[0], arr_latlng[1]);

                        let are_we_there_yet = google.maps.geometry.spherical.interpolate(departure,arrival,step/numSteps);
                        line.setPath([departure, are_we_there_yet]);
                    }
                }
            }, timePerStep);

            directionsDisplay.setMap(map);

            //create marker for dropoff station
            // let myLatlng = pickups[].lat
            var marker = new google.maps.Marker({
              position: departure,
              title:"Pickup Stations"
          });

          // crete marker for pickup station
          var marker2 = new google.maps.Marker({
            position: arrival,
            title: 'Drop off Station'
          });
        //   marker2.setMap(map);
        //   marker.setMap(map);

          //will display routes
        //   directionsDisplay.setDirections(result);
          }
        });
      }
      
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
