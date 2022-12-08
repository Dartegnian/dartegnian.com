import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
	selector: 'skill-info',
	templateUrl: './skill-info.component.html',
	styleUrls: ['./skill-info.component.scss']
})
export class SkillInfoComponent implements OnInit {
	mbtiAttributes = [
		"Extraverted",
		"iNtuitive",
		"Feeling",
		"Prospecting",
		"Turbulent"
	];
	mbtiAttributeIndex = 0;
	mbtiAttributeCharacter = 0;
	mbtiAttribute = this.mbtiAttributes[this.mbtiAttributeIndex];
	cursorInterval: ReturnType<typeof setTimeout> | undefined;
	isBrowser: boolean = false;

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object
	) {
		this.isBrowser = isPlatformBrowser(this.platformId);
	}

	ngOnInit(): void {
		if (this.isBrowser) { 
			this.cursorInterval = setInterval(() => this.writeType(), 100);
		}
	}

	writeType() {
		const activeText = this.mbtiAttributes[this.mbtiAttributeIndex].substring(0, this.mbtiAttributeCharacter + 1);
		this.mbtiAttribute = activeText;
		this.mbtiAttributeCharacter++;

		if (activeText === this.mbtiAttributes[this.mbtiAttributeIndex]) {

			clearInterval(this.cursorInterval);
			setTimeout(() => {
				this.cursorInterval = setInterval(() => this.deleteType(), 50);
			}, 1500);
		}
	}

	deleteType() {
		const activeText = this.mbtiAttributes[this.mbtiAttributeIndex].substring(0, this.mbtiAttributeCharacter - 1);
		this.mbtiAttribute = activeText;
		this.mbtiAttributeCharacter--;

		if (activeText === "") {
			clearInterval(this.cursorInterval);

			if (this.mbtiAttributeIndex === (this.mbtiAttributes.length - 1)) {
				this.mbtiAttributeIndex = 0;
			}
			else {
				this.mbtiAttributeIndex++;
			}

			this.mbtiAttributeCharacter = 0;

			setTimeout(() => {
				this.cursorInterval = setInterval(() => this.writeType(), 100);
			}, 500);
		}
	}
}
