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



(lib.measure = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A7PAPIBEAAA5pAPIBNAAA7PiZICqAAA7PlDIC0AAA7FCvIA0AAA5nCvIDMAAA8LFFIEZAAA1yCvIBIAAA2eAPIBgAAA3GiZMAzSAAAAz+CvMAvsAAAA0FAPMAwRAAAA2KlDMAyCAAAA2+FFMAy2AAA");
	this.shape.setTransform(180.5,34.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhTFfQAJgOAagbIAGgGIAjgjIiIgFQgtgigLg7IgCgRQgCgbAAg6QAAgUAIgxIAAgEQAKg7AKgQQAjgjAUgVQASgUAJgTQAKgVAAgWIAAh/IAAgPQBWgKAvATIALAGQAhATAAAlQAAAhg6A0QgSAQgRANQgRAOgSALQgLBgBTACIBFgFQAmgDAOAKQAYARALAcQAEAKADAOQADAQAAA7QAAAkgEAXQgCARgFAKQgJAVgeARIhTArQgfASgfAYQgjAagmAiQgLgFgIgIgAidgYQgCAHgBANQgDAWAAAxQAABAACALIACAMQAGAWAPAtICzgCQADgPAAgiIAAgQQgCgjgIgjQgQhGggAAQgtAAgFAOIgDANQgEAIgMAFQgLgCgDgDQgGgDAAgQQAAgSAUgQIACgCQAVgTAagEIgTgxIgRgsQhHAygQAwgAApgEIgPAEQAvAgAIBIQACARACAhIAAAFQACAeAHAPQAvgYAPgaIAEgIQAEgLAAgyQAAg2gIgQQgHgNgMgGQgQgLgYAAQgYAAggALgAgslJIAACEQAKgDAiggQAlgjARgKQgUgYgggQQgXgNgQAAIgHABg");
	this.shape_1.setTransform(32.4,36.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,363,72.9);


(lib.faceselection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{happy:0,angry:1,sad:2});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJBgEQAAA8gsAtQgsAsg+AAQg6AAgqgnQgDgDgDgCQgsgtAAg8QAAg+AsgsQADgCADgDQAqgnA6AAQA+AAAsAsQAsAsAAA+gAC8gEQAAA8gsAtQgsAsg+AAQg4AAgrgnQgDgDgCgCQgsgtAAg8QAAg+AsgsQACgCADgDQArgnA4AAQA+AAAsAsQAsAsAAA+gAjmgEQAAA8gsAtQgsAsg+AAQg+AAgsgsQgsgtAAg8QAAg+AsgsQAsgsA+AAQA+AAAsAsQAsAsAAA+gApAjbIGuAAIAAG3ImuAAg");
	this.shape.setTransform(53.2,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AhoBpQgsgsgBg9QABg9AsgrQArgsA9gBQA9ABAsAsQAtArgBA9QABA9gtAsQgsAtg9gBQg9ABgrgtgAg2AkQgFACAAAIQAAAFAYAZQAZAZAKADIAiAAQASgEAIgOQAJgVAKgQQgDgGgHgEQgKABgSAVQgSAVgKAAQgWAAgNgQQgXgcgEgDIgFABgAAhguIABAUIABAVQACALAHAIIAIgEQACgNAAgZIAAgUQgCgOgIgGQgJAGgCAQgAgugoQgBAJADAKIABAUQACANAHACIAKgEIAAg7IgCgHQgRABgDAPg");
	this.shape_1.setTransform(15,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhjBvIgFgGQgtgsABg9QgBg9AtgrIAFgGQArgnA4AAQA+ABArAsQAsArABA9QgBA9gsAsQgrAtg+gBQg4AAgrgmgAg0BbQgCAEgBADQAEAEAGACIB8AAIAFgKQgEgGgGgEIh3AAQgEACgDAFgAAtgdQgGATAAANQAAAIABACIACABQAMAAAFgCIASghQALgYAAgKQAAgIgCgDIgIgCQgWAJgLAegAg6hGQgBABAAAIQArA9AGAAQAIAAAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBIACgBIAAgHQgeg0gZgJIgDADg");
	this.shape_2.setTransform(57,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglBZQgGgCgEgFQABgDACgDQADgFAEgCIB3AAQAGADAEAHIgFAKgAmbBZQgLgDgZgZQgYgZAAgGQAAgHAFgDIAFgBQAEADAXAdQANAQAYAAQAKAAASgVQASgVAKgBQAHADADAHQgKAQgJAVQgIAOgSAEgAG9A6QgDgIAAgFQhCACgQAJQgFAIgKAAQgJAAgBgBIAAgBQgDAEAAgNQAAgKAggKQAmgNAtAEQAHADAHAKQAGALAAAIIgBAHIgCABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABgHAAQgIAAgEgLgAAwAAQgBgCAAgIQAAgPAGgTQALgfAWgJIAIADQACADAAAIQAAAKgLAYIgSAjQgFABgMAAgAl3gVIgBgUIgBgUQACgQAJgHQAIAHACAOIAAAUQAAAZgCAPIgIADQgHgHgCgOgAnHgQIgBgUQgDgKABgJQADgQARAAIACAHIAAA8IgKAEQgHgCgCgOgAgzhMQAAgIABgCIADgCQAZAIAcA1IAAAHIgCABQAAABAAAAQgBAAAAABQAAAAABABQAAAAAAABQAAABgGAAQgGAAgrg+gAG1gsQgEgGAAgFIgBgBIAAgBIAAgCQAAgSAUACQATACABAZIgCAMQgDACgNAAQgLAAgGgKgAFPg3QgDgGAAgHQAAgUAtAEIADACQACABAAAHQAAAJgHAJQgJAMgOAAQgNAAgEgLg");
	this.shape_3.setTransform(56.2,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3333FF").s().p("AhjBvIgGgGQgsgsAAg9QAAg9AsgrIAGgGQArgnA4AAQA+ABAsAsQArArABA9QgBA9grAsQgsAtg+gBQg4AAgrgmgAAvBJQAFALAIAAQAHABAAgCQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAAAIACgCIABgHQgBgIgGgKQgHgLgGgDQgugDgjAMQggALAAAJQAAANACgEIAAABQACACAIAAQALAAAEgJQARgJA/gCQAAAFADAIgAAigrIAAACIAAABIABAAQAAAGAFAFQAGAKALAAQAMAAADgCIACgLQgBgagTgBIgEgBQgQAAAAARgAg/g0QgBAHADAFQAFALAMAAQAOAAAKgLQAGgKAAgJQAAgHgCgBIgCgBIgPgBQgfAAABARg");
	this.shape_4.setTransform(96,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AipjYIGYAAIAAGxImYAAgAIqACQAAA+gsAsQgsAsg+AAQg6AAgqgnQgDgCgDgDQgsgsAAg+QAAg8AsgsQADgDADgCQAqgnA6AAQA+AAAsAsQAsAsAAA8gAClACQAAA+gsAsQgsAsg+AAQg4AAgrgnQgDgCgCgDQgsgsAAg+QAAg8AsgsQACgDADgCQArgnA4AAQA+AAAsAsQAsAsAAA8gAj9ACQAAA+gsAsQgsAsg+AAQg+AAgsgsQgsgsAAg+QAAg8AsgsQAsgsA+AAQA+AAAsAsQAsAsAAA8g");
	this.shape_5.setTransform(55.5,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AC9jbIGGAAIAAG3ImGAAgAISAKQAAA+gtAsQgrAsg+AAQg6AAgrgnQgDgDgDgCQgrgsAAg+QAAg8ArgtQADgCADgDQArgnA6AAQA+AAArAsQAtAtAAA8gACMAKQAAA+gsAsQgsAsg8AAQg6AAgrgnQgDgDgCgCQgsgsAAg+QAAg8AsgtQACgCADgDQArgnA6AAQA8AAAsAsQAsAtAAA8gAkWAKQAAA+gsAsQgsAsg+AAQg+AAgsgsQgsgsAAg+QAAg8AsgtQAsgsA+AAQA+AAAsAsQAsAtAAA8g");
	this.shape_6.setTransform(58,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-7.5,117.6,46);


(lib.face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"happy":0,"angry":1,"sad":2});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACYAAQAAA/gtAsQgsAtg/AAQg+AAgtgtQgsgsAAg/QAAg+AsgtQAtgsA+AAQA/AAAsAsQAtAtAAA+g");
	this.shape.setTransform(15.3,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkBZQgvgVgKgLIAAgWQAeAAAoAQQAnAQADAAQAOAAANgLQAQgNAMgEQAHADAIAAQAGACAAAQQAAARgcARQgaAQgWgBQgMABgrgVgAA2gkQABgyATgMQAQAFAFAOIAABZQgDAAgFADQgHAFgGABQgTgVgBgigAgmgmQgGgOAAgHQAAgIAFgNQAFgTAKgJQAQAFAFAPIAABDIgGAFQgIAFgHADQgIgMgGgSg");
	this.shape_1.setTransform(14.5,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhrBrQgsgsAAg/QAAg9AsguQAugsA9AAQA/AAAsAsQAtAuAAA9QAAA/gtAsQgsAtg/AAQg9AAgugtgAhlBLQALALAuAUQAsAVAMAAQAWAAAZgPQAcgRAAgSQAAgQgFgCQgIABgHgDQgMAEgQANQgNAKgOABQgEgBgmgQQgogQgfAAgAAvgTQAAAgAUAYQAFgBAHgFQAFgEADAAIAAhYQgEgOgQgGQgUANAAAxgAgvg/QgEANAAAJQAAAHAFAOQAGARAJAKQAHgDAHgEIAGgDIAAhEQgFgOgPgGQgKAJgGATg");
	this.shape_2.setTransform(15.3,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhABUQgLgCgDgDQgFgDAAgQIAAgRQACAAACgHQArAABQAIQAQAGAFAOIgIAUgAAUAIQgFgFAAgPQgBgQAKgOQAMgQAdgQQAGACAIAAQAFACABAQQgBAJgTAdQgVAagKAEIgOgGgAg9giQgWgdAAgTQAbgEAbAWQAaATAAAQIgBAOQgBgBAAAAQgBAAgBAAQAAAAgBABQAAAAgBABQgBACACAFQAAADgPAAQgPAAgXgeg");
	this.shape_3.setTransform(16.5,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AhrBrQgsgsAAg/QAAg9AsguQAugsA9AAQA/AAAsAsQAtAuAAA9QAAA/gtAsQgsAtg/AAQg9AAgugtgAhHA5IAAAQQAAAQAGAEQADACALACIB4AAIAIgUQgFgOgPgGQhQgHgrAAQgCAGgDABgAAlgdQgKAOAAAPQAAAQAFAFIAPAGQAKgDAUgbQAUgdAAgJQAAgQgFgBQgJgBgGgCQgcAQgMAQgAhHhEQAAASAXAeQAWAbAPAAQANAAABgDQgCgEABgBQAAgBABAAQAAAAABgBQAAAAABAAQABABAAAAIABgOQAAgPgXgUQgXgSgXAAIgJABg");
	this.shape_4.setTransform(15.3,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhTBRQgFgFgBgRQAAgSAagUQAXgTAggHQAfgKAWAIQAZAHAAAdQgBAagCAEQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQgBADgPAAQgRAAgDgMIgBgXQgjgDggAaQgRAOgOASIgOgGgAAygrQAIgOAJgEIAPgFIAIAPQgFAOgPAGQgNgFgHgHgAhZg/QAKgNAIgFIAPgFIAHAPQgEAOgQAGQgMgFgIgHg");
	this.shape_5.setTransform(18,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AhrBrQgsgsAAg/QAAg9AsguQAugsA9AAQA/AAAsAsQAtAuAAA9QAAA/gtAsQgsAtg/AAQg9AAgugtgAARAXQgdAJgYATQgZAUAAASQAAARAFAFIAPAGQAOgSAQgOQAfgaAlADIABAXQADAMAQAAQAPAAACgDQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQACgEAAgaQAAgegZgIQgJgEgMAAQgPAAgTAGgABfgfQgJAEgJAOQAHAHANAFQAQgGAEgOIgHgPIgPAFgAgsgzQgIAFgJANQAIAHAMAFQAPgGAFgOIgIgPIgPAFg");
	this.shape_6.setTransform(15.3,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32.5,32.5);


(lib.beat = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiPCbIgBgfQABgtAFgKQAPgcA8AfQAKgdgBhoQgBhfAVgcICfAAQAIAEAGAJQAGAHgBAEIgEAYIgMAAQgIAAgIgDIh+AAQABAOAHBFQAGBBAAApQgCCHhXgBQgtAAgJgdg");
	this.shape.setTransform(14.5,18.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,37);


// stage content:
(lib.composer = function() {
	this.initialize();

	// Layer 1
	this.face3 = new lib.faceselection();
	this.face3.setTransform(69.9,138.5,1,1,0,0,0,53.1,15.5);

	this.instance = new lib.beat();
	this.instance.setTransform(456,326,1,1,0,0,0,14.5,18.5);

	this.instance_1 = new lib.beat();
	this.instance_1.setTransform(374,340,1,1,0,0,0,14.5,18.5);

	this.instance_2 = new lib.beat();
	this.instance_2.setTransform(322,326,1,1,0,0,0,14.5,18.5);

	this.instance_3 = new lib.beat();
	this.instance_3.setTransform(269,334,1,1,0,0,0,14.5,18.5);

	this.instance_4 = new lib.beat();
	this.instance_4.setTransform(470,228,1,1,0,0,0,14.5,18.5);

	this.instance_5 = new lib.beat();
	this.instance_5.setTransform(391,241,1,1,0,0,0,14.5,18.5);

	this.instance_6 = new lib.beat();
	this.instance_6.setTransform(322,223.1,1,1,0,0,0,14.5,18.5);

	this.instance_7 = new lib.beat();
	this.instance_7.setTransform(269,235,1,1,0,0,0,14.5,18.5);

	this.instance_8 = new lib.beat();
	this.instance_8.setTransform(427,126.7,1,1,0,0,0,14.5,18.5);

	this.instance_9 = new lib.beat();
	this.instance_9.setTransform(357,149,1,1,0,0,0,14.5,18.5);

	this.instance_10 = new lib.beat();
	this.instance_10.setTransform(288,135,1,1,0,0,0,14.5,18.5);

	this.instance_11 = new lib.beat();
	this.instance_11.setTransform(251,120,1,1,0,0,0,14.5,18.5);

	this.instance_12 = new lib.beat();
	this.instance_12.setTransform(511.5,340,1,1,0,0,0,14.5,18.5);

	this.instance_13 = new lib.measure();
	this.instance_13.setTransform(351.5,336,1,1,0,0,0,180.5,36.4);

	this.instance_14 = new lib.measure();
	this.instance_14.setTransform(345.5,241,1,1,0,0,0,180.5,36.4);

	this.instance_15 = new lib.measure();
	this.instance_15.setTransform(341.5,144.6,1,1,0,0,0,180.5,36.4);

	this.instance_16 = new lib.face();
	this.instance_16.setTransform(-28.8,300.2,1,1,0,0,0,15.2,15.2);

	this.test = new cjs.Text("New Song", "12px 'Times'");
	this.test.name = "test";
	this.test.lineHeight = 14;
	this.test.lineWidth = 57;
	this.test.setTransform(36.1,30);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnjjCIPHAAIAAGFIvHAAg");
	this.shape.setTransform(69.5,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC66").s().p("AnjDDIAAmFIPHAAIAAGFg");
	this.shape_1.setTransform(69.5,39.5);

	this.addChild(this.shape_1,this.shape,this.test,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.face3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(230.5,219,577,353.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;