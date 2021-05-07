let dau = 0
input.onGesture(Gesture.ScreenDown, function () {
    dau = randint(1, 6)
    if (dau == 1) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . # .
            . . . # .
            . . . # .
            `)
        basic.pause(2000)
    } else if (dau == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
        basic.pause(2000)
    } else if (dau == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . . . # .
            . # # # .
            `)
        basic.pause(2000)
    } else if (dau == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
        basic.pause(2000)
    } else if (dau == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.pause(2000)
    }
    basic.clearScreen()
})
