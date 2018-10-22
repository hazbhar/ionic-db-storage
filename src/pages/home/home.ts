import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DBStorage } from "../../services/dbstorage.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private dbstorage: DBStorage
  ) {
  }

  ionViewDidEnter() {

    // set a key/value
    this.dbstorage.setValue('name', 'Cindy');

    // Or to get a key/value pair
    this.dbstorage.getValue('name').then((val) => {
      console.log('getValue: ' + val);
    });

    // remove key/value
    this.dbstorage.removeKey('name');


  }

}
