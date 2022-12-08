import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'surface-test',
	templateUrl: './surface-test.component.html',
	styleUrls: ['./surface-test.component.scss']
})
export class SurfaceTestComponent implements OnInit {
	surfaces: Array<String> = [
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

	constructor() { }

	ngOnInit(): void {
	}

}
