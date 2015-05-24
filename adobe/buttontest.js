(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{normal:0,down:1,hover:2});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACEAAQAAA3gnAmQgmAng3AAQg2AAgngnQgmgmAAg3QAAg2AmgnQAngmA2AAQA3AAAmAmQAnAnAAA2g");
	this.shape.setTransform(13.3,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC66").s().p("AhcBdQgngnAAg2QAAg1AngnQAngnA1AAQA2AAAnAnQAnAnAAA1QAAA2gnAnQgnAng2AAQg1AAgngng");
	this.shape_1.setTransform(13.3,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF66").s().p("AhdBdQgmgnAAg2QAAg2AmgmQAngnA2AAQA2AAAnAnQAnAmAAA2QAAA2gnAnQgnAng2AAQg2AAgngng");
	this.shape_2.setTransform(10.3,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF66").s().p("AhcBdQgngnAAg2QAAg1AngnQAngnA1AAQA2AAAnAnQAnAnAAA1QAAA2gnAnQgnAng2AAQg1AAgngng");
	this.shape_3.setTransform(13.3,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:13.3,y:13.3}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{x:10.3,y:20.3}}]},1).to({state:[{t:this.shape_3},{t:this.shape,p:{x:13.3,y:13.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.5,28.5);


// stage content:
(lib.buttontest = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hit();
	this.instance.setTransform(318.2,245.2,1,1,0,0,0,13.2,13.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(579.5,431.5,27.5,27.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;