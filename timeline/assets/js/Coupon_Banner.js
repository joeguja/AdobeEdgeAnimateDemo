if (!window.lib) { window.lib = {}; }
var p; // used to reference prototypes

// stage content:
(lib.Coupon_Banner = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// bubbleUp_logo
	this.instance = new lib.bubbleUp_logo();
	this.instance.setTransform(15,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(Tween.get(this.instance).wait(37).to({_off:false},0).to({y:60,alpha:1},20,Ease.get(1)).wait(55).to({y:-132.9},23,Ease.get(1)).wait(15));

	// subText
	this.instance_1 = new lib.subText();
	this.instance_1.setTransform(36,167);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(Tween.get(this.instance_1).wait(57).to({_off:false},0).to({alpha:1},10,Ease.get(1)).wait(45).to({y:-23.9},23,Ease.get(1)).wait(15));

	// coupon
	this.instance_2 = new lib.coupon();
	this.instance_2.setTransform(22,265);
	this.instance_2._off = true;

	this.timeline.addTween(Tween.get(this.instance_2).wait(112).to({_off:false},0).to({y:42},23,Ease.get(1)).wait(15));

	// btn_download
	this.btn_download = new lib.btn_download();
	this.btn_download.setTransform(154,217,1,0.998);
	this.btn_download.alpha = 0;
	this.btn_download._off = true;

	this.timeline.addTween(Tween.get(this.btn_download).wait(137).to({_off:false},0).to({alpha:1},12,Ease.get(1)).wait(1));

	// bubble
	this.instance_3 = new lib.bubble();
	this.instance_3.setTransform(150.4,344.7);

	this.timeline.addTween(Tween.get(this.instance_3).wait(1).to({x:153.2,y:342.4},0).wait(1).to({x:156,y:339.9},0).wait(1).to({x:158.7,y:337.4},0).wait(1).to({x:161.3,y:334.9},0).wait(1).to({x:163.9,y:332.3},0).wait(1).to({x:166.4,y:329.6},0).wait(1).to({x:168.9,y:327},0).wait(1).to({x:171.4,y:324.3},0).wait(1).to({x:173.8,y:321.6},0).wait(1).to({x:176.1,y:318.9},0).wait(1).to({x:178.4,y:316.1},0).wait(1).to({x:180.7,y:313.4},0).wait(1).to({x:182.9,y:310.5},0).wait(1).to({x:185.1,y:307.6},0).wait(1).to({x:187.2,y:304.7},0).wait(1).to({x:189.2,y:301.8},0).wait(1).to({x:191.3,y:298.8},0).wait(1).to({x:193.2,y:295.8},0).wait(1).to({x:195.1,y:292.7},0).wait(1).to({x:197,y:289.6},0).wait(1).to({x:198.8,y:286.5},0).wait(1).to({x:200.5,y:283.3},0).wait(1).to({x:202.1,y:280.1},0).wait(1).to({x:203.7,y:276.8},0).wait(1).to({x:205.2,y:273.5},0).wait(1).to({x:206.6,y:270.2},0).wait(1).to({x:208,y:266.9},0).wait(1).to({x:209.2,y:263.5},0).wait(1).to({x:210.4,y:260.1},0).wait(1).to({x:211.5,y:256.7},0).wait(1).to({x:212.5,y:253.2},0).wait(1).to({x:213.4,y:249.8},0).wait(1).to({x:214.2,y:246.2},0).wait(1).to({x:214.9,y:242.7},0).wait(1).to({x:215.5,y:239.2},0).wait(1).to({x:215.9,y:235.6},0).wait(1).to({x:216.3,y:232},0).wait(1).to({x:216.6,y:228.4},0).wait(1).to({x:216.7,y:224.8},0).wait(1).to({x:216.7,y:221.1},0).wait(1).to({x:216.6,y:217.5},0).wait(1).to({x:216.4,y:213.9},0).wait(1).to({x:216,y:210.3},0).wait(1).to({x:215.5,y:206.7},0).wait(1).to({x:215,y:203.1},0).wait(1).to({x:214.2,y:199.6},0).wait(1).to({x:213.4,y:196},0).wait(1).to({x:212.5,y:192.5},0).wait(1).to({x:211.4,y:189},0).wait(1).to({x:210.2,y:185.5},0).wait(1).to({x:208.9,y:182.1},0).wait(1).to({x:207.5,y:178.7},0).wait(1).to({x:206,y:175.3},0).wait(1).to({x:204.4,y:172},0).wait(1).to({x:202.7,y:168.8},0).wait(1).to({x:200.9,y:165.5},0).wait(1).to({x:199,y:162.4},0).wait(1).to({x:197.1,y:159.3},0).wait(1).to({x:195,y:156.2},0).wait(1).to({x:192.9,y:153.2},0).wait(1).to({x:190.8,y:150.2},0).wait(1).to({x:188.5,y:147.3},0).wait(1).to({x:186.2,y:144.5},0).wait(1).to({x:183.9,y:141.7},0).wait(1).to({x:181.4,y:138.9},0).wait(1).to({x:179,y:136.2},0).wait(1).to({x:176.5,y:133.6},0).wait(1).to({x:173.9,y:130.9},0).wait(1).to({x:171.3,y:128.4},0).wait(1).to({x:168.7,y:125.9},0).wait(1).to({x:166,y:123.4},0).wait(1).to({x:163.3,y:121},0).wait(1).to({x:160.6,y:118.6},0).wait(1).to({x:157.8,y:116.2},0).wait(1).to({x:155,y:113.9},0).wait(1).to({x:152.1,y:111.7},0).wait(1).to({x:149.3,y:109.4},0).wait(1).to({x:146.5,y:107.2},0).wait(1).to({x:143.7,y:105},0).wait(1).to({x:141,y:102.8},0).wait(1).to({x:138.3,y:100.5},0).wait(1).to({x:135.6,y:98.1},0).wait(1).to({x:133,y:95.8},0).wait(1).to({x:130.4,y:93.4},0).wait(1).to({x:127.8,y:90.9},0).wait(1).to({x:125.2,y:88.5},0).wait(1).to({x:122.7,y:85.9},0).wait(1).to({x:120.3,y:83.4},0).wait(1).to({x:117.8,y:80.7},0).wait(1).to({x:115.5,y:78.1},0).wait(1).to({x:113.1,y:75.4},0).wait(1).to({x:110.9,y:72.6},0).wait(1).to({x:108.7,y:69.8},0).wait(1).to({x:106.5,y:67},0).wait(1).to({x:104.4,y:64},0).wait(1).to({x:102.4,y:61.1},0).wait(1).to({x:100.4,y:58.1},0).wait(1).to({x:98.5,y:55},0).wait(1).to({x:96.7,y:51.9},0).wait(1).to({x:95,y:48.7},0).wait(1).to({x:93.4,y:45.5},0).wait(1).to({x:91.9,y:42.2},0).wait(1).to({x:90.5,y:38.9},0).wait(1).to({x:89.2,y:35.5},0).wait(1).to({x:88,y:32.1},0).wait(1).to({x:87,y:28.6},0).wait(1).to({x:86,y:25.1},0).wait(1).to({x:85.2,y:21.6},0).wait(1).to({x:84.6,y:18.1},0).wait(1).to({x:84,y:14.5},0).wait(1).to({x:83.7,y:10.9},0).wait(1).to({x:83.4,y:7.3},0).wait(1).to({x:83.3,y:3.6},0).wait(1).to({x:83.4,y:0},0).wait(1).to({x:83.6,y:-3.6},0).wait(1).to({x:83.9,y:-7.2},0).wait(1).to({x:84.4,y:-10.8},0).wait(1).to({x:85.1,y:-14.4},0).wait(1).to({x:85.8,y:-17.9},0).wait(1).to({x:86.8,y:-21.5},0).wait(1).to({x:87.8,y:-25},0).wait(1).to({x:88.9,y:-28.4},0).wait(1).to({x:90.2,y:-31.8},0).wait(1).to({x:91.6,y:-35.2},0).wait(1).to({x:93.1,y:-38.5},0).wait(1).to({x:94.7,y:-41.7},0).wait(1).to({x:96.4,y:-45},0).wait(1).to({x:98.1,y:-48.2},0).wait(1).to({x:100,y:-51.3},0).wait(1).to({x:102,y:-54.4},0).wait(1).to({x:104,y:-57.4},0).wait(1).to({x:106.1,y:-60.4},0).wait(1).to({x:108.3,y:-63.4},0).wait(1).to({x:110.5,y:-66.2},0).wait(1).to({x:112.8,y:-69},0).wait(1).to({x:115.2,y:-71.8},0).wait(1).to({x:117.6,y:-74.5},0).wait(1).to({x:120.1,y:-77.2},0).wait(1).to({x:122.6,y:-79.8},0).wait(1).to({x:125.2,y:-82.4},0).wait(1).to({x:127.8,y:-84.9},0).wait(1).to({x:130.4,y:-87.3},0).wait(1).to({x:133.1,y:-89.7},0).wait(1).to({x:135.8,y:-92.1},0).wait(1).to({x:138.5,y:-94.4},0).wait(1).to({x:141.3,y:-96.6},0).wait(1).to({x:144.1,y:-98.8},0).wait(1).to({x:147,y:-100.9},0).wait(1).to({x:150,y:-102.9},0).wait(1));

	// bg
	this.shape = new Shape();
	this.shape.graphics.rf(["#e1dad3","#ccbda8","#6b5250","#5f3d3c"],[0,0.235,0.796,1],86,-87.9,0,86,-87.9,337.2).p("AXcziMgu4AAAMAAAAnEMAu4AAAMAAAgnE").f();
	this.shape.setTransform(150.5,125.5);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape}]}).wait(150));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(0.4,0.4,300,434.5);


// symbols:
(lib.CompoundPath = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],32.1,-88.5,0.6,-1.6).p("ACakjQh5hAiCAoQiDAohAB5Qg/B5AoCDQApCCB5BAQB5BACCgoQCDgoBAh5QBAh5goiCQgoiCh5hA").p("ACkBuQgvBahhAdQhgAehagwQhZgvgehhQgehgAvhZQAwhaBggdQBhgeBZAvQBaAwAdBgQAeBhgvBZ").f();
	this.shape.setTransform(33,33);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,66.1,66.1);

(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],-7.9,-0.7,-50.8,-5.3).p("AAbAdQgcghgZgZIAkAqIASAP").f();
	this.shape.setTransform(2.7,2.9);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,5.4,5.7);

(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],1.8,-1,-3.3,2.2).p("AAbAdQgcghgZgZIAkAqIASAP").f();
	this.shape.setTransform(2.7,2.9);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,5.4,5.7);

(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],23.8,2.4,-19.1,-2).p("AEYBrQhdhbh0g+Qi2hgjNgIQDLAlC7BjQCCBFBwBeIgjgq").f();
	this.shape.setTransform(31.5,14.9);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,63.1,29.8);

(lib.Path_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],-30.8,-16.3,31,16.4).p("AjVlcQARDUBuC3QBwC7C7BzQi0h9hwi4Qhui1gYjO").f();
	this.shape.setTransform(21.3,34.8);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,42.6,69.5);

(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],3.8,-2.3,-1.3,0.9).p("AhgjCQAvA6AlA5QBkCZAzCoQghimheiPQhBhjhUhNIAGAHQAZAYAdAhIgSgQ").f();
	this.shape.setTransform(13.8,24.2);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,27.5,48.5);

(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],-3.9,-2,1.5,0.8).p("AB0j+QhOBWg2BnQhQCWgTCqQAliuBVigQAwhcA/hS").f();
	this.shape.setTransform(11.6,25.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,23.2,50.7);

(lib.Path_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],15.7,-21.8,-25.5,52.3).p("AAaAXQhcChhkBqQCUh2BYinQBLiNAVicQgxCahbCg").f();
	this.shape.setTransform(16.6,29.1);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,33.2,58.1);

(lib.Path_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],41.3,-23.4,-27,33.1).p("ACYjMQhLBkjiBAQhxAhhiAMIAHDIQBvAFCQgkQEhhKCpjUQhUgPg+giQgfgRgfga").f();
	this.shape.setTransform(37.1,11.7);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(1.1,-8.6,72,40.9);

(lib.Path_8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],-39.7,42.5,-16,18.7).p("AEDiuQhtCRi0BVQiqBQjDALQB8AiCAgJQCAgJB4gzQCshJB2iQQgngKgkgTQgfgRgdgY").f();
	this.shape.setTransform(39.4,17.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,78.9,34.8);

(lib.Path_9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],-52.7,55.7,-24.9,27.6).p("AEDiuQhtCRi0BVQiqBQjDALQB8AiCAgJQCAgJB4gzQCshJB2iQQgngKgkgTQgfgRgdgY").f();
	this.shape.setTransform(39.4,17.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,78.9,34.8);

(lib.Path_10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#ffffff"],[0,1],22.2,-16.3,-24.9,22.6).p("AgBAEQixBPjGABQgpAogyAXQAcANAPAFQCZA+CkgDQCegDCTg+QCrhkBkirQh2CQisBJQh4AziAAJQiAAJh8giQDDgLCphQQC0hVBuiRQgWgSgUgYQhsCSi4BT").f();
	this.shape.setTransform(46.8,22.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,93.5,44.7);

(lib.Path_11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],-48.2,52.2,-20.4,24.1).p("AgBAEQixBPjGABQgpAogyAXQAcANAPAFQCZA+CkgDQCegDCTg+QCrhkBkirQh2CQisBJQh4AziAAJQiAAJh8giQDDgLCphQQC0hVBuiRQgWgSgUgYQhsCSi4BT").f();
	this.shape.setTransform(46.8,22.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,93.5,44.7);

(lib.Path_12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#ffffff"],[0,1],61.4,-54.6,-7,1.9).p("ABMARQikADiZg+QgOgGgcgNQguAWgzAHIAHAEQC2BgDMgHQDGgHCqhlQiSA9ieAD").f();
	this.shape.setTransform(38.1,6.1);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,76.1,12.2);

(lib.Path_13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#ffffff"],[0,1],38.9,-35.2,-29.4,21.3).p("AEuihQhHCHiRAtQiRAtiHhHQgXgNgSgNQgGBAggA7QgYAugmAkQDGgACxhPQC5hTBsiSQgQgVgKgRIgGAL").f();
	this.shape.setTransform(33.4,17.3);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,66.8,34.5);

(lib.Path_14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],-51.6,99.8,-4.6,10.9).p("AkwDeIAKgTQBsjMDihqQDPhiD1ALQkMhokPBkQkRBliIEBQgXArgQAsQBagpBjAQ").f();
	this.shape.setTransform(49.3,24.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-0.1,98.6,49.4);

(lib.Path_15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0.18)"],[0,1],53.2,-37.3,-32.8,10.9).p("AkwDeIAKgTQBsjMDihqQDPhiD1ALQkMhokPBkQkRBliIEBQgXArgQAsQBagpBjAQ").f();
	this.shape.setTransform(49.3,24.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-0.1,98.6,49.4);

(lib.Path_16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],72.7,-48.3,-32,10.5).p("AkwDeIAKgTQBsjMDihqQDPhiD1ALQkMhokPBkQkRBliIEBQgXArgQAsQBagpBjAQ").f();
	this.shape.setTransform(49.3,24.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-0.1,98.6,49.4);

(lib.Path_17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],-50.1,101.8,-3,12.8).p("AFMkgQj/gpjpBzQjuB0h8DrQgqBOgXBUQAjgeApgSQAQgsAXgrQCIkBERhlQEPhkEMBoQj1gMjQBiQjiBqhsDMIgKATQAdAFAcAKIAEgIQBujQD2hhQDmhbD9AoQhPhRhkg1QgkgTgjgO").f();
	this.shape.setTransform(58.2,29.8);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,116.4,59.8);

(lib.Path_18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0.051)"],[0,1],72.6,-45.6,-32,13.2).p("AFMkgQj/gpjpBzQjuB0h8DrQgqBOgXBUQAjgeApgSQAQgsAXgrQCIkBERhlQEPhkEMBoQj1gMjQBiQjiBqhsDMIgKATQAdAFAcAKIAEgIQBujQD2hhQDmhbD9AoQhPhRhkg1QgkgTgjgO").f();
	this.shape.setTransform(58.2,29.8);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,116.4,59.8);

(lib.Path_19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],-53.8,98.6,-6.7,9.6).p("AGfjeQj9gojmBbQj1BhhuDQIgEAIQAYAJATAKQA2AdAoAuQAIgYANgZQA7hvB1gtQB0gsB0ApQAJgdAQgfQAohMBIgvQBFgtBTgHIgMgN").f();
	this.shape.setTransform(42.7,23.3);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,85.4,46.8);

(lib.Path_20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0.078)"],[0,1],-51.6,92.6,-4.5,3.6).p("AmxEmQAXhUAqhOQB8jrDuh0QDphzD/AoQj4hij8BdQj+Bdh/DvQhOCTgECkQAVgcAbgV").f();
	this.shape.setTransform(48.1,34.2);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-0.1,96.3,68.8);

(lib.Path_21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#ffffff"],[0,1],-11.2,21.7,22.7,-37.3).p("ADphIQgdhghagwQhZgvhhAeQhgAdgwBaQgvBZAeBhQAeBhBZAvQBaAwBggeQBhgdAvhaQAvhZgehh").f();
	this.shape.setTransform(24.4,24.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,48.9,48.9);

(lib.Path_22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],32.6,-89.8,1.1,-2.9).p("ADphIQgdhghagwQhZgvhhAeQhgAdgwBaQgvBZAeBhQAeBhBZAvQBaAwBggeQBhgdAvhaQAvhZgehh").f();
	this.shape.setTransform(24.4,24.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,48.9,48.9);

(lib.Path_23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],-80.6,79.8,-57,55.9).p("ACZjbQgigRgsgNQgvgOgsgEQARCNhDCnQgiBUg2BHQAcAYAgAQQAkATAnAKQBKhaArhsQA4iKgBiU").f();
	this.shape.setTransform(15.3,26.6);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,30.7,53.2);

(lib.Path_24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],-93.7,93,-65.8,64.9).p("ACZjbQgigRgsgNQgvgOgsgEQARCNhDCnQgiBUg2BHQAcAYAgAQQAkATAnAKQBKhaArhsQA4iKgBiU").f();
	this.shape.setTransform(15.3,26.6);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,30.7,53.2);

(lib.Path_25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#ffffff"],[0,1],-23.6,17.9,4.1,-10.1).p("AD5llQgtghhWgXQhdgZhHAJQAtCUhPDDQgcBHgvA/QAUAYAWASQA2hHAihUQBCingQiNQArAEAvAOQAtANAiARQABCUg4CKQgrBshKBaQhkCrirBkQCUg+BxhxQB0h1A/ibQBDilgIiw").f();
	this.shape.setTransform(25,43.1);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,50,86.3);

(lib.Path_26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],-21.8,19,6,-9).p("Ah9gxQBLA7BVAoQAygXApgoQiFAAh1gk").f();
	this.shape.setTransform(12.5,4.9);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,25,9.8);

(lib.Path_27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0)"],[0,1],104.1,-57.6,18.1,-9.3).p("AhaBfQBCAiBGAOQgCiGBJiUQhjgQhbApQgjBcgKBkQANAJAOAH").f();
	this.shape.setTransform(11.7,14.3);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,23.5,28.6);

(lib.Path_28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],123.6,-68.5,18.9,-9.7).p("AhaBfQBCAiBGAOQgCiGBJiUQhjgQhbApQgjBcgKBkQANAJAOAH").f();
	this.shape.setTransform(11.7,14.3);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,23.5,28.6);

(lib.Path_29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0.302)"],[0,1],25.1,-14,-79.5,44.8).p("AAdA4QBnARBZAmQhWhThng2Qh2g/iIgWQAjANAlAUQBkA1BPBR").f();
	this.shape.setTransform(22.1,11.1);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,44.2,22.2);

(lib.Path_30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","rgba(255,255,255,0.271)"],[0,1],125.8,-68.2,21.1,-9.4).p("AB3itQhJCUACCGQhGgOhCgiQgOgHgNgJQAKhkAjhcQgpASgjAdQgXBUgGBXQAqAmBTAfQBbAiBHgBQgPhOAUhaQAShPArhTQgcgJgdgG").f();
	this.shape.setTransform(17.6,17.3);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,35.2,34.5);

(lib.btn_download = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#f0e8de").p("AAZgIIgfAAIAAgSIAhAAIAAgPIg1AAIAABVIA3AAIAAgQIgjAAIAAgUIAfAAIAAgQ").f();
	this.shape.setTransform(54,0.1);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#f0e8de").p("AgQgrIgaAAIgFBWIASAAIADhEIABAAIARBDIAPAAIALgiQAFgRAEgRIABAAIACBEIATAAIgEhWIgaAAIgSA7IgAAAQgBgGgGgZIgIgd").f();
	this.shape_1.setTransform(44.6,-0.1);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#f0e8de").p("AATAsIAVAAIgbhVIgZAAIgaBVIAUAAIAGgWIAZAAIAGAW").p("AAKAHIgTAAIAJgjIAKAj").f();
	this.shape_2.setTransform(34.9,0.1);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#f0e8de").p("AglACQAAAUAMALQANALAWAAQAOAAAPgFIAAgtIggAAIAAAPIANAAIAAASQgCACgIAAQgMAAgIgIQgIgIAAgNQAAgOAJgHQAIgHANAAQAMAAAIAEIAEgQQgIgEgQAAQgWAAgNALQgOAMAAAV").f();
	this.shape_3.setTransform(26,0.1);

	this.shape_4 = new Shape();
	this.shape_4.graphics.f("#f0e8de").p("AAmgBQAAgVgOgKQgNgKgXAAQgMAAgOACIAABUQAHABAPAAQAaAAANgLQAOgMAAgX").p("AgSgbQAEgBAFAAQAbAAAAAcQAAAegdAAIgHgAIAAg4").f();
	this.shape_4.setTransform(14.3,0.1);

	this.shape_5 = new Shape();
	this.shape_5.graphics.f("#f0e8de").p("AgSAsIAGgWIAZAAIAHAWIAVAAIgbhVIgaAAIgaBVIAUAA").p("AAKAHIgTAAIAJgjIAAAAIAKAj").f();
	this.shape_5.setTransform(5.2,0.1);

	this.shape_6 = new Shape();
	this.shape_6.graphics.f("#f0e8de").p("AAggeQgMgNgTAAQgTAAgLANQgLANAAATQAAATAKAMQAMANASAAQATAAALgMQALgMAAgVQAAgSgKgM").p("AAWABQAAANgGAIQgFAJgKAAQgJAAgGgIQgGgIAAgNQAAgNAGgIQAFgIAKAAQAKAAAFAIQAGAJAAAM").f();
	this.shape_6.setTransform(-3.8,0.1);

	this.shape_7 = new Shape();
	this.shape_7.graphics.f("#f0e8de").p("AgaAsIA2AAIAAgQIgiAAIAAhFIgTAAIAABV").f();
	this.shape_7.setTransform(-11.6,0.1);

	this.shape_8 = new Shape();
	this.shape_8.graphics.f("#f0e8de").p("AAkgqIgSAAIAAAZQAAATACAQIggg8IgXAAIAABVIASAAIgBhAIAAAAQAHASAIANIASAhIAVAAIAAhV").f();
	this.shape_8.setTransform(-19.8,0.1);

	this.shape_9 = new Shape();
	this.shape_9.graphics.f("#f0e8de").p("AABgUQABAJADASIAHAlIAVAAIAXhVIgUAAIgMBAIgLhAIgVAAIgNBBIgAAAIgMhBIgUAAIAUBVIAVAAIANhAIAAAA").f();
	this.shape_9.setTransform(-30.2,0.1);

	this.shape_10 = new Shape();
	this.shape_10.graphics.f("#f0e8de").p("AABgrQgTAAgLANQgMANAAATQAAATALAMQALANATAAQATAAALgMQALgMAAgVQAAgSgKgMQgLgNgTAA").p("AAVABQAAANgFAIQgGAJgJAAQgKAAgGgIQgFgIAAgNQAAgNAFgIQAGgIAKAAQAJAAAGAIQAFAIAAAN").f();
	this.shape_10.setTransform(-40.7,0.1);

	this.shape_11 = new Shape();
	this.shape_11.graphics.f("#f0e8de").p("AgLgrQgMAAgOACIAABUIAWABQAaAAANgLQAOgMAAgXQAAgVgOgLQgOgKgWAA").p("AASgAQAAAPgIAIQgIAIgOAAIgGgAIAAg4QADgBAGAAQAcAAAAAc").f();
	this.shape_11.setTransform(-49.8,0.1);

	this.shape_12 = new Shape();
	this.shape_12.graphics.f("#f9fcff").p("AAZgJIgfAAIAAgSIAhAAIAAgQIg1AAIAABWIA3AAIAAgQIgjAAIAAgVIAfAAIAAgP").f();
	this.shape_12.setTransform(54,0.5);

	this.shape_13 = new Shape();
	this.shape_13.graphics.f("#f9fcff").p("AgPgrIgaAAIgFBWIASAAIADhEIABAAIARBCIAPAAIALgiQAFgOAEgTIABAAIACBEIATAAIgFhWIgZAAIgSA7IgBAAQgBgIgGgYIgJgc").f();
	this.shape_13.setTransform(44.8,0.5);

	this.shape_14 = new Shape();
	this.shape_14.graphics.f("#f9fcff").p("AATArIAVAAIgbhWIgZAAIgaBWIAUAAIAGgWIAZAAIAGAW").p("AAKAHIgTAAIAJgjIAKAj").f();
	this.shape_14.setTransform(34.9,0.5);

	this.shape_15 = new Shape();
	this.shape_15.graphics.f("#f9fcff").p("AglABQAAAUAMALQALALAXAAQAQAAAOgFIAAgtIggAAIAAAPIANAAIAAASQgDABgGAAQgMAAgIgHQgIgIAAgNQAAgOAJgHQAIgHANAAQAMAAAIAEIAEgQQgIgEgQAAQgWAAgNALQgOAMAAAV").f();
	this.shape_15.setTransform(26,0.5);

	this.shape_16 = new Shape();
	this.shape_16.graphics.f("#f9fcff").p("AAmgCQAAgVgOgMQgMgJgXAAQgMAAgOACIAABUQAJABANAAQAaAAANgLQAOgMAAgX").p("AASgBQAAAegdAAIgHgBIAAg4IAJgBQANAAAHAHQAIAHAAAN").f();
	this.shape_16.setTransform(14.3,0.5);

	this.shape_17 = new Shape();
	this.shape_17.graphics.f("#f9fcff").p("AgSArIAGgWIAZAAIAHAWIAVAAIgbhWIgaAAIgaBWIAUAA").p("AAAgcIAKAjIgTAAIAJgjIAAAA").f();
	this.shape_17.setTransform(5.2,0.5);

	this.shape_18 = new Shape();
	this.shape_18.graphics.f("#f9fcff").p("AAggeQgMgNgTAAQgTAAgLANQgLANAAATQAAATAKAMQAMANASAAQATAAALgMQALgMAAgVQAAgTgKgM").p("AAWABQAAANgGAIQgFAJgKAAQgJAAgGgIQgGgIAAgNQAAgNAGgIQAFgJAKAAQAKAAAFAJQAGAIAAAM").f();
	this.shape_18.setTransform(-3.8,0.4);

	this.shape_19 = new Shape();
	this.shape_19.graphics.f("#f9fcff").p("AgaArIA2AAIAAgQIgiAAIAAhFIgTAAIAABW").f();
	this.shape_19.setTransform(-11.6,0.5);

	this.shape_20 = new Shape();
	this.shape_20.graphics.f("#f9fcff").p("AAkgrIgSAAIAAAZQAAATACARQgGgPgIgOIgSgfIgXAAIAABWIASAAIgBg/IAAAAQAGAPAJAPIASAhIAVAAIAAhW").f();
	this.shape_20.setTransform(-19.8,0.5);

	this.shape_21 = new Shape();
	this.shape_21.graphics.f("#f9fcff").p("AABgUQABAJADASIAHAlIAVAAIAXhWIgUAAIgMBBIgLhBIgVAAIgNBBIgAAAQgBgLgEgTIgHgjIgUAAIAUBWIAVAAIANg/IAAAA").f();
	this.shape_21.setTransform(-30.2,0.5);

	this.shape_22 = new Shape();
	this.shape_22.graphics.f("#f9fcff").p("AABgsQgTAAgLANQgMANAAATQAAATALAMQALANATAAQATAAALgMQALgMAAgVQAAgTgKgMQgLgNgTAA").p("AAVABQAAANgFAIQgGAJgJAAQgKAAgGgIQgFgIAAgNQAAgNAFgIQAGgJAKAAQAJAAAGAJQAFAIAAAM").f();
	this.shape_22.setTransform(-40.7,0.4);

	this.shape_23 = new Shape();
	this.shape_23.graphics.f("#f9fcff").p("AgLgrQgMAAgOACIAABUQAJABANAAQAaAAANgLQAOgMAAgXQAAgUgOgMQgNgJgXAA").p("AASgBQAAAegeAAIgGgBIAAg4IAJgBQAcAAAAAb").f();
	this.shape_23.setTransform(-49.8,0.5);

	this.shape_24 = new Shape();
	this.shape_24.graphics.f("#6b3637").p("AAZgJIgfAAIAAgSIAhAAIAAgQIg1AAIAABVIA3AAIAAgPIgjAAIAAgUIAfAAIAAgQ").f();
	this.shape_24.setTransform(54,-0.2);

	this.shape_25 = new Shape();
	this.shape_25.graphics.f("#6b3637").p("AgPgqIgaAAIgFBVIASAAIADhEIABAAQADAQAFARIAJAiIAPAAIALgiQAFgQAEgSIABAAIACBEIATAAIgFhVIgZAAIgSA7IgBAAQgBgGgGgYIgJgd").f();
	this.shape_25.setTransform(44.8,-0.2);

	this.shape_26 = new Shape();
	this.shape_26.graphics.f("#6b3637").p("AATArIAVAAIgbhVIgZAAIgaBVIAUAAIAGgWIAZAAIAGAW").p("AAKAHIgTAAIAJgiIAKAi").f();
	this.shape_26.setTransform(34.9,-0.2);

	this.shape_27 = new Shape();
	this.shape_27.graphics.f("#6b3637").p("AglACQAAAUAMALQANALAWAAQARAAAMgFIAAgtIggAAIAAAPIANAAIAAATQgDABgGAAQgMAAgIgIQgIgIAAgNQAAgNAJgIQAIgHANAAQANAAAHAEIAEgQQgKgEgNAAQgWAAgNAMQgOAMAAAV").f();
	this.shape_27.setTransform(26,-0.2);

	this.shape_28 = new Shape();
	this.shape_28.graphics.f("#6b3637").p("AAmgBQAAgWgOgKQgMgJgXAAQgQAAgKACIAABUQAJABANAAQAaAAANgLQAOgMAAgX").p("AgSgcQAEgBAFAAQAbAAAAAcQAAAegdAAIgHgAIAAg4").f();
	this.shape_28.setTransform(14.3,-0.2);

	this.shape_29 = new Shape();
	this.shape_29.graphics.f("#6b3637").p("AgSArIAGgWIAZAAIAHAWIAVAAIgbhVIgaAAIgaBVIAUAA").p("AAKAHIgTAAIAJgiIAAAAIAKAi").f();
	this.shape_29.setTransform(5.2,-0.2);

	this.shape_30 = new Shape();
	this.shape_30.graphics.f("#6b3637").p("AAggfQgMgNgTAAQgTAAgLANQgLANAAAUQAAATAKAMQAMANASAAQATAAALgMQALgMAAgVQAAgTgKgM").p("AAWAAQAAANgGAIQgFAJgKAAQgJAAgGgIQgGgIAAgNQAAgNAGgIQAFgJAKAAQAKAAAFAJQAGAIAAAM").f();
	this.shape_30.setTransform(-3.8,-0.2);

	this.shape_31 = new Shape();
	this.shape_31.graphics.f("#6b3637").p("AgaArIA2AAIAAgQIgiAAIAAhGIgTAAIAABV").f();
	this.shape_31.setTransform(-11.6,-0.2);

	this.shape_32 = new Shape();
	this.shape_32.graphics.f("#6b3637").p("AAkgqIgSAAIAAAZQAAATACAQQgHgPgIgOIgSgfIgXAAIAABVIASAAIgBg/IAAAAQAGAQAJAOIASAhIAVAAIAAhV").f();
	this.shape_32.setTransform(-19.8,-0.2);

	this.shape_33 = new Shape();
	this.shape_33.graphics.f("#6b3637").p("AABgUIALA/IAVAAIAXhVIgUAAIgMBBIgLhBIgVAAIgNBBIgMhBIgUAAIAUBVIAVAAIANg/IAAAA").f();
	this.shape_33.setTransform(-30.2,-0.2);

	this.shape_34 = new Shape();
	this.shape_34.graphics.f("#6b3637").p("AABgsQgTAAgLANQgMANAAAUQAAATALAMQALANATAAQATAAALgMQALgMAAgVQAAgTgKgMQgLgNgTAA").p("AAVAAQAAANgFAIQgGAJgJAAQgKAAgGgIQgFgIAAgNQAAgNAFgIQAGgJAKAAQAJAAAGAJQAFAIAAAM").f();
	this.shape_34.setTransform(-40.7,-0.2);

	this.shape_35 = new Shape();
	this.shape_35.graphics.f("#6b3637").p("AgLgrQgQAAgKACIAABUQAJABANAAQAaAAANgLQAOgMAAgXQAAgVgOgLQgNgJgXAA").p("AASgBQAAAegeAAIgGgAIAAg4QADgBAGAAQAcAAAAAc").f();
	this.shape_35.setTransform(-49.8,-0.2);

	this.shape_36 = new Shape();
	this.shape_36.graphics.lf(["#f29ea0","#f19495","#ef7677","#ed6464","#ec5e5d","#d44a4d"],[0.451,0.455,0.455,0.459,0.459,0.733],0,-32.9,0,40).p("AKHiTI0NAAQgnAAgcAcQgcAcAAAnIAABrQAAAnAcAcQAcAcAnAAIUNAAQAnAAAcgcQAbgcAAgnIAAhrQAAgngbgcQgcgcgnAA").f();
	this.shape_36.setTransform(0.1,-0.1);

	this.shape_37 = new Shape();
	this.shape_37.graphics.f("#6b3637").p("ArIh2QgcAcAAAnIAABqQAAAnAcAcQAcAbAmAAIUNAAQAnAAAcgbQAcgcAAgnIAAhqQAAgngcgcQgcgcgnAAI0NAAQgmAAgcAc").f();
	this.shape_37.setTransform(0.3,0.6);

	this.addChild(this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-73.8,-14.8,148.1,30.1);

(lib.bubble = function() {
	this.initialize();

	// FlashAICB
	this.instance = new lib.Path();
	this.instance.setTransform(60.7,-61.9);
	this.instance.alpha = 0.46;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(60.7,-61.9);
	this.instance_1.alpha = 0.25;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(1.2,-87.6);
	this.instance_2.alpha = 0.46;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(-89.5,7);
	this.instance_3.alpha = 0.35;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(60.1,-62.6);
	this.instance_4.alpha = 0.25;

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(-89,-58.9);
	this.instance_5.alpha = 0.6;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(51.7,13.7);
	this.instance_6.alpha = 0.22;

	this.instance_7 = new lib.Path_7();
	this.instance_7.setTransform(-3.1,35.8);
	this.instance_7.alpha = 0.2;

	this.instance_8 = new lib.Path_10();
	this.instance_8.setTransform(-34.3,31.5);
	this.instance_8.alpha = 0.2;

	this.instance_9 = new lib.Path_12();
	this.instance_9.setTransform(-44.2,68.5);
	this.instance_9.alpha = 0.2;

	this.instance_10 = new lib.Path_13();
	this.instance_10.setTransform(-25.4,27.8);
	this.instance_10.alpha = 0.2;

	this.instance_11 = new lib.Path_14();
	this.instance_11.setTransform(-68,-69.4);
	this.instance_11.alpha = 0.8;

	this.instance_12 = new lib.Path_15();
	this.instance_12.setTransform(-49.8,-69.6);
	this.instance_12.alpha = 0.24;

	this.instance_13 = new lib.Path_17();
	this.instance_13.setTransform(-75.5,-75.5);
	this.instance_13.alpha = 0.75;

	this.instance_14 = new lib.Path_18();
	this.instance_14.setTransform(-75.8,-74.9);
	this.instance_14.alpha = 0.24;

	this.instance_15 = new lib.Path_19();
	this.instance_15.setTransform(-47.4,-60.3);
	this.instance_15.alpha = 0.75;

	this.instance_16 = new lib.Path_20();
	this.instance_16.setTransform(-80.6,-78.8);
	this.instance_16.alpha = 0.75;

	this.instance_17 = new lib.Path_21();
	this.instance_17.setTransform(-25.5,-21.2);
	this.instance_17.alpha = 0.38;

	this.instance_18 = new lib.CompoundPath();
	this.instance_18.setTransform(-29,-29.5);
	this.instance_18.alpha = 0.71;

	this.instance_19 = new lib.Path_26();
	this.instance_19.setTransform(-50.4,58.7);
	this.instance_19.alpha = 0.4;

	this.instance_20 = new lib.Path_29();
	this.instance_20.setTransform(15.6,-73.9);
	this.instance_20.alpha = 0.24;

	this.instance_21 = new lib.Path_30();
	this.instance_21.setTransform(-78.7,-22.4);
	this.instance_21.alpha = 0.24;

	// FlashAICB
	this.shape = new Shape();
	this.shape.graphics.lf(["rgba(212,212,212,0)","rgba(255,255,255,0.102)"],[0,1],-43.9,0,44.1,0).p("Akeq7QhLBtgoB+QgoCDAACJQAACyBDCjQBBCeB2B7QB3B7CbBHQCgBJCwAIQBjqJlTmcQhziMidhlQhig+hfgk").f();
	this.shape.setTransform(-45.6,20.2);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("rgba(230,230,230,0.149)").p("AjslBQjMAAi3BYQCpAFDrBMQG0CNGYFNQhUkajrizQjwi2ktAA").f();
	this.shape_1.setTransform(23.6,-57);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("rgba(242,242,242,0.149)").p("AEnn3Qi3AAinBHQihBEh9B8Qh8B8hEChQhGCnAAC2QAAAzAHA6QC3ozHLjxQEMiMEggHQiUg2ifAA").f();
	this.shape_2.setTransform(-29.4,-38.8);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.071)").p("AJwl6QAAhEgLhJQiiAVjnCOQmjD/mnIlQCoBHC2AAQC3AACnhGQChhEB8h8QB8h8BEihQBHinAAi3").f();
	this.shape_3.setTransform(27.3,38.3);

	this.shape_4 = new Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.149)","rgba(212,212,212,0)"],[0,1],0.1,0,0,0.1,0,69.8).p("AHPCmQApgXBHhEQAjgiAcgeQmNB4ngjCQjwhhihh5QBmFCDwCHQBVAwBpAaQAvALBnAPQBlAPCPgwQBbgeBWgw").f();
	this.shape_4.setTransform(-12.8,61.1);

	this.shape_5 = new Shape();
	this.shape_5.graphics.f("rgba(230,230,230,0.102)").p("ABZDeQBsjHAAjjQAAishAihQgUC3g4DXQhaFdijFHQC1h8BojA").f();
	this.shape_5.setTransform(70,21);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-89.6,-89.1,179.4,179.4);

(lib.bubbleUp_logo = function() {
	this.initialize();

	// bubbleUp_blue
	this.instance = new lib.bubbleUp_blue();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-0.1,273.3,96.6);

(lib.coupon = function() {
	this.initialize();

	// txt
	this.shape = new Shape();
	this.shape.graphics.f("#696464").p("ABiiiIABBsIAdAAIAAhCQAAgGACgEQACgEADgDQADgDADAAQAGAAADAGQADAEAAAIIAABEIAdAAIAAhFQAAgJgCgHQgBgIgEgFQgDgGgGgDQgGgDgIAAQgIAAgHAEQgHAEgEAGIgBAAIgCgMIgZAA").p("ABAjPQgGAAgEAEQgFAEAAAHQAAAHAEAEQAEAEAGAAQAHAAAEgEQAFgEAAgHQAAgIgFgEQgEgEgHAA").p("AALjLIgNBvIgAAAQgCgUgFgiIgKg6IgXAAIgLA7QgGAigCATIgBAAIgMhvIgeAAIAZCUIAcAAIAKgxQADgOAFgiQADAeAEASIAIAxIAeAAIAaiUIgcAA").p("AAyiiIAABsIAdAAIAAhsIgdAA").p("AEvi8QgNgFgIAAIAAgVIgTAAIAAAXQgGACgFAEQgFADgDAFQgEAEgCAGQgBAGAAAGQAAAGABAGQABAFAEAFQADAEAGAFIALAIQAJAGAEAFQAEAGAAAGQAAAHgEAEQgEAEgIAAQgHAAgGgCQgGgCgFgDIgEAXQAEADAGACQAGABAGAAIAAAXIATAAIAAgYQAGgCAGgDQAFgEAEgEQADgFACgGQACgHAAgHQAAgGgCgFQgBgGgDgEQgDgFgFgFQgEgEgHgEQgLgHgEgFQgDgEAAgGQAAgGAEgEQAEgEAIAAQAJAAALAGIAEgW").p("AFlirIAAAAIAAB0IAdAAIAAiPIgZAAIghARIAEAXIAZgN").p("AI1jAIgHAJQgGAKgDAOQgDAOAAAQQAAAPADANQADAOAFALIAGAJQAEAEAFADQAEADAFACQAGACAGAAQAKAAAJgEQAIgFAHgJIAFgLIAFgNQACgKABgaQAAgOgDgMQgDgOgFgKIgGgKQgEgEgFgDQgEgDgGgCQgFgCgGAAQgGAAgGABQgFACgFADQgEADgEAE").p("AJSi0QAEAAAEAEQADAEACAHQACAGABAKIAAASQgBAcgDAJQgCAHgEAEQgDADgEAAQgFAAgDgDQgEgDgDgGQgCgHgBgJQgBgKAAgNQAAgMABgKQABgJACgGQADgHADgDQAEgEAFAA").p("AHyiZQgCgNgFgKIgFgJQgEgEgEgEQgEgDgFgCQgFgCgGAAQgFAAgFABQgFACgEADQgIAFgGALQgFAJgDAOQgDANAAAQQAAAOACANQADANAFAKQAFALAIAGQAFADAFACQAFACAGAAQAJAAAHgEQAIgEAFgJQAGgKADgNQACgJABgXQAAgPgCgM").p("AHXh+QgAAcgCAIQgBAGgDADQgCADgEAAQgEAAgDgDQgDgDgCgGQgCgIgBgdQAAgRAEgVQABgFADgDQADgDAEAAQAEAAADADQACADABAGQADAVAAAP").p("AL5jRQgIAAgHADQgHADgFAFQgGAGgDAJQgDAHAAAKIAAAEIgPAAIAAAVIAPAAIAABXIAdAAIAAhXIATAAIAAgVIgTAAIAAgFQAAgIADgEQAEgGAGAAQAGAAADACIADgXQgIgDgKAA").p("ALMjOQgIgDgKAAQgIAAgHADQgGADgFAFQgGAGgDAJQgDAHAAAKIAAAEIgOAAIAAAVIAOAAIAABXIAdAAIAAhXIASAAIAAgVIgSAAIAAgFQAAgIADgEQAEgGAGAAQAFAAAEACIADgX").p("ALOBIIgAAAQgDgGgFgDQgFgDgGAAQgIAAgHAEQgHAEgFAHQgFAIgDAKQgDALAAANQAAAKACAJQACAKAEAHQAFAIAGAFQAHAEAJAAQAGAAAFgDQAFgDADgFIABAAIAAAHQAAAGgBAEQgBAFgDAEQgDADgEACQgEACgGAAQgFAAgGgCIgJgDIgFAWQAGADAHABQAHABAIAAQALAAAJgDQAIgDAGgGQAGgGAEgLQADgLAAgRIABhfIgZAAIgBAL").p("ALKBdIABAIIAAAdQAAAFgCAEQgCAEgDACQgCACgDAAQgGAAgEgIQgCgEgBgGIgBgNQAAgOADgIQACgFADgCQADgDADAAQAEAAADADQACADABAD").p("AJ1A/QgFgDgIAAQgIAAgHAEQgGAEgFAGIgAAAIgBgMIgZAAIABBsIAdAAIAAhCQAAgGABgEQABgEADgDQADgDAEAAQAGAAADAGQADAEAAAIIAABEIAcAAIAAhFQAAgJgBgHQgCgIgDgFQgEgFgFgD").p("AIbAWQgEgFgHAAQgGAAgEAFQgEAFAAAHQAAAHAEAEQAEAFAGAAQAHAAAEgFQAEgEAAgHQAAgHgEgE").p("AIDA+IAABsIAdAAIAAhsIgdAA").p("AHFBAQgGAEgEAFIgAAAIAAg4IgdAAIAACYIAdAAIAAhDIABgIQABgFADgDQADgCAEAAQAGAAADAGQADAEAAAJIAABCIAdAAIAAhCQAAgKgBgIQgBgIgDgGQgDgGgFgDQgGgDgIAAQgIAAgGAE").p("AGRA+IgVAAIAAgdIgdAGIAAAXIgNAAIAAAVIANAAIAAAyQAAANADAIQADAHAFAFQAEADAFACQAFACAGAAQALAAAHgCIAAgXIgIABQgFAAgDgDQgDgEAAgIIAAgxIAVAAIAAgV").p("AE/BLQgGgHgHgEQgIgEgJAAQgJAAgHADQgIADgGAHQgGAIgDAKQgEALAAAOQAAANADALQADAKAGAHQAFAIAIADQAIAEAJAAQAHAAAGgCQAIgDAGgGQAHgGAEgLIADgNIABgPQAAgNgDgLQgDgKgFgI").p("AEtBzQAAAOgDAIQgCAGgCADQgDADgDAAQgEAAgDgDQgDgDgCgFQgDgIAAgQQAAgOADgIQABgFADgDQADgDAEAAQADAAADADQADADACAFQADAJAAAN").p("ADKARIAACYIAdAAIAAiYIgdAA").p("ACVAYQgOAIgGAGQgEAFgDAGQgEAGgCAIQgDAIgBAIQgCAKAAAKQAAAQAEANQAFARAFAGQAEAFAEAEQAFADAFADQAFADAGACQAHABAHAAQAPAAAIgEIgDgYQgHADgHAAQgHAAgGgDQgGgDgEgGQgFgGgCgJQgDgKAAgNQAAgNADgKQADgKAEgGQAEgGAGgDQAGgDAGAAQAIAAAGADIAFgYQgKgEgKAAQgLAAgKAE").p("AA+A8QgGAAgFAEQgGAFgEAIIgBAAIgCgQIgZAAIABBsIAdAAIAAg3QAAgHABgEQADgIAFgEQAFgEAFAAIAGAAIAAgcIgGgA").p("AgCBvQAAgMgDgJQgDgJgFgHQgFgHgHgDQgHgDgIAAQgJAAgIAEQgIAEgFAIQgGAIgEALQgDALAAANQAAANADAKQADAJAGAHQAGAHAIADQAJAEAKAAQALAAATgFIgEgVQgKADgKAAQgLAAgFgFQgDgDgCgFQgCgEgAgGIAzAAQABgEAAgL").p("AgcBpIgaAAQAAgJADgHQACgEACgCQADgDADAAQAGAAADAHQADAHAAAL").p("ApziJQAFgDAFgCQAGgCAGAAQAIAAAEAEQAEAEAAAHIAAADQgKAAgIADQgJADgHAEQgHAFgEAIQgFAIAAAKQAAAHADAGQACAGAEAEQAEAFAFADQAFACAGAAQAHAAAGgDQAGgDAEgGIACAKIAZAAQgBgJAAgPIAAgoQAAgKgBgHQgBgIgEgGQgEgHgIgEQgIgEgLAAQgKAAgKADQgIACgFADIAFAT").p("ApOhTQgBAEgEADQgDACgEAAQgEAAgDgDQgEgEAAgIQAAgFACgEQACgDAEgDQAFgDAKgBIAAATIgBAF").p("AqrjPIAACYIAdAAIAAiYIgdAA").p("Aq9iLQADgJAAgMQAAgJgDgJQgEgJgGgGQgHgGgKgDQgJgDgOAAQgRAAgNADIAACSIAcAAIAAg3IAGAAQAJAAAKgDQAKgEAHgHQAGgHADgI").p("Arpi0QAFAAAEACQADACADADQAFAGAAALQAAAGgCAEQgBAFgDADQgDADgEACQgEACgFAAIgFAAIAAguIAHgB").p("AnwiiIgLBKIgAAAIgOhKIgfAAIAeBoQAAABgBADQgDAHgGAGQgIAHgHADIAJAZQAPgGAJgLQAGgHAIgSQAFgNAFgSIAWhTIgdAA").p("AmgiJQAFgDAFgCQAGgCAGAAQAIAAAEAEQAEAEAAAHIAAADQgKAAgJADQgJADgHAEQgHAFgEAIQgFAIAAAKQAAAHADAGQACAGAEAEQAEAFAFADQAFACAGAAQAHAAAGgDQAGgDAEgGIACAKIAZAAQgBgJAAgPIAAgoQAAgKgBgHQgBgIgEgGQgEgHgIgEQgIgEgLAAQgKAAgKADQgIACgFADIAFAT").p("Al7hTQgBAEgEADQgEACgDAAQgEAAgDgDQgEgEAAgIQAAgFACgEQACgDAEgDQAFgDAKgBIAAATIgBAF").p("AkVikQgIAAgHAEQgGAEgFAGIgAAAIgCgMIgZAAIABBsIAdAAIAAhCQAAgGACgEQABgEADgDQADgDADAAQAGAAADAGQADAEAAAIIAABEIAdAAIAAhFQAAgJgCgHQgBgIgEgFQgDgGgGgDQgGgDgIAA").p("AjmiFQgDALAAANQAAAMACAJQACALAEAIQAEAIAGAEQAGAEAJAAQAHAAAGgEQAGgDAEgGIABAMIAZAAIgBiYIgcAAIAAA1IgBAAQgCgFgEgDQgFgDgHAAQgHAAgGADQgGAEgEAHQgFAHgDAK").p("AjEiJQADgDAEAAQAEAAADADQADADABAGIABAHIAAAcQAAAFgBACQgBAGgDADQgDACgDAAQgGAAgEgIQgCgDgBgGIgBgOQAAgOADgJQACgEADgD").p("AhaA+IgVAAIAAgdIgdAGIAAAXIgNAAIAAAVIANAAIAAAyQAAANADAIQADAHAFAFQADADAGACQAFACAGAAQALAAAHgCIAAgXIgIABQgFAAgDgDQgDgEAAgIIAAgxIAVAAIAAgV").p("AjQAnIAAAXIgNAAIAAAVIANAAIAAAyQAAANADAIQADAHAEAFQADADAGACQAFACAHAAQAKAAAHgCIAAgXIgIABQgFAAgDgDQgEgEAAgIIAAgxIAVAAIAAgVIgVAAIAAgdIgdAG").p("Aj4ARQgGAAgEAFQgFAFAAAHQAAAHAEAEQAEAFAGAAQAHAAAEgFQAFgEAAgHQAAgHgFgEQgEgFgGAA").p("AkHA+IAABsIAdAAIAAhsIgdAA").p("Ak2AXQgJgDgNAAQgRAAgPADIAACSIAdAAIAAg7IAFAAQAHAAAEAFQAEAFACANQADARAFATIAeAAQgHgYgDgRQgCgMgEgHQgEgHgIgDIAAgAQAFgDAFgEQAEgEADgFQADgEABgGQABgFAAgGQAAgLgDgHQgDgIgGgGQgHgGgLgD").p("AlIArQAEAAAEACQAEABADADQAEAGAAAKQAAAKgGAGQgDADgEACQgEACgFAAIgFAAIAAgsQACgBAFAA").p("AnGA8QgJAAgIAEQgIAEgGAIQgGAIgEALQgDALAAANQAAANADAKQADAJAGAHQAGAHAIADQAJAEAKAAQALAAATgFIgEgVQgKADgKAAQgLAAgFgFQgDgDgCgFQgBgEgBgGIAzAAQABgEAAgLQAAgMgDgJQgDgJgFgHQgEgHgHgDQgHgDgJAA").p("AnSBZQACgEACgCQADgDADAAQAGAAADAHQADAHAAALIgZAAQAAgJADgH").p("An3A/QgGgDgKAAQgLAAgJAEQgJAEgHAIQgGAIgEAKQgDALAAAMQAAANADAKQADAKAGAHQAGAHAJADQAJAEAKAAQALAAAGgDIgCgXQgEADgGAAQgFAAgEgDQgEgCgDgEQgDgEgBgGQgCgGAAgHQAAgHACgGQABgGADgEQADgEAEgDQAFgCAFAAQAFAAAGACIAEgX").p("ApNAWQgEgFgHAAQgGAAgEAFQgEAFAAAHQAAAHAEAEQAEAFAGAAQAHAAAEgFQAEgEAAgHQAAgHgEgE").p("AplA+IAABsIAdAAIAAhsIgdAA").p("AqXARIAACYIAdAAIAAiYIgdAA").p("ArhCHIAbAAIAGAiIAcAAIgciUIgjAAIghCUIAcAAIAHgi").p("ArTAwIAKBBIgWAAIALhBIAAAA").f();
	this.shape.setTransform(130.2,67);

	// stroke
	this.shape_1 = new Shape();
	this.shape_1.graphics.f().s("#ec5e5d").ss(1,1,1,3).p("ATGpoQA/A7AABDIAAPoQAABDgwAwQgwAvhDAAMgixAAAQhDAAg6g5Qg5g6AAhDIAAvqQAAhEAvgwQAwgvBDAAMAinAAAQBEAAA+A6").cp();
	this.shape_1.setTransform(128.4,67.4);

	// top
	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#ec5e5d").p("AgbgPIgBAAIgAABIgBAAIAAAAIgBAAIgBAAIAAAAIgBABIAAAAIgAAAIAAABIgBAAIgBABIAAAAIgAAAIAAABIgBAAIAAABIgAAAIAAABQgBAEABADIABAAIAAABIAAAAIAAAAIABABIAAAAIABAAIAAABIABAAIAAAAIAAAAQADABACgBIABgEIAAgBIAAgBIgEAAIAAgBIgBgAIAAgBIgAAAIAAgDIAAgBIAAgAIABgBIACgBIABAAIAGgBIAAAVIgBAAIAAAAIgAABIgBABIgBAAIgEgBIAAAGIACAAIABAAQACABAEgBIAAgAIABAAIAAgBIAAAAIABgAIAAAAIAAgBIABgAIAAgBIAAAAIAAgAIABgBIABgDIAAgXIAGgAIAAgGIgTADIgBAAIAAAA").p("AgEgSIAAAjIAFgAIAAgIQAAgEABgBIAAgBIABgBIACgBQABABAAgBIABABIAAADIABAFIAAADIAAAAIAAABIABAAIAAABIAAAAIAAAAIABAAIAAABIAEAAIAAgBIABAAIAAgAIABAAIAAgAIAAAAIAAgFIgBABIgBAAIgBABIAAgBIgAAAIgBgAIAAgAIgAgKIgBAAIAAgAIgAgBIAAgAIgBgBIAAgAIgAAAIAAgAIgBAAQgFgCgCAFIAAgRIgFAA").p("AAigGIAAgAQgDgCgEABIgBABIgAAAIAAAAIgBAAIgAAAIgBAAIAAABIgAAAIAAAAIgAAAIAAABIgBAAIgAAAIgBABIAAABIgAAAIAAABIgBAAIAAACIgAAAIAAAFIAAABIAAABIABAAIAAAAIAAAAIAAABIAAAAIAAAAIABABIABAAIAAAAIAAAAIABAAIAAABIABAAIAAAAIACAAQADABADgCIABAAIABgAIAAgFIgAAAIAAAAIgBAAIgAAAIgAAAIgBABIgEABIgBgBIAIgJIABgCIABgBIgBgBIgBgBIgBAA").p("AAcgBIAAgBIABAAQABgBABABIgCADIgAAAIAAAAIgEAEIAAgBIgBAAIAAgDIABgBIAAgAIABgBIAAgAIAAAAIAAgAIABAA").f();
	this.shape_2.setTransform(214.6,107.4);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#ec5e5d").p("AAWAGIAAgQIgrAFIAAAQIArgF").f();
	this.shape_3.setTransform(230.4,118.3);

	this.shape_4 = new Shape();
	this.shape_4.graphics.f("#ec5e5d").p("AAWAFIAAgPIgrAFIAAAPIArgF").f();
	this.shape_4.setTransform(230.3,111);

	this.shape_5 = new Shape();
	this.shape_5.graphics.f("#ec5e5d").p("AAfgfIAAgPIg9AIIAAAPIAWgDIAABKIARgCIgBhKIAWgD").f();
	this.shape_5.setTransform(245,112.7);

	this.shape_6 = new Shape();
	this.shape_6.graphics.f("#ec5e5d").p("AABgeQALgBAGAFIAKgMQgKgJgRACQgOACgIAIQgIAJAAAMQAAAKAGAGQAFAFALAAIAKAAQAFABACACQADACAAAFQAAALgPABQgNABgIgGIgKANQAKAKAUgDQAOgBAJgIQAJgIgAgNQAAgMgGgGQgFgEgLgBIgKAAQgEAAgEgDQgDgDAAgEQAAgLANgC").f();
	this.shape_6.setTransform(237.5,113.8);

	this.shape_7 = new Shape();
	this.shape_7.graphics.f("#ec5e5d").p("AAJAsIgAhZIgRACIABBZIAQgC").f();
	this.shape_7.setTransform(230.4,114.6);

	this.shape_8 = new Shape();
	this.shape_8.graphics.f("#ec5e5d").p("AAcAnIgAgPIgmAFIAAhKIgRACIABBZIA2gH").f();
	this.shape_8.setTransform(223.8,115.6);

	this.shape_9 = new Shape();
	this.shape_9.graphics.f("#ec5e5d").p("AgcALIA4gHIgJgNIgnAEIgJAQ").f();
	this.shape_9.setTransform(215.6,120.2);

	this.shape_10 = new Shape();
	this.shape_10.graphics.f("#ec5e5d").p("AglA3IARgCIAUhOIAVBJIARgCIgghjIgNABIgfBq").f();
	this.shape_10.setTransform(215.6,117.3);

	this.shape_11 = new Shape();
	this.shape_11.graphics.f("#ec5e5d").p("AABgtIghAEIAABZIAQgCIAAgjIALgBIARAiIATgDIgTgkQAPgJAAgRQAAgLgHgHQgIgIgNAC").p("AgPgcIAPgCQAMgBAAALQAAAMgLABIgQACIgAgX").f();
	this.shape_11.setTransform(207.4,117.6);

	this.shape_12 = new Shape();
	this.shape_12.graphics.f("#ec5e5d").p("AAQgsIAAA6QAAAQgPACQgOABAAgQIgBg6IgQACIABA7QAAAOAJAIQAJAIANgBQAOgBAJgKQAJgKAAgOIgAg6IgQAB").f();
	this.shape_12.setTransform(198.6,118.3);

	this.shape_13 = new Shape();
	this.shape_13.graphics.f("#ec5e5d").p("AAcAoIAAgQIgnAFIAAhKIgQACIAABZIA3gG").f();
	this.shape_13.setTransform(191.6,119.5);

	this.shape_14 = new Shape();
	this.shape_14.graphics.f("#ec5e5d").p("AAfgVQAAgMgIgHQgIgHgNABIghAEIAABYIARgCIAAgiIAQgCQANgBAIgJQAHgJAAgM").p("AgNgEIAAgZIAQgBQAMgBAAAMQAAANgMABIgQAC").f();
	this.shape_14.setTransform(183.8,120.4);

	this.shape_15 = new Shape();
	this.shape_15.graphics.f("#ffffff").p("AAkgqIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgBAAIAAgAIgAAAIAAgBIgAAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgAIgAAAIgQABIAAA6QAAAQgPACIgDAAIgBgGIgBg6IgBAAIAAgAIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgBAAIAAgAIgBAAIAAgBIgBABIAAgBIgAAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgAIgQACIABA7QAAAPAJAHIAAABIABAAIABAAIAAAAIAAAAIABAAIAAABIABAAIAAAAIABAAIABABIAAAAIAAAAIABAAIAAAAIABAAIAAABIABAAIABAAIAAAAIAAABIABAAIAAAAIABAAIABAAIABAAIAAABIAAAAIAAAAIABAAIAAABIABAAIABAAQAJAIANgBQANgCAJgJQAJgKgBgOIAAg7IgBAA").f();
	this.shape_15.setTransform(199.1,118.7);

	this.shape_16 = new Shape();
	this.shape_16.graphics.f("#ffffff").p("AgggvIABBZIAAAAIAAAAIABAAIAAABIAAgBIAAABIAAAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIAAAAIAAABIABAAIAAAAIABAAIAAABIAAAAIAAAAIAAAAIAAAAIABAAIAAABIABAAIAAAAIAAAAIAAABIAAAAIAAAAIABAAIAAAAIA3gGIAAgPIgBAAIAAgBIgAAAIAAgAIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgbAEIgAhAIgAAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgBIgBAAIAAgAIgAAAIAAgAIgAAAIAAgBIgRAC").f();
	this.shape_16.setTransform(224.3,116.1);

	this.shape_17 = new Shape();
	this.shape_17.graphics.f("#ffffff").p("AgQgxIgQACIAABZIABAAIAAAAIABAAIAAABIABgBIAAABIABAAIAAAAIAAAAIAAAAIABAAIAAABIABAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIABAAIAAABIABAAIAAAAIAAAAIAAABIABAAIAAAAIABAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAABIA2gHIAAgPIgAAAIAAgBIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgAAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBABIAAgBIgBAAIAAgAIgBAAIAAgAIgBAAIAAgBIgAABIAAgBIgcADIgBhAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgBAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgBIgBAAIAAgA").f();
	this.shape_17.setTransform(192.1,119.9);

	this.shape_18 = new Shape();
	this.shape_18.graphics.f("#ffffff").p("AgYgdIAAABIAAAAIAAAAIAAAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIABAAIAAABIAAAAIAAAAIAAAAIAAABIABAAIAAAAIABAAIAAAAIAAAAIAAABIAAAAIAAAAIADgAIABAwIgOABIAAAQIAAAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIAAAAIAAABIABAAIAAAAIABAAIAAABIAAAAIAAAAIAAAAIAAAAIABAAIAAABIABAAIAAAAIAAAAIAAABIAAAAIAAAAIABAAIAAAAIAAgAIAAAAIABAAIAAABIAAAAIAAAAIAAAAIAAABIABgBIAAABIArgFIAAgQIgAAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgAAAIAAgAIgBAAIAAgAIgAAAIAAgBIgAAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBABIAAgBIgDAAIAAgwIANgCIAAgQIgBAAIAAgAIgBAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgAIgBAAIAAgAIgAAAIAAgBIgAAAIAAgAIgBAAIAAgBIgAABIAAgBIgBAAIAAgAIgAAAIgrAFIAAAPIAAAAIAAABIABAAIAAAAIABAA").f();
	this.shape_18.setTransform(230.9,115.1);

	this.shape_19 = new Shape();
	this.shape_19.graphics.f("#ffffff").p("AgigcIAAABIABAAIAAAAIAAAAIAAAAIAAAAIAAABIABAAIAAAAIAAgAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIAAAAIAAABIABAAIAAAAIAAAAIAAABIAAAAIAAAAIABAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAABIAAAAIAAAAIALgBIAABAIABAAIAAAAIAAAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIAAgAIAAAAIAAAAIAAABIABAAIAAAAIAAAAIAAABIABgBIAAABIAAAAIAAAAIAAAAIAAAAIABAAIAAABIABAAIAAAAIAAAAIAAABIAAAAIAAAAIABAAIAAAAIAQgCIAAhKIAVgDIAAgPIgAAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgAIgBAAIAAgBIgAAAIAAgAIg9AIIAAAPIABAA").f();
	this.shape_19.setTransform(245.6,113.2);

	this.shape_20 = new Shape();
	this.shape_20.graphics.f("#ffffff").p("AAYgpQgKgJgRACQgOACgIAIQgIAJAAAMQAAAKAGAGIAAAAIAAAAIABAAIABABIABAAIAAABIAAAAIAAAAIABAAIAAAAIABAAIAAABIABAAIAAAAIAAABIABAAIABABIABAAIAAABIAAAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIAAAAIAAABIABAAQAFAFAKAAIAKAAIAAABQAAALgPABQgNABgIgGIgKANIADADIAAAAIACACIAAAAIAAAAIAAAAIABABIABAAIAAAAIAAABIAAAAIABAAIAAAAIAAAAIABAAIAAABIAAAAIABABIAAAAIABAAIAAAAIAAAAIAAABIABAAQAKAIASgDQAOgBAIgIQAJgJAAgNQAAgMgHgGIgAAAIAAgAIgAAAIAAgAIgBAAIgAgBIgBAAIAAgAIgAAAIAAgBIgAAAIAAgAIgBAAIgAgAIgBAAIAAgBIgAAAIAAgAIgAAAIAAgBIgBAAIgAgAIgBAAIAAgAIgAAAIAAgBIgAAAIgBgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgAIgAAAQgFgEgLgBIgKAAIAAgBQAAgLANgBQALgBAGAFIAKgMIgBgBIgBAAIAAgAIgAAAIAAgBIgAAAIAAgAIgBAAIgBgBIgAAAIgBgBIgAAAIAAgAIgBAAIAAgBIgAAAIgBgBIgBAAIgBgB").f();
	this.shape_20.setTransform(238,114.2);

	this.shape_21 = new Shape();
	this.shape_21.graphics.f("#ffffff").p("AgpA0IABAAIAAABIAAAAIAAAAIABAAIgAAAIABAAIAAABIABAAIAAAAIAAAAIAAABIABAAIAAAAIAAAAIAAAAIABAAIAAABIABAAIgBAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIABAAIgBABIABAAIASgCIAEgPIAZgDIABAEIAAABIAAAAIABAAIAAAAIAAABIABAAIAAAAIAAAAIAAAAIAAAAIAAABIABAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIAAAAIAAABIABAAIAAAAIAAAAIAAABIABAAIAAAAIAAAAIAAAAIABAAIAAABIAAAAIAAAAIAAgAIAAAAIABAAIARgCIghhjIAAgAIgAAAIAAgAIgAAAIAAgBIgBAAIAAgAIgBAAIAAgBIgAAAIAAgAIgAAAIgBgAIgAAAIAAgBIgBAAIAAgAIgAAAIAAgBIgAAAIAAgAIgBAAIAAgAIgBAAIAAgBIgAAAIAAgAIgAAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIgAgAIgNABIgfBqIAAAAIABAAIAAABIAAgBIAAABIAAAAIAAAA").p("AgEARIAGgWIAGAUIgMAB").f();
	this.shape_21.setTransform(216.2,117.7);

	this.shape_22 = new Shape();
	this.shape_22.graphics.f("#ffffff").p("AAXgnIgBAAIAAgAIgAAAIgBgAIgAAAIAAgBIgAAAIAAgAIgBAAIAAgBIgAAAIAAgAIgBAAIAAgAIgAAAIAAgBIgBAAIgBgBQgIgIgMACIghAEIAABZIABAAIAAAAIAAAAIAAABIABAAIAAAAIAAAAIAAABIAAgBIAAABIABAAIAAAAIAAAAIAAAAIABAAIAAABIAAgBIAAABIAAAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIABAAIAAABIABAAIAAAAIAAAAIAAABIABAAIAAAAIAAAAIAAAAIABAAIAAABIAQgCIAAgjIAFgBIAMAYIAAAAIABAAIAAAAIAAAAIAAABIABAAIAAAAIAAAAIAAABIABAAIAAAAIAAAAIAAAAIABAAIAAABIABAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIAAAAIAAABIABAAIAAAAIAAAAIABABIAAAAIAAAAIATgDIgTgkQAQgIAAgSQAAgMgIgGIAAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgAIgAAAIAAgBIgBAAIgBgB").p("AgJgYIAPgBIABAAIAAABQAAAMgLABIgFABIAAgO").f();
	this.shape_22.setTransform(207.9,118);

	this.shape_23 = new Shape();
	this.shape_23.graphics.f("#ffffff").p("AASgsQgHgHgNABIghAEIAABYIABAAIAAABIABAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAAAIABAAIAAABIABAAIAAAAIAAAAIAAABIABAAIAAAAIABgAIAAAAIABAAIAAAAIABAAIAAABIAAAAIAAAAIABgAIAAAAIABAAIAAABIABAAIAAAAIABAAIAAAAIAAAAIAAABIABAAIAAAAIAQgCIgAgiIAQgCQANgBAIgJQAIgJAAgMQAAgLgIgIIgBgBIgBAAIAAgAIgAAAIgBgBIgBAAIAAgAIgBAAIAAgBIgAAAIgBgBIgBAAIAAgAIgBAAIgAgAIgBAAIAAgBIgBAAIAAgAIgBAAIAAgBIgBAAIgAgAIgBAAIAAgAIgBAAIAAgBIgBAAIAAgAIgBAA").p("AAJgZIAAACQAAANgMABIgEAAIAAgOIAPgBIABAA").f();
	this.shape_23.setTransform(184.4,120.8);

	this.shape_24 = new Shape();
	this.shape_24.graphics.f("#ffffff").p("AAJgGIAAgBIgBAAIgPABIAAAOIAFgBQALgBAAgM").f();
	this.shape_24.setTransform(207.7,116.1);

	this.shape_25 = new Shape();
	this.shape_25.graphics.f("#ffffff").p("AgFALIAMgBIgGgUIgGAW").f();
	this.shape_25.setTransform(216.3,118.3);

	this.shape_26 = new Shape();
	this.shape_26.graphics.f("#ffffff").p("AAJgGIAAgCIgBAAIgPABIAAAOIAEgAQAMgBAAgN").f();
	this.shape_26.setTransform(184.4,119);

	this.shape_27 = new Shape();
	this.shape_27.graphics.f("#bab2ae").p("AAFAAQgCgDgBgBQgCgDABgDQgFABgBAIQgBAGACAGQAGgBABgK").f();
	this.shape_27.setTransform(96.9,4.7,0.984,0.984);

	this.shape_28 = new Shape();
	this.shape_28.graphics.f("#bab2ae").p("AAAATQgBgKAEgOQADgMgCgGQgBAIgFAQQgEAPACAHQgBgFAEAA").f();
	this.shape_28.setTransform(54,89.7,0.984,0.984);

	this.shape_29 = new Shape();
	this.shape_29.graphics.f("#bab2ae").p("AgFgfQAAgSgGgJQgCAJAFATQACAQAFAYQABAEABAJQABAIABAEQABADADAHQADAHgCAGQAEADAAgCQACgLgEgPQgIgcgCgOQgBgIgBgDQgBgGgDgD").f();
	this.shape_29.setTransform(162.9,91.9,0.984,0.984);

	this.shape_30 = new Shape();
	this.shape_30.graphics.f("#bab2ae").p("AACgZQgEADACAIQACAIgDABQABgFgBgDQgDADgBAEQAAAEADACQgDAGABAKQABANAAACQAHgEgBgUQACgVAAgJQgDgFgCgAQgBACACAAQACABgBAB").f();
	this.shape_30.setTransform(98.4,15.7,0.984,0.984);

	this.shape_31 = new Shape();
	this.shape_31.graphics.f("#bab2ae").p("AgYgrQAEAKAJAJQAFAFALAKQgBADgBAFQgBAGADACQAEABAEgDQAEAGADARQADAQAFAGQACgJgEgOQgFgQAAgJQAFgEgDgJQgFgOAAgDQgCAAgFACQgEgDgIgIQgIgIgFgDQACAGAEAJQgCgAgFgFQgEgEgDAB").f();
	this.shape_31.setTransform(146.1,14.9,0.984,0.984);

	this.shape_32 = new Shape();
	this.shape_32.graphics.f("#bab2ae").p("AjvkDQAtgDA7AEQgFABgNABQgOAAgEABQAEAEAUAAQABAAAOgBQAIgBAFACQAAABgDAVQgDAQgDAIQADADgCAHQgCAIAAADQAAAXAAACQgBAPgEAJQgBAJgBAQQgBAOgDAJQAAAGADgBQgGAJACAJQAEgDABgHQAAgJABgFQAIgnACgYIACgRQAFgpAGgTQAAgMAFgLQADABAFABQAFAAAEgDQAEAEABAAQABAAAFgCQABAIgBATQgBASABAIQgGAPADAeQAGgDABgPQABgjADgOQACgBABgGQABgGADgBQADABgBAFQAAAGACACQAGgDABgNQAAgOAEgCQADgBAFACQAEABACAEQgBABgDADQgDADAAADQAAAHADgDQgDADgBAEQgCAGAFADQAAgBADgIQABgFAEgBQgBAGADAGQgBABgBgCQgCgBgBABQABABgBAFQABABADgCQACgDACACQACgDABgIQABgJABgDQgDgBgGgFQACgBAAgEQgBgEACABQAEAAgBAEQgCAFACABQADgAAAgGQABgFAGAAQgEATgBAeQgBARgBAjQgDBSADBsQgEAJABAOQABAIACAQQABALgCAeQgBAaADAOQgDAfACA/QAEgDgBgKQgBgKACgEQgCgJACgPQADgUAAgEQgDgOABgHQABgXABg8QABg1ACgeQABgGgBgOQgBgNAAgGQABgKABgFQABgJgDgGQAEgWgBgnQgBgzABgJQABgGACgJQACgKABgFQAAgMgBgGQAAgLAGgFQAEAEgDAFIgEAKQAAADABAHQABAGgAAEQADAAgBALQgCAKAFACQACgIAAgDQABgHgDgEQAEgDABgJQABgJADgEQACAAACAEQABADADAAQgDAFgBAGQgBAEgBAKQAFAAAAgFQgBgGABgCQAAgCACgBQACgBABgBIABgJQAAgGAFABQgBAIABAMQABAGACANQgBABgDgBQgDgAgBAEQABADACgBQADgCABACQAAAMgAAZQgBAVABAKQAAADgEAEQAAABADgAQADAAgBABQgBAGADAaQABAJAAAVQgBATABAKQAAAEADAJQABADgDAFQAAACACAIQABAHAAAFQABAJABAhQAAAaACAPQAGgXgCgkQgBgJACgSQACgTgBgIQgDgMAAgGQACgTAAgJQABgdgChCQgBg9ABgiQAEgDAJAAQAJA6AGBeQAJCIABAUQgEAKAFAGQABgIgBgLQgBgMAAgFQAAgJgCghQgCgfABgRQgEgigEhEQgEhFgDgcQAHgCABAIQABALADADQABgDAAgGQABgGACgDQAEgAACAEQACAFACAAQACgGAJAAQAFAAALABQAFAGABAOQAAAIABAQQABAGACAPQACANgCAIQAEAMABASQABALABAVQABAEADAIQACARACAjQABAKAFAlQADAdABASQABAKAAATQABAQADALQADgNgCgUQgDgYgBgMQgCgdAAgOQAAgKgDgOQgEgUgBgEQgBgWgBgLQgBgVgEgKQACgFABgCQgFgogBgKQgDgdACgVQgFgMABgNQAEAFACARQACASAEAFQACgDgBgHQgCgGADgCQgDgEgCgJQgDgKACgFQAEABABAJQABAJADABQAAgBgBgIQgBgGACgFQAEgBAFACQAFACgBAFQADAAABgDQABgEADAAQAEADABAGQABACABAKQABANAGBTQAEA7AFAiQABghgGhFQgGhEACgpQACgAAIgCQAGgBADgCQAOADAXgBQAigBAGAAQgBgEgGAAQgHAAgDgBQASgDAvACQAAACgGABQgIAAgCABQADADAGAAQAKgAADAAQATAjACAEQANAUAOALQgDgJgIgKIgOgQQgDgEgFgMQgEgKgFgFQgBgBAAgGQAAgEgEABQAAgDADgBQADgBAAgCQgHgCgDgCIgOAAQgHABgdgBIogAAQgDACgBAAQADADAAACQAAABAAADQABACgBgAQgDgBgBABQgVAfgNAQQgTAZgVAPQABgAAhgvQAUgdAJgYIgCAAQgLASgYAnQgVAhgTATQgGgBgEAEQgGAFgAAAQAAAEADAEQAEADgBAEQAIgBAGgIQAGgJADgEQADgDAYgUQAJgMAEgGQAIgLAHgGQADgDABAFQASgcAHgPQAGgBAOgBQANAAAFgBQgDgCgIgBQgIAAgDgBQABgDADgAQACAAADAA").p("AhAjtQgBgJADgFQADgBADACQAAAFgBACQgBABgEAE").p("AhskDQAIgBADABQgCADgEABQgFAAgAgE").p("ADdj+QAbgBAJACQgCAEgEAAQgGgBgDAAQghABgQgBQAEgDAIAAQAFAAAKAA").p("AAdj4QABAEgCACQgCgBAAgEQABgEgBgBQADgAABAE").p("AARj8QABABACgAQgBACgDAGQgCAFgDgBQABgBAAgFQAAgGACgBQAAAAACAC").p("AAEjzQAAgBABgBQABgBgBgBQACAAACABQgCAEgDAA").p("AgGkDQABgBADAAQAEABABAAQAAAEgGAAQgBgDgBgB").p("AgbkEQAEACgFABQgFABgBgEQAGABABgC").p("AgnkAQgIABgIgDQABgDAIAAQAHABAAAD").f();
	this.shape_32.setTransform(106.6,28,0.984,0.984);

	this.shape_33 = new Shape();
	this.shape_33.graphics.f("#bab2ae").p("AgHABIAOAAQgEgDgBgAIgKAD").f();
	this.shape_33.setTransform(137.9,2.1,0.984,0.984);

	this.shape_34 = new Shape();
	this.shape_34.graphics.f("#bab2ae").p("AgYgDIgBAEQgEACgHAAIBJAAQgRgAgXgBIgBgEIgUAA").f();
	this.shape_34.setTransform(125.4,2,0.984,0.984);

	this.shape_35 = new Shape();
	this.shape_35.graphics.f("#bab2ae").p("AhCgDIgBABIgBgBIgIAAIgBADQgpAAgSAAQgfABgagCIAAgBIgGAAQgDADgGADIFyAAQgDgDgFgBQgGgBgDgAIgkAAIgFAAIgBgAIgYAAQgLABgTAAQgTAAgGAAIgAgBIgHAAIgCABIAAgBIgIAAIAAABQgiABghgBIAAgBIgJAA").p("ADRADQgPgBgIgBQgOgBgJADIAuAA").f();
	this.shape_35.setTransform(100.6,2,0.984,0.984);

	this.shape_36 = new Shape();
	this.shape_36.graphics.f("#bab2ae").p("AArAEQgOgDgkgDQghgDgPgEQAGAGANABQAHAAAPAAQAXADAsAJQAAgBADgBQACgBgBgCQgKgCgDgDQAAACABAAQABABgBAB").f();
	this.shape_36.setTransform(98.6,124.1,0.984,0.984);

	this.shape_37 = new Shape();
	this.shape_37.graphics.f("#bab2ae").p("AgSgIQAWAKAPAFQgEgGgNgEQgFgBgQgE").f();
	this.shape_37.setTransform(91,122.5,0.984,0.984);

	this.shape_38 = new Shape();
	this.shape_38.graphics.f("#bab2ae").p("AgDABQAGADABgDQgBAAgDgBQgCgBgBAD").f();
	this.shape_38.setTransform(88.6,121.4,0.984,0.984);

	this.shape_39 = new Shape();
	this.shape_39.graphics.f("#bab2ae").p("AADATQAEABACgBQgDgBABgFQAIgJgHgLQgGgLgKAAQADADAGAFQAEAEAAAFQAAACgGAGQgFAFADAFQACAAAEAC").f();
	this.shape_39.setTransform(87.4,119.3,0.984,0.984);

	this.shape_40 = new Shape();
	this.shape_40.graphics.f("#bab2ae").p("AAIACQgJgDgFAAQADAFALgC").f();
	this.shape_40.setTransform(85.7,117,0.984,0.984);

	this.shape_41 = new Shape();
	this.shape_41.graphics.f("#bab2ae").p("AgDgBQgBgBgBgBQgGAAgKgDQgJgDgHAAIgCAAQACADADABQACAAADABQAMADAWAGQASAEAPAAQgBgDgEgAQgEAAgCgAQgTgGgKAAQAAgBgCgA").f();
	this.shape_41.setTransform(78.8,115.5,0.984,0.984);

	this.shape_42 = new Shape();
	this.shape_42.graphics.f("#bab2ae").p("AALAEQgDgEgHgBQgBAAgKgBIAKAEQAGACAGAA").f();
	this.shape_42.setTransform(73.9,114.5,0.984,0.984);

	this.shape_43 = new Shape();
	this.shape_43.graphics.f("#bab2ae").p("AgDgBQABADADAAIAEABQgBgDgHgB").f();
	this.shape_43.setTransform(71.7,113.7,0.984,0.984);

	this.shape_44 = new Shape();
	this.shape_44.graphics.f("#bab2ae").p("AAIg4QgGAUgEAiQgHAPgDAPQgDAVAIAJQACgDgCgGQgBgFADgBQgCgBAAgBQABgFAIgdQAFgVgBgQQADgEABgCQACgDgBgEQgBgAgAAAQgBgAABgDQADgAABgBQgBgBABgBQABgCgBgBIgFAA").f();
	this.shape_44.setTransform(89.9,115.2,0.984,0.984);

	this.shape_45 = new Shape();
	this.shape_45.graphics.f("#bab2ae").p("AABgGQgEAKADAEQAGgBgEgO").f();
	this.shape_45.setTransform(91,108.7,0.984,0.984);

	this.shape_46 = new Shape();
	this.shape_46.graphics.f("#bab2ae").p("AgGhJQAHBJgBBLQAGgEgBgNQgBgOADgFQgDgTgBgXQAAgCABgFQACgFgBgDIgDgFQgBgFgBgXQgBgSgFgG").f();
	this.shape_46.setTransform(128.8,114.5,0.984,0.984);

	this.shape_47 = new Shape();
	this.shape_47.graphics.f("#bab2ae").p("AADgMQgDAEgDAVQAIgOgDgL").f();
	this.shape_47.setTransform(70.3,105.1,0.984,0.984);

	this.shape_48 = new Shape();
	this.shape_48.graphics.f("#bab2ae").p("AACAHQABgDgBgEQgAgFgDgBQgEAKAGAC").f();
	this.shape_48.setTransform(128,104.3,0.984,0.984);

	this.shape_49 = new Shape();
	this.shape_49.graphics.f("#bab2ae").p("AACgNQgAACgEAZQAGgDABgKQABgIgCgH").f();
	this.shape_49.setTransform(91.8,104.8,0.984,0.984);

	this.shape_50 = new Shape();
	this.shape_50.graphics.f("#bab2ae").p("AgDAJQAFgAACgGQABgFgBgEQgCACgBAGQgCAGgCAC").f();
	this.shape_50.setTransform(70.9,102.5,0.984,0.984);

	this.shape_51 = new Shape();
	this.shape_51.graphics.f("#bab2ae").p("AABAEQAEgBgBgEQgDgDgDADQgBADAEAC").f();
	this.shape_51.setTransform(168.1,100.6,0.984,0.984);

	this.shape_52 = new Shape();
	this.shape_52.graphics.f("#bab2ae").p("AgdgXQAYAJAXADQADABAIADQAIACAFABQAEAAAFAAQAEAAACACIABACQgBACgFAXQgDAOAAAMQADgAABgCQABgDABgBQAIAKANAIQANAHAOADQgQgIgIgEQgOgHgDgKQADgDAOgGQALgEADgGQgBgGAAgPQgCAAgCAEQgCADgDAAQgNgNgagHQgfgFgQgEQgQgIgJABQgJgHgbgJQgVgSgPgLIgCAAQADAIAMAIQAMAIADAGQAOAGAcAN").p("AA5AkQgBgLAIgZQAYAJgGASQgDADgIACQgJADgEAB").f();
	this.shape_52.setTransform(61.1,106.3,0.984,0.984);

	this.shape_53 = new Shape();
	this.shape_53.graphics.f("#bab2ae").p("AgEARQABgFAFgMQAEgKgBgGQgFAFgDAKQgDAKABAJ").f();
	this.shape_53.setTransform(71.9,99.9,0.984,0.984);

	this.shape_54 = new Shape();
	this.shape_54.graphics.f("#bab2ae").p("AADgIQgBADgBAGQgCAFgCADIAGAAQgBgDABgGQABgFgCgD").f();
	this.shape_54.setTransform(52,98.2,0.984,0.984);

	this.shape_55 = new Shape();
	this.shape_55.graphics.f("#bab2ae").p("AgFAXQgCADgBAEQgBAGAEAAQAEgKAEgYQADgYAEgKQgCABgCgBQgBgBgCAAQABAJgFATQgEASABAL").f();
	this.shape_55.setTransform(93,99.8,0.984,0.984);

	this.shape_56 = new Shape();
	this.shape_56.graphics.f("#bab2ae").p("AADgKQgBADgDAIQgCAGABAEQAGgLgCgK").f();
	this.shape_56.setTransform(52.7,95.4,0.984,0.984);

	this.shape_57 = new Shape();
	this.shape_57.graphics.f("#bab2ae").p("AAEgIQgCgCgBgAQgEAQgBAFQAFgBAAgGQgBgJACgD").f();
	this.shape_57.setTransform(93.8,95.3,0.984,0.984);

	this.shape_58 = new Shape();
	this.shape_58.graphics.f("#bab2ae").p("AABgHQgBACgCAGQgBAFADACQAHgLgGgE").f();
	this.shape_58.setTransform(53.2,93.6,0.984,0.984);

	this.shape_59 = new Shape();
	this.shape_59.graphics.f("#bab2ae").p("AgIg7QgBADACACQACACAAABQAAAUAEAgQACASAEAhQABAJAEACQgHhVgJgnQgBADgBAB").f();
	this.shape_59.setTransform(127.1,97,0.984,0.984);

	this.shape_60 = new Shape();
	this.shape_60.graphics.f("#bab2ae").p("AgBAEQADgAAAgDQAAgDgCgCQgBACAAAF").f();
	this.shape_60.setTransform(126.4,90.4,0.984,0.984);

	this.shape_61 = new Shape();
	this.shape_61.graphics.f("#bab2ae").p("AAAgDQgDAIAFAAQAAgHgCgB").f();
	this.shape_61.setTransform(126.3,89.6,0.984,0.984);

	this.shape_62 = new Shape();
	this.shape_62.graphics.f("#bab2ae").p("AABAGQADgDgBgEQgBgEgDgBQABACgBAFQAAAEACAB").f();
	this.shape_62.setTransform(126.2,88.6,0.984,0.984);

	this.shape_63 = new Shape();
	this.shape_63.graphics.f("#bab2ae").p("AgAgFQgBAFACAHQADgBgBgFQgBgFgCgB").f();
	this.shape_63.setTransform(126,86.7,0.984,0.984);

	this.shape_64 = new Shape();
	this.shape_64.graphics.f("#bab2ae").p("AAFgrQgJAtgEArQAEgEACgLQABgJgBgIQAFgIABgTQABgWACgGQgBgBgCAB").f();
	this.shape_64.setTransform(94.7,89.8,0.984,0.984);

	this.shape_65 = new Shape();
	this.shape_65.graphics.f("#bab2ae").p("AACAEQADgGgDgDIgDAAQgBADABADQABAEADAA").f();
	this.shape_65.setTransform(95.4,84.6,0.984,0.984);

	this.shape_66 = new Shape();
	this.shape_66.graphics.f("#bab2ae").p("AACgJQgBADgCAIQgCAHADACQAAgBADgJQACgGgDgD").f();
	this.shape_66.setTransform(54.9,84.2,0.984,0.984);

	this.shape_67 = new Shape();
	this.shape_67.graphics.f("#bab2ae").p("AADgFQgDAAgBAEQAAACgBAEQADgAABgEQABgGABgA").f();
	this.shape_67.setTransform(55.2,82.6,0.984,0.984);

	this.shape_68 = new Shape();
	this.shape_68.graphics.f("#bab2ae").p("AADgBQgDgBgDABQAAAEADAAQADAAAAgE").f();
	this.shape_68.setTransform(98.1,82.3,0.984,0.984);

	this.shape_69 = new Shape();
	this.shape_69.graphics.f("#bab2ae").p("AAFAXQAAghgJgMQgBAZAJAU").f();
	this.shape_69.setTransform(161,82.8,0.984,0.984);

	this.shape_70 = new Shape();
	this.shape_70.graphics.f("#bab2ae").p("AAAADQABgBAAgDQABgDgDABQAAAAAAAEQAAACABAA").f();
	this.shape_70.setTransform(55.6,80.9,0.984,0.984);

	this.shape_71 = new Shape();
	this.shape_71.graphics.f("#bab2ae").p("AA7kSQAIBAAQBXQAJAyATBmQAGgBAGgFQAGgGAFgBQAHAGgDAPQgMgJgFAFQABADAIAEQAJAEACADQAEAQgCAGQgEAFgJAEQgBABgQAFIgIAAIg2AQQgKADgTADQgTADgJACQgPAEgGABQgHABgIADQgJAEgFACIgIABQgEABgCADQgBAGAEADQADABAFADQAFAJgEAKQgDAKgIAFQgsAUghABQgSABhLgDQgNAAgGAAQgLAAgHgEQgBgAgBgEQgBgDgDAAQgBABgDAJQgDAGgFAAQABAAADAAQACAAAAABQgBAZABAxIAJAAQABgmgBgmQBlAKA3gKQAJgBAMgGQAHgDAMgGQASgJAFgEQALgKgDgQQgBgCgDgEQgDgEgBgDQAGgHASgEQAKgDAXgFQAIgCAWgDQATgDALgEQAOgFAbgJQAKgDAWgGQAQgIAAgRQABgIgGgNQgFgPgBgIQAFgGANgDQADgBAVgDQALgCAWgCQAWgCALgCQAIgBAJgFQALgEAFgDQALgGABgFQABgDgDgGQgDgKgBgBQgBgJgAgEQgBgGgEgEQAAAHADASQADAOgCAHIgZANQgIADgNABQgOAAgIABQgHABgLAEQgNAEgFABQgRACgIABQgNACgIAEQgDACgGAFQgGAFgDACQgNgugIgoQgBgOgCgGQgFgOgBgGQgEgVgBgIQABgFgAgDQgBgHgEgOQgFgOgBgGQABgHgBgEQgDgHgBgEQgBgJgDgJQgCgSgBgJQgCgQgGgJ").f();
	this.shape_71.setTransform(136.4,105.9,0.984,0.984);

	this.shape_72 = new Shape();
	this.shape_72.graphics.f("#bab2ae").p("AgBALQACgHABgEQACgIgDgDQAAADgCAIQgBAHABAD").f();
	this.shape_72.setTransform(56,78.9,0.984,0.984);

	this.shape_73 = new Shape();
	this.shape_73.graphics.f("#bab2ae").p("AABAGQADgGgGgFQAAADAAAFQABAEACAA").f();
	this.shape_73.setTransform(142.2,77.9,0.984,0.984);

	this.shape_74 = new Shape();
	this.shape_74.graphics.f("#bab2ae").p("AABgFQAAAAgBAGQgBAEABACQABgEABgDQABgEgBgB").f();
	this.shape_74.setTransform(56.4,77,0.984,0.984);

	this.shape_75 = new Shape();
	this.shape_75.graphics.f("#bab2ae").p("AACgCQgDgBAAAFQACABABgCIABgD").f();
	this.shape_75.setTransform(56.6,76.1,0.984,0.984);

	this.shape_76 = new Shape();
	this.shape_76.graphics.f("#bab2ae").p("AAAgGQAAABgBAGQgBAEACACQACgEABgDQABgFgDgB").f();
	this.shape_76.setTransform(57.2,73.3,0.984,0.984);

	this.shape_77 = new Shape();
	this.shape_77.graphics.f("#bab2ae").p("AABAEQACgBgBgCQgBgDgDABQAAAFACAA").f();
	this.shape_77.setTransform(141.2,71.2,0.984,0.984);

	this.shape_78 = new Shape();
	this.shape_78.graphics.f("#bab2ae").p("AADgSQgGAcABAKQAEgNACgGQADgNgDgF").f();
	this.shape_78.setTransform(57.8,70.4,0.984,0.984);

	this.shape_79 = new Shape();
	this.shape_79.graphics.f("#bab2ae").p("AABgEQgDACABAIQADAAABgFQABgFgDAA").f();
	this.shape_79.setTransform(58.3,67.6,0.984,0.984);

	this.shape_80 = new Shape();
	this.shape_80.graphics.f("#bab2ae").p("AABgGQgDAFAAAKQADgBABgGQACgGgDgC").f();
	this.shape_80.setTransform(58.6,66,0.984,0.984);

	this.shape_81 = new Shape();
	this.shape_81.graphics.f("#bab2ae").p("AgXhtQABAOAIAbQAIA1AJAcQAAAWAJAZQgBALAEAOQADAPAGAJQACgHgDgNQgEgOABgHQgEgKgFgaIgLg1QgBgFgBgFQgCgFgBgDQABgJgBgEQgBgGgDgKQgEgKgBgFQgAgKgBgFQgBgIgFgE").f();
	this.shape_81.setTransform(158.5,69.8,0.984,0.984);

	this.shape_82 = new Shape();
	this.shape_82.graphics.f("#bab2ae").p("AADgOQAAAEgEALQgEAJAEAFQAEgNABgCQADgKgDgF").f();
	this.shape_82.setTransform(59.8,60.4,0.984,0.984);

	this.shape_83 = new Shape();
	this.shape_83.graphics.f("#bab2ae").p("AAAAEQABgCAAgCQABgDgDABQAAAAAAADQAAACABAA").f();
	this.shape_83.setTransform(60.2,58.6,0.984,0.984);

	this.shape_84 = new Shape();
	this.shape_84.graphics.f("#bab2ae").p("AABAFQADgGgDgBQAAAAAAAEQAAADABAA").f();
	this.shape_84.setTransform(156.2,58.6,0.984,0.984);

	this.shape_85 = new Shape();
	this.shape_85.graphics.f("#bab2ae").p("AgBAEQADAAABgEQABgEgEAAQABAEgBAE").f();
	this.shape_85.setTransform(60.4,57.7,0.984,0.984);

	this.shape_86 = new Shape();
	this.shape_86.graphics.f("#bab2ae").p("AACgIQAAADgEAGQgCAGADADQAGgKgDgH").f();
	this.shape_86.setTransform(60.7,56.3,0.984,0.984);

	this.shape_87 = new Shape();
	this.shape_87.graphics.f("#bab2ae").p("AgBAMQADgGABgGQABgIgDgEIgCALQgBAIABAE").f();
	this.shape_87.setTransform(104.4,55.1,0.984,0.984);

	this.shape_88 = new Shape();
	this.shape_88.graphics.f("#bab2ae").p("AABgGQgCACAAALQADAAABgGQABgGgDgB").f();
	this.shape_88.setTransform(61.1,54.2,0.984,0.984);

	this.shape_89 = new Shape();
	this.shape_89.graphics.f("#bab2ae").p("AABgEQgCACgBAEQgAAEADABQAAgBABgEQABgEgCgB").f();
	this.shape_89.setTransform(61.4,52.8,0.984,0.984);

	this.shape_90 = new Shape();
	this.shape_90.graphics.f("#bab2ae").p("AA+jtQgCAFgFAMQgEALgBAGQgLAxgXBjQgGAGgDAOQgBAJgGAVQgEATgCAMQgHAPgGAXQgDAOgHAbQgCAIgGAOQgCAIgDAQQgDAQgDAIQgBADgEAGQgDAGABAFQgEAGgDAPQgBAIgDAPQADgBADgGQACgHABgDIALghIACgNQAFgOADgHQAFgPAGgeQAHghADgMQAEgMACgHQADgLgBgJQAFgHAEgUQAEgPANguQAKgnAFgXQACgBABgEQAAgFACgHQACgGgBgEQAEgFABgIQABgJABgFQAEgIABgGQACgKABgGQABgLAEgBQgBgDABgGQAAgFgBgE").f();
	this.shape_90.setTransform(78.5,74.5,0.984,0.984);

	this.shape_91 = new Shape();
	this.shape_91.graphics.f("#bab2ae").p("AgCABQADABABgAIABgEQgBgBgCAAQAAACgBAC").f();
	this.shape_91.setTransform(84.7,50.8,0.984,0.984);

	this.shape_92 = new Shape();
	this.shape_92.graphics.f("#bab2ae").p("AAAAEQACgGgDgBQAAACgBACQgBABACAB").f();
	this.shape_92.setTransform(96.9,49,0.984,0.984);

	this.shape_93 = new Shape();
	this.shape_93.graphics.f("#bab2ae").p("AADgDQgEAAAAACIgBAFQADABABgDQABgEABgA").f();
	this.shape_93.setTransform(85.3,47.8,0.984,0.984);

	this.shape_94 = new Shape();
	this.shape_94.graphics.f("#bab2ae").p("AAGgmQgBAFgIAiQgFAXgBAPQAFgPAEgXQAFgZADgNIgDAA").f();
	this.shape_94.setTransform(62.5,48.1,0.984,0.984);

	this.shape_95 = new Shape();
	this.shape_95.graphics.f("#bab2ae").p("AgBgCQgDABAEAEQADgGgEAB").f();
	this.shape_95.setTransform(97.1,44.5,0.984,0.984);

	this.shape_96 = new Shape();
	this.shape_96.graphics.f("#bab2ae").p("AAAgFQgCACAAAIQACgBABgEQACgEgDgB").f();
	this.shape_96.setTransform(63.3,43.8,0.984,0.984);

	this.shape_97 = new Shape();
	this.shape_97.graphics.f("#bab2ae").p("AgRhMQACAKACAVQABAFADAKQAEAKABAFIAFAaQACAJAFAQQABADADAVQACAMAEAGQABgJgDgLQgEgNgBgHQgBgUgDgKIgHgdQgFgagCgFQgDgFgBgDIAAgJQAAgGgDgDQAAgBgCAB").f();
	this.shape_97.setTransform(154.4,49.8,0.984,0.984);

	this.shape_98 = new Shape();
	this.shape_98.graphics.f("#bab2ae").p("AABAJQADgNgEgEQAAAEgBAFQgAAEACAE").f();
	this.shape_98.setTransform(115,42.5,0.984,0.984);

	this.shape_99 = new Shape();
	this.shape_99.graphics.f("#bab2ae").p("AADANQgBgDAAgJQABgJgCgEQgBgBgBAAQAAABABAOQABAIADAC").f();
	this.shape_99.setTransform(121.9,42.7,0.984,0.984);

	this.shape_100 = new Shape();
	this.shape_100.graphics.f("#bab2ae").p("AgBgFQABAGgAAFQADgAgBgGQgBgFgDAA").f();
	this.shape_100.setTransform(121.8,40.6,0.984,0.984);

	this.shape_101 = new Shape();
	this.shape_101.graphics.f("#bab2ae").p("AAAgEQAAABgBADQgBACABACQADgAAAgDQAAgDgCgC").f();
	this.shape_101.setTransform(97.2,39,0.984,0.984);

	this.shape_102 = new Shape();
	this.shape_102.graphics.f("#bab2ae").p("AABgNQAAABgCANQgBAJAEADQACgSgBgIIgCgB").f();
	this.shape_102.setTransform(110.6,39.2,0.984,0.984);

	this.shape_103 = new Shape();
	this.shape_103.graphics.f("#bab2ae").p("AADgKQgBACgDAIQgCAGAAAFQAEgBACgJQABgJgCgD").f();
	this.shape_103.setTransform(64.6,36.9,0.984,0.984);

	this.shape_104 = new Shape();
	this.shape_104.graphics.f("#bab2ae").p("AgBAAQAAARADAOQABgGgBgVQgBgVABgKQgCgCgBAAQAAAKAAAU").f();
	this.shape_104.setTransform(114.9,38.4,0.984,0.984);

	this.shape_105 = new Shape();
	this.shape_105.graphics.f("#bab2ae").p("AABgRQgBAGgCALQgBAKADAHQAEgTgDgQ").f();
	this.shape_105.setTransform(97.3,36.4,0.984,0.984);

	this.shape_106 = new Shape();
	this.shape_106.graphics.f("#bab2ae").p("AAAAEQACgBAAgCQgBgBgCgBQAAAAgBADQAAACABAB").f();
	this.shape_106.setTransform(97.4,34.2,0.984,0.984);

	this.shape_107 = new Shape();
	this.shape_107.graphics.f("#bab2ae").p("AACgLQgEAUAAAEQADgDABgIQABgIgBgF").f();
	this.shape_107.setTransform(65.1,34.5,0.984,0.984);

	this.shape_108 = new Shape();
	this.shape_108.graphics.f("#bab2ae").p("AABgCQAAABgCgBQgBACABADQABABACgCQABgDgCgA").f();
	this.shape_108.setTransform(97.5,32.4,0.984,0.984);

	this.shape_109 = new Shape();
	this.shape_109.graphics.f("#bab2ae").p("AgHgfIAAAJQABAJAFAQQAFARABAIQABAGAAAKQAAAJAFAFQgEgmgGgOQgCgXgBgLQgCgTgHgKQgCAIAFAT").f();
	this.shape_109.setTransform(151.6,36.1,0.984,0.984);

	this.shape_110 = new Shape();
	this.shape_110.graphics.f("#bab2ae").p("AABADQgBgBABgBQABgBgBgBQgDgAgBADQgBADADAA").f();
	this.shape_110.setTransform(92.2,29.2,0.984,0.984);

	this.shape_111 = new Shape();
	this.shape_111.graphics.f("#bab2ae").p("AADAGQABgKgEgBQgDABABAFQABAFADAA").f();
	this.shape_111.setTransform(150.3,29.3,0.984,0.984);

	this.shape_112 = new Shape();
	this.shape_112.graphics.f("#bab2ae").p("AABgSQgFAYACAMQABAAABgBQAAgBABAAIgCgSQADAAABgBQgCgDABgGQABgEgDgD").f();
	this.shape_112.setTransform(97.5,30.3,0.984,0.984);

	this.shape_113 = new Shape();
	this.shape_113.graphics.f("#bab2ae").p("AADADQABgEgDgBQgBABAAADQABADADgB").f();
	this.shape_113.setTransform(150.2,28.3,0.984,0.984);

	this.shape_114 = new Shape();
	this.shape_114.graphics.f("#bab2ae").p("AACAGQAAgBABgFQABgFgCgBQAAACgDAGQgBAEAEAA").f();
	this.shape_114.setTransform(92.4,27.3,0.984,0.984);

	this.shape_115 = new Shape();
	this.shape_115.graphics.f("#bab2ae").p("AABAJQABgEgAgFQgBgGABgCIgEAAQACACgBAGQgBAGADAD").f();
	this.shape_115.setTransform(97.6,26.3,0.984,0.984);

	this.shape_116 = new Shape();
	this.shape_116.graphics.f("#bab2ae").p("AABgSIgDgBQABAGABANQABANAEAGQAAgCgDgj").f();
	this.shape_116.setTransform(125.3,26.8,0.984,0.984);

	this.shape_117 = new Shape();
	this.shape_117.graphics.f("#bab2ae").p("AADALQABgMgFgJQgCAFACAGQABAGAEAD").f();
	this.shape_117.setTransform(149.7,25.8,0.984,0.984);

	this.shape_118 = new Shape();
	this.shape_118.graphics.f("#bab2ae").p("AAAgJQgDADAAAGQAAAHADABQADgEABgFQAAgGgEgD").f();
	this.shape_118.setTransform(97.8,24.3,0.984,0.984);

	this.shape_119 = new Shape();
	this.shape_119.graphics.f("#bab2ae").p("AADgVQgFAFgBAOQAAAIAAAPQAHgTgBgX").f();
	this.shape_119.setTransform(92.7,24.5,0.984,0.984);

	this.shape_120 = new Shape();
	this.shape_120.graphics.f("#bab2ae").p("AACADQABgFgDAAQgCADABABIADAA").f();
	this.shape_120.setTransform(93,22,0.984,0.984);

	this.shape_121 = new Shape();
	this.shape_121.graphics.f("#bab2ae").p("AgBAKQAAgAACgBQACAAAAgBQgBgLABgFQgBgBgEAAQABADgBAHQgBAGACAD").f();
	this.shape_121.setTransform(98,22.3,0.984,0.984);

	this.shape_122 = new Shape();
	this.shape_122.graphics.f("#bab2ae").p("AgDgQQgBAJADALQACAKAEAEQACgPgJgT").f();
	this.shape_122.setTransform(149.1,22.8,0.984,0.984);

	this.shape_123 = new Shape();
	this.shape_123.graphics.f("#bab2ae").p("AgBABQABABACgBQACgAgBgDQgEAAgBAD").f();
	this.shape_123.setTransform(108.8,20.9,0.984,0.984);

	this.shape_124 = new Shape();
	this.shape_124.graphics.f("#bab2ae").p("AgBgDQgCACABADQABADADgBQABgBgBgCQgBgBgBgB").f();
	this.shape_124.setTransform(98.1,21,0.984,0.984);

	this.shape_125 = new Shape();
	this.shape_125.graphics.f("#bab2ae").p("AgBgGQACADgEAJQAEABABgFQABgFABgCQgDgBgCAA").f();
	this.shape_125.setTransform(98,19.9,0.984,0.984);

	this.shape_126 = new Shape();
	this.shape_126.graphics.f("#bab2ae").p("AgBgDQgBABAAAEQAEABABgEQABgEgEAB").f();
	this.shape_126.setTransform(108.4,18.6,0.984,0.984);

	this.shape_127 = new Shape();
	this.shape_127.graphics.f("#bab2ae").p("AACAIQgCgFAEgCIAAgJQgDgAgCABQgCACgBAAQABACgBAGQgAAEAEAB").f();
	this.shape_127.setTransform(108.5,17.1,0.984,0.984);

	this.shape_128 = new Shape();
	this.shape_128.graphics.f("#bab2ae").p("AAVhdIgFAAIgBADQgEAegLAyQgNA4gEAWQgDASABAKQAIgeANhBQANg/AIge").f();
	this.shape_128.setTransform(67.5,24,0.984,0.984);

	this.shape_129 = new Shape();
	this.shape_129.graphics.f("#bab2ae").p("AABAEQABgBgBgCQgBgBgBgBQAAABgBACQAAABACAB").f();
	this.shape_129.setTransform(122.5,9,0.984,0.984);

	this.shape_130 = new Shape();
	this.shape_130.graphics.f("#bab2ae").p("AgBgFQgBACABAJQAGgBgGgK").f();
	this.shape_130.setTransform(102.7,7.4,0.984,0.984);

	this.shape_131 = new Shape();
	this.shape_131.graphics.f("#bab2ae").p("AgBgDIAAAFQAAACADAAQgBgBABgEQABgDgDAA").f();
	this.shape_131.setTransform(114.3,7.1,0.984,0.984);

	this.shape_132 = new Shape();
	this.shape_132.graphics.f("#bab2ae").p("AgBgGQgBADABAEQABAFACACQADgCgBgFQgBgFgDgB").f();
	this.shape_132.setTransform(122.2,6.6,0.984,0.984);

	this.shape_133 = new Shape();
	this.shape_133.graphics.f("#bab2ae").p("AgBgFQgBADABAEQABAEACABQADgBgBgFQgBgEgDgB").f();
	this.shape_133.setTransform(120.7,6.5,0.984,0.984);

	this.shape_134 = new Shape();
	this.shape_134.graphics.f("#bab2ae").p("AgCgSQABAYADAOQADgTgHgT").f();
	this.shape_134.setTransform(115.6,6.7,0.984,0.984);

	this.shape_135 = new Shape();
	this.shape_135.graphics.f("#bab2ae").p("AAEgDIgIAAQgBAFAFAAQAFAAgBgF").f();
	this.shape_135.setTransform(98,4.9,0.984,0.984);

	this.shape_136 = new Shape();
	this.shape_136.graphics.f("#bab2ae").p("AAOABQgUgGgGAGQALAFAQgF").f();
	this.shape_136.setTransform(135.1,3.4,0.984,0.984);

	this.shape_137 = new Shape();
	this.shape_137.graphics.f("#bab2ae").p("AAJAAQgLgDgFAEQADgAAHABQAEAAACgC").f();
	this.shape_137.setTransform(88.8,3,0.984,0.984);

	this.shape_138 = new Shape();
	this.shape_138.graphics.f("#bab2ae").p("AAOgBQgEgBgIAAQgKABgFAAQACADALAAQALAAADgD").f();
	this.shape_138.setTransform(86.3,3,0.984,0.984);

	this.shape_139 = new Shape();
	this.shape_139.graphics.f("#bab2ae").p("AgVgjQAHANALAbQAMAYANAKQABgHgIgIQgIgKgBgGQgFgBgCgGQgBgIgCgEQgIgIgBgEQgCgGgBgDQgCgFgDAC").f();
	this.shape_139.setTransform(142.2,6.4,0.984,0.984);

	this.shape_140 = new Shape();
	this.shape_140.graphics.f("#bab2ae").p("AADADIgBgFIgEAAQABADADAC").f();
	this.shape_140.setTransform(139.6,1.9,0.984,0.984);

	this.shape_141 = new Shape();
	this.shape_141.graphics.f("#bab2ae").p("AgCADQADAAACgEQgCgBgCAAQABABgBABQgBABAAAB").f();
	this.shape_141.setTransform(107.1,3.8,0.984,0.984);

	this.shape_142 = new Shape();
	this.shape_142.graphics.f("#bab2ae").p("AACgBQgIAAgBADQAIADAIgBQAAgDgHgB").f();
	this.shape_142.setTransform(101.9,2.5,0.984,0.984);

	this.shape_143 = new Shape();
	this.shape_143.graphics.f("#bab2ae").p("AgBgGQgDAFABAJQAEgEABgBQABgCAAgFQgDgCgDAB").f();
	this.shape_143.setTransform(100.5,3.9,0.984,0.984);

	this.shape_144 = new Shape();
	this.shape_144.graphics.f("#bab2ae").p("AgFgBQAAAEAFgAQAEgBACgDQgDgBgIAB").f();
	this.shape_144.setTransform(96.4,2.6,0.984,0.984);

	this.shape_145 = new Shape();
	this.shape_145.graphics.f("#bab2ae").p("AgEAAQAEAEAGgEQgBgBgEAAQgEgAgBAB").f();
	this.shape_145.setTransform(97.7,2.6,0.984,0.984);

	this.shape_146 = new Shape();
	this.shape_146.graphics.f("#bab2ae").p("AgEgAQABAEAFgBQAFgBgEgCQgBACgGgB").f();
	this.shape_146.setTransform(103.6,2.5,0.984,0.984);

	this.shape_147 = new Shape();
	this.shape_147.graphics.f("#bab2ae").p("AgBgEQABABgBAEQAAAEACABQACgCgBgEQgBgEgDAA").f();
	this.shape_147.setTransform(109.2,3.6,0.984,0.984);

	this.shape_148 = new Shape();
	this.shape_148.graphics.f("#bab2ae").p("AgEAIQADABACgFQADgGABgCQgCAAgBgBQgCgCgAAAQgCABAAAGQAAAFgBAB").f();
	this.shape_148.setTransform(108.1,3.6,0.984,0.984);

	this.shape_149 = new Shape();
	this.shape_149.graphics.f("#bab2ae").p("AgEgBQgKAAgFAAQgIAAgEADQAQABAhgBQADAAAGABQAEAAACgEQgJgCgbAB").f();
	this.shape_149.setTransform(128.7,3.1,0.984,0.984);

	this.shape_150 = new Shape();
	this.shape_150.graphics.f("#bab2ae").p("AgEAAQABABABADQAGAAAAgEQgBAAgEgBQgDAAgBAB").f();
	this.shape_150.setTransform(106.4,2.5,0.984,0.984);

	this.shape_151 = new Shape();
	this.shape_151.graphics.f("#bab2ae").p("AAmglQABAAgBgCQAAgDgAgBQAAgCgDgDQABAAADgCIgPAAQgJAYgUAdQghAvgBAAQAVgPATgZQANgQAVgfQABgBADAB").f();
	this.shape_151.setTransform(76.4,7.1,0.984,0.984);

	this.shape_152 = new Shape();
	this.shape_152.graphics.f("#bab2ae").p("AghAAQAhABAigBIAAgBIhCAAIAAAB").f();
	this.shape_152.setTransform(98.2,1.8,0.984,0.984);

	this.shape_153 = new Shape();
	this.shape_153.graphics.f("#bab2ae").p("AAAABIABgBIgCAAIABAB").f();
	this.shape_153.setTransform(94,1.8,0.984,0.984);

	this.shape_154 = new Shape();
	this.shape_154.graphics.f("#bab2ae").p("AAoABIABgEIhSAAQADAAAGABQAFABADADQAJgDAOABQAIABAPABIAGAAQAHAAAEgC").f();
	this.shape_154.setTransform(118.9,2,0.984,0.984);

	this.shape_155 = new Shape();
	this.shape_155.graphics.f("#bab2ae").p("AA6ABIABgDIh0AAIgAABQAaACAfgBQASAAApgA").f();
	this.shape_155.setTransform(87.3,1.9,0.984,0.984);

	this.shape_156 = new Shape();
	this.shape_156.graphics.f("#bab2ae").p("AgGAFIgGAAIAYAAQgDgGgIgDQgJgDACAL").f();
	this.shape_156.setTransform(109.6,1.2,0.984,0.984);

	this.shape_157 = new Shape();
	this.shape_157.graphics.f("#bab2ae").p("AAQADQgGgBgCgDQgGADgIABQgHAAgFAAIAhAA").f();
	this.shape_157.setTransform(113.3,1.5,0.984,0.984);

	this.shape_158 = new Shape();
	this.shape_158.graphics.f("#bab2ae").p("AAGgGQgEAJgGAFIAGAAQABgBADgGQADgEgBgD").f();
	this.shape_158.setTransform(81.6,1,0.984,0.984);

	this.shape_159 = new Shape();
	this.shape_159.graphics.f("#bab2ae").p("AgEgKIgBAUIAJAAIABgUIgJAA").f();
	this.shape_159.setTransform(108.7,133.8,0.984,0.984);

	this.shape_160 = new Shape();
	this.shape_160.graphics.f("#bab2ae").p("AgCgDQgBADADAFIAEAAQgBgIgEgA").f();
	this.shape_160.setTransform(139.5,1.3,0.984,0.984);

	// btm
	this.shape_161 = new Shape();
	this.shape_161.graphics.f("#ec5e5d").p("ATJplQg4g3gzgEIgAAAQgEgAgEAAIjTgAIgQAAIAAAIQAACnB2B2QB1B1ClAAQAAAAACjtQAAg3g9g7").p("AShm0QgXAAgNgTQgMgRAAgcQAAgdAMgRQANgTAXAAQAXAAANATQALARAAAcQAAAegMARQgNASgXAA").p("ASzn1QAAgrgSAAQgSAAAAArQAAArASAAQASAAAAgr").p("AS9mZIgRAAIAAAKIAQAAIAAAJIgQAAIAAASIgLAAIAAgtIAcAAIAAAJ").p("ASLmPIAAAJIgQAAIAAASIgKAAIAAgtIAcAAIAAAJIgRAAIAAAKIAQAA").p("ARcozIAAB9IgdAAIAAhjIgYAMIgFgWIAhgPIAYAA").p("AQBopIAAALQAKAAAJAEIgEAPQgJgFgJAAQgLAAAAAIQAAAFAQAGQAWAIAAAQQAAAUgXAEIAAAOIgNAAIAAgNQgOgBgHgFIAEgPQAKAGALAAQANAAAAgIQAAgHgOgFQgXgIAAgQQAAgJAGgGQAGgGAKgCIAAgNIANAA").p("ARXl6QgGAGgKAAQgKAAgGgGQgFgHAAgKQAAgKAGgHQAHgGAJAAQAKAAAGAGQAGAGAAAKQAAALgGAH").p("ARSmLQAAgGgDgEQgDgFgFAAQgLAAAAAPQAAAPALAAQALAAAAgP").p("A0EEYIABDcQAAAJABAJIAAAAQAKA0AtAuIAFAEQABACACABQAXAVAXANQAjATAhAAIDiAAIAAgBIAAgGQAAimh2h2Qh2h2imAAIgBAP").p("AvcHvQAAAegMARQgNASgXAAQgXAAgNgTQgMgRAAgdQAAgcAMgRQANgTAXAAQAYAAANATQAKARAAAc").p("AwcHwQAAArASAAQASAAAAgrQAAgrgSAAQgSAAAAAr").p("AxQGxIAAB9IgdAAIAAhjIgYALIgFgWIAhgPIAYAA").p("AzNHeQAAgIAGgGQAGgGAKgCIAAgNIANAAIAAAMQAKAAAJAEIgEAPQgJgFgJAAQgLAAAAAIQAAAGAPAFQAWAIAAAQQAAAUgXAEIAAANIgNAAIAAgNQgPgBgHgFIAEgPQAKAFALAAQANAAAAgIQAAgGgOgFQgXgIAAgQ").p("AxUJJQAFAGAAAKQAAALgGAHQgGAGgKAAQgKAAgGgGQgFgHAAgKQAAgKAGgHQAHgHAJAAQAKAAAGAH").p("AxZJZQAAgGgDgEQgDgFgFAAQgLAAAAAPQAAAQALAAQALAAAAgQ").p("AwAJLIAAAKIAQAAIAAAIIgQAAIAAASIgLAAIAAgtIAcAAIAAAJIgRAA").p("AwfJLIgRAAIAAAKIAQAAIAAAIIgQAAIAAASIgKAAIAAgtIAcAAIAAAJ").f("#f0e8de").p("ATEnGQAMgRAAgeQAAgcgLgRQgNgTgXAAQgXAAgNATQgMARAAAdQAAAcAMARQANATAXAAQAXAAANgS").p("AShnKQgSAAAAgrQAAgrASAAQASAAAAArQAAArgSAA").p("AS9miIgcAAIAAAtIALAAIAAgSIAQAAIAAgJIgQAAIAAgKIARAAIAAgJ").p("AR7mPIAAgKIARAAIAAgJIgcAAIAAAtIAKAAIAAgSIAQAAIAAgJIgQAA").p("AREozIghAPIAFAWIAYgMIAABjIAdAAIAAh9IgYAA").p("AP0opIAAANQgKACgGAGQgGAGAAAJQAAAQAXAIQAOAFAAAHQAAAIgNAAQgLAAgKgGIgEAPQAHAFAOABIAAANIANAAIAAgOQAXgEAAgUQAAgQgWgIQgQgGAAgFQAAgIALAAQAJAAAJAFIAEgPQgJgEgKAAIAAgLIgNAA").p("ARdmMQAAgKgGgGQgGgGgKAAQgJAAgHAGQgGAHAAAKQAAAKAFAHQAGAGAKAAQAKAAAGgGQAGgHAAgL").p("ARHl8QgLAAAAgPQAAgPALAAQAFAAADAFQADAEAAAGQAAAPgLAA").p("AODqhQnigB4EgBQhDAAgwAwQgwAwAABEQABIWAAEBIABgPQCmAAB2B2QB2B2AACmIAAAGIfTAAQBDAAAwgwQAwgwAAhDIAAsFQilgAh1h1Qh2h2AAinIAAgIIAQgA").p("AvmHCQgNgTgYAAQgXAAgNATQgMARAAAcQAAAdAMARQANATAXAAQAXAAANgSQAMgRAAgeQAAgcgKgR").p("AwLHFQASAAAAArQAAArgSAAQgSAAAAgrQAAgrASAA").p("AxoGxIghAPIAFAWIAYgLIAABjIAdAAIAAh9IgYAA").p("Ay2H2QAOAFAAAGQAAAIgNAAQgLAAgKgFIgEAPQAHAFAPABIAAANIANAAIAAgNQAXgEAAgUQAAgQgWgIQgPgFAAgGQAAgIALAAQAJAAAJAFIAEgPQgJgEgKAAIAAgMIgNAAIAAANQgKACgGAGQgGAGAAAIQAAAQAXAI").p("AxkJCQgJAAgHAHQgGAHAAAKQAAAKAFAHQAGAGAKAAQAKAAAGgGQAGgHAAgLQAAgKgFgGQgGgHgKAA").p("AxkJpQgLAAAAgQQAAgPALAAQAFAAADAFQADAEAAAGQAAAQgLAA").p("AvvJLIAAgJIgcAAIAAAtIALAAIAAgSIAQAAIAAgIIgQAAIAAgKIARAA").p("AwfJDIgcAAIAAAtIAKAAIAAgSIAQAAIAAgIIgQAAIAAgKIARAAIAAgJ").f();
	this.shape_161.setTransform(128.5,67.3);

	this.addChild(this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-0.1,257.1,134.9);

(lib.subText = function() {
	this.initialize();

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.f("#f0e8de").p("ARfg3IgvAAIAABtIAxAAIAAgSIgcAAIAAgeIAZAAIAAgRIgZAAIAAgZIAaAAIAAgT").p("APng3QgNAAgKACIAABsIAVAAIAAgsIADAAQAFAAADADQADAEACAKQABAMAEAOIAWAAQgFgSgCgMQgCgJgDgFQgDgGgFgCIAAgBQAEgCADgDQADgDADgDQACgDABgEQABgFAAgEQAAgIgBgGQgCgFgFgFQgFgEgIgCQgHgCgKAA").p("APwglQADABACADQADAEAAAHQAAAIgEAFQgCACgDACQgDABgDAAIgDAAIAAggQACgBADAAQADAAADAB").p("AOAAQIAAhHIgVAAIAABEQAAALABAIQACAIADAGQAEAGAGADQAGADAIAAQAIAAAGgDQAGgDAEgGQAEgFACgIQACgIAAgKIAAhDIgWAAIgABRQgBAEgBADQgDAEgFAAQgFAAgDgEQgBgDgBgEQgBgEAAgG").p("ANLgjIAAgUIg8AAIAAAUIATAAIAABaIAWAAIAAhaIATAA").p("ALegfQACAnAAAMIgAAAQgDgLgIgWIgRgrIgTAAIAABtIASAAIAAgYQAAgWgCgcIABAAQAIAXADAJIARAqIATAAIAAhtIgSAAIAAAY").p("AKMg3IgvAAIAABtIAxAAIAAgSIgcAAIAAgeIAZAAIAAgRIgZAAIAAgZIAaAAIAAgT").p("AIog3IgNBVIgBAAQgCgNgEgaIgIgvIgXAAIAYBtIAYAAIAYhtIgXAA").p("AHWgmQgDgFgEgDQgFgFgIgDQgIgDgKAAQgNAAgIACIAABrQAJACAIAAQALAAAIgDQAIgDAFgFQADgEADgEQADgEABgGQACgGABgHQACgHAAgIQAAgIgBgHQgBgHgCgFQgCgFgDgE").p("AHEgdQACAFABAHQABAHAAAIQAAALgBAIQgCAIgDAFQgDAEgDACQgDACgEAAIgDgAIAAhLQACgAADAAQAFAAADADQADADADAF").p("AFjAdIAFAZIAUAAIgVhtIgaAAIgXBtIAVAAIAEgZIAUAA").p("AFSANIAIgwIABAAIAIAwIgQAA").p("ADqg0QgJgDgIAAQgJAAgIADIgIAEQgDADgDADQgDAEgDAEQgDAFgCAFQgCAFgBAHQgBAHAAAHQAAAHABAGQABAHACAGQACAGADAEQADAFADADQAGAGAHADQAIADAJAAQAIAAAPgEIAAg6IgdAAIAAARIAKAAIAAAbIgEABQgEAAgDgCQgEgCgDgEQgDgEgCgHQgCgHAAgJQAAgKACgIQACgHAEgFQADgEAEgDQAFgCAGAAQAIAAAFADIADgS").p("AB2gfQACAnAAAMIgAAAQgDgLgIgWIgQgrIgUAAIAABtIASAAIAAgYQAAgWgBgcIAAAAQAIAXADAJIARAqIAUAAIAAhtIgTAAIAAAY").p("AgVgXQAAgIgDgGQgDgHgFgEQgFgFgIgCQgHgCgKAAQgNAAgKACIAABsIAVAAIAAgpIAEAAQAIAAAHgDQAIgDAFgFQAFgFADgGQADgGAAgJ").p("Ag4gmQAEAAADABQADABACACQADAFAAAIQAAAEgBAEQgBADgCADQgCADgDABQgDACgEAAIgDgBIAAgiIAFgA").p("AAMg3IAABtIAVAAIAAhtIgVAA").p("Ah9gvQgFgFgIgCQgHgCgKAAQgNAAgKACIAABsIAVAAIAAgpIAEAAQAIAAAGgDQAIgDAEgFQAFgFADgGQADgGAAgJQAAgIgDgGQgDgHgFgE").p("AiMghQAEAFAAAIQAAAEgBAEQgBADgCADQgCADgDABQgDACgEAAIgEgBIAAgiIAFgAQAEAAADABQADABABAC").p("AjdgtQgDgDgDgDQgEgCgEgCQgFgBgFAAQgFAAgEABQgEABgDADQgDACgDADIgFAHQgFAIgDAKQgCAKAAALQAAAMACAKQACAKAEAIIAFAHQADADADADQADACAEABQAEACAEAAQAIAAAGgDQAHgEAFgGIAEgIIADgKQACgIABgTQAAgKgBgJQgCgKgEgHIgFgH").p("AjugjQADADACAFQABAFAAAHIABANQgBAVgBAHQgCAGgDADQgDADgDAAQgEAAgDgDQgDgDgBgFQgCgEgBgHQgBgHAAgJQAAgJABgHQABgHACgFQABgFADgDQADgDADAAQADAAADAD").p("Ak8gvQgFgFgIgCQgHgCgKAAQgNAAgKACIAABsIAVAAIAAgpIAEAAQAIAAAHgDQAIgDAFgFQAFgFADgGQADgGAAgJQAAgIgDgGQgDgHgFgE").p("AlJgOQgBADgCADQgCADgDABQgDACgEAAIgDgBIAAgiIAFgAQAEAAADABQADABACACQADAFAAAIQAAAEgBAE").p("AnCgkIAAgTIgvAAIAABtIAxAAIAAgSIgcAAIAAgeIAZAAIAAgRIgZAAIAAgZIAaAA").p("AoSAkIgcAAIAAhbIgVAAIAABtIAxAAIAAgS").p("ApxgvQgFgEgIgCQgGgCgIAAQgSABgHABIAABrQAIACALAAQAJAAAOgDQAEgCAEgCQADgCADgDQAEgEADgFQACgGAAgHQAAgEgBgEQgBgEgDgDQgDgDgEgDQgEgDgFgBIAAgBQAEgCADgDQADgDACgDQAEgHAAgIQAAgGgCgFQgDgFgEgE").p("AqJgnQAGAAADAEQADAEAAAGQAAAHgEAFQgDAEgGAAIgFAAIAAgdQACgAAEAA").p("AqLAGQAHAAAEAEQADACABADQABADAAAEQAAAEgBAEQgBADgDACQgEAEgHAAIgFgAIAAghIAFAA").p("Argg2QgGgCgJAAQgSABgGABIAABrQAIACALAAQAJAAAOgDQAEgCAEgCQADgCADgDQADgEADgFQACgGAAgHQAAgEgBgEQgBgEgDgDQgDgDgDgDQgEgDgFgBIAAgBQAEgCADgDQADgDACgDQAEgHAAgIQAAgGgCgFQgDgFgEgEQgFgEgIgC").p("AreAeQgBADgDACQgEAEgHAAIgFgAIAAghIAFAAQAHAAAEAEQADACABADQABADAAAEQAAAEgBAE").p("ArigjQADAEAAAGQAAAHgEAFQgEAEgGAAIgFAAIAAgdQACgAADAAQAHAAADAE").p("AtCg3IgABRQgBAEgBADQgDAEgFAAQgFAAgDgEQgCgDgAgEQgBgEAAgGIAAhHIgVAAIAABEQAAALACAIQACAIADAGQAEAGAGADQAGADAJAAQAIAAAGgDQAGgDAEgGQAEgFACgIQACgIAAgKIAAhDIgVAA").p("AuTgnQgDgFgEgEQgFgEgIgCQgGgCgIAAQgSABgHABIAABrQAJACALAAQAJAAANgDQAEgCADgCQADgCADgDQAEgEADgFQACgGAAgHQAAgEgCgEQgBgEgDgDQgDgDgEgDQgEgDgFgBIAAgBQAEgCADgDQADgDACgDQAEgHAAgIQAAgGgCgF").p("AumgZQAAAHgEAFQgDAEgGAAIgEAAIAAgdQACgAAEAAQAGAAADAEQADAEAAAG").p("AuoAjQgEAEgHAAIgEgAIAAghIAEAAQAHAAAFAEQADACABADQACADAAAEQAAAEgCAEQgBADgDAC").p("Aw0AdIAFAZIAUAAIgVhtIgZAAIgYBtIAUAAIAFgZIAUAA").p("Aw2ANIgPAAIAIgwIAAAAIAIAw").f();
	this.shape.setTransform(114.1,8.6);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(2.1,3,224.1,11.2);

(lib.bubbleUp_blue = function() {
	this.initialize();

	// top
	this.shape = new Shape();
	this.shape.graphics.lf(["#1a3957","#174771","#266281","#387d99","#7ba8b5","#7ba8b5","#47889f","#28607f","#174972","#193957"],[0,0.098,0.2,0.298,0.408,0.6,0.698,0.8,0.898,1],-97.7,-19.8,103.5,2.2).p("ASggVQAbAbAAAmQAAAmgbAbQgbAbgmAAQgVAAgOAPQgOAOAAAVQAAAUAOAPQAOAPAVAAQBPAAA4g4QA4g4AAhPQAAhOg4g4Qg4g4hPAAQg4AAguAeQgGgNgMgIQgMgIgPAAQgUAAgPAPQgOAOAAAVIAACOQAAAmgbAbQgbAbgmAAQgmAAgbgbQgbgbAAgmIAAk/IArApQAcAcAdgdQAdgdgdgcIh6h0QgNgLgQgBQgRAAgMAMIh1BzQgcAcAdAdQAdAdAcgcIAngmIAAE9QAABPA4A4QA4A4BOAAQA0AAAugbIAACeQAAAUAOAPQAPAPAUAAQAVAAAOgPQAPgPAAgUIAAlEQAAgmAbgbQAbgbAmAAQAmAAAbAb").lf(["#1e405f","#184672","#226591","#387d99","#8ec1ce","#8ec1ce","#47889f","#397ea2","#174972","#193957"],[0,0.098,0.2,0.298,0.408,0.6,0.698,0.8,0.898,1],-99.6,-4.5,101.7,17.6).p("AEMhaQg4A4AABPQAAAxAXArIgDAAQgmAAgbgbQgbgbAAgmIAAjZQAAgVgOgOQgOgOgVAAQgVAAgOAOQgOAOAAAVIAACpQgQg+gzgoQg0gphCAAQgUAAgPAPQgPAPAAAUQAAAUAPAPQAPAOAUAAQAmAAAbAbQAbAbAAAmQAAAmgbAbQgbAbgmAAQgmAAgbgbQgbgbAAgmIAAjZQAAgUgPgPQgPgOgUAAQgUAAgPAOQgPAOAAAVIAABTQgbgbgigPQgkgPgnAAQgVAAgOAPQgPAPAAAUQAAAUAPAPQAOAOAVAAQAmAAAbAbQAbAbAAAmQAAAmgbAbQgbAbgmAAQgmAAgagbQgbgbAAgmIAAjZQAAgUgPgPQgPgOgUAAQgUAAgPAOQgPAOAAAVIAABFIgAAFIAACOQAAAmgbAbQgbAbgmAAQgmAAgagbQgbgbAAgmIAAiOQAAgUgPgPQgPgOgUAAQgUAAgPAOQgPAPAAAUIAABFQgWg1gwggQgwghg7AAQgUAAgPAPQgPAPAAAUQAAAUAPAPQAOAOAVAAQAmAAAbAbQAbAbAAAmQAAAmgbAbQgbAbgmAAQgmAAgagbQgbgbAAgmIAAjZQAAgVgPgOQgPgOgUAAQgUAAgOAOQgPAOAAAVIAADZQAABPA4A4QA4A4BPAAQBBAAAzgoQAygnARg8QASA8AyAnQAzAoBAAAQAqAAAmgRQAjgRAbgdQAbAdAkARQAmARApAAQAzAAAsgZQArgZAZgrQAZArArAZQAsAZAzAAQBGAAA1gtQA1gtAMhEQAMBEA1AtQA1AtBGAAIE6AAQAUAAAPgPQAOgPAAgUQAAgUgOgPQgPgPgUAAIiQAAQgmAAgbgbQgbgbAAgmQAAgmAbgbQAbgbAmAAQAYAAAVALQAUAMANATIhHAAQgUAAgPAPQgOAOAAAVQAAAUAOAPQAPAOAUAAICHAAQAUAAAPgOQAOgPAAgUQAAhPg4g4Qg4g4hPAAQhOAAg4A4").f();
	this.shape.setTransform(136.1,46.9);

	// stroke
	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#3987a1","#f7fbfc","#43a0b6"],[0.18,0.565,1],-135.8,0,135.9,0).p("ARfjEQgwAAgrASQgZgQgeAAQgpAAgdAdQgdAdAAApIAACOQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAjcQAKADALAAQAcAAAYgQQAYgRAKgaQAKgZgFgaQgGgagUgTIh6h0QgbgaglAAQgmAAgaAaIh1B0QgTATgGAaQgFAaAKAZQALAaAXAQQAXAQAcAAQAJAAAIgCIAABFQgIgKgJgJQhHhHhjAAQhEAAg6AkQg4AjgfA6IAAhpQAAgpgdgdQgdgdgpAAQgpAAgdAdQgdAdAAApIAAASQg9gqhKAAQgXAAgUAKQgFgkgcgYQgcgZgmAAQgnAAgdAbQgcAagDAnQgqgQgtAAQgXAAgUAKQgFgkgcgYQgcgZglAAQgpAAgdAdQgdAdAAApIgADZQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAiOQAAgpgdgdQgdgdgpAAQgaAAgXANQgWANgNAWIgHgEQg8gqhLAAQgXAAgUAKQgFgkgcgYQgcgZgmAAQgpAAgdAdQgdAdAAApIAADZQAABjBHBHQBGBGBjAAQBSAABAgyQAVgPARgUQASAUATAPQBCAyBQAAQBOAAA/gvQBAAvBOAAQA/AAA5ghQAYgOATgSQASARAaAPQA4AhA/AAQBYAABDg5QASgPAPgTQANASAUAQQAhAcAoAPQAoAPArAAIE6AAQApAAAdgdQAZgZADghQAHAIAIAIQBGBHBjAAQAWAAAagFIAABWQAAApAdAdQAdAdApAAQApAAAdgdQAdgdAAgpIAAhdQATAJAXAAQBjAABGhGQBHhGAAhjQAAhkhHhGQhGhGhjAA").p("ARfABQASAAANANQANANAAASQAAASgNANQgNANgSAAQgWAAgVAJIAAg0QAAgSANgNQANgNASAA").p("ALflCQgJABgGADQgOAGgIANQgIANAAAPQgAgOgIgMQgIgNgOgFQgJgEgHgAIAugtIAtAr").p("AQThLQgeATgRAfQgSAgAAAkIABFEIgBAAIAAieQAAgNgHgMQgHgLgMgHQgMgHgNAAQgMAAgMAHQAggTASgfQATghAAgmIAAiOQAKAVAVAFQAUAGATgL").p("AITgDQAAgMgGgLQAVAiAAAnIg/AAQANgBALgGQAMgHAHgLQAHgLgBgO").p("AGQC9IihAAQAbgBAOgYQAGgLABgNQAAgNgGgLQATAhAgAUQAgATAlAB").p("AhwASQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAg0QASAKAYAAQASAAANAN").p("AnUAFQASAAANANQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAg0QATAKAXAA").p("Ak6gpQAOgFAJgNQAIgMAAgPIAACFQAAAnAUAhQgPgXgbAAQgNAAgLAGQgLAGgHAKQAUgiAAgmQAAg5gogpQAKAKAPADQAOADAOgG").p("ABJAnQATgOAAgYIAAAuQAAANACAMQgEgUgSgM").p("AgAAwQAAgRgDgOQAGAQAOAJQgPAMgDATQACgMAAgN").p("AphhkIAACUQAAA1AjAoQgPgPgVAAQgUAAgPAPQAjgoAAg1IAAiOIABgF").p("AuIAGQAKgNAAgRIAABIQAAASAEAQQgFgNgMgJQgNgKgRAAQgQAAgNAKQgMAJgFAOQAEgRAAgSQAAgdgKgYQAHAPAPAIQAQAIARgEQASgEAMgO").p("AxBASQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAg0QATAKAXAAQASAAANAN").f();
	this.shape_1.setTransform(135.9,46.5);

	// shadow
	this.shape_2 = new Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").p("ARfjEQgxAAgrASQgYgQgeAAQgpAAgdAdQgdAdAAApIAACOQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAjcQAKADAKAAQAcAAAYgRQAYgRALgaQAKgZgGgaQgGgagUgTIh6h0QgbgagkAAQgmAAgaAaIh1B0QgTATgGAaQgGAaALAZQALAaAXAQQAYAQAcAAQAJAAAIgCIAABEQgIgJgJgJQhGhHhkAAQhEAAg6AkQg5AjgfA6IAAhpQAAgpgdgdQgdgdgpAAQgpAAgdAdQgdAdAAApIAAASQg9gqhKAAQgXAAgUAKQgFgkgcgYQgcgZgmAAQgnAAgcAbQgdAagDAmQgqgQgtAAQgXAAgUAKQgFgkgcgYQgcgZglAAQgpAAgdAdQgdAdAAApIgADZQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAiOQAAgpgdgdQgdgdgpAAQgaAAgXANQgWANgOAVIgHgEQg8gqhLAAQgXAAgUAKQgFgkgcgYQgcgZgmAAQgpAAgdAdQgdAdAAApIAADZQAABkBHBGQBGBGBjAAQBSAABBgyQAUgPARgUQASAUAUAPQBBAyBQAAQBPAAA/gvQA/AvBOAAQBAAAA4ghQAYgOAUgSQASARAaAPQA5AhA/AAQBYAABDg5QASgPAQgTQANASAUAQQAhAcAoAPQAoAPArAAIE6AAQApAAAdgdQAZgZADghQAHAIAIAIQBGBHBjAAQAWAAAagFIAABWQAAApAdAdQAdAdApAAQApAAAdgdQAdgdAAgpIAAhdQATAJAYAAQBjAABGhGQBHhGAAhjQAAhkhHhGQhGhGhjAA").p("ARfBWQgWAAgUAJIAAg0QAAgSANgNQANgNASAAQASAAANANQANANAAASQAAASgNANQgNANgSAA").p("ALQk+QgOAGgIANQgIANAAAPQgBgOgIgMQgIgNgOgFQgIgEgHgAIAtgtIAtArQgJABgFAD").p("APrhGQAUAGATgLQgeATgRAfQgSAgAAAkIAAFEIgAAAIAAieQAAgNgHgMQgHgLgMgHQgMgHgNAAQgMAAgMAHQAfgTASgfQATghAAgmIAAiOQAJAVAWAF").p("AINgaQAVAiAAAnIg/AAQANgBALgGQAMgHAHgLQAHgLgAgOQAAgMgGgL").p("AEZB0QASAhAgATQAgATAlABIihAAQAbgBAOgXQAHgLAAgNQAAgNgFgL").p("AkbhWIAACFQAAAnATAhQgPgXgaAAQgNAAgMAGQgLAGgHAKQAUgiAAgmQAAg5gogpQAKAKAPADQAOADANgGQAOgFAIgNQAIgMABgP").p("Ai4AwIAAg0QATAKAXAAQASAAANANQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgS").p("Am2ASQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAg0QASAKAXAAQASAAANAN").p("ABJAnQATgOAAgYIAAAuQAAANACAMQgEgUgSgM").p("AgCBIQACgMAAgNQAAgRgDgOQAGAQAOAJQgPAMgDAT").p("AphhkIAACUQAAA1AjAoQgPgPgVAAQgUAAgPAPQAjgoAAg1IAAiOIAAgF").p("AyIAwIAAg0QASAKAXAAQASAAANANQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgS").p("AvRAwQAAgdgKgYQAHAPAPAIQAPAIARgEQASgEALgOQALgNAAgRIAABIQAAASAEAQQgFgNgLgJQgNgKgRAAQgRAAgNAKQgMAJgFAOQAEgRAAgS").f();
	this.shape_2.setTransform(137.5,49.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,-0.1,273.3,96.6);

(lib.bubbleUp_brown = function() {
	this.initialize();

	// top
	this.shape = new Shape();
	this.shape.graphics.lf(["#b7aea8","#ddd6ce","#eae2da","#beb5af"],[0,0.173,0.898,1],-97.7,-19.8,103.5,2.2).p("ASggVQAbAbAAAmQAAAmgbAbQgbAbgmAAQgVAAgOAPQgOAPAAAUQAAAUAOAPQAOAPAVAAQBPAAA4g4QA4g4AAhPQAAhPg4g4Qg4g4hPAAQg4AAguAeQgGgNgMgIQgMgIgPAAQgUAAgPAOQgOAPAAAUIAACOQAAAmgbAbQgbAbgmAAQgmAAgbgbQgbgbAAgmIAAk/IArApQAcAcAdgdQAdgcgdgcIh6h1QgNgLgQgAQgRAAgMAMIh1B0QgcAcAdAdQAdAdAcgcIAngnIAAE9QAABPA4A4QA4A4BOAAQA0AAAugbIAACeQAAAUAOAPQAPAPAUAAQAVAAAOgPQAPgPAAgUIAAlEQAAgmAbgbQAbgbAmAAQAmAAAbAb").lf(["#b7aea8","#ddd6ce","#eae2da","#beb5af"],[0,0.173,0.898,1],-99.6,-4.5,101.7,17.6).p("AF3AJQgOAPAAAUQAAAVAOAOQAPAPAUAAICHAAQAUAAAPgPQAOgOAAgVQAAhPg4g3Qg4g4hPAAQhOAAg4A4Qg4A4AABPQAAAxAXArIgDAAQgmAAgbgbQgbgbAAgmIAAjZQAAgVgOgOQgOgOgVAAQgVAAgOAOQgOAOAAAVIAACpQgQg+gzgoQg0gphCAAQgUAAgPAOQgPAPAAAUQAAAUAPAPQAPAPAUAAQAmAAAbAbQAbAbAAAmQAAAmgbAbQgbAbgmAAQgmAAgbgbQgbgbAAgmIAAjZQAAgUgPgPQgPgOgUAAQgUAAgPAOQgPAOAAAVIAABTQgbgagigPQgkgPgnAAQgVAAgOAOQgPAPAAAUQAAAUAPAPQAOAPAVAAQAmAAAbAbQAbAbAAAmQAAAmgbAbQgbAbgmAAQgmAAgagbQgbgbAAgmIAAjZQAAgUgPgPQgPgOgUAAQgUAAgPAOQgPAOAAAVIAABFIgAAGIAACOQAAAmgbAbQgbAbgmAAQgmAAgagbQgbgbAAgmIAAiOQAAgUgPgPQgPgPgUAAQgUAAgPAPQgPAOAAAVIAABFQgWg1gwggQgwghg7AAQgUAAgPAOQgPAPAAAUQAAAUAPAPQAOAPAVAAQAmAAAbAbQAbAbAAAmQAAAmgbAbQgbAbgmAAQgmAAgagbQgbgbAAgmIAAjZQAAgVgPgOQgPgOgUAAQgUAAgOAOQgPAOAAAVIAADZQAABPA4A4QA4A4BPAAQBBAAAzgoQAygmARg9QASA9AyAmQAzAoBAAAQAqAAAmgRQAjgQAbgeQAbAeAkAQQAmARApAAQAzAAAsgZQArgZAZgrQAZArArAZQAsAZAzAAQBGAAA1gtQA1gtAMhEQAMBEA1AtQA1AtBGAAIE6AAQAUAAAPgPQAOgPAAgUQAAgUgOgPQgPgOgUAAIiQAAQgmAAgbgbQgbgbAAgmQAAgmAbgbQAbgbAmAAQAYAAAVALQAUALANAUIhHAAQgUAAgPAO").f();
	this.shape.setTransform(136.1,47);

	// stroke
	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#5e3d3d","#cabba5","#60403f"],[0,0.431,1],-135.8,0,135.9,0).p("ARfjEQgwAAgrASQgZgQgeAAQgpAAgdAdQgdAdAAApIAACOQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAjcQAKADALAAQAcAAAYgRQAYgQAKgaQAKgZgFgaQgGgagUgTIh6h0QgbgaglAAQgmAAgaAaIh1BzQgTATgGAaQgFAaAKAZQALAbAXAQQAXAQAcAAQAJAAAIgCIAABFQgIgKgJgJQhHhHhjAAQhEAAg6AkQg4AjgfA6IAAhpQAAgpgdgdQgdgdgpAAQgpAAgdAdQgdAdAAApIAAASQg9gphKAAQgXAAgUAKQgFglgcgYQgcgYgmAAQgnAAgdAaQgcAbgDAmQgqgQgtAAQgXAAgUAKQgFglgcgYQgcgYglAAQgpAAgdAdQgdAdAAApIgADZQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAiOQAAgpgdgdQgdgdgpAAQgaAAgXANQgWANgNAVIgHgEQg8gphLAAQgXAAgUAKQgFglgcgYQgcgYgmAAQgpAAgdAdQgdAdAAApIAADZQAABkBHBGQBGBGBjAAQBSAABAgyQAVgPARgUQASAUATAPQBCAyBQAAQBOAAA/guQBAAuBOAAQA/AAA5ghQAYgOATgSQASARAaAPQA4AhA/AAQBYAABDg5QASgPAPgTQANASAUARQAhAcAoAOQAoAPArAAIE6AAQApAAAdgdQAZgZADgiQAHAIAIAIQBGBGBjAAQAWAAAagFIAABWQAAApAdAdQAdAdApAAQApAAAdgdQAdgdAAgpIAAhdQATAKAXAAQBjAABGhGQBHhGAAhjQAAhkhHhGQhGhHhjAA").p("ARfACQASAAANANQANANAAASQAAASgNANQgNANgSAAQgWAAgVAJIAAg0QAAgSANgNQANgNASAA").p("ALQk9QgOAGgIANQgIANAAAPQgAgOgIgMQgIgNgOgGQgJgDgHgBIAugsIAtArQgJABgGAD").p("APkgYQgSAgAAAlIABFEIgBAAIAAieQAAgNgHgLQgHgMgMgHQgMgGgNAAQgMAAgMAGQAggTASgfQATghAAgmIAAiOQAKAUAVAGQAUAGATgLQgeATgRAf").p("AINgaQAVAiAAAnIg/AAQANgAALgGQAMgHAHgLQAHgLgBgOQAAgMgGgL").p("AEZB1QATAhAgAUQAgATAlABIihAAQAbgBAOgXQAGgLABgNQAAgNgGgL").p("AhwASQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAg0QASAJAYAAQASAAANAN").p("Am2ASQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAg0QATAJAXAAQASAAANAN").p("AkbhVIAACFQAAAoAUAhQgPgXgbAAQgNAAgLAGQgLAGgHAKQAUgiAAgnQAAg5gogpQAKAKAPADQAOADAOgFQAOgFAJgNQAIgMAAgP").p("ABfBIQgEgUgSgMQATgOAAgYIAAAuQAAANACAM").p("AgAAwQAAgQgDgOQAGAQAOAJQgPAMgDATQACgMAAgN").p("AphhkIAACUQAAA1AjAoQgPgPgVAAQgUAAgPAPQAjgoAAg1IAAiOIABgG").p("At9gYIAABIQAAASAEAQQgFgNgMgJQgNgKgRAAQgQAAgNAKQgMAJgFANQAEgRAAgSQAAgcgKgYQAHAPAPAIQAQAIARgEQASgEAMgOQAKgOAAgR").p("AxBASQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAg0QATAJAXAAQASAAANAN").f();
	this.shape_1.setTransform(135.9,46.8);

	// shadow
	this.shape_2 = new Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").p("ARfjEQgxAAgrASQgYgQgeAAQgpAAgdAdQgdAdAAApIAACOQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAjcQAKADAKAAQAcAAAYgRQAYgRALgaQAKgZgGgaQgGgagUgTIh6h0QgbgagkAAQgmAAgaAaIh1B0QgTATgGAaQgGAaALAZQALAaAXAQQAYAQAcAAQAJAAAIgCIAABEQgIgJgJgJQhGhHhkAAQhEAAg6AkQg5AjgfA6IAAhpQAAgpgdgdQgdgdgpAAQgpAAgdAdQgdAdAAApIAAASQg9gqhKAAQgXAAgUAKQgFgkgcgYQgcgZgmAAQgnAAgcAbQgdAagDAmQgqgQgtAAQgXAAgUAKQgFgkgcgYQgcgZglAAQgpAAgdAdQgdAdAAApIgADZQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAiOQAAgpgdgdQgdgdgpAAQgaAAgXANQgWANgOAVIgHgEQg8gqhLAAQgXAAgUAKQgFgkgcgYQgcgZgmAAQgpAAgdAdQgdAdAAApIAADZQAABkBHBGQBGBGBjAAQBSAABBgyQAUgPARgUQASAUAUAPQBBAyBQAAQBPAAA/gvQA/AvBOAAQBAAAA4ghQAYgOAUgSQASARAaAPQA5AhA/AAQBYAABDg5QASgPAQgTQANASAUAQQAhAcAoAPQAoAPArAAIE6AAQApAAAdgdQAZgZADghQAHAIAIAIQBGBHBjAAQAWAAAagFIAABWQAAApAdAdQAdAdApAAQApAAAdgdQAdgdAAgpIAAhdQATAJAYAAQBjAABGhGQBHhGAAhjQAAhkhHhGQhGhGhjAA").p("ARfBWQgWAAgUAJIAAg0QAAgSANgNQANgNASAAQASAAANANQANANAAASQAAASgNANQgNANgSAA").p("ALQk+QgOAGgIANQgIANAAAPQgBgOgIgMQgIgNgOgFQgIgEgHgAIAtgtIAtArQgJABgFAD").p("APrhGQAUAGATgLQgeATgRAfQgSAgAAAkIAAFEIgAAAIAAieQAAgNgHgMQgHgLgMgHQgMgHgNAAQgMAAgMAHQAfgTASgfQATghAAgmIAAiOQAJAVAWAF").p("AINgaQAVAiAAAnIg/AAQANgBALgGQAMgHAHgLQAHgLgAgOQAAgMgGgL").p("AFMCpQAgATAlABIihAAQAbgBAOgXQAHgLAAgNQAAgNgFgLQASAhAgAT").p("AkbhWIAACFQAAAnATAhQgPgXgaAAQgNAAgMAGQgLAGgHAKQAUgiAAgmQAAg5gogpQAKAKAPADQAOADANgGQAOgFAIgNQAIgMABgP").p("Ai4AwIAAg0QATAKAXAAQASAAANANQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgS").p("Am2ASQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgSIAAg0QASAKAXAAQASAAANAN").p("ABJAnQATgOAAgYIAAAuQAAANACAMQgEgUgSgM").p("AgCBIQACgMAAgNQAAgRgDgOQAGAQAOAJQgPAMgDAT").p("AphhkIAACUQAAA1AjAoQgPgPgVAAQgUAAgPAPQAjgoAAg1IAAiOIAAgF").p("AvRAwQAAgdgKgYQAHAPAPAIQAPAIARgEQASgEALgOQALgNAAgRIAABIQAAASAEAQQgFgNgLgJQgNgKgRAAQgRAAgNAKQgMAJgFAOQAEgRAAgS").p("AyIAwIAAg0QASAKAXAAQASAAANANQANANAAASQAAASgNANQgNANgSAAQgSAAgMgNQgNgNAAgS").f();
	this.shape_2.setTransform(137.5,49.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0.2,273.3,96.2);