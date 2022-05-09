import { faker } from '@faker-js/faker'

export function recommendationBodyFactory() {
	const song = {
		name: faker.lorem.words(2),
		youtubeLink: 'https://www.youtube.com/watch?v=IXXxciRUMzE',
	}

	return song
}
