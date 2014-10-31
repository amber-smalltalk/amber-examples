define("amber_examples_presentation/Presentation", ["amber/boot", "amber_core/Web"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Presentation');
smalltalk.packages["Presentation"].transport = {"type":"amd","amdNamespace":"amber_examples_presentation"};

smalltalk.addClass('Presentation', globals.Widget, ['currentSlide', 'slides'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
protocol: 'accessing',
fn: function (){
var self=this;
return "John Smith";
},
args: [],
source: "author\x0a\x09^'John Smith'",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentSlide",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentSlide"];
return $1;
},
args: [],
source: "currentSlide\x0a\x09^currentSlide",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentSlide:",
protocol: 'accessing',
fn: function (aSlide){
var self=this;
self["@currentSlide"]=aSlide;
return self},
args: ["aSlide"],
source: "currentSlide: aSlide\x0a\x09currentSlide := aSlide",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentSlideIndex",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._slides())._indexOf_ifAbsent_(self._currentSlide(),(function(){
return (1);
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentSlideIndex",{},globals.Presentation)})},
args: [],
source: "currentSlideIndex\x0a\x09^ self slides indexOf: self currentSlide ifAbsent: [1]",
messageSends: ["indexOf:ifAbsent:", "slides", "currentSlide"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
protocol: 'accessing',
fn: function (){
var self=this;
return "A presentation written in Jtalk";
},
args: [],
source: "description\x0a\x09^'A presentation written in Jtalk'",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
protocol: 'accessing',
fn: function (){
var self=this;
return "john@smith.com";
},
args: [],
source: "email\x0a\x09^'john@smith.com'",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "initSlides",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@slides"]=_st(self._slideClasses())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._on_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initSlides",{},globals.Presentation)})},
args: [],
source: "initSlides\x0a\x09slides := self slideClasses collect: [:each | each on: self]",
messageSends: ["collect:", "slideClasses", "on:"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAt:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
var next;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
next=_st(self._slides())._at_ifAbsent_(anInteger,(function(){
return nil;
}));
$1=next;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self["@currentSlide"]=next;
self["@currentSlide"];
_st(next)._show();
};
return self}, function($ctx1) {$ctx1.fill(self,"moveAt:",{anInteger:anInteger,next:next},globals.Presentation)})},
args: ["anInteger"],
source: "moveAt: anInteger\x0a\x09| next |\x0a\x09next := self slides \x0a\x09\x09\x09at: anInteger\x0a\x09\x09\x09ifAbsent: [nil].\x0a\x09next ifNotNil: [currentSlide := next. next show]",
messageSends: ["at:ifAbsent:", "slides", "ifNotNil:", "show"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "nextSlide",
protocol: 'actions',
fn: function (){
var self=this;
var next;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self._currentSlide();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
next=_st(self._slides())._at_ifAbsent_(_st(self._currentSlideIndex()).__plus((1)),(function(){
return nil;
}));
next;
$2=next;
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
self["@currentSlide"]=next;
self["@currentSlide"];
_st(next)._show();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"nextSlide",{next:next},globals.Presentation)})},
args: [],
source: "nextSlide\x0a\x09| next |\x0a\x09self currentSlide ifNotNil: [\x0a\x09\x09next := self slides \x0a\x09\x09\x09at: (self currentSlideIndex) + 1\x0a\x09\x09\x09ifAbsent: [nil].\x0a\x09\x09next ifNotNil: [currentSlide := next. next show]]",
messageSends: ["ifNotNil:", "currentSlide", "at:ifAbsent:", "slides", "+", "currentSlideIndex", "show"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "previousSlide",
protocol: 'actions',
fn: function (){
var self=this;
var next;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self._currentSlide();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
next=_st(self._slides())._at_ifAbsent_(_st(self._currentSlideIndex()).__minus((1)),(function(){
return nil;
}));
next;
$2=next;
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
self["@currentSlide"]=next;
self["@currentSlide"];
_st(next)._show();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"previousSlide",{next:next},globals.Presentation)})},
args: [],
source: "previousSlide\x0a\x09| next |\x0a\x09self currentSlide ifNotNil: [\x0a\x09\x09next := self slides \x0a\x09\x09\x09at: (self currentSlideIndex) - 1\x0a\x09\x09\x09ifAbsent: [nil].\x0a\x09\x09next ifNotNil: [currentSlide := next. next show]]",
messageSends: ["ifNotNil:", "currentSlide", "at:ifAbsent:", "slides", "-", "currentSlideIndex", "show"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._style();
$ctx1.sendIdx["style"]=1;
_st($1)._type_("text/css");
$2=_st($1)._with_(self._style());
$ctx1.sendIdx["with:"]=1;
$3=_st(html)._div();
_st($3)._id_("slides");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderSlidesOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Presentation)})},
args: ["html"],
source: "renderOn: html\x0a\x09html style\x0a\x09\x09type: 'text/css';\x0a\x09\x09with: self style.\x0a\x09html div \x0a\x09\x09id: 'slides';\x0a\x09\x09with: [self renderSlidesOn: html]",
messageSends: ["type:", "style", "with:", "id:", "div", "renderSlidesOn:"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlidesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self._slides();
$ctx1.sendIdx["slides"]=1;
_st($1)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$2=self["@currentSlide"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentSlide"]=_st(self._slides())._first();
self["@currentSlide"];
} else {
$2;
};
self._showCurrentSlide();
return self}, function($ctx1) {$ctx1.fill(self,"renderSlidesOn:",{html:html},globals.Presentation)})},
args: ["html"],
source: "renderSlidesOn: html\x0a\x09self slides do: [:each | \x0a\x09\x09each renderOn: html].\x0a\x09currentSlide ifNil: [currentSlide := self slides first].\x0a\x09self showCurrentSlide",
messageSends: ["do:", "slides", "renderOn:", "ifNil:", "first", "showCurrentSlide"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "showCurrentSlide",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$6,$5,$4,$3,$7,$8,$receiver;
$1=self._currentSlide();
$ctx1.sendIdx["currentSlide"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=".slide"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($2)._hide();
$6=self._currentSlide();
$ctx1.sendIdx["currentSlide"]=2;
$5=_st($6)._id();
$ctx1.sendIdx["id"]=1;
$4="#".__comma($5);
$ctx1.sendIdx[","]=1;
$3=_st($4)._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($3)._show();
$7="title"._asJQuery();
$8=_st(_st(self._title()).__comma(" - ")).__comma(_st(self._currentSlide())._id());
$ctx1.sendIdx[","]=2;
_st($7)._text_($8);
};
return self}, function($ctx1) {$ctx1.fill(self,"showCurrentSlide",{},globals.Presentation)})},
args: [],
source: "showCurrentSlide\x0a\x09self currentSlide ifNotNil: [\x0a\x09\x09'.slide' asJQuery hide.\x0a\x09\x09('#', self currentSlide id) asJQuery show.\x0a          \x09'title' asJQuery text: self title, ' - ', self currentSlide id.\x0a        ]",
messageSends: ["ifNotNil:", "currentSlide", "hide", "asJQuery", "show", ",", "id", "text:", "title"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},globals.Presentation)})},
args: [],
source: "slideClasses\x0a\x09^self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideTransition",
protocol: 'accessing',
fn: function (){
var self=this;
return "fade";
},
args: [],
source: "slideTransition\x0a\x09^'fade'",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slides",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
$1=self["@slides"];
if(($receiver = $1) == null || $receiver.isNil){
self._initSlides();
} else {
$1;
};
$2=self["@slides"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"slides",{},globals.Presentation)})},
args: [],
source: "slides\x0a\x09slides ifNil: [self initSlides].\x0a\x09^slides",
messageSends: ["ifNil:", "initSlides"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slidesDo:",
protocol: 'enumerating',
fn: function (aBlockWithArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._slides())._do_((function(aSlide){
return smalltalk.withContext(function($ctx2) {
return _st(aBlockWithArg)._value_(aSlide);
}, function($ctx2) {$ctx2.fillBlock({aSlide:aSlide},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"slidesDo:",{aBlockWithArg:aBlockWithArg},globals.Presentation)})},
args: ["aBlockWithArg"],
source: "slidesDo: aBlockWithArg\x0a\x09self slides do: [:aSlide| aBlockWithArg value: aSlide].",
messageSends: ["do:", "slides", "value:"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
protocol: 'accessing',
fn: function (){
var self=this;
return "";
},
args: [],
source: "style\x0a\x09\x22Should return a CSS style\x22\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._title();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},globals.Presentation)})},
args: [],
source: "title\x0a\x09^ self class title.",
messageSends: ["title", "class"],
referencedClasses: []
}),
globals.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
return "http://jtalk-project.org";
},
args: [],
source: "url\x0a\x09^'http://jtalk-project.org'",
messageSends: [],
referencedClasses: []
}),
globals.Presentation);


globals.Presentation.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "concretePresentations",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._allSubclasses())._select_((function(aPresentationClass){
return smalltalk.withContext(function($ctx2) {
return _st(aPresentationClass)._isConcrete();
}, function($ctx2) {$ctx2.fillBlock({aPresentationClass:aPresentationClass},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"concretePresentations",{},globals.Presentation.klass)})},
args: [],
source: "concretePresentations\x0a\x09^ self allSubclasses select: [:aPresentationClass| aPresentationClass isConcrete]",
messageSends: ["select:", "allSubclasses", "isConcrete"],
referencedClasses: []
}),
globals.Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "concretePresentationsDo:",
protocol: 'enumerating',
fn: function (aBlockWithArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._concretePresentations())._do_(aBlockWithArg);
return self}, function($ctx1) {$ctx1.fill(self,"concretePresentationsDo:",{aBlockWithArg:aBlockWithArg},globals.Presentation.klass)})},
args: ["aBlockWithArg"],
source: "concretePresentationsDo: aBlockWithArg\x0a\x09self concretePresentations do: aBlockWithArg.",
messageSends: ["do:", "concretePresentations"],
referencedClasses: []
}),
globals.Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isConcrete\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
globals.Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Slides";
},
args: [],
source: "title\x0a\x09^ 'Slides'",
messageSends: [],
referencedClasses: []
}),
globals.Presentation.klass);


smalltalk.addClass('ESUG2011Presentation', globals.Presentation, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
protocol: 'accessing',
fn: function (){
var self=this;
return "Nicolas Petton";
},
args: [],
source: "author\x0a\x09^'Nicolas Petton'",
messageSends: [],
referencedClasses: []
}),
globals.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
protocol: 'accessing',
fn: function (){
var self=this;
return "ESUG 2011, Edinburgh";
},
args: [],
source: "description\x0a\x09^'ESUG 2011, Edinburgh'",
messageSends: [],
referencedClasses: []
}),
globals.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
protocol: 'accessing',
fn: function (){
var self=this;
return "nico@objectfusion.fr";
},
args: [],
source: "email\x0a\x09^'nico@objectfusion.fr'",
messageSends: [],
referencedClasses: []
}),
globals.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
function $IntroSlide(){return globals.IntroSlide||(typeof IntroSlide=="undefined"?nil:IntroSlide)}
function $AboutSlide(){return globals.AboutSlide||(typeof AboutSlide=="undefined"?nil:AboutSlide)}
function $WhatIsJtalkSlide(){return globals.WhatIsJtalkSlide||(typeof WhatIsJtalkSlide=="undefined"?nil:WhatIsJtalkSlide)}
function $JtalkFeaturesSlide(){return globals.JtalkFeaturesSlide||(typeof JtalkFeaturesSlide=="undefined"?nil:JtalkFeaturesSlide)}
function $WorkspaceSlide(){return globals.WorkspaceSlide||(typeof WorkspaceSlide=="undefined"?nil:WorkspaceSlide)}
function $IDESlide(){return globals.IDESlide||(typeof IDESlide=="undefined"?nil:IDESlide)}
function $CountersSlide(){return globals.CountersSlide||(typeof CountersSlide=="undefined"?nil:CountersSlide)}
function $JtalkAndJavascriptSlide(){return globals.JtalkAndJavascriptSlide||(typeof JtalkAndJavascriptSlide=="undefined"?nil:JtalkAndJavascriptSlide)}
function $JtalkAndJavascriptSlide2(){return globals.JtalkAndJavascriptSlide2||(typeof JtalkAndJavascriptSlide2=="undefined"?nil:JtalkAndJavascriptSlide2)}
function $JtalkAndJavascriptSlide3(){return globals.JtalkAndJavascriptSlide3||(typeof JtalkAndJavascriptSlide3=="undefined"?nil:JtalkAndJavascriptSlide3)}
function $JtalkAndJavascriptSlide4(){return globals.JtalkAndJavascriptSlide4||(typeof JtalkAndJavascriptSlide4=="undefined"?nil:JtalkAndJavascriptSlide4)}
function $JtalkAndCLI(){return globals.JtalkAndCLI||(typeof JtalkAndCLI=="undefined"?nil:JtalkAndCLI)}
function $JtalkAndNode(){return globals.JtalkAndNode||(typeof JtalkAndNode=="undefined"?nil:JtalkAndNode)}
function $JtalkAndNode2(){return globals.JtalkAndNode2||(typeof JtalkAndNode2=="undefined"?nil:JtalkAndNode2)}
function $JtalkAndNode3(){return globals.JtalkAndNode3||(typeof JtalkAndNode3=="undefined"?nil:JtalkAndNode3)}
function $JtalkAndWebOS(){return globals.JtalkAndWebOS||(typeof JtalkAndWebOS=="undefined"?nil:JtalkAndWebOS)}
function $JtalkAndEnyo(){return globals.JtalkAndEnyo||(typeof JtalkAndEnyo=="undefined"?nil:JtalkAndEnyo)}
function $ContributionsSlide(){return globals.ContributionsSlide||(typeof ContributionsSlide=="undefined"?nil:ContributionsSlide)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._new();
_st($2)._add_($IntroSlide());
$ctx1.sendIdx["add:"]=1;
_st($2)._add_($AboutSlide());
$ctx1.sendIdx["add:"]=2;
_st($2)._add_($WhatIsJtalkSlide());
$ctx1.sendIdx["add:"]=3;
_st($2)._add_($JtalkFeaturesSlide());
$ctx1.sendIdx["add:"]=4;
_st($2)._add_($WorkspaceSlide());
$ctx1.sendIdx["add:"]=5;
_st($2)._add_($IDESlide());
$ctx1.sendIdx["add:"]=6;
_st($2)._add_($CountersSlide());
$ctx1.sendIdx["add:"]=7;
_st($2)._add_($JtalkAndJavascriptSlide());
$ctx1.sendIdx["add:"]=8;
_st($2)._add_($JtalkAndJavascriptSlide2());
$ctx1.sendIdx["add:"]=9;
_st($2)._add_($JtalkAndJavascriptSlide3());
$ctx1.sendIdx["add:"]=10;
_st($2)._add_($JtalkAndJavascriptSlide4());
$ctx1.sendIdx["add:"]=11;
_st($2)._add_($JtalkAndCLI());
$ctx1.sendIdx["add:"]=12;
_st($2)._add_($JtalkAndNode());
$ctx1.sendIdx["add:"]=13;
_st($2)._add_($JtalkAndNode2());
$ctx1.sendIdx["add:"]=14;
_st($2)._add_($JtalkAndNode3());
$ctx1.sendIdx["add:"]=15;
_st($2)._add_($JtalkAndWebOS());
$ctx1.sendIdx["add:"]=16;
_st($2)._add_($JtalkAndEnyo());
$ctx1.sendIdx["add:"]=17;
_st($2)._add_($ContributionsSlide());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},globals.ESUG2011Presentation)})},
args: [],
source: "slideClasses\x0a\x09^Array new\x0a\x09\x09add: IntroSlide;\x0a\x09\x09add: AboutSlide;\x0a\x09\x09add: WhatIsJtalkSlide;\x0a\x09\x09add: JtalkFeaturesSlide;\x0a\x09\x09add: WorkspaceSlide;\x0a\x09\x09add: IDESlide;\x0a\x09\x09add: CountersSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide2;\x0a\x09\x09add: JtalkAndJavascriptSlide3;\x0a\x09\x09add: JtalkAndJavascriptSlide4;\x0a\x09\x09add: JtalkAndCLI;\x0a\x09\x09add: JtalkAndNode;\x0a\x09\x09add: JtalkAndNode2;\x0a\x09\x09add: JtalkAndNode3;\x0a\x09\x09add: JtalkAndWebOS;\x0a\x09\x09add: JtalkAndEnyo;\x0a\x09\x09add: ContributionsSlide;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: ["Array", "IntroSlide", "AboutSlide", "WhatIsJtalkSlide", "JtalkFeaturesSlide", "WorkspaceSlide", "IDESlide", "CountersSlide", "JtalkAndJavascriptSlide", "JtalkAndJavascriptSlide2", "JtalkAndJavascriptSlide3", "JtalkAndJavascriptSlide4", "JtalkAndCLI", "JtalkAndNode", "JtalkAndNode2", "JtalkAndNode3", "JtalkAndWebOS", "JtalkAndEnyo", "ContributionsSlide"]
}),
globals.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
protocol: 'accessing',
fn: function (){
var self=this;
return "\x0d\x0abody {\x0d\x0a    font-family: Helvetica,Arial,sans;\x0d\x0a}\x0d\x0a\x0d\x0a#slides {\x0d\x0a    width: 100%;\x0d\x0a    height: 100%;\x0d\x0a    overflow: hidden;\x0d\x0a    position: absolute;\x0d\x0a    top: 0;\x0d\x0a    bottom: 0;\x0d\x0a    left: 0;\x0d\x0a    right: 0;\x0d\x0a    background: #555;\x0d\x0a}\x0d\x0a\x0d\x0a.slide {\x0d\x0a    background: #fff;\x0d\x0a    color: #444;\x0d\x0a    text-align: left;\x0d\x0a    font-size: 20px;\x0d\x0a    line-height: 1.8em;\x0d\x0a    height: 500px;\x0d\x0a    width: 700px;\x0d\x0a    padding: 60px;\x0d\x0a    position: absolute;\x0d\x0a    left: 50%;\x0d\x0a    top: 50%;\x0d\x0a    margin-left: -420px;\x0d\x0a    margin-top: -320px;\x0d\x0a    box-shadow: 0 0 20px #111;\x0d\x0a    -moz-box-shadow: 0 0 20px #111;\x0d\x0a    -webkit-box-shadow: 0 0 20px #111;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.transparent {\x0d\x0a    background: transparent;\x0d\x0a    box-shadow: 0 0 0 none;\x0d\x0a    -moz-box-shadow: 0 0 0 transparent;\x0d\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0d\x0a    color: #fff !important;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.black {\x0d\x0a    background: black;\x0d\x0a    background-image: -webkit-gradient(\x0d\x0a\x09linear,\x0d\x0a\x09left bottom,\x0d\x0a\x09left top,\x0d\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0d\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0d\x0a\x09color-stop(0.86, rgb(4,4,4))\x0d\x0a    );\x0d\x0a    background-image: -moz-linear-gradient(\x0d\x0a\x09center bottom,\x0d\x0a\x09rgb(79,79,79) 38%,\x0d\x0a\x09rgb(33,33,33) 69%,\x0d\x0a\x09rgb(4,4,4) 86%\x0d\x0a    );\x0d\x0a    color: #fff !important;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0d\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0d\x0a    color: #fff;\x0d\x0a    text-shadow: 0 1px 4px #aaa;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.black a, .slide.transparent a {\x0d\x0a    color: #ccc;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.white {\x0d\x0a    color: #333 !important;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0d\x0a    color: #333;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.white a {\x0d\x0a    color: #333;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a.slide h1, .slide h2, .slide h3 {\x0d\x0a    color: #333;\x0d\x0a    /* text-align: center; */\x0d\x0a}\x0d\x0a\x0d\x0a.slide h1 {\x0d\x0a    font-family: \x22Droid Sans\x22;\x0d\x0a    font-size: 36px;\x0d\x0a    text-shadow: 0 1px 4px #aaa;\x0d\x0a    margin-top: 30px;\x0d\x0a    margin-bottom: 50px;\x0d\x0a}\x0d\x0a\x0d\x0a/* .slide ul, .slide li { */\x0d\x0a/*     padding: 0; */\x0d\x0a/*     margin: 0; */\x0d\x0a/* } */\x0d\x0a\x0d\x0a.slide button {\x0d\x0a    font-size: 18px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide a {\x0d\x0a    color: #555;\x0d\x0a    text-decoration: none;\x0d\x0a    cursor: pointer;\x0d\x0a}\x0d\x0a\x0d\x0a.slide a:hover {\x0d\x0a    color: #fff;\x0d\x0a    background: #555;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .right {\x0d\x0a    text-align: right;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .section.center {\x0d\x0a    text-align: center;\x0d\x0a    display: table-cell;\x0d\x0a    vertical-align: middle;\x0d\x0a    width: 700px;\x0d\x0a    height: 500px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide code {\x0d\x0a    font-family: \x22Droid Sans Mono\x22;\x0d\x0a    color: #444;\x0d\x0a    border: 1px solid #ddd;\x0d\x0a    background: #eee;\x0d\x0a    border-radius: 4px;\x0d\x0a    padding: 2px;\x0d\x0a    font-size: 16px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .code2 {\x0d\x0a    font-family: \x22Droid Sans Mono\x22;\x0d\x0a    line-height: 1.2em;\x0d\x0a    color: #444;\x0d\x0a    padding: 2px;\x0d\x0a    font-size: 16px;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a.slide .CodeMirror {\x0d\x0a    width: 500px;\x0d\x0a    height: 300px;\x0d\x0a    text-align: left;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .CodeMirror-scroll {\x0d\x0a    text-align: left;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .fancy {\x0d\x0a    margin-top: 30px;\x0d\x0a    -webkit-transform: rotate(-10deg);\x0d\x0a    -moz-transform: rotate(-10deg);\x0d\x0a    transform: rotate(-10deg);\x0d\x0a    color: red;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .comment {\x0d\x0a    opacity: 0.6;\x0d\x0a    font-weight: normal;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .red {\x0d\x0a    color: red;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .blue {\x0d\x0a    color: blue;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#WhatIsJtalk {\x0d\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#ide {\x0d\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#JtalkAndCLI {\x0d\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#JtalkAndNode {\x0d\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0d\x0a}\x0d\x0a.slide#JtalkAndNode2 {\x0d\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#JtalkAndNode3 {\x0d\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#JtalkAndWebOS {\x0d\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#JtalkAndEnyo {\x0d\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#links {\x0d\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#links .section {\x0d\x0a    margin-left: 250px;\x0d\x0a    margin-top: 200px;\x0d\x0a    font-family: \x22Droid Sans\x22;\x0d\x0a    font-size: 26px;\x0d\x0a    font-weight: bold;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a#meta {\x0d\x0a    position: absolute;\x0d\x0a    font-size: 12px;\x0d\x0a    opacity: 0.6;\x0d\x0a    bottom: 0;\x0d\x0a    right: 0;\x0d\x0a    z-index: 2;\x0d\x0a    background: #333;\x0d\x0a    text-align: right;\x0d\x0a    padding: 0 10px;\x0d\x0a    line-height: 1.8em;\x0d\x0a    color: #eee;\x0d\x0a    border-top-left-radius: 5px;\x0d\x0a}\x0d\x0a\x0d\x0a#meta:hover {\x0d\x0a    opacity: 0.8;\x0d\x0a}\x0d\x0a\x0d\x0a#meta p {\x0d\x0a    display: inline;\x0d\x0a    padding: 0 5px;\x0d\x0a}\x0d\x0a\x0d\x0a#meta a {\x0d\x0a    //background: #ccc;\x0d\x0a    color: #ccc;\x0d\x0a    text-decoration: none;\x0d\x0a    padding: 0 5px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide {\x0d\x0a    \x0d\x0a}\x0d\x0a";
},
args: [],
source: "style\x0a\x09^'\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a'",
messageSends: [],
referencedClasses: []
}),
globals.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
return "http://jtalk-project.org";
},
args: [],
source: "url\x0a\x09^'http://jtalk-project.org'",
messageSends: [],
referencedClasses: []
}),
globals.ESUG2011Presentation);


globals.ESUG2011Presentation.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isConcrete\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
globals.ESUG2011Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Jtalk";
},
args: [],
source: "title\x0a\x09^'Jtalk'",
messageSends: [],
referencedClasses: []
}),
globals.ESUG2011Presentation.klass);


smalltalk.addClass('FOSDEM2012Presentation', globals.Presentation, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
protocol: 'accessing',
fn: function (){
var self=this;
return "Laurent Laffont, Johnny Thornton";
},
args: [],
source: "author\x0a\x09^'Laurent Laffont, Johnny Thornton'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
protocol: 'accessing',
fn: function (){
var self=this;
return "FOSDEM 2012, Brussels";
},
args: [],
source: "description\x0a\x09^'FOSDEM 2012, Brussels'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
protocol: 'accessing',
fn: function (){
var self=this;
return "laurent.laffont@gmail.com,  johnnyt@xan.do";
},
args: [],
source: "email\x0a\x09^'laurent.laffont@gmail.com,  johnnyt@xan.do'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $FOSDEMIntroSlide(){return globals.FOSDEMIntroSlide||(typeof FOSDEMIntroSlide=="undefined"?nil:FOSDEMIntroSlide)}
function $FOSDEMAmberZeroNine(){return globals.FOSDEMAmberZeroNine||(typeof FOSDEMAmberZeroNine=="undefined"?nil:FOSDEMAmberZeroNine)}
function $CountersSlide(){return globals.CountersSlide||(typeof CountersSlide=="undefined"?nil:CountersSlide)}
function $IDESlide(){return globals.IDESlide||(typeof IDESlide=="undefined"?nil:IDESlide)}
function $JtalkAndJavascriptSlide(){return globals.JtalkAndJavascriptSlide||(typeof JtalkAndJavascriptSlide=="undefined"?nil:JtalkAndJavascriptSlide)}
function $FOSDEMJSPlayGroundSlide(){return globals.FOSDEMJSPlayGroundSlide||(typeof FOSDEMJSPlayGroundSlide=="undefined"?nil:FOSDEMJSPlayGroundSlide)}
function $FOSDEMJSToSmalltalk(){return globals.FOSDEMJSToSmalltalk||(typeof FOSDEMJSToSmalltalk=="undefined"?nil:FOSDEMJSToSmalltalk)}
function $FOSDEMBookletSlide(){return globals.FOSDEMBookletSlide||(typeof FOSDEMBookletSlide=="undefined"?nil:FOSDEMBookletSlide)}
function $FOSDEMTwitter(){return globals.FOSDEMTwitter||(typeof FOSDEMTwitter=="undefined"?nil:FOSDEMTwitter)}
function $FOSDEMCanvasSlide(){return globals.FOSDEMCanvasSlide||(typeof FOSDEMCanvasSlide=="undefined"?nil:FOSDEMCanvasSlide)}
function $FOSDEMAmberBackend(){return globals.FOSDEMAmberBackend||(typeof FOSDEMAmberBackend=="undefined"?nil:FOSDEMAmberBackend)}
function $FOSDEMREPLSlide(){return globals.FOSDEMREPLSlide||(typeof FOSDEMREPLSlide=="undefined"?nil:FOSDEMREPLSlide)}
function $FOSDEMCLISlide(){return globals.FOSDEMCLISlide||(typeof FOSDEMCLISlide=="undefined"?nil:FOSDEMCLISlide)}
function $FOSDEMContributionsSlide(){return globals.FOSDEMContributionsSlide||(typeof FOSDEMContributionsSlide=="undefined"?nil:FOSDEMContributionsSlide)}
var $1;
$1=[$FOSDEMIntroSlide(),$FOSDEMAmberZeroNine(),$CountersSlide(),$IDESlide(),$JtalkAndJavascriptSlide(),$FOSDEMJSPlayGroundSlide(),$FOSDEMJSToSmalltalk(),$FOSDEMBookletSlide(),$FOSDEMTwitter(),$FOSDEMCanvasSlide(),$FOSDEMAmberBackend(),$FOSDEMREPLSlide(),$FOSDEMCLISlide(),$FOSDEMContributionsSlide()];
return $1;
},
args: [],
source: "slideClasses\x0a^ {\x0a\x09FOSDEMIntroSlide.\x0a\x09FOSDEMAmberZeroNine.\x0a\x09CountersSlide.\x0a\x09IDESlide.\x0a\x09JtalkAndJavascriptSlide.\x0a\x09FOSDEMJSPlayGroundSlide.\x0a\x09FOSDEMJSToSmalltalk.\x0a\x09FOSDEMBookletSlide.\x0a\x09FOSDEMTwitter.\x0a\x09FOSDEMCanvasSlide.\x0a\x09FOSDEMAmberBackend.\x0a\x09FOSDEMREPLSlide.\x0a\x09FOSDEMCLISlide.\x0a\x09FOSDEMContributionsSlide\x0a}",
messageSends: [],
referencedClasses: ["FOSDEMIntroSlide", "FOSDEMAmberZeroNine", "CountersSlide", "IDESlide", "JtalkAndJavascriptSlide", "FOSDEMJSPlayGroundSlide", "FOSDEMJSToSmalltalk", "FOSDEMBookletSlide", "FOSDEMTwitter", "FOSDEMCanvasSlide", "FOSDEMAmberBackend", "FOSDEMREPLSlide", "FOSDEMCLISlide", "FOSDEMContributionsSlide"]
}),
globals.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
protocol: 'accessing',
fn: function (){
var self=this;
return "\x0d\x0abody {\x0d\x0a    font-family: Helvetica,Arial,sans;\x0d\x0a}\x0d\x0a\x0d\x0a#slides {\x0d\x0a    width: 100%;\x0d\x0a    height: 100%;\x0d\x0a    overflow: hidden;\x0d\x0a    position: absolute;\x0d\x0a    top: 0;\x0d\x0a    bottom: 0;\x0d\x0a    left: 0;\x0d\x0a    right: 0;\x0d\x0a    background: #555;\x0d\x0a}\x0d\x0a\x0d\x0a.slide {\x0d\x0a    background: #fff;\x0d\x0a    color: #444;\x0d\x0a    text-align: left;\x0d\x0a    font-size: 20px;\x0d\x0a    line-height: 1.8em;\x0d\x0a    height: 500px;\x0d\x0a    width: 700px;\x0d\x0a    padding: 60px;\x0d\x0a    position: absolute;\x0d\x0a    left: 50%;\x0d\x0a    top: 50%;\x0d\x0a    margin-left: -420px;\x0d\x0a    margin-top: -320px;\x0d\x0a    box-shadow: 0 0 20px #111;\x0d\x0a    -moz-box-shadow: 0 0 20px #111;\x0d\x0a    -webkit-box-shadow: 0 0 20px #111;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.transparent {\x0d\x0a    background: transparent;\x0d\x0a    box-shadow: 0 0 0 none;\x0d\x0a    -moz-box-shadow: 0 0 0 transparent;\x0d\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0d\x0a    color: #fff !important;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.black {\x0d\x0a    background: black;\x0d\x0a    background-image: -webkit-gradient(\x0d\x0a\x09linear,\x0d\x0a\x09left bottom,\x0d\x0a\x09left top,\x0d\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0d\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0d\x0a\x09color-stop(0.86, rgb(4,4,4))\x0d\x0a    );\x0d\x0a    background-image: -moz-linear-gradient(\x0d\x0a\x09center bottom,\x0d\x0a\x09rgb(79,79,79) 38%,\x0d\x0a\x09rgb(33,33,33) 69%,\x0d\x0a\x09rgb(4,4,4) 86%\x0d\x0a    );\x0d\x0a    color: #fff !important;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0d\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0d\x0a    color: #fff;\x0d\x0a    text-shadow: 0 1px 4px #aaa;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.black a, .slide.transparent a {\x0d\x0a    color: #ccc;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.white {\x0d\x0a    color: #333 !important;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0d\x0a    color: #333;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.white a {\x0d\x0a    color: #333;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a.slide h1, .slide h2, .slide h3 {\x0d\x0a    color: #333;\x0d\x0a    /* text-align: center; */\x0d\x0a}\x0d\x0a\x0d\x0a.slide h1 {\x0d\x0a    font-family: \x22Droid Sans\x22;\x0d\x0a    font-size: 36px;\x0d\x0a    text-shadow: 0 1px 4px #aaa;\x0d\x0a    margin-top: 30px;\x0d\x0a    margin-bottom: 50px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide button {\x0d\x0a    font-size: 18px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide a {\x0d\x0a    color: #555;\x0d\x0a    text-decoration: none;\x0d\x0a    cursor: pointer;\x0d\x0a}\x0d\x0a\x0d\x0a.slide a:hover {\x0d\x0a    color: #fff;\x0d\x0a    background: #555;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .right {\x0d\x0a    text-align: right;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .section.center {\x0d\x0a    text-align: center;\x0d\x0a    display: table-cell;\x0d\x0a    vertical-align: middle;\x0d\x0a    width: 700px;\x0d\x0a    height: 500px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide code {\x0d\x0a    font-family: \x22Droid Sans Mono\x22;\x0d\x0a    color: #444;\x0d\x0a    border: 1px solid #ddd;\x0d\x0a    background: #eee;\x0d\x0a    border-radius: 4px;\x0d\x0a    padding: 2px;\x0d\x0a    font-size: 16px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .code2 {\x0d\x0a    font-family: \x22Droid Sans Mono\x22;\x0d\x0a    line-height: 1.2em;\x0d\x0a    color: #444;\x0d\x0a    padding: 2px;\x0d\x0a    font-size: 16px;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a.slide .CodeMirror {\x0d\x0a    width: 700px;\x0d\x0a    height: 300px;\x0d\x0a    text-align: left;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .CodeMirror-scroll {\x0d\x0a    text-align: left;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .fancy {\x0d\x0a    margin-top: 30px;\x0d\x0a    -webkit-transform: rotate(-10deg);\x0d\x0a    -moz-transform: rotate(-10deg);\x0d\x0a    transform: rotate(-10deg);\x0d\x0a    color: red;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .comment {\x0d\x0a    opacity: 0.6;\x0d\x0a    font-weight: normal;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .red {\x0d\x0a    color: red;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .blue {\x0d\x0a    color: blue;\x0d\x0a}\x0d\x0a\x0d\x0a#meta {\x0d\x0a    position: absolute;\x0d\x0a    font-size: 12px;\x0d\x0a    opacity: 0.6;\x0d\x0a    bottom: 0;\x0d\x0a    right: 0;\x0d\x0a    z-index: 2;\x0d\x0a    background: #333;\x0d\x0a    text-align: right;\x0d\x0a    padding: 0 10px;\x0d\x0a    line-height: 1.8em;\x0d\x0a    color: #eee;\x0d\x0a    border-top-left-radius: 5px;\x0d\x0a}\x0d\x0a\x0d\x0a#meta:hover {\x0d\x0a    opacity: 0.8;\x0d\x0a}\x0d\x0a\x0d\x0a#meta p {\x0d\x0a    display: inline;\x0d\x0a    padding: 0 5px;\x0d\x0a}\x0d\x0a\x0d\x0a#meta a {\x0d\x0a    //background: #ccc;\x0d\x0a    color: #ccc;\x0d\x0a    text-decoration: none;\x0d\x0a    padding: 0 5px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide {\x0d\x0a    \x0d\x0a}\x0d\x0a\x0d\x0a.slide.blue3d {\x0d\x0a  background: #feffff;\x0d\x0a  background: -moz-linear-gradient(top, #feffff 0%, #d2ebf9 100%);\x0d\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feffff), color-stop(100%,#d2ebf9));\x0d\x0a  background: -webkit-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0d\x0a  background: -o-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0d\x0a  background: -ms-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0d\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#feffff\x22, endColorstr=\x22#d2ebf9\x22,GradientType=0 );\x0d\x0a  background: linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a.slide.red3d {\x0d\x0a  background: #febbbb;\x0d\x0a  background: -moz-linear-gradient(top, #febbbb 0%, #fe9090 71%, #ff5c5c 95%);\x0d\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#febbbb), color-stop(71%,#fe9090), color-stop(95%,#ff5c5c));\x0d\x0a  background: -webkit-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0d\x0a  background: -o-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0d\x0a  background: -ms-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0d\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#febbbb\x22, endColorstr=\x22#ff5c5c\x22,GradientType=0 );\x0d\x0a  background: linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a.slide.green3d {\x0d\x0a  background: #cdeb8e;\x0d\x0a  background: -moz-linear-gradient(top, #cdeb8e 0%, #a5c956 100%);\x0d\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cdeb8e), color-stop(100%,#a5c956));\x0d\x0a  background: -webkit-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0d\x0a  background: -o-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0d\x0a  background: -ms-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0d\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#cdeb8e\x22, endColorstr=\x22#a5c956\x22,GradientType=0 );\x0d\x0a  background: linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0d\x0a}\x0d\x0a\x0d\x0a@-webkit-keyframes rotate-horizontal {\x0d\x0a\x090% { -webkit-transform: perspective(1000px) rotateY(-10deg);}\x0d\x0a\x09100% { -webkit-transform: perspective(1000px) rotateY(10deg);}\x0d\x0a}\x0d\x0a\x0d\x0a.animate p{\x0d\x0a-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0d\x0a}\x0d\x0a\x0d\x0a#FOSDEMAmberBackend img {\x0d\x0a\x09margin: 5px;\x0d\x0a\x09-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#FOSDEMContributionsSlide {\x0d\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#FOSDEMContributionsSlide .section {\x0d\x0a    margin-left: 250px;\x0d\x0a    margin-top: 200px;\x0d\x0a    font-family: \x22Droid Sans\x22;\x0d\x0a    font-size: 26px;\x0d\x0a    font-weight: bold;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a.slide#ide {\x0d\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a.tweet {\x0d\x0a\x09background-color: #aaa;\x0d\x0a\x09color: black;\x0d\x0a\x09padding: 10px;\x0d\x0a\x09border-radius: 10px;\x0d\x0a\x09border: 5px solid #eee;\x0d\x0a\x09margin: 10px;\x0d\x0a}\x0d\x0a\x0d\x0a.tweet img {\x0d\x0a\x09vertical-align: top;\x0d\x0a\x09margin-right: 10px;\x0d\x0a}\x0d\x0a\x0d\x0a.tweet span:first-child {\x0d\x0a\x09float: right;\x0d\x0a}\x0d\x0a";
},
args: [],
source: "style\x0a\x09^'\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 700px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a\x0a.slide.blue3d {\x0a  background: #feffff;\x0a  background: -moz-linear-gradient(top, #feffff 0%, #d2ebf9 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feffff), color-stop(100%,#d2ebf9));\x0a  background: -webkit-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -o-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -ms-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#feffff\x22, endColorstr=\x22#d2ebf9\x22,GradientType=0 );\x0a  background: linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a}\x0a\x0a\x0a.slide.red3d {\x0a  background: #febbbb;\x0a  background: -moz-linear-gradient(top, #febbbb 0%, #fe9090 71%, #ff5c5c 95%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#febbbb), color-stop(71%,#fe9090), color-stop(95%,#ff5c5c));\x0a  background: -webkit-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -o-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -ms-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#febbbb\x22, endColorstr=\x22#ff5c5c\x22,GradientType=0 );\x0a  background: linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a}\x0a\x0a\x0a.slide.green3d {\x0a  background: #cdeb8e;\x0a  background: -moz-linear-gradient(top, #cdeb8e 0%, #a5c956 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cdeb8e), color-stop(100%,#a5c956));\x0a  background: -webkit-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -o-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -ms-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#cdeb8e\x22, endColorstr=\x22#a5c956\x22,GradientType=0 );\x0a  background: linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a}\x0a\x0a@-webkit-keyframes rotate-horizontal {\x0a\x090% { -webkit-transform: perspective(1000px) rotateY(-10deg);}\x0a\x09100% { -webkit-transform: perspective(1000px) rotateY(10deg);}\x0a}\x0a\x0a.animate p{\x0a-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a#FOSDEMAmberBackend img {\x0a\x09margin: 5px;\x0a\x09-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a\x0a.tweet {\x0a\x09background-color: #aaa;\x0a\x09color: black;\x0a\x09padding: 10px;\x0a\x09border-radius: 10px;\x0a\x09border: 5px solid #eee;\x0a\x09margin: 10px;\x0a}\x0a\x0a.tweet img {\x0a\x09vertical-align: top;\x0a\x09margin-right: 10px;\x0a}\x0a\x0a.tweet span:first-child {\x0a\x09float: right;\x0a}\x0a'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
return "http://amber-lang.net";
},
args: [],
source: "url\x0a\x09^'http://amber-lang.net'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEM2012Presentation);


smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isConcrete\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEM2012Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'testing',
fn: function (){
var self=this;
return "Amber";
},
args: [],
source: "title\x0a\x09^'Amber'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEM2012Presentation.klass);


smalltalk.addClass('SweSUG2012Presentation', globals.Presentation, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
protocol: 'accessing',
fn: function (){
var self=this;
return "Göran Krampe";
},
args: [],
source: "author\x0a\x09^'Göran Krampe'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
protocol: 'accessing',
fn: function (){
var self=this;
return "SweSUG 2012, Stockholm";
},
args: [],
source: "description\x0a\x09^'SweSUG 2012, Stockholm'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
protocol: 'accessing',
fn: function (){
var self=this;
return "goran@krampe.se";
},
args: [],
source: "email\x0a\x09^'goran@krampe.se'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
function $SweSUGIntroSlide(){return globals.SweSUGIntroSlide||(typeof SweSUGIntroSlide=="undefined"?nil:SweSUGIntroSlide)}
function $SweSUGAboutSlide(){return globals.SweSUGAboutSlide||(typeof SweSUGAboutSlide=="undefined"?nil:SweSUGAboutSlide)}
function $SweSUGWhatIsAmberSlide(){return globals.SweSUGWhatIsAmberSlide||(typeof SweSUGWhatIsAmberSlide=="undefined"?nil:SweSUGWhatIsAmberSlide)}
function $SweSUGAmberFeaturesSlide(){return globals.SweSUGAmberFeaturesSlide||(typeof SweSUGAmberFeaturesSlide=="undefined"?nil:SweSUGAmberFeaturesSlide)}
function $SweSUGWorkspaceSlide(){return globals.SweSUGWorkspaceSlide||(typeof SweSUGWorkspaceSlide=="undefined"?nil:SweSUGWorkspaceSlide)}
function $IDESlide(){return globals.IDESlide||(typeof IDESlide=="undefined"?nil:IDESlide)}
function $CountersSlide(){return globals.CountersSlide||(typeof CountersSlide=="undefined"?nil:CountersSlide)}
function $JtalkAndJavascriptSlide(){return globals.JtalkAndJavascriptSlide||(typeof JtalkAndJavascriptSlide=="undefined"?nil:JtalkAndJavascriptSlide)}
function $JtalkAndJavascriptSlide2(){return globals.JtalkAndJavascriptSlide2||(typeof JtalkAndJavascriptSlide2=="undefined"?nil:JtalkAndJavascriptSlide2)}
function $JtalkAndJavascriptSlide3(){return globals.JtalkAndJavascriptSlide3||(typeof JtalkAndJavascriptSlide3=="undefined"?nil:JtalkAndJavascriptSlide3)}
function $JtalkAndJavascriptSlide4(){return globals.JtalkAndJavascriptSlide4||(typeof JtalkAndJavascriptSlide4=="undefined"?nil:JtalkAndJavascriptSlide4)}
function $JtalkAndCLI(){return globals.JtalkAndCLI||(typeof JtalkAndCLI=="undefined"?nil:JtalkAndCLI)}
function $JtalkAndNode(){return globals.JtalkAndNode||(typeof JtalkAndNode=="undefined"?nil:JtalkAndNode)}
function $JtalkAndNode2(){return globals.JtalkAndNode2||(typeof JtalkAndNode2=="undefined"?nil:JtalkAndNode2)}
function $JtalkAndNode3(){return globals.JtalkAndNode3||(typeof JtalkAndNode3=="undefined"?nil:JtalkAndNode3)}
function $JtalkAndWebOS(){return globals.JtalkAndWebOS||(typeof JtalkAndWebOS=="undefined"?nil:JtalkAndWebOS)}
function $JtalkAndEnyo(){return globals.JtalkAndEnyo||(typeof JtalkAndEnyo=="undefined"?nil:JtalkAndEnyo)}
function $ContributionsSlide(){return globals.ContributionsSlide||(typeof ContributionsSlide=="undefined"?nil:ContributionsSlide)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._new();
_st($2)._add_($SweSUGIntroSlide());
$ctx1.sendIdx["add:"]=1;
_st($2)._add_($SweSUGAboutSlide());
$ctx1.sendIdx["add:"]=2;
_st($2)._add_($SweSUGWhatIsAmberSlide());
$ctx1.sendIdx["add:"]=3;
_st($2)._add_($SweSUGAmberFeaturesSlide());
$ctx1.sendIdx["add:"]=4;
_st($2)._add_($SweSUGWorkspaceSlide());
$ctx1.sendIdx["add:"]=5;
_st($2)._add_($IDESlide());
$ctx1.sendIdx["add:"]=6;
_st($2)._add_($CountersSlide());
$ctx1.sendIdx["add:"]=7;
_st($2)._add_($JtalkAndJavascriptSlide());
$ctx1.sendIdx["add:"]=8;
_st($2)._add_($JtalkAndJavascriptSlide2());
$ctx1.sendIdx["add:"]=9;
_st($2)._add_($JtalkAndJavascriptSlide3());
$ctx1.sendIdx["add:"]=10;
_st($2)._add_($JtalkAndJavascriptSlide4());
$ctx1.sendIdx["add:"]=11;
_st($2)._add_($JtalkAndCLI());
$ctx1.sendIdx["add:"]=12;
_st($2)._add_($JtalkAndNode());
$ctx1.sendIdx["add:"]=13;
_st($2)._add_($JtalkAndNode2());
$ctx1.sendIdx["add:"]=14;
_st($2)._add_($JtalkAndNode3());
$ctx1.sendIdx["add:"]=15;
_st($2)._add_($JtalkAndWebOS());
$ctx1.sendIdx["add:"]=16;
_st($2)._add_($JtalkAndEnyo());
$ctx1.sendIdx["add:"]=17;
_st($2)._add_($ContributionsSlide());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},globals.SweSUG2012Presentation)})},
args: [],
source: "slideClasses\x0a\x09^Array new\x0a\x09\x09add: SweSUGIntroSlide;\x0a\x09\x09add: SweSUGAboutSlide;\x0a\x09\x09add: SweSUGWhatIsAmberSlide;\x0a\x09\x09add: SweSUGAmberFeaturesSlide;\x0a\x09\x09add: SweSUGWorkspaceSlide;\x0a\x09\x09add: IDESlide;\x0a\x09\x09add: CountersSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide2;\x0a\x09\x09add: JtalkAndJavascriptSlide3;\x0a\x09\x09add: JtalkAndJavascriptSlide4;\x0a\x09\x09add: JtalkAndCLI;\x0a\x09\x09add: JtalkAndNode;\x0a\x09\x09add: JtalkAndNode2;\x0a\x09\x09add: JtalkAndNode3;\x0a\x09\x09add: JtalkAndWebOS;\x0a\x09\x09add: JtalkAndEnyo;\x0a\x09\x09add: ContributionsSlide;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: ["Array", "SweSUGIntroSlide", "SweSUGAboutSlide", "SweSUGWhatIsAmberSlide", "SweSUGAmberFeaturesSlide", "SweSUGWorkspaceSlide", "IDESlide", "CountersSlide", "JtalkAndJavascriptSlide", "JtalkAndJavascriptSlide2", "JtalkAndJavascriptSlide3", "JtalkAndJavascriptSlide4", "JtalkAndCLI", "JtalkAndNode", "JtalkAndNode2", "JtalkAndNode3", "JtalkAndWebOS", "JtalkAndEnyo", "ContributionsSlide"]
}),
globals.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
protocol: 'accessing',
fn: function (){
var self=this;
return "\x0d\x0abody {\x0d\x0a    font-family: Helvetica,Arial,sans;\x0d\x0a}\x0d\x0a\x0d\x0a#slides {\x0d\x0a    width: 100%;\x0d\x0a    height: 100%;\x0d\x0a    overflow: hidden;\x0d\x0a    position: absolute;\x0d\x0a    top: 0;\x0d\x0a    bottom: 0;\x0d\x0a    left: 0;\x0d\x0a    right: 0;\x0d\x0a    background: #555;\x0d\x0a}\x0d\x0a\x0d\x0a.slide {\x0d\x0a    background: #fff;\x0d\x0a    color: #444;\x0d\x0a    text-align: left;\x0d\x0a    font-size: 20px;\x0d\x0a    line-height: 1.8em;\x0d\x0a    height: 500px;\x0d\x0a    width: 700px;\x0d\x0a    padding: 60px;\x0d\x0a    position: absolute;\x0d\x0a    left: 50%;\x0d\x0a    top: 50%;\x0d\x0a    margin-left: -420px;\x0d\x0a    margin-top: -320px;\x0d\x0a    box-shadow: 0 0 20px #111;\x0d\x0a    -moz-box-shadow: 0 0 20px #111;\x0d\x0a    -webkit-box-shadow: 0 0 20px #111;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.transparent {\x0d\x0a    background: transparent;\x0d\x0a    box-shadow: 0 0 0 none;\x0d\x0a    -moz-box-shadow: 0 0 0 transparent;\x0d\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0d\x0a    color: #fff !important;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.black {\x0d\x0a    background: black;\x0d\x0a    background-image: -webkit-gradient(\x0d\x0a\x09linear,\x0d\x0a\x09left bottom,\x0d\x0a\x09left top,\x0d\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0d\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0d\x0a\x09color-stop(0.86, rgb(4,4,4))\x0d\x0a    );\x0d\x0a    background-image: -moz-linear-gradient(\x0d\x0a\x09center bottom,\x0d\x0a\x09rgb(79,79,79) 38%,\x0d\x0a\x09rgb(33,33,33) 69%,\x0d\x0a\x09rgb(4,4,4) 86%\x0d\x0a    );\x0d\x0a    color: #fff !important;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0d\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0d\x0a    color: #fff;\x0d\x0a    text-shadow: 0 1px 4px #aaa;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.black a, .slide.transparent a {\x0d\x0a    color: #ccc;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.white {\x0d\x0a    color: #333 !important;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0d\x0a    color: #333;\x0d\x0a}\x0d\x0a\x0d\x0a.slide.white a {\x0d\x0a    color: #333;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a.slide h1, .slide h2, .slide h3 {\x0d\x0a    color: #333;\x0d\x0a    /* text-align: center; */\x0d\x0a}\x0d\x0a\x0d\x0a.slide h1 {\x0d\x0a    font-family: \x22Droid Sans\x22;\x0d\x0a    font-size: 36px;\x0d\x0a    text-shadow: 0 1px 4px #aaa;\x0d\x0a    margin-top: 30px;\x0d\x0a    margin-bottom: 50px;\x0d\x0a}\x0d\x0a\x0d\x0a/* .slide ul, .slide li { */\x0d\x0a/*     padding: 0; */\x0d\x0a/*     margin: 0; */\x0d\x0a/* } */\x0d\x0a\x0d\x0a.slide button {\x0d\x0a    font-size: 18px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide a {\x0d\x0a    color: #555;\x0d\x0a    text-decoration: none;\x0d\x0a    cursor: pointer;\x0d\x0a}\x0d\x0a\x0d\x0a.slide a:hover {\x0d\x0a    color: #fff;\x0d\x0a    background: #555;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .right {\x0d\x0a    text-align: right;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .section.center {\x0d\x0a    text-align: center;\x0d\x0a    display: table-cell;\x0d\x0a    vertical-align: middle;\x0d\x0a    width: 700px;\x0d\x0a    height: 500px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide code {\x0d\x0a    font-family: \x22Droid Sans Mono\x22;\x0d\x0a    color: #444;\x0d\x0a    border: 1px solid #ddd;\x0d\x0a    background: #eee;\x0d\x0a    border-radius: 4px;\x0d\x0a    padding: 2px;\x0d\x0a    font-size: 16px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .code2 {\x0d\x0a    font-family: \x22Droid Sans Mono\x22;\x0d\x0a    line-height: 1.2em;\x0d\x0a    color: #444;\x0d\x0a    padding: 2px;\x0d\x0a    font-size: 16px;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a.slide .CodeMirror {\x0d\x0a    width: 500px;\x0d\x0a    height: 300px;\x0d\x0a    text-align: left;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .CodeMirror-scroll {\x0d\x0a    text-align: left;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .fancy {\x0d\x0a    margin-top: 30px;\x0d\x0a    -webkit-transform: rotate(-10deg);\x0d\x0a    -moz-transform: rotate(-10deg);\x0d\x0a    transform: rotate(-10deg);\x0d\x0a    color: red;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .comment {\x0d\x0a    opacity: 0.6;\x0d\x0a    font-weight: normal;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .red {\x0d\x0a    color: red;\x0d\x0a}\x0d\x0a\x0d\x0a.slide .blue {\x0d\x0a    color: blue;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#WhatIsJtalk {\x0d\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#ide {\x0d\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#JtalkAndCLI {\x0d\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#JtalkAndNode {\x0d\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0d\x0a}\x0d\x0a.slide#JtalkAndNode2 {\x0d\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#JtalkAndNode3 {\x0d\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#JtalkAndWebOS {\x0d\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#JtalkAndEnyo {\x0d\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#links {\x0d\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0d\x0a}\x0d\x0a\x0d\x0a.slide#links .section {\x0d\x0a    margin-left: 250px;\x0d\x0a    margin-top: 200px;\x0d\x0a    font-family: \x22Droid Sans\x22;\x0d\x0a    font-size: 26px;\x0d\x0a    font-weight: bold;\x0d\x0a}\x0d\x0a\x0d\x0a\x0d\x0a#meta {\x0d\x0a    position: absolute;\x0d\x0a    font-size: 12px;\x0d\x0a    opacity: 0.6;\x0d\x0a    bottom: 0;\x0d\x0a    right: 0;\x0d\x0a    z-index: 2;\x0d\x0a    background: #333;\x0d\x0a    text-align: right;\x0d\x0a    padding: 0 10px;\x0d\x0a    line-height: 1.8em;\x0d\x0a    color: #eee;\x0d\x0a    border-top-left-radius: 5px;\x0d\x0a}\x0d\x0a\x0d\x0a#meta:hover {\x0d\x0a    opacity: 0.8;\x0d\x0a}\x0d\x0a\x0d\x0a#meta p {\x0d\x0a    display: inline;\x0d\x0a    padding: 0 5px;\x0d\x0a}\x0d\x0a\x0d\x0a#meta a {\x0d\x0a    //background: #ccc;\x0d\x0a    color: #ccc;\x0d\x0a    text-decoration: none;\x0d\x0a    padding: 0 5px;\x0d\x0a}\x0d\x0a\x0d\x0a.slide {\x0d\x0a    \x0d\x0a}\x0d\x0a";
},
args: [],
source: "style\x0a\x09^'\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
return "http://www.amber-lang.net";
},
args: [],
source: "url\x0a\x09^'http://www.amber-lang.net'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUG2012Presentation);


smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isConcrete\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
globals.SweSUG2012Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Amber rocks!";
},
args: [],
source: "title\x0a\x09^'Amber rocks!'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUG2012Presentation.klass);


smalltalk.addClass('PresentationNavigator', globals.Widget, ['presentationBrush', 'currentPresentation', 'slideSelect'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "checkHash",
protocol: 'hash',
fn: function (){
var self=this;
var hash,presentation;
function $Presentation(){return globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
hash=_st(_st(_st(_st(document)._location())._hash())._replace_with_("^#",""))._tokenize_("-");
presentation=_st(_st($Presentation())._concretePresentations())._detect_ifNone_((function(aPresentationClass){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aPresentationClass)._name()).__eq_eq(_st(hash)._first());
$ctx2.sendIdx["=="]=1;
}, function($ctx2) {$ctx2.fillBlock({aPresentationClass:aPresentationClass},$ctx1,1)})}),(function(){
throw $early=[self];
}));
$1=_st(presentation).__eq_eq(_st(self._currentPresentation())._class());
if(! smalltalk.assert($1)){
self._selectPresentationNamed_(presentation);
self._selectSlideAt_(_st(hash)._last());
};
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"checkHash",{hash:hash,presentation:presentation},globals.PresentationNavigator)})},
args: [],
source: "checkHash\x0a\x09| hash presentation |\x0a\x09hash := (document location hash  replace: '^#' with: '') tokenize: '-'. \x0a\x09presentation := Presentation concretePresentations \x0a\x09\x09\x09\x09detect: [:aPresentationClass | aPresentationClass name == hash first]\x0a\x09\x09\x09\x09ifNone: [^ self].\x0a\x09presentation == self currentPresentation class ifFalse: [\x0a          \x09self selectPresentationNamed: presentation.\x0a          \x09self selectSlideAt: hash last\x0a        ].",
messageSends: ["tokenize:", "replace:with:", "hash", "location", "detect:ifNone:", "concretePresentations", "==", "name", "first", "ifFalse:", "class", "currentPresentation", "selectPresentationNamed:", "selectSlideAt:", "last"],
referencedClasses: ["Presentation"]
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "checkHashChange",
protocol: 'hash',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_(window))._bind_do_("hashchange",(function(){
return smalltalk.withContext(function($ctx2) {
return self._checkHash();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkHashChange",{},globals.PresentationNavigator)})},
args: [],
source: "checkHashChange\x0a\x09(window jQuery: window) bind: 'hashchange' do: [self checkHash]",
messageSends: ["bind:do:", "jQuery:", "checkHash"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPresentation",
protocol: 'accessing',
fn: function (){
var self=this;
function $Presentation(){return globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@currentPresentation"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentPresentation"]=_st(_st(_st($Presentation())._concretePresentations())._first())._new();
$1=self["@currentPresentation"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPresentation",{},globals.PresentationNavigator)})},
args: [],
source: "currentPresentation\x0a\x09^  currentPresentation ifNil: [currentPresentation := Presentation concretePresentations first new].",
messageSends: ["ifNil:", "new", "first", "concretePresentations"],
referencedClasses: ["Presentation"]
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPresentation:",
protocol: 'accessing',
fn: function (aPresentation){
var self=this;
self["@currentPresentation"]=aPresentation;
return self},
args: ["aPresentation"],
source: "currentPresentation: aPresentation\x0a\x09currentPresentation := aPresentation.",
messageSends: [],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "nextSlide",
protocol: 'callbacks',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentPresentation())._nextSlide();
self._updateHash();
return self}, function($ctx1) {$ctx1.fill(self,"nextSlide",{},globals.PresentationNavigator)})},
args: [],
source: "nextSlide\x0a\x09self currentPresentation nextSlide.\x0a\x09self updateHash.",
messageSends: ["nextSlide", "currentPresentation", "updateHash"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(window)._jQuery_(document))._ready_((function(){
return smalltalk.withContext(function($ctx2) {
self._appendToJQuery_("body"._asJQuery());
self._setKeybindings();
$1=self._checkHashChange();
return $1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},globals.PresentationNavigator)})},
args: [],
source: "open\x0a\x09(window jQuery: document)  ready: [\x0a          \x09self \x0a          \x09\x09appendToJQuery: 'body' asJQuery;\x0a          \x09\x09setKeybindings;\x0a          \x09\x09checkHashChange.\x0a        ].",
messageSends: ["ready:", "jQuery:", "appendToJQuery:", "asJQuery", "setKeybindings", "checkHashChange"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "previousSlide",
protocol: 'callbacks',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentPresentation())._previousSlide();
self._updateHash();
return self}, function($ctx1) {$ctx1.fill(self,"previousSlide",{},globals.PresentationNavigator)})},
args: [],
source: "previousSlide\x0a\x09self currentPresentation previousSlide.\x0a\x09self updateHash.",
messageSends: ["previousSlide", "currentPresentation", "updateHash"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "reload",
protocol: 'callbacks',
fn: function (){
var self=this;
var slideIndex;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._currentPresentation();
$ctx1.sendIdx["currentPresentation"]=1;
slideIndex=_st($1)._currentSlideIndex();
self._currentPresentation_(_st(_st(self._currentPresentation())._class())._new());
self._renderCurrentPresentation();
self._selectSlideAt_(slideIndex);
return self}, function($ctx1) {$ctx1.fill(self,"reload",{slideIndex:slideIndex},globals.PresentationNavigator)})},
args: [],
source: "reload\x0a\x09|slideIndex|\x0a\x09slideIndex := self currentPresentation currentSlideIndex.\x0a\x09self currentPresentation: self currentPresentation class new.\x0a\x09self renderCurrentPresentation.\x0a\x09self selectSlideAt: slideIndex.",
messageSends: ["currentSlideIndex", "currentPresentation", "currentPresentation:", "new", "class", "renderCurrentPresentation", "selectSlideAt:"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCurrentPresentation",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@presentationBrush"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(self._currentPresentation())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
self._updateSlideSelect();
return self}, function($ctx1) {$ctx1.fill(self,"renderCurrentPresentation",{},globals.PresentationNavigator)})},
args: [],
source: "renderCurrentPresentation\x0a\x09presentationBrush contents: [:html |\x0a        \x09self currentPresentation renderOn: html.\x0a        ].\x0a\x09self updateSlideSelect.",
messageSends: ["contents:", "renderOn:", "currentPresentation", "updateSlideSelect"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$6,$7;
$1=_st(html)._style();
$ctx1.sendIdx["style"]=1;
_st($1)._type_("text/css");
$2=_st($1)._with_(self._style());
$ctx1.sendIdx["with:"]=1;
$3=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($3)._id_("navigator");
$ctx1.sendIdx["id:"]=1;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderToolsOn_(html);
self._renderPresentationSelectOn_(html);
$5=self._renderSlideSelectOn_(html);
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$6=_st(html)._div();
_st($6)._id_("presentation");
$7=_st($6)._yourself();
self["@presentationBrush"]=$7;
self._checkHash();
self._renderCurrentPresentation();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.PresentationNavigator)})},
args: ["html"],
source: "renderOn: html\x0a\x09html style\x0a\x09\x09type: 'text/css';\x0a\x09\x09with: self style.\x0a\x09html div\x0a\x09\x09id: 'navigator';\x0a\x09\x09with: [\x09self\x0a\x09\x09\x09\x09\x09renderToolsOn: html;\x0a\x09\x09\x09\x09\x09renderPresentationSelectOn: html;\x0a                      \x09\x09\x09renderSlideSelectOn: html].\x0a\x0a\x09presentationBrush := html div \x0a\x09\x09\x09\x09\x09\x09\x09id: 'presentation';\x0a\x09\x09\x09\x09\x09\x09\x09yourself.\x0a\x0a\x09self checkHash.\x0a\x09self renderCurrentPresentation.",
messageSends: ["type:", "style", "with:", "id:", "div", "renderToolsOn:", "renderPresentationSelectOn:", "renderSlideSelectOn:", "yourself", "checkHash", "renderCurrentPresentation"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderPresentationSelectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var presentationSelect;
function $Presentation(){return globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
presentationSelect=_st(html)._select();
$1=presentationSelect;
_st($1)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selectPresentationNamed_(_st(_st(presentationSelect)._asJQuery())._val());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Presentation())._concretePresentationsDo_((function(aPresentationClass){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._option();
_st($3)._value_(_st(aPresentationClass)._name());
$4=_st($3)._with_(_st(aPresentationClass)._title());
return $4;
}, function($ctx3) {$ctx3.fillBlock({aPresentationClass:aPresentationClass},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderPresentationSelectOn:",{html:html,presentationSelect:presentationSelect},globals.PresentationNavigator)})},
args: ["html"],
source: "renderPresentationSelectOn: html\x0a\x09|presentationSelect|\x0a\x09presentationSelect := html select.\x0a\x09presentationSelect\x0a\x09\x09onChange: [self  selectPresentationNamed:  presentationSelect asJQuery val];\x0a\x09\x09with: [\x09Presentation concretePresentationsDo: [:aPresentationClass |   \x0a                                                              \x09\x09\x09\x09\x09\x09\x09html option\x0a                                                              \x09\x09\x09\x09\x09\x09\x09\x09value: aPresentationClass name;\x0a                                                              \x09\x09\x09\x09\x09\x09\x09\x09with: aPresentationClass title ] ].",
messageSends: ["select", "onChange:", "selectPresentationNamed:", "val", "asJQuery", "with:", "concretePresentationsDo:", "value:", "option", "name", "title"],
referencedClasses: ["Presentation"]
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideSelectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@slideSelect"]=_st(html)._select();
_st(self["@slideSelect"])._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selectSlideAt_(_st(_st(self["@slideSelect"])._asJQuery())._val());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self._updateSlideSelect();
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideSelectOn:",{html:html},globals.PresentationNavigator)})},
args: ["html"],
source: "renderSlideSelectOn: html\x0a\x09slideSelect := html select.\x0a\x09slideSelect onChange: [ self  selectSlideAt:  slideSelect asJQuery val ].\x0a\x09self updateSlideSelect.",
messageSends: ["select", "onChange:", "selectSlideAt:", "val", "asJQuery", "updateSlideSelect"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderToolsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $TabManager(){return globals.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st(html)._a();
$ctx1.sendIdx["a"]=1;
_st($1)._with_("IDE");
$ctx1.sendIdx["with:"]=1;
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($TabManager())._current())._open();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["onClick:"]=1;
$3=_st(html)._a();
$ctx1.sendIdx["a"]=2;
_st($3)._with_("Reload");
$ctx1.sendIdx["with:"]=2;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._reload();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["onClick:"]=2;
$5=_st(html)._a();
$ctx1.sendIdx["a"]=3;
_st($5)._with_("←");
$ctx1.sendIdx["with:"]=3;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._previousSlide();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["onClick:"]=3;
$7=_st(html)._a();
_st($7)._with_("→");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._nextSlide();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderToolsOn:",{html:html},globals.PresentationNavigator)})},
args: ["html"],
source: "renderToolsOn: html\x0a\x09html a \x0a\x09\x09with: 'IDE';\x0a\x09\x09onClick: [TabManager current open].\x0a\x09html a\x0a\x09\x09with: 'Reload';\x0a\x09\x09onClick: [self reload].\x0a\x09html a\x0a\x09\x09with: '←';\x0a\x09\x09onClick: [self previousSlide].\x0a\x09html a\x0a\x09\x09with: '→';\x0a\x09\x09onClick: [self nextSlide].",
messageSends: ["with:", "a", "onClick:", "open", "current", "reload", "previousSlide", "nextSlide"],
referencedClasses: ["TabManager"]
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "selectPresentation:",
protocol: 'callbacks',
fn: function (aPresentationClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._currentPresentation_(_st(aPresentationClass)._new());
self._renderCurrentPresentation();
return self}, function($ctx1) {$ctx1.fill(self,"selectPresentation:",{aPresentationClass:aPresentationClass},globals.PresentationNavigator)})},
args: ["aPresentationClass"],
source: "selectPresentation: aPresentationClass\x0a\x09self currentPresentation: aPresentationClass new.\x0a\x09self renderCurrentPresentation.",
messageSends: ["currentPresentation:", "new", "renderCurrentPresentation"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "selectPresentationNamed:",
protocol: 'callbacks',
fn: function (aString){
var self=this;
var presentationClass;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
presentationClass=_st(_st($Smalltalk())._current())._at_(aString);
$1=presentationClass;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._selectPresentation_(presentationClass);
};
return self}, function($ctx1) {$ctx1.fill(self,"selectPresentationNamed:",{aString:aString,presentationClass:presentationClass},globals.PresentationNavigator)})},
args: ["aString"],
source: "selectPresentationNamed: aString\x0a\x09|presentationClass|\x0a\x09presentationClass :=  (Smalltalk current at: aString).\x0a\x09presentationClass ifNotNil: [ self selectPresentation: presentationClass ].",
messageSends: ["at:", "current", "ifNotNil:", "selectPresentation:"],
referencedClasses: ["Smalltalk"]
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "selectSlideAt:",
protocol: 'callbacks',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentPresentation())._moveAt_(anInteger);
self._updateHash();
return self}, function($ctx1) {$ctx1.fill(self,"selectSlideAt:",{anInteger:anInteger},globals.PresentationNavigator)})},
args: ["anInteger"],
source: "selectSlideAt: anInteger\x0a\x09self currentPresentation moveAt: anInteger.\x0a\x09self updateHash.",
messageSends: ["moveAt:", "currentPresentation", "updateHash"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "setKeybindings",
protocol: 'keybindings',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5;
_st(_st(window)._jQuery_(document))._keyup_((function(e){
var node;
return smalltalk.withContext(function($ctx2) {
node=_st(_st(_st(e)._target())._nodeName())._asLowercase();
node;
$2=_st(node).__eq("textarea");
$ctx2.sendIdx["="]=1;
$1=_st($2)._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(node).__eq("input");
$ctx3.sendIdx["="]=2;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
if(! smalltalk.assert($1)){
$4=_st(e)._keyCode();
$ctx2.sendIdx["keyCode"]=1;
$3=_st($4).__eq((39));
$ctx2.sendIdx["="]=3;
if(smalltalk.assert($3)){
self._nextSlide();
};
$5=_st(_st(e)._keyCode()).__eq((37));
if(smalltalk.assert($5)){
return self._previousSlide();
};
};
}, function($ctx2) {$ctx2.fillBlock({e:e,node:node},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setKeybindings",{},globals.PresentationNavigator)})},
args: [],
source: "setKeybindings\x0a\x09(window jQuery: document) keyup: [:e || node |\x0a\x09\x09node := e target nodeName asLowercase.\x0a\x09\x09(node = 'textarea' or: [node = 'input']) ifFalse: [\x0a\x09\x09\x09e keyCode = 39 ifTrue: [self nextSlide].\x0a\x09\x09\x09e keyCode = 37 ifTrue: [self previousSlide]]]",
messageSends: ["keyup:", "jQuery:", "asLowercase", "nodeName", "target", "ifFalse:", "or:", "=", "ifTrue:", "keyCode", "nextSlide", "previousSlide"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
protocol: 'accessing',
fn: function (){
var self=this;
return "\x0d\x0a#navigator {\x0d\x0a    z-index: 1;\x0d\x0a    position: fixed;\x0d\x0a    top: 0;\x0d\x0a    left: 50%;\x0d\x0a    margin-left: -150px;\x0d\x0a    padding: 5px;\x0d\x0a    border-radius: 5px;\x0d\x0a    -moz-border-radius: 5px;\x0d\x0a    -webkit-border-radius: 5px;\x0d\x0a    background: #333;\x0d\x0a    opacity: 0.3;\x0d\x0a    color: #eee;\x0d\x0a}\x0d\x0a\x0d\x0a#navigator a {\x0d\x0a    font-weight: bold;\x0d\x0a    color: #eee;\x0d\x0a    text-decoration: none;\x0d\x0a    cursor: pointer;\x0d\x0a    padding: 0 2px;\x0d\x0a    font-size: 14px;\x0d\x0a}\x0d\x0a\x0d\x0a#navigator:hover {\x0d\x0a    opacity: 0.8;\x0d\x0a}\x0d\x0a";
},
args: [],
source: "style\x0a\x09^ '\x0a#navigator {\x0a    z-index: 1;\x0a    position: fixed;\x0a    top: 0;\x0a    left: 50%;\x0a    margin-left: -150px;\x0a    padding: 5px;\x0a    border-radius: 5px;\x0a    -moz-border-radius: 5px;\x0a    -webkit-border-radius: 5px;\x0a    background: #333;\x0a    opacity: 0.3;\x0a    color: #eee;\x0a}\x0a\x0a#navigator a {\x0a    font-weight: bold;\x0a    color: #eee;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a    padding: 0 2px;\x0a    font-size: 14px;\x0a}\x0a\x0a#navigator:hover {\x0a    opacity: 0.8;\x0a}\x0a'",
messageSends: [],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "updateHash",
protocol: 'callbacks',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$6,$5,$4,$3,$2;
$1=_st(document)._location();
$6=self._currentPresentation();
$ctx1.sendIdx["currentPresentation"]=1;
$5=_st($6)._class();
$4=_st($5)._name();
$3=_st($4).__comma("-");
$2=_st($3).__comma(_st(self._currentPresentation())._currentSlideIndex());
$ctx1.sendIdx[","]=1;
_st($1)._hash_($2);
return self}, function($ctx1) {$ctx1.fill(self,"updateHash",{},globals.PresentationNavigator)})},
args: [],
source: "updateHash\x0a\x09document location hash: self currentPresentation class name, '-', self currentPresentation currentSlideIndex.",
messageSends: ["hash:", "location", ",", "name", "class", "currentPresentation", "currentSlideIndex"],
referencedClasses: []
}),
globals.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSlideSelect",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@slideSelect"])._contents_((function(html){
var index;
return smalltalk.withContext(function($ctx2) {
index=(0);
index;
return _st(self._currentPresentation())._slidesDo_((function(aSlide){
return smalltalk.withContext(function($ctx3) {
index=_st(index).__plus((1));
index;
$1=_st(html)._option();
_st($1)._value_(index);
$2=_st($1)._with_(_st(aSlide)._title());
return $2;
}, function($ctx3) {$ctx3.fillBlock({aSlide:aSlide},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html,index:index},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateSlideSelect",{},globals.PresentationNavigator)})},
args: [],
source: "updateSlideSelect\x0a\x09slideSelect contents: [:html| |index|\x0a\x09\x09                       \x09\x09index := 0.\x0a                \x09\x09       \x09\x09self currentPresentation slidesDo: [ :aSlide|  \x0a                                \x09\x09                                    \x09\x09\x09\x09index := index + 1.\x0a                                                \x09\x09                    \x09\x09\x09\x09html option\x0a                                                                \x09\x09    \x09\x09\x09\x09\x09value: index;\x0a                                                            \x09\x09\x09\x09\x09\x09\x09\x09with: aSlide title ] ].",
messageSends: ["contents:", "slidesDo:", "currentPresentation", "+", "value:", "option", "with:", "title"],
referencedClasses: []
}),
globals.PresentationNavigator);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.PresentationNavigator.klass)})},
args: [],
source: "initialize\x0a\x09^ self open",
messageSends: ["open"],
referencedClasses: []
}),
globals.PresentationNavigator.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},globals.PresentationNavigator.klass)})},
args: [],
source: "open\x0a\x09^ self new open",
messageSends: ["open", "new"],
referencedClasses: []
}),
globals.PresentationNavigator.klass);


smalltalk.addClass('Slide', globals.Widget, ['presentation'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#555";
},
args: [],
source: "backgroundColor\x0a\x09^'#555'",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide";
},
args: [],
source: "cssClass\x0a\x09^'slide'",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},globals.Slide)})},
args: [],
source: "id\x0a\x09^ self class name",
messageSends: ["name", "class"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "presentation",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@presentation"];
return $1;
},
args: [],
source: "presentation\x0a\x09^presentation",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "presentation:",
protocol: 'accessing',
fn: function (aPresentation){
var self=this;
self["@presentation"]=aPresentation;
return self},
args: ["aPresentation"],
source: "presentation: aPresentation\x0a\x09presentation := aPresentation",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMetaOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$7,$6,$4,$8,$10,$12,$11,$9,$13,$14,$16,$15,$18,$21,$20,$19,$17,$22,$23,$25,$24,$26,$2;
$1=_st(html)._div();
_st($1)._id_("meta");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._p();
$ctx2.sendIdx["p"]=1;
_st($3)._class_("title");
$ctx2.sendIdx["class:"]=1;
$5=$3;
$7=self._presentation();
$ctx2.sendIdx["presentation"]=1;
$6=_st($7)._title();
$4=_st($5)._with_($6);
$ctx2.sendIdx["with:"]=2;
$4;
$8=_st(html)._p();
_st($8)._class_("description");
$ctx2.sendIdx["class:"]=2;
$10=$8;
$12=self._presentation();
$ctx2.sendIdx["presentation"]=2;
$11=_st($12)._description();
$9=_st($10)._with_($11);
$ctx2.sendIdx["with:"]=3;
$9;
$13=_st(html)._a();
$ctx2.sendIdx["a"]=1;
_st($13)._class_("author");
$ctx2.sendIdx["class:"]=3;
$14=$13;
$16=self._presentation();
$ctx2.sendIdx["presentation"]=3;
$15=_st($16)._author();
_st($14)._with_($15);
$ctx2.sendIdx["with:"]=4;
$18=$13;
$21=self._presentation();
$ctx2.sendIdx["presentation"]=4;
$20=_st($21)._email();
$19="mailto:".__comma($20);
$17=_st($18)._href_($19);
$ctx2.sendIdx["href:"]=1;
$17;
$22=_st(html)._a();
_st($22)._class_("url");
$23=$22;
$25=self._presentation();
$ctx2.sendIdx["presentation"]=5;
$24=_st($25)._url();
$ctx2.sendIdx["url"]=1;
_st($23)._with_($24);
$26=_st($22)._href_(_st(self._presentation())._url());
return $26;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderMetaOn:",{html:html},globals.Slide)})},
args: ["html"],
source: "renderMetaOn: html\x0a\x09html div \x0a\x09\x09id: 'meta';\x0a\x09\x09with: [\x0a\x09\x09\x09html p class: 'title'; with: self presentation title.\x0a\x09\x09\x09html p class: 'description'; with: self presentation description.\x0a\x09\x09\x09html a class: 'author'; with: self presentation author; href: 'mailto:', self presentation email.\x0a\x09\x09\x09html a class: 'url'; with: self presentation url; href: self presentation url]",
messageSends: ["id:", "div", "with:", "class:", "p", "title", "presentation", "description", "a", "author", "href:", ",", "email", "url"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_(self._cssClass());
_st($1)._id_(self._id());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderSlideOn_(html);
return self._renderMetaOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Slide)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div class: self cssClass; id: self id; with: [\x0a\x09\x09self renderSlideOn: html.\x0a\x09\x09self renderMetaOn: html]",
messageSends: ["class:", "div", "cssClass", "id:", "id", "with:", "renderSlideOn:", "renderMetaOn:"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderSlideOn: html",
messageSends: [],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4,$receiver;
$1=self._backgroundColor();
$ctx1.sendIdx["backgroundColor"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=_st(window)._jQuery_("#slides");
$ctx1.sendIdx["jQuery:"]=1;
_st($2)._css_color_("background",self._backgroundColor());
};
$3=_st(window)._jQuery_(".slide");
$ctx1.sendIdx["jQuery:"]=2;
$5=self._presentation();
$ctx1.sendIdx["presentation"]=1;
$4=_st($5)._slideTransition();
$ctx1.sendIdx["slideTransition"]=1;
_st($3)._hide_options_duration_($4,[],(300));
_st(_st(window)._jQuery_("#".__comma(self._id())))._show_options_duration_(_st(self._presentation())._slideTransition(),[],(300));
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.Slide)})},
args: [],
source: "show\x0a\x09self backgroundColor ifNotNil: [\x0a\x09\x09(window jQuery: '#slides') css: 'background' color: self backgroundColor].\x0a\x09(window jQuery: '.slide') hide: self presentation slideTransition options: #() duration: 300.\x0a\x09(window jQuery: '#', self id) show: self presentation slideTransition options: #() duration: 300.",
messageSends: ["ifNotNil:", "backgroundColor", "css:color:", "jQuery:", "hide:options:duration:", "slideTransition", "presentation", "show:options:duration:", ",", "id"],
referencedClasses: []
}),
globals.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._id();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},globals.Slide)})},
args: [],
source: "title\x0a\x09^ self id",
messageSends: ["id"],
referencedClasses: []
}),
globals.Slide);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aPresentation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._presentation_(aPresentation);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aPresentation:aPresentation},globals.Slide.klass)})},
args: ["aPresentation"],
source: "on: aPresentation\x0a\x09^self new\x0a\x09\x09presentation: aPresentation;\x0a\x09\x09yourself",
messageSends: ["presentation:", "new", "yourself"],
referencedClasses: []
}),
globals.Slide.klass);


smalltalk.addClass('AboutSlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "white";
},
args: [],
source: "backgroundColor\x0a\x09^'white'",
messageSends: [],
referencedClasses: []
}),
globals.AboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide transparent white";
},
args: [],
source: "cssClass\x0a\x09^'slide transparent white'",
messageSends: [],
referencedClasses: []
}),
globals.AboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "about";
},
args: [],
source: "id\x0a\x09^'about'",
messageSends: [],
referencedClasses: []
}),
globals.AboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Browser(){return globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $Presentation(){return globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("About this presentation");
$ctx2.sendIdx["with:"]=2;
$3=_st(html)._p();
$ctx2.sendIdx["p"]=1;
_st($3)._with_("This presentation is entirely written in Jtalk and is licensed under CC BY-SA.");
$ctx2.sendIdx["with:"]=3;
$4=_st(html)._p();
$ctx2.sendIdx["p"]=2;
_st($4)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Press ");
$ctx3.sendIdx["with:"]=5;
$5=_st(html)._code();
$ctx3.sendIdx["code"]=1;
_st($5)._with_("←");
$ctx3.sendIdx["with:"]=6;
_st(html)._with_(" to move backward and ");
$ctx3.sendIdx["with:"]=7;
_st(_st(html)._code())._with_(" →");
$ctx3.sendIdx["with:"]=8;
return _st(html)._with_(" to move forward.");
$ctx3.sendIdx["with:"]=9;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=4;
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Open a ");
$ctx3.sendIdx["with:"]=11;
$6=_st(html)._button();
_st($6)._with_("browser");
$ctx3.sendIdx["with:"]=12;
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st($Browser())._openOn_($Presentation());
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$7;
return _st(html)._with_(" to edit the source code.");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.AboutSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'About this presentation'.\x0a\x09\x09html p with: 'This presentation is entirely written in Jtalk and is licensed under CC BY-SA.'.\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Press '.\x0a\x09\x09\x09html code with: '←'.\x0a\x09\x09\x09html with: ' to move backward and '.\x0a\x09\x09\x09html code with: ' →'.\x0a\x09\x09\x09html with: ' to move forward.'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Open a '.\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09with: 'browser';\x0a\x09\x09\x09\x09onClick: [Browser openOn: Presentation].\x0a\x09\x09\x09html with: ' to edit the source code.']]",
messageSends: ["class:", "div", "with:", "h1", "p", "code", "button", "onClick:", "openOn:"],
referencedClasses: ["Browser", "Presentation"]
}),
globals.AboutSlide);



smalltalk.addClass('ContributionsSlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "links";
},
args: [],
source: "id\x0a\x09^'links'",
messageSends: [],
referencedClasses: []
}),
globals.ContributionsSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
$1=_st(html)._div();
_st($1)._class_("section");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._p();
$ctx2.sendIdx["p"]=1;
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._a();
$ctx3.sendIdx["a"]=1;
_st($4)._href_("http://jtalk-project.org");
$ctx3.sendIdx["href:"]=1;
$5=_st($4)._with_("jtalk-project.org");
$ctx3.sendIdx["with:"]=3;
return $5;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$6=_st(html)._p();
$ctx2.sendIdx["p"]=2;
_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._a();
$ctx3.sendIdx["a"]=2;
_st($7)._href_("https://github.com/NicolasPetton/jtalk");
$ctx3.sendIdx["href:"]=2;
$8=_st($7)._with_("github.com/NicolasPetton/jtalk");
$ctx3.sendIdx["with:"]=5;
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=4;
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$9=_st(html)._a();
_st($9)._href_("http://http://groups.google.com/group/jtalk-project");
$10=_st($9)._with_("groups.google.com/group/jtalk-project");
return $10;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.ContributionsSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section'; with: [\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://jtalk-project.org'; with: 'jtalk-project.org'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'https://github.com/NicolasPetton/jtalk'; with: 'github.com/NicolasPetton/jtalk'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://http://groups.google.com/group/jtalk-project'; with: 'groups.google.com/group/jtalk-project']]",
messageSends: ["class:", "div", "with:", "p", "href:", "a"],
referencedClasses: []
}),
globals.ContributionsSlide);



smalltalk.addClass('CountersSlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#18bd7d";
},
args: [],
source: "backgroundColor\x0a\x09^'#18bd7d'",
messageSends: [],
referencedClasses: []
}),
globals.CountersSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "counters";
},
args: [],
source: "id\x0a\x09^'counters'",
messageSends: [],
referencedClasses: []
}),
globals.CountersSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Counter(){return globals.Counter||(typeof Counter=="undefined"?nil:Counter)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("The counter example");
$ctx2.sendIdx["with:"]=2;
return _st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return (2)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st($Counter())._new())._renderOn_(html);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.CountersSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'The counter example'.\x0a\x09\x09html div with: [\x0a\x09\x09\x092 timesRepeat: [Counter new renderOn: html]]]",
messageSends: ["class:", "div", "with:", "h1", "timesRepeat:", "renderOn:", "new"],
referencedClasses: ["Counter"]
}),
globals.CountersSlide);



smalltalk.addClass('FOSDEMSlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},globals.FOSDEMSlide)})},
args: [],
source: "codeSnippet\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.FOSDEMSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCodeSnippetOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SourceArea())._new();
_st($1)._renderOn_(html);
$2=_st($1)._editor();
_st($2)._setValue_(self._codeSnippet());
return self}, function($ctx1) {$ctx1.fill(self,"renderCodeSnippetOn:",{html:html},globals.FOSDEMSlide)})},
args: ["html"],
source: "renderCodeSnippetOn: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: self codeSnippet.",
messageSends: ["setValue:", "renderOn:", "new", "editor", "codeSnippet"],
referencedClasses: ["SourceArea"]
}),
globals.FOSDEMSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSnippet:on:",
protocol: 'rendering',
fn: function (aString,html){
var self=this;
function $SourceArea(){return globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SourceArea())._new();
_st($1)._renderOn_(html);
$2=_st($1)._editor();
_st($2)._setValue_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"renderSnippet:on:",{aString:aString,html:html},globals.FOSDEMSlide)})},
args: ["aString", "html"],
source: "renderSnippet: aString on: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: aString.",
messageSends: ["setValue:", "renderOn:", "new", "editor"],
referencedClasses: ["SourceArea"]
}),
globals.FOSDEMSlide);



smalltalk.addClass('FOSDEMAmberBackend', globals.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide green3d";
},
args: [],
source: "cssClass\x0a\x09^ 'slide green3d'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMAmberBackend);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._h1_("Need a backend ?");
return _st(["nodejs.png","php.gif","rails.png","pharo.png","ambrhino.jpg"])._do_((function(aString){
return smalltalk.withContext(function($ctx3) {
return _st(html)._img_("fosdem2012/images/".__comma(aString));
}, function($ctx3) {$ctx3.fillBlock({aString:aString},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMAmberBackend)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div\x0a\x09\x09class: 'section center';\x0a\x09\x09with: [\x09html h1: 'Need a backend ?'.\x0a\x09\x09\x09\x09{'nodejs.png'. 'php.gif'. 'rails.png'.   'pharo.png'. 'ambrhino.jpg'} do: [:aString |\x0a\x09\x09\x09\x09\x09\x09html img: 'fosdem2012/images/', aString.\x0a\x09\x09\x09\x09]\x0a\x09\x09]",
messageSends: ["class:", "div", "with:", "h1:", "do:", "img:", ","],
referencedClasses: []
}),
globals.FOSDEMAmberBackend);



smalltalk.addClass('FOSDEMAmberZeroNine', globals.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._h1_("Amber 0.9.1 is out !");
_st(html)._div_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._cite();
$ctx3.sendIdx["cite"]=1;
return _st($3)._with_("Now with over 43 forks on github and more than 230 followers the project:  http://www.amber-lang.net  ...is live and kicking!");
$ctx3.sendIdx["with:"]=2;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["div:"]=1;
$4=_st(html)._div_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._cite())._with_("-- Nicolas & Göran");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMAmberZeroNine)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div \x0a\x09\x09class: 'section center';\x0a\x09\x09with: [ \x09html \x0a\x09\x09\x09\x09\x09h1: 'Amber 0.9.1 is out !';\x0a\x09\x09\x09\x09\x09div: [html cite with: 'Now with over 43 forks on github and more than 230 followers the project:  http://www.amber-lang.net  ...is live and kicking!'];\x0a\x09\x09\x09\x09\x09div: [html cite with: '-- Nicolas & Göran'] ]",
messageSends: ["class:", "div", "with:", "h1:", "div:", "cite"],
referencedClasses: []
}),
globals.FOSDEMAmberZeroNine);



smalltalk.addClass('FOSDEMBookletSlide', globals.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "bookletOptions",
protocol: 'rendering',
fn: function (){
var self=this;
var $1;
$1=globals.HashedCollection._newFromPairs_(["arrows",true,"keyboard",false,"pageNumbers",false,"closed",true]);
return $1;
},
args: [],
source: "bookletOptions\x0a\x09^ #{ \x0a\x09\x09'arrows' -> true.\x0a\x09\x09'keyboard' -> false.\x0a\x09\x09'pageNumbers' -> false.\x0a\x09\x09'closed' -> true\x0a\x09}",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";
},
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBookOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Browser(){return globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $FOSDEMBookletSlide(){return globals.FOSDEMBookletSlide||(typeof FOSDEMBookletSlide=="undefined"?nil:FOSDEMBookletSlide)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$6,$7,$5,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._id_("book");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("b-load");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._div_("Amber makes it easy to plug existing javascript libraires");
$ctx3.sendIdx["div:"]=1;
_st(html)._div_("Here is an example with the jQuery Booklet plugin");
$ctx3.sendIdx["div:"]=2;
_st(html)._div_("Want to see how ?");
$ctx3.sendIdx["div:"]=3;
$5=_st(html)._div_((function(){
return smalltalk.withContext(function($ctx4) {
$6=_st(html)._button();
_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st($Browser())._openOn_($FOSDEMBookletSlide());
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
$7=_st($6)._with_("Just browse the code :)");
return $7;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
return $5;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderBookOn:",{html:html},globals.FOSDEMBookletSlide)})},
args: ["html"],
source: "renderBookOn: html\x0a\x09html div \x0a\x09\x09id: 'book';\x0a\x09\x09with: [\x09html div\x0a\x09\x09\x09\x09\x09class: 'b-load';\x0a\x09\x09\x09\x09\x09with: [\x09html \x0a\x09\x09\x09\x09\x09\x09\x09\x09div: 'Amber makes it easy to plug existing javascript libraires';\x0a\x09\x09\x09\x09\x09\x09\x09\x09div: 'Here is an example with the jQuery Booklet plugin';\x0a\x09\x09\x09\x09\x09\x09\x09\x09div: 'Want to see how ?';\x0a\x09\x09\x09\x09\x09\x09\x09\x09div: [ html button\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09onClick: [Browser openOn: FOSDEMBookletSlide ];\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09with: 'Just browse the code :)'.\x09\x09\x09\x09\x09\x09] \x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09]\x09\x0a\x09\x09].",
messageSends: ["id:", "div", "with:", "class:", "div:", "onClick:", "button", "openOn:"],
referencedClasses: ["Browser", "FOSDEMBookletSlide"]
}),
globals.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._renderBookOn_(html);
$1=_st(html)._link();
_st($1)._rel_("stylesheet");
$2=_st($1)._href_("fosdem2012/lib/booklet/jquery.booklet.1.2.0.css");
_st(html)._style_(self._style());
_st(jQuery)._getScript_do_("fosdem2012/lib/booklet/jquery.booklet.1.2.0.min.js",(function(){
return smalltalk.withContext(function($ctx2) {
return _st("#book"._asJQuery())._booklet_(self._bookletOptions());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMBookletSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09self renderBookOn: html.\x0a\x09html link \x0a\x09\x09rel:'stylesheet';\x0a\x09\x09href: 'fosdem2012/lib/booklet/jquery.booklet.1.2.0.css'.\x0a\x09\x0a\x09html style: self style.\x0a\x09\x0a\x09jQuery \x0a\x09\x09getScript: 'fosdem2012/lib/booklet/jquery.booklet.1.2.0.min.js' \x09\x0a\x09\x09do: ['#book' asJQuery booklet: self bookletOptions].",
messageSends: ["renderBookOn:", "rel:", "link", "href:", "style:", "style", "getScript:do:", "booklet:", "asJQuery", "bookletOptions"],
referencedClasses: []
}),
globals.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
protocol: 'css',
fn: function (){
var self=this;
return "\x0d\x0a#book { font-size: 1.4em; }\x0d\x0a#book .b-load .b-wrap-right { background-color: #DEC3A9;}\x0d\x0a#book .b-load .b-wrap-left { background-color: #DDD;} \x0d\x0a";
},
args: [],
source: "style\x0a\x09^ '\x0a#book { font-size: 1.4em; }\x0a#book .b-load .b-wrap-right { background-color: #DEC3A9;}\x0a#book .b-load .b-wrap-left { background-color: #DDD;} \x0a'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMBookletSlide);



smalltalk.addClass('FOSDEMCLISlide', globals.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
protocol: 'rendering',
fn: function (){
var self=this;
return "cd examples/nodejs/hello\x0d\x0a../../../bin/amberc -m Hello Hello.st Program\x0d\x0anode Program.js\x0d\x0a\x0d\x0aHello world from Amber in Node.js";
},
args: [],
source: "codeSnippet\x0a\x09^ \x0a'cd examples/nodejs/hello\x0a../../../bin/amberc -m Hello Hello.st Program\x0anode Program.js\x0a\x0aHello world from Amber in Node.js'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMCLISlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h1_("CLI");
_st(html)._with_("amberc compiles .st files into node programs !");
self._renderCodeSnippetOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMCLISlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'CLI'.\x0a\x09html with:  'amberc compiles .st files into node programs !'.\x0a\x09self renderCodeSnippetOn: html.",
messageSends: ["h1:", "with:", "renderCodeSnippetOn:"],
referencedClasses: []
}),
globals.FOSDEMCLISlide);



smalltalk.addClass('FOSDEMCanvasSlide', globals.FOSDEMSlide, ['c2d', 'canvas'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide red3d";
},
args: [],
source: "cssClass\x0a\x09^ 'slide red3d'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMCanvasSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOnCanvas",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$7,$8,$9,$11,$10,$6,$12,$13,$14,$15,$16,$17;
$1=_st(self["@canvas"])._element();
$ctx1.sendIdx["element"]=1;
self["@c2d"]=_st($1)._getContext_("2d");
$2=self["@c2d"];
$4=_st(self["@canvas"])._element();
$ctx1.sendIdx["element"]=2;
$3=_st($4)._width();
_st($2)._clearRect_y_width_height_((0),(0),$3,_st(_st(self["@canvas"])._element())._height());
$5=(40)._atRandom();
$ctx1.sendIdx["atRandom"]=1;
_st($5)._timesRepeat_((function(){
var rgba;
return smalltalk.withContext(function($ctx2) {
$7=(255)._atRandom();
$ctx2.sendIdx["atRandom"]=2;
$8=(255)._atRandom();
$ctx2.sendIdx["atRandom"]=3;
$9=(255)._atRandom();
$ctx2.sendIdx["atRandom"]=4;
$11=(10)._atRandom();
$ctx2.sendIdx["atRandom"]=5;
$10=_st($11).__slash((10));
$6=[$7,$8,$9,$10];
rgba=","._join_($6);
rgba;
$12=self["@c2d"];
$13=_st("rgba(".__comma(rgba)).__comma(")");
$ctx2.sendIdx[","]=1;
_st($12)._at_put_("fillStyle",$13);
$14=self["@c2d"];
$15=(600)._atRandom();
$ctx2.sendIdx["atRandom"]=6;
$16=(300)._atRandom();
$ctx2.sendIdx["atRandom"]=7;
$17=(200)._atRandom();
$ctx2.sendIdx["atRandom"]=8;
return _st($14)._fillRect_y_width_height_($15,$16,$17,(200)._atRandom());
}, function($ctx2) {$ctx2.fillBlock({rgba:rgba},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOnCanvas",{},globals.FOSDEMCanvasSlide)})},
args: [],
source: "drawOnCanvas\x0a\x09c2d := canvas element getContext: '2d'.\x0a\x09c2d \x0a\x09\x09clearRect: 0 \x0a\x09\x09y: 0 \x0a\x09\x09width: canvas element width \x0a\x09\x09height: canvas element height.\x0a\x09\x0a\x0940 atRandom timesRepeat: [ |rgba|\x0a\x09\x09\x09rgba := ',' join: {255 atRandom. 255 atRandom. 255 atRandom. 10 atRandom / 10}.\x0a\x09\x09\x09c2d\x09at: 'fillStyle' put: 'rgba(', rgba, ')'.\x0a\x09\x09\x09c2d\x0a\x09\x09\x09\x09fillRect: 600 atRandom \x0a\x09\x09\x09\x09y: 300 atRandom \x0a\x09\x09\x09\x09width: 200 atRandom \x0a\x09\x09\x09\x09height: 200 atRandom ]",
messageSends: ["getContext:", "element", "clearRect:y:width:height:", "width", "height", "timesRepeat:", "atRandom", "join:", "/", "at:put:", ",", "fillRect:y:width:height:"],
referencedClasses: []
}),
globals.FOSDEMCanvasSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(html)._h1_("Playing with canvas");
$1=_st(html)._canvas();
_st($1)._width_((700));
$2=_st($1)._height_((400));
self["@canvas"]=$2;
self._updateCanvas();
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMCanvasSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'Playing with canvas'.\x0a\x09canvas := html  canvas \x0a\x09\x09\x09\x09width: 700;\x0a\x09\x09\x09\x09height: 400.\x0a\x0a\x09self updateCanvas.",
messageSends: ["h1:", "width:", "canvas", "height:", "updateCanvas"],
referencedClasses: []
}),
globals.FOSDEMCanvasSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCanvas",
protocol: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._drawOnCanvas();
_st(window)._setTimeout_delay_((function(){
return smalltalk.withContext(function($ctx2) {
return self._updateCanvas();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),(500));
return self}, function($ctx1) {$ctx1.fill(self,"updateCanvas",{},globals.FOSDEMCanvasSlide)})},
args: [],
source: "updateCanvas\x0a\x09self drawOnCanvas.\x0a\x09window setTimeout: [self updateCanvas] delay: 500.",
messageSends: ["drawOnCanvas", "setTimeout:delay:", "updateCanvas"],
referencedClasses: []
}),
globals.FOSDEMCanvasSlide);



smalltalk.addClass('FOSDEMContributionsSlide', globals.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$2;
$1=_st(html)._div();
_st($1)._class_("section");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._p();
$ctx2.sendIdx["p"]=1;
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._a();
$ctx3.sendIdx["a"]=1;
_st($4)._href_("/documentation.html");
$ctx3.sendIdx["href:"]=1;
$5=_st($4)._with_("Documentation");
$ctx3.sendIdx["with:"]=3;
return $5;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$6=_st(html)._p();
$ctx2.sendIdx["p"]=2;
_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._a();
$ctx3.sendIdx["a"]=2;
_st($7)._href_("http://amber-lang.net");
$ctx3.sendIdx["href:"]=2;
$8=_st($7)._with_("amber-lang.net");
$ctx3.sendIdx["with:"]=5;
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=4;
$9=_st(html)._p();
$ctx2.sendIdx["p"]=3;
_st($9)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$10=_st(html)._a();
$ctx3.sendIdx["a"]=3;
_st($10)._href_("https://github.com/amber-smalltalk/amber");
$ctx3.sendIdx["href:"]=3;
$11=_st($10)._with_("github.com/amber-smalltalk/amber");
$ctx3.sendIdx["with:"]=7;
return $11;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=6;
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$12=_st(html)._a();
_st($12)._href_("http://groups.google.com/group/amber-lang");
$13=_st($12)._with_("groups.google.com/group/amber-lang");
return $13;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
$ctx2.sendIdx["with:"]=8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMContributionsSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section'; with: [\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: '/documentation.html'; with: 'Documentation'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://amber-lang.net'; with: 'amber-lang.net'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'https://github.com/amber-smalltalk/amber'; with: 'github.com/amber-smalltalk/amber'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://groups.google.com/group/amber-lang'; with: 'groups.google.com/group/amber-lang']]",
messageSends: ["class:", "div", "with:", "p", "href:", "a"],
referencedClasses: []
}),
globals.FOSDEMContributionsSlide);



smalltalk.addClass('FOSDEMIntroSlide', globals.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$6,$5,$2;
$1=_st(html)._div();
_st($1)._class_("section center animate");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._img())._src_("fosdem2012/images/amber.png");
$4=self._presentation();
$ctx2.sendIdx["presentation"]=1;
$3=_st($4)._author();
_st(html)._p_($3);
$ctx2.sendIdx["p:"]=1;
$6=self._presentation();
$ctx2.sendIdx["presentation"]=2;
$5=_st($6)._description();
_st(html)._p_($5);
$ctx2.sendIdx["p:"]=2;
return _st(html)._p_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(html)._with_(_st(self._presentation())._email());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMIntroSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center animate'; with: [\x0a\x09\x09html img src: 'fosdem2012/images/amber.png'.\x0a\x09\x09html p: self presentation author.\x0a          \x09html p: self presentation description.\x0a\x09\x09html p: [\x0a\x09\x09\x09html with: self presentation email]].",
messageSends: ["class:", "div", "with:", "src:", "img", "p:", "author", "presentation", "description", "email"],
referencedClasses: []
}),
globals.FOSDEMIntroSlide);



smalltalk.addClass('FOSDEMJSPlayGroundSlide', globals.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
protocol: 'accessing',
fn: function (){
var self=this;
return "|logo|\x0d\x0alogo:='img#amberlogo' asJQuery.\x0d\x0a\x0d\x0alogo\x0d\x0a  css:'-webkit-transition' put:'all 10s ease-in-out'.\x0d\x0a\x0d\x0a<logo.css('-webkit-transform', 'rotateY(360deg)');>.\x0d\x0a\x0d\x0alogo click: [window alert: 'This is cool !'].\x0d\x0a\x0d\x0alogo inspect";
},
args: [],
source: "codeSnippet\x0a^'|logo|\x0alogo:=''img#amberlogo'' asJQuery.\x0a\x0alogo\x0a  css:''-webkit-transition'' put:''all 10s ease-in-out''.\x0a\x0a<logo.css(''-webkit-transform'', ''rotateY(360deg)'');>.\x0a\x0alogo click: [window alert: ''This is cool !''].\x0a\x0alogo inspect'.",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMJSPlayGroundSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderCodeSnippetOn_(html);
$3=_st(html)._img();
_st($3)._id_("amberlogo");
$4=_st($3)._src_("fosdem2012/images/amber.png");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMJSPlayGroundSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div\x0a\x09\x09class: 'section center'; \x0a\x09\x09with: [\x0a\x09\x09\x09self renderCodeSnippetOn: html.\x0a\x09\x09\x09html img\x0a\x09\x09\x09\x09id: 'amberlogo'; \x0a\x09\x09\x09\x09src: 'fosdem2012/images/amber.png'\x09]",
messageSends: ["class:", "div", "with:", "renderCodeSnippetOn:", "id:", "img", "src:"],
referencedClasses: []
}),
globals.FOSDEMJSPlayGroundSlide);



smalltalk.addClass('FOSDEMJSToSmalltalk', globals.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
protocol: 'accessing',
fn: function (){
var self=this;
return "var counter = window.smalltalk.Counter._new();\x0d\x0acounter._appendToJQuery_($('#jsToSmalltalk'));";
},
args: [],
source: "codeSnippet\x0a\x09^\x0a'var counter = window.smalltalk.Counter._new();\x0acounter._appendToJQuery_($(''#jsToSmalltalk''));'.",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMJSToSmalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";
},
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMJSToSmalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(html)._h1_("Call Smalltalk from Javascript");
$1=_st(html)._div();
_st($1)._id_("jsToSmalltalk");
$2=_st($1)._style_("float: left");
self._renderCodeSnippetOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMJSToSmalltalk)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'Call Smalltalk from Javascript'.\x0a\x09html div\x0a\x09\x09id: 'jsToSmalltalk';\x0a\x09\x09style: 'float: left'.\x0a\x09self renderCodeSnippetOn: html.",
messageSends: ["h1:", "id:", "div", "style:", "renderCodeSnippetOn:"],
referencedClasses: []
}),
globals.FOSDEMJSToSmalltalk);



smalltalk.addClass('FOSDEMREPLSlide', globals.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
protocol: 'rendering',
fn: function (){
var self=this;
return "./bin/amber\x0d\x0afs := require value: 'fs'.\x0d\x0afs readdir: '/tmp' do: [:err :file| console log: file]";
},
args: [],
source: "codeSnippet\x0a\x09^ \x0a'./bin/amber\x0afs := require value: ''fs''.\x0afs readdir: ''/tmp'' do: [:err :file| console log: file]'.",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMREPLSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h1_("REPL");
self._renderCodeSnippetOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMREPLSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'REPL'.\x0a\x09self renderCodeSnippetOn: html.",
messageSends: ["h1:", "renderCodeSnippetOn:"],
referencedClasses: []
}),
globals.FOSDEMREPLSlide);



smalltalk.addClass('FOSDEMTwitter', globals.FOSDEMSlide, ['twitterDiv'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide black";
},
args: [],
source: "cssClass\x0a\x09^ 'slide black'",
messageSends: [],
referencedClasses: []
}),
globals.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "loadTweets",
protocol: 'callback',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_("http://search.twitter.com/search.json?rpp=3&q=%40AmberSmalltalk",globals.HashedCollection._newFromPairs_(["type","GET","success",(function(json){
return smalltalk.withContext(function($ctx2) {
return self._renderTweets_(_st(json)._results());
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,1)})}),"dataType","jsonp"]));
return self}, function($ctx1) {$ctx1.fill(self,"loadTweets",{},globals.FOSDEMTwitter)})},
args: [],
source: "loadTweets\x0a\x09jQuery \x0a\x09\x09ajax: 'http://search.twitter.com/search.json?rpp=3&q=%40AmberSmalltalk'\x0a\x09\x09options: #{\x0a\x09\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09\x09'success' -> [ :json | self renderTweets: (json results)].\x0a\x09\x09\x09\x09'dataType' -> 'jsonp'\x0a\x09\x09\x09}.",
messageSends: ["ajax:options:", "renderTweets:", "results"],
referencedClasses: []
}),
globals.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._loadTweets();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._with_("What about @AmberSmalltalk on Twitter ?");
self["@twitterDiv"]=_st(html)._div();
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.FOSDEMTwitter)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html button\x0a\x09\x09onClick: [self loadTweets];\x0a\x09\x09with: 'What about @AmberSmalltalk on Twitter ?'.\x0a\x09twitterDiv := html div.",
messageSends: ["onClick:", "button", "loadTweets", "with:", "div"],
referencedClasses: []
}),
globals.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTweet:on:",
protocol: 'rendering',
fn: function (tweet,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("tweet");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(tweet)._at_("created_at");
$ctx2.sendIdx["at:"]=1;
_st(html)._span_($3);
$ctx2.sendIdx["span:"]=1;
$4=_st(tweet)._at_("profile_image_url");
$ctx2.sendIdx["at:"]=2;
_st(html)._img_($4);
$5=_st(tweet)._at_("from_user");
$ctx2.sendIdx["at:"]=3;
_st(html)._span_($5);
$6=_st(html)._div_(_st(tweet)._at_("text"));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTweet:on:",{tweet:tweet,html:html},globals.FOSDEMTwitter)})},
args: ["tweet", "html"],
source: "renderTweet: tweet on: html\x0a\x09html div \x0a\x09\x09class: 'tweet';\x0a\x09\x09with: [\x0a\x09\x09\x09html \x0a\x09\x09\x09\x09span: (tweet at: 'created_at');\x0a\x09\x09\x09\x09img: (tweet at: 'profile_image_url');\x0a\x09\x09\x09\x09span: (tweet at: 'from_user');\x0a\x09\x09\x09\x09div: (tweet at: 'text'). \x0a\x09\x09]",
messageSends: ["class:", "div", "with:", "span:", "at:", "img:", "div:"],
referencedClasses: []
}),
globals.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTweets:",
protocol: 'rendering',
fn: function (tweets){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@twitterDiv"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(tweets)._do_((function(tweet){
return smalltalk.withContext(function($ctx3) {
return self._renderTweet_on_(tweet,html);
}, function($ctx3) {$ctx3.fillBlock({tweet:tweet},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTweets:",{tweets:tweets},globals.FOSDEMTwitter)})},
args: ["tweets"],
source: "renderTweets: tweets\x0a\x09twitterDiv contents: [\x09:html|\x0a\x09\x09\x09\x09\x09\x09tweets do: [\x09:tweet|  \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderTweet: tweet on: html] ]",
messageSends: ["contents:", "do:", "renderTweet:on:"],
referencedClasses: []
}),
globals.FOSDEMTwitter);



smalltalk.addClass('IDESlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "black";
},
args: [],
source: "backgroundColor\x0a\x09^'black'",
messageSends: [],
referencedClasses: []
}),
globals.IDESlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide transparent";
},
args: [],
source: "cssClass\x0a\x09^'slide transparent'",
messageSends: [],
referencedClasses: []
}),
globals.IDESlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "ide";
},
args: [],
source: "id\x0a\x09^'ide'",
messageSends: [],
referencedClasses: []
}),
globals.IDESlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderSlideOn: html\x0a\x22\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 \x0a\x09\x09\x09with: 'The wonderful Jtalk ';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09with: 'development tools';\x0a\x09\x09\x09\x09\x09onClick: [TabManager current open]];\x0a\x09\x09\x09with: '.']\x0a\x22",
messageSends: [],
referencedClasses: []
}),
globals.IDESlide);



smalltalk.addClass('IntroSlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide black";
},
args: [],
source: "cssClass\x0a\x09^'slide black'",
messageSends: [],
referencedClasses: []
}),
globals.IntroSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "intro";
},
args: [],
source: "id\x0a\x09^'intro'",
messageSends: [],
referencedClasses: []
}),
globals.IntroSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$7,$6,$5,$9,$8,$4,$10,$11,$12,$14,$13,$15,$16,$17,$18,$19,$20,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Jtalk, the Smalltalk for Web developers");
$ctx2.sendIdx["with:"]=2;
$3=_st(html)._p();
$ctx2.sendIdx["p"]=1;
$7=self._presentation();
$ctx2.sendIdx["presentation"]=1;
$6=_st($7)._author();
$5=_st($6).__comma(" & Göran Krampe - ");
$ctx2.sendIdx[","]=2;
$9=self._presentation();
$ctx2.sendIdx["presentation"]=2;
$8=_st($9)._description();
$4=_st($5).__comma($8);
$ctx2.sendIdx[","]=1;
_st($3)._with_($4);
$ctx2.sendIdx["with:"]=3;
$10=_st(html)._p();
$ctx2.sendIdx["p"]=2;
_st($10)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$11=_st(html)._a();
$ctx3.sendIdx["a"]=1;
$12=$11;
$14=self._presentation();
$ctx3.sendIdx["presentation"]=3;
$13=_st($14)._email();
$ctx3.sendIdx["email"]=1;
_st($12)._with_($13);
$ctx3.sendIdx["with:"]=5;
$15=_st($11)._href_("mailto:".__comma(_st(self._presentation())._email()));
$ctx3.sendIdx["href:"]=1;
return $15;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=4;
$16=_st(html)._p();
$ctx2.sendIdx["p"]=3;
_st($16)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$17=_st(html)._a();
$ctx3.sendIdx["a"]=2;
_st($17)._with_("goran@krampe.se");
$ctx3.sendIdx["with:"]=7;
$18=_st($17)._href_("mailto:goran@krampe.se");
$ctx3.sendIdx["href:"]=2;
return $18;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=6;
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$19=_st(html)._a();
_st($19)._with_("objectfusion.fr");
$20=_st($19)._href_("http://www.objectfusion.fr");
return $20;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.IntroSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Jtalk, the Smalltalk for Web developers'.\x0a\x09\x09html p with: self presentation author, ' & Göran Krampe - ', self presentation description.\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: self presentation email;\x0a\x09\x09\x09\x09href: 'mailto:', self presentation email].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: 'goran@krampe.se';\x0a\x09\x09\x09\x09href: 'mailto:goran@krampe.se'].\x0a\x09\x09\x0a          \x09html p with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: 'objectfusion.fr';\x0a\x09\x09\x09\x09href: 'http://www.objectfusion.fr']]",
messageSends: ["class:", "div", "with:", "h1", "p", ",", "author", "presentation", "description", "a", "email", "href:"],
referencedClasses: []
}),
globals.IntroSlide);



smalltalk.addClass('JtalkAndCLI', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";
},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndCLI);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndCLI";
},
args: [],
source: "id\x0a\x09^'JtalkAndCLI'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndCLI);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$ctx2.sendIdx["with:"]=2;
$1=_st(html)._span();
_st($1)._class_("blue");
$2=_st($1)._with_("the command line");
$ctx2.sendIdx["with:"]=3;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._h2())._with_("jtalkc - a fairly elaborate bash script that:");
$ctx1.sendIdx["with:"]=4;
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._li();
$ctx2.sendIdx["li"]=1;
_st($3)._with_("Uses Node.js to run the Jtalk Compiler");
$ctx2.sendIdx["with:"]=6;
$4=_st(html)._li();
$ctx2.sendIdx["li"]=2;
_st($4)._with_("Compiles .st files to .js");
$ctx2.sendIdx["with:"]=7;
$5=_st(html)._li();
$ctx2.sendIdx["li"]=3;
_st($5)._with_("Links .js files into a single one");
$ctx2.sendIdx["with:"]=8;
$6=_st(html)._li();
$ctx2.sendIdx["li"]=4;
_st($6)._with_("Adds class initilization and/or call to main");
$ctx2.sendIdx["with:"]=9;
return _st(_st(html)._li())._with_("Optionally runs Google Closure compiler");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=5;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkAndCLI)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'the command line'].\x0a\x0a\x09html h2 with: 'jtalkc - a fairly elaborate bash script that:'.\x0a\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Uses Node.js to run the Jtalk Compiler'.\x0a\x09\x09html li with: 'Compiles .st files to .js'.\x0a\x09\x09html li with: 'Links .js files into a single one'.\x0a\x09\x09html li with: 'Adds class initilization and/or call to main'.\x0a\x09\x09html li with: 'Optionally runs Google Closure compiler']",
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"],
referencedClasses: []
}),
globals.JtalkAndCLI);



smalltalk.addClass('JtalkAndEnyo', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";
},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndEnyo);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndEnyo";
},
args: [],
source: "id\x0a\x09^'JtalkAndEnyo'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndEnyo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$ctx2.sendIdx["with:"]=2;
$1=_st(html)._span();
_st($1)._class_("blue");
$2=_st($1)._with_("Enyo");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkAndEnyo)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Enyo'].",
messageSends: ["with:", "h1", "class:", "span"],
referencedClasses: []
}),
globals.JtalkAndEnyo);



smalltalk.addClass('JtalkAndJavascriptSlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#08C";
},
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide transparent";
},
args: [],
source: "cssClass\x0a\x09^'slide transparent'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "jtalkAndJs";
},
args: [],
source: "id\x0a\x09^'jtalkAndJs'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Smalltalk ");
$ctx3.sendIdx["with:"]=3;
$3=_st(html)._span();
_st($3)._class_("red");
$4=_st($3)._with_("♥");
$ctx3.sendIdx["with:"]=4;
$4;
return _st(html)._with_(" JavaScript");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkAndJavascriptSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: [\x0a\x09\x09\x09html with: 'Smalltalk '.\x0a\x09\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09\x09html with: ' JavaScript']]",
messageSends: ["class:", "div", "with:", "h1", "span"],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide);



smalltalk.addClass('JtalkAndJavascriptSlide2', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#08C";
},
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide2);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "jtalkAndJs2";
},
args: [],
source: "id\x0a\x09^'jtalkAndJs2'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide2);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Smalltalk ");
$ctx2.sendIdx["with:"]=2;
$1=_st(html)._span();
_st($1)._class_("red");
$2=_st($1)._with_("♥");
$ctx2.sendIdx["with:"]=3;
$2;
return _st(html)._with_(" JavaScript");
$ctx2.sendIdx["with:"]=4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._h2())._with_("Jtalk maps one to one with the JavaScript equivalent:");
$ctx1.sendIdx["with:"]=5;
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._li();
$ctx2.sendIdx["li"]=1;
_st($3)._with_("String ⇔ String");
$ctx2.sendIdx["with:"]=7;
$4=_st(html)._li();
$ctx2.sendIdx["li"]=2;
_st($4)._with_("Number ⇔ Number");
$ctx2.sendIdx["with:"]=8;
$5=_st(html)._li();
$ctx2.sendIdx["li"]=3;
_st($5)._with_("BlockClosure ⇔ function");
$ctx2.sendIdx["with:"]=9;
$6=_st(html)._li();
$ctx2.sendIdx["li"]=4;
_st($6)._with_("Dictionary ⇔ Object");
$ctx2.sendIdx["with:"]=10;
$7=_st(html)._li();
$ctx2.sendIdx["li"]=5;
_st($7)._with_("Error ⇔ Error");
$ctx2.sendIdx["with:"]=11;
return _st(_st(html)._li())._with_("etc.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=6;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkAndJavascriptSlide2)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Smalltalk '.\x0a\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09html with: ' JavaScript'].\x0a\x09html h2 with: 'Jtalk maps one to one with the JavaScript equivalent:'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'String ⇔ String'.\x0a\x09\x09html li with: 'Number ⇔ Number'.\x0a\x09\x09html li with: 'BlockClosure ⇔ function'.\x0a\x09\x09html li with: 'Dictionary ⇔ Object'.\x0a\x09\x09html li with: 'Error ⇔ Error'.\x0a\x09\x09html li with: 'etc.']",
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide2);



smalltalk.addClass('JtalkAndJavascriptSlide3', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#08C";
},
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide3);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "jtalkAndJs3";
},
args: [],
source: "id\x0a\x09^'jtalkAndJs3'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide3);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$5,$7,$8,$10,$9,$11,$12,$13;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Smalltalk ");
$ctx2.sendIdx["with:"]=2;
$1=_st(html)._span();
_st($1)._class_("red");
$2=_st($1)._with_("♥");
$ctx2.sendIdx["with:"]=3;
$2;
return _st(html)._with_(" JavaScript");
$ctx2.sendIdx["with:"]=4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._h2())._with_("Smalltalk ⇒ JavaScript");
$ctx1.sendIdx["with:"]=5;
_st(_st(html)._ol())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._li();
$ctx2.sendIdx["li"]=1;
_st($3)._with_("Unary messages begin with an underscore: ");
$ctx2.sendIdx["with:"]=7;
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._code();
$ctx3.sendIdx["code"]=1;
return _st($4)._with_("yourself");
$ctx3.sendIdx["with:"]=9;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=8;
_st($3)._with_(" becomes ");
$ctx2.sendIdx["with:"]=10;
$5=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$6=_st(html)._code();
$ctx3.sendIdx["code"]=2;
return _st($6)._with_("_yourself()");
$ctx3.sendIdx["with:"]=12;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=11;
$5;
$7=_st(html)._li();
$ctx2.sendIdx["li"]=2;
_st($7)._with_("Binary messages are prefixed with 2 underscores: ");
$ctx2.sendIdx["with:"]=13;
_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$8=_st(html)._code();
$ctx3.sendIdx["code"]=3;
return _st($8)._with_("3@4");
$ctx3.sendIdx["with:"]=15;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
$ctx2.sendIdx["with:"]=14;
_st($7)._with_(" becomes ");
$ctx2.sendIdx["with:"]=16;
$9=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$10=_st(html)._code();
$ctx3.sendIdx["code"]=4;
return _st($10)._with_("(3).__at(4)");
$ctx3.sendIdx["with:"]=18;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)})}));
$ctx2.sendIdx["with:"]=17;
$9;
$11=_st(html)._li();
_st($11)._with_("Keyword message follow the same rules as unary messages, with a final underscore: ");
$ctx2.sendIdx["with:"]=19;
_st($11)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$12=_st(html)._code();
$ctx3.sendIdx["code"]=5;
return _st($12)._with_("aDictionary at: 3 put: 4");
$ctx3.sendIdx["with:"]=21;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)})}));
$ctx2.sendIdx["with:"]=20;
_st($11)._with_(" becomes ");
$ctx2.sendIdx["with:"]=22;
$13=_st($11)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("aDictionary._at_put_(3, 4)");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,8)})}));
$ctx2.sendIdx["with:"]=23;
return $13;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=6;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkAndJavascriptSlide3)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Smalltalk '.\x0a\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09html with: ' JavaScript'].\x0a\x09html h2 with: 'Smalltalk ⇒ JavaScript'.\x0a\x09html ol with: [\x0a\x09\x09html li \x0a\x09\x09\x09with: 'Unary messages begin with an underscore: ';\x0a\x09\x09\x09with: [html code with: 'yourself'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: '_yourself()'].\x0a\x09\x09html li \x0a\x09\x09\x09with: 'Binary messages are prefixed with 2 underscores: ';\x0a\x09\x09\x09with: [html code with: '3@4'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: '(3).__at(4)'].\x0a\x09\x09html li \x0a\x09\x09\x09with: 'Keyword message follow the same rules as unary messages, with a final underscore: ';\x0a\x09\x09\x09with: [html code with: 'aDictionary at: 3 put: 4'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'aDictionary._at_put_(3, 4)']]",
messageSends: ["with:", "h1", "class:", "span", "h2", "ol", "li", "code"],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide3);



smalltalk.addClass('JtalkAndJavascriptSlide4', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#08C";
},
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide4);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "jtalkAndJs4";
},
args: [],
source: "id\x0a\x09^'jtalkAndJs4'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide4);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$7,$9,$8,$10,$11,$13,$12,$14,$15,$17,$16,$18,$19,$20;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("JavaScript ");
$ctx2.sendIdx["with:"]=2;
$1=_st(html)._span();
$ctx2.sendIdx["span"]=1;
_st($1)._class_("red");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_("♥");
$ctx2.sendIdx["with:"]=3;
$2;
_st(html)._with_(" Smalltalk too! ");
$ctx2.sendIdx["with:"]=4;
$3=_st(html)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._span();
_st($4)._class_("comment");
$5=_st($4)._with_("(how cute)");
$ctx3.sendIdx["with:"]=6;
return $5;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=5;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._h2())._with_("JavaScript ⇒ Smalltalk");
$ctx1.sendIdx["with:"]=7;
_st(_st(html)._ol())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(html)._li();
$ctx2.sendIdx["li"]=1;
_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._code();
$ctx3.sendIdx["code"]=1;
return _st($7)._with_("someUser.name");
$ctx3.sendIdx["with:"]=10;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=9;
_st($6)._with_(" becomes ");
$ctx2.sendIdx["with:"]=11;
$8=_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$9=_st(html)._code();
$ctx3.sendIdx["code"]=2;
return _st($9)._with_("someUser name");
$ctx3.sendIdx["with:"]=13;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
$ctx2.sendIdx["with:"]=12;
$8;
$10=_st(html)._li();
$ctx2.sendIdx["li"]=2;
_st($10)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$11=_st(html)._code();
$ctx3.sendIdx["code"]=3;
return _st($11)._with_("someUser name = \x22John\x22");
$ctx3.sendIdx["with:"]=15;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)})}));
$ctx2.sendIdx["with:"]=14;
_st($10)._with_(" becomes ");
$ctx2.sendIdx["with:"]=16;
$12=_st($10)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$13=_st(html)._code();
$ctx3.sendIdx["code"]=4;
return _st($13)._with_("someUser name: 'John'");
$ctx3.sendIdx["with:"]=18;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)})}));
$ctx2.sendIdx["with:"]=17;
$12;
$14=_st(html)._li();
$ctx2.sendIdx["li"]=3;
_st($14)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$15=_st(html)._code();
$ctx3.sendIdx["code"]=5;
return _st($15)._with_("console.log('hello world')");
$ctx3.sendIdx["with:"]=20;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,8)})}));
$ctx2.sendIdx["with:"]=19;
_st($14)._with_(" becomes ");
$ctx2.sendIdx["with:"]=21;
$16=_st($14)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$17=_st(html)._code();
$ctx3.sendIdx["code"]=6;
return _st($17)._with_("console log: 'hello world'");
$ctx3.sendIdx["with:"]=23;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,9)})}));
$ctx2.sendIdx["with:"]=22;
$16;
$18=_st(html)._li();
_st($18)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$19=_st(html)._code();
$ctx3.sendIdx["code"]=7;
return _st($19)._with_("window.jQuery('foo').css('background', 'red')");
$ctx3.sendIdx["with:"]=25;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,10)})}));
$ctx2.sendIdx["with:"]=24;
_st($18)._with_(" becomes ");
$ctx2.sendIdx["with:"]=26;
_st($18)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(html)._br();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,11)})}));
$ctx2.sendIdx["with:"]=27;
$20=_st($18)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("(window jQuery: 'foo') css: 'background' color: 'red'");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,12)})}));
$ctx2.sendIdx["with:"]=28;
return $20;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=8;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkAndJavascriptSlide4)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'JavaScript '.\x0a\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09html with: ' Smalltalk too! ';\x0a\x09\x09with: [html span class: 'comment'; with: '(how cute)']].\x0a\x09html h2 with: 'JavaScript ⇒ Smalltalk'.\x0a\x09html ol with: [\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'someUser.name'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'someUser name'].\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'someUser name = \x22John\x22'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'someUser name: ''John'''].\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'console.log(''hello world'')'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'console log: ''hello world'''].\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'window.jQuery(''foo'').css(''background'', ''red'')'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html br];\x0a\x09\x09\x09with: [html code with: '(window jQuery: ''foo'') css: ''background'' color: ''red''']]",
messageSends: ["with:", "h1", "class:", "span", "h2", "ol", "li", "code", "br"],
referencedClasses: []
}),
globals.JtalkAndJavascriptSlide4);



smalltalk.addClass('JtalkAndNode', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";
},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndNode);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndNode";
},
args: [],
source: "id\x0a\x09^'JtalkAndNode'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndNode);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$ctx2.sendIdx["with:"]=2;
$1=_st(html)._span();
_st($1)._class_("blue");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_("Node.js");
$ctx2.sendIdx["with:"]=3;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._h2())._with_("Hello.st:");
$ctx1.sendIdx["with:"]=4;
_st(_st(html)._pre())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("code2");
$4=_st($3)._with_("Object subclass: #Hello\x0d\x0a        instanceVariableNames: ''\x0d\x0a        category: 'Hello'!\x0d\x0a\x0d\x0a!Hello class methodsFor: 'main'!\x0d\x0amain\x0d\x0a\x09console log: 'Hello world from JTalk in Node.js'\x0d\x0a! !");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=5;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkAndNode)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Node.js'].\x0a\x0a\x09html h2 with: 'Hello.st:'.\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'Object subclass: #Hello\x0a        instanceVariableNames: ''''\x0a        category: ''Hello''!\x0a\x0a!Hello class methodsFor: ''main''!\x0amain\x0a\x09console log: ''Hello world from JTalk in Node.js''\x0a! !']",
messageSends: ["with:", "h1", "class:", "span", "h2", "pre", "div"],
referencedClasses: []
}),
globals.JtalkAndNode);



smalltalk.addClass('JtalkAndNode2', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";
},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndNode2);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndNode2";
},
args: [],
source: "id\x0a\x09^'JtalkAndNode2'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndNode2);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$ctx2.sendIdx["with:"]=2;
$1=_st(html)._span();
_st($1)._class_("blue");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_("Node.js");
$ctx2.sendIdx["with:"]=3;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$3=_st(html)._h2();
$ctx1.sendIdx["h2"]=1;
_st($3)._with_("Makefile:");
$ctx1.sendIdx["with:"]=4;
$4=_st(html)._pre();
$ctx1.sendIdx["pre"]=1;
_st($4)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._div();
$ctx2.sendIdx["div"]=1;
_st($5)._class_("code2");
$ctx2.sendIdx["class:"]=2;
$6=_st($5)._with_("Program.js: Hello.st\x0d\x0a\x09../../bin/jtalkc -N -m Hello Hello.st Program\x0d\x0a\x0d\x0arun: Program.js\x0d\x0a\x09./hello\x0d\x0a\x0d\x0aclean:\x0d\x0a\x09rm -f Program.js Hello.js\x0d\x0a");
$ctx2.sendIdx["with:"]=6;
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=5;
_st(_st(html)._h2())._with_("hello:");
$ctx1.sendIdx["with:"]=7;
_st(_st(html)._pre())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(html)._div();
_st($7)._class_("code2");
$8=_st($7)._with_("node Program.js $@");
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=8;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkAndNode2)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Node.js'].\x0a\x0a\x09html h2 with: 'Makefile:'.\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'Program.js: Hello.st\x0a\x09../../bin/jtalkc -N -m Hello Hello.st Program\x0a\x0arun: Program.js\x0a\x09./hello\x0a\x0aclean:\x0a\x09rm -f Program.js Hello.js\x0a'].\x0ahtml h2 with: 'hello:'.\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'node Program.js $@']",
messageSends: ["with:", "h1", "class:", "span", "h2", "pre", "div"],
referencedClasses: []
}),
globals.JtalkAndNode2);



smalltalk.addClass('JtalkAndNode3', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";
},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndNode3);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndNode3";
},
args: [],
source: "id\x0a\x09^'JtalkAndNode3'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndNode3);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$ctx2.sendIdx["with:"]=2;
$1=_st(html)._span();
$ctx2.sendIdx["span"]=1;
_st($1)._class_("blue");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_("Node.js");
$ctx2.sendIdx["with:"]=3;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._h2())._with_("make clean && make run:");
$ctx1.sendIdx["with:"]=4;
_st(_st(html)._pre())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("code2");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_("rm -f Program.js Hello.js\x0d\x0a../../bin/jtalkc -N -m Hello Hello.st Program\x0d\x0aLoading libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js\x0d\x0a/home/gokr/jtalk/js/Parser.js /home/gokr/jtalk/js/Compiler.js\x0d\x0a/home/gokr/jtalk/js/init.js /home/gokr/jtalk/nodejs/nodecompile.js\x0d\x0aand compiling ...\x0d\x0aCompiling in debugMode: false\x0d\x0aReading file Hello.st\x0d\x0aExporting category Hello as Hello.js\x0d\x0aAdding libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js  ...\x0d\x0aAdding Jtalk code Hello.js ...\x0d\x0aAdding initializer /home/gokr/jtalk/js/init.js ...\x0d\x0aAdding call to Hello class >> main ...\x0d\x0aWriting Program.js ...\x0d\x0aDone.\x0d\x0a./hello");
$ctx2.sendIdx["with:"]=6;
$4;
$5=_st(html)._span();
_st($5)._class_("blue");
$6=_st($5)._with_("Hello world from JTalk in Node.js");
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=5;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkAndNode3)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Node.js'].\x0a\x0a\x09html h2 with: 'make clean && make run:'.\x0a\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'rm -f Program.js Hello.js\x0a../../bin/jtalkc -N -m Hello Hello.st Program\x0aLoading libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js\x0a/home/gokr/jtalk/js/Parser.js /home/gokr/jtalk/js/Compiler.js\x0a/home/gokr/jtalk/js/init.js /home/gokr/jtalk/nodejs/nodecompile.js\x0aand compiling ...\x0aCompiling in debugMode: false\x0aReading file Hello.st\x0aExporting category Hello as Hello.js\x0aAdding libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js  ...\x0aAdding Jtalk code Hello.js ...\x0aAdding initializer /home/gokr/jtalk/js/init.js ...\x0aAdding call to Hello class >> main ...\x0aWriting Program.js ...\x0aDone.\x0a./hello'.\x0ahtml span class: 'blue'; with:'Hello world from JTalk in Node.js']",
messageSends: ["with:", "h1", "class:", "span", "h2", "pre", "div"],
referencedClasses: []
}),
globals.JtalkAndNode3);



smalltalk.addClass('JtalkAndWebOS', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";
},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndWebOS);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndWebOS";
},
args: [],
source: "id\x0a\x09^'JtalkAndWebOS'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkAndWebOS);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$ctx2.sendIdx["with:"]=2;
$1=_st(html)._span();
_st($1)._class_("blue");
$2=_st($1)._with_("webOS");
$ctx2.sendIdx["with:"]=3;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._h2())._with_("A really cool mobile OS based on Linux:");
$ctx1.sendIdx["with:"]=4;
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._li();
$ctx2.sendIdx["li"]=1;
_st($3)._with_("The primary language in webOS is Javascript");
$ctx2.sendIdx["with:"]=6;
$4=_st(html)._li();
$ctx2.sendIdx["li"]=2;
_st($4)._with_("The new UI framework for webOS 3.0 is called Enyo");
$ctx2.sendIdx["with:"]=7;
$5=_st(html)._li();
$ctx2.sendIdx["li"]=3;
_st($5)._with_("Regular apps run in V8 + Webkit");
$ctx2.sendIdx["with:"]=8;
return _st(_st(html)._li())._with_("Background services run in Node.js");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=5;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkAndWebOS)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'webOS'].\x0a\x0a\x09html h2 with: 'A really cool mobile OS based on Linux:'.\x0a\x0a\x09html ul with: [\x0a\x09\x09html li with: 'The primary language in webOS is Javascript'.\x0a\x09\x09html li with: 'The new UI framework for webOS 3.0 is called Enyo'.\x0a\x09\x09html li with: 'Regular apps run in V8 + Webkit'.\x0a\x09\x09html li with: 'Background services run in Node.js']",
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"],
referencedClasses: []
}),
globals.JtalkAndWebOS);



smalltalk.addClass('JtalkFeaturesSlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "features";
},
args: [],
source: "id\x0a\x09^'features'",
messageSends: [],
referencedClasses: []
}),
globals.JtalkFeaturesSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
_st(_st(html)._h1())._with_("Jtalk features");
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
$ctx2.sendIdx["li"]=1;
_st($1)._with_("Jtalk is (mostly) written in itself, including the parser & compiler");
$ctx2.sendIdx["with:"]=3;
$2=_st(html)._li();
$ctx2.sendIdx["li"]=2;
_st($2)._with_("Full Smalltalk object system, including classes & metaclasses, etc");
$ctx2.sendIdx["with:"]=4;
$3=_st(html)._li();
$ctx2.sendIdx["li"]=3;
_st($3)._with_("Core libraries (streams, collections, RegExp, etc)");
$ctx2.sendIdx["with:"]=5;
$4=_st(html)._li();
$ctx2.sendIdx["li"]=4;
_st($4)._with_("Web related libraries: HTML Canvas, DOM manipulation");
$ctx2.sendIdx["with:"]=6;
$5=_st(html)._li();
$ctx2.sendIdx["li"]=5;
_st($5)._with_("Full featured IDE");
$ctx2.sendIdx["with:"]=7;
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Advanced Smalltalk features, including ");
$ctx3.sendIdx["with:"]=9;
$6=_st(html)._code();
$ctx3.sendIdx["code"]=1;
_st($6)._with_("#doesNotUnderstand:");
$ctx3.sendIdx["with:"]=10;
_st(html)._with_(" support and ");
$ctx3.sendIdx["with:"]=11;
return _st(_st(html)._code())._with_("thisContext");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=2;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.JtalkFeaturesSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: 'Jtalk features'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Jtalk is (mostly) written in itself, including the parser & compiler'.\x0a\x09\x09html li with: 'Full Smalltalk object system, including classes & metaclasses, etc'.\x0a\x09\x09html li with: 'Core libraries (streams, collections, RegExp, etc)'.\x0a\x09\x09html li with: 'Web related libraries: HTML Canvas, DOM manipulation'.\x0a\x09\x09html li with: 'Full featured IDE'.\x0a\x09\x09html li with: [\x0a\x09\x09\x09html with:'Advanced Smalltalk features, including '.\x0a\x09\x09\x09html code with: '#doesNotUnderstand:'.\x0a\x09\x09\x09html with: ' support and '.\x0a\x09\x09\x09html code with: 'thisContext']]",
messageSends: ["with:", "h1", "ul", "li", "code"],
referencedClasses: []
}),
globals.JtalkFeaturesSlide);



smalltalk.addClass('SweSUGSlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#555";
},
args: [],
source: "backgroundColor\x0a\x09^'#555'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},globals.SweSUGSlide)})},
args: [],
source: "codeSnippet\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'rendering',
fn: function (){
var self=this;
return "slide blue3d";
},
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCodeSnippetOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SourceArea())._new();
_st($1)._renderOn_(html);
$2=_st($1)._editor();
_st($2)._setValue_(self._codeSnippet());
return self}, function($ctx1) {$ctx1.fill(self,"renderCodeSnippetOn:",{html:html},globals.SweSUGSlide)})},
args: ["html"],
source: "renderCodeSnippetOn: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: self codeSnippet.",
messageSends: ["setValue:", "renderOn:", "new", "editor", "codeSnippet"],
referencedClasses: ["SourceArea"]
}),
globals.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSnippet:on:",
protocol: 'rendering',
fn: function (aString,html){
var self=this;
function $SourceArea(){return globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SourceArea())._new();
_st($1)._renderOn_(html);
$2=_st($1)._editor();
_st($2)._setValue_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"renderSnippet:on:",{aString:aString,html:html},globals.SweSUGSlide)})},
args: ["aString", "html"],
source: "renderSnippet: aString on: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: aString.",
messageSends: ["setValue:", "renderOn:", "new", "editor"],
referencedClasses: ["SourceArea"]
}),
globals.SweSUGSlide);



smalltalk.addClass('SweSUGAboutSlide', globals.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#555";
},
args: [],
source: "backgroundColor\x0a\x09^'#555'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUGAboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";
},
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUGAboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "About";
},
args: [],
source: "id\x0a\x09^'About'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUGAboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Browser(){return globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $Presentation(){return globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("About this presentation");
$ctx2.sendIdx["with:"]=2;
$3=_st(html)._p();
$ctx2.sendIdx["p"]=1;
_st($3)._with_("This presentation is entirely written in Amber. Lots of stuff was heavily copied from the two earlier presentations from ESUG and FOSDEM.");
$ctx2.sendIdx["with:"]=3;
$4=_st(html)._p();
$ctx2.sendIdx["p"]=2;
_st($4)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Press ");
$ctx3.sendIdx["with:"]=5;
$5=_st(html)._code();
$ctx3.sendIdx["code"]=1;
_st($5)._with_("←");
$ctx3.sendIdx["with:"]=6;
_st(html)._with_(" to move backward and ");
$ctx3.sendIdx["with:"]=7;
_st(_st(html)._code())._with_(" →");
$ctx3.sendIdx["with:"]=8;
return _st(html)._with_(" to move forward.");
$ctx3.sendIdx["with:"]=9;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=4;
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Open a ");
$ctx3.sendIdx["with:"]=11;
$6=_st(html)._button();
_st($6)._with_("browser");
$ctx3.sendIdx["with:"]=12;
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st($Browser())._openOn_($Presentation());
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$7;
return _st(html)._with_(" to edit the source code.");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.SweSUGAboutSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'About this presentation'.\x0a\x09\x09html p with: 'This presentation is entirely written in Amber. Lots of stuff was heavily copied from the two earlier presentations from ESUG and FOSDEM.'.\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Press '.\x0a\x09\x09\x09html code with: '←'.\x0a\x09\x09\x09html with: ' to move backward and '.\x0a\x09\x09\x09html code with: ' →'.\x0a\x09\x09\x09html with: ' to move forward.'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Open a '.\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09with: 'browser';\x0a\x09\x09\x09\x09onClick: [Browser openOn: Presentation].\x0a\x09\x09\x09html with: ' to edit the source code.']]",
messageSends: ["class:", "div", "with:", "h1", "p", "code", "button", "onClick:", "openOn:"],
referencedClasses: ["Browser", "Presentation"]
}),
globals.SweSUGAboutSlide);



smalltalk.addClass('SweSUGAmberFeaturesSlide', globals.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "features";
},
args: [],
source: "id\x0a\x09^'features'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUGAmberFeaturesSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
_st(_st(html)._h1())._with_("Amber features");
$ctx1.sendIdx["with:"]=1;
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._li();
$ctx2.sendIdx["li"]=1;
_st($1)._with_("Amber is (mostly) written in itself, including the compiler");
$ctx2.sendIdx["with:"]=3;
$2=_st(html)._li();
$ctx2.sendIdx["li"]=2;
_st($2)._with_("Full Smalltalk object system, including classes & metaclasses, etc");
$ctx2.sendIdx["with:"]=4;
$3=_st(html)._li();
$ctx2.sendIdx["li"]=3;
_st($3)._with_("Core libraries (streams, collections, RegExp, etc)");
$ctx2.sendIdx["with:"]=5;
$4=_st(html)._li();
$ctx2.sendIdx["li"]=4;
_st($4)._with_("Web related libraries: HTML Canvas, DOM manipulation");
$ctx2.sendIdx["with:"]=6;
$5=_st(html)._li();
$ctx2.sendIdx["li"]=5;
_st($5)._with_("Very good javascript integration, both ways");
$ctx2.sendIdx["with:"]=7;
$6=_st(html)._li();
$ctx2.sendIdx["li"]=6;
_st($6)._with_("Full featured IDE!");
$ctx2.sendIdx["with:"]=8;
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Advanced features, including ");
$ctx3.sendIdx["with:"]=10;
$7=_st(html)._code();
$ctx3.sendIdx["code"]=1;
_st($7)._with_("#doesNotUnderstand:");
$ctx3.sendIdx["with:"]=11;
_st(html)._with_(" support and ");
$ctx3.sendIdx["with:"]=12;
return _st(_st(html)._code())._with_("thisContext");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=9;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=2;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.SweSUGAmberFeaturesSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: 'Amber features'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Amber is (mostly) written in itself, including the compiler'.\x0a\x09\x09html li with: 'Full Smalltalk object system, including classes & metaclasses, etc'.\x0a\x09\x09html li with: 'Core libraries (streams, collections, RegExp, etc)'.\x0a\x09\x09html li with: 'Web related libraries: HTML Canvas, DOM manipulation'.\x0a\x09\x09html li with: 'Very good javascript integration, both ways'.\x0a\x09\x09html li with: 'Full featured IDE!'.\x0a\x09\x09html li with: [\x0a\x09\x09\x09html with:'Advanced features, including '.\x0a\x09\x09\x09html code with: '#doesNotUnderstand:'.\x0a\x09\x09\x09html with: ' support and '.\x0a\x09\x09\x09html code with: 'thisContext']]",
messageSends: ["with:", "h1", "ul", "li", "code"],
referencedClasses: []
}),
globals.SweSUGAmberFeaturesSlide);



smalltalk.addClass('SweSUGIntroSlide', globals.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "Intro";
},
args: [],
source: "id\x0a\x09^'Intro'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUGIntroSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$6,$5,$2;
$1=_st(html)._div();
_st($1)._class_("section center animate");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._img())._src_("fosdem2012/images/amber.png");
$4=self._presentation();
$ctx2.sendIdx["presentation"]=1;
$3=_st($4)._author();
_st(html)._p_($3);
$ctx2.sendIdx["p:"]=1;
$6=self._presentation();
$ctx2.sendIdx["presentation"]=2;
$5=_st($6)._description();
_st(html)._p_($5);
$ctx2.sendIdx["p:"]=2;
return _st(html)._p_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(html)._with_(_st(self._presentation())._email());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.SweSUGIntroSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center animate'; with: [\x0a\x09\x09html img src: 'fosdem2012/images/amber.png'.\x0a\x09\x09html p: self presentation author.\x0a          \x09html p: self presentation description.\x0a\x09\x09html p: [\x0a\x09\x09\x09html with: self presentation email]].",
messageSends: ["class:", "div", "with:", "src:", "img", "p:", "author", "presentation", "description", "email"],
referencedClasses: []
}),
globals.SweSUGIntroSlide);



smalltalk.addClass('SweSUGWhatIsAmberSlide', globals.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "WhatIsAmber";
},
args: [],
source: "id\x0a\x09^'WhatIsAmber'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUGWhatIsAmberSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._img_("esug2011/images/balloon.jpg");
_st(_st(html)._h1())._with_("Amber in a nutshell");
$ctx2.sendIdx["with:"]=2;
$3=_st(html)._h2();
$ctx2.sendIdx["h2"]=1;
_st($3)._with_("Amber is a true Smalltalk");
$ctx2.sendIdx["with:"]=3;
$4=_st(html)._h2();
$ctx2.sendIdx["h2"]=2;
_st($4)._with_("It compiles to and runs on/in JavaScript");
$ctx2.sendIdx["with:"]=4;
$5=_st(html)._h2();
$ctx2.sendIdx["h2"]=3;
_st($5)._with_("MIT license");
$ctx2.sendIdx["with:"]=5;
$6=_st(html)._h2();
_st($6)._class_("fancy");
$7=_st($6)._with_("Amber is way cool!");
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.SweSUGWhatIsAmberSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html img: 'esug2011/images/balloon.jpg'.\x0a\x09\x09html h1 with: 'Amber in a nutshell'.\x0a\x09\x09html h2 with: 'Amber is a true Smalltalk'.\x0a\x09\x09html h2 with: 'It compiles to and runs on/in JavaScript'.\x0a\x09\x09html h2 with: 'MIT license'.\x0a\x09\x09html h2 class: 'fancy'; with: 'Amber is way cool!']",
messageSends: ["class:", "div", "with:", "img:", "h1", "h2"],
referencedClasses: []
}),
globals.SweSUGWhatIsAmberSlide);



smalltalk.addClass('SweSUGWorkspaceSlide', globals.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#18bd7d";
},
args: [],
source: "backgroundColor\x0a\x09^'#18bd7d'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUGWorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "workspace";
},
args: [],
source: "id\x0a\x09^'workspace'",
messageSends: [],
referencedClasses: []
}),
globals.SweSUGWorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'accessing',
fn: function (html){
var self=this;
var workspace;
function $SourceArea(){return globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
workspace=_st($SourceArea())._new();
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Give Amber a try!");
$ctx2.sendIdx["with:"]=2;
_st(workspace)._renderOn_(html);
return _st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._button();
$ctx3.sendIdx["button"]=1;
_st($3)._with_("DoIt");
$ctx3.sendIdx["with:"]=4;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._doIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["onClick:"]=1;
$4;
$5=_st(html)._button();
$ctx3.sendIdx["button"]=2;
_st($5)._with_("PrintIt");
$ctx3.sendIdx["with:"]=5;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._printIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["onClick:"]=2;
$6;
$7=_st(html)._button();
_st($7)._with_("InspectIt");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._inspectIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html,workspace:workspace},globals.SweSUGWorkspaceSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09| workspace |\x0a\x09workspace := SourceArea new.\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Give Amber a try!'.\x0a\x09\x09workspace renderOn: html.\x0a\x09\x09html div with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09\x09onClick: [workspace doIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09\x09onClick: [workspace printIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'InspectIt';\x0a\x09\x09\x09\x09onClick: [workspace inspectIt]]]",
messageSends: ["new", "class:", "div", "with:", "h1", "renderOn:", "button", "onClick:", "doIt", "printIt", "inspectIt"],
referencedClasses: ["SourceArea"]
}),
globals.SweSUGWorkspaceSlide);



smalltalk.addClass('WhatIsJtalkSlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "WhatIsJtalk";
},
args: [],
source: "id\x0a\x09^'WhatIsJtalk'",
messageSends: [],
referencedClasses: []
}),
globals.WhatIsJtalkSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Jtalk in a nutshell");
$ctx2.sendIdx["with:"]=2;
$3=_st(html)._h2();
$ctx2.sendIdx["h2"]=1;
_st($3)._with_("Jtalk is an implementation of Smalltalk");
$ctx2.sendIdx["with:"]=3;
$4=_st(html)._h2();
$ctx2.sendIdx["h2"]=2;
_st($4)._with_("Jtalk runs on top of the JavaScript runtime");
$ctx2.sendIdx["with:"]=4;
$5=_st(html)._h2();
$ctx2.sendIdx["h2"]=3;
_st($5)._with_("Jtalk is an opensource project (MIT)");
$ctx2.sendIdx["with:"]=5;
$6=_st(html)._h2();
_st($6)._class_("fancy");
$7=_st($6)._with_("Jtalk is cool!");
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},globals.WhatIsJtalkSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Jtalk in a nutshell'.\x0a\x09\x09html h2 with: 'Jtalk is an implementation of Smalltalk'.\x0a\x09\x09html h2 with: 'Jtalk runs on top of the JavaScript runtime'.\x0a\x09\x09html h2 with: 'Jtalk is an opensource project (MIT)'.\x0a\x09\x09html h2 class: 'fancy'; with: 'Jtalk is cool!']",
messageSends: ["class:", "div", "with:", "h1", "h2"],
referencedClasses: []
}),
globals.WhatIsJtalkSlide);



smalltalk.addClass('WorkspaceSlide', globals.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#18bd7d";
},
args: [],
source: "backgroundColor\x0a\x09^'#18bd7d'",
messageSends: [],
referencedClasses: []
}),
globals.WorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "workspace";
},
args: [],
source: "id\x0a\x09^'workspace'",
messageSends: [],
referencedClasses: []
}),
globals.WorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
protocol: 'accessing',
fn: function (html){
var self=this;
var workspace;
function $SourceArea(){return globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
workspace=_st($SourceArea())._new();
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Give Jtalk a try!");
$ctx2.sendIdx["with:"]=2;
_st(workspace)._renderOn_(html);
return _st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._button();
$ctx3.sendIdx["button"]=1;
_st($3)._with_("DoIt");
$ctx3.sendIdx["with:"]=4;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._doIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["onClick:"]=1;
$4;
$5=_st(html)._button();
$ctx3.sendIdx["button"]=2;
_st($5)._with_("PrintIt");
$ctx3.sendIdx["with:"]=5;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._printIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["onClick:"]=2;
$6;
$7=_st(html)._button();
_st($7)._with_("InspectIt");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._inspectIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html,workspace:workspace},globals.WorkspaceSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09| workspace |\x0a\x09workspace := SourceArea new.\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Give Jtalk a try!'.\x0a\x09\x09workspace renderOn: html.\x0a\x09\x09html div with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09\x09onClick: [workspace doIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09\x09onClick: [workspace printIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'InspectIt';\x0a\x09\x09\x09\x09onClick: [workspace inspectIt]]]",
messageSends: ["new", "class:", "div", "with:", "h1", "renderOn:", "button", "onClick:", "doIt", "printIt", "inspectIt"],
referencedClasses: ["SourceArea"]
}),
globals.WorkspaceSlide);


});
