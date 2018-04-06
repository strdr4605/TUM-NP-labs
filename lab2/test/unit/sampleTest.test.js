import { sampleTest } from './../../src/sampleTest'

test('return param value', () => {
    let value = true
    expect(sampleTest(value)).toBe(value)
})

test('return param value, 2nd test', () => {
    expect(sampleTest(1)).toBe(1)
})