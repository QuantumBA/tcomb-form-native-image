const {arrayStrings} = require('../lib/transformers')


describe('arrayStrings', function()
{
  describe('default arguments', function()
  {
    const transformer = arrayStrings()

    describe('format', function()
    {
      test('array', function()
      {
        expect(transformer.format(['a', 'b'])).toBe('a b')
      })

      test('random value', function()
      {
        const expected = {}

        expect(transformer.format(expected)).toBe(expected)
      })
    })

    describe('parse', function()
    {
      test('no value', function()
      {
        expect(transformer.parse()).toEqual([])
      })

      test('value', function()
      {
        const expected = 'a b'

        expect(transformer.parse(expected)).toEqual(['a', 'b'])
      })
    })
  })

  describe('custom arguments', function()
  {
    const transformer = arrayStrings(',', '|')

    describe('format', function()
    {
      test('array', function()
      {
        expect(transformer.format(['a', 'b'])).toBe('a|b')
      })

      test('random value', function()
      {
        const expected = {}

        expect(transformer.format(expected)).toBe(expected)
      })
    })

    describe('parse', function()
    {
      test('no value', function()
      {
        expect(transformer.parse()).toEqual([])
      })

      test('value', function()
      {
        const expected = 'a,b'

        expect(transformer.parse(expected)).toEqual(['a', 'b'])
      })
    })
  })
})
