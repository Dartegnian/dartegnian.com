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

	constructor() { }

	ngOnInit(): void {
	}

}
