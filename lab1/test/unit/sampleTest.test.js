import { sampleTest } from './../../src/sampleTest'

test('return param value', () => {
    let value = true
    expect(sampleTest(value)).toBe(value)
})