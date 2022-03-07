import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	 
	
	 sleepStart:Date;
	 sleepEnd:Date;

	constructor(sleepStartt:Date, sleepEndd:Date) {
		super();
		this.sleepStart = sleepStartt;
		this.sleepEnd = sleepEndd;

	}

	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		
		return Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";


	}
	

	dateString():string {
		
		return "You went to bed at: " + this.sleepStart + " and woke up at: " + this.sleepEnd;

		// return "Night of " + 
		// this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })+
		// "You went to bed at: " + this.summaryString() + " and woke up at: " 
		// + this.sleepEnd.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) +
		// this.summaryString() ;
	}
}
