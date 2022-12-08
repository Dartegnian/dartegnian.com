import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'personal-stats',
	templateUrl: './personal-stats.component.html',
	styleUrls: ['./personal-stats.component.scss']
})
export class PersonalStatsComponent implements OnInit {
	stats = [
		{
			icon: "flag",
			heading: "Filipino",
			subheading: "Nationality",
			link: "https://en.wikipedia.org/wiki/Filipinos"
		},
		{
			icon: "local_florist",
			heading: "Sunflowers",
			subheading: "Favorite flower",
			link: "https://www.bloomandwild.com/meaning-and-symbolism-of-sunflowers"
		},
		{
			icon: "self_improvement",
			heading: "ENFP-T",
			subheading: "MBTI",
			link: "https://www.16personalities.com/enfp-personality"
		},
		{
			icon: "auto_awesome",
			heading: "Capricorn",
			subheading: "Zodiac",
			link: "https://en.wikipedia.org/wiki/Capricorn_(astrology)"
		},
	];
	shuffledArray: any[];

	constructor() {
		this.shuffledArray = this.shuffleArray(this.stats);
	}

	ngOnInit(): void {
	}


	shuffleArray(array: any[]) {
		// Thank you, StackOverflow
		// https://stackoverflow.com/questions/60787865/randomize-array-in-angular
		let m = array.length, t, i;

		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}

		return array;
	}
}
