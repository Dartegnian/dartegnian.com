import { Component } from '@angular/core';
import { calendarDays, calendarMonths } from '@data/pixel-map/pixel-map-calendar';

@Component({
	selector: 'pixel-map',
	templateUrl: './pixel-map.component.html',
	styleUrls: ['./pixel-map.component.scss']
})
export class PixelMapComponent {
	calendar: any;

	constructor() {
		this.calendar = {
			days: [],
			months: calendarMonths,
			data: calendarDays
		};
		this.buildCalendar();
	}

	buildCalendar() {
		this.calendar.days = Array(31).fill(1).map((x, i) => i);
	}
}
