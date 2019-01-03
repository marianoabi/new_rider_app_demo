import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

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
  Booking = {}
  counter = 600;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    this.Booking = this.navParams.get('Booking');
  //   let intervalId = setInterval(() => {
  //     this.counter = this.counter - 1;
  //     console.log(this.counter)
  //     if(this.counter === 0) clearInterval(intervalId)
  // }, 1000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationPage');
  }

    onBookNow(Booking) {
    this.referenceNumber++
    Booking.referenceNumber = this.referenceNumber; 

    //   console.log(this.booking);

        //   let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
  //   this.previousTracks.push(newRoute);
    // this.showLoader();

    console.log('Booking =', Booking);

    // store data in localStorage
    localStorage.setItem("booking", JSON.stringify(Booking))
    // this.showLoader();

    //show alert
    const alert = this.alertCtrl.create({
        title: 'Booking Successful',
        subTitle: 'Reference Number:' + Booking.refNum,
        buttons: [
            {
                text: 'Check the booking',
                handler: data => {
                    console.log('Check the booking');
                    // this.showLoader();
                    this.presentBookingModal();
                    
                    // this.showBookingAlert(Booking);
                }
            },
            {
                text: 'Go back to homepage',
                handler: data => {
                    console.log('Back to homepage');
                    this.navCtrl.popToRoot();
                }
            }
        ]
    });
    alert.present();
    }

    presentBookingModal() {
      let bookingModal = this.modalCtrl.create(
          BookingModalPage);
      bookingModal.present();
  }
}
