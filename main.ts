input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . # #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # # #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # # . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showString(" 6:30 AM")
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        music.stopAllSounds()
    }
})
