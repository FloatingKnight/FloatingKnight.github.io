var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

var mainState = {
    preload: function() {
        // Load game assets here
        game.load.image('rectangle', 'path/to/rectangle.png');
    },
    create: function() {
        // Initialize game objects and settings here
        this.rectangle = game.add.rectangle(50, 50, 20, 20, 0xFF00FF);
        this.bullets = game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(50, 'bullet');
        this.bullets.setAll('checkWorldBounds', true);
        this.bullets.setAll('outOfBoundsKill', true);
        this.cursor = game.input.keyboard.createCursorKeys();
        this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.fireButton.onDown.add(this.fire, this);
        this.nextFire = 0;
    },
    update: function() {
        // Handle game logic and updates here
        if (this.cursor.left.isDown) {
            this.rectangle.x -= 2;
        } else if (this.cursor.right.isDown) {
            this.rectangle.x += 2;
        }
        if (this.cursor.up.isDown && this.rectangle.body.touching.down) {
            this.rectangle.body.velocity.y = -320;
        }
    }
};

game.state.add('main', mainState);
game.state.start('main');