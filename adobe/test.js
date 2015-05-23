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



(lib.test_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmZkIIMzAAIAAIRIszAAg");
	this.shape.setTransform(41,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmZEJIAAoRIMyAAIAAIRg");
	this.shape_1.setTransform(41,26.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,84,55);


// stage content:
(lib.test = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.test_1();
	this.instance.setTransform(215,141.5,1,1,0,0,0,41,26.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(448.5,314.5,83,54);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;