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



(lib.beat = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8EDIgSABQhfAAgWg9QgHgSABgWIADgQQAAgkAngZIALgGIAAgMQAMgBARABQAVgHAZgBQA0gCAiAXIACACQARg8AAhLIAAgQIgKgJIAAgXIAKABIAAhJQAAgJADgSIAHghQAFgZACgCQAFgGEAAAQAPAGAFAOIgIAUIjyAFQgLAtAAA/IAAAQQAvAEBFAOQBjAUASAJIAIAPQgBAIgDAEQgFAIgQAAQgxADg4gGQhCgIgsgSIACAmQABBagVBDIAAAFQAAAygRAWQgPARgdAKIgCAMIgWAGIgbgLgAg+DJIACgBIgBgBIgBACgAjeB6IADgHIgDAAg");
	this.shape.setTransform(26.7,27);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.3,54);


// stage content:
(lib.game1 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("cath the beats", "12px 'Times'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 92;
	this.text.setTransform(135,80);

	this.instance = new lib.beat();
	this.instance.setTransform(36.3,-43,1,1,0,0,0,26.7,27);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(284.6,130,221.4,181);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;