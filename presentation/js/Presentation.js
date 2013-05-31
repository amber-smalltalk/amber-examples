smalltalk.addPackage('Presentation');
smalltalk.addClass('Presentation', smalltalk.Widget, ['currentSlide', 'slides'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "John Smith";
}, function($ctx1) {$ctx1.fill(self,"author",{},smalltalk.Presentation)})},
args: [],
source: "author\x0a\x09^'John Smith'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentSlide",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentSlide"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentSlide",{},smalltalk.Presentation)})},
args: [],
source: "currentSlide\x0a\x09^currentSlide",
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentSlide:",
category: 'accessing',
fn: function (aSlide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentSlide"]=aSlide;
return self}, function($ctx1) {$ctx1.fill(self,"currentSlide:",{aSlide:aSlide},smalltalk.Presentation)})},
args: ["aSlide"],
source: "currentSlide: aSlide\x0a\x09currentSlide := aSlide",
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentSlideIndex",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._slides())._indexOf_ifAbsent_(self._currentSlide(),(function(){
return smalltalk.withContext(function($ctx2) {
return (1);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentSlideIndex",{},smalltalk.Presentation)})},
args: [],
source: "currentSlideIndex\x0a\x09^ self slides indexOf: self currentSlide ifAbsent: [1]",
messageSends: ["indexOf:ifAbsent:", "currentSlide", "slides"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "A presentation written in Jtalk";
}, function($ctx1) {$ctx1.fill(self,"description",{},smalltalk.Presentation)})},
args: [],
source: "description\x0a\x09^'A presentation written in Jtalk'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "john@smith.com";
}, function($ctx1) {$ctx1.fill(self,"email",{},smalltalk.Presentation)})},
args: [],
source: "email\x0a\x09^'john@smith.com'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "initSlides",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@slides"]=_st(self._slideClasses())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._on_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initSlides",{},smalltalk.Presentation)})},
args: [],
source: "initSlides\x0a\x09slides := self slideClasses collect: [:each | each on: self]",
messageSends: ["collect:", "on:", "slideClasses"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAt:",
category: 'actions',
fn: function (anInteger){
var self=this;
var next;
return smalltalk.withContext(function($ctx1) { 
var $1;
next=_st(self._slides())._at_ifAbsent_(anInteger,(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=next;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self["@currentSlide"]=next;
self["@currentSlide"];
_st(next)._show();
};
return self}, function($ctx1) {$ctx1.fill(self,"moveAt:",{anInteger:anInteger,next:next},smalltalk.Presentation)})},
args: ["anInteger"],
source: "moveAt: anInteger\x0a\x09| next |\x0a\x09next := self slides \x0a\x09\x09\x09at: anInteger\x0a\x09\x09\x09ifAbsent: [nil].\x0a\x09next ifNotNil: [currentSlide := next. next show]",
messageSends: ["at:ifAbsent:", "slides", "ifNotNil:", "show"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "nextSlide",
category: 'actions',
fn: function (){
var self=this;
var next;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._currentSlide();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
next=_st(self._slides())._at_ifAbsent_(_st(self._currentSlideIndex()).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
next;
$2=next;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
self["@currentSlide"]=next;
self["@currentSlide"];
_st(next)._show();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"nextSlide",{next:next},smalltalk.Presentation)})},
args: [],
source: "nextSlide\x0a\x09| next |\x0a\x09self currentSlide ifNotNil: [\x0a\x09\x09next := self slides \x0a\x09\x09\x09at: (self currentSlideIndex) + 1\x0a\x09\x09\x09ifAbsent: [nil].\x0a\x09\x09next ifNotNil: [currentSlide := next. next show]]",
messageSends: ["ifNotNil:", "at:ifAbsent:", "+", "currentSlideIndex", "slides", "show", "currentSlide"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "previousSlide",
category: 'actions',
fn: function (){
var self=this;
var next;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._currentSlide();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
next=_st(self._slides())._at_ifAbsent_(_st(self._currentSlideIndex()).__minus((1)),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
next;
$2=next;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
self["@currentSlide"]=next;
self["@currentSlide"];
_st(next)._show();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"previousSlide",{next:next},smalltalk.Presentation)})},
args: [],
source: "previousSlide\x0a\x09| next |\x0a\x09self currentSlide ifNotNil: [\x0a\x09\x09next := self slides \x0a\x09\x09\x09at: (self currentSlideIndex) - 1\x0a\x09\x09\x09ifAbsent: [nil].\x0a\x09\x09next ifNotNil: [currentSlide := next. next show]]",
messageSends: ["ifNotNil:", "at:ifAbsent:", "-", "currentSlideIndex", "slides", "show", "currentSlide"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._style();
_st($1)._type_("text/css");
$2=_st($1)._with_(self._style());
$3=_st(html)._div();
_st($3)._id_("slides");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderSlidesOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Presentation)})},
args: ["html"],
source: "renderOn: html\x0a\x09html style\x0a\x09\x09type: 'text/css';\x0a\x09\x09with: self style.\x0a\x09html div \x0a\x09\x09id: 'slides';\x0a\x09\x09with: [self renderSlidesOn: html]",
messageSends: ["type:", "style", "with:", "id:", "div", "renderSlidesOn:"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlidesOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._slides())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=self["@currentSlide"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@currentSlide"]=_st(self._slides())._first();
self["@currentSlide"];
} else {
$1;
};
self._showCurrentSlide();
return self}, function($ctx1) {$ctx1.fill(self,"renderSlidesOn:",{html:html},smalltalk.Presentation)})},
args: ["html"],
source: "renderSlidesOn: html\x0a\x09self slides do: [:each | \x0a\x09\x09each renderOn: html].\x0a\x09currentSlide ifNil: [currentSlide := self slides first].\x0a\x09self showCurrentSlide",
messageSends: ["do:", "renderOn:", "slides", "ifNil:", "first", "showCurrentSlide"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "showCurrentSlide",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._currentSlide();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(".slide"._asJQuery())._hide();
_st(_st("#".__comma(_st(self._currentSlide())._id()))._asJQuery())._show();
_st("title"._asJQuery())._text_(_st(_st(self._title()).__comma(" - ")).__comma(_st(self._currentSlide())._id()));
};
return self}, function($ctx1) {$ctx1.fill(self,"showCurrentSlide",{},smalltalk.Presentation)})},
args: [],
source: "showCurrentSlide\x0a\x09self currentSlide ifNotNil: [\x0a\x09\x09'.slide' asJQuery hide.\x0a\x09\x09('#', self currentSlide id) asJQuery show.\x0a          \x09'title' asJQuery text: self title, ' - ', self currentSlide id.\x0a        ]",
messageSends: ["ifNotNil:", "hide", "asJQuery", "show", ",", "id", "currentSlide", "text:", "title"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},smalltalk.Presentation)})},
args: [],
source: "slideClasses\x0a\x09^self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideTransition",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "fade";
}, function($ctx1) {$ctx1.fill(self,"slideTransition",{},smalltalk.Presentation)})},
args: [],
source: "slideTransition\x0a\x09^'fade'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slides",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@slides"];
if(($receiver = $1) == nil || $receiver == undefined){
self._initSlides();
} else {
$1;
};
$2=self["@slides"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"slides",{},smalltalk.Presentation)})},
args: [],
source: "slides\x0a\x09slides ifNil: [self initSlides].\x0a\x09^slides",
messageSends: ["ifNil:", "initSlides"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slidesDo:",
category: 'enumerating',
fn: function (aBlockWithArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._slides())._do_((function(aSlide){
return smalltalk.withContext(function($ctx2) {
return _st(aBlockWithArg)._value_(aSlide);
}, function($ctx2) {$ctx2.fillBlock({aSlide:aSlide},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"slidesDo:",{aBlockWithArg:aBlockWithArg},smalltalk.Presentation)})},
args: ["aBlockWithArg"],
source: "slidesDo: aBlockWithArg\x0a\x09self slides do: [:aSlide| aBlockWithArg value: aSlide].",
messageSends: ["do:", "value:", "slides"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.Presentation)})},
args: [],
source: "style\x0a\x09\x22Should return a CSS style\x22\x0a\x09^ ''",
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._title();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.Presentation)})},
args: [],
source: "title\x0a\x09^ self class title.",
messageSends: ["title", "class"],
referencedClasses: []
}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "http://jtalk-project.org";
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.Presentation)})},
args: [],
source: "url\x0a\x09^'http://jtalk-project.org'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation);


smalltalk.Presentation.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "concretePresentations",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._allSubclasses())._select_((function(aPresentationClass){
return smalltalk.withContext(function($ctx2) {
return _st(aPresentationClass)._isConcrete();
}, function($ctx2) {$ctx2.fillBlock({aPresentationClass:aPresentationClass},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"concretePresentations",{},smalltalk.Presentation.klass)})},
args: [],
source: "concretePresentations\x0a\x09^ self allSubclasses select: [:aPresentationClass| aPresentationClass isConcrete]",
messageSends: ["select:", "isConcrete", "allSubclasses"],
referencedClasses: []
}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "concretePresentationsDo:",
category: 'enumerating',
fn: function (aBlockWithArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._concretePresentations())._do_(aBlockWithArg);
return self}, function($ctx1) {$ctx1.fill(self,"concretePresentationsDo:",{aBlockWithArg:aBlockWithArg},smalltalk.Presentation.klass)})},
args: ["aBlockWithArg"],
source: "concretePresentationsDo: aBlockWithArg\x0a\x09self concretePresentations do: aBlockWithArg.",
messageSends: ["do:", "concretePresentations"],
referencedClasses: []
}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.Presentation.klass)})},
args: [],
source: "isConcrete\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Slides";
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.Presentation.klass)})},
args: [],
source: "title\x0a\x09^ 'Slides'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Presentation.klass);


smalltalk.addClass('ESUG2011Presentation', smalltalk.Presentation, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Nicolas Petton";
}, function($ctx1) {$ctx1.fill(self,"author",{},smalltalk.ESUG2011Presentation)})},
args: [],
source: "author\x0a\x09^'Nicolas Petton'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ESUG 2011, Edinburgh";
}, function($ctx1) {$ctx1.fill(self,"description",{},smalltalk.ESUG2011Presentation)})},
args: [],
source: "description\x0a\x09^'ESUG 2011, Edinburgh'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "nico@objectfusion.fr";
}, function($ctx1) {$ctx1.fill(self,"email",{},smalltalk.ESUG2011Presentation)})},
args: [],
source: "email\x0a\x09^'nico@objectfusion.fr'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
category: 'accessing',
fn: function (){
var self=this;
function $IntroSlide(){return smalltalk.IntroSlide||(typeof IntroSlide=="undefined"?nil:IntroSlide)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $AboutSlide(){return smalltalk.AboutSlide||(typeof AboutSlide=="undefined"?nil:AboutSlide)}
function $WhatIsJtalkSlide(){return smalltalk.WhatIsJtalkSlide||(typeof WhatIsJtalkSlide=="undefined"?nil:WhatIsJtalkSlide)}
function $JtalkFeaturesSlide(){return smalltalk.JtalkFeaturesSlide||(typeof JtalkFeaturesSlide=="undefined"?nil:JtalkFeaturesSlide)}
function $WorkspaceSlide(){return smalltalk.WorkspaceSlide||(typeof WorkspaceSlide=="undefined"?nil:WorkspaceSlide)}
function $IDESlide(){return smalltalk.IDESlide||(typeof IDESlide=="undefined"?nil:IDESlide)}
function $CountersSlide(){return smalltalk.CountersSlide||(typeof CountersSlide=="undefined"?nil:CountersSlide)}
function $JtalkAndJavascriptSlide(){return smalltalk.JtalkAndJavascriptSlide||(typeof JtalkAndJavascriptSlide=="undefined"?nil:JtalkAndJavascriptSlide)}
function $JtalkAndJavascriptSlide2(){return smalltalk.JtalkAndJavascriptSlide2||(typeof JtalkAndJavascriptSlide2=="undefined"?nil:JtalkAndJavascriptSlide2)}
function $JtalkAndJavascriptSlide3(){return smalltalk.JtalkAndJavascriptSlide3||(typeof JtalkAndJavascriptSlide3=="undefined"?nil:JtalkAndJavascriptSlide3)}
function $JtalkAndJavascriptSlide4(){return smalltalk.JtalkAndJavascriptSlide4||(typeof JtalkAndJavascriptSlide4=="undefined"?nil:JtalkAndJavascriptSlide4)}
function $JtalkAndCLI(){return smalltalk.JtalkAndCLI||(typeof JtalkAndCLI=="undefined"?nil:JtalkAndCLI)}
function $JtalkAndNode(){return smalltalk.JtalkAndNode||(typeof JtalkAndNode=="undefined"?nil:JtalkAndNode)}
function $JtalkAndNode2(){return smalltalk.JtalkAndNode2||(typeof JtalkAndNode2=="undefined"?nil:JtalkAndNode2)}
function $JtalkAndNode3(){return smalltalk.JtalkAndNode3||(typeof JtalkAndNode3=="undefined"?nil:JtalkAndNode3)}
function $JtalkAndWebOS(){return smalltalk.JtalkAndWebOS||(typeof JtalkAndWebOS=="undefined"?nil:JtalkAndWebOS)}
function $JtalkAndEnyo(){return smalltalk.JtalkAndEnyo||(typeof JtalkAndEnyo=="undefined"?nil:JtalkAndEnyo)}
function $ContributionsSlide(){return smalltalk.ContributionsSlide||(typeof ContributionsSlide=="undefined"?nil:ContributionsSlide)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._new();
_st($2)._add_($IntroSlide());
_st($2)._add_($AboutSlide());
_st($2)._add_($WhatIsJtalkSlide());
_st($2)._add_($JtalkFeaturesSlide());
_st($2)._add_($WorkspaceSlide());
_st($2)._add_($IDESlide());
_st($2)._add_($CountersSlide());
_st($2)._add_($JtalkAndJavascriptSlide());
_st($2)._add_($JtalkAndJavascriptSlide2());
_st($2)._add_($JtalkAndJavascriptSlide3());
_st($2)._add_($JtalkAndJavascriptSlide4());
_st($2)._add_($JtalkAndCLI());
_st($2)._add_($JtalkAndNode());
_st($2)._add_($JtalkAndNode2());
_st($2)._add_($JtalkAndNode3());
_st($2)._add_($JtalkAndWebOS());
_st($2)._add_($JtalkAndEnyo());
_st($2)._add_($ContributionsSlide());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},smalltalk.ESUG2011Presentation)})},
args: [],
source: "slideClasses\x0a\x09^Array new\x0a\x09\x09add: IntroSlide;\x0a\x09\x09add: AboutSlide;\x0a\x09\x09add: WhatIsJtalkSlide;\x0a\x09\x09add: JtalkFeaturesSlide;\x0a\x09\x09add: WorkspaceSlide;\x0a\x09\x09add: IDESlide;\x0a\x09\x09add: CountersSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide2;\x0a\x09\x09add: JtalkAndJavascriptSlide3;\x0a\x09\x09add: JtalkAndJavascriptSlide4;\x0a\x09\x09add: JtalkAndCLI;\x0a\x09\x09add: JtalkAndNode;\x0a\x09\x09add: JtalkAndNode2;\x0a\x09\x09add: JtalkAndNode3;\x0a\x09\x09add: JtalkAndWebOS;\x0a\x09\x09add: JtalkAndEnyo;\x0a\x09\x09add: ContributionsSlide;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: ["IntroSlide", "Array", "AboutSlide", "WhatIsJtalkSlide", "JtalkFeaturesSlide", "WorkspaceSlide", "IDESlide", "CountersSlide", "JtalkAndJavascriptSlide", "JtalkAndJavascriptSlide2", "JtalkAndJavascriptSlide3", "JtalkAndJavascriptSlide4", "JtalkAndCLI", "JtalkAndNode", "JtalkAndNode2", "JtalkAndNode3", "JtalkAndWebOS", "JtalkAndEnyo", "ContributionsSlide"]
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.ESUG2011Presentation)})},
args: [],
source: "style\x0a\x09^'\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "http://jtalk-project.org";
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.ESUG2011Presentation)})},
args: [],
source: "url\x0a\x09^'http://jtalk-project.org'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation);


smalltalk.ESUG2011Presentation.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.ESUG2011Presentation.klass)})},
args: [],
source: "isConcrete\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Jtalk";
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.ESUG2011Presentation.klass)})},
args: [],
source: "title\x0a\x09^'Jtalk'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ESUG2011Presentation.klass);


smalltalk.addClass('FOSDEM2012Presentation', smalltalk.Presentation, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Laurent Laffont, Johnny Thornton";
}, function($ctx1) {$ctx1.fill(self,"author",{},smalltalk.FOSDEM2012Presentation)})},
args: [],
source: "author\x0a\x09^'Laurent Laffont, Johnny Thornton'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "FOSDEM 2012, Brussels";
}, function($ctx1) {$ctx1.fill(self,"description",{},smalltalk.FOSDEM2012Presentation)})},
args: [],
source: "description\x0a\x09^'FOSDEM 2012, Brussels'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "laurent.laffont@gmail.com,  johnnyt@xan.do";
}, function($ctx1) {$ctx1.fill(self,"email",{},smalltalk.FOSDEM2012Presentation)})},
args: [],
source: "email\x0a\x09^'laurent.laffont@gmail.com,  johnnyt@xan.do'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
category: 'accessing',
fn: function (){
var self=this;
function $FOSDEMIntroSlide(){return smalltalk.FOSDEMIntroSlide||(typeof FOSDEMIntroSlide=="undefined"?nil:FOSDEMIntroSlide)}
function $FOSDEMAmberZeroNine(){return smalltalk.FOSDEMAmberZeroNine||(typeof FOSDEMAmberZeroNine=="undefined"?nil:FOSDEMAmberZeroNine)}
function $CountersSlide(){return smalltalk.CountersSlide||(typeof CountersSlide=="undefined"?nil:CountersSlide)}
function $IDESlide(){return smalltalk.IDESlide||(typeof IDESlide=="undefined"?nil:IDESlide)}
function $JtalkAndJavascriptSlide(){return smalltalk.JtalkAndJavascriptSlide||(typeof JtalkAndJavascriptSlide=="undefined"?nil:JtalkAndJavascriptSlide)}
function $FOSDEMJSPlayGroundSlide(){return smalltalk.FOSDEMJSPlayGroundSlide||(typeof FOSDEMJSPlayGroundSlide=="undefined"?nil:FOSDEMJSPlayGroundSlide)}
function $FOSDEMJSToSmalltalk(){return smalltalk.FOSDEMJSToSmalltalk||(typeof FOSDEMJSToSmalltalk=="undefined"?nil:FOSDEMJSToSmalltalk)}
function $FOSDEMBookletSlide(){return smalltalk.FOSDEMBookletSlide||(typeof FOSDEMBookletSlide=="undefined"?nil:FOSDEMBookletSlide)}
function $FOSDEMTwitter(){return smalltalk.FOSDEMTwitter||(typeof FOSDEMTwitter=="undefined"?nil:FOSDEMTwitter)}
function $FOSDEMCanvasSlide(){return smalltalk.FOSDEMCanvasSlide||(typeof FOSDEMCanvasSlide=="undefined"?nil:FOSDEMCanvasSlide)}
function $FOSDEMAmberBackend(){return smalltalk.FOSDEMAmberBackend||(typeof FOSDEMAmberBackend=="undefined"?nil:FOSDEMAmberBackend)}
function $FOSDEMREPLSlide(){return smalltalk.FOSDEMREPLSlide||(typeof FOSDEMREPLSlide=="undefined"?nil:FOSDEMREPLSlide)}
function $FOSDEMCLISlide(){return smalltalk.FOSDEMCLISlide||(typeof FOSDEMCLISlide=="undefined"?nil:FOSDEMCLISlide)}
function $FOSDEMContributionsSlide(){return smalltalk.FOSDEMContributionsSlide||(typeof FOSDEMContributionsSlide=="undefined"?nil:FOSDEMContributionsSlide)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[$FOSDEMIntroSlide(),$FOSDEMAmberZeroNine(),$CountersSlide(),$IDESlide(),$JtalkAndJavascriptSlide(),$FOSDEMJSPlayGroundSlide(),$FOSDEMJSToSmalltalk(),$FOSDEMBookletSlide(),$FOSDEMTwitter(),$FOSDEMCanvasSlide(),$FOSDEMAmberBackend(),$FOSDEMREPLSlide(),$FOSDEMCLISlide(),$FOSDEMContributionsSlide()];
return $1;
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},smalltalk.FOSDEM2012Presentation)})},
args: [],
source: "slideClasses\x0a^ {\x0a\x09FOSDEMIntroSlide.\x0a\x09FOSDEMAmberZeroNine.\x0a\x09CountersSlide.\x0a\x09IDESlide.\x0a\x09JtalkAndJavascriptSlide.\x0a\x09FOSDEMJSPlayGroundSlide.\x0a\x09FOSDEMJSToSmalltalk.\x0a\x09FOSDEMBookletSlide.\x0a\x09FOSDEMTwitter.\x0a\x09FOSDEMCanvasSlide.\x0a\x09FOSDEMAmberBackend.\x0a\x09FOSDEMREPLSlide.\x0a\x09FOSDEMCLISlide.\x0a\x09FOSDEMContributionsSlide\x0a}",
messageSends: [],
referencedClasses: ["FOSDEMIntroSlide", "FOSDEMAmberZeroNine", "CountersSlide", "IDESlide", "JtalkAndJavascriptSlide", "FOSDEMJSPlayGroundSlide", "FOSDEMJSToSmalltalk", "FOSDEMBookletSlide", "FOSDEMTwitter", "FOSDEMCanvasSlide", "FOSDEMAmberBackend", "FOSDEMREPLSlide", "FOSDEMCLISlide", "FOSDEMContributionsSlide"]
}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 700px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a\x0a.slide.blue3d {\x0a  background: #feffff;\x0a  background: -moz-linear-gradient(top, #feffff 0%, #d2ebf9 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feffff), color-stop(100%,#d2ebf9));\x0a  background: -webkit-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -o-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -ms-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#feffff\x22, endColorstr=\x22#d2ebf9\x22,GradientType=0 );\x0a  background: linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a}\x0a\x0a\x0a.slide.red3d {\x0a  background: #febbbb;\x0a  background: -moz-linear-gradient(top, #febbbb 0%, #fe9090 71%, #ff5c5c 95%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#febbbb), color-stop(71%,#fe9090), color-stop(95%,#ff5c5c));\x0a  background: -webkit-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -o-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -ms-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#febbbb\x22, endColorstr=\x22#ff5c5c\x22,GradientType=0 );\x0a  background: linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a}\x0a\x0a\x0a.slide.green3d {\x0a  background: #cdeb8e;\x0a  background: -moz-linear-gradient(top, #cdeb8e 0%, #a5c956 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cdeb8e), color-stop(100%,#a5c956));\x0a  background: -webkit-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -o-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -ms-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#cdeb8e\x22, endColorstr=\x22#a5c956\x22,GradientType=0 );\x0a  background: linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a}\x0a\x0a@-webkit-keyframes rotate-horizontal {\x0a\x090% { -webkit-transform: perspective(1000px) rotateY(-10deg);}\x0a\x09100% { -webkit-transform: perspective(1000px) rotateY(10deg);}\x0a}\x0a\x0a.animate p{\x0a-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a#FOSDEMAmberBackend img {\x0a\x09margin: 5px;\x0a\x09-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a\x0a.tweet {\x0a\x09background-color: #aaa;\x0a\x09color: black;\x0a\x09padding: 10px;\x0a\x09border-radius: 10px;\x0a\x09border: 5px solid #eee;\x0a\x09margin: 10px;\x0a}\x0a\x0a.tweet img {\x0a\x09vertical-align: top;\x0a\x09margin-right: 10px;\x0a}\x0a\x0a.tweet span:first-child {\x0a\x09float: right;\x0a}\x0a";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.FOSDEM2012Presentation)})},
args: [],
source: "style\x0a\x09^'\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 700px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a\x0a.slide.blue3d {\x0a  background: #feffff;\x0a  background: -moz-linear-gradient(top, #feffff 0%, #d2ebf9 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feffff), color-stop(100%,#d2ebf9));\x0a  background: -webkit-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -o-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -ms-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#feffff\x22, endColorstr=\x22#d2ebf9\x22,GradientType=0 );\x0a  background: linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a}\x0a\x0a\x0a.slide.red3d {\x0a  background: #febbbb;\x0a  background: -moz-linear-gradient(top, #febbbb 0%, #fe9090 71%, #ff5c5c 95%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#febbbb), color-stop(71%,#fe9090), color-stop(95%,#ff5c5c));\x0a  background: -webkit-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -o-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -ms-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#febbbb\x22, endColorstr=\x22#ff5c5c\x22,GradientType=0 );\x0a  background: linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a}\x0a\x0a\x0a.slide.green3d {\x0a  background: #cdeb8e;\x0a  background: -moz-linear-gradient(top, #cdeb8e 0%, #a5c956 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cdeb8e), color-stop(100%,#a5c956));\x0a  background: -webkit-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -o-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -ms-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#cdeb8e\x22, endColorstr=\x22#a5c956\x22,GradientType=0 );\x0a  background: linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a}\x0a\x0a@-webkit-keyframes rotate-horizontal {\x0a\x090% { -webkit-transform: perspective(1000px) rotateY(-10deg);}\x0a\x09100% { -webkit-transform: perspective(1000px) rotateY(10deg);}\x0a}\x0a\x0a.animate p{\x0a-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a#FOSDEMAmberBackend img {\x0a\x09margin: 5px;\x0a\x09-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a\x0a.tweet {\x0a\x09background-color: #aaa;\x0a\x09color: black;\x0a\x09padding: 10px;\x0a\x09border-radius: 10px;\x0a\x09border: 5px solid #eee;\x0a\x09margin: 10px;\x0a}\x0a\x0a.tweet img {\x0a\x09vertical-align: top;\x0a\x09margin-right: 10px;\x0a}\x0a\x0a.tweet span:first-child {\x0a\x09float: right;\x0a}\x0a'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "http://amber-lang.net";
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.FOSDEM2012Presentation)})},
args: [],
source: "url\x0a\x09^'http://amber-lang.net'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation);


smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.FOSDEM2012Presentation.klass)})},
args: [],
source: "isConcrete\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Amber";
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.FOSDEM2012Presentation.klass)})},
args: [],
source: "title\x0a\x09^'Amber'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEM2012Presentation.klass);


smalltalk.addClass('SweSUG2012Presentation', smalltalk.Presentation, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Göran Krampe";
}, function($ctx1) {$ctx1.fill(self,"author",{},smalltalk.SweSUG2012Presentation)})},
args: [],
source: "author\x0a\x09^'Göran Krampe'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "SweSUG 2012, Stockholm";
}, function($ctx1) {$ctx1.fill(self,"description",{},smalltalk.SweSUG2012Presentation)})},
args: [],
source: "description\x0a\x09^'SweSUG 2012, Stockholm'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "goran@krampe.se";
}, function($ctx1) {$ctx1.fill(self,"email",{},smalltalk.SweSUG2012Presentation)})},
args: [],
source: "email\x0a\x09^'goran@krampe.se'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
category: 'accessing',
fn: function (){
var self=this;
function $SweSUGIntroSlide(){return smalltalk.SweSUGIntroSlide||(typeof SweSUGIntroSlide=="undefined"?nil:SweSUGIntroSlide)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $SweSUGAboutSlide(){return smalltalk.SweSUGAboutSlide||(typeof SweSUGAboutSlide=="undefined"?nil:SweSUGAboutSlide)}
function $SweSUGWhatIsAmberSlide(){return smalltalk.SweSUGWhatIsAmberSlide||(typeof SweSUGWhatIsAmberSlide=="undefined"?nil:SweSUGWhatIsAmberSlide)}
function $SweSUGAmberFeaturesSlide(){return smalltalk.SweSUGAmberFeaturesSlide||(typeof SweSUGAmberFeaturesSlide=="undefined"?nil:SweSUGAmberFeaturesSlide)}
function $SweSUGWorkspaceSlide(){return smalltalk.SweSUGWorkspaceSlide||(typeof SweSUGWorkspaceSlide=="undefined"?nil:SweSUGWorkspaceSlide)}
function $IDESlide(){return smalltalk.IDESlide||(typeof IDESlide=="undefined"?nil:IDESlide)}
function $CountersSlide(){return smalltalk.CountersSlide||(typeof CountersSlide=="undefined"?nil:CountersSlide)}
function $JtalkAndJavascriptSlide(){return smalltalk.JtalkAndJavascriptSlide||(typeof JtalkAndJavascriptSlide=="undefined"?nil:JtalkAndJavascriptSlide)}
function $JtalkAndJavascriptSlide2(){return smalltalk.JtalkAndJavascriptSlide2||(typeof JtalkAndJavascriptSlide2=="undefined"?nil:JtalkAndJavascriptSlide2)}
function $JtalkAndJavascriptSlide3(){return smalltalk.JtalkAndJavascriptSlide3||(typeof JtalkAndJavascriptSlide3=="undefined"?nil:JtalkAndJavascriptSlide3)}
function $JtalkAndJavascriptSlide4(){return smalltalk.JtalkAndJavascriptSlide4||(typeof JtalkAndJavascriptSlide4=="undefined"?nil:JtalkAndJavascriptSlide4)}
function $JtalkAndCLI(){return smalltalk.JtalkAndCLI||(typeof JtalkAndCLI=="undefined"?nil:JtalkAndCLI)}
function $JtalkAndNode(){return smalltalk.JtalkAndNode||(typeof JtalkAndNode=="undefined"?nil:JtalkAndNode)}
function $JtalkAndNode2(){return smalltalk.JtalkAndNode2||(typeof JtalkAndNode2=="undefined"?nil:JtalkAndNode2)}
function $JtalkAndNode3(){return smalltalk.JtalkAndNode3||(typeof JtalkAndNode3=="undefined"?nil:JtalkAndNode3)}
function $JtalkAndWebOS(){return smalltalk.JtalkAndWebOS||(typeof JtalkAndWebOS=="undefined"?nil:JtalkAndWebOS)}
function $JtalkAndEnyo(){return smalltalk.JtalkAndEnyo||(typeof JtalkAndEnyo=="undefined"?nil:JtalkAndEnyo)}
function $ContributionsSlide(){return smalltalk.ContributionsSlide||(typeof ContributionsSlide=="undefined"?nil:ContributionsSlide)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._new();
_st($2)._add_($SweSUGIntroSlide());
_st($2)._add_($SweSUGAboutSlide());
_st($2)._add_($SweSUGWhatIsAmberSlide());
_st($2)._add_($SweSUGAmberFeaturesSlide());
_st($2)._add_($SweSUGWorkspaceSlide());
_st($2)._add_($IDESlide());
_st($2)._add_($CountersSlide());
_st($2)._add_($JtalkAndJavascriptSlide());
_st($2)._add_($JtalkAndJavascriptSlide2());
_st($2)._add_($JtalkAndJavascriptSlide3());
_st($2)._add_($JtalkAndJavascriptSlide4());
_st($2)._add_($JtalkAndCLI());
_st($2)._add_($JtalkAndNode());
_st($2)._add_($JtalkAndNode2());
_st($2)._add_($JtalkAndNode3());
_st($2)._add_($JtalkAndWebOS());
_st($2)._add_($JtalkAndEnyo());
_st($2)._add_($ContributionsSlide());
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},smalltalk.SweSUG2012Presentation)})},
args: [],
source: "slideClasses\x0a\x09^Array new\x0a\x09\x09add: SweSUGIntroSlide;\x0a\x09\x09add: SweSUGAboutSlide;\x0a\x09\x09add: SweSUGWhatIsAmberSlide;\x0a\x09\x09add: SweSUGAmberFeaturesSlide;\x0a\x09\x09add: SweSUGWorkspaceSlide;\x0a\x09\x09add: IDESlide;\x0a\x09\x09add: CountersSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide2;\x0a\x09\x09add: JtalkAndJavascriptSlide3;\x0a\x09\x09add: JtalkAndJavascriptSlide4;\x0a\x09\x09add: JtalkAndCLI;\x0a\x09\x09add: JtalkAndNode;\x0a\x09\x09add: JtalkAndNode2;\x0a\x09\x09add: JtalkAndNode3;\x0a\x09\x09add: JtalkAndWebOS;\x0a\x09\x09add: JtalkAndEnyo;\x0a\x09\x09add: ContributionsSlide;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "yourself"],
referencedClasses: ["SweSUGIntroSlide", "Array", "SweSUGAboutSlide", "SweSUGWhatIsAmberSlide", "SweSUGAmberFeaturesSlide", "SweSUGWorkspaceSlide", "IDESlide", "CountersSlide", "JtalkAndJavascriptSlide", "JtalkAndJavascriptSlide2", "JtalkAndJavascriptSlide3", "JtalkAndJavascriptSlide4", "JtalkAndCLI", "JtalkAndNode", "JtalkAndNode2", "JtalkAndNode3", "JtalkAndWebOS", "JtalkAndEnyo", "ContributionsSlide"]
}),
smalltalk.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.SweSUG2012Presentation)})},
args: [],
source: "style\x0a\x09^'\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "http://www.amber-lang.net";
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.SweSUG2012Presentation)})},
args: [],
source: "url\x0a\x09^'http://www.amber-lang.net'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUG2012Presentation);


smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.SweSUG2012Presentation.klass)})},
args: [],
source: "isConcrete\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUG2012Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Amber rocks!";
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.SweSUG2012Presentation.klass)})},
args: [],
source: "title\x0a\x09^'Amber rocks!'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUG2012Presentation.klass);


smalltalk.addClass('PresentationNavigator', smalltalk.Widget, ['presentationBrush', 'currentPresentation', 'slideSelect'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "checkHash",
category: 'hash',
fn: function (){
var self=this;
var hash,presentation;
function $Presentation(){return smalltalk.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
hash=_st(_st(_st(_st(document)._location())._hash())._replace_with_("^#",""))._tokenize_("-");
presentation=_st(_st($Presentation())._concretePresentations())._detect_ifNone_((function(aPresentationClass){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aPresentationClass)._name()).__eq_eq(_st(hash)._first());
}, function($ctx2) {$ctx2.fillBlock({aPresentationClass:aPresentationClass},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
$1=self;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st(presentation).__eq_eq(_st(self._currentPresentation())._class());
if(! smalltalk.assert($2)){
self._selectPresentationNamed_(presentation);
self._selectSlideAt_(_st(hash)._last());
};
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"checkHash",{hash:hash,presentation:presentation},smalltalk.PresentationNavigator)})},
args: [],
source: "checkHash\x0a\x09| hash presentation |\x0a\x09hash := (document location hash  replace: '^#' with: '') tokenize: '-'. \x0a\x09presentation := Presentation concretePresentations \x0a\x09\x09\x09\x09detect: [:aPresentationClass | aPresentationClass name == hash first]\x0a\x09\x09\x09\x09ifNone: [^ self].\x0a\x09presentation == self currentPresentation class ifFalse: [\x0a          \x09self selectPresentationNamed: presentation.\x0a          \x09self selectSlideAt: hash last\x0a        ].",
messageSends: ["tokenize:", "replace:with:", "hash", "location", "detect:ifNone:", "==", "first", "name", "concretePresentations", "ifFalse:", "selectPresentationNamed:", "selectSlideAt:", "last", "class", "currentPresentation"],
referencedClasses: ["Presentation"]
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "checkHashChange",
category: 'hash',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_(window))._bind_do_("hashchange",(function(){
return smalltalk.withContext(function($ctx2) {
return self._checkHash();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkHashChange",{},smalltalk.PresentationNavigator)})},
args: [],
source: "checkHashChange\x0a\x09(window jQuery: window) bind: 'hashchange' do: [self checkHash]",
messageSends: ["bind:do:", "checkHash", "jQuery:"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPresentation",
category: 'accessing',
fn: function (){
var self=this;
function $Presentation(){return smalltalk.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@currentPresentation"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@currentPresentation"]=_st(_st(_st($Presentation())._concretePresentations())._first())._new();
$1=self["@currentPresentation"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPresentation",{},smalltalk.PresentationNavigator)})},
args: [],
source: "currentPresentation\x0a\x09^  currentPresentation ifNil: [currentPresentation := Presentation concretePresentations first new].",
messageSends: ["ifNil:", "new", "first", "concretePresentations"],
referencedClasses: ["Presentation"]
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPresentation:",
category: 'accessing',
fn: function (aPresentation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentPresentation"]=aPresentation;
return self}, function($ctx1) {$ctx1.fill(self,"currentPresentation:",{aPresentation:aPresentation},smalltalk.PresentationNavigator)})},
args: ["aPresentation"],
source: "currentPresentation: aPresentation\x0a\x09currentPresentation := aPresentation.",
messageSends: [],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "nextSlide",
category: 'callbacks',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentPresentation())._nextSlide();
self._updateHash();
return self}, function($ctx1) {$ctx1.fill(self,"nextSlide",{},smalltalk.PresentationNavigator)})},
args: [],
source: "nextSlide\x0a\x09self currentPresentation nextSlide.\x0a\x09self updateHash.",
messageSends: ["nextSlide", "currentPresentation", "updateHash"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(window)._jQuery_(document))._ready_((function(){
return smalltalk.withContext(function($ctx2) {
$1=self;
_st($1)._appendToJQuery_("body"._asJQuery());
_st($1)._setKeybindings();
$2=_st($1)._checkHashChange();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.PresentationNavigator)})},
args: [],
source: "open\x0a\x09(window jQuery: document)  ready: [\x0a          \x09self \x0a          \x09\x09appendToJQuery: 'body' asJQuery;\x0a          \x09\x09setKeybindings;\x0a          \x09\x09checkHashChange.\x0a        ].",
messageSends: ["ready:", "appendToJQuery:", "asJQuery", "setKeybindings", "checkHashChange", "jQuery:"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "previousSlide",
category: 'callbacks',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentPresentation())._previousSlide();
self._updateHash();
return self}, function($ctx1) {$ctx1.fill(self,"previousSlide",{},smalltalk.PresentationNavigator)})},
args: [],
source: "previousSlide\x0a\x09self currentPresentation previousSlide.\x0a\x09self updateHash.",
messageSends: ["previousSlide", "currentPresentation", "updateHash"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "reload",
category: 'callbacks',
fn: function (){
var self=this;
var slideIndex;
return smalltalk.withContext(function($ctx1) { 
slideIndex=_st(self._currentPresentation())._currentSlideIndex();
self._currentPresentation_(_st(_st(self._currentPresentation())._class())._new());
self._renderCurrentPresentation();
self._selectSlideAt_(slideIndex);
return self}, function($ctx1) {$ctx1.fill(self,"reload",{slideIndex:slideIndex},smalltalk.PresentationNavigator)})},
args: [],
source: "reload\x0a\x09|slideIndex|\x0a\x09slideIndex := self currentPresentation currentSlideIndex.\x0a\x09self currentPresentation: self currentPresentation class new.\x0a\x09self renderCurrentPresentation.\x0a\x09self selectSlideAt: slideIndex.",
messageSends: ["currentSlideIndex", "currentPresentation", "currentPresentation:", "new", "class", "renderCurrentPresentation", "selectSlideAt:"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCurrentPresentation",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@presentationBrush"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(self._currentPresentation())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
self._updateSlideSelect();
return self}, function($ctx1) {$ctx1.fill(self,"renderCurrentPresentation",{},smalltalk.PresentationNavigator)})},
args: [],
source: "renderCurrentPresentation\x0a\x09presentationBrush contents: [:html |\x0a        \x09self currentPresentation renderOn: html.\x0a        ].\x0a\x09self updateSlideSelect.",
messageSends: ["contents:", "renderOn:", "currentPresentation", "updateSlideSelect"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$4,$7,$8;
$1=_st(html)._style();
_st($1)._type_("text/css");
$2=_st($1)._with_(self._style());
$3=_st(html)._div();
_st($3)._id_("navigator");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=self;
_st($5)._renderToolsOn_(html);
_st($5)._renderPresentationSelectOn_(html);
$6=_st($5)._renderSlideSelectOn_(html);
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st(html)._div();
_st($7)._id_("presentation");
$8=_st($7)._yourself();
self["@presentationBrush"]=$8;
self._checkHash();
self._renderCurrentPresentation();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.PresentationNavigator)})},
args: ["html"],
source: "renderOn: html\x0a\x09html style\x0a\x09\x09type: 'text/css';\x0a\x09\x09with: self style.\x0a\x09html div\x0a\x09\x09id: 'navigator';\x0a\x09\x09with: [\x09self\x0a\x09\x09\x09\x09\x09renderToolsOn: html;\x0a\x09\x09\x09\x09\x09renderPresentationSelectOn: html;\x0a                      \x09\x09\x09renderSlideSelectOn: html].\x0a\x0a\x09presentationBrush := html div \x0a\x09\x09\x09\x09\x09\x09\x09id: 'presentation';\x0a\x09\x09\x09\x09\x09\x09\x09yourself.\x0a\x0a\x09self checkHash.\x0a\x09self renderCurrentPresentation.",
messageSends: ["type:", "style", "with:", "id:", "div", "renderToolsOn:", "renderPresentationSelectOn:", "renderSlideSelectOn:", "yourself", "checkHash", "renderCurrentPresentation"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderPresentationSelectOn:",
category: 'rendering',
fn: function (html){
var self=this;
var presentationSelect;
function $Presentation(){return smalltalk.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
presentationSelect=_st(html)._select();
$1=presentationSelect;
_st($1)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selectPresentationNamed_(_st(_st(presentationSelect)._asJQuery())._val());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($Presentation())._concretePresentationsDo_((function(aPresentationClass){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._option();
_st($3)._value_(_st(aPresentationClass)._name());
$4=_st($3)._with_(_st(aPresentationClass)._title());
return $4;
}, function($ctx3) {$ctx3.fillBlock({aPresentationClass:aPresentationClass},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderPresentationSelectOn:",{html:html,presentationSelect:presentationSelect},smalltalk.PresentationNavigator)})},
args: ["html"],
source: "renderPresentationSelectOn: html\x0a\x09|presentationSelect|\x0a\x09presentationSelect := html select.\x0a\x09presentationSelect\x0a\x09\x09onChange: [self  selectPresentationNamed:  presentationSelect asJQuery val];\x0a\x09\x09with: [\x09Presentation concretePresentationsDo: [:aPresentationClass |   \x0a                                                              \x09\x09\x09\x09\x09\x09\x09html option\x0a                                                              \x09\x09\x09\x09\x09\x09\x09\x09value: aPresentationClass name;\x0a                                                              \x09\x09\x09\x09\x09\x09\x09\x09with: aPresentationClass title ] ].",
messageSends: ["select", "onChange:", "selectPresentationNamed:", "val", "asJQuery", "with:", "concretePresentationsDo:", "value:", "name", "option", "title"],
referencedClasses: ["Presentation"]
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideSelectOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@slideSelect"]=_st(html)._select();
_st(self["@slideSelect"])._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selectSlideAt_(_st(_st(self["@slideSelect"])._asJQuery())._val());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._updateSlideSelect();
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideSelectOn:",{html:html},smalltalk.PresentationNavigator)})},
args: ["html"],
source: "renderSlideSelectOn: html\x0a\x09slideSelect := html select.\x0a\x09slideSelect onChange: [ self  selectSlideAt:  slideSelect asJQuery val ].\x0a\x09self updateSlideSelect.",
messageSends: ["select", "onChange:", "selectSlideAt:", "val", "asJQuery", "updateSlideSelect"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderToolsOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $TabManager(){return smalltalk.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st(html)._a();
_st($1)._with_("IDE");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($TabManager())._current())._open();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._a();
_st($3)._with_("Reload");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._reload();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._a();
_st($5)._with_("←");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._previousSlide();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st(html)._a();
_st($7)._with_("→");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._nextSlide();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderToolsOn:",{html:html},smalltalk.PresentationNavigator)})},
args: ["html"],
source: "renderToolsOn: html\x0a\x09html a \x0a\x09\x09with: 'IDE';\x0a\x09\x09onClick: [TabManager current open].\x0a\x09html a\x0a\x09\x09with: 'Reload';\x0a\x09\x09onClick: [self reload].\x0a\x09html a\x0a\x09\x09with: '←';\x0a\x09\x09onClick: [self previousSlide].\x0a\x09html a\x0a\x09\x09with: '→';\x0a\x09\x09onClick: [self nextSlide].",
messageSends: ["with:", "a", "onClick:", "open", "current", "reload", "previousSlide", "nextSlide"],
referencedClasses: ["TabManager"]
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "selectPresentation:",
category: 'callbacks',
fn: function (aPresentationClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._currentPresentation_(_st(aPresentationClass)._new());
self._renderCurrentPresentation();
return self}, function($ctx1) {$ctx1.fill(self,"selectPresentation:",{aPresentationClass:aPresentationClass},smalltalk.PresentationNavigator)})},
args: ["aPresentationClass"],
source: "selectPresentation: aPresentationClass\x0a\x09self currentPresentation: aPresentationClass new.\x0a\x09self renderCurrentPresentation.",
messageSends: ["currentPresentation:", "new", "renderCurrentPresentation"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "selectPresentationNamed:",
category: 'callbacks',
fn: function (aString){
var self=this;
var presentationClass;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1;
presentationClass=_st(_st($Smalltalk())._current())._at_(aString);
$1=presentationClass;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._selectPresentation_(presentationClass);
};
return self}, function($ctx1) {$ctx1.fill(self,"selectPresentationNamed:",{aString:aString,presentationClass:presentationClass},smalltalk.PresentationNavigator)})},
args: ["aString"],
source: "selectPresentationNamed: aString\x0a\x09|presentationClass|\x0a\x09presentationClass :=  (Smalltalk current at: aString).\x0a\x09presentationClass ifNotNil: [ self selectPresentation: presentationClass ].",
messageSends: ["at:", "current", "ifNotNil:", "selectPresentation:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "selectSlideAt:",
category: 'callbacks',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentPresentation())._moveAt_(anInteger);
self._updateHash();
return self}, function($ctx1) {$ctx1.fill(self,"selectSlideAt:",{anInteger:anInteger},smalltalk.PresentationNavigator)})},
args: ["anInteger"],
source: "selectSlideAt: anInteger\x0a\x09self currentPresentation moveAt: anInteger.\x0a\x09self updateHash.",
messageSends: ["moveAt:", "currentPresentation", "updateHash"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "setKeybindings",
category: 'keybindings',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(_st(window)._jQuery_(document))._keyup_((function(e){
var node;
return smalltalk.withContext(function($ctx2) {
node=_st(_st(_st(e)._target())._nodeName())._asLowercase();
node;
$1=_st(_st(node).__eq("textarea"))._or_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(node).__eq("input");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(! smalltalk.assert($1)){
$2=_st(_st(e)._keyCode()).__eq((39));
if(smalltalk.assert($2)){
self._nextSlide();
};
$3=_st(_st(e)._keyCode()).__eq((37));
if(smalltalk.assert($3)){
return self._previousSlide();
};
};
}, function($ctx2) {$ctx2.fillBlock({e:e,node:node},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setKeybindings",{},smalltalk.PresentationNavigator)})},
args: [],
source: "setKeybindings\x0a\x09(window jQuery: document) keyup: [:e || node |\x0a\x09\x09node := e target nodeName asLowercase.\x0a\x09\x09(node = 'textarea' or: [node = 'input']) ifFalse: [\x0a\x09\x09\x09e keyCode = 39 ifTrue: [self nextSlide].\x0a\x09\x09\x09e keyCode = 37 ifTrue: [self previousSlide]]]",
messageSends: ["keyup:", "asLowercase", "nodeName", "target", "ifFalse:", "ifTrue:", "nextSlide", "=", "keyCode", "previousSlide", "or:", "jQuery:"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "\x0a#navigator {\x0a    z-index: 1;\x0a    position: fixed;\x0a    top: 0;\x0a    left: 50%;\x0a    margin-left: -150px;\x0a    padding: 5px;\x0a    border-radius: 5px;\x0a    -moz-border-radius: 5px;\x0a    -webkit-border-radius: 5px;\x0a    background: #333;\x0a    opacity: 0.3;\x0a    color: #eee;\x0a}\x0a\x0a#navigator a {\x0a    font-weight: bold;\x0a    color: #eee;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a    padding: 0 2px;\x0a    font-size: 14px;\x0a}\x0a\x0a#navigator:hover {\x0a    opacity: 0.8;\x0a}\x0a";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.PresentationNavigator)})},
args: [],
source: "style\x0a\x09^ '\x0a#navigator {\x0a    z-index: 1;\x0a    position: fixed;\x0a    top: 0;\x0a    left: 50%;\x0a    margin-left: -150px;\x0a    padding: 5px;\x0a    border-radius: 5px;\x0a    -moz-border-radius: 5px;\x0a    -webkit-border-radius: 5px;\x0a    background: #333;\x0a    opacity: 0.3;\x0a    color: #eee;\x0a}\x0a\x0a#navigator a {\x0a    font-weight: bold;\x0a    color: #eee;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a    padding: 0 2px;\x0a    font-size: 14px;\x0a}\x0a\x0a#navigator:hover {\x0a    opacity: 0.8;\x0a}\x0a'",
messageSends: [],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "updateHash",
category: 'callbacks',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(document)._location())._hash_(_st(_st(_st(_st(self._currentPresentation())._class())._name()).__comma("-")).__comma(_st(self._currentPresentation())._currentSlideIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"updateHash",{},smalltalk.PresentationNavigator)})},
args: [],
source: "updateHash\x0a\x09document location hash: self currentPresentation class name, '-', self currentPresentation currentSlideIndex.",
messageSends: ["hash:", ",", "currentSlideIndex", "currentPresentation", "name", "class", "location"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSlideSelect",
category: 'rendering',
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
}, function($ctx3) {$ctx3.fillBlock({aSlide:aSlide},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html,index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateSlideSelect",{},smalltalk.PresentationNavigator)})},
args: [],
source: "updateSlideSelect\x0a\x09slideSelect contents: [:html| |index|\x0a\x09\x09                       \x09\x09index := 0.\x0a                \x09\x09       \x09\x09self currentPresentation slidesDo: [ :aSlide|  \x0a                                \x09\x09                                    \x09\x09\x09\x09index := index + 1.\x0a                                                \x09\x09                    \x09\x09\x09\x09html option\x0a                                                                \x09\x09    \x09\x09\x09\x09\x09value: index;\x0a                                                            \x09\x09\x09\x09\x09\x09\x09\x09with: aSlide title ] ].",
messageSends: ["contents:", "slidesDo:", "+", "value:", "option", "with:", "title", "currentPresentation"],
referencedClasses: []
}),
smalltalk.PresentationNavigator);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.PresentationNavigator.klass)})},
args: [],
source: "initialize\x0a\x09^ self open",
messageSends: ["open"],
referencedClasses: []
}),
smalltalk.PresentationNavigator.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'initialize',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.PresentationNavigator.klass)})},
args: [],
source: "open\x0a\x09^ self new open",
messageSends: ["open", "new"],
referencedClasses: []
}),
smalltalk.PresentationNavigator.klass);


smalltalk.addClass('Slide', smalltalk.Widget, ['presentation'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#555";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.Slide)})},
args: [],
source: "backgroundColor\x0a\x09^'#555'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.Slide)})},
args: [],
source: "cssClass\x0a\x09^'slide'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.Slide)})},
args: [],
source: "id\x0a\x09^ self class name",
messageSends: ["name", "class"],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "presentation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@presentation"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"presentation",{},smalltalk.Slide)})},
args: [],
source: "presentation\x0a\x09^presentation",
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "presentation:",
category: 'accessing',
fn: function (aPresentation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@presentation"]=aPresentation;
return self}, function($ctx1) {$ctx1.fill(self,"presentation:",{aPresentation:aPresentation},smalltalk.Slide)})},
args: ["aPresentation"],
source: "presentation: aPresentation\x0a\x09presentation := aPresentation",
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMetaOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
$1=_st(html)._div();
_st($1)._id_("meta");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._p();
_st($3)._class_("title");
$4=_st($3)._with_(_st(self._presentation())._title());
$4;
$5=_st(html)._p();
_st($5)._class_("description");
$6=_st($5)._with_(_st(self._presentation())._description());
$6;
$7=_st(html)._a();
_st($7)._class_("author");
_st($7)._with_(_st(self._presentation())._author());
$8=_st($7)._href_("mailto:".__comma(_st(self._presentation())._email()));
$8;
$9=_st(html)._a();
_st($9)._class_("url");
_st($9)._with_(_st(self._presentation())._url());
$10=_st($9)._href_(_st(self._presentation())._url());
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderMetaOn:",{html:html},smalltalk.Slide)})},
args: ["html"],
source: "renderMetaOn: html\x0a\x09html div \x0a\x09\x09id: 'meta';\x0a\x09\x09with: [\x0a\x09\x09\x09html p class: 'title'; with: self presentation title.\x0a\x09\x09\x09html p class: 'description'; with: self presentation description.\x0a\x09\x09\x09html a class: 'author'; with: self presentation author; href: 'mailto:', self presentation email.\x0a\x09\x09\x09html a class: 'url'; with: self presentation url; href: self presentation url]",
messageSends: ["id:", "div", "with:", "class:", "p", "title", "presentation", "description", "a", "author", "href:", ",", "email", "url"],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Slide)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div class: self cssClass; id: self id; with: [\x0a\x09\x09self renderSlideOn: html.\x0a\x09\x09self renderMetaOn: html]",
messageSends: ["class:", "cssClass", "div", "id:", "id", "with:", "renderSlideOn:", "renderMetaOn:"],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.Slide)})},
args: ["html"],
source: "renderSlideOn: html",
messageSends: [],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._backgroundColor();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(_st(window)._jQuery_("#slides"))._css_color_("background",self._backgroundColor());
};
_st(_st(window)._jQuery_(".slide"))._hide_options_duration_(_st(self._presentation())._slideTransition(),[],(300));
_st(_st(window)._jQuery_("#".__comma(self._id())))._show_options_duration_(_st(self._presentation())._slideTransition(),[],(300));
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.Slide)})},
args: [],
source: "show\x0a\x09self backgroundColor ifNotNil: [\x0a\x09\x09(window jQuery: '#slides') css: 'background' color: self backgroundColor].\x0a\x09(window jQuery: '.slide') hide: self presentation slideTransition options: #() duration: 300.\x0a\x09(window jQuery: '#', self id) show: self presentation slideTransition options: #() duration: 300.",
messageSends: ["ifNotNil:", "css:color:", "backgroundColor", "jQuery:", "hide:options:duration:", "slideTransition", "presentation", "show:options:duration:", ",", "id"],
referencedClasses: []
}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._id();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.Slide)})},
args: [],
source: "title\x0a\x09^ self id",
messageSends: ["id"],
referencedClasses: []
}),
smalltalk.Slide);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (aPresentation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._presentation_(aPresentation);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aPresentation:aPresentation},smalltalk.Slide.klass)})},
args: ["aPresentation"],
source: "on: aPresentation\x0a\x09^self new\x0a\x09\x09presentation: aPresentation;\x0a\x09\x09yourself",
messageSends: ["presentation:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.Slide.klass);


smalltalk.addClass('AboutSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "white";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.AboutSlide)})},
args: [],
source: "backgroundColor\x0a\x09^'white'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide transparent white";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.AboutSlide)})},
args: [],
source: "cssClass\x0a\x09^'slide transparent white'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "about";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.AboutSlide)})},
args: [],
source: "id\x0a\x09^'about'",
messageSends: [],
referencedClasses: []
}),
smalltalk.AboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $Presentation(){return smalltalk.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("About this presentation");
_st(_st(html)._p())._with_("This presentation is entirely written in Jtalk and is licensed under CC BY-SA.");
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Press ");
_st(_st(html)._code())._with_("←");
_st(html)._with_(" to move backward and ");
_st(_st(html)._code())._with_(" →");
return _st(html)._with_(" to move forward.");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Open a ");
$3=_st(html)._button();
_st($3)._with_("browser");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st($Browser())._openOn_($Presentation());
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$4;
return _st(html)._with_(" to edit the source code.");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.AboutSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'About this presentation'.\x0a\x09\x09html p with: 'This presentation is entirely written in Jtalk and is licensed under CC BY-SA.'.\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Press '.\x0a\x09\x09\x09html code with: '←'.\x0a\x09\x09\x09html with: ' to move backward and '.\x0a\x09\x09\x09html code with: ' →'.\x0a\x09\x09\x09html with: ' to move forward.'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Open a '.\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09with: 'browser';\x0a\x09\x09\x09\x09onClick: [Browser openOn: Presentation].\x0a\x09\x09\x09html with: ' to edit the source code.']]",
messageSends: ["class:", "div", "with:", "h1", "p", "code", "button", "onClick:", "openOn:"],
referencedClasses: ["Presentation", "Browser"]
}),
smalltalk.AboutSlide);



smalltalk.addClass('ContributionsSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "links";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.ContributionsSlide)})},
args: [],
source: "id\x0a\x09^'links'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ContributionsSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
$1=_st(html)._div();
_st($1)._class_("section");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._a();
_st($3)._href_("http://jtalk-project.org");
$4=_st($3)._with_("jtalk-project.org");
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._a();
_st($5)._href_("https://github.com/NicolasPetton/jtalk");
$6=_st($5)._with_("github.com/NicolasPetton/jtalk");
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._a();
_st($7)._href_("http://http://groups.google.com/group/jtalk-project");
$8=_st($7)._with_("groups.google.com/group/jtalk-project");
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.ContributionsSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section'; with: [\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://jtalk-project.org'; with: 'jtalk-project.org'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'https://github.com/NicolasPetton/jtalk'; with: 'github.com/NicolasPetton/jtalk'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://http://groups.google.com/group/jtalk-project'; with: 'groups.google.com/group/jtalk-project']]",
messageSends: ["class:", "div", "with:", "href:", "a", "p"],
referencedClasses: []
}),
smalltalk.ContributionsSlide);



smalltalk.addClass('CountersSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#18bd7d";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.CountersSlide)})},
args: [],
source: "backgroundColor\x0a\x09^'#18bd7d'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CountersSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "counters";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.CountersSlide)})},
args: [],
source: "id\x0a\x09^'counters'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CountersSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $Counter(){return smalltalk.Counter||(typeof Counter=="undefined"?nil:Counter)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("The counter example");
return _st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return (2)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st($Counter())._new())._renderOn_(html);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.CountersSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'The counter example'.\x0a\x09\x09html div with: [\x0a\x09\x09\x092 timesRepeat: [Counter new renderOn: html]]]",
messageSends: ["class:", "div", "with:", "h1", "timesRepeat:", "renderOn:", "new"],
referencedClasses: ["Counter"]
}),
smalltalk.CountersSlide);



smalltalk.addClass('FOSDEMSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.FOSDEMSlide)})},
args: [],
source: "codeSnippet\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.FOSDEMSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCodeSnippetOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SourceArea())._new();
_st($1)._renderOn_(html);
$2=_st($1)._editor();
_st($2)._setValue_(self._codeSnippet());
return self}, function($ctx1) {$ctx1.fill(self,"renderCodeSnippetOn:",{html:html},smalltalk.FOSDEMSlide)})},
args: ["html"],
source: "renderCodeSnippetOn: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: self codeSnippet.",
messageSends: ["setValue:", "codeSnippet", "renderOn:", "new", "editor"],
referencedClasses: ["SourceArea"]
}),
smalltalk.FOSDEMSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSnippet:on:",
category: 'rendering',
fn: function (aString,html){
var self=this;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SourceArea())._new();
_st($1)._renderOn_(html);
$2=_st($1)._editor();
_st($2)._setValue_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"renderSnippet:on:",{aString:aString,html:html},smalltalk.FOSDEMSlide)})},
args: ["aString", "html"],
source: "renderSnippet: aString on: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: aString.",
messageSends: ["setValue:", "renderOn:", "new", "editor"],
referencedClasses: ["SourceArea"]
}),
smalltalk.FOSDEMSlide);



smalltalk.addClass('FOSDEMAmberBackend', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide green3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.FOSDEMAmberBackend)})},
args: [],
source: "cssClass\x0a\x09^ 'slide green3d'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMAmberBackend);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
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
}, function($ctx3) {$ctx3.fillBlock({aString:aString},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMAmberBackend)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div\x0a\x09\x09class: 'section center';\x0a\x09\x09with: [\x09html h1: 'Need a backend ?'.\x0a\x09\x09\x09\x09{'nodejs.png'. 'php.gif'. 'rails.png'.   'pharo.png'. 'ambrhino.jpg'} do: [:aString |\x0a\x09\x09\x09\x09\x09\x09html img: 'fosdem2012/images/', aString.\x0a\x09\x09\x09\x09]\x0a\x09\x09]",
messageSends: ["class:", "div", "with:", "h1:", "do:", "img:", ","],
referencedClasses: []
}),
smalltalk.FOSDEMAmberBackend);



smalltalk.addClass('FOSDEMAmberZeroNine', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=html;
_st($3)._h1_("Amber 0.9.1 is out !");
_st($3)._div_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._cite())._with_("Now with over 43 forks on github and more than 230 followers the project:  http://www.amber-lang.net  ...is live and kicking!");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4=_st($3)._div_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._cite())._with_("-- Nicolas & Göran");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMAmberZeroNine)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div \x0a\x09\x09class: 'section center';\x0a\x09\x09with: [ \x09html \x0a\x09\x09\x09\x09\x09h1: 'Amber 0.9.1 is out !';\x0a\x09\x09\x09\x09\x09div: [html cite with: 'Now with over 43 forks on github and more than 230 followers the project:  http://www.amber-lang.net  ...is live and kicking!'];\x0a\x09\x09\x09\x09\x09div: [html cite with: '-- Nicolas & Göran'] ]",
messageSends: ["class:", "div", "with:", "h1:", "div:", "cite"],
referencedClasses: []
}),
smalltalk.FOSDEMAmberZeroNine);



smalltalk.addClass('FOSDEMBookletSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "bookletOptions",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["arrows".__minus_gt(true),"keyboard".__minus_gt(false),"pageNumbers".__minus_gt(false),"closed".__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bookletOptions",{},smalltalk.FOSDEMBookletSlide)})},
args: [],
source: "bookletOptions\x0a\x09^ #{ \x0a\x09\x09'arrows' -> true.\x0a\x09\x09'keyboard' -> false.\x0a\x09\x09'pageNumbers' -> false.\x0a\x09\x09'closed' -> true\x0a\x09}",
messageSends: ["->"],
referencedClasses: []
}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide blue3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.FOSDEMBookletSlide)})},
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBookOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $FOSDEMBookletSlide(){return smalltalk.FOSDEMBookletSlide||(typeof FOSDEMBookletSlide=="undefined"?nil:FOSDEMBookletSlide)}
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$7,$8,$6,$4,$2;
$1=_st(html)._div();
_st($1)._id_("book");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("b-load");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=html;
_st($5)._div_("Amber makes it easy to plug existing javascript libraires");
_st($5)._div_("Here is an example with the jQuery Booklet plugin");
_st($5)._div_("Want to see how ?");
$6=_st($5)._div_((function(){
return smalltalk.withContext(function($ctx4) {
$7=_st(html)._button();
_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st($Browser())._openOn_($FOSDEMBookletSlide());
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
$8=_st($7)._with_("Just browse the code :)");
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBookOn:",{html:html},smalltalk.FOSDEMBookletSlide)})},
args: ["html"],
source: "renderBookOn: html\x0a\x09html div \x0a\x09\x09id: 'book';\x0a\x09\x09with: [\x09html div\x0a\x09\x09\x09\x09\x09class: 'b-load';\x0a\x09\x09\x09\x09\x09with: [\x09html \x0a\x09\x09\x09\x09\x09\x09\x09\x09div: 'Amber makes it easy to plug existing javascript libraires';\x0a\x09\x09\x09\x09\x09\x09\x09\x09div: 'Here is an example with the jQuery Booklet plugin';\x0a\x09\x09\x09\x09\x09\x09\x09\x09div: 'Want to see how ?';\x0a\x09\x09\x09\x09\x09\x09\x09\x09div: [ html button\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09onClick: [Browser openOn: FOSDEMBookletSlide ];\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09with: 'Just browse the code :)'.\x09\x09\x09\x09\x09\x09] \x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09]\x09\x0a\x09\x09].",
messageSends: ["id:", "div", "with:", "class:", "div:", "onClick:", "openOn:", "button"],
referencedClasses: ["FOSDEMBookletSlide", "Browser"]
}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMBookletSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09self renderBookOn: html.\x0a\x09html link \x0a\x09\x09rel:'stylesheet';\x0a\x09\x09href: 'fosdem2012/lib/booklet/jquery.booklet.1.2.0.css'.\x0a\x09\x0a\x09html style: self style.\x0a\x09\x0a\x09jQuery \x0a\x09\x09getScript: 'fosdem2012/lib/booklet/jquery.booklet.1.2.0.min.js' \x09\x0a\x09\x09do: ['#book' asJQuery booklet: self bookletOptions].",
messageSends: ["renderBookOn:", "rel:", "link", "href:", "style:", "style", "getScript:do:", "booklet:", "bookletOptions", "asJQuery"],
referencedClasses: []
}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
category: 'css',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "\x0a#book { font-size: 1.4em; }\x0a#book .b-load .b-wrap-right { background-color: #DEC3A9;}\x0a#book .b-load .b-wrap-left { background-color: #DDD;} \x0a";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.FOSDEMBookletSlide)})},
args: [],
source: "style\x0a\x09^ '\x0a#book { font-size: 1.4em; }\x0a#book .b-load .b-wrap-right { background-color: #DEC3A9;}\x0a#book .b-load .b-wrap-left { background-color: #DDD;} \x0a'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMBookletSlide);



smalltalk.addClass('FOSDEMCLISlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "cd examples/nodejs/hello\x0a../../../bin/amberc -m Hello Hello.st Program\x0anode Program.js\x0a\x0aHello world from Amber in Node.js";
}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.FOSDEMCLISlide)})},
args: [],
source: "codeSnippet\x0a\x09^ \x0a'cd examples/nodejs/hello\x0a../../../bin/amberc -m Hello Hello.st Program\x0anode Program.js\x0a\x0aHello world from Amber in Node.js'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMCLISlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h1_("CLI");
_st(html)._with_("amberc compiles .st files into node programs !");
self._renderCodeSnippetOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMCLISlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'CLI'.\x0a\x09html with:  'amberc compiles .st files into node programs !'.\x0a\x09self renderCodeSnippetOn: html.",
messageSends: ["h1:", "with:", "renderCodeSnippetOn:"],
referencedClasses: []
}),
smalltalk.FOSDEMCLISlide);



smalltalk.addClass('FOSDEMCanvasSlide', smalltalk.FOSDEMSlide, ['c2d', 'canvas'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide red3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.FOSDEMCanvasSlide)})},
args: [],
source: "cssClass\x0a\x09^ 'slide red3d'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMCanvasSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOnCanvas",
category: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@c2d"]=_st(_st(self["@canvas"])._element())._getContext_("2d");
_st(self["@c2d"])._clearRect_y_width_height_((0),(0),_st(_st(self["@canvas"])._element())._width(),_st(_st(self["@canvas"])._element())._height());
_st((40)._atRandom())._timesRepeat_((function(){
var rgba;
return smalltalk.withContext(function($ctx2) {
rgba=","._join_([(255)._atRandom(),(255)._atRandom(),(255)._atRandom(),_st((10)._atRandom()).__slash((10))]);
rgba;
_st(self["@c2d"])._at_put_("fillStyle",_st("rgba(".__comma(rgba)).__comma(")"));
return _st(self["@c2d"])._fillRect_y_width_height_((600)._atRandom(),(300)._atRandom(),(200)._atRandom(),(200)._atRandom());
}, function($ctx2) {$ctx2.fillBlock({rgba:rgba},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOnCanvas",{},smalltalk.FOSDEMCanvasSlide)})},
args: [],
source: "drawOnCanvas\x0a\x09c2d := canvas element getContext: '2d'.\x0a\x09c2d \x0a\x09\x09clearRect: 0 \x0a\x09\x09y: 0 \x0a\x09\x09width: canvas element width \x0a\x09\x09height: canvas element height.\x0a\x09\x0a\x0940 atRandom timesRepeat: [ |rgba|\x0a\x09\x09\x09rgba := ',' join: {255 atRandom. 255 atRandom. 255 atRandom. 10 atRandom / 10}.\x0a\x09\x09\x09c2d\x09at: 'fillStyle' put: 'rgba(', rgba, ')'.\x0a\x09\x09\x09c2d\x0a\x09\x09\x09\x09fillRect: 600 atRandom \x0a\x09\x09\x09\x09y: 300 atRandom \x0a\x09\x09\x09\x09width: 200 atRandom \x0a\x09\x09\x09\x09height: 200 atRandom ]",
messageSends: ["getContext:", "element", "clearRect:y:width:height:", "width", "height", "timesRepeat:", "join:", "atRandom", "/", "at:put:", ",", "fillRect:y:width:height:"],
referencedClasses: []
}),
smalltalk.FOSDEMCanvasSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
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
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMCanvasSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'Playing with canvas'.\x0a\x09canvas := html  canvas \x0a\x09\x09\x09\x09width: 700;\x0a\x09\x09\x09\x09height: 400.\x0a\x0a\x09self updateCanvas.",
messageSends: ["h1:", "width:", "canvas", "height:", "updateCanvas"],
referencedClasses: []
}),
smalltalk.FOSDEMCanvasSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCanvas",
category: 'updating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._drawOnCanvas();
_st(window)._setTimeout_delay_((function(){
return smalltalk.withContext(function($ctx2) {
return self._updateCanvas();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(500));
return self}, function($ctx1) {$ctx1.fill(self,"updateCanvas",{},smalltalk.FOSDEMCanvasSlide)})},
args: [],
source: "updateCanvas\x0a\x09self drawOnCanvas.\x0a\x09window setTimeout: [self updateCanvas] delay: 500.",
messageSends: ["drawOnCanvas", "setTimeout:delay:", "updateCanvas"],
referencedClasses: []
}),
smalltalk.FOSDEMCanvasSlide);



smalltalk.addClass('FOSDEMContributionsSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
$1=_st(html)._div();
_st($1)._class_("section");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._a();
_st($3)._href_("/documentation.html");
$4=_st($3)._with_("Documentation");
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._a();
_st($5)._href_("http://amber-lang.net");
$6=_st($5)._with_("amber-lang.net");
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._a();
_st($7)._href_("https://github.com/amber-smalltalk/amber");
$8=_st($7)._with_("github.com/amber-smalltalk/amber");
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$9=_st(html)._a();
_st($9)._href_("http://groups.google.com/group/amber-lang");
$10=_st($9)._with_("groups.google.com/group/amber-lang");
return $10;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMContributionsSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section'; with: [\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: '/documentation.html'; with: 'Documentation'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://amber-lang.net'; with: 'amber-lang.net'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'https://github.com/amber-smalltalk/amber'; with: 'github.com/amber-smalltalk/amber'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://groups.google.com/group/amber-lang'; with: 'groups.google.com/group/amber-lang']]",
messageSends: ["class:", "div", "with:", "href:", "a", "p"],
referencedClasses: []
}),
smalltalk.FOSDEMContributionsSlide);



smalltalk.addClass('FOSDEMIntroSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("section center animate");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._img())._src_("fosdem2012/images/amber.png");
_st(html)._p_(_st(self._presentation())._author());
_st(html)._p_(_st(self._presentation())._description());
return _st(html)._p_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(html)._with_(_st(self._presentation())._email());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMIntroSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center animate'; with: [\x0a\x09\x09html img src: 'fosdem2012/images/amber.png'.\x0a\x09\x09html p: self presentation author.\x0a          \x09html p: self presentation description.\x0a\x09\x09html p: [\x0a\x09\x09\x09html with: self presentation email]].",
messageSends: ["class:", "div", "with:", "src:", "img", "p:", "author", "presentation", "description", "email"],
referencedClasses: []
}),
smalltalk.FOSDEMIntroSlide);



smalltalk.addClass('FOSDEMJSPlayGroundSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "|logo|\x0alogo:='img#amberlogo' asJQuery.\x0a\x0alogo\x0a  css:'-webkit-transition' put:'all 10s ease-in-out'.\x0a\x0a<logo.css('-webkit-transform', 'rotateY(360deg)');>.\x0a\x0alogo click: [window alert: 'This is cool !'].\x0a\x0alogo inspect";
}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.FOSDEMJSPlayGroundSlide)})},
args: [],
source: "codeSnippet\x0a^'|logo|\x0alogo:=''img#amberlogo'' asJQuery.\x0a\x0alogo\x0a  css:''-webkit-transition'' put:''all 10s ease-in-out''.\x0a\x0a<logo.css(''-webkit-transform'', ''rotateY(360deg)'');>.\x0a\x0alogo click: [window alert: ''This is cool !''].\x0a\x0alogo inspect'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMJSPlayGroundSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMJSPlayGroundSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div\x0a\x09\x09class: 'section center'; \x0a\x09\x09with: [\x0a\x09\x09\x09self renderCodeSnippetOn: html.\x0a\x09\x09\x09html img\x0a\x09\x09\x09\x09id: 'amberlogo'; \x0a\x09\x09\x09\x09src: 'fosdem2012/images/amber.png'\x09]",
messageSends: ["class:", "div", "with:", "renderCodeSnippetOn:", "id:", "img", "src:"],
referencedClasses: []
}),
smalltalk.FOSDEMJSPlayGroundSlide);



smalltalk.addClass('FOSDEMJSToSmalltalk', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "var counter = window.smalltalk.Counter._new();\x0acounter._appendToJQuery_($('#jsToSmalltalk'));";
}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.FOSDEMJSToSmalltalk)})},
args: [],
source: "codeSnippet\x0a\x09^\x0a'var counter = window.smalltalk.Counter._new();\x0acounter._appendToJQuery_($(''#jsToSmalltalk''));'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMJSToSmalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide blue3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.FOSDEMJSToSmalltalk)})},
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMJSToSmalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(html)._h1_("Call Smalltalk from Javascript");
$1=_st(html)._div();
_st($1)._id_("jsToSmalltalk");
$2=_st($1)._style_("float: left");
self._renderCodeSnippetOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMJSToSmalltalk)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'Call Smalltalk from Javascript'.\x0a\x09html div\x0a\x09\x09id: 'jsToSmalltalk';\x0a\x09\x09style: 'float: left'.\x0a\x09self renderCodeSnippetOn: html.",
messageSends: ["h1:", "id:", "div", "style:", "renderCodeSnippetOn:"],
referencedClasses: []
}),
smalltalk.FOSDEMJSToSmalltalk);



smalltalk.addClass('FOSDEMREPLSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "./bin/amber\x0afs := require value: 'fs'.\x0afs readdir: '/tmp' do: [:err :file| console log: file]";
}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.FOSDEMREPLSlide)})},
args: [],
source: "codeSnippet\x0a\x09^ \x0a'./bin/amber\x0afs := require value: ''fs''.\x0afs readdir: ''/tmp'' do: [:err :file| console log: file]'.",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMREPLSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h1_("REPL");
self._renderCodeSnippetOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMREPLSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'REPL'.\x0a\x09self renderCodeSnippetOn: html.",
messageSends: ["h1:", "renderCodeSnippetOn:"],
referencedClasses: []
}),
smalltalk.FOSDEMREPLSlide);



smalltalk.addClass('FOSDEMTwitter', smalltalk.FOSDEMSlide, ['twitterDiv'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide black";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.FOSDEMTwitter)})},
args: [],
source: "cssClass\x0a\x09^ 'slide black'",
messageSends: [],
referencedClasses: []
}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "loadTweets",
category: 'callback',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_("http://search.twitter.com/search.json?rpp=3&q=%40AmberSmalltalk",smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(json){
return smalltalk.withContext(function($ctx2) {
return self._renderTweets_(_st(json)._results());
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1)})})),"dataType".__minus_gt("jsonp")]));
return self}, function($ctx1) {$ctx1.fill(self,"loadTweets",{},smalltalk.FOSDEMTwitter)})},
args: [],
source: "loadTweets\x0a\x09jQuery \x0a\x09\x09ajax: 'http://search.twitter.com/search.json?rpp=3&q=%40AmberSmalltalk'\x0a\x09\x09options: #{\x0a\x09\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09\x09'success' -> [ :json | self renderTweets: (json results)].\x0a\x09\x09\x09\x09'dataType' -> 'jsonp'\x0a\x09\x09\x09}.",
messageSends: ["ajax:options:", "->", "renderTweets:", "results"],
referencedClasses: []
}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._loadTweets();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_("What about @AmberSmalltalk on Twitter ?");
self["@twitterDiv"]=_st(html)._div();
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMTwitter)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html button\x0a\x09\x09onClick: [self loadTweets];\x0a\x09\x09with: 'What about @AmberSmalltalk on Twitter ?'.\x0a\x09twitterDiv := html div.",
messageSends: ["onClick:", "loadTweets", "button", "with:", "div"],
referencedClasses: []
}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTweet:on:",
category: 'rendering',
fn: function (tweet,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("tweet");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=html;
_st($3)._span_(_st(tweet)._at_("created_at"));
_st($3)._img_(_st(tweet)._at_("profile_image_url"));
_st($3)._span_(_st(tweet)._at_("from_user"));
$4=_st($3)._div_(_st(tweet)._at_("text"));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTweet:on:",{tweet:tweet,html:html},smalltalk.FOSDEMTwitter)})},
args: ["tweet", "html"],
source: "renderTweet: tweet on: html\x0a\x09html div \x0a\x09\x09class: 'tweet';\x0a\x09\x09with: [\x0a\x09\x09\x09html \x0a\x09\x09\x09\x09span: (tweet at: 'created_at');\x0a\x09\x09\x09\x09img: (tweet at: 'profile_image_url');\x0a\x09\x09\x09\x09span: (tweet at: 'from_user');\x0a\x09\x09\x09\x09div: (tweet at: 'text'). \x0a\x09\x09]",
messageSends: ["class:", "div", "with:", "span:", "at:", "img:", "div:"],
referencedClasses: []
}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTweets:",
category: 'rendering',
fn: function (tweets){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@twitterDiv"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(tweets)._do_((function(tweet){
return smalltalk.withContext(function($ctx3) {
return self._renderTweet_on_(tweet,html);
}, function($ctx3) {$ctx3.fillBlock({tweet:tweet},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTweets:",{tweets:tweets},smalltalk.FOSDEMTwitter)})},
args: ["tweets"],
source: "renderTweets: tweets\x0a\x09twitterDiv contents: [\x09:html|\x0a\x09\x09\x09\x09\x09\x09tweets do: [\x09:tweet|  \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderTweet: tweet on: html] ]",
messageSends: ["contents:", "do:", "renderTweet:on:"],
referencedClasses: []
}),
smalltalk.FOSDEMTwitter);



smalltalk.addClass('IDESlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "black";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.IDESlide)})},
args: [],
source: "backgroundColor\x0a\x09^'black'",
messageSends: [],
referencedClasses: []
}),
smalltalk.IDESlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide transparent";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.IDESlide)})},
args: [],
source: "cssClass\x0a\x09^'slide transparent'",
messageSends: [],
referencedClasses: []
}),
smalltalk.IDESlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ide";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.IDESlide)})},
args: [],
source: "id\x0a\x09^'ide'",
messageSends: [],
referencedClasses: []
}),
smalltalk.IDESlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.IDESlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x22\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 \x0a\x09\x09\x09with: 'The wonderful Jtalk ';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09with: 'development tools';\x0a\x09\x09\x09\x09\x09onClick: [TabManager current open]];\x0a\x09\x09\x09with: '.']\x0a\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.IDESlide);



smalltalk.addClass('IntroSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide black";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.IntroSlide)})},
args: [],
source: "cssClass\x0a\x09^'slide black'",
messageSends: [],
referencedClasses: []
}),
smalltalk.IntroSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "intro";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.IntroSlide)})},
args: [],
source: "id\x0a\x09^'intro'",
messageSends: [],
referencedClasses: []
}),
smalltalk.IntroSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Jtalk, the Smalltalk for Web developers");
_st(_st(html)._p())._with_(_st(_st(_st(self._presentation())._author()).__comma(" & Göran Krampe - ")).__comma(_st(self._presentation())._description()));
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._a();
_st($3)._with_(_st(self._presentation())._email());
$4=_st($3)._href_("mailto:".__comma(_st(self._presentation())._email()));
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._a();
_st($5)._with_("goran@krampe.se");
$6=_st($5)._href_("mailto:goran@krampe.se");
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._a();
_st($7)._with_("objectfusion.fr");
$8=_st($7)._href_("http://www.objectfusion.fr");
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.IntroSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Jtalk, the Smalltalk for Web developers'.\x0a\x09\x09html p with: self presentation author, ' & Göran Krampe - ', self presentation description.\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: self presentation email;\x0a\x09\x09\x09\x09href: 'mailto:', self presentation email].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: 'goran@krampe.se';\x0a\x09\x09\x09\x09href: 'mailto:goran@krampe.se'].\x0a\x09\x09\x0a          \x09html p with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: 'objectfusion.fr';\x0a\x09\x09\x09\x09href: 'http://www.objectfusion.fr']]",
messageSends: ["class:", "div", "with:", "h1", ",", "description", "presentation", "author", "p", "email", "a", "href:"],
referencedClasses: []
}),
smalltalk.IntroSlide);



smalltalk.addClass('JtalkAndCLI', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndCLI)})},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndCLI);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndCLI";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndCLI)})},
args: [],
source: "id\x0a\x09^'JtalkAndCLI'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndCLI);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$1=_st(html)._span();
_st($1)._class_("blue");
$2=_st($1)._with_("the command line");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._h2())._with_("jtalkc - a fairly elaborate bash script that:");
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._li())._with_("Uses Node.js to run the Jtalk Compiler");
_st(_st(html)._li())._with_("Compiles .st files to .js");
_st(_st(html)._li())._with_("Links .js files into a single one");
_st(_st(html)._li())._with_("Adds class initilization and/or call to main");
return _st(_st(html)._li())._with_("Optionally runs Google Closure compiler");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkAndCLI)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'the command line'].\x0a\x0a\x09html h2 with: 'jtalkc - a fairly elaborate bash script that:'.\x0a\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Uses Node.js to run the Jtalk Compiler'.\x0a\x09\x09html li with: 'Compiles .st files to .js'.\x0a\x09\x09html li with: 'Links .js files into a single one'.\x0a\x09\x09html li with: 'Adds class initilization and/or call to main'.\x0a\x09\x09html li with: 'Optionally runs Google Closure compiler']",
messageSends: ["with:", "class:", "span", "h1", "h2", "li", "ul"],
referencedClasses: []
}),
smalltalk.JtalkAndCLI);



smalltalk.addClass('JtalkAndEnyo', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndEnyo)})},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndEnyo);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndEnyo";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndEnyo)})},
args: [],
source: "id\x0a\x09^'JtalkAndEnyo'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndEnyo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$1=_st(html)._span();
_st($1)._class_("blue");
$2=_st($1)._with_("Enyo");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkAndEnyo)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Enyo'].",
messageSends: ["with:", "class:", "span", "h1"],
referencedClasses: []
}),
smalltalk.JtalkAndEnyo);



smalltalk.addClass('JtalkAndJavascriptSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#08C";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndJavascriptSlide)})},
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide transparent";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.JtalkAndJavascriptSlide)})},
args: [],
source: "cssClass\x0a\x09^'slide transparent'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "jtalkAndJs";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndJavascriptSlide)})},
args: [],
source: "id\x0a\x09^'jtalkAndJs'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Smalltalk ");
$3=_st(html)._span();
_st($3)._class_("red");
$4=_st($3)._with_("♥");
$4;
return _st(html)._with_(" JavaScript");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkAndJavascriptSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: [\x0a\x09\x09\x09html with: 'Smalltalk '.\x0a\x09\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09\x09html with: ' JavaScript']]",
messageSends: ["class:", "div", "with:", "span", "h1"],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide);



smalltalk.addClass('JtalkAndJavascriptSlide2', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#08C";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndJavascriptSlide2)})},
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide2);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "jtalkAndJs2";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndJavascriptSlide2)})},
args: [],
source: "id\x0a\x09^'jtalkAndJs2'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide2);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Smalltalk ");
$1=_st(html)._span();
_st($1)._class_("red");
$2=_st($1)._with_("♥");
$2;
return _st(html)._with_(" JavaScript");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._h2())._with_("Jtalk maps one to one with the JavaScript equivalent:");
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._li())._with_("String ⇔ String");
_st(_st(html)._li())._with_("Number ⇔ Number");
_st(_st(html)._li())._with_("BlockClosure ⇔ function");
_st(_st(html)._li())._with_("Dictionary ⇔ Object");
_st(_st(html)._li())._with_("Error ⇔ Error");
return _st(_st(html)._li())._with_("etc.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkAndJavascriptSlide2)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Smalltalk '.\x0a\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09html with: ' JavaScript'].\x0a\x09html h2 with: 'Jtalk maps one to one with the JavaScript equivalent:'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'String ⇔ String'.\x0a\x09\x09html li with: 'Number ⇔ Number'.\x0a\x09\x09html li with: 'BlockClosure ⇔ function'.\x0a\x09\x09html li with: 'Dictionary ⇔ Object'.\x0a\x09\x09html li with: 'Error ⇔ Error'.\x0a\x09\x09html li with: 'etc.']",
messageSends: ["with:", "class:", "span", "h1", "h2", "li", "ul"],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide2);



smalltalk.addClass('JtalkAndJavascriptSlide3', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#08C";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndJavascriptSlide3)})},
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide3);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "jtalkAndJs3";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndJavascriptSlide3)})},
args: [],
source: "id\x0a\x09^'jtalkAndJs3'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide3);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Smalltalk ");
$1=_st(html)._span();
_st($1)._class_("red");
$2=_st($1)._with_("♥");
$2;
return _st(html)._with_(" JavaScript");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._h2())._with_("Smalltalk ⇒ JavaScript");
_st(_st(html)._ol())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._li();
_st($3)._with_("Unary messages begin with an underscore: ");
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("yourself");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st($3)._with_(" becomes ");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("_yourself()");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4;
$5=_st(html)._li();
_st($5)._with_("Binary messages are prefixed with 2 underscores: ");
_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("3@4");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st($5)._with_(" becomes ");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("(3).__at(4)");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$6;
$7=_st(html)._li();
_st($7)._with_("Keyword message follow the same rules as unary messages, with a final underscore: ");
_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("aDictionary at: 3 put: 4");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st($7)._with_(" becomes ");
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("aDictionary._at_put_(3, 4)");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkAndJavascriptSlide3)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Smalltalk '.\x0a\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09html with: ' JavaScript'].\x0a\x09html h2 with: 'Smalltalk ⇒ JavaScript'.\x0a\x09html ol with: [\x0a\x09\x09html li \x0a\x09\x09\x09with: 'Unary messages begin with an underscore: ';\x0a\x09\x09\x09with: [html code with: 'yourself'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: '_yourself()'].\x0a\x09\x09html li \x0a\x09\x09\x09with: 'Binary messages are prefixed with 2 underscores: ';\x0a\x09\x09\x09with: [html code with: '3@4'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: '(3).__at(4)'].\x0a\x09\x09html li \x0a\x09\x09\x09with: 'Keyword message follow the same rules as unary messages, with a final underscore: ';\x0a\x09\x09\x09with: [html code with: 'aDictionary at: 3 put: 4'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'aDictionary._at_put_(3, 4)']]",
messageSends: ["with:", "class:", "span", "h1", "h2", "li", "code", "ol"],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide3);



smalltalk.addClass('JtalkAndJavascriptSlide4', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#08C";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndJavascriptSlide4)})},
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide4);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "jtalkAndJs4";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndJavascriptSlide4)})},
args: [],
source: "id\x0a\x09^'jtalkAndJs4'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide4);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$4,$7,$8,$9,$10,$11,$12,$13,$14;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("JavaScript ");
$1=_st(html)._span();
_st($1)._class_("red");
$2=_st($1)._with_("♥");
$2;
$3=html;
_st($3)._with_(" Smalltalk too! ");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._span();
_st($5)._class_("comment");
$6=_st($5)._with_("(how cute)");
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._h2())._with_("JavaScript ⇒ Smalltalk");
_st(_st(html)._ol())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(html)._li();
_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("someUser.name");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st($7)._with_(" becomes ");
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("someUser name");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$8;
$9=_st(html)._li();
_st($9)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("someUser name = \x22John\x22");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st($9)._with_(" becomes ");
$10=_st($9)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("someUser name: 'John'");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$10;
$11=_st(html)._li();
_st($11)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("console.log('hello world')");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st($11)._with_(" becomes ");
$12=_st($11)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("console log: 'hello world'");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$12;
$13=_st(html)._li();
_st($13)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("window.jQuery('foo').css('background', 'red')");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
_st($13)._with_(" becomes ");
_st($13)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(html)._br();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$14=_st($13)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._code())._with_("(window jQuery: 'foo') css: 'background' color: 'red'");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $14;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkAndJavascriptSlide4)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'JavaScript '.\x0a\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09html with: ' Smalltalk too! ';\x0a\x09\x09with: [html span class: 'comment'; with: '(how cute)']].\x0a\x09html h2 with: 'JavaScript ⇒ Smalltalk'.\x0a\x09html ol with: [\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'someUser.name'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'someUser name'].\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'someUser name = \x22John\x22'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'someUser name: ''John'''].\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'console.log(''hello world'')'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'console log: ''hello world'''].\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'window.jQuery(''foo'').css(''background'', ''red'')'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html br];\x0a\x09\x09\x09with: [html code with: '(window jQuery: ''foo'') css: ''background'' color: ''red''']]",
messageSends: ["with:", "class:", "span", "h1", "h2", "code", "li", "br", "ol"],
referencedClasses: []
}),
smalltalk.JtalkAndJavascriptSlide4);



smalltalk.addClass('JtalkAndNode', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndNode)})},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndNode";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndNode)})},
args: [],
source: "id\x0a\x09^'JtalkAndNode'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$1=_st(html)._span();
_st($1)._class_("blue");
$2=_st($1)._with_("Node.js");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._h2())._with_("Hello.st:");
_st(_st(html)._pre())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("code2");
$4=_st($3)._with_("Object subclass: #Hello\x0a        instanceVariableNames: ''\x0a        category: 'Hello'!\x0a\x0a!Hello class methodsFor: 'main'!\x0amain\x0a\x09console log: 'Hello world from JTalk in Node.js'\x0a! !");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkAndNode)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Node.js'].\x0a\x0a\x09html h2 with: 'Hello.st:'.\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'Object subclass: #Hello\x0a        instanceVariableNames: ''''\x0a        category: ''Hello''!\x0a\x0a!Hello class methodsFor: ''main''!\x0amain\x0a\x09console log: ''Hello world from JTalk in Node.js''\x0a! !']",
messageSends: ["with:", "class:", "span", "h1", "h2", "div", "pre"],
referencedClasses: []
}),
smalltalk.JtalkAndNode);



smalltalk.addClass('JtalkAndNode2', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndNode2)})},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode2);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndNode2";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndNode2)})},
args: [],
source: "id\x0a\x09^'JtalkAndNode2'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode2);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$1=_st(html)._span();
_st($1)._class_("blue");
$2=_st($1)._with_("Node.js");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._h2())._with_("Makefile:");
_st(_st(html)._pre())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("code2");
$4=_st($3)._with_("Program.js: Hello.st\x0a\x09../../bin/jtalkc -N -m Hello Hello.st Program\x0a\x0arun: Program.js\x0a\x09./hello\x0a\x0aclean:\x0a\x09rm -f Program.js Hello.js\x0a");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._h2())._with_("hello:");
_st(_st(html)._pre())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._div();
_st($5)._class_("code2");
$6=_st($5)._with_("node Program.js $@");
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkAndNode2)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Node.js'].\x0a\x0a\x09html h2 with: 'Makefile:'.\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'Program.js: Hello.st\x0a\x09../../bin/jtalkc -N -m Hello Hello.st Program\x0a\x0arun: Program.js\x0a\x09./hello\x0a\x0aclean:\x0a\x09rm -f Program.js Hello.js\x0a'].\x0ahtml h2 with: 'hello:'.\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'node Program.js $@']",
messageSends: ["with:", "class:", "span", "h1", "h2", "div", "pre"],
referencedClasses: []
}),
smalltalk.JtalkAndNode2);



smalltalk.addClass('JtalkAndNode3', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndNode3)})},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode3);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndNode3";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndNode3)})},
args: [],
source: "id\x0a\x09^'JtalkAndNode3'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndNode3);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$1=_st(html)._span();
_st($1)._class_("blue");
$2=_st($1)._with_("Node.js");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._h2())._with_("make clean && make run:");
_st(_st(html)._pre())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
_st($3)._class_("code2");
$4=_st($3)._with_("rm -f Program.js Hello.js\x0a../../bin/jtalkc -N -m Hello Hello.st Program\x0aLoading libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js\x0a/home/gokr/jtalk/js/Parser.js /home/gokr/jtalk/js/Compiler.js\x0a/home/gokr/jtalk/js/init.js /home/gokr/jtalk/nodejs/nodecompile.js\x0aand compiling ...\x0aCompiling in debugMode: false\x0aReading file Hello.st\x0aExporting category Hello as Hello.js\x0aAdding libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js  ...\x0aAdding Jtalk code Hello.js ...\x0aAdding initializer /home/gokr/jtalk/js/init.js ...\x0aAdding call to Hello class >> main ...\x0aWriting Program.js ...\x0aDone.\x0a./hello");
$4;
$5=_st(html)._span();
_st($5)._class_("blue");
$6=_st($5)._with_("Hello world from JTalk in Node.js");
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkAndNode3)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Node.js'].\x0a\x0a\x09html h2 with: 'make clean && make run:'.\x0a\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'rm -f Program.js Hello.js\x0a../../bin/jtalkc -N -m Hello Hello.st Program\x0aLoading libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js\x0a/home/gokr/jtalk/js/Parser.js /home/gokr/jtalk/js/Compiler.js\x0a/home/gokr/jtalk/js/init.js /home/gokr/jtalk/nodejs/nodecompile.js\x0aand compiling ...\x0aCompiling in debugMode: false\x0aReading file Hello.st\x0aExporting category Hello as Hello.js\x0aAdding libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js  ...\x0aAdding Jtalk code Hello.js ...\x0aAdding initializer /home/gokr/jtalk/js/init.js ...\x0aAdding call to Hello class >> main ...\x0aWriting Program.js ...\x0aDone.\x0a./hello'.\x0ahtml span class: 'blue'; with:'Hello world from JTalk in Node.js']",
messageSends: ["with:", "class:", "span", "h1", "h2", "div", "pre"],
referencedClasses: []
}),
smalltalk.JtalkAndNode3);



smalltalk.addClass('JtalkAndWebOS', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndWebOS)})},
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndWebOS);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndWebOS";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndWebOS)})},
args: [],
source: "id\x0a\x09^'JtalkAndWebOS'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkAndWebOS);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._h1())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_("Jtalk and ");
$1=_st(html)._span();
_st($1)._class_("blue");
$2=_st($1)._with_("webOS");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(html)._h2())._with_("A really cool mobile OS based on Linux:");
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._li())._with_("The primary language in webOS is Javascript");
_st(_st(html)._li())._with_("The new UI framework for webOS 3.0 is called Enyo");
_st(_st(html)._li())._with_("Regular apps run in V8 + Webkit");
return _st(_st(html)._li())._with_("Background services run in Node.js");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkAndWebOS)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'webOS'].\x0a\x0a\x09html h2 with: 'A really cool mobile OS based on Linux:'.\x0a\x0a\x09html ul with: [\x0a\x09\x09html li with: 'The primary language in webOS is Javascript'.\x0a\x09\x09html li with: 'The new UI framework for webOS 3.0 is called Enyo'.\x0a\x09\x09html li with: 'Regular apps run in V8 + Webkit'.\x0a\x09\x09html li with: 'Background services run in Node.js']",
messageSends: ["with:", "class:", "span", "h1", "h2", "li", "ul"],
referencedClasses: []
}),
smalltalk.JtalkAndWebOS);



smalltalk.addClass('JtalkFeaturesSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "features";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkFeaturesSlide)})},
args: [],
source: "id\x0a\x09^'features'",
messageSends: [],
referencedClasses: []
}),
smalltalk.JtalkFeaturesSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._h1())._with_("Jtalk features");
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._li())._with_("Jtalk is (mostly) written in itself, including the parser & compiler");
_st(_st(html)._li())._with_("Full Smalltalk object system, including classes & metaclasses, etc");
_st(_st(html)._li())._with_("Core libraries (streams, collections, RegExp, etc)");
_st(_st(html)._li())._with_("Web related libraries: HTML Canvas, DOM manipulation");
_st(_st(html)._li())._with_("Full featured IDE");
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Advanced Smalltalk features, including ");
_st(_st(html)._code())._with_("#doesNotUnderstand:");
_st(html)._with_(" support and ");
return _st(_st(html)._code())._with_("thisContext");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.JtalkFeaturesSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: 'Jtalk features'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Jtalk is (mostly) written in itself, including the parser & compiler'.\x0a\x09\x09html li with: 'Full Smalltalk object system, including classes & metaclasses, etc'.\x0a\x09\x09html li with: 'Core libraries (streams, collections, RegExp, etc)'.\x0a\x09\x09html li with: 'Web related libraries: HTML Canvas, DOM manipulation'.\x0a\x09\x09html li with: 'Full featured IDE'.\x0a\x09\x09html li with: [\x0a\x09\x09\x09html with:'Advanced Smalltalk features, including '.\x0a\x09\x09\x09html code with: '#doesNotUnderstand:'.\x0a\x09\x09\x09html with: ' support and '.\x0a\x09\x09\x09html code with: 'thisContext']]",
messageSends: ["with:", "h1", "li", "code", "ul"],
referencedClasses: []
}),
smalltalk.JtalkFeaturesSlide);



smalltalk.addClass('SweSUGSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#555";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.SweSUGSlide)})},
args: [],
source: "backgroundColor\x0a\x09^'#555'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.SweSUGSlide)})},
args: [],
source: "codeSnippet\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide blue3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.SweSUGSlide)})},
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCodeSnippetOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SourceArea())._new();
_st($1)._renderOn_(html);
$2=_st($1)._editor();
_st($2)._setValue_(self._codeSnippet());
return self}, function($ctx1) {$ctx1.fill(self,"renderCodeSnippetOn:",{html:html},smalltalk.SweSUGSlide)})},
args: ["html"],
source: "renderCodeSnippetOn: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: self codeSnippet.",
messageSends: ["setValue:", "codeSnippet", "renderOn:", "new", "editor"],
referencedClasses: ["SourceArea"]
}),
smalltalk.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSnippet:on:",
category: 'rendering',
fn: function (aString,html){
var self=this;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($SourceArea())._new();
_st($1)._renderOn_(html);
$2=_st($1)._editor();
_st($2)._setValue_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"renderSnippet:on:",{aString:aString,html:html},smalltalk.SweSUGSlide)})},
args: ["aString", "html"],
source: "renderSnippet: aString on: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: aString.",
messageSends: ["setValue:", "renderOn:", "new", "editor"],
referencedClasses: ["SourceArea"]
}),
smalltalk.SweSUGSlide);



smalltalk.addClass('SweSUGAboutSlide', smalltalk.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#555";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.SweSUGAboutSlide)})},
args: [],
source: "backgroundColor\x0a\x09^'#555'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUGAboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide blue3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.SweSUGAboutSlide)})},
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUGAboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "About";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.SweSUGAboutSlide)})},
args: [],
source: "id\x0a\x09^'About'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUGAboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $Presentation(){return smalltalk.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("About this presentation");
_st(_st(html)._p())._with_("This presentation is entirely written in Amber. Lots of stuff was heavily copied from the two earlier presentations from ESUG and FOSDEM.");
_st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Press ");
_st(_st(html)._code())._with_("←");
_st(html)._with_(" to move backward and ");
_st(_st(html)._code())._with_(" →");
return _st(html)._with_(" to move forward.");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return _st(_st(html)._p())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Open a ");
$3=_st(html)._button();
_st($3)._with_("browser");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st($Browser())._openOn_($Presentation());
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$4;
return _st(html)._with_(" to edit the source code.");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.SweSUGAboutSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'About this presentation'.\x0a\x09\x09html p with: 'This presentation is entirely written in Amber. Lots of stuff was heavily copied from the two earlier presentations from ESUG and FOSDEM.'.\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Press '.\x0a\x09\x09\x09html code with: '←'.\x0a\x09\x09\x09html with: ' to move backward and '.\x0a\x09\x09\x09html code with: ' →'.\x0a\x09\x09\x09html with: ' to move forward.'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Open a '.\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09with: 'browser';\x0a\x09\x09\x09\x09onClick: [Browser openOn: Presentation].\x0a\x09\x09\x09html with: ' to edit the source code.']]",
messageSends: ["class:", "div", "with:", "h1", "p", "code", "button", "onClick:", "openOn:"],
referencedClasses: ["Presentation", "Browser"]
}),
smalltalk.SweSUGAboutSlide);



smalltalk.addClass('SweSUGAmberFeaturesSlide', smalltalk.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "features";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.SweSUGAmberFeaturesSlide)})},
args: [],
source: "id\x0a\x09^'features'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUGAmberFeaturesSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._h1())._with_("Amber features");
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._li())._with_("Amber is (mostly) written in itself, including the compiler");
_st(_st(html)._li())._with_("Full Smalltalk object system, including classes & metaclasses, etc");
_st(_st(html)._li())._with_("Core libraries (streams, collections, RegExp, etc)");
_st(_st(html)._li())._with_("Web related libraries: HTML Canvas, DOM manipulation");
_st(_st(html)._li())._with_("Very good javascript integration, both ways");
_st(_st(html)._li())._with_("Full featured IDE!");
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_("Advanced features, including ");
_st(_st(html)._code())._with_("#doesNotUnderstand:");
_st(html)._with_(" support and ");
return _st(_st(html)._code())._with_("thisContext");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.SweSUGAmberFeaturesSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: 'Amber features'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Amber is (mostly) written in itself, including the compiler'.\x0a\x09\x09html li with: 'Full Smalltalk object system, including classes & metaclasses, etc'.\x0a\x09\x09html li with: 'Core libraries (streams, collections, RegExp, etc)'.\x0a\x09\x09html li with: 'Web related libraries: HTML Canvas, DOM manipulation'.\x0a\x09\x09html li with: 'Very good javascript integration, both ways'.\x0a\x09\x09html li with: 'Full featured IDE!'.\x0a\x09\x09html li with: [\x0a\x09\x09\x09html with:'Advanced features, including '.\x0a\x09\x09\x09html code with: '#doesNotUnderstand:'.\x0a\x09\x09\x09html with: ' support and '.\x0a\x09\x09\x09html code with: 'thisContext']]",
messageSends: ["with:", "h1", "li", "code", "ul"],
referencedClasses: []
}),
smalltalk.SweSUGAmberFeaturesSlide);



smalltalk.addClass('SweSUGIntroSlide', smalltalk.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Intro";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.SweSUGIntroSlide)})},
args: [],
source: "id\x0a\x09^'Intro'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUGIntroSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("section center animate");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._img())._src_("fosdem2012/images/amber.png");
_st(html)._p_(_st(self._presentation())._author());
_st(html)._p_(_st(self._presentation())._description());
return _st(html)._p_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(html)._with_(_st(self._presentation())._email());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.SweSUGIntroSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center animate'; with: [\x0a\x09\x09html img src: 'fosdem2012/images/amber.png'.\x0a\x09\x09html p: self presentation author.\x0a          \x09html p: self presentation description.\x0a\x09\x09html p: [\x0a\x09\x09\x09html with: self presentation email]].",
messageSends: ["class:", "div", "with:", "src:", "img", "p:", "author", "presentation", "description", "email"],
referencedClasses: []
}),
smalltalk.SweSUGIntroSlide);



smalltalk.addClass('SweSUGWhatIsAmberSlide', smalltalk.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "WhatIsAmber";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.SweSUGWhatIsAmberSlide)})},
args: [],
source: "id\x0a\x09^'WhatIsAmber'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUGWhatIsAmberSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._img_("esug2011/images/balloon.jpg");
_st(_st(html)._h1())._with_("Amber in a nutshell");
_st(_st(html)._h2())._with_("Amber is a true Smalltalk");
_st(_st(html)._h2())._with_("It compiles to and runs on/in JavaScript");
_st(_st(html)._h2())._with_("MIT license");
$3=_st(html)._h2();
_st($3)._class_("fancy");
$4=_st($3)._with_("Amber is way cool!");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.SweSUGWhatIsAmberSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html img: 'esug2011/images/balloon.jpg'.\x0a\x09\x09html h1 with: 'Amber in a nutshell'.\x0a\x09\x09html h2 with: 'Amber is a true Smalltalk'.\x0a\x09\x09html h2 with: 'It compiles to and runs on/in JavaScript'.\x0a\x09\x09html h2 with: 'MIT license'.\x0a\x09\x09html h2 class: 'fancy'; with: 'Amber is way cool!']",
messageSends: ["class:", "div", "with:", "img:", "h1", "h2"],
referencedClasses: []
}),
smalltalk.SweSUGWhatIsAmberSlide);



smalltalk.addClass('SweSUGWorkspaceSlide', smalltalk.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#18bd7d";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.SweSUGWorkspaceSlide)})},
args: [],
source: "backgroundColor\x0a\x09^'#18bd7d'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUGWorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "workspace";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.SweSUGWorkspaceSlide)})},
args: [],
source: "id\x0a\x09^'workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.SweSUGWorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'accessing',
fn: function (html){
var self=this;
var workspace;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
workspace=_st($SourceArea())._new();
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Give Amber a try!");
_st(workspace)._renderOn_(html);
return _st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._button();
_st($3)._with_("DoIt");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._doIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("PrintIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._printIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("InspectIt");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._inspectIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html,workspace:workspace},smalltalk.SweSUGWorkspaceSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09| workspace |\x0a\x09workspace := SourceArea new.\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Give Amber a try!'.\x0a\x09\x09workspace renderOn: html.\x0a\x09\x09html div with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09\x09onClick: [workspace doIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09\x09onClick: [workspace printIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'InspectIt';\x0a\x09\x09\x09\x09onClick: [workspace inspectIt]]]",
messageSends: ["new", "class:", "div", "with:", "h1", "renderOn:", "button", "onClick:", "doIt", "printIt", "inspectIt"],
referencedClasses: ["SourceArea"]
}),
smalltalk.SweSUGWorkspaceSlide);



smalltalk.addClass('WhatIsJtalkSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "WhatIsJtalk";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.WhatIsJtalkSlide)})},
args: [],
source: "id\x0a\x09^'WhatIsJtalk'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WhatIsJtalkSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Jtalk in a nutshell");
_st(_st(html)._h2())._with_("Jtalk is an implementation of Smalltalk");
_st(_st(html)._h2())._with_("Jtalk runs on top of the JavaScript runtime");
_st(_st(html)._h2())._with_("Jtalk is an opensource project (MIT)");
$3=_st(html)._h2();
_st($3)._class_("fancy");
$4=_st($3)._with_("Jtalk is cool!");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.WhatIsJtalkSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Jtalk in a nutshell'.\x0a\x09\x09html h2 with: 'Jtalk is an implementation of Smalltalk'.\x0a\x09\x09html h2 with: 'Jtalk runs on top of the JavaScript runtime'.\x0a\x09\x09html h2 with: 'Jtalk is an opensource project (MIT)'.\x0a\x09\x09html h2 class: 'fancy'; with: 'Jtalk is cool!']",
messageSends: ["class:", "div", "with:", "h1", "h2"],
referencedClasses: []
}),
smalltalk.WhatIsJtalkSlide);



smalltalk.addClass('WorkspaceSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#18bd7d";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.WorkspaceSlide)})},
args: [],
source: "backgroundColor\x0a\x09^'#18bd7d'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "workspace";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.WorkspaceSlide)})},
args: [],
source: "id\x0a\x09^'workspace'",
messageSends: [],
referencedClasses: []
}),
smalltalk.WorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
category: 'accessing',
fn: function (html){
var self=this;
var workspace;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
workspace=_st($SourceArea())._new();
$1=_st(html)._div();
_st($1)._class_("section center");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Give Jtalk a try!");
_st(workspace)._renderOn_(html);
return _st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._button();
_st($3)._with_("DoIt");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._doIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$4;
$5=_st(html)._button();
_st($5)._with_("PrintIt");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._printIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$6;
$7=_st(html)._button();
_st($7)._with_("InspectIt");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(workspace)._inspectIt();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html,workspace:workspace},smalltalk.WorkspaceSlide)})},
args: ["html"],
source: "renderSlideOn: html\x0a\x09| workspace |\x0a\x09workspace := SourceArea new.\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Give Jtalk a try!'.\x0a\x09\x09workspace renderOn: html.\x0a\x09\x09html div with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09\x09onClick: [workspace doIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09\x09onClick: [workspace printIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'InspectIt';\x0a\x09\x09\x09\x09onClick: [workspace inspectIt]]]",
messageSends: ["new", "class:", "div", "with:", "h1", "renderOn:", "button", "onClick:", "doIt", "printIt", "inspectIt"],
referencedClasses: ["SourceArea"]
}),
smalltalk.WorkspaceSlide);



