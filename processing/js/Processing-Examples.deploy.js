smalltalk.addPackage('Processing-Examples');
smalltalk.addClass('ProcessingClock', smalltalk.Object, ['processing', 'centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "draw",
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
messageSends: ["background:", "new", "/", "+", "minutes", "\x5c\x5c", "hours", "drawArm:lengthScale:weight:", "seconds"]}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "drawArm:lengthScale:weight:",
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
messageSends: ["strokeWeight:", "+", "*", "sin:", "PI", "-", "cos:", "line:y:dX:dy:"]}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "firstProcessingInstance",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Processing.instances[0];
return self}, function($ctx1) {$ctx1.fill(self,"firstProcessingInstance",{},smalltalk.ProcessingClock)})},
messageSends: []}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Math(){return smalltalk.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
self["@processing"]=self._firstProcessingInstance();
self["@centerX"]=_st(_st(self["@processing"])._width()).__slash((2));
self["@centerY"]=_st(_st(self["@processing"])._height()).__slash((2));
self["@maxArmLength"]=_st($Math())._min_or_(self["@centerX"],self["@centerY"]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ProcessingClock)})},
messageSends: ["firstProcessingInstance", "/", "width", "height", "min:or:"]}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "processing",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@processing"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"processing",{},smalltalk.ProcessingClock)})},
messageSends: []}),
smalltalk.ProcessingClock);


smalltalk.addMethod(
smalltalk.method({
selector: "init",
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
messageSends: ["new", "processing", "draw", "at:put:"]}),
smalltalk.ProcessingClock.klass);


