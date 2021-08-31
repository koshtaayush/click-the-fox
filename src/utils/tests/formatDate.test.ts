import { formatDate } from './../formatDate'

describe('formatDate', () => {
    test('Should return correct date format', () => {
        let mockDate = new Date(1630449250000)
        const priceWithCurrency = formatDate(mockDate)
        expect(priceWithCurrency).toBe('2021, Sep 1')
    })
})
