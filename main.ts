while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (0 < "Light Level:" + input.lightLevel && "Light Level:" + input.lightLevel > 129) {
        light.clear()
    } else {
        light.setPixelColor(4, light.rgb(0, 0, 255))
    }
    
}
