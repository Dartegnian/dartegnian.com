import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'mbti-characteristics',
	templateUrl: './skill-picture.component.html',
	styleUrls: ['./skill-picture.component.scss']
})
export class SkillPictureComponent implements OnInit {
	mbtiCharacteristics = [
		{
			label: "",
			direction: "left",
			percentage: 70,
			icon: "flare",
			leftCharacteristic: "Extraversion",
			rightCharacteristic: "Introversion",
		},
		{
			label: "",
			direction: "left",
			percentage: 68,
			icon: "visibility",
			leftCharacteristic: "Intuitive",
			rightCharacteristic: "Observant",
		},
		{
			label: "",
			direction: "right",
			percentage: 67,
			icon: "favorite",
			leftCharacteristic: "Thinking",
			rightCharacteristic: "Feeling",
		},
		{
			label: "",
			direction: "right",
			percentage: 85,
			icon: "gavel",
			leftCharacteristic: "Judging",
			rightCharacteristic: "Prospecting",
		},
		{
			label: "",
			direction: "right",
			percentage: 79,
			icon: "air",
			leftCharacteristic: "Assertive",
			rightCharacteristic: "Turbulent",
		}
	];

	constructor() { }

	ngOnInit(): void {
	}
}
