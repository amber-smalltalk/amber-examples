define("amber_examples_processing/Processing-Examples", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Processing-Examples');
smalltalk.packages["Processing-Examples"].transport = {"type":"amd","amdNamespace":"amber_examples_processing"};

smalltalk.addClass('ProcessingClock', globals.Object, ['processing', 'centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
var drawBlock;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$3,$1,$6,$8,$7,$5,$9;
drawBlock=(function(){
var now,hoursPosition,minutesPosition,secondsPosition;
return smalltalk.withContext(function($ctx2) {
_st(self["@processing"])._background_((224));
now=_st($Date())._new();
now;
$2=_st(_st(now)._hours()).__backslash_backslash((12));
$4=_st(now)._minutes();
$ctx2.sendIdx["minutes"]=1;
$3=_st($4).__slash((60));
$ctx2.sendIdx["/"]=2;
$1=_st($2).__plus($3);
$ctx2.sendIdx["+"]=1;
hoursPosition=_st($1).__slash((12));
$ctx2.sendIdx["/"]=1;
hoursPosition;
self._drawArm_lengthScale_weight_(hoursPosition,(0.5),(5));
$ctx2.sendIdx["drawArm:lengthScale:weight:"]=1;
$6=_st(now)._minutes();
$8=_st(now)._seconds();
$ctx2.sendIdx["seconds"]=1;
$7=_st($8).__slash((60));
$ctx2.sendIdx["/"]=4;
$5=_st($6).__plus($7);
minutesPosition=_st($5).__slash((60));
$ctx2.sendIdx["/"]=3;
minutesPosition;
self._drawArm_lengthScale_weight_(minutesPosition,(0.8),(3));
$ctx2.sendIdx["drawArm:lengthScale:weight:"]=2;
secondsPosition=_st(_st(now)._seconds()).__slash((60));
secondsPosition;
return self._drawArm_lengthScale_weight_(secondsPosition,(0.9),(1));
}, function($ctx2) {$ctx2.fillBlock({now:now,hoursPosition:hoursPosition,minutesPosition:minutesPosition,secondsPosition:secondsPosition},$ctx1,1)})});
$9=drawBlock;
return $9;
}, function($ctx1) {$ctx1.fill(self,"draw",{drawBlock:drawBlock},globals.ProcessingClock)})},
args: [],
source: "draw\x0a| drawBlock |\x0a\x0adrawBlock := [\x0a  | now hoursPosition minutesPosition secondsPosition |  \x0a  processing background: 224.\x0a  \x0a  now := Date new.\x0a  \x0a  \x22Moving hours arm by small increments\x22\x0a   hoursPosition := ((now hours \x5c\x5c 12) + (now minutes / 60 )) /12 .\x0a   self drawArm: hoursPosition lengthScale: 0.5 weight: 5.\x0a   \x0a   \x22Moving minutes arm by small increments\x22\x0a    minutesPosition := (now minutes + (now seconds / 60))/60.\x0a    self drawArm: minutesPosition lengthScale: 0.80 weight: 3.\x0a\x0a    \x22Moving hour arm by second increments\x22\x0a    secondsPosition := now seconds / 60.\x0a    self drawArm: secondsPosition lengthScale: 0.90 weight: 1.\x0a  ].\x0a\x0a^drawBlock",
messageSends: ["background:", "new", "/", "+", "\x5c\x5c", "hours", "minutes", "drawArm:lengthScale:weight:", "seconds"],
referencedClasses: ["Date"]
}),
globals.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "drawArm:lengthScale:weight:",
protocol: 'not yet classified',
fn: function (aPosition,aLengthScale,aWeight){
var self=this;
var myDX,myDY;
function $Math(){return globals.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
var $1,$6,$7,$5,$4,$3,$2,$8,$12,$11,$10,$9;
_st(self["@processing"])._strokeWeight_(aWeight);
$1=self["@centerX"];
$6=_st(aPosition).__star((2));
$ctx1.sendIdx["*"]=4;
$7=_st($Math())._PI();
$ctx1.sendIdx["PI"]=1;
$5=_st($6).__star($7);
$ctx1.sendIdx["*"]=3;
$4=_st($Math())._sin_($5);
$3=_st($4).__star(aLengthScale);
$ctx1.sendIdx["*"]=2;
$2=_st($3).__star(self["@maxArmLength"]);
$ctx1.sendIdx["*"]=1;
myDX=_st($1).__plus($2);
$8=self["@centerY"];
$12=_st(_st(aPosition).__star((2))).__star(_st($Math())._PI());
$ctx1.sendIdx["*"]=7;
$11=_st($Math())._cos_($12);
$10=_st($11).__star(aLengthScale);
$ctx1.sendIdx["*"]=6;
$9=_st($10).__star(self["@maxArmLength"]);
$ctx1.sendIdx["*"]=5;
myDY=_st($8).__minus($9);
_st(self["@processing"])._line_y_dX_dy_(self["@centerX"],self["@centerY"],myDX,myDY);
return self}, function($ctx1) {$ctx1.fill(self,"drawArm:lengthScale:weight:",{aPosition:aPosition,aLengthScale:aLengthScale,aWeight:aWeight,myDX:myDX,myDY:myDY},globals.ProcessingClock)})},
args: ["aPosition", "aLengthScale", "aWeight"],
source: "drawArm: aPosition lengthScale: aLengthScale weight: aWeight\x0a| myDX myDY |\x0aprocessing strokeWeight: aWeight.\x0amyDX := centerX \x0a\x09\x09\x09+ ((Math sin: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0amyDY := centerY \x0a\x09\x09\x09- ((Math cos: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a\x0aprocessing line: centerX y: centerY dX: myDX dy: myDY.",
messageSends: ["strokeWeight:", "+", "*", "sin:", "PI", "-", "cos:", "line:y:dX:dy:"],
referencedClasses: ["Math"]
}),
globals.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "firstProcessingInstance",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Processing.instances[0];
return self}, function($ctx1) {$ctx1.fill(self,"firstProcessingInstance",{},globals.ProcessingClock)})},
args: [],
source: "firstProcessingInstance\x0a\x0a\x09<return Processing.instances[0]>",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Math(){return globals.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
self["@processing"]=self._firstProcessingInstance();
self["@centerX"]=_st(_st(self["@processing"])._width()).__slash((2));
$ctx1.sendIdx["/"]=1;
self["@centerY"]=_st(_st(self["@processing"])._height()).__slash((2));
self["@maxArmLength"]=_st($Math())._min_or_(self["@centerX"],self["@centerY"]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ProcessingClock)})},
args: [],
source: "initialize\x0aprocessing := self firstProcessingInstance.\x0acenterX := processing width / 2.\x0acenterY := processing height / 2.\x0amaxArmLength := Math min: centerX or: centerY.",
messageSends: ["firstProcessingInstance", "/", "width", "height", "min:or:"],
referencedClasses: ["Math"]
}),
globals.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "processing",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@processing"];
return $1;
},
args: [],
source: "processing\x0a^processing",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingClock);


smalltalk.addMethod(
smalltalk.method({
selector: "init",
protocol: 'not yet classified',
fn: function (){
var self=this;
var clock,processing,block;
function $ProcessingClock(){return globals.ProcessingClock||(typeof ProcessingClock=="undefined"?nil:ProcessingClock)}
return smalltalk.withContext(function($ctx1) { 
clock=_st($ProcessingClock())._new();
processing=_st(clock)._processing();
block=_st(clock)._draw();
_st(processing)._at_put_("draw",block);
return self}, function($ctx1) {$ctx1.fill(self,"init",{clock:clock,processing:processing,block:block},globals.ProcessingClock.klass)})},
args: [],
source: "init\x0a| clock processing block |\x0aclock := ProcessingClock new .\x0aprocessing := clock processing.\x0ablock := clock draw.\x0aprocessing at: 'draw' put: block",
messageSends: ["new", "processing", "draw", "at:put:"],
referencedClasses: ["ProcessingClock"]
}),
globals.ProcessingClock.klass);

});
