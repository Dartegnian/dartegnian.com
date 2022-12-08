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
			image: "",
			icon: "",
			heading: "\"No Celestial\" by Le Sserafim",
			subHeading: "Top track this month"
		},

		{
			image: "",
			icon: "",
			heading: "Vocaloid",
			subHeading: "Favorite genre at the moment"
		},

		{
			image: "",
			icon: "",
			heading: "Girls' Generation",
			subHeading: "Favorite girl group"
		},

		{
			image: "",
			icon: "",
			heading: "Owl City",
			subHeading: "Favorite single artist"
		},

		{
			image: "",
			icon: "",
			heading: "\"Girls & Peace\" by Girls' Generation",
			subHeading: "Favorite album"
		},

		{
			image: "",
			icon: "",
			heading: "Spotify",
			subHeading: "Streaming platform"
		},

		{
			image: "",
			icon: "",
			heading: "Paramore",
			subHeading: "Favorite band"
		},

		{
			image: "",
			icon: "",
			heading: "Luka Megurine",
			subHeading: "Favorite Vocaloid"
		},

		{
			image: "",
			icon: "",
			heading: "IA/02 -COLOR-",
			subHeading: "Favorite Vocaloid album"
		},

		{
			image: "",
			icon: "",
			heading: "130+",
			subHeading: "Preferred BPM"
		},
	];

	constructor() { }

	ngOnInit(): void {
	}

}
