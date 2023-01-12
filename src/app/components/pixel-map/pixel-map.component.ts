import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { calendarDays, calendarMonths } from '@data/pixel-map/pixel-map-calendar';
import IPixelMapDay from "@interfaces/pixel-map-day.interface";

@Component({
	selector: 'pixel-map',
	templateUrl: './pixel-map.component.html',
	styleUrls: ['./pixel-map.component.scss']
})
export class PixelMapComponent {
	calendar: any;
	legendData: any;

	activeMonth: number;
	activeDate: number;
	activeStatus: IPixelMapDay["status"] | undefined;
	isModalOpen: boolean;
	activeData: IPixelMapDay | undefined;
	
	@Input() setModalCloseEvent = false;
	@Output() setModalEvent = new EventEmitter<boolean>();

	constructor() {
		this.activeMonth = 0;
		this.activeDate = 1;
		this.isModalOpen = false;

		this.calendar = {
			days: [],
			months: calendarMonths,
			data: calendarDays
		};
		this.legendData = [
			{ class: "special", text: "Special" },
			{ class: "excellent", text: "Excellent" },
			{ class: "good", text: "Good" },
			{ class: "above-average", text: "Above Average" },
			{ class: "average", text: "Average" },
			{ class: "below-average", text: "Below Average" },
			{ class: "bad", text: "Bad" },
			{ class: "awful", text: "Awful" },
		];
		this.buildCalendar();
	}

	ngOnChanges(changes: SimpleChanges) {
		for (const propName in changes) {
			const chng = changes[propName];
			const cur  = JSON.stringify(chng.currentValue);
			const prev = JSON.stringify(chng.previousValue);
			if (prev === "true" && cur === "false") {
				this.isModalOpen = false;
				this.activeStatus = undefined;
			}
		}
	}

	buildCalendar() {
		this.calendar.days = Array(31).fill(1).map((x, i) => i);
	}

	setActiveDate(month: number, date: number, event: Event) {
		event.stopPropagation();
		this.activeMonth = month;
		this.activeDate = date;

		if (this.calendar.data?.[this.activeMonth]?.[this.activeDate]) {
			this.setIsModalOpen(true);
			this.activeData = this.calendar.data[month][date];
			this.activeStatus = this.activeData?.status;
		} else {
			this.setIsModalOpen(false);
		}
	}

	setIsModalOpen(isOpen: boolean) {
		this.isModalOpen = isOpen;
		this.setModalEvent.emit(isOpen);

		if (!isOpen) {
			this.activeStatus = undefined;
		}
	}
}
