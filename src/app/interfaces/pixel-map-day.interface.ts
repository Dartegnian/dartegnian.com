interface IPixelMapDay {
	status: "special" | "excellent" | "good" | "above-average" | "average" | "below-average" | "bad" | "awful";
	title?: string;
	icon?: string;
	reason?: string;
	spotify?: {
		artist: string;
		song: string;
		link: string;
	}
}

// template
// { status: "average" },
// { status: "average", title: "aaaa" , icon: "aaaa", icon: "aaaa", reason: "aaaa" }

export default IPixelMapDay;
