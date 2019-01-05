import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
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
            },
            {
                type: 'dropoff',
                name: 'Bus Stop, Block 1 Chi Fu Fa Yuen',
                coordinate: '',
                time: '20'
            },
            {
                type: 'dropoff',
                name: 'Bus Terminal, Chi Fu Fa Yuen',
                coordinate: '',
                time: '21'
            },
            {
                type: 'dropoff',
                name: 'Wah Lok House, Wah Fu Estate',
                coordinate: '',
                time: '26'
            },
            {
                type: 'dropoff',
                name: 'Wah Mei House, Wah Fu Estate',
                coordinate: '',
                time: '27'
            },
            {
                type: 'dropoff',
                name: 'Waterfall Bay Park, Wah Fu Estate',
                coordinate: '',
                time: '28'
            },
            {
                type: 'dropoff',
                name: 'Bus Terminal, Wah Fu (2) Estate',
                coordinate: '',
                time: '29'
            },
            {
                type: 'dropoff',
                name: 'Wah Hing House, Wah Fu Estate',
                coordinate: '',
                time: '30'
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
        date: '',
        routeName: '',
        alertTime: '',
        pickup: '',
        dropoff: '',
        seatType: ''
    }

    //time dropdown
    hours = [7,8,9,10,11,12,13,14,15,16,17];
    minute;

    dateNow;
    minDate;
    maxDate;
    maxDateString;
    minTime;
    minTimeString;

    wheelchairRandNum;
    nonWheelchairRandNum;
    
    timeIsEnabled = true;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage, public modalCtrl: ModalController, private loadingCtrl: LoadingController, public datePipe: DatePipe) {  
        this.Booking.routeName = 'Chi Fu/Wah Fu';
        this.Booking.pickup = 'Bus Terminal, Chi Fu Fa Yuen';
        this.Booking.dropoff = 'Block K, Queen Mary Hospital';
        this.wheelchairRandNum = '-';
        this.nonWheelchairRandNum = '-';
    }

    async ionViewDidLoad() {
        console.log('ionViewDidLoad ReservationPage');
        console.log(new Date());

        //set default selected date to date now
        this.Booking.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');  
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 6);
        this.maxDate = this.datePipe.transform(this.maxDate, 'yyyy-MM-dd');  

        console.log(this.Booking.date, this.maxDate, this.minTime);

        await this.loadData();
    }

    async loadData() {

        this.selectedRoute = this.Routes.find( route => route.name === this.Booking.routeName )
        
        this.selectedRoute.stations.forEach( station => {
            if (station.type == 'pickup' || station.type == 'pickup/dropoff') {
                this.selectedRoutePickupStations.push(station)

                if (station.name == 'Bus Terminal, Chi Fu Fa Yuen') {
                    this.minute = [parseInt(station.time)];
                    this.minTime = new Date();
                    let minZZ = this.minTime.getMinutes();

                    console.log(minZZ, parseInt(station.time))

                    if (minZZ > parseInt(station.time)) {
                        this.minTime.setHours(this.minTime.getHours() + 3);
                        this.minTime.setMinutes(0);
                    } else {
                        this.minTime.setHours(this.minTime.getHours() + 2);      
                    }

                    this.minTime = new Date(Date.UTC(this.minTime.getFullYear(), this.minTime.getMonth(), this.minTime.getDate(), this.minTime.getHours(), this.minTime.getMinutes())).toISOString();
                    console.log('abibe', this.minTime);
                }
            }
        })

        this.selectedRoute.stations.forEach( station => {
            if (station.type == 'dropoff' || station.type == 'pickup/dropoff')
                this.selectedRouteDropoffStations.push(station)
        })
        // let i;
        // let j;
        // for (i=0; i<this.Routes.length; i++) {
        //     this.selectedRoute = this.Routes[i];
        //     console.log(this.selectedRoute);
        //     this.selectedRoute.stations.forEach(station => {
        //         if (station.type == 'pickup' || station.type == 'pickup/dropoff') {
        //             this.selectedRoutePickupStations.push(station);
        //         } 

        //         if (station.type =='dropoff' || station.type == 'pickup/dropoff') {
        //             this.selectedRouteDropoffStations.push(station);
        //         }

        //         if (station.name == 'Bus Terminal, Chi Fu Fa Yuen') {
        //             this.minute = [station.time];

        //             this.minTime = new Date();
        //             let minZZ = this.minTime.getMinutes();
        //             if (minZZ > parseInt(this.minute)) {
        //                 this.minTime.setHours(this.minTime.getHours() + 3);      

        //             } else {
        //                 this.minTime.setHours(this.minTime.getHours() + 2);      
        //             }

        //             this.minTime = new Date(Date.UTC(this.minTime.getFullYear(), this.minTime.getMonth(), this.minTime.getDate(), this.minTime.getHours(), this.minTime.getMinutes())).toISOString();
        //         }
        //     });
        // }
        console.log('hehe', this.selectedRoutePickupStations);
        console.log('haha', this.selectedRouteDropoffStations);
        console.log('huhu', this.minute);
        console.log('hihe', this.minTime);
    }

    onRouteChange(routeName){
        this.selectedRoute = this.Routes.find( route => route.name == routeName );
        console.log(this.selectedRoute);
        console.log(this.selectedRoute.stations);

        this.Booking.pickup = '';
        this.Booking.dropoff = '';
        this.selectedRoutePickupStations = [];
        this.selectedRouteDropoffStations = [];
        this.minute = '';
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
        if (pickupStation) {
            this.minute = '';
            this.Booking.alertTime = '';
            this.selectedPickUpStation = this.selectedRoutePickupStations.find( pickup => pickup.name === pickupStation);
            this.minute = [this.selectedPickUpStation.time];
        }
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
        console.log('asdfg', this.Booking.alertTime)
        if (this.validation()) {
            this.navCtrl.push(ConfirmationPage, {'Booking' : Booking});
            console.log('push Booking to next page', Booking)
        } else {
            const invalidAlert = this.alertCtrl.create({
                title: 'Invalid',
                subTitle: 'Please fill all required fields.',
                buttons: ['Okay']
            });
            invalidAlert.present();
        }
    }

    onChangeShuttleTime() {
        this.wheelchairRandNum = '-';
        this.wheelchairRandNum = '-';
        console.log(this.validation)
        if (this.validation()) {
            this.wheelchairRandNum = Math.floor(Math.random() * Math.floor(5)).toString();
            this.nonWheelchairRandNum = Math.floor(Math.random() * Math.floor(9)).toString();
        }
    }

    validation() {
        if (!this.Booking.alertTime) {
            return false;
        }
        return true;
    }

    // shutterTimeValidator() {
    //     console.log('hoooy',this.minTime)
    //     if (parseInt(this.minTime.getHours()) > 17) {
    //         // this.timeIsEnabled = false;
    //         let alert = this.alertCtrl.create({
    //             title: '',
    //             subTitle: '',
    //             buttons: ['Okay']
    //         })
    //         alert.present();
    //     }
    // }
}
