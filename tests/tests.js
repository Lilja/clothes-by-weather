const assert = require("assert");
const cbw = require('./src/clothes-by-weather')


test("Chilly temperature december day", () => {
    const input = {
        'description': 'Possible Light Rain',
        'temperature': 2,
        'feelsLike': -2,
        'windGust': 5,
        'humidity': 100,
    }
    const expected = {
        'upperbody': ['coat', 'sweater'],
        'misc': ['gloves', 'hat', 'scarf']
    }
    expect(clothesByWeather(input)).toBe(expected)
})