
/*En el espacio nadie puede oir tus gritos: alien*/
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"assets/images/fondo2.png");
		me.load.spritesheet("crow","assets/images/planet 40 frames.png",99,99);
		me.load.spritesheet("man","assets/images/ship9.png",127,116);
		me.load.spritesheet("sat","assets/images/saturn4.png",300,298);
		me.load.spritesheet("mars","assets/images/marte.png",100,100);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
		
		me.crow= me.game.add.sprite(100,310,"crow");
		me.crow.animations.add("right",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],8,true);
		me.crow.animations.add("left",[39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20],8,true);
		me.crow.animations.play("right");

		//me.man=me.game.add.sprite('man', [0,1,2,3,4,3,2,1,0], 5, true);
		me.sat=me.game.add.sprite(90,1,"sat");
		me.sat.animations.add("right",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],7,true);
		me.sat.animations.add("left",[37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20],5,true);
		me.sat.animations.play("right");

		me.mars=me.game.add.sprite(760,130,"mars");
		me.mars.animations.add("right",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139],10,true);
		me.mars.animations.add("left",[37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20],7,true);
		me.mars.animations.play("right");
		
		me.man=me.game.add.sprite(100,460,"man");
		me.man.animations.add("right",[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],8,true);
		me.man.animations.add("left",[28,27,26,25,24,23,22,21,20],5,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("right");

		
    },
    update: function() {
		var me=this;
		me.crow.x+=2;
		me.man.x+=1;
		if(me.crow.x>=me.game.world.width){
			me.crow.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}
		
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");
/*diseño: Gustavo Calderon Alanes*/