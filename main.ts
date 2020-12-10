while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 20) {
        light.setAll(light.rgb(0, 0, 0))
    } else if (input.lightLevel() >= 20) {
        light.setAll(light.rgb(255, 255, 0))
    } else {
        light.setPixelColor(4, light.rgb(0, 0, 255))
    }
    
}
