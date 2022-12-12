import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccentService } from 'src/app/services/accent-service.service';

@Component({
	selector: 'profile-card',
	templateUrl: './profile-card.component.html',
	styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
	name = "Dartegnian L. Velarde";
	adjectives: any[] = [
		{
			icon: "edit",
			name: "Writer"
		},
		{
			icon: "crisis_alert",
			name: "Archer"
		},
		{
			icon: "queue_music",
			name: "Vocaloid fan"
		},
		{
			icon: "terminal",
			name: "DevOps engineer"
		}
	];
	shuffledArray: any[];

	images: Array<string>;
	coverImage: string;
	secondCoverImage: string;
	accentSubscription: Subscription;
	isSecondCoverImageActive = false;

	isBrowser: boolean = false;

	constructor(
		private accent: AccentService,
		@Inject(PLATFORM_ID) private platformId: Object
	) {
		this.shuffledArray = this.shuffleArray(this.adjectives);
		this.images = this.accent.images;
		this.coverImage = this.images[this.accent.activeIndex];
		this.secondCoverImage = this.coverImage;
		this.isBrowser = isPlatformBrowser(this.platformId);

		this.accentSubscription = this.accent.accentSubscription.subscribe(
			(index: number) => {
				if (this.isBrowser) {
					setTimeout(() =>
						this.setCoverImage(index)
					, 25);
				}
			}
		);
	}

	ngOnInit(): void {
	}

	setCoverImage(index: number) {
		if (!this.isSecondCoverImageActive) {
			this.secondCoverImage = this.images[index];
			this.isSecondCoverImageActive = true;
		} else {
			this.coverImage = this.images[index];
			this.isSecondCoverImageActive = false;
		}
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
