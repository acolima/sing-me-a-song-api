import { recommendationBodyFactory } from './recommendationBodyFactory'
import { prisma } from '../../../src/database.js'

export async function multipleRecommendationsFactory(length: number) {
	const recommendations = Array.from({ length }, () => {
		return recommendationBodyFactory()
	})

	await prisma.recommendation.createMany({ data: recommendations })
}
