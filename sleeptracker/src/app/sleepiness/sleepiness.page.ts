import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

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


  constructor(private sleepService:SleepService) { }

  ngOnInit() {
    this.sleepinessDataArray = SleepService.AllSleepinessData;
  }

  addEntry() {
    this.dateTime = Date.now();
    let stanfordSleepinessData:StanfordSleepinessData = new StanfordSleepinessData(this.degree, this.dateTime);
    this.sleepService.logSleepinessData(stanfordSleepinessData); 

  }
}