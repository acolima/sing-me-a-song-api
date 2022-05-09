export function recommendationResponseFactory(score: number) {
	return {
		id: 5,
		name: 'Lost Cause - Billie Eilish',
		youtubeLink: 'https://www.youtube.com/watch?v=S2dRcipMCpw',
		score,
	}
}
