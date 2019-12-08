# Clothes by weather
A javascript function that looks to the weather to decide what you should wear when going outside.

The project is API-agnostic and should be used on top of a weather api. For testing, I've decided to [use darksky api](https://darksky.net/).

## Inputs
The function expects a few inputs to function properly

### Description
A string, a summary of the day. Like `Possible light rain`.

### Temperature
The temperature, in celsuis

### Wind
The wind gust, in m/s

### Feelslike
Many API provide this information in regards to temperature, perhaps we can use it?

### Humidity
-

Spawned by this [reddit thread](https://www.reddit.com/r/startpages/comments/e7n16i/temperature_to_clothes_converter/).