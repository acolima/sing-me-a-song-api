import { prisma } from '../../../src/database.js'

export async function truncateRecommendations() {
	await prisma.$executeRaw`TRUNCATE TABLE recommendations;`
}

export async function disconnect() {
	await prisma.$disconnect()
}

export async function findRecommendationByName(name: string) {
	return await prisma.recommendation.findUnique({
		where: { name },
	})
}

export async function findRecommendationById(id: number) {
	return await prisma.recommendation.findUnique({
		where: { id },
	})
}
