scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let enemy2: Sprite = null
let enemy: Sprite = null
let hero_Img = sprites.castle.heroFrontAttack1
let enemy_Img = sprites.builtin.forestSnake2
let enemy_Img2 = sprites.builtin.forestBat4
// Create Adventurer
let Adventurer = sprites.create(hero_Img, SpriteKind.Player)
controller.moveSprite(Adventurer)
tiles.setTilemap(tilemap`level_0`)
scene.cameraFollowSprite(Adventurer)
info.setLife(3)
info.startCountdown(35)
tiles.placeOnTile(Adventurer, tiles.getTileLocation(3, 3))
// enemy spawn
game.onUpdateInterval(1000, function () {
    enemy = sprites.create(enemy_Img, SpriteKind.Enemy)
    tiles.placeOnRandomTile(enemy, sprites.dungeon.purpleOuterEast0)
    enemy.setVelocity(-50, 0)
    enemy.setFlag(SpriteFlag.DestroyOnWall, true)
})
// enemy spawn
game.onUpdateInterval(800, function () {
    enemy2 = sprites.create(enemy_Img2, SpriteKind.Enemy)
    tiles.placeOnRandomTile(enemy2, sprites.dungeon.purpleOuterWest0)
    enemy2.setVelocity(-50, 0)
    enemy2.setFlag(SpriteFlag.DestroyOnWall, true)
})
