const assert = require("assert");
const cbw = require('./../src/clothes-by-weather')


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
        'misc': ['gloves', 'hat', 'scarf', 'umbrella']
    }
    expect(cbw(input)).toBe(expected)
})

test("somewhat snowy december day", () => {
    const input = {
        'description': 'Possible Light Snow',
        'temperature': -1,
        'feelsLike': -5,
        'windGust': 4,
        'humidity': 97
    }
    const expected = {
        'upperbody': ['coat', 'sweater'],
        'misc': ['gloves', 'hat', 'scarf']
    }
    expect(cbw(input)).toBe(expected)
})

test("freezing cloudy december day", () => {
    const input = {
        'description': 'Partly Cloudy',
        'temperature': -23,
        'feelsLike': -28,
        'windGust': 2,
        'humidity': 46
    }
    const expected = {
        'upperbody': ['coat', 'sweater'],
        'misc': ['gloves', 'hat', 'scarf', 'warm socks']
    }
    expect(cbw(input)).toBe(expected)
})

test("Warm, sunny day", () => {
    const input = {
        description: 'clear',
        temperature: 30,
        feelsLike: 30,
        windGust: 3,
        humidity: 46
    }
    const expected = {
        'upperbody': ['shirt'],
        'misc': []
    }
    expect(cbw(input)).toBe(expected)
})