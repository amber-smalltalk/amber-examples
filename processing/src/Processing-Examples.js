define("amber-processingclock/Processing-Examples", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Processing-Examples');
$core.packages["Processing-Examples"].transport = {"type":"amd","amdNamespace":"amber-processingclock"};

$core.addClass('ProcessingClock', $globals.Object, ['processing', 'centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
$core.addMethod(
$core.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
var drawBlock;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$6,$8,$7,$5,$9;
drawBlock=(function(){
var now,hoursPosition,minutesPosition,secondsPosition;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@processing"])._background_((224));
now=$recv($Date())._new();
now;
$2=$recv($recv(now)._hours()).__backslash_backslash((12));
$4=$recv(now)._minutes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["minutes"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__slash((60));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["/"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__plus($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
hoursPosition=$recv($1).__slash((12));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["/"]=1;
//>>excludeEnd("ctx");
hoursPosition;
self._drawArm_lengthScale_weight_(hoursPosition,(0.5),(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["drawArm:lengthScale:weight:"]=1;
//>>excludeEnd("ctx");
$6=$recv(now)._minutes();
$8=$recv(now)._seconds();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["seconds"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__slash((60));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["/"]=4;
//>>excludeEnd("ctx");
$5=$recv($6).__plus($7);
minutesPosition=$recv($5).__slash((60));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["/"]=3;
//>>excludeEnd("ctx");
minutesPosition;
self._drawArm_lengthScale_weight_(minutesPosition,(0.8),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["drawArm:lengthScale:weight:"]=2;
//>>excludeEnd("ctx");
secondsPosition=$recv($recv(now)._seconds()).__slash((60));
secondsPosition;
return self._drawArm_lengthScale_weight_(secondsPosition,(0.9),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({now:now,hoursPosition:hoursPosition,minutesPosition:minutesPosition,secondsPosition:secondsPosition},$ctx1,1)});
//>>excludeEnd("ctx");
});
$9=drawBlock;
return $9;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{drawBlock:drawBlock},$globals.ProcessingClock)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a| drawBlock |\x0a\x0adrawBlock := [\x0a  | now hoursPosition minutesPosition secondsPosition |  \x0a  processing background: 224.\x0a  \x0a  now := Date new.\x0a  \x0a  \x22Moving hours arm by small increments\x22\x0a   hoursPosition := ((now hours \x5c\x5c 12) + (now minutes / 60 )) /12 .\x0a   self drawArm: hoursPosition lengthScale: 0.5 weight: 5.\x0a   \x0a   \x22Moving minutes arm by small increments\x22\x0a    minutesPosition := (now minutes + (now seconds / 60))/60.\x0a    self drawArm: minutesPosition lengthScale: 0.80 weight: 3.\x0a\x0a    \x22Moving hour arm by second increments\x22\x0a    secondsPosition := now seconds / 60.\x0a    self drawArm: secondsPosition lengthScale: 0.90 weight: 1.\x0a  ].\x0a\x0a^drawBlock",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["background:", "new", "/", "+", "\x5c\x5c", "hours", "minutes", "drawArm:lengthScale:weight:", "seconds"]
}),
$globals.ProcessingClock);

$core.addMethod(
$core.method({
selector: "drawArm:lengthScale:weight:",
protocol: 'not yet classified',
fn: function (aPosition,aLengthScale,aWeight){
var self=this;
var myDX,myDY;
function $Math(){return $globals.Math||(typeof Math=="undefined"?nil:Math)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$6,$7,$5,$4,$3,$2,$8,$12,$11,$10,$9;
$recv(self["@processing"])._strokeWeight_(aWeight);
$1=self["@centerX"];
$6=$recv(aPosition).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
$7=$recv($Math())._PI();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["PI"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__star($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$4=$recv($Math())._sin_($5);
$3=$recv($4).__star(aLengthScale);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__star(self["@maxArmLength"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
myDX=$recv($1).__plus($2);
$8=self["@centerY"];
$12=$recv($recv(aPosition).__star((2))).__star($recv($Math())._PI());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=7;
//>>excludeEnd("ctx");
$11=$recv($Math())._cos_($12);
$10=$recv($11).__star(aLengthScale);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
$9=$recv($10).__star(self["@maxArmLength"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
myDY=$recv($8).__minus($9);
$recv(self["@processing"])._line_y_dX_dy_(self["@centerX"],self["@centerY"],myDX,myDY);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawArm:lengthScale:weight:",{aPosition:aPosition,aLengthScale:aLengthScale,aWeight:aWeight,myDX:myDX,myDY:myDY},$globals.ProcessingClock)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPosition", "aLengthScale", "aWeight"],
source: "drawArm: aPosition lengthScale: aLengthScale weight: aWeight\x0a| myDX myDY |\x0aprocessing strokeWeight: aWeight.\x0amyDX := centerX \x0a\x09\x09\x09+ ((Math sin: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0amyDY := centerY \x0a\x09\x09\x09- ((Math cos: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a\x0aprocessing line: centerX y: centerY dX: myDX dy: myDY.",
referencedClasses: ["Math"],
//>>excludeEnd("ide");
messageSends: ["strokeWeight:", "+", "*", "sin:", "PI", "-", "cos:", "line:y:dX:dy:"]
}),
$globals.ProcessingClock);

$core.addMethod(
$core.method({
selector: "firstProcessingInstance",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Processing.instances[0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstProcessingInstance",{},$globals.ProcessingClock)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstProcessingInstance\x0a\x0a\x09<return Processing.instances[0]>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingClock);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Math(){return $globals.Math||(typeof Math=="undefined"?nil:Math)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@processing"]=self._firstProcessingInstance();
self["@centerX"]=$recv($recv(self["@processing"])._width()).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
self["@centerY"]=$recv($recv(self["@processing"])._height()).__slash((2));
self["@maxArmLength"]=$recv($Math())._min_or_(self["@centerX"],self["@centerY"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ProcessingClock)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0aprocessing := self firstProcessingInstance.\x0acenterX := processing width / 2.\x0acenterY := processing height / 2.\x0amaxArmLength := Math min: centerX or: centerY.",
referencedClasses: ["Math"],
//>>excludeEnd("ide");
messageSends: ["firstProcessingInstance", "/", "width", "height", "min:or:"]
}),
$globals.ProcessingClock);

$core.addMethod(
$core.method({
selector: "processing",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@processing"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "processing\x0a^processing",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingClock);


$core.addMethod(
$core.method({
selector: "init",
protocol: 'not yet classified',
fn: function (){
var self=this;
var clock,processing,block;
function $ProcessingClock(){return $globals.ProcessingClock||(typeof ProcessingClock=="undefined"?nil:ProcessingClock)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
clock=$recv($ProcessingClock())._new();
processing=$recv(clock)._processing();
block=$recv(clock)._draw();
$recv(processing)._at_put_("draw",block);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"init",{clock:clock,processing:processing,block:block},$globals.ProcessingClock.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "init\x0a| clock processing block |\x0aclock := ProcessingClock new .\x0aprocessing := clock processing.\x0ablock := clock draw.\x0aprocessing at: 'draw' put: block",
referencedClasses: ["ProcessingClock"],
//>>excludeEnd("ide");
messageSends: ["new", "processing", "draw", "at:put:"]
}),
$globals.ProcessingClock.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._init();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.ProcessingClock.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x0a     self init",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["init"]
}),
$globals.ProcessingClock.klass);

});
