(function(smalltalk,nil,_st){
smalltalk.addPackage('Processing-Examples');
smalltalk.addClass('ProcessingClock', smalltalk.Object, ['processing', 'centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
category: 'not yet classified',
fn: function (){
var self=this;
var drawBlock;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
drawBlock=(function(){
var now,hoursPosition,minutesPosition,secondsPosition;
return smalltalk.withContext(function($ctx2) {
_st(self["@processing"])._background_((224));
now=_st($Date())._new();
now;
hoursPosition=_st(_st(_st(_st(_st(now)._hours()).__backslash_backslash((12))).__plus(_st(now)._minutes())).__slash((60))).__slash((12));
hoursPosition;
self._drawArm_lengthScale_weight_(hoursPosition,(0.5),(5));
minutesPosition=_st(_st(_st(_st(now)._minutes()).__plus(_st(now)._seconds())).__slash((60))).__slash((60));
minutesPosition;
self._drawArm_lengthScale_weight_(minutesPosition,(0.8),(3));
secondsPosition=_st(_st(now)._seconds()).__slash((60));
secondsPosition;
return self._drawArm_lengthScale_weight_(secondsPosition,(0.9),(1));
}, function($ctx2) {$ctx2.fillBlock({now:now,hoursPosition:hoursPosition,minutesPosition:minutesPosition,secondsPosition:secondsPosition},$ctx1)})});
$1=drawBlock;
return $1;
}, function($ctx1) {$ctx1.fill(self,"draw",{drawBlock:drawBlock},smalltalk.ProcessingClock)})},
args: [],
source: "draw\x0a| drawBlock |\x0a\x0adrawBlock := [\x0a  | now hoursPosition minutesPosition secondsPosition |  \x0a  processing background: 224.\x0a  \x0a  now := Date new.\x0a  \x0a  \x22Moving hours arm by small increments\x22\x0a   hoursPosition := now hours \x5c\x5c 12 + now minutes / 60 / 12.\x0a   self drawArm: hoursPosition lengthScale: 0.5 weight: 5.\x0a   \x0a   \x22Moving minutes arm by small increments\x22\x0a    minutesPosition := now minutes + now seconds / 60 / 60.\x0a    self drawArm: minutesPosition lengthScale: 0.80 weight: 3.\x0a\x0a    \x22Moving hour arm by second increments\x22\x0a    secondsPosition := now seconds / 60.\x0a    self drawArm: secondsPosition lengthScale: 0.90 weight: 1.\x0a  ].\x0a\x0a^drawBlock",
messageSends: ["background:", "new", "/", "+", "minutes", "\x5c\x5c", "hours", "drawArm:lengthScale:weight:", "seconds"],
referencedClasses: ["Date"]
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "drawArm:lengthScale:weight:",
category: 'not yet classified',
fn: function (aPosition,aLengthScale,aWeight){
var self=this;
var myDX,myDY;
function $Math(){return smalltalk.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@processing"])._strokeWeight_(aWeight);
myDX=_st(self["@centerX"]).__plus(_st(_st(_st($Math())._sin_(_st(_st(aPosition).__star((2))).__star(_st($Math())._PI()))).__star(aLengthScale)).__star(self["@maxArmLength"]));
myDY=_st(self["@centerY"]).__minus(_st(_st(_st($Math())._cos_(_st(_st(aPosition).__star((2))).__star(_st($Math())._PI()))).__star(aLengthScale)).__star(self["@maxArmLength"]));
_st(self["@processing"])._line_y_dX_dy_(self["@centerX"],self["@centerY"],myDX,myDY);
return self}, function($ctx1) {$ctx1.fill(self,"drawArm:lengthScale:weight:",{aPosition:aPosition,aLengthScale:aLengthScale,aWeight:aWeight,myDX:myDX,myDY:myDY},smalltalk.ProcessingClock)})},
args: ["aPosition", "aLengthScale", "aWeight"],
source: "drawArm: aPosition lengthScale: aLengthScale weight: aWeight\x0a| myDX myDY |\x0aprocessing strokeWeight: aWeight.\x0amyDX := centerX \x0a\x09\x09\x09+ ((Math sin: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0amyDY := centerY \x0a\x09\x09\x09- ((Math cos: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a\x0aprocessing line: centerX y: centerY dX: myDX dy: myDY.",
messageSends: ["strokeWeight:", "+", "*", "sin:", "PI", "-", "cos:", "line:y:dX:dy:"],
referencedClasses: ["Math"]
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "firstProcessingInstance",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Processing.instances[0];
return self}, function($ctx1) {$ctx1.fill(self,"firstProcessingInstance",{},smalltalk.ProcessingClock)})},
args: [],
source: "firstProcessingInstance\x0a\x0a\x09<return Processing.instances[0]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $Math(){return smalltalk.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
self["@processing"]=self._firstProcessingInstance();
self["@centerX"]=_st(_st(self["@processing"])._width()).__slash((2));
self["@centerY"]=_st(_st(self["@processing"])._height()).__slash((2));
self["@maxArmLength"]=_st($Math())._min_or_(self["@centerX"],self["@centerY"]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ProcessingClock)})},
args: [],
source: "initialize\x0aprocessing := self firstProcessingInstance.\x0acenterX := processing width / 2.\x0acenterY := processing height / 2.\x0amaxArmLength := Math min: centerX or: centerY.",
messageSends: ["firstProcessingInstance", "/", "width", "height", "min:or:"],
referencedClasses: ["Math"]
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "processing",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@processing"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"processing",{},smalltalk.ProcessingClock)})},
args: [],
source: "processing\x0a^processing",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingClock);


smalltalk.addMethod(
smalltalk.method({
selector: "init",
category: 'not yet classified',
fn: function (){
var self=this;
var clock,processing,block;
function $ProcessingClock(){return smalltalk.ProcessingClock||(typeof ProcessingClock=="undefined"?nil:ProcessingClock)}
return smalltalk.withContext(function($ctx1) { 
clock=_st($ProcessingClock())._new();
processing=_st(clock)._processing();
block=_st(clock)._draw();
_st(processing)._at_put_("draw",block);
return self}, function($ctx1) {$ctx1.fill(self,"init",{clock:clock,processing:processing,block:block},smalltalk.ProcessingClock.klass)})},
args: [],
source: "init\x0a| clock processing block |\x0aclock := ProcessingClock new .\x0aprocessing := clock processing.\x0ablock := clock draw.\x0aprocessing at: 'draw' put: block",
messageSends: ["new", "processing", "draw", "at:put:"],
referencedClasses: ["ProcessingClock"]
}),
smalltalk.ProcessingClock.klass);


})(global_smalltalk,global_nil,global__st);
