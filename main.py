while True:
    print("Light Level:" + input.light_level())
    if input.light_level()  > 20: 
        light.set_all(light.rgb( 0, 0, 0 ))
    elif input.light_level() >= 20:
        light.set_all(light.rgb( 255, 255, 0))
    else:
        light.set_pixel_color(4, light.rgb(0, 0, 255))
    
