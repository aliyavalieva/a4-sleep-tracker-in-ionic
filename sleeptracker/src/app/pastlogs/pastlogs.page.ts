import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';

@Component({
  selector: 'app-Pastlogs',
  templateUrl: './Pastlogs.page.html',
  styleUrls: ['./Pastlogs.page.scss'],
})
export class PastlogsPage implements OnInit {
  testArray:string[] = ['one','two','three','four'];
  overnightSleepDataArray: OvernightSleepData[];
  sleepinessDataArray: StanfordSleepinessData[];
  showSleepDataCards: boolean;
  showSleepinessDataCards: boolean;

  constructor(private sleepService:SleepService) { }

  ngOnInit() {
    this.overnightSleepDataArray = SleepService.AllOvernightData;
    this.sleepinessDataArray = SleepService.AllSleepinessData;
    this.showSleepDataCards = true;
    this.showSleepinessDataCards = false;
  }

  segmentChanged(ev: any) {
    if(ev.detail.value=="sleepData") {
      this.showSleepDataCards = true; 
      this.showSleepinessDataCards = false;
    } else if (ev.detail.value=="sleepinessData"){
      this.showSleepDataCards = false;
      this.showSleepinessDataCards = true;
    }
  }

}