import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BookingModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-modal',
  templateUrl: 'booking-modal.html',
})
export class BookingModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }
  Booking = JSON.parse(localStorage.getItem("booking"));

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingModalPage');

  }

  goToHome() {
    this.viewCtrl.dismiss();
  }
}
