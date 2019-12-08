# Clothes by weather
A javascript function that looks to the weather to decide what you should wear when going outside.

The project is API-agnostic and should be used on top of a weather api. For testing, I've decided to [use darksky api](https://darksky.net/).

[NPM](https://www.npmjs.com/package/clothes-by-weather)

## Get started
* `yarn install clothes-by-weather`
```JavaScript

const cbw = require('../src/clothes-by-weather') // Module.exports
import cbw from 'clothes-by-weather' // Import/Export/es6 modules

const output = cbw({
    temperature: 10, // 10 deg celsius
    pop: 0.70, // 70% chance of precipitation
    description: 'cloudy', // Description from the weather API
    windGust: 5, // 5 meter per second
})

/* output = { 
    upperbody: [ 'warm jacket', 'sweater' ],
    lowerbody: 'pants',
    shoes: 'boots',
    misc: [ 'umbrella' ] 
   }
*/

```
## Contributing
Feel free to contribute. Take a look under the issues. Perhaps you can adjust the parameters for which clothes to pick for what occasion?

### License
MIT.

## CI
Using github actions to lint and test

## Inputs
The function expects a few inputs to function properly

### Description
A string, a summary of the day. Like `Possible light rain`.

### Temperature
The temperature, in celsuis

### Wind
The wind gust, in m/s

### Pop
Percentage of precipitation(chance/risk of raining)


## Output
An object of strings.
```JSON
{
    "upperbody": ["windbreaker|rain jacket|jacker warm jacket|coat|sweater|shirt"],
    "misc": ["umbrella|gloves|hat|warm socks|sunglasses"],
    "lowerbody": "pants|shorts",
    "shoes": "boots|rain boots|sneakers"
}
```

Spawned by this [reddit thread](https://www.reddit.com/r/startpages/comments/e7n16i/temperature_to_clothes_converter/).