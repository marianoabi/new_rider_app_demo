import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';

import { BookingModalPage } from '../booking-modal/booking-modal';
import { Storage } from '@ionic/storage';

import { ConfirmationPage } from '../confirmation/confirmation';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  //init varibales
  selectedRoute = { name: '', stations: []};
  selectedRoutePickupStations = [];
  selectedRouteDropoffStations = [];
  selectedPickUpStation = {time: '' };

  //data
  Routes = [
        {
        name:'Shek Pai Wan/Aberdeen',
        stations:[
            {
                type: 'pickup',
                name: 'Fu Hong Society Rehabilitation Centre',
                coordinate: '22.24991,114.15923299999997',
                time: '55'
            },
            {
                type: 'pickup',
                name: 'Pik Yuet House, Shek Pai Wan Estate',
                coordinate: '22.248953,114.15726700000005',
                time: '56'
            },
            {
                type: 'pickup',
                name: 'On Fai House, Yue Fai Court',
                coordinate: '22.2499061,114.15694699999995',
                time: '57'
            },
            {
                type: 'pickup',
                name: '7-Eleven, Nam Ning Street, Aberdeen Centre',
                coordinate: '22.2477689,114.15500099999997',
                time: '00'
            },
            {
                type: 'pickup',
                name: 'Chinese Culinary Institute',
                coordinate: '22.259876,114.13559800000007',
                time: '05'
            },
            {
                type: 'pickup/dropoff',
                name: 'Block K, Queen Mary Hospital',
                coordinate: '22.270256,114.1313781',
                time: '20'
            },
            {
                type: 'pickup/dropoff',
                name: 'Fung Yiu King Hospital',
                coordinate: '22.2714702,114.12484840000002',
                time: '27'
            },
            {
                type: 'pickup/dropoff',
                name: 'The Duchess of Kent Children’s Hospital',
                coordinate: '22.2711318,114.12344410000003',
                time: '27'
            },
            {
                type: 'pickup/dropoff',
                name: 'MacLehose Rehabilitation Hospital',
                coordinate: '22.269896,114.12425200000007',
                time: '29'
            },
            {
                type: 'dropoff',
                name: 'Bus Stop, Pokfulam Village',
                coordinate: '22.260234,114.13668800000005',
                time: '35'
            },
            {
                type: 'dropoff',
                name: '7-Eleven, Nam Ning Street, Aberdeen Centre',
                coordinate: '22.2477689,114.15500099999997',
                time: '40'
            },
            {
                type: 'dropoff',
                name: 'Fu Hong Society Rehabilitation Centre',
                coordinate: '22.24991,114.15923299999997',
                time: '43'
            },
            {
                type: 'dropoff',
                name: 'Pik Yuet House, Shek Pai Wan Estate',
                coordinate: '22.248953,114.15726700000005',
                time: '45'
            },
            {
                type: 'dropoff',
                name: 'On Fai House, Yue Fai Court',
                coordinate: '22.2499061,114.15694699999995',
                time: '50'
            }]
        },
        {
            name:'Chi Fu/Wah Fu',
            stations:[
            {
                type: 'pickup',
                name: 'Bus Stop, Block 1 Chi Fu Fa Yuen',
                coordinate: '22.255534,114.13980400000003',
                time: '40'
            },
            {
                type: 'pickup',
                name: 'Bus Terminal, Chi Fu Fa Yuen',
                coordinate: '22.258404,114.13884499999995',
                time: '41'
            },
            {
                type: 'pickup',
                name: 'Wah Lok House, Wah Fu Estate',
                coordinate: '22.251702,114.13870300000008',
                time: '45'
            },
            {
                type: 'pickup',
                name: 'Wah Mei House, Wah Fu Estate',
                coordinate: '22.249564,114.13682879999999',
                time: '46'
            },
            {
                type: 'pickup',
                name: 'Waterfall Bay Park, Wah Fu Estate',
                coordinate: '22.2503633,114.13482090000002',
                time: '47'
            },
            {
                type: 'pickup',
                name: 'Bus Terminal, Wah Fu (2) Estate',
                coordinate: '22.2519161,114.13967320000006',
                time: '49'
            },
            {
                type: 'pickup',
                name: 'Wah Hing House, Wah Fu Estate',
                coordinate: '22.2524823,114.13643400000001',
                time: '50'
            },
            {
                type: 'pickup/dropoff',
                name: 'Fung Yiu King Hospital',
                coordinate: '22.2714702,114.12484840000002',
                time: '00'
            },
            {
                type: 'pickup/dropoff',
                name: 'The Duchess of Kent Children’s Hospital',
                coordinate: '22.2711318,114.12344410000003',
                time: '00'
            },
            {
                type: 'pickup/dropoff',
                name: 'MacLehose Rehabilitation Hospital',
                coordinate: '22.269896,114.12425200000007',
                time: '02'
            },
            {
                type: 'pickup/dropoff',
                name: 'Block K, Queen Mary Hospital',
                coordinate: '22.270256,114.1313781',
                time: '10'
            }]   
        },
        {
            name:'Wah Kwai/Tin Wan',
            stations:[
            {
                type: 'pickup',
                name: 'Wah Kwai Shopping Centre, Wah Kwai Estate',
                coordinate: '22.2498765,114.13910809999993',
                time: '55'
            },
            {
                type: 'pickup',
                name: 'Bank of China (HK), Tin Wan Street',
                coordinate: '22.249662,114.14904200000001',
                time: '05'
            },
            {
                type: 'pickup',
                name: 'Tin Chak House, Tin Wan Estate',
                coordinate: '22.252499,114.15069900000003',
                time: '10'
            },
            {
                type: 'pickup',
                name: 'Bus Stop, Tin Wan Shopping Centre',
                coordinate: '22.251088,114.14972899999998',
                time: '15'
            },
            {
                type: 'pickup/dropoff',
                name: 'Block K, Queen Mary Hospital',
                coordinate: '22.270256,114.1313781',
                time: '25'
            },
            {
                type: 'pickup/dropoff',
                name: 'Fung Yiu King Hospital',
                coordinate: '22.2714702,114.12484840000002',
                time: '32'
            },
            {
                type: 'pickup/dropoff',
                name: 'The Duchess of Kent Children’s Hospital',
                coordinate: '22.2711318,114.12344410000003',
                time: '32'
            },
            {
                type: 'pickup/dropoff',
                name: 'MacLehose Rehabilitation Hospital',
                coordinate: '22.269896,114.12425200000007',
                time: '34'
            },
            {
                type: 'dropoff',
                name: 'Bank of China (HK), Tin Wan Street',
                coordinate: '22.249662,114.14904200000001',
                time: '42'
            },
            {
                type: 'dropoff',
                name: 'Tin Chak House, Tin Wan Estate',
                coordinate: '22.252499,114.15069900000003',
                time: '43'
            },
            {
                type: 'dropoff',
                name: 'Bus Stop, Tin Wan Shopping Centre',
                coordinate: '22.2498765,114.13910809999993',
                time: '50'
            }]   
        }
    ]

    //init object
    Booking = {
        referenceNumber: '',
        date: '',
        routeName: '',
        alertTime: '',
        pickup: '',
        dropoff: '',
        contact: '',
        seatType: '',
        contactNumber: '',
        carerName: '',
        carerContactNumber: '',
        showRemider: true,
        wheelchairBool: 0,
        carerBool: 0
    }

    //time dropdown
    Hours = [7,8,9,10,11,12,13,14,15,16,17];
    Minute;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage, public modalCtrl: ModalController, private loadingCtrl: LoadingController) {
    if (localStorage.booking) {
        let booking = JSON.parse(localStorage.getItem("booking"))
        this.Booking.contact = booking.contact;
        this.Booking.contactNumber = booking.contactNumber;
        this.Booking.alertTime= "88";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
    console.log(new Date().toISOString());

    //set default selected date to date now
    this.Booking.date = new Date().toISOString();

  }

  onRouteChange(routeName){
    this.selectedRoute = this.Routes.find( route => route.name == routeName );
    console.log(this.selectedRoute);
    console.log(this.selectedRoute.stations);

    this.Booking.pickup = '';
    this.Booking.dropoff = '';
    this.selectedRoutePickupStations = [];
    this.selectedRouteDropoffStations = [];
    this.selectedRoute.stations.forEach( station => {
        if (station.type == 'pickup' || station.type == 'pickup/dropoff')
            this.selectedRoutePickupStations.push(station)
            console.log('Hahahha biii', this.selectedRoutePickupStations);
    })

    this.selectedRoute.stations.forEach( station => {
        if (station.type == 'dropoff' || station.type == 'pickup/dropoff')
            this.selectedRouteDropoffStations.push(station)
    })
  }

  onPickupChange(pickupStation) {
    this.Booking.alertTime = '';
    this.selectedPickUpStation = this.selectedRoutePickupStations.find( pickup => pickup.name === pickupStation);
    this.Minute = this.selectedPickUpStation.time;
  }

//   onBookNow(Booking) {
//     this.referenceNumber++
//     Booking.referenceNumber = this.referenceNumber; 

//     //   console.log(this.booking);

//         //   let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
//   //   this.previousTracks.push(newRoute);
//     this.showLoader();

//     console.log('Booking =', Booking);

//     // store data in localStorage
//     Booking.date = this.date;
//     localStorage.setItem("booking", JSON.stringify(Booking))
//     this.showLoader();

//     //
//     const alert = this.alertCtrl.create({
//         title: 'Booking Successful',
//         subTitle: 'Reference Number:' + Booking.refNum,
//         buttons: [
//             {
//                 text: 'Check the booking',
//                 handler: data => {
//                     console.log('Check the booking');
//                     // this.showLoader();
//                     this.presentBookingModal();
                    
//                     // this.showBookingAlert(Booking);
//                 }
//             },
//             {
//                 text: 'Go back to homepage',
//                 handler: data => {
//                     console.log('Back to homepage');
//                     this.navCtrl.popToRoot();
//                 }
//             }
//         ]
//     });
//     alert.present();
//     }

    presentBookingModal() {
        let bookingModal = this.modalCtrl.create(
            BookingModalPage);
        bookingModal.present();
    }

    showLoader() {
        const loader = this.loadingCtrl.create({
            duration: 2000
        });
        loader.present();
    }

    goToConfirmPage(Booking) {
        console.log('hehe', this.Booking.pickup);
        this.navCtrl.push(ConfirmationPage, {'Booking' : Booking});
        console.log('push Booking to next page', Booking)
    }
}
