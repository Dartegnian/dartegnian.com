import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'music-likes-info',
	templateUrl: './surface-test.component.html',
	styleUrls: ['./surface-test.component.scss']
})
export class SurfaceTestComponent implements OnInit {
	surfaces: Array<string> = [
		"material-colored-secondary",
		"material-container-primary",
		"material-container-secondary",
		"material-inverted-primary",

		"material-colored-tertiary",

		"material-container-secondary",
		"material-colored-primary",
		"material-container-primary",
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
		"material-inverted-secondary",
		"material-colored-tertiary"
	];

	surfaceContent = [
		{
			image: "toptrack",
			icon: "volume_up",
			heading: "No Celestial by Le Sserafim",
			subHeading: "Top track this month",
			linkText: "Watch on YouTube",
			link: "https://www.youtube.com/watch?v=pZyeb5zFQRk"
		},

		{
			image: "favegenre",
			icon: "graphic_eq",
			heading: "Vocaloid",
			subHeading: "Favorite genre at the moment",
			linkText: "Find on Spotify",
			link: "https://open.spotify.com/playlist/37i9dQZF1EIdUz13xg2Opj?si=fd704d29dbc147e4"
		},

		{
			image: "girlsgeneration",
			icon: "headphones",
			heading: "Girls' Generation",
			subHeading: "Favorite girl group",
			linkText: "Listen on Spotify",
			link: "https://open.spotify.com/artist/0Sadg1vgvaPqGTOjxu0N6c"
		},

		{
			image: "owlcity",
			icon: "spatial_audio_off",
			heading: "Owl City",
			subHeading: "Favorite single artist",
			linkText: "Listen on Spotify",
			link: "https://open.spotify.com/artist/07QEuhtrNmmZ0zEcqE9SF6"
		},

		{
			image: "favealbum",
			icon: "library_music",
			heading: "Girls & Peace by Girls' Generation",
			subHeading: "Favorite album",
			linkText: "Listen on YouTube",
			link: "https://www.youtube.com/watch?v=U-BNEOThAIY&list=PLMpIDAYcfx9zMWWKb78uIaxd2OOPl21S4"
		},

		{
			image: "pexels-john-tekeridis-340103",
			icon: "radio",
			heading: "Spotify",
			subHeading: "Streaming platform",
			linkText: "Check website",
			link: "https://open.spotify.com/"
		},

		{
			image: "faveband",
			icon: "speaker_group",
			heading: "Paramore",
			subHeading: "Favorite band",
			linkText: "Listen on Spotify",
			link: "https://open.spotify.com/artist/74XFHRwlV6OrjEM0A2NCMF"
		},

		{
			image: "luka",
			icon: "discover_tune",
			heading: "Luka Megurine",
			subHeading: "Favorite Vocaloid",
			linkText: "Listen on YouTube",
			link: "https://www.youtube.com/results?search_query=luka+megurine"
		},

		{
			image: "favevocaloidalbum",
			icon: "library_add",
			heading: "IA/02 -COLOR-",
			subHeading: "Favorite Vocaloid album",
			linkText: "Listen on Spotify",
			link: "https://open.spotify.com/album/1RTOpEWZgUlLHhZakgQsQp"
		},

		{
			image: "pexels-florian-g-7220729",
			icon: "speed",
			heading: "130+",
			subHeading: "Preferred BPM",
			linkText: "More about it",
			link: "https://open.spotify.com/album/3Z1xX2MHZYNvuCIJ7osBdn"
		},

		{
			image: "toptrackyear",
			icon: "repeat_one",
			heading: "Coffee by Beabadobee",
			subHeading: "Song of the year",
			linkText: "Listen on Spotify",
			link: "https://open.spotify.com/track/429NtPmr12aypzFH3FkN9l"
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
