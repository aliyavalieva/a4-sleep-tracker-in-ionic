import { Component, OnInit, ViewChild } from '@angular/core';
import {format, parseISO} from 'date-fns';
import { Storage } from '@capacitor/storage';

import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController, ModalController, IonDatetime } from '@ionic/angular';


@Component({
  selector: 'app-overnight-sleep',
  templateUrl: './overnight-sleep.page.html',
  styleUrls: ['./overnight-sleep.page.scss'],
})
export class OvernightSleepPage implements OnInit {
  dateTime:number;
  showPicker = false;

  dateValueStart = format(new Date(),'yyyy-MM-dd') + 'T05:00:00.000Z';
  dateValueEnd = format(new Date(),'yyyy-MM-dd') + 'T05:00:00.000Z';


  formattedStringStart = '';
  formattedStringEnd = '';

  overnightSleepDataArray: OvernightSleepData[];

  constructor(private sleepService:SleepService, public alertController: AlertController) {
  }

  dateChangedStart(value){

    this.dateValueStart = value;
    this.formattedStringStart = format(parseISO(value),'HH:mm,MMM d, yyyy');
    this.showPicker = false;
  }
  dateChangedEnd(value){

    this.dateValueEnd = value;
    this.formattedStringEnd = format(parseISO(value),'HH:mm,MMM d, yyyy');
    this.showPicker = false;
  }
 
  ngOnInit() {
    this.overnightSleepDataArray = SleepService.AllOvernightData;
  }

 // ion-alert
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Entry saved',
      buttons: ['OK']
    });

    alert.present();
  }

    addEntry(){
    let overnightSleepData: OvernightSleepData = new OvernightSleepData(new Date(this.dateValueStart), new Date(this.dateValueEnd) );
    
    Storage.set({key:overnightSleepData.summaryString(), value: overnightSleepData.dateString() }).then(() => {
      this.sleepService.logOvernightData(overnightSleepData);
    });

    Storage.get({key:overnightSleepData.id}).then((usr) => {
      if(usr.value) {
      this.overnightSleepDataArray.push( JSON.parse(usr.value));
      }
    });
    this.presentAlert();
    
  }






}