import { Component } from '@angular/core';
import {
  IonicPage,
  NavController, NavParams,
  AlertController,
  ModalController,
  LoadingController
} from 'ionic-angular';

import { BookingModalPage } from '../booking-modal/booking-modal'

/**
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage {

  //init variables
  referenceNumber = 10000000;
  Booking = {
    referenceNumber: '',
    contact: '',
    contactNumber: '',
    carerName: '',
    carerContactNumber: '',
}
  minCounter = 600;
  secCounter = 0;
  min = 10;

  timer;

  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController) {
    this.Booking = this.navParams.get('Booking');   
    console.log('hoooy', this.Booking);
    this.Booking.contact = '陳大文';
    this.Booking.contactNumber = '6666 8888';
    this.Booking.carerName = '陳小文';
    this.Booking.carerContactNumber = '9999 2222';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationPage');
    this.initTimer();
  }

  ionViewDidLeave() {
    clearInterval(this.timer);
  }

  onBookNow(Booking) {
    this.navCtrl.popToRoot();
    this.showLoader();
    this.referenceNumber++
    Booking.referenceNumber = this.referenceNumber;
    Booking.showReminder = true;
    console.log('Booking =', Booking);
    // store data in localStorage
    localStorage.setItem("booking", JSON.stringify(Booking))

    //show alert
    const alert = this.alertCtrl.create({
        title: 'Booking Successful',
        subTitle: 'Reference Number:' + Booking.referenceNumber,
        buttons: [
            {
                text: 'Check the booking',
                handler: data => {
                    console.log('Check the booking');
                    this.presentBookingModal();
                }
            },
            {
                text: 'Done'
            }
        ]
    });
    alert.present();
  }

  presentBookingModal() {
    clearInterval(this.timer);
    let bookingModal = this.modalCtrl.create(
        BookingModalPage);
    bookingModal.present();
  }

  initTimer() {
    this.timer = setInterval(() => {
      this.minCounter = this.minCounter - 1;
      //remaining min
      this.min = Math.floor(this.minCounter/60);

      //remaining sec
      this.secCounter = this.secCounter-1;
      if (this.secCounter === -1) {
        this.secCounter = 59;
      }
      console.log(this.minCounter)
      if(this.minCounter === 0 && this.secCounter === 0) {
        clearInterval(this.timer)
        this.timeoutAlert();
      }
    }, 1000);
  }

  showLoader() {
    const loader = this.loadingCtrl.create({
        duration: 2000
    });
    loader.present();
  }

  timeoutAlert() {
    let alert = this.alertCtrl.create({
      title: 'Your time has run out',
      subTitle: 'Because you did not finish the transaction, you will be redirected to the Home page',
      buttons: [{
        text: 'Okay',
        handler: data => {
          this.navCtrl.popToRoot();
        }
      }]
    });
    alert.present();
  }
}
