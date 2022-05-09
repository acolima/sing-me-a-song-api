import supertest from 'supertest'
import app from '../../src/app.js'
import { multipleRecommendationsFactory } from '../factories/multipleRecommendationsFactory.js'
import { recommendationBodyFactory } from '../factories/recommendationBodyFactory.js'
import { recommendationFactory } from '../factories/recommendationFactory.js'
import {
	disconnect,
	findRecommendationById,
	findRecommendationByName,
	truncateRecommendations,
} from './utils/testsUtils.js'

describe('Recommendations', () => {
	beforeEach(truncateRecommendations)

	afterAll(disconnect)

	describe('POST /recommendations', () => {
		it('should add and persist a new song recommendation', async () => {
			const song = recommendationBodyFactory()

			const result = await supertest(app).post('/recommendations').send(song)

			const createdSong = await findRecommendationByName(song.name)

			expect(result.status).toEqual(201)
			expect(createdSong).not.toBe(null)
		})
	})

	describe('GET /recommendations', () => {
		it('should return status 200 and 10 recommendations', async () => {
			await multipleRecommendationsFactory(13)

			const result = await supertest(app).get('/recommendations')

			expect(result.status).toEqual(200)
			expect(result.body.length).toBeLessThanOrEqual(10)
		})
	})

	describe('GET /recommendations/random', () => {
		it('should return status 200 and a random recommendation', async () => {
			await multipleRecommendationsFactory(5)

			const result = await supertest(app).get('/recommendations/random')

			expect(result.status).toEqual(200)
			expect(result.body).not.toBe(null)
		})
	})

	describe('GET /recommendations/top/:amount', () => {
		it('should return status 200 and the top recommendations', async () => {
			await multipleRecommendationsFactory(5)
			const amount = 3

			const result = await supertest(app).get(`/recommendations/top/${amount}`)

			expect(result.status).toEqual(200)
			expect(result.body.length).toEqual(amount)
		})
	})

	describe('GET /recommendations/:id', () => {
		it('should return status 200 and the recommendation found by id', async () => {
			const song = recommendationBodyFactory()
			const createdRecommendation = await recommendationFactory(song)

			const result = await supertest(app).get(
				`/recommendations/${createdRecommendation.id}`
			)

			expect(result.status).toEqual(200)
			expect(result.body.id).toEqual(createdRecommendation.id)
		})
	})

	describe('POST /recommendations/:id/upvote', () => {
		it('should return status 200 and increment the recommendation score with 1', async () => {
			const song = recommendationBodyFactory()
			const createdRecommendation = await recommendationFactory(song)

			const result = await supertest(app).post(
				`/recommendations/${createdRecommendation.id}/upvote`
			)

			const recommendation = await findRecommendationById(
				createdRecommendation.id
			)

			expect(result.status).toEqual(200)
			expect(recommendation.score).toEqual(createdRecommendation.score + 1)
		})
	})

	describe('POST /recommendations/:id/downvote', () => {
		it('should return status 200 and decrement the recommendation score with 1', async () => {
			const song = recommendationBodyFactory()
			const createdRecommendation = await recommendationFactory(song)

			const result = await supertest(app).post(
				`/recommendations/${createdRecommendation.id}/downvote`
			)

			const recommendation = await findRecommendationById(
				createdRecommendation.id
			)

			expect(result.status).toEqual(200)
			expect(recommendation.score).toEqual(createdRecommendation.score - 1)
		})
	})
})
