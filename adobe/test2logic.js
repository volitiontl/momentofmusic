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



(lib.wall = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkZkZIIzAAIAAIzIozAAg");
	this.shape.setTransform(28.2,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF66").s().p("AkZEaIAAozIIzAAIAAIzg");
	this.shape_1.setTransform(28.2,28.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,58.5,58.5);


(lib.score = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("High Score:123", "12px 'Times'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 100;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,16);


(lib.player = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ai5imQC5iYCMCYQEKC3kKCNQiUCrixirQitiNCti3g");
	this.shape.setTransform(27.3,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOCRQgSgGgjgaQgigbgBgLIABgNQAJgEAHAGIALAUQASAhAjAFIAmAAQADgGAHgXQAFgQAJgHQAGACABADQADAEAAAIQABAFgMAXQgMAZgHAFgAAbgGIgXgFIAAgiQAIgNAEgiQAFghAJgNIARAFQALACAJAAQAMAyAAAVQAAAOgKAUQgKAXgMAAQgHAAgNgDgAhEgmQgKgPAAgJQgBg5AhgUQANgJAKAIQAKAJAAAZQAAAcgKA5QACADgMAAQgWAAgNgUg");
	this.shape_1.setTransform(24.8,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("Ai5CeQitiNCti4QC5iXCMCXQEKC4kKCNQhLBVhQAAQhSAAhYhVgAhiBQIgBANQAAALAjAbQAjAaAUAFIAhAAQAHgEAMgZQALgXAAgFQAAgIgDgFQgCgCgFgCQgJAGgFAQQgHAYgEAGIgjAAQglgFgSgiIgLgTQgEgEgFAAQgDAAgEACgAgHhKQgEAhgIAOIAAAgIAUAEQANADAIABQALgBALgUQAKgUAAgOQAAgVgMgyQgJAAgLgDIgSgEQgGANgFAhgAhHh6QghAVAAA4QAAAKAKAPQAOATAVABQANgBgCgCQAJg5AAgcQAAgZgKgKQgEgDgGAAQgFAAgHAEg");
	this.shape_2.setTransform(27.3,24.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,56.7,50.8);


// stage content:
(lib.test2logic = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wall();
	this.instance.setTransform(317.2,283.2,1,1,0,0,0,28.2,28.2);

	this.instance_1 = new lib.score();
	this.instance_1.setTransform(276.5,122.5,1,1,0,0,0,52,8);

	this.instance_2 = new lib.player();
	this.instance_2.setTransform(61.6,255.7,1,1,0,0,0,27.3,24.4);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(308.8,314.5,312.2,197.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;