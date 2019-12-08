const cbw = require('../src/clothes-by-weather')

test("Chilly temperature december day", () => {
    const input = {
        'description': 'Light Rain',
        'temperature': 3.52,
        'windGust': 5.29,
        'pop': 0.71
    }
    const expected = {
        'upperbody': ['coat', 'sweater'],
        'misc': ['gloves', 'hat', 'scarf', 'umbrella'],
        'shoes': 'boots',
        'lowerbody': 'pants'
    }
    expect(cbw(input)).toEqual(expected)
})

test("Partly cloudy vancouver day", () => {
    const input = {
        'description': 'Partly Cloudy',
        'temperature': 6.36,
        'windGust': 1.49,
        'pop': 0,
    }
    const expected = {
        'upperbody': ['warm jacket', 'sweater'],
        'misc': ['gloves', 'hat', 'scarf'],
        'shoes': 'boots',
        'lowerbody': 'pants'
    }
    expect(cbw(input)).toEqual(expected)
})

test("clear winter day", () => {
    const input = {
        'description': 'clear',
        'pop': 0,
        'windGust': 1.73,
        'temperature': -8.95,
    }
    const expected = {
        'upperbody': ['coat', 'sweater'],
        'lowerbody': 'pants',
        'shoes': 'boots',
        'misc': ['gloves', 'hat', 'scarf', 'sunglasses'],
    }
    expect(cbw(input)).toMatchObject(expected)
})
