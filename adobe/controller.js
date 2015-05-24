(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.button = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFQAAQAACMhiBiQhiBiiMAAQiLAAhhhiQhjhiAAiMQAAiLBjhiQBhhiCLAAQCMAABiBiQBiBiAACLg");
	this.shape.setTransform(33.7,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AjtDtQhihiAAiLQAAiKBihjQBjhiCKAAQCMAABiBiQBiBjAACKQAACLhiBiQhiBjiMAAQiKAAhjhjg");
	this.shape_1.setTransform(33.7,33.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,69.3,69.3);


(lib.beat = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiQDVIAAg1QABg4ACgLQAKgoAqAAQAvAAgOAbQAUgZADhJQAChbAEgqQAJhJAdgYQApgeBVAmIAHAPQgOALgRAGQgbAJgzAJIgCANIAHACIBhAtIAHAPQgGAUgdAAQgmAAgqgaIgCgBQgCAhAAArQgCBsgEAmQgQCjhmAAQglAAgIgyg");
	this.shape.setTransform(14.5,26.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,52.6);


// stage content:
(lib.controller = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.beat();
	this.instance.setTransform(433.4,46.7,1,1,0,0,0,14.5,26.3);

	this.instance_1 = new lib.button();
	this.instance_1.setTransform(101,93.9,1,1,0,0,0,33.6,33.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(266.9,170.4,381,107.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;