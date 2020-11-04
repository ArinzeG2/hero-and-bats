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
tiles.setTilemap(tiles.createTilemap(hex`1000100008060606060606060606060606060605070909090909090909090909090909040706060606060606070909090909090407010101010109090709090909090904070909090909090907090909090909040701010109090909070909070409090407090909090909090709090704090904070909010909090907090909090909040709090909090909070909070409090407090904090909060909090704090904070909010909090909090909090509040709090909090906090909090904090407090901010101010101010101030904070909090909090909090909090909040709090909090909090909090909090402010101010101010101010101010103`, img`
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundCenter], TileScale.Sixteen))
info.setLife(3)
// enemy spawn
game.onUpdateInterval(1000, function () {
    enemy = sprites.create(enemy_Img, SpriteKind.Enemy)
    enemy.setPosition(160, randint(0, 120))
    enemy.setVelocity(-50, 0)
    enemy.setFlag(SpriteFlag.AutoDestroy, true)
})
// enemy spawn
game.onUpdateInterval(800, function () {
    enemy2 = sprites.create(enemy_Img2, SpriteKind.Enemy)
    enemy2.setPosition(160, randint(0, 120))
    enemy2.setVelocity(-50, 0)
    enemy2.setFlag(SpriteFlag.AutoDestroy, true)
})
