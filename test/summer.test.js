const cbw = require('../src/clothes-by-weather')


test("Warm, sunny day", () => {
    const input = {
        description: 'clear',
        temperature: 25.8,
        windGust: 2.94,
        pop: 0,
    }
    const expected = {
        'upperbody': ['shirt'],
        'misc': ['sunglasses'],
        'shoes': 'sneakers',
        'lowerbody': 'shorts'
    }
    expect(cbw(input)).toEqual(expected)
})