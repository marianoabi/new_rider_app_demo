import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController, ToastController } from 'ionic-angular';
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
    selectedRoute = { name: '', stations: [] };
    selectedRoutePickupStations = [];
    selectedRouteDropoffStations = [];
    selectedPickUpStation = {
        firstTrip: '',
        time: ''
    };
    dateToday = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    
    //data
    Routes = [
        {
            name: 'Shek Pai Wan/Aberdeen',
            stations: [
                {
                    type: 'pickup',
                    name: 'Fu Hong Society Rehabilitation Centre',
                    coordinate: '22.24991,114.15923299999997',
                    firstTrip: '7:55'
                },
                {
                    type: 'pickup',
                    name: 'Pik Yuet House, Shek Pai Wan Estate',
                    coordinate: '22.248953,114.15726700000005',
                    firstTrip: '7:56'
                },
                {
                    type: 'pickup',
                    name: 'On Fai House, Yue Fai Court',
                    coordinate: '22.2499061,114.15694699999995',
                    firstTrip: '7:57'
                },
                {
                    type: 'pickup',
                    name: '7-Eleven, Nam Ning Street, Aberdeen Centre',
                    coordinate: '22.2477689,114.15500099999997',
                    firstTrip: '8:00'
                },
                {
                    type: 'pickup',
                    name: 'Chinese Culinary Institute',
                    coordinate: '22.259876,114.13559800000007',
                    firstTrip: '8:05'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'Block K, Queen Mary Hospital',
                    coordinate: '22.270256,114.1313781',
                    firstTrip: '8:20'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'Fung Yiu King Hospital',
                    coordinate: '22.2714702,114.12484840000002',
                    firstTrip: '8:27'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'The Duchess of Kent Children’s Hospital',
                    coordinate: '22.2711318,114.12344410000003',
                    firstTrip: '8:27'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'MacLehose Rehabilitation Hospital',
                    coordinate: '22.269896,114.12425200000007',
                    firstTrip: '8:29'
                },
                {
                    type: 'dropoff',
                    name: 'Bus Stop, Pokfulam Village',
                    coordinate: '22.260234,114.13668800000005',
                    firstTrip: '8:35'
                },
                {
                    type: 'dropoff',
                    name: '7-Eleven, Nam Ning Street, Aberdeen Centre',
                    coordinate: '22.2477689,114.15500099999997',
                    firstTrip: '8:40'
                },
                {
                    type: 'dropoff',
                    name: 'Fu Hong Society Rehabilitation Centre',
                    coordinate: '22.24991,114.15923299999997',
                    firstTrip: '8:43'
                },
                {
                    type: 'dropoff',
                    name: 'Pik Yuet House, Shek Pai Wan Estate',
                    coordinate: '22.248953,114.15726700000005',
                    firstTrip: '8:45'
                },
                {
                    type: 'dropoff',
                    name: 'On Fai House, Yue Fai Court',
                    coordinate: '22.2499061,114.15694699999995',
                    firstTrip: '8:50'
                }]
        },
        {
            name: 'Chi Fu/Wah Fu',
            stations: [
                {
                    type: 'pickup',
                    name: 'Bus Stop, Block 1 Chi Fu Fa Yuen',
                    coordinate: '22.255534,114.13980400000003',
                    firstTrip: '7:40'
                },
                {
                    type: 'pickup',
                    name: 'Bus Terminal, Chi Fu Fa Yuen',
                    coordinate: '22.258404,114.13884499999995',
                    firstTrip: '7:41'
                },
                {
                    type: 'pickup',
                    name: 'Wah Lok House, Wah Fu Estate',
                    coordinate: '22.251702,114.13870300000008',
                    firstTrip: '7:45'
                },
                {
                    type: 'pickup',
                    name: 'Wah Mei House, Wah Fu Estate',
                    coordinate: '22.249564,114.13682879999999',
                    firstTrip: '7:46'
                },
                {
                    type: 'pickup',
                    name: 'Waterfall Bay Park, Wah Fu Estate',
                    coordinate: '22.2503633,114.13482090000002',
                    firstTrip: '7:47'
                },
                {
                    type: 'pickup',
                    name: 'Bus Terminal, Wah Fu (2) Estate',
                    coordinate: '22.2519161,114.13967320000006',
                    firstTrip: '7:49'
                },
                {
                    type: 'pickup',
                    name: 'Wah Hing House, Wah Fu Estate',
                    coordinate: '22.2524823,114.13643400000001',
                    firstTrip: '7:50'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'Fung Yiu King Hospital',
                    coordinate: '22.2714702,114.12484840000002',
                    firstTrip: '8:00'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'The Duchess of Kent Children’s Hospital',
                    coordinate: '22.2711318,114.12344410000003',
                    firstTrip: '8:00'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'MacLehose Rehabilitation Hospital',
                    coordinate: '22.269896,114.12425200000007',
                    firstTrip: '8:02'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'Block K, Queen Mary Hospital',
                    coordinate: '22.270256,114.1313781',
                    firstTrip: '8:10'
                },
                {
                    type: 'dropoff',
                    name: 'Bus Stop, Block 1 Chi Fu Fa Yuen',
                    coordinate: '',
                    firstTrip: '8:20'
                },
                {
                    type: 'dropoff',
                    name: 'Bus Terminal, Chi Fu Fa Yuen',
                    coordinate: '',
                    firstTrip: '8:21'
                },
                {
                    type: 'dropoff',
                    name: 'Wah Lok House, Wah Fu Estate',
                    coordinate: '',
                    firstTrip: '8:26'
                },
                {
                    type: 'dropoff',
                    name: 'Wah Mei House, Wah Fu Estate',
                    coordinate: '',
                    firstTrip: '8:27'
                },
                {
                    type: 'dropoff',
                    name: 'Waterfall Bay Park, Wah Fu Estate',
                    coordinate: '',
                    firstTrip: '8:28'
                },
                {
                    type: 'dropoff',
                    name: 'Bus Terminal, Wah Fu (2) Estate',
                    coordinate: '',
                    firstTrip: '8:29'
                },
                {
                    type: 'dropoff',
                    name: 'Wah Hing House, Wah Fu Estate',
                    coordinate: '',
                    firstTrip: '8:30'
                }]
        },
        {
            name: 'Wah Kwai/Tin Wan',
            stations: [
                {
                    type: 'pickup',
                    name: 'Wah Kwai Shopping Centre, Wah Kwai Estate',
                    coordinate: '22.2498765,114.13910809999993',
                    firstTrip: '7:55'
                },
                {
                    type: 'pickup',
                    name: 'Bank of China (HK), Tin Wan Street',
                    coordinate: '22.249662,114.14904200000001',
                    firstTrip: '8:05'
                },
                {
                    type: 'pickup',
                    name: 'Tin Chak House, Tin Wan Estate',
                    coordinate: '22.252499,114.15069900000003',
                    firstTrip: '8:10'
                },
                {
                    type: 'pickup',
                    name: 'Bus Stop, Tin Wan Shopping Centre',
                    coordinate: '22.251088,114.14972899999998',
                    firstTrip: '8:15'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'Block K, Queen Mary Hospital',
                    coordinate: '22.270256,114.1313781',
                    firstTrip: '8:25'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'Fung Yiu King Hospital',
                    coordinate: '22.2714702,114.12484840000002',
                    firstTrip: '8:32'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'The Duchess of Kent Children’s Hospital',
                    coordinate: '22.2711318,114.12344410000003',
                    firstTrip: '8:32'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'MacLehose Rehabilitation Hospital',
                    coordinate: '22.269896,114.12425200000007',
                    firstTrip: '8:34'
                },
                {
                    type: 'dropoff',
                    name: 'Bank of China (HK), Tin Wan Street',
                    coordinate: '22.249662,114.14904200000001',
                    firstTrip: '8:42'
                },
                {
                    type: 'dropoff',
                    name: 'Tin Chak House, Tin Wan Estate',
                    coordinate: '22.252499,114.15069900000003',
                    firstTrip: '8:43'
                },
                {
                    type: 'dropoff',
                    name: 'Bus Stop, Tin Wan Shopping Centre',
                    coordinate: '22.2498765,114.13910809999993',
                    firstTrip: '8:45'
                },
                {
                    type: 'dropoff',
                    name: 'Wah Kwai Shopping Centre, Wah Kwai Estate',
                    coordinate: '',
                    firstTrip: '8:50'
                }]
        },
        {
            name: 'South Horizons/Ap Lei Chau',
            stations: [
                {
                    type: 'pickup',
                    name: 'Block 20, South Horizons',
                    coordinate: '',
                    firstTrip: '7:30'
                },
                {
                    type: 'pickup',
                    name: 'Bus Terminal, Ap Lei Chau Estate',
                    coordinate: '',
                    firstTrip: '7:32'
                },
                {
                    type: 'pickup',
                    name: 'Ap Lei Chau Main Street (ALC Clinic)',
                    coordinate: '',
                    firstTrip: '7:35'
                },
                {
                    type: 'pickup',
                    name: 'Ocean Court',
                    coordinate: '',
                    firstTrip: '7:38'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'Block K, Queen Mary Hospital',
                    coordinate: '',
                    firstTrip: '7:50'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'Fung Yiu King Hospital',
                    coordinate: '',
                    firstTrip: '7:57'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'The Duchess of Kent Children’s Hospital',
                    coordinate: '',
                    firstTrip: '7:57'
                },
                {
                    type: 'pickup/dropoff',
                    name: 'MacLehose Rehabilitation Hospital',
                    coordinate: '',
                    firstTrip: '7:59'
                },
                {
                    type: 'dropoff',
                    name: 'Ap Lei Chau Main Street (ALC Clinic)',
                    coordinate: '',
                    firstTrip: '8:12'
                },
                {
                    type: 'dropoff',
                    name: 'Block 20, South Horizons',
                    coordinate: '',
                    firstTrip: '8:17'
                },
                {
                    type: 'dropoff',
                    name: 'Bus Terminal, Ap Lei Chau Estate',
                    coordinate: '',
                    firstTrip: '8:19'
                },
                {
                    type: 'dropoff',
                    name: 'Ocean Court',
                    coordinate: '',
                    firstTrip: '8:22'
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
    firstTrip;
    hourArray = [];
    minute;
    hour;

    prevSelectedDate;

    minDate;
    maxDate;
    maxDateString;
    minTime;
    minTimeString;

    wheelchairRandNum;
    nonWheelchairRandNum;

    timeIsEnabled = true;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage, public modalCtrl: ModalController, private loadingCtrl: LoadingController, public datePipe: DatePipe, private toastCtrl: ToastController) {
        this.initDefaultValues();
        this.resetRemainingSeatNumber();
    }

    async ionViewDidLoad() {
        console.log('ionViewDidLoad ReservationPage');
        console.log(new Date());

        //set default values
        this.Booking.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

        this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.maxDate = new Date();
        this.maxDate.setDate(this.maxDate.getDate() + 6);
        this.maxDate = this.datePipe.transform(this.maxDate, 'yyyy-MM-dd');
        // console.log(this.Booking.date, this.maxDate, this.minTime);
        await this.loadData();
    }

    initDefaultValues() {
        this.Booking.routeName = 'Chi Fu/Wah Fu';
        this.Booking.pickup = 'Bus Terminal, Chi Fu Fa Yuen';
        this.Booking.dropoff = 'Block K, Queen Mary Hospital';
    }

    async loadData() {
        console.log('loadDate func')
        this.selectedRoute = this.Routes.find(route => route.name === this.Booking.routeName)
        this.selectedRoute.stations.forEach(station => {
            if (station.type == 'pickup' || station.type == 'pickup/dropoff') {
                this.selectedRoutePickupStations.push(station)
            }
        })

        this.selectedRoute.stations.forEach(station => {
            if (station.type == 'dropoff' || station.type == 'pickup/dropoff')
                this.selectedRouteDropoffStations.push(station)
        })

        this.selectedPickUpStation = this.selectedRoutePickupStations.find(pickup => pickup.name === this.Booking.pickup);

        // console.log('hehe', this.selectedRoutePickupStations);
        // console.log('haha', this.selectedRouteDropoffStations);
        // console.log('huhu', this.minute);
        // console.log('hihe', this.minTime);
        // console.log('hoho', this.hour);
    }

    onRouteChange(routeName) {
        this.onRouteChangeClearData();
        this.selectedRoute = this.Routes.find(route => route.name == routeName);
        this.selectedRoute.stations.forEach(station => {
            if (station.type == 'pickup' || station.type == 'pickup/dropoff')
                this.selectedRoutePickupStations.push(station)
            // console.log('Hahahha biii', this.selectedRoutePickupStations);
        })

        this.selectedRoute.stations.forEach(station => {
            if (station.type == 'dropoff' || station.type == 'pickup/dropoff')
                this.selectedRouteDropoffStations.push(station)
        })
    }

    onRouteChangeClearData() {
        this.minute = '';
        this.Booking.pickup = '';
        this.Booking.dropoff = '';
        this.Booking.alertTime = '';
        this.selectedRoutePickupStations = [];
        this.selectedRouteDropoffStations = [];
        this.resetRemainingSeatNumber();
    }

    resetRemainingSeatNumber() {
        this.nonWheelchairRandNum = '-';
        this.wheelchairRandNum = '-';
    }

    onPickupChange(pickupStation) {
        if (pickupStation) {
            this.resetRemainingSeatNumber();
            this.Booking.alertTime = '';
            this.selectedPickUpStation = this.selectedRoutePickupStations.find(pickup => pickup.name === pickupStation);
            this.setTime(this.selectedPickUpStation);
        }
    }

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
        console.log('asdfg', this.Booking.alertTime, Booking)
        if (Booking.alertTime && Booking.pickup && Booking.dropoff) {
            this.navCtrl.push(ConfirmationPage, { 'Booking': Booking });
            // console.log('push Booking to next page', Booking)
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
        console.log('this.onChangeShuttleTime function');
        this.resetRemainingSeatNumber();
        if (this.Booking.alertTime) {
            this.wheelchairRandNum = Math.floor(Math.random() * Math.floor(5)).toString();
            this.nonWheelchairRandNum = Math.floor(Math.random() * Math.floor(9)).toString();
        }
    }

    showNoTimeScheduleToast() {
        let toast = this.toastCtrl.create({
            message: 'No available schedule. Try selecting other pickup station or select other date.',
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'top'
        })
        toast.present();
    }

    onDateChange(selectedDate) {
        if (selectedDate !== this.prevSelectedDate) {
            console.log('onDateChange');
            this.Booking.alertTime = '';
            this.resetRemainingSeatNumber();
            this.setTime(this.selectedPickUpStation);
        }
        this.prevSelectedDate = selectedDate;
    }

    setTime(station) {
        this.hourArray = [];
        this.firstTrip = station.firstTrip;
        let firstTripArr;
        firstTripArr = this.firstTrip.split(':', 2);
        this.hour = [parseInt(firstTripArr[0])];
        this.minute = [parseInt(firstTripArr[1])];

        let i;
        this.hourArray.push(this.hour)
        for (i = 0; i < 10; i++) {
            let sum = parseInt(this.hour) + parseInt(i) + 1;
            this.hourArray.push(sum.toString());
        }

        this.minTime = new Date();
        let minZZ = this.minTime.getMinutes();

        if (this.Booking.date != this.dateToday) {
            this.minTime.setHours(this.hour);
            this.minTime.setMinutes(this.minute);
            this.minTime = new Date(Date.UTC(this.minTime.getFullYear(), this.minTime.getMonth(), this.minTime.getDate(), this.minTime.getHours(), this.minTime.getMinutes())).toISOString();
        }
        else {
            if (minZZ > parseInt(station.time)) {
                this.minTime.setHours(this.minTime.getHours() + 3);
                this.minTime.setMinutes(0);
            } else {
                this.minTime.setHours(this.minTime.getHours() + 2);
            }

            this.minTime = new Date(Date.UTC(this.minTime.getFullYear(), this.minTime.getMonth(), this.minTime.getDate(), this.minTime.getHours(), this.minTime.getMinutes())).toISOString();

            if (parseInt(this.datePipe.transform(new Date(), 'HH')) + 2 >= parseInt(this.hour) + 10) {
                console.log("hour", this.hour);
                this.minTime = "";
                this.showNoTimeScheduleToast();
            }
        }
    }

    disableShutterTime() {
        return (!this.Booking.pickup || !this.minTime) ? true : false;
    }
}
