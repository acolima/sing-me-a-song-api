import { prisma } from '../../../src/database.js'
import { CreateRecommendationData } from '../../../src/services/recommendationsService'

export async function recommendationFactory(song: CreateRecommendationData) {
	return await prisma.recommendation.create({ data: song })
}
