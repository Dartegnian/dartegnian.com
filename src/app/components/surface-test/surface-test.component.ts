import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'surface-test',
	templateUrl: './surface-test.component.html',
	styleUrls: ['./surface-test.component.scss']
})
export class SurfaceTestComponent implements OnInit {
	surfaces: Array<string> = [
		"material-colored-secondary",
		"material-container-primary",
		"material-container-secondary",
		"material-inverted-primary",

		"material-colored-primary",
		"material-container-secondary",

		"material-colored-tertiary",
		"material-container-tertiary",
		"material-inverted-tertiary",

		"material-inverted-secondary",
	];
	largeSurfaces: Array<string> = [
		"material-colored-secondary",
		"material-container-tertiary"
	];
	wideSurfaces = [
		"material-inverted-primary",
		"material-inverted-secondary"
	];

	surfaceContent = [
		{
			image: "toptrack",
			icon: "volume_up",
			heading: "No Celestial by Le Sserafim",
			subHeading: "Top track this month"
		},

		{
			image: "favegenre",
			icon: "graphic_eq",
			heading: "Vocaloid",
			subHeading: "Favorite genre at the moment"
		},

		{
			image: "girlsgeneration",
			icon: "headphones",
			heading: "Girls' Generation",
			subHeading: "Favorite girl group"
		},

		{
			image: "owlcity",
			icon: "spatial_audio_off",
			heading: "Owl City",
			subHeading: "Favorite single artist"
		},

		{
			image: "favealbum",
			icon: "library_music",
			heading: "Girls & Peace by Girls' Generation",
			subHeading: "Favorite album"
		},

		{
			image: "pexels-john-tekeridis-340103",
			icon: "radio",
			heading: "Spotify",
			subHeading: "Streaming platform"
		},

		{
			image: "faveband",
			icon: "speaker_group",
			heading: "Paramore",
			subHeading: "Favorite band"
		},

		{
			image: "luka",
			icon: "discover_tune",
			heading: "Luka Megurine",
			subHeading: "Favorite Vocaloid"
		},

		{
			image: "favevocaloidalbum",
			icon: "library_add",
			heading: "IA/02 -COLOR-",
			subHeading: "Favorite Vocaloid album"
		},

		{
			image: "pexels-florian-g-7220729",
			icon: "speed",
			heading: "130+",
			subHeading: "Preferred BPM"
		},
	];
	shuffledArray: any[];

	constructor() {
		this.shuffledArray = this.shuffleArray(this.surfaceContent);
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
