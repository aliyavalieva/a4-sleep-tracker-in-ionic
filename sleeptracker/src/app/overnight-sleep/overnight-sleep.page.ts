import { Component, OnInit, ViewChild } from '@angular/core';
import {format, parseISO} from 'date-fns';

import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController, ModalController, IonDatetime } from '@ionic/angular';
//import { format } from 'path';

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: './overnight-sleep.page.html',
  styleUrls: ['./overnight-sleep.page.scss'],
})
export class OvernightSleepPage implements OnInit {

  showPicker = false;

  dateValueStart = format(new Date(),'yyyy-MM-dd') + 'T05:00:00.000Z';
  dateValueEnd = format(new Date(),'yyyy-MM-dd') + 'T05:00:00.000Z';

  formattedStringStart = '';
  formattedStringEnd = '';

  start:Date;
  end:Date;
  sleepDataArray: OvernightSleepData[];

  constructor(private sleepService:SleepService, public alertController: AlertController,
    private modalController:ModalController ) {}
  
  setStart(){
    this.formattedStringStart = format(parseISO(format(new Date(),'yyyy-MM-dd') + 'T11:00:00.000Z'),'HH:mm,MMM d, yyyy');
    }
  setEnd(){
      this.formattedStringEnd = format(parseISO(format(new Date(),'yyyy-MM-dd') + 'T11:00:00.000Z'),'HH:mm,MMM d, yyyy');
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
    this.sleepDataArray = SleepService.AllOvernightData;
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

    // //this.startDateTime = new Date().toISOString();
    // //this.endDateTime = new Date().toISOString();
    // console.log('overnight-sleep.page addEntryClicked()');
    // console.log('startDate: ' + this.start);
    // console.log('endDate: ' + this.end);
    // this.start = new Date(this.start);
    // this.end = new Date(this.end);

    let overnightSleepData: OvernightSleepData = new OvernightSleepData(new Date(this.dateValueStart), new Date(this.dateValueEnd));
    
    this.sleepService.logOvernightData(overnightSleepData);
    this.presentAlert();
    

    //Summary
    /*this.sleepService.summaryOfAllOvernightData();
    this.sleepService.summaryOfAllSleepinessData();
    this.sleepService.summaryOfAllSleepData();*/
    //this.sleepService.getAllOvernightDataFromStorage();
    //this.sleepService.getAllSleepinessDataFromStorage();
    
  }






}
