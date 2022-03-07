import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@capacitor/storage';
import { AlertController, ModalController, IonDatetime } from '@ionic/angular';
@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  dateTime:number;
  degree:number;
  scaleValues: string[];
  sleepinessDataArray: StanfordSleepinessData[];


  constructor(private sleepService:SleepService, public alertController: AlertController) { }

  ngOnInit() {
    this.sleepinessDataArray = SleepService.AllSleepinessData;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Entry saved',
      buttons: ['OK']
    });

    alert.present();
  }
  addEntry() {
    this.dateTime = Date.now();
    let stanfordSleepinessData:StanfordSleepinessData = new StanfordSleepinessData(this.degree, this.dateTime);
    
    Storage.set({key:stanfordSleepinessData.summaryString(), value: stanfordSleepinessData.dateString() }).then(() => {
      this.sleepService.logSleepinessData(stanfordSleepinessData); 

    });

    Storage.get({key:stanfordSleepinessData.id}).then((usr) => {
      if(usr.value) {
      this.sleepinessDataArray.push( JSON.parse(usr.value));
      }
    });
    this.presentAlert();
    
  }
}