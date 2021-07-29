function fight () {
    battle = true
}
let battle = false
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
let statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar.value = 100
statusbar.setLabel("HP", 7)
statusbar2.max = 50
statusbar2.value += 50
statusbar2.setLabel("HP", 2)
tiles.loadMap(tiles.createMap(tilemap`level2`))
let mySprite = sprites.create(assets.image`head default2`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
statusbar.attachToSprite(mySprite)
statusbar2.attachToSprite(mySprite2)
grid.place(mySprite, tiles.getTileLocation(7, 3))
controller.moveSprite(mySprite)
forever(function () {
    if (statusbar.value == 0) {
        game.over(false)
    }
    if (statusbar2.value == 0) {
        mySprite.setStayInScreen(false)
        pause(2000)
        statusbar2.value = 50
        mySprite.setStayInScreen(true)
        grid.place(mySprite, tiles.getTileLocation(randint(2, 13), randint(2, 13)))
    }
    if (battle == false) {
        if (mySprite.overlapsWith(mySprite2)) {
            fight()
        }
    }
})
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
