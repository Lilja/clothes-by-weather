const log = '👖'

function umbrella(pop, description) {
    if (description.includes('snow')) {
        return
    }
    if (pop > 0.20 && pop < 0.40) {
        return 'maybe umbrella'
    }
    
    if (pop > 0.40) {
        return 'umbrella'
    }
    return 
}

function windBreaker(windGust) {
   if (windGust > 7) {
       return 'windbreaker'
   }
   return
}

function rainJacket(temperature, pop, description) {
    const getUmbrella = umbrella(pop, description)
    if(getUmbrella && temperature > 10) {
       return 'rain jacket' 
    }
    return
}

function jackets(temperature) {
    if (temperature >= 15 && temperature < 18) {
        return 'light jacket'
    }
    if (temperature <= 15 && temperature > 5) {
        return 'warm jacket'
    }
    if (temperature <= 5) {
        return 'coat'
    }
    return
}

function baselayer(temperature) {
    if (temperature > 15) {
        return 'shirt'
    }
    return 'sweater'
}

function upperbody(temperature, windGust, pop, description) {
    const upperbody = [
        windBreaker(windGust),
        rainJacket(temperature, pop, description),
        jackets(temperature),
        baselayer(temperature)
    ].filter(p => typeof p !== 'undefined')
    return upperbody
}

function lowerbody(temperature, windGust) {
    if (temperature > 20) {
        if (windGust > 8) {
            return 'pants'
        }
        return 'shorts'
    } else {
        return 'pants'
    }
}

function misc(description, temperature, pop) {
    const obj = []
    if (temperature < 10) {
        obj.push(
            'gloves',
            'hat',
            'scarf'
        )
        if (temperature < -10) {
            obj.push('warm socks')
        }
    }
    const getUmbrella = umbrella(pop, description)
    if (getUmbrella) {
        obj.push(getUmbrella)
    }
    const keywords = ['clear', 'sun', 'sunny']
    const containsSunnyKeywords = keywords.some(keyword => keyword.includes(description))
    if (containsSunnyKeywords) {
        obj.push('sunglasses')
    }
    return obj
}

function shoes(temperature, pop, description) {
    if (temperature > 10) {
        if (umbrella(pop, description)) {
            return 'rain boots'
        }
        return 'sneakers'
    }
    return 'boots'
}

function validate(description, temperature, windGust, pop) {
    return {'ok': true}
}

module.exports = function clothesByWeather(
    {description, temperature, feelsLike, windGust, humidity, pop}
) {
    // Assumes all metrics units are celsius,m/s
    let _description = description.toLowerCase()
    const validation = validate(description, temperature, windGust, pop)
    if (!validation.ok) {
        return validation.error
    }
    return {
        'upperbody': upperbody(temperature, windGust, pop, description),
        'lowerbody': lowerbody(temperature, windGust),
        'shoes': shoes(temperature, pop, description),
        'misc': misc(_description, temperature, pop)
    }
}