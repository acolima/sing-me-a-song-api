import { jest } from '@jest/globals'
import { recommendationService } from '../../src/services/recommendationsService.js'
import { recommendationRepository } from '../../src/repositories/recommendationRepository.js'
import { recommendationResponseFactory } from '../factories/recommendationResponseFactory.js'
import { recommendationBodyFactory } from '../factories/recommendationBodyFactory.js'

describe('Recommendation service unit tests', () => {
	beforeEach(() => {
		jest.clearAllMocks()
		jest.resetAllMocks()
	})

	it('should return conflict error and not create recommendation given duplicated recommendation', () => {
		const recommendation = recommendationBodyFactory()
		const recommendationResponse = recommendationResponseFactory(36)

		jest
			.spyOn(recommendationRepository, 'findByName')
			.mockResolvedValue(recommendationResponse)

		const create = jest.spyOn(recommendationRepository, 'create')

		expect(async () => {
			await recommendationService.insert(recommendation)
		}).rejects.toEqual({
			type: 'conflict',
			message: 'Recommendations names must be unique',
		})

		expect(create).not.toBeCalled()
	})

	it('should remove recommendation if their score is less than -5', async () => {
		const recommendationResponse = recommendationResponseFactory(-5)

		jest
			.spyOn(recommendationRepository, 'find')
			.mockResolvedValue(recommendationResponse)

		jest
			.spyOn(recommendationRepository, 'updateScore')
			.mockResolvedValue({ ...recommendationResponse, score: -6 })

		const removeRecommendation = jest
			.spyOn(recommendationRepository, 'remove')
			.mockResolvedValue(null)

		await recommendationService.downvote(1)

		expect(removeRecommendation).toBeCalledWith(1)
		expect(removeRecommendation).toBeCalledTimes(1)
	})

	it('should return not found error giving an inexistent id', () => {
		jest.spyOn(recommendationRepository, 'find').mockResolvedValue(null)

		expect(async () => {
			await recommendationService.upvote(1)
		}).rejects.toEqual({ type: 'not_found', message: '' })
	})

	it('should return not found error if there is no recommendations', async () => {
		jest.spyOn(recommendationRepository, 'findAll').mockResolvedValue([])

		expect(async () => {
			await recommendationService.getRandom()
		}).rejects.toEqual({ type: 'not_found', message: '' })
	})

	it("should return 'lte' if number is greater than 0.7", () => {
		expect(recommendationService.getScoreFilter(0.7)).toEqual('lte')
	})

	it('should return recommendation if length is greater than 0', async () => {
		const recommendationResponse = recommendationResponseFactory(5)

		jest
			.spyOn(recommendationRepository, 'findAll')
			.mockResolvedValue([recommendationResponse])

		const findRecommendations = await recommendationService.getByScore('gt')

		expect(findRecommendations).toEqual([recommendationResponse])
	})

	it('should truncate table recommendations', async () => {
		const truncate = jest.spyOn(recommendationRepository, 'truncate')

		await recommendationService.truncate()

		expect(truncate).toBeCalledTimes(1)
	})
})
