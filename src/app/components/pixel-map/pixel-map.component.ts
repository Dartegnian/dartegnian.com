import { Component } from '@angular/core';
import { calendarDays, calendarMonths } from '@data/pixel-map/pixel-map-calendar';

@Component({
	selector: 'pixel-map',
	templateUrl: './pixel-map.component.html',
	styleUrls: ['./pixel-map.component.scss']
})
export class PixelMapComponent {
	calendar: any;
	legendData: any;

	constructor() {
		this.calendar = {
			days: [],
			months: calendarMonths,
			data: calendarDays
		};
		this.legendData = [
			{ class: "special", text: "Special" },
			{ class: "excellent", text: "Excellent" },
			{ class: "above-average", text: "Above Average" },
			{ class: "average", text: "Average" },
			{ class: "below-average", text: "Below Average" },
			{ class: "bad", text: "Bad" },
			{ class: "awful", text: "Awful" },
		];
		this.buildCalendar();
	}

	buildCalendar() {
		this.calendar.days = Array(31).fill(1).map((x, i) => i);
	}
}
