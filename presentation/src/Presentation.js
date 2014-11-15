define("amber-presentation/Presentation", ["amber/boot", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Presentation');
$core.packages["Presentation"].transport = {"type":"amd","amdNamespace":"amber-presentation"};

$core.addClass('Presentation', $globals.Widget, ['currentSlide', 'slides'], 'Presentation');
$core.addMethod(
$core.method({
selector: "author",
protocol: 'accessing',
fn: function (){
var self=this;
return "John Smith";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "author\x0a\x09^'John Smith'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "currentSlide",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentSlide"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentSlide\x0a\x09^currentSlide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "currentSlide:",
protocol: 'accessing',
fn: function (aSlide){
var self=this;
self["@currentSlide"]=aSlide;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSlide"],
source: "currentSlide: aSlide\x0a\x09currentSlide := aSlide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "currentSlideIndex",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._slides())._indexOf_ifAbsent_(self._currentSlide(),(function(){
return (1);

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentSlideIndex",{},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentSlideIndex\x0a\x09^ self slides indexOf: self currentSlide ifAbsent: [1]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:ifAbsent:", "slides", "currentSlide"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "description",
protocol: 'accessing',
fn: function (){
var self=this;
return "A presentation written in Jtalk";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "description\x0a\x09^'A presentation written in Jtalk'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "email",
protocol: 'accessing',
fn: function (){
var self=this;
return "john@smith.com";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "email\x0a\x09^'john@smith.com'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "initSlides",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@slides"]=$recv(self._slideClasses())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._on_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initSlides",{},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initSlides\x0a\x09slides := self slideClasses collect: [:each | each on: self]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "slideClasses", "on:"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "moveAt:",
protocol: 'actions',
fn: function (anInteger){
var self=this;
var next;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
next=$recv(self._slides())._at_ifAbsent_(anInteger,(function(){
return nil;

}));
$1=next;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self["@currentSlide"]=next;
self["@currentSlide"];
$recv(next)._show();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveAt:",{anInteger:anInteger,next:next},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "moveAt: anInteger\x0a\x09| next |\x0a\x09next := self slides \x0a\x09\x09\x09at: anInteger\x0a\x09\x09\x09ifAbsent: [nil].\x0a\x09next ifNotNil: [currentSlide := next. next show]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "slides", "ifNotNil:", "show"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "nextSlide",
protocol: 'actions',
fn: function (){
var self=this;
var next;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self._currentSlide();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
next=$recv(self._slides())._at_ifAbsent_($recv(self._currentSlideIndex()).__plus((1)),(function(){
return nil;

}));
next;
$2=next;
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
self["@currentSlide"]=next;
self["@currentSlide"];
$recv(next)._show();
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextSlide",{next:next},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextSlide\x0a\x09| next |\x0a\x09self currentSlide ifNotNil: [\x0a\x09\x09next := self slides \x0a\x09\x09\x09at: (self currentSlideIndex) + 1\x0a\x09\x09\x09ifAbsent: [nil].\x0a\x09\x09next ifNotNil: [currentSlide := next. next show]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "currentSlide", "at:ifAbsent:", "slides", "+", "currentSlideIndex", "show"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "previousSlide",
protocol: 'actions',
fn: function (){
var self=this;
var next;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self._currentSlide();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
next=$recv(self._slides())._at_ifAbsent_($recv(self._currentSlideIndex()).__minus((1)),(function(){
return nil;

}));
next;
$2=next;
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
self["@currentSlide"]=next;
self["@currentSlide"];
$recv(next)._show();
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"previousSlide",{next:next},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "previousSlide\x0a\x09| next |\x0a\x09self currentSlide ifNotNil: [\x0a\x09\x09next := self slides \x0a\x09\x09\x09at: (self currentSlideIndex) - 1\x0a\x09\x09\x09ifAbsent: [nil].\x0a\x09\x09next ifNotNil: [currentSlide := next. next show]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "currentSlide", "at:ifAbsent:", "slides", "-", "currentSlideIndex", "show"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(html)._style();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style"]=1;
//>>excludeEnd("ctx");
$recv($1)._type_("text/css");
$2=$recv($1)._with_(self._style());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._id_("slides");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderSlidesOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html style\x0a\x09\x09type: 'text/css';\x0a\x09\x09with: self style.\x0a\x09html div \x0a\x09\x09id: 'slides';\x0a\x09\x09with: [self renderSlidesOn: html]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["type:", "style", "with:", "id:", "div", "renderSlidesOn:"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "renderSlidesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self._slides();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["slides"]=1;
//>>excludeEnd("ctx");
$recv($1)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=self["@currentSlide"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentSlide"]=$recv(self._slides())._first();
self["@currentSlide"];
} else {
$2;
};
self._showCurrentSlide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlidesOn:",{html:html},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlidesOn: html\x0a\x09self slides do: [:each | \x0a\x09\x09each renderOn: html].\x0a\x09currentSlide ifNil: [currentSlide := self slides first].\x0a\x09self showCurrentSlide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "slides", "renderOn:", "ifNil:", "first", "showCurrentSlide"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "showCurrentSlide",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$6,$5,$4,$3,$7,$8,$receiver;
$1=self._currentSlide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentSlide"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=".slide"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($2)._hide();
$6=self._currentSlide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentSlide"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$4="#".__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($3)._show();
$7="title"._asJQuery();
$8=$recv($recv(self._title()).__comma(" - ")).__comma($recv(self._currentSlide())._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($7)._text_($8);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showCurrentSlide",{},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showCurrentSlide\x0a\x09self currentSlide ifNotNil: [\x0a\x09\x09'.slide' asJQuery hide.\x0a\x09\x09('#', self currentSlide id) asJQuery show.\x0a          \x09'title' asJQuery text: self title, ' - ', self currentSlide id.\x0a        ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "currentSlide", "hide", "asJQuery", "show", ",", "id", "text:", "title"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "slideClasses",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "slideClasses\x0a\x09^self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "slideTransition",
protocol: 'accessing',
fn: function (){
var self=this;
return "fade";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "slideTransition\x0a\x09^'fade'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "slides",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@slides"];
if(($receiver = $1) == null || $receiver.isNil){
self._initSlides();
} else {
$1;
};
$2=self["@slides"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"slides",{},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "slides\x0a\x09slides ifNil: [self initSlides].\x0a\x09^slides",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initSlides"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "slidesDo:",
protocol: 'enumerating',
fn: function (aBlockWithArg){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._slides())._do_((function(aSlide){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlockWithArg)._value_(aSlide);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aSlide:aSlide},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"slidesDo:",{aBlockWithArg:aBlockWithArg},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockWithArg"],
source: "slidesDo: aBlockWithArg\x0a\x09self slides do: [:aSlide| aBlockWithArg value: aSlide].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "slides", "value:"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "style",
protocol: 'accessing',
fn: function (){
var self=this;
return "";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "style\x0a\x09\x22Should return a CSS style\x22\x0a\x09^ ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._title();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title",{},$globals.Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09^ self class title.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["title", "class"]
}),
$globals.Presentation);

$core.addMethod(
$core.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
return "http://jtalk-project.org";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "url\x0a\x09^'http://jtalk-project.org'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Presentation);


$globals.Presentation.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "concretePresentations",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._allSubclasses())._select_((function(aPresentationClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aPresentationClass)._isConcrete();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aPresentationClass:aPresentationClass},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"concretePresentations",{},$globals.Presentation.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "concretePresentations\x0a\x09^ self allSubclasses select: [:aPresentationClass| aPresentationClass isConcrete]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "allSubclasses", "isConcrete"]
}),
$globals.Presentation.klass);

$core.addMethod(
$core.method({
selector: "concretePresentationsDo:",
protocol: 'enumerating',
fn: function (aBlockWithArg){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._concretePresentations())._do_(aBlockWithArg);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"concretePresentationsDo:",{aBlockWithArg:aBlockWithArg},$globals.Presentation.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlockWithArg"],
source: "concretePresentationsDo: aBlockWithArg\x0a\x09self concretePresentations do: aBlockWithArg.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "concretePresentations"]
}),
$globals.Presentation.klass);

$core.addMethod(
$core.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isConcrete\x0a\x09^false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Presentation.klass);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Slides";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09^ 'Slides'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Presentation.klass);


$core.addClass('ESUG2011Presentation', $globals.Presentation, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "author",
protocol: 'accessing',
fn: function (){
var self=this;
return "Nicolas Petton";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "author\x0a\x09^'Nicolas Petton'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ESUG2011Presentation);

$core.addMethod(
$core.method({
selector: "description",
protocol: 'accessing',
fn: function (){
var self=this;
return "ESUG 2011, Edinburgh";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "description\x0a\x09^'ESUG 2011, Edinburgh'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ESUG2011Presentation);

$core.addMethod(
$core.method({
selector: "email",
protocol: 'accessing',
fn: function (){
var self=this;
return "nico@objectfusion.fr";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "email\x0a\x09^'nico@objectfusion.fr'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ESUG2011Presentation);

$core.addMethod(
$core.method({
selector: "slideClasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $IntroSlide(){return $globals.IntroSlide||(typeof IntroSlide=="undefined"?nil:IntroSlide)}
function $AboutSlide(){return $globals.AboutSlide||(typeof AboutSlide=="undefined"?nil:AboutSlide)}
function $WhatIsJtalkSlide(){return $globals.WhatIsJtalkSlide||(typeof WhatIsJtalkSlide=="undefined"?nil:WhatIsJtalkSlide)}
function $JtalkFeaturesSlide(){return $globals.JtalkFeaturesSlide||(typeof JtalkFeaturesSlide=="undefined"?nil:JtalkFeaturesSlide)}
function $WorkspaceSlide(){return $globals.WorkspaceSlide||(typeof WorkspaceSlide=="undefined"?nil:WorkspaceSlide)}
function $IDESlide(){return $globals.IDESlide||(typeof IDESlide=="undefined"?nil:IDESlide)}
function $CountersSlide(){return $globals.CountersSlide||(typeof CountersSlide=="undefined"?nil:CountersSlide)}
function $JtalkAndJavascriptSlide(){return $globals.JtalkAndJavascriptSlide||(typeof JtalkAndJavascriptSlide=="undefined"?nil:JtalkAndJavascriptSlide)}
function $JtalkAndJavascriptSlide2(){return $globals.JtalkAndJavascriptSlide2||(typeof JtalkAndJavascriptSlide2=="undefined"?nil:JtalkAndJavascriptSlide2)}
function $JtalkAndJavascriptSlide3(){return $globals.JtalkAndJavascriptSlide3||(typeof JtalkAndJavascriptSlide3=="undefined"?nil:JtalkAndJavascriptSlide3)}
function $JtalkAndJavascriptSlide4(){return $globals.JtalkAndJavascriptSlide4||(typeof JtalkAndJavascriptSlide4=="undefined"?nil:JtalkAndJavascriptSlide4)}
function $JtalkAndCLI(){return $globals.JtalkAndCLI||(typeof JtalkAndCLI=="undefined"?nil:JtalkAndCLI)}
function $JtalkAndNode(){return $globals.JtalkAndNode||(typeof JtalkAndNode=="undefined"?nil:JtalkAndNode)}
function $JtalkAndNode2(){return $globals.JtalkAndNode2||(typeof JtalkAndNode2=="undefined"?nil:JtalkAndNode2)}
function $JtalkAndNode3(){return $globals.JtalkAndNode3||(typeof JtalkAndNode3=="undefined"?nil:JtalkAndNode3)}
function $JtalkAndWebOS(){return $globals.JtalkAndWebOS||(typeof JtalkAndWebOS=="undefined"?nil:JtalkAndWebOS)}
function $JtalkAndEnyo(){return $globals.JtalkAndEnyo||(typeof JtalkAndEnyo=="undefined"?nil:JtalkAndEnyo)}
function $ContributionsSlide(){return $globals.ContributionsSlide||(typeof ContributionsSlide=="undefined"?nil:ContributionsSlide)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Array())._new();
$recv($2)._add_($IntroSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_($AboutSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($2)._add_($WhatIsJtalkSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkFeaturesSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv($2)._add_($WorkspaceSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=5;
//>>excludeEnd("ctx");
$recv($2)._add_($IDESlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=6;
//>>excludeEnd("ctx");
$recv($2)._add_($CountersSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=7;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndJavascriptSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=8;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndJavascriptSlide2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=9;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndJavascriptSlide3());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=10;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndJavascriptSlide4());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=11;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndCLI());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=12;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndNode());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=13;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndNode2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=14;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndNode3());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=15;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndWebOS());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=16;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndEnyo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=17;
//>>excludeEnd("ctx");
$recv($2)._add_($ContributionsSlide());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},$globals.ESUG2011Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "slideClasses\x0a\x09^Array new\x0a\x09\x09add: IntroSlide;\x0a\x09\x09add: AboutSlide;\x0a\x09\x09add: WhatIsJtalkSlide;\x0a\x09\x09add: JtalkFeaturesSlide;\x0a\x09\x09add: WorkspaceSlide;\x0a\x09\x09add: IDESlide;\x0a\x09\x09add: CountersSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide2;\x0a\x09\x09add: JtalkAndJavascriptSlide3;\x0a\x09\x09add: JtalkAndJavascriptSlide4;\x0a\x09\x09add: JtalkAndCLI;\x0a\x09\x09add: JtalkAndNode;\x0a\x09\x09add: JtalkAndNode2;\x0a\x09\x09add: JtalkAndNode3;\x0a\x09\x09add: JtalkAndWebOS;\x0a\x09\x09add: JtalkAndEnyo;\x0a\x09\x09add: ContributionsSlide;\x0a\x09\x09yourself",
referencedClasses: ["Array", "IntroSlide", "AboutSlide", "WhatIsJtalkSlide", "JtalkFeaturesSlide", "WorkspaceSlide", "IDESlide", "CountersSlide", "JtalkAndJavascriptSlide", "JtalkAndJavascriptSlide2", "JtalkAndJavascriptSlide3", "JtalkAndJavascriptSlide4", "JtalkAndCLI", "JtalkAndNode", "JtalkAndNode2", "JtalkAndNode3", "JtalkAndWebOS", "JtalkAndEnyo", "ContributionsSlide"],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "yourself"]
}),
$globals.ESUG2011Presentation);

$core.addMethod(
$core.method({
selector: "style",
protocol: 'accessing',
fn: function (){
var self=this;
return "\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "style\x0a\x09^'\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ESUG2011Presentation);

$core.addMethod(
$core.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
return "http://jtalk-project.org";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "url\x0a\x09^'http://jtalk-project.org'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ESUG2011Presentation);


$globals.ESUG2011Presentation.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isConcrete\x0a\x09^true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ESUG2011Presentation.klass);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Jtalk";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09^'Jtalk'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ESUG2011Presentation.klass);


$core.addClass('FOSDEM2012Presentation', $globals.Presentation, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "author",
protocol: 'accessing',
fn: function (){
var self=this;
return "Laurent Laffont, Johnny Thornton";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "author\x0a\x09^'Laurent Laffont, Johnny Thornton'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEM2012Presentation);

$core.addMethod(
$core.method({
selector: "description",
protocol: 'accessing',
fn: function (){
var self=this;
return "FOSDEM 2012, Brussels";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "description\x0a\x09^'FOSDEM 2012, Brussels'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEM2012Presentation);

$core.addMethod(
$core.method({
selector: "email",
protocol: 'accessing',
fn: function (){
var self=this;
return "laurent.laffont@gmail.com,  johnnyt@xan.do";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "email\x0a\x09^'laurent.laffont@gmail.com,  johnnyt@xan.do'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEM2012Presentation);

$core.addMethod(
$core.method({
selector: "slideClasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $FOSDEMIntroSlide(){return $globals.FOSDEMIntroSlide||(typeof FOSDEMIntroSlide=="undefined"?nil:FOSDEMIntroSlide)}
function $FOSDEMAmberZeroNine(){return $globals.FOSDEMAmberZeroNine||(typeof FOSDEMAmberZeroNine=="undefined"?nil:FOSDEMAmberZeroNine)}
function $CountersSlide(){return $globals.CountersSlide||(typeof CountersSlide=="undefined"?nil:CountersSlide)}
function $IDESlide(){return $globals.IDESlide||(typeof IDESlide=="undefined"?nil:IDESlide)}
function $JtalkAndJavascriptSlide(){return $globals.JtalkAndJavascriptSlide||(typeof JtalkAndJavascriptSlide=="undefined"?nil:JtalkAndJavascriptSlide)}
function $FOSDEMJSPlayGroundSlide(){return $globals.FOSDEMJSPlayGroundSlide||(typeof FOSDEMJSPlayGroundSlide=="undefined"?nil:FOSDEMJSPlayGroundSlide)}
function $FOSDEMJSToSmalltalk(){return $globals.FOSDEMJSToSmalltalk||(typeof FOSDEMJSToSmalltalk=="undefined"?nil:FOSDEMJSToSmalltalk)}
function $FOSDEMBookletSlide(){return $globals.FOSDEMBookletSlide||(typeof FOSDEMBookletSlide=="undefined"?nil:FOSDEMBookletSlide)}
function $FOSDEMTwitter(){return $globals.FOSDEMTwitter||(typeof FOSDEMTwitter=="undefined"?nil:FOSDEMTwitter)}
function $FOSDEMCanvasSlide(){return $globals.FOSDEMCanvasSlide||(typeof FOSDEMCanvasSlide=="undefined"?nil:FOSDEMCanvasSlide)}
function $FOSDEMAmberBackend(){return $globals.FOSDEMAmberBackend||(typeof FOSDEMAmberBackend=="undefined"?nil:FOSDEMAmberBackend)}
function $FOSDEMREPLSlide(){return $globals.FOSDEMREPLSlide||(typeof FOSDEMREPLSlide=="undefined"?nil:FOSDEMREPLSlide)}
function $FOSDEMCLISlide(){return $globals.FOSDEMCLISlide||(typeof FOSDEMCLISlide=="undefined"?nil:FOSDEMCLISlide)}
function $FOSDEMContributionsSlide(){return $globals.FOSDEMContributionsSlide||(typeof FOSDEMContributionsSlide=="undefined"?nil:FOSDEMContributionsSlide)}
var $1;
$1=[$FOSDEMIntroSlide(),$FOSDEMAmberZeroNine(),$CountersSlide(),$IDESlide(),$JtalkAndJavascriptSlide(),$FOSDEMJSPlayGroundSlide(),$FOSDEMJSToSmalltalk(),$FOSDEMBookletSlide(),$FOSDEMTwitter(),$FOSDEMCanvasSlide(),$FOSDEMAmberBackend(),$FOSDEMREPLSlide(),$FOSDEMCLISlide(),$FOSDEMContributionsSlide()];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "slideClasses\x0a^ {\x0a\x09FOSDEMIntroSlide.\x0a\x09FOSDEMAmberZeroNine.\x0a\x09CountersSlide.\x0a\x09IDESlide.\x0a\x09JtalkAndJavascriptSlide.\x0a\x09FOSDEMJSPlayGroundSlide.\x0a\x09FOSDEMJSToSmalltalk.\x0a\x09FOSDEMBookletSlide.\x0a\x09FOSDEMTwitter.\x0a\x09FOSDEMCanvasSlide.\x0a\x09FOSDEMAmberBackend.\x0a\x09FOSDEMREPLSlide.\x0a\x09FOSDEMCLISlide.\x0a\x09FOSDEMContributionsSlide\x0a}",
referencedClasses: ["FOSDEMIntroSlide", "FOSDEMAmberZeroNine", "CountersSlide", "IDESlide", "JtalkAndJavascriptSlide", "FOSDEMJSPlayGroundSlide", "FOSDEMJSToSmalltalk", "FOSDEMBookletSlide", "FOSDEMTwitter", "FOSDEMCanvasSlide", "FOSDEMAmberBackend", "FOSDEMREPLSlide", "FOSDEMCLISlide", "FOSDEMContributionsSlide"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEM2012Presentation);

$core.addMethod(
$core.method({
selector: "style",
protocol: 'accessing',
fn: function (){
var self=this;
return "\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 700px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a\x0a.slide.blue3d {\x0a  background: #feffff;\x0a  background: -moz-linear-gradient(top, #feffff 0%, #d2ebf9 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feffff), color-stop(100%,#d2ebf9));\x0a  background: -webkit-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -o-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -ms-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#feffff\x22, endColorstr=\x22#d2ebf9\x22,GradientType=0 );\x0a  background: linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a}\x0a\x0a\x0a.slide.red3d {\x0a  background: #febbbb;\x0a  background: -moz-linear-gradient(top, #febbbb 0%, #fe9090 71%, #ff5c5c 95%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#febbbb), color-stop(71%,#fe9090), color-stop(95%,#ff5c5c));\x0a  background: -webkit-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -o-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -ms-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#febbbb\x22, endColorstr=\x22#ff5c5c\x22,GradientType=0 );\x0a  background: linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a}\x0a\x0a\x0a.slide.green3d {\x0a  background: #cdeb8e;\x0a  background: -moz-linear-gradient(top, #cdeb8e 0%, #a5c956 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cdeb8e), color-stop(100%,#a5c956));\x0a  background: -webkit-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -o-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -ms-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#cdeb8e\x22, endColorstr=\x22#a5c956\x22,GradientType=0 );\x0a  background: linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a}\x0a\x0a@-webkit-keyframes rotate-horizontal {\x0a\x090% { -webkit-transform: perspective(1000px) rotateY(-10deg);}\x0a\x09100% { -webkit-transform: perspective(1000px) rotateY(10deg);}\x0a}\x0a\x0a.animate p{\x0a-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a#FOSDEMAmberBackend img {\x0a\x09margin: 5px;\x0a\x09-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a\x0a.tweet {\x0a\x09background-color: #aaa;\x0a\x09color: black;\x0a\x09padding: 10px;\x0a\x09border-radius: 10px;\x0a\x09border: 5px solid #eee;\x0a\x09margin: 10px;\x0a}\x0a\x0a.tweet img {\x0a\x09vertical-align: top;\x0a\x09margin-right: 10px;\x0a}\x0a\x0a.tweet span:first-child {\x0a\x09float: right;\x0a}\x0a";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "style\x0a\x09^'\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 700px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a\x0a.slide.blue3d {\x0a  background: #feffff;\x0a  background: -moz-linear-gradient(top, #feffff 0%, #d2ebf9 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feffff), color-stop(100%,#d2ebf9));\x0a  background: -webkit-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -o-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -ms-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#feffff\x22, endColorstr=\x22#d2ebf9\x22,GradientType=0 );\x0a  background: linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a}\x0a\x0a\x0a.slide.red3d {\x0a  background: #febbbb;\x0a  background: -moz-linear-gradient(top, #febbbb 0%, #fe9090 71%, #ff5c5c 95%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#febbbb), color-stop(71%,#fe9090), color-stop(95%,#ff5c5c));\x0a  background: -webkit-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -o-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -ms-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#febbbb\x22, endColorstr=\x22#ff5c5c\x22,GradientType=0 );\x0a  background: linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a}\x0a\x0a\x0a.slide.green3d {\x0a  background: #cdeb8e;\x0a  background: -moz-linear-gradient(top, #cdeb8e 0%, #a5c956 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cdeb8e), color-stop(100%,#a5c956));\x0a  background: -webkit-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -o-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -ms-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#cdeb8e\x22, endColorstr=\x22#a5c956\x22,GradientType=0 );\x0a  background: linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a}\x0a\x0a@-webkit-keyframes rotate-horizontal {\x0a\x090% { -webkit-transform: perspective(1000px) rotateY(-10deg);}\x0a\x09100% { -webkit-transform: perspective(1000px) rotateY(10deg);}\x0a}\x0a\x0a.animate p{\x0a-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a#FOSDEMAmberBackend img {\x0a\x09margin: 5px;\x0a\x09-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a\x0a.tweet {\x0a\x09background-color: #aaa;\x0a\x09color: black;\x0a\x09padding: 10px;\x0a\x09border-radius: 10px;\x0a\x09border: 5px solid #eee;\x0a\x09margin: 10px;\x0a}\x0a\x0a.tweet img {\x0a\x09vertical-align: top;\x0a\x09margin-right: 10px;\x0a}\x0a\x0a.tweet span:first-child {\x0a\x09float: right;\x0a}\x0a'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEM2012Presentation);

$core.addMethod(
$core.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
return "http://amber-lang.net";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "url\x0a\x09^'http://amber-lang.net'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEM2012Presentation);


$core.addMethod(
$core.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isConcrete\x0a\x09^true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEM2012Presentation.klass);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'testing',
fn: function (){
var self=this;
return "Amber";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09^'Amber'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEM2012Presentation.klass);


$core.addClass('SweSUG2012Presentation', $globals.Presentation, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "author",
protocol: 'accessing',
fn: function (){
var self=this;
return "Göran Krampe";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "author\x0a\x09^'Göran Krampe'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUG2012Presentation);

$core.addMethod(
$core.method({
selector: "description",
protocol: 'accessing',
fn: function (){
var self=this;
return "SweSUG 2012, Stockholm";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "description\x0a\x09^'SweSUG 2012, Stockholm'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUG2012Presentation);

$core.addMethod(
$core.method({
selector: "email",
protocol: 'accessing',
fn: function (){
var self=this;
return "goran@krampe.se";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "email\x0a\x09^'goran@krampe.se'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUG2012Presentation);

$core.addMethod(
$core.method({
selector: "slideClasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $SweSUGIntroSlide(){return $globals.SweSUGIntroSlide||(typeof SweSUGIntroSlide=="undefined"?nil:SweSUGIntroSlide)}
function $SweSUGAboutSlide(){return $globals.SweSUGAboutSlide||(typeof SweSUGAboutSlide=="undefined"?nil:SweSUGAboutSlide)}
function $SweSUGWhatIsAmberSlide(){return $globals.SweSUGWhatIsAmberSlide||(typeof SweSUGWhatIsAmberSlide=="undefined"?nil:SweSUGWhatIsAmberSlide)}
function $SweSUGAmberFeaturesSlide(){return $globals.SweSUGAmberFeaturesSlide||(typeof SweSUGAmberFeaturesSlide=="undefined"?nil:SweSUGAmberFeaturesSlide)}
function $SweSUGWorkspaceSlide(){return $globals.SweSUGWorkspaceSlide||(typeof SweSUGWorkspaceSlide=="undefined"?nil:SweSUGWorkspaceSlide)}
function $IDESlide(){return $globals.IDESlide||(typeof IDESlide=="undefined"?nil:IDESlide)}
function $CountersSlide(){return $globals.CountersSlide||(typeof CountersSlide=="undefined"?nil:CountersSlide)}
function $JtalkAndJavascriptSlide(){return $globals.JtalkAndJavascriptSlide||(typeof JtalkAndJavascriptSlide=="undefined"?nil:JtalkAndJavascriptSlide)}
function $JtalkAndJavascriptSlide2(){return $globals.JtalkAndJavascriptSlide2||(typeof JtalkAndJavascriptSlide2=="undefined"?nil:JtalkAndJavascriptSlide2)}
function $JtalkAndJavascriptSlide3(){return $globals.JtalkAndJavascriptSlide3||(typeof JtalkAndJavascriptSlide3=="undefined"?nil:JtalkAndJavascriptSlide3)}
function $JtalkAndJavascriptSlide4(){return $globals.JtalkAndJavascriptSlide4||(typeof JtalkAndJavascriptSlide4=="undefined"?nil:JtalkAndJavascriptSlide4)}
function $JtalkAndCLI(){return $globals.JtalkAndCLI||(typeof JtalkAndCLI=="undefined"?nil:JtalkAndCLI)}
function $JtalkAndNode(){return $globals.JtalkAndNode||(typeof JtalkAndNode=="undefined"?nil:JtalkAndNode)}
function $JtalkAndNode2(){return $globals.JtalkAndNode2||(typeof JtalkAndNode2=="undefined"?nil:JtalkAndNode2)}
function $JtalkAndNode3(){return $globals.JtalkAndNode3||(typeof JtalkAndNode3=="undefined"?nil:JtalkAndNode3)}
function $JtalkAndWebOS(){return $globals.JtalkAndWebOS||(typeof JtalkAndWebOS=="undefined"?nil:JtalkAndWebOS)}
function $JtalkAndEnyo(){return $globals.JtalkAndEnyo||(typeof JtalkAndEnyo=="undefined"?nil:JtalkAndEnyo)}
function $ContributionsSlide(){return $globals.ContributionsSlide||(typeof ContributionsSlide=="undefined"?nil:ContributionsSlide)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Array())._new();
$recv($2)._add_($SweSUGIntroSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($2)._add_($SweSUGAboutSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv($2)._add_($SweSUGWhatIsAmberSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv($2)._add_($SweSUGAmberFeaturesSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv($2)._add_($SweSUGWorkspaceSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=5;
//>>excludeEnd("ctx");
$recv($2)._add_($IDESlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=6;
//>>excludeEnd("ctx");
$recv($2)._add_($CountersSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=7;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndJavascriptSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=8;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndJavascriptSlide2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=9;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndJavascriptSlide3());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=10;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndJavascriptSlide4());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=11;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndCLI());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=12;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndNode());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=13;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndNode2());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=14;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndNode3());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=15;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndWebOS());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=16;
//>>excludeEnd("ctx");
$recv($2)._add_($JtalkAndEnyo());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=17;
//>>excludeEnd("ctx");
$recv($2)._add_($ContributionsSlide());
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},$globals.SweSUG2012Presentation)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "slideClasses\x0a\x09^Array new\x0a\x09\x09add: SweSUGIntroSlide;\x0a\x09\x09add: SweSUGAboutSlide;\x0a\x09\x09add: SweSUGWhatIsAmberSlide;\x0a\x09\x09add: SweSUGAmberFeaturesSlide;\x0a\x09\x09add: SweSUGWorkspaceSlide;\x0a\x09\x09add: IDESlide;\x0a\x09\x09add: CountersSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide;\x0a\x09\x09add: JtalkAndJavascriptSlide2;\x0a\x09\x09add: JtalkAndJavascriptSlide3;\x0a\x09\x09add: JtalkAndJavascriptSlide4;\x0a\x09\x09add: JtalkAndCLI;\x0a\x09\x09add: JtalkAndNode;\x0a\x09\x09add: JtalkAndNode2;\x0a\x09\x09add: JtalkAndNode3;\x0a\x09\x09add: JtalkAndWebOS;\x0a\x09\x09add: JtalkAndEnyo;\x0a\x09\x09add: ContributionsSlide;\x0a\x09\x09yourself",
referencedClasses: ["Array", "SweSUGIntroSlide", "SweSUGAboutSlide", "SweSUGWhatIsAmberSlide", "SweSUGAmberFeaturesSlide", "SweSUGWorkspaceSlide", "IDESlide", "CountersSlide", "JtalkAndJavascriptSlide", "JtalkAndJavascriptSlide2", "JtalkAndJavascriptSlide3", "JtalkAndJavascriptSlide4", "JtalkAndCLI", "JtalkAndNode", "JtalkAndNode2", "JtalkAndNode3", "JtalkAndWebOS", "JtalkAndEnyo", "ContributionsSlide"],
//>>excludeEnd("ide");
messageSends: ["add:", "new", "yourself"]
}),
$globals.SweSUG2012Presentation);

$core.addMethod(
$core.method({
selector: "style",
protocol: 'accessing',
fn: function (){
var self=this;
return "\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "style\x0a\x09^'\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUG2012Presentation);

$core.addMethod(
$core.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
return "http://www.amber-lang.net";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "url\x0a\x09^'http://www.amber-lang.net'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUG2012Presentation);


$core.addMethod(
$core.method({
selector: "isConcrete",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isConcrete\x0a\x09^true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUG2012Presentation.klass);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
return "Amber rocks!";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09^'Amber rocks!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUG2012Presentation.klass);


$core.addClass('PresentationNavigator', $globals.Widget, ['presentationBrush', 'currentPresentation', 'slideSelect'], 'Presentation');
$core.addMethod(
$core.method({
selector: "checkHash",
protocol: 'hash',
fn: function (){
var self=this;
var hash,presentation;
function $Presentation(){return $globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
hash=$recv($recv($recv($recv(document)._location())._hash())._replace_with_("^#",""))._tokenize_("-");
presentation=$recv($recv($Presentation())._concretePresentations())._detect_ifNone_((function(aPresentationClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aPresentationClass)._name()).__eq_eq($recv(hash)._first());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["=="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aPresentationClass:aPresentationClass},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(){
throw $early=[self];

}));
$1=$recv(presentation).__eq_eq($recv(self._currentPresentation())._class());
if(!$core.assert($1)){
self._selectPresentationNamed_(presentation);
self._selectSlideAt_($recv(hash)._last());
};
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkHash",{hash:hash,presentation:presentation},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "checkHash\x0a\x09| hash presentation |\x0a\x09hash := (document location hash  replace: '^#' with: '') tokenize: '-'. \x0a\x09presentation := Presentation concretePresentations \x0a\x09\x09\x09\x09detect: [:aPresentationClass | aPresentationClass name == hash first]\x0a\x09\x09\x09\x09ifNone: [^ self].\x0a\x09presentation == self currentPresentation class ifFalse: [\x0a          \x09self selectPresentationNamed: presentation.\x0a          \x09self selectSlideAt: hash last\x0a        ].",
referencedClasses: ["Presentation"],
//>>excludeEnd("ide");
messageSends: ["tokenize:", "replace:with:", "hash", "location", "detect:ifNone:", "concretePresentations", "==", "name", "first", "ifFalse:", "class", "currentPresentation", "selectPresentationNamed:", "selectSlideAt:", "last"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "checkHashChange",
protocol: 'hash',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(window)._jQuery_(window))._bind_do_("hashchange",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._checkHash();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkHashChange",{},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "checkHashChange\x0a\x09(window jQuery: window) bind: 'hashchange' do: [self checkHash]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bind:do:", "jQuery:", "checkHash"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "currentPresentation",
protocol: 'accessing',
fn: function (){
var self=this;
function $Presentation(){return $globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@currentPresentation"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentPresentation"]=$recv($recv($recv($Presentation())._concretePresentations())._first())._new();
$1=self["@currentPresentation"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentPresentation",{},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentPresentation\x0a\x09^  currentPresentation ifNil: [currentPresentation := Presentation concretePresentations first new].",
referencedClasses: ["Presentation"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new", "first", "concretePresentations"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "currentPresentation:",
protocol: 'accessing',
fn: function (aPresentation){
var self=this;
self["@currentPresentation"]=aPresentation;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPresentation"],
source: "currentPresentation: aPresentation\x0a\x09currentPresentation := aPresentation.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "nextSlide",
protocol: 'callbacks',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._currentPresentation())._nextSlide();
self._updateHash();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextSlide",{},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextSlide\x0a\x09self currentPresentation nextSlide.\x0a\x09self updateHash.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextSlide", "currentPresentation", "updateHash"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv($recv(window)._jQuery_(document))._ready_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._appendToJQuery_("body"._asJQuery());
self._setKeybindings();
$1=self._checkHashChange();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09(window jQuery: document)  ready: [\x0a          \x09self \x0a          \x09\x09appendToJQuery: 'body' asJQuery;\x0a          \x09\x09setKeybindings;\x0a          \x09\x09checkHashChange.\x0a        ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ready:", "jQuery:", "appendToJQuery:", "asJQuery", "setKeybindings", "checkHashChange"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "previousSlide",
protocol: 'callbacks',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._currentPresentation())._previousSlide();
self._updateHash();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"previousSlide",{},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "previousSlide\x0a\x09self currentPresentation previousSlide.\x0a\x09self updateHash.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["previousSlide", "currentPresentation", "updateHash"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "reload",
protocol: 'callbacks',
fn: function (){
var self=this;
var slideIndex;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._currentPresentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentPresentation"]=1;
//>>excludeEnd("ctx");
slideIndex=$recv($1)._currentSlideIndex();
self._currentPresentation_($recv($recv(self._currentPresentation())._class())._new());
self._renderCurrentPresentation();
self._selectSlideAt_(slideIndex);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reload",{slideIndex:slideIndex},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reload\x0a\x09|slideIndex|\x0a\x09slideIndex := self currentPresentation currentSlideIndex.\x0a\x09self currentPresentation: self currentPresentation class new.\x0a\x09self renderCurrentPresentation.\x0a\x09self selectSlideAt: slideIndex.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentSlideIndex", "currentPresentation", "currentPresentation:", "new", "class", "renderCurrentPresentation", "selectSlideAt:"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "renderCurrentPresentation",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@presentationBrush"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._currentPresentation())._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._updateSlideSelect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderCurrentPresentation",{},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "renderCurrentPresentation\x0a\x09presentationBrush contents: [:html |\x0a        \x09self currentPresentation renderOn: html.\x0a        ].\x0a\x09self updateSlideSelect.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderOn:", "currentPresentation", "updateSlideSelect"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$7;
$1=$recv(html)._style();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style"]=1;
//>>excludeEnd("ctx");
$recv($1)._type_("text/css");
$2=$recv($1)._with_(self._style());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($3)._id_("navigator");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderToolsOn_(html);
self._renderPresentationSelectOn_(html);
$5=self._renderSlideSelectOn_(html);
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$6=$recv(html)._div();
$recv($6)._id_("presentation");
$7=$recv($6)._yourself();
self["@presentationBrush"]=$7;
self._checkHash();
self._renderCurrentPresentation();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html style\x0a\x09\x09type: 'text/css';\x0a\x09\x09with: self style.\x0a\x09html div\x0a\x09\x09id: 'navigator';\x0a\x09\x09with: [\x09self\x0a\x09\x09\x09\x09\x09renderToolsOn: html;\x0a\x09\x09\x09\x09\x09renderPresentationSelectOn: html;\x0a                      \x09\x09\x09renderSlideSelectOn: html].\x0a\x0a\x09presentationBrush := html div \x0a\x09\x09\x09\x09\x09\x09\x09id: 'presentation';\x0a\x09\x09\x09\x09\x09\x09\x09yourself.\x0a\x0a\x09self checkHash.\x0a\x09self renderCurrentPresentation.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["type:", "style", "with:", "id:", "div", "renderToolsOn:", "renderPresentationSelectOn:", "renderSlideSelectOn:", "yourself", "checkHash", "renderCurrentPresentation"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "renderPresentationSelectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var presentationSelect;
function $Presentation(){return $globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
presentationSelect=$recv(html)._select();
$1=presentationSelect;
$recv($1)._onChange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._selectPresentationNamed_($recv($recv(presentationSelect)._asJQuery())._val());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Presentation())._concretePresentationsDo_((function(aPresentationClass){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._option();
$recv($3)._value_($recv(aPresentationClass)._name());
$4=$recv($3)._with_($recv(aPresentationClass)._title());
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({aPresentationClass:aPresentationClass},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderPresentationSelectOn:",{html:html,presentationSelect:presentationSelect},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderPresentationSelectOn: html\x0a\x09|presentationSelect|\x0a\x09presentationSelect := html select.\x0a\x09presentationSelect\x0a\x09\x09onChange: [self  selectPresentationNamed:  presentationSelect asJQuery val];\x0a\x09\x09with: [\x09Presentation concretePresentationsDo: [:aPresentationClass |   \x0a                                                              \x09\x09\x09\x09\x09\x09\x09html option\x0a                                                              \x09\x09\x09\x09\x09\x09\x09\x09value: aPresentationClass name;\x0a                                                              \x09\x09\x09\x09\x09\x09\x09\x09with: aPresentationClass title ] ].",
referencedClasses: ["Presentation"],
//>>excludeEnd("ide");
messageSends: ["select", "onChange:", "selectPresentationNamed:", "val", "asJQuery", "with:", "concretePresentationsDo:", "value:", "option", "name", "title"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "renderSlideSelectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@slideSelect"]=$recv(html)._select();
$recv(self["@slideSelect"])._onChange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._selectSlideAt_($recv($recv(self["@slideSelect"])._asJQuery())._val());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._updateSlideSelect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideSelectOn:",{html:html},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideSelectOn: html\x0a\x09slideSelect := html select.\x0a\x09slideSelect onChange: [ self  selectSlideAt:  slideSelect asJQuery val ].\x0a\x09self updateSlideSelect.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select", "onChange:", "selectSlideAt:", "val", "asJQuery", "updateSlideSelect"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "renderToolsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $TabManager(){return $globals.TabManager||(typeof TabManager=="undefined"?nil:TabManager)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("IDE");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($TabManager())._current())._open();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=2;
//>>excludeEnd("ctx");
$recv($3)._with_("Reload");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._reload();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$5=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["a"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("←");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._previousSlide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$7=$recv(html)._a();
$recv($7)._with_("→");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._nextSlide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderToolsOn:",{html:html},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderToolsOn: html\x0a\x09html a \x0a\x09\x09with: 'IDE';\x0a\x09\x09onClick: [TabManager current open].\x0a\x09html a\x0a\x09\x09with: 'Reload';\x0a\x09\x09onClick: [self reload].\x0a\x09html a\x0a\x09\x09with: '←';\x0a\x09\x09onClick: [self previousSlide].\x0a\x09html a\x0a\x09\x09with: '→';\x0a\x09\x09onClick: [self nextSlide].",
referencedClasses: ["TabManager"],
//>>excludeEnd("ide");
messageSends: ["with:", "a", "onClick:", "open", "current", "reload", "previousSlide", "nextSlide"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "selectPresentation:",
protocol: 'callbacks',
fn: function (aPresentationClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._currentPresentation_($recv(aPresentationClass)._new());
self._renderCurrentPresentation();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectPresentation:",{aPresentationClass:aPresentationClass},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPresentationClass"],
source: "selectPresentation: aPresentationClass\x0a\x09self currentPresentation: aPresentationClass new.\x0a\x09self renderCurrentPresentation.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentPresentation:", "new", "renderCurrentPresentation"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "selectPresentationNamed:",
protocol: 'callbacks',
fn: function (aString){
var self=this;
var presentationClass;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
presentationClass=$recv($recv($Smalltalk())._current())._at_(aString);
$1=presentationClass;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._selectPresentation_(presentationClass);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectPresentationNamed:",{aString:aString,presentationClass:presentationClass},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selectPresentationNamed: aString\x0a\x09|presentationClass|\x0a\x09presentationClass :=  (Smalltalk current at: aString).\x0a\x09presentationClass ifNotNil: [ self selectPresentation: presentationClass ].",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["at:", "current", "ifNotNil:", "selectPresentation:"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "selectSlideAt:",
protocol: 'callbacks',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._currentPresentation())._moveAt_(anInteger);
self._updateHash();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectSlideAt:",{anInteger:anInteger},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "selectSlideAt: anInteger\x0a\x09self currentPresentation moveAt: anInteger.\x0a\x09self updateHash.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveAt:", "currentPresentation", "updateHash"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "setKeybindings",
protocol: 'keybindings',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5;
$recv($recv(window)._jQuery_(document))._keyup_((function(e){
var node;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
node=$recv($recv($recv(e)._target())._nodeName())._asLowercase();
node;
$2=$recv(node).__eq("textarea");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(node).__eq("input");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($1)){
$4=$recv(e)._keyCode();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["keyCode"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq((39));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=3;
//>>excludeEnd("ctx");
if($core.assert($3)){
self._nextSlide();
};
$5=$recv($recv(e)._keyCode()).__eq((37));
if($core.assert($5)){
return self._previousSlide();
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,node:node},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setKeybindings",{},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setKeybindings\x0a\x09(window jQuery: document) keyup: [:e || node |\x0a\x09\x09node := e target nodeName asLowercase.\x0a\x09\x09(node = 'textarea' or: [node = 'input']) ifFalse: [\x0a\x09\x09\x09e keyCode = 39 ifTrue: [self nextSlide].\x0a\x09\x09\x09e keyCode = 37 ifTrue: [self previousSlide]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keyup:", "jQuery:", "asLowercase", "nodeName", "target", "ifFalse:", "or:", "=", "ifTrue:", "keyCode", "nextSlide", "previousSlide"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "style",
protocol: 'accessing',
fn: function (){
var self=this;
return "\x0a#navigator {\x0a    z-index: 1;\x0a    position: fixed;\x0a    top: 0;\x0a    left: 50%;\x0a    margin-left: -150px;\x0a    padding: 5px;\x0a    border-radius: 5px;\x0a    -moz-border-radius: 5px;\x0a    -webkit-border-radius: 5px;\x0a    background: #333;\x0a    opacity: 0.3;\x0a    color: #eee;\x0a}\x0a\x0a#navigator a {\x0a    font-weight: bold;\x0a    color: #eee;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a    padding: 0 2px;\x0a    font-size: 14px;\x0a}\x0a\x0a#navigator:hover {\x0a    opacity: 0.8;\x0a}\x0a";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "style\x0a\x09^ '\x0a#navigator {\x0a    z-index: 1;\x0a    position: fixed;\x0a    top: 0;\x0a    left: 50%;\x0a    margin-left: -150px;\x0a    padding: 5px;\x0a    border-radius: 5px;\x0a    -moz-border-radius: 5px;\x0a    -webkit-border-radius: 5px;\x0a    background: #333;\x0a    opacity: 0.3;\x0a    color: #eee;\x0a}\x0a\x0a#navigator a {\x0a    font-weight: bold;\x0a    color: #eee;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a    padding: 0 2px;\x0a    font-size: 14px;\x0a}\x0a\x0a#navigator:hover {\x0a    opacity: 0.8;\x0a}\x0a'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "updateHash",
protocol: 'callbacks',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$6,$5,$4,$3,$2;
$1=$recv(document)._location();
$6=self._currentPresentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentPresentation"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._class();
$4=$recv($5)._name();
$3=$recv($4).__comma("-");
$2=$recv($3).__comma($recv(self._currentPresentation())._currentSlideIndex());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._hash_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateHash",{},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateHash\x0a\x09document location hash: self currentPresentation class name, '-', self currentPresentation currentSlideIndex.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hash:", "location", ",", "name", "class", "currentPresentation", "currentSlideIndex"]
}),
$globals.PresentationNavigator);

$core.addMethod(
$core.method({
selector: "updateSlideSelect",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@slideSelect"])._contents_((function(html){
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
index=(0);
index;
return $recv(self._currentPresentation())._slidesDo_((function(aSlide){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
index=$recv(index).__plus((1));
index;
$1=$recv(html)._option();
$recv($1)._value_(index);
$2=$recv($1)._with_($recv(aSlide)._title());
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({aSlide:aSlide},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateSlideSelect",{},$globals.PresentationNavigator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateSlideSelect\x0a\x09slideSelect contents: [:html| |index|\x0a\x09\x09                       \x09\x09index := 0.\x0a                \x09\x09       \x09\x09self currentPresentation slidesDo: [ :aSlide|  \x0a                                \x09\x09                                    \x09\x09\x09\x09index := index + 1.\x0a                                                \x09\x09                    \x09\x09\x09\x09html option\x0a                                                                \x09\x09    \x09\x09\x09\x09\x09value: index;\x0a                                                            \x09\x09\x09\x09\x09\x09\x09\x09with: aSlide title ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "slidesDo:", "currentPresentation", "+", "value:", "option", "with:", "title"]
}),
$globals.PresentationNavigator);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._open();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PresentationNavigator.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09^ self open",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["open"]
}),
$globals.PresentationNavigator.klass);

$core.addMethod(
$core.method({
selector: "open",
protocol: 'initialize',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._open();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.PresentationNavigator.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09^ self new open",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["open", "new"]
}),
$globals.PresentationNavigator.klass);


$core.addClass('Slide', $globals.Widget, ['presentation'], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#555";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#555'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Slide);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^'slide'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Slide);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._name();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id",{},$globals.Slide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^ self class name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name", "class"]
}),
$globals.Slide);

$core.addMethod(
$core.method({
selector: "presentation",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@presentation"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "presentation\x0a\x09^presentation",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Slide);

$core.addMethod(
$core.method({
selector: "presentation:",
protocol: 'accessing',
fn: function (aPresentation){
var self=this;
self["@presentation"]=aPresentation;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPresentation"],
source: "presentation: aPresentation\x0a\x09presentation := aPresentation",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Slide);

$core.addMethod(
$core.method({
selector: "renderMetaOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$5,$7,$6,$4,$8,$10,$12,$11,$9,$13,$14,$16,$15,$18,$21,$20,$19,$17,$22,$23,$25,$24,$26,$2;
$1=$recv(html)._div();
$recv($1)._id_("meta");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$recv($3)._class_("title");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$5=$3;
$7=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._title();
$4=$recv($5)._with_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$4;
$8=$recv(html)._p();
$recv($8)._class_("description");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$10=$8;
$12=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=2;
//>>excludeEnd("ctx");
$11=$recv($12)._description();
$9=$recv($10)._with_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$9;
$13=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($13)._class_("author");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$14=$13;
$16=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=3;
//>>excludeEnd("ctx");
$15=$recv($16)._author();
$recv($14)._with_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$18=$13;
$21=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=4;
//>>excludeEnd("ctx");
$20=$recv($21)._email();
$19="mailto:".__comma($20);
$17=$recv($18)._href_($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["href:"]=1;
//>>excludeEnd("ctx");
$17;
$22=$recv(html)._a();
$recv($22)._class_("url");
$23=$22;
$25=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=5;
//>>excludeEnd("ctx");
$24=$recv($25)._url();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["url"]=1;
//>>excludeEnd("ctx");
$recv($23)._with_($24);
$26=$recv($22)._href_($recv(self._presentation())._url());
return $26;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderMetaOn:",{html:html},$globals.Slide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderMetaOn: html\x0a\x09html div \x0a\x09\x09id: 'meta';\x0a\x09\x09with: [\x0a\x09\x09\x09html p class: 'title'; with: self presentation title.\x0a\x09\x09\x09html p class: 'description'; with: self presentation description.\x0a\x09\x09\x09html a class: 'author'; with: self presentation author; href: 'mailto:', self presentation email.\x0a\x09\x09\x09html a class: 'url'; with: self presentation url; href: self presentation url]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "with:", "class:", "p", "title", "presentation", "description", "a", "author", "href:", ",", "email", "url"]
}),
$globals.Slide);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_(self._cssClass());
$recv($1)._id_(self._id());
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderSlideOn_(html);
return self._renderMetaOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Slide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div class: self cssClass; id: self id; with: [\x0a\x09\x09self renderSlideOn: html.\x0a\x09\x09self renderMetaOn: html]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "cssClass", "id:", "id", "with:", "renderSlideOn:", "renderMetaOn:"]
}),
$globals.Slide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Slide);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$receiver;
$1=self._backgroundColor();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["backgroundColor"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=$recv(window)._jQuery_("#slides");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["jQuery:"]=1;
//>>excludeEnd("ctx");
$recv($2)._css_color_("background",self._backgroundColor());
};
$3=$recv(window)._jQuery_(".slide");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["jQuery:"]=2;
//>>excludeEnd("ctx");
$5=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["presentation"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._slideTransition();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["slideTransition"]=1;
//>>excludeEnd("ctx");
$recv($3)._hide_options_duration_($4,[],(300));
$recv($recv(window)._jQuery_("#".__comma(self._id())))._show_options_duration_($recv(self._presentation())._slideTransition(),[],(300));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.Slide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09self backgroundColor ifNotNil: [\x0a\x09\x09(window jQuery: '#slides') css: 'background' color: self backgroundColor].\x0a\x09(window jQuery: '.slide') hide: self presentation slideTransition options: #() duration: 300.\x0a\x09(window jQuery: '#', self id) show: self presentation slideTransition options: #() duration: 300.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "backgroundColor", "css:color:", "jQuery:", "hide:options:duration:", "slideTransition", "presentation", "show:options:duration:", ",", "id"]
}),
$globals.Slide);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._id();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title",{},$globals.Slide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09^ self id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id"]
}),
$globals.Slide);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aPresentation){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._presentation_(aPresentation);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aPresentation:aPresentation},$globals.Slide.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPresentation"],
source: "on: aPresentation\x0a\x09^self new\x0a\x09\x09presentation: aPresentation;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["presentation:", "new", "yourself"]
}),
$globals.Slide.klass);


$core.addClass('AboutSlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "white";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'white'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AboutSlide);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide transparent white";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^'slide transparent white'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AboutSlide);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "about";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'about'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AboutSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Browser(){return $globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $Presentation(){return $globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._h1())._with_("About this presentation");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("This presentation is entirely written in Jtalk and is licensed under CC BY-SA.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$4=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=2;
//>>excludeEnd("ctx");
$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(html)._with_("Press ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$5=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=1;
//>>excludeEnd("ctx");
$recv($5)._with_("←");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$recv(html)._with_(" to move backward and ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$recv($recv(html)._code())._with_(" →");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
return $recv(html)._with_(" to move forward.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(html)._with_("Open a ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
$6=$recv(html)._button();
$recv($6)._with_("browser");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=12;
//>>excludeEnd("ctx");
$7=$recv($6)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($Browser())._openOn_($Presentation());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
$7;
return $recv(html)._with_(" to edit the source code.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.AboutSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'About this presentation'.\x0a\x09\x09html p with: 'This presentation is entirely written in Jtalk and is licensed under CC BY-SA.'.\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Press '.\x0a\x09\x09\x09html code with: '←'.\x0a\x09\x09\x09html with: ' to move backward and '.\x0a\x09\x09\x09html code with: ' →'.\x0a\x09\x09\x09html with: ' to move forward.'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Open a '.\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09with: 'browser';\x0a\x09\x09\x09\x09onClick: [Browser openOn: Presentation].\x0a\x09\x09\x09html with: ' to edit the source code.']]",
referencedClasses: ["Browser", "Presentation"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h1", "p", "code", "button", "onClick:", "openOn:"]
}),
$globals.AboutSlide);



$core.addClass('ContributionsSlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "links";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'links'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ContributionsSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
$1=$recv(html)._div();
$recv($1)._class_("section");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($4)._href_("http://jtalk-project.org");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["href:"]=1;
//>>excludeEnd("ctx");
$5=$recv($4)._with_("jtalk-project.org");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$6=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=2;
//>>excludeEnd("ctx");
$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["a"]=2;
//>>excludeEnd("ctx");
$recv($7)._href_("https://github.com/NicolasPetton/jtalk");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["href:"]=2;
//>>excludeEnd("ctx");
$8=$recv($7)._with_("github.com/NicolasPetton/jtalk");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$9=$recv(html)._a();
$recv($9)._href_("http://http://groups.google.com/group/jtalk-project");
$10=$recv($9)._with_("groups.google.com/group/jtalk-project");
return $10;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.ContributionsSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section'; with: [\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://jtalk-project.org'; with: 'jtalk-project.org'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'https://github.com/NicolasPetton/jtalk'; with: 'github.com/NicolasPetton/jtalk'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://http://groups.google.com/group/jtalk-project'; with: 'groups.google.com/group/jtalk-project']]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "p", "href:", "a"]
}),
$globals.ContributionsSlide);



$core.addClass('CountersSlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#18bd7d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#18bd7d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CountersSlide);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "counters";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'counters'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CountersSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Counter(){return $globals.Counter||(typeof Counter=="undefined"?nil:Counter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("section center");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._h1())._with_("The counter example");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $recv($recv(html)._div())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return (2)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv($Counter())._new())._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.CountersSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'The counter example'.\x0a\x09\x09html div with: [\x0a\x09\x09\x092 timesRepeat: [Counter new renderOn: html]]]",
referencedClasses: ["Counter"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h1", "timesRepeat:", "renderOn:", "new"]
}),
$globals.CountersSlide);



$core.addClass('FOSDEMSlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "codeSnippet",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},$globals.FOSDEMSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeSnippet\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.FOSDEMSlide);

$core.addMethod(
$core.method({
selector: "renderCodeSnippetOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($SourceArea())._new();
$recv($1)._renderOn_(html);
$2=$recv($1)._editor();
$recv($2)._setValue_(self._codeSnippet());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderCodeSnippetOn:",{html:html},$globals.FOSDEMSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderCodeSnippetOn: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: self codeSnippet.",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["setValue:", "renderOn:", "new", "editor", "codeSnippet"]
}),
$globals.FOSDEMSlide);

$core.addMethod(
$core.method({
selector: "renderSnippet:on:",
protocol: 'rendering',
fn: function (aString,html){
var self=this;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($SourceArea())._new();
$recv($1)._renderOn_(html);
$2=$recv($1)._editor();
$recv($2)._setValue_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSnippet:on:",{aString:aString,html:html},$globals.FOSDEMSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "html"],
source: "renderSnippet: aString on: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: aString.",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["setValue:", "renderOn:", "new", "editor"]
}),
$globals.FOSDEMSlide);



$core.addClass('FOSDEMAmberBackend', $globals.FOSDEMSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide green3d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'slide green3d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMAmberBackend);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._h1_("Need a backend ?");
return $recv(["nodejs.png","php.gif","rails.png","pharo.png","ambrhino.jpg"])._do_((function(aString){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(html)._img_("fosdem2012/images/".__comma(aString));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({aString:aString},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMAmberBackend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div\x0a\x09\x09class: 'section center';\x0a\x09\x09with: [\x09html h1: 'Need a backend ?'.\x0a\x09\x09\x09\x09{'nodejs.png'. 'php.gif'. 'rails.png'.   'pharo.png'. 'ambrhino.jpg'} do: [:aString |\x0a\x09\x09\x09\x09\x09\x09html img: 'fosdem2012/images/', aString.\x0a\x09\x09\x09\x09]\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h1:", "do:", "img:", ","]
}),
$globals.FOSDEMAmberBackend);



$core.addClass('FOSDEMAmberZeroNine', $globals.FOSDEMSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._h1_("Amber 0.9.1 is out !");
$recv(html)._div_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._cite();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["cite"]=1;
//>>excludeEnd("ctx");
return $recv($3)._with_("Now with over 43 forks on github and more than 230 followers the project:  http://www.amber-lang.net  ...is live and kicking!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div:"]=1;
//>>excludeEnd("ctx");
$4=$recv(html)._div_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._cite())._with_("-- Nicolas & Göran");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMAmberZeroNine)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div \x0a\x09\x09class: 'section center';\x0a\x09\x09with: [ \x09html \x0a\x09\x09\x09\x09\x09h1: 'Amber 0.9.1 is out !';\x0a\x09\x09\x09\x09\x09div: [html cite with: 'Now with over 43 forks on github and more than 230 followers the project:  http://www.amber-lang.net  ...is live and kicking!'];\x0a\x09\x09\x09\x09\x09div: [html cite with: '-- Nicolas & Göran'] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h1:", "div:", "cite"]
}),
$globals.FOSDEMAmberZeroNine);



$core.addClass('FOSDEMBookletSlide', $globals.FOSDEMSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "bookletOptions",
protocol: 'rendering',
fn: function (){
var self=this;
var $1;
$1=$globals.HashedCollection._newFromPairs_(["arrows",true,"keyboard",false,"pageNumbers",false,"closed",true]);
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bookletOptions\x0a\x09^ #{ \x0a\x09\x09'arrows' -> true.\x0a\x09\x09'keyboard' -> false.\x0a\x09\x09'pageNumbers' -> false.\x0a\x09\x09'closed' -> true\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMBookletSlide);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMBookletSlide);

$core.addMethod(
$core.method({
selector: "renderBookOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Browser(){return $globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $FOSDEMBookletSlide(){return $globals.FOSDEMBookletSlide||(typeof FOSDEMBookletSlide=="undefined"?nil:FOSDEMBookletSlide)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$6,$7,$5,$4,$2;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._id_("book");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("b-load");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(html)._div_("Amber makes it easy to plug existing javascript libraires");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["div:"]=1;
//>>excludeEnd("ctx");
$recv(html)._div_("Here is an example with the jQuery Booklet plugin");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["div:"]=2;
//>>excludeEnd("ctx");
$recv(html)._div_("Want to see how ?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["div:"]=3;
//>>excludeEnd("ctx");
$5=$recv(html)._div_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$6=$recv(html)._button();
$recv($6)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv($Browser())._openOn_($FOSDEMBookletSlide());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
$7=$recv($6)._with_("Just browse the code :)");
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBookOn:",{html:html},$globals.FOSDEMBookletSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBookOn: html\x0a\x09html div \x0a\x09\x09id: 'book';\x0a\x09\x09with: [\x09html div\x0a\x09\x09\x09\x09\x09class: 'b-load';\x0a\x09\x09\x09\x09\x09with: [\x09html \x0a\x09\x09\x09\x09\x09\x09\x09\x09div: 'Amber makes it easy to plug existing javascript libraires';\x0a\x09\x09\x09\x09\x09\x09\x09\x09div: 'Here is an example with the jQuery Booklet plugin';\x0a\x09\x09\x09\x09\x09\x09\x09\x09div: 'Want to see how ?';\x0a\x09\x09\x09\x09\x09\x09\x09\x09div: [ html button\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09onClick: [Browser openOn: FOSDEMBookletSlide ];\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09with: 'Just browse the code :)'.\x09\x09\x09\x09\x09\x09] \x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09]\x09\x0a\x09\x09].",
referencedClasses: ["Browser", "FOSDEMBookletSlide"],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "with:", "class:", "div:", "onClick:", "button", "openOn:"]
}),
$globals.FOSDEMBookletSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._renderBookOn_(html);
$1=$recv(html)._link();
$recv($1)._rel_("stylesheet");
$2=$recv($1)._href_("fosdem2012/lib/booklet/jquery.booklet.1.2.0.css");
$recv(html)._style_(self._style());
$recv(jQuery)._getScript_do_("fosdem2012/lib/booklet/jquery.booklet.1.2.0.min.js",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv("#book"._asJQuery())._booklet_(self._bookletOptions());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMBookletSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09self renderBookOn: html.\x0a\x09html link \x0a\x09\x09rel:'stylesheet';\x0a\x09\x09href: 'fosdem2012/lib/booklet/jquery.booklet.1.2.0.css'.\x0a\x09\x0a\x09html style: self style.\x0a\x09\x0a\x09jQuery \x0a\x09\x09getScript: 'fosdem2012/lib/booklet/jquery.booklet.1.2.0.min.js' \x09\x0a\x09\x09do: ['#book' asJQuery booklet: self bookletOptions].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderBookOn:", "rel:", "link", "href:", "style:", "style", "getScript:do:", "booklet:", "asJQuery", "bookletOptions"]
}),
$globals.FOSDEMBookletSlide);

$core.addMethod(
$core.method({
selector: "style",
protocol: 'css',
fn: function (){
var self=this;
return "\x0a#book { font-size: 1.4em; }\x0a#book .b-load .b-wrap-right { background-color: #DEC3A9;}\x0a#book .b-load .b-wrap-left { background-color: #DDD;} \x0a";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "style\x0a\x09^ '\x0a#book { font-size: 1.4em; }\x0a#book .b-load .b-wrap-right { background-color: #DEC3A9;}\x0a#book .b-load .b-wrap-left { background-color: #DDD;} \x0a'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMBookletSlide);



$core.addClass('FOSDEMCLISlide', $globals.FOSDEMSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "codeSnippet",
protocol: 'rendering',
fn: function (){
var self=this;
return "cd examples/nodejs/hello\x0a../../../bin/amberc -m Hello Hello.st Program\x0anode Program.js\x0a\x0aHello world from Amber in Node.js";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeSnippet\x0a\x09^ \x0a'cd examples/nodejs/hello\x0a../../../bin/amberc -m Hello Hello.st Program\x0anode Program.js\x0a\x0aHello world from Amber in Node.js'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMCLISlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._h1_("CLI");
$recv(html)._with_("amberc compiles .st files into node programs !");
self._renderCodeSnippetOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMCLISlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'CLI'.\x0a\x09html with:  'amberc compiles .st files into node programs !'.\x0a\x09self renderCodeSnippetOn: html.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["h1:", "with:", "renderCodeSnippetOn:"]
}),
$globals.FOSDEMCLISlide);



$core.addClass('FOSDEMCanvasSlide', $globals.FOSDEMSlide, ['c2d', 'canvas'], 'Presentation');
$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide red3d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'slide red3d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMCanvasSlide);

$core.addMethod(
$core.method({
selector: "drawOnCanvas",
protocol: 'drawing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$7,$8,$9,$11,$10,$6,$12,$13,$14,$15,$16,$17;
$1=$recv(self["@canvas"])._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=1;
//>>excludeEnd("ctx");
self["@c2d"]=$recv($1)._getContext_("2d");
$2=self["@c2d"];
$4=$recv(self["@canvas"])._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._width();
$recv($2)._clearRect_y_width_height_((0),(0),$3,$recv($recv(self["@canvas"])._element())._height());
$5=(40)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$recv($5)._timesRepeat_((function(){
var rgba;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=(255)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=2;
//>>excludeEnd("ctx");
$8=(255)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=3;
//>>excludeEnd("ctx");
$9=(255)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=4;
//>>excludeEnd("ctx");
$11=(10)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=5;
//>>excludeEnd("ctx");
$10=$recv($11).__slash((10));
$6=[$7,$8,$9,$10];
rgba=","._join_($6);
rgba;
$12=self["@c2d"];
$13=$recv("rgba(".__comma(rgba)).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($12)._at_put_("fillStyle",$13);
$14=self["@c2d"];
$15=(600)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=6;
//>>excludeEnd("ctx");
$16=(300)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=7;
//>>excludeEnd("ctx");
$17=(200)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["atRandom"]=8;
//>>excludeEnd("ctx");
return $recv($14)._fillRect_y_width_height_($15,$16,$17,(200)._atRandom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({rgba:rgba},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawOnCanvas",{},$globals.FOSDEMCanvasSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawOnCanvas\x0a\x09c2d := canvas element getContext: '2d'.\x0a\x09c2d \x0a\x09\x09clearRect: 0 \x0a\x09\x09y: 0 \x0a\x09\x09width: canvas element width \x0a\x09\x09height: canvas element height.\x0a\x09\x0a\x0940 atRandom timesRepeat: [ |rgba|\x0a\x09\x09\x09rgba := ',' join: {255 atRandom. 255 atRandom. 255 atRandom. 10 atRandom / 10}.\x0a\x09\x09\x09c2d\x09at: 'fillStyle' put: 'rgba(', rgba, ')'.\x0a\x09\x09\x09c2d\x0a\x09\x09\x09\x09fillRect: 600 atRandom \x0a\x09\x09\x09\x09y: 300 atRandom \x0a\x09\x09\x09\x09width: 200 atRandom \x0a\x09\x09\x09\x09height: 200 atRandom ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getContext:", "element", "clearRect:y:width:height:", "width", "height", "timesRepeat:", "atRandom", "join:", "/", "at:put:", ",", "fillRect:y:width:height:"]
}),
$globals.FOSDEMCanvasSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(html)._h1_("Playing with canvas");
$1=$recv(html)._canvas();
$recv($1)._width_((700));
$2=$recv($1)._height_((400));
self["@canvas"]=$2;
self._updateCanvas();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMCanvasSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'Playing with canvas'.\x0a\x09canvas := html  canvas \x0a\x09\x09\x09\x09width: 700;\x0a\x09\x09\x09\x09height: 400.\x0a\x0a\x09self updateCanvas.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["h1:", "width:", "canvas", "height:", "updateCanvas"]
}),
$globals.FOSDEMCanvasSlide);

$core.addMethod(
$core.method({
selector: "updateCanvas",
protocol: 'updating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._drawOnCanvas();
$recv(window)._setTimeout_delay_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._updateCanvas();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(500));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateCanvas",{},$globals.FOSDEMCanvasSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateCanvas\x0a\x09self drawOnCanvas.\x0a\x09window setTimeout: [self updateCanvas] delay: 500.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawOnCanvas", "setTimeout:delay:", "updateCanvas"]
}),
$globals.FOSDEMCanvasSlide);



$core.addClass('FOSDEMContributionsSlide', $globals.FOSDEMSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$2;
$1=$recv(html)._div();
$recv($1)._class_("section");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($4)._href_("/documentation.html");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["href:"]=1;
//>>excludeEnd("ctx");
$5=$recv($4)._with_("Documentation");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$6=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=2;
//>>excludeEnd("ctx");
$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["a"]=2;
//>>excludeEnd("ctx");
$recv($7)._href_("http://amber-lang.net");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["href:"]=2;
//>>excludeEnd("ctx");
$8=$recv($7)._with_("amber-lang.net");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$9=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=3;
//>>excludeEnd("ctx");
$recv($9)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$10=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["a"]=3;
//>>excludeEnd("ctx");
$recv($10)._href_("https://github.com/amber-smalltalk/amber");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["href:"]=3;
//>>excludeEnd("ctx");
$11=$recv($10)._with_("github.com/amber-smalltalk/amber");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
return $11;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$12=$recv(html)._a();
$recv($12)._href_("http://groups.google.com/group/amber-lang");
$13=$recv($12)._with_("groups.google.com/group/amber-lang");
return $13;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMContributionsSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section'; with: [\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: '/documentation.html'; with: 'Documentation'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://amber-lang.net'; with: 'amber-lang.net'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'https://github.com/amber-smalltalk/amber'; with: 'github.com/amber-smalltalk/amber'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a href: 'http://groups.google.com/group/amber-lang'; with: 'groups.google.com/group/amber-lang']]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "p", "href:", "a"]
}),
$globals.FOSDEMContributionsSlide);



$core.addClass('FOSDEMIntroSlide', $globals.FOSDEMSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$6,$5,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center animate");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._img())._src_("fosdem2012/images/amber.png");
$4=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._author();
$recv(html)._p_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p:"]=1;
//>>excludeEnd("ctx");
$6=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._description();
$recv(html)._p_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p:"]=2;
//>>excludeEnd("ctx");
return $recv(html)._p_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(html)._with_($recv(self._presentation())._email());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMIntroSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center animate'; with: [\x0a\x09\x09html img src: 'fosdem2012/images/amber.png'.\x0a\x09\x09html p: self presentation author.\x0a          \x09html p: self presentation description.\x0a\x09\x09html p: [\x0a\x09\x09\x09html with: self presentation email]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "src:", "img", "p:", "author", "presentation", "description", "email"]
}),
$globals.FOSDEMIntroSlide);



$core.addClass('FOSDEMJSPlayGroundSlide', $globals.FOSDEMSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "codeSnippet",
protocol: 'accessing',
fn: function (){
var self=this;
return "|logo|\x0alogo:='img#amberlogo' asJQuery.\x0a\x0alogo\x0a  css:'-webkit-transition' put:'all 10s ease-in-out'.\x0a\x0a<logo.css('-webkit-transform', 'rotateY(360deg)');>.\x0a\x0alogo click: [window alert: 'This is cool !'].\x0a\x0alogo inspect";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeSnippet\x0a^'|logo|\x0alogo:=''img#amberlogo'' asJQuery.\x0a\x0alogo\x0a  css:''-webkit-transition'' put:''all 10s ease-in-out''.\x0a\x0a<logo.css(''-webkit-transform'', ''rotateY(360deg)'');>.\x0a\x0alogo click: [window alert: ''This is cool !''].\x0a\x0alogo inspect'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMJSPlayGroundSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderCodeSnippetOn_(html);
$3=$recv(html)._img();
$recv($3)._id_("amberlogo");
$4=$recv($3)._src_("fosdem2012/images/amber.png");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMJSPlayGroundSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div\x0a\x09\x09class: 'section center'; \x0a\x09\x09with: [\x0a\x09\x09\x09self renderCodeSnippetOn: html.\x0a\x09\x09\x09html img\x0a\x09\x09\x09\x09id: 'amberlogo'; \x0a\x09\x09\x09\x09src: 'fosdem2012/images/amber.png'\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "renderCodeSnippetOn:", "id:", "img", "src:"]
}),
$globals.FOSDEMJSPlayGroundSlide);



$core.addClass('FOSDEMJSToSmalltalk', $globals.FOSDEMSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "codeSnippet",
protocol: 'accessing',
fn: function (){
var self=this;
return "var counter = window.smalltalk.Counter._new();\x0acounter._appendToJQuery_($('#jsToSmalltalk'));";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeSnippet\x0a\x09^\x0a'var counter = window.smalltalk.Counter._new();\x0acounter._appendToJQuery_($(''#jsToSmalltalk''));'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMJSToSmalltalk);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMJSToSmalltalk);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(html)._h1_("Call Smalltalk from Javascript");
$1=$recv(html)._div();
$recv($1)._id_("jsToSmalltalk");
$2=$recv($1)._style_("float: left");
self._renderCodeSnippetOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMJSToSmalltalk)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'Call Smalltalk from Javascript'.\x0a\x09html div\x0a\x09\x09id: 'jsToSmalltalk';\x0a\x09\x09style: 'float: left'.\x0a\x09self renderCodeSnippetOn: html.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["h1:", "id:", "div", "style:", "renderCodeSnippetOn:"]
}),
$globals.FOSDEMJSToSmalltalk);



$core.addClass('FOSDEMREPLSlide', $globals.FOSDEMSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "codeSnippet",
protocol: 'rendering',
fn: function (){
var self=this;
return "./bin/amber\x0afs := require value: 'fs'.\x0afs readdir: '/tmp' do: [:err :file| console log: file]";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeSnippet\x0a\x09^ \x0a'./bin/amber\x0afs := require value: ''fs''.\x0afs readdir: ''/tmp'' do: [:err :file| console log: file]'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMREPLSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._h1_("REPL");
self._renderCodeSnippetOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMREPLSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1: 'REPL'.\x0a\x09self renderCodeSnippetOn: html.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["h1:", "renderCodeSnippetOn:"]
}),
$globals.FOSDEMREPLSlide);



$core.addClass('FOSDEMTwitter', $globals.FOSDEMSlide, ['twitterDiv'], 'Presentation');
$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide black";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'slide black'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FOSDEMTwitter);

$core.addMethod(
$core.method({
selector: "loadTweets",
protocol: 'callback',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(jQuery)._ajax_options_("http://search.twitter.com/search.json?rpp=3&q=%40AmberSmalltalk",$globals.HashedCollection._newFromPairs_(["type","GET","success",(function(json){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderTweets_($recv(json)._results());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1,1)});
//>>excludeEnd("ctx");
}),"dataType","jsonp"]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadTweets",{},$globals.FOSDEMTwitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadTweets\x0a\x09jQuery \x0a\x09\x09ajax: 'http://search.twitter.com/search.json?rpp=3&q=%40AmberSmalltalk'\x0a\x09\x09options: #{\x0a\x09\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09\x09'success' -> [ :json | self renderTweets: (json results)].\x0a\x09\x09\x09\x09'dataType' -> 'jsonp'\x0a\x09\x09\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajax:options:", "renderTweets:", "results"]
}),
$globals.FOSDEMTwitter);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._button();
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._loadTweets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._with_("What about @AmberSmalltalk on Twitter ?");
self["@twitterDiv"]=$recv(html)._div();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.FOSDEMTwitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html button\x0a\x09\x09onClick: [self loadTweets];\x0a\x09\x09with: 'What about @AmberSmalltalk on Twitter ?'.\x0a\x09twitterDiv := html div.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onClick:", "button", "loadTweets", "with:", "div"]
}),
$globals.FOSDEMTwitter);

$core.addMethod(
$core.method({
selector: "renderTweet:on:",
protocol: 'rendering',
fn: function (tweet,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$2;
$1=$recv(html)._div();
$recv($1)._class_("tweet");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(tweet)._at_("created_at");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv(html)._span_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["span:"]=1;
//>>excludeEnd("ctx");
$4=$recv(tweet)._at_("profile_image_url");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$recv(html)._img_($4);
$5=$recv(tweet)._at_("from_user");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$recv(html)._span_($5);
$6=$recv(html)._div_($recv(tweet)._at_("text"));
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTweet:on:",{tweet:tweet,html:html},$globals.FOSDEMTwitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tweet", "html"],
source: "renderTweet: tweet on: html\x0a\x09html div \x0a\x09\x09class: 'tweet';\x0a\x09\x09with: [\x0a\x09\x09\x09html \x0a\x09\x09\x09\x09span: (tweet at: 'created_at');\x0a\x09\x09\x09\x09img: (tweet at: 'profile_image_url');\x0a\x09\x09\x09\x09span: (tweet at: 'from_user');\x0a\x09\x09\x09\x09div: (tweet at: 'text'). \x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "span:", "at:", "img:", "div:"]
}),
$globals.FOSDEMTwitter);

$core.addMethod(
$core.method({
selector: "renderTweets:",
protocol: 'rendering',
fn: function (tweets){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@twitterDiv"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(tweets)._do_((function(tweet){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._renderTweet_on_(tweet,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({tweet:tweet},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTweets:",{tweets:tweets},$globals.FOSDEMTwitter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tweets"],
source: "renderTweets: tweets\x0a\x09twitterDiv contents: [\x09:html|\x0a\x09\x09\x09\x09\x09\x09tweets do: [\x09:tweet|  \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderTweet: tweet on: html] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "do:", "renderTweet:on:"]
}),
$globals.FOSDEMTwitter);



$core.addClass('IDESlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "black";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'black'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDESlide);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide transparent";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^'slide transparent'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDESlide);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "ide";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'ide'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDESlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x22\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 \x0a\x09\x09\x09with: 'The wonderful Jtalk ';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09with: 'development tools';\x0a\x09\x09\x09\x09\x09onClick: [TabManager current open]];\x0a\x09\x09\x09with: '.']\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IDESlide);



$core.addClass('IntroSlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide black";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^'slide black'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IntroSlide);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "intro";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'intro'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.IntroSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$7,$6,$5,$9,$8,$4,$10,$11,$12,$14,$13,$15,$16,$17,$18,$19,$20,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._h1())._with_("Jtalk, the Smalltalk for Web developers");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$7=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._author();
$5=$recv($6).__comma(" & Göran Krampe - ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$9=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._description();
$4=$recv($5).__comma($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($3)._with_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$10=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=2;
//>>excludeEnd("ctx");
$recv($10)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$11=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$12=$11;
$14=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["presentation"]=3;
//>>excludeEnd("ctx");
$13=$recv($14)._email();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["email"]=1;
//>>excludeEnd("ctx");
$recv($12)._with_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$15=$recv($11)._href_("mailto:".__comma($recv(self._presentation())._email()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["href:"]=1;
//>>excludeEnd("ctx");
return $15;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$16=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=3;
//>>excludeEnd("ctx");
$recv($16)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$17=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["a"]=2;
//>>excludeEnd("ctx");
$recv($17)._with_("goran@krampe.se");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$18=$recv($17)._href_("mailto:goran@krampe.se");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["href:"]=2;
//>>excludeEnd("ctx");
return $18;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$19=$recv(html)._a();
$recv($19)._with_("objectfusion.fr");
$20=$recv($19)._href_("http://www.objectfusion.fr");
return $20;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.IntroSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Jtalk, the Smalltalk for Web developers'.\x0a\x09\x09html p with: self presentation author, ' & Göran Krampe - ', self presentation description.\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: self presentation email;\x0a\x09\x09\x09\x09href: 'mailto:', self presentation email].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: 'goran@krampe.se';\x0a\x09\x09\x09\x09href: 'mailto:goran@krampe.se'].\x0a\x09\x09\x0a          \x09html p with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09with: 'objectfusion.fr';\x0a\x09\x09\x09\x09href: 'http://www.objectfusion.fr']]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h1", "p", ",", "author", "presentation", "description", "a", "email", "href:"]
}),
$globals.IntroSlide);



$core.addClass('JtalkAndCLI', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndCLI);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndCLI";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'JtalkAndCLI'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndCLI);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$recv($recv(html)._h1())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("Jtalk and ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$1=$recv(html)._span();
$recv($1)._class_("blue");
$2=$recv($1)._with_("the command line");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._h2())._with_("jtalkc - a fairly elaborate bash script that:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($recv(html)._ul())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("Uses Node.js to run the Jtalk Compiler");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$4=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=2;
//>>excludeEnd("ctx");
$recv($4)._with_("Compiles .st files to .js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$5=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("Links .js files into a single one");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
$6=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=4;
//>>excludeEnd("ctx");
$recv($6)._with_("Adds class initilization and/or call to main");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Optionally runs Google Closure compiler");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkAndCLI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'the command line'].\x0a\x0a\x09html h2 with: 'jtalkc - a fairly elaborate bash script that:'.\x0a\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Uses Node.js to run the Jtalk Compiler'.\x0a\x09\x09html li with: 'Compiles .st files to .js'.\x0a\x09\x09html li with: 'Links .js files into a single one'.\x0a\x09\x09html li with: 'Adds class initilization and/or call to main'.\x0a\x09\x09html li with: 'Optionally runs Google Closure compiler']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"]
}),
$globals.JtalkAndCLI);



$core.addClass('JtalkAndEnyo', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndEnyo);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndEnyo";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'JtalkAndEnyo'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndEnyo);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv($recv(html)._h1())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("Jtalk and ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$1=$recv(html)._span();
$recv($1)._class_("blue");
$2=$recv($1)._with_("Enyo");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkAndEnyo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Enyo'].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "class:", "span"]
}),
$globals.JtalkAndEnyo);



$core.addClass('JtalkAndJavascriptSlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#08C";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndJavascriptSlide);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide transparent";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^'slide transparent'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndJavascriptSlide);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "jtalkAndJs";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'jtalkAndJs'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndJavascriptSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._h1())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(html)._with_("Smalltalk ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$3=$recv(html)._span();
$recv($3)._class_("red");
$4=$recv($3)._with_("♥");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$4;
return $recv(html)._with_(" JavaScript");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkAndJavascriptSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: [\x0a\x09\x09\x09html with: 'Smalltalk '.\x0a\x09\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09\x09html with: ' JavaScript']]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h1", "span"]
}),
$globals.JtalkAndJavascriptSlide);



$core.addClass('JtalkAndJavascriptSlide2', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#08C";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndJavascriptSlide2);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "jtalkAndJs2";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'jtalkAndJs2'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndJavascriptSlide2);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
$recv($recv(html)._h1())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("Smalltalk ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$1=$recv(html)._span();
$recv($1)._class_("red");
$2=$recv($1)._with_("♥");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$2;
return $recv(html)._with_(" JavaScript");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._h2())._with_("Jtalk maps one to one with the JavaScript equivalent:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$recv($recv(html)._ul())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("String ⇔ String");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$4=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=2;
//>>excludeEnd("ctx");
$recv($4)._with_("Number ⇔ Number");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
$5=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("BlockClosure ⇔ function");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
$6=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=4;
//>>excludeEnd("ctx");
$recv($6)._with_("Dictionary ⇔ Object");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
$7=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=5;
//>>excludeEnd("ctx");
$recv($7)._with_("Error ⇔ Error");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("etc.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkAndJavascriptSlide2)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Smalltalk '.\x0a\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09html with: ' JavaScript'].\x0a\x09html h2 with: 'Jtalk maps one to one with the JavaScript equivalent:'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'String ⇔ String'.\x0a\x09\x09html li with: 'Number ⇔ Number'.\x0a\x09\x09html li with: 'BlockClosure ⇔ function'.\x0a\x09\x09html li with: 'Dictionary ⇔ Object'.\x0a\x09\x09html li with: 'Error ⇔ Error'.\x0a\x09\x09html li with: 'etc.']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"]
}),
$globals.JtalkAndJavascriptSlide2);



$core.addClass('JtalkAndJavascriptSlide3', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#08C";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndJavascriptSlide3);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "jtalkAndJs3";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'jtalkAndJs3'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndJavascriptSlide3);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5,$7,$8,$10,$9,$11,$12,$13;
$recv($recv(html)._h1())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("Smalltalk ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$1=$recv(html)._span();
$recv($1)._class_("red");
$2=$recv($1)._with_("♥");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$2;
return $recv(html)._with_(" JavaScript");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._h2())._with_("Smalltalk ⇒ JavaScript");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$recv($recv(html)._ol())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("Unary messages begin with an underscore: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=1;
//>>excludeEnd("ctx");
return $recv($4)._with_("yourself");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
$recv($3)._with_(" becomes ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
$5=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=2;
//>>excludeEnd("ctx");
return $recv($6)._with_("_yourself()");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=12;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
$5;
$7=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=2;
//>>excludeEnd("ctx");
$recv($7)._with_("Binary messages are prefixed with 2 underscores: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=13;
//>>excludeEnd("ctx");
$recv($7)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$8=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=3;
//>>excludeEnd("ctx");
return $recv($8)._with_("3@4");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=15;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=14;
//>>excludeEnd("ctx");
$recv($7)._with_(" becomes ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=16;
//>>excludeEnd("ctx");
$9=$recv($7)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$10=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=4;
//>>excludeEnd("ctx");
return $recv($10)._with_("(3).__at(4)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=18;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=17;
//>>excludeEnd("ctx");
$9;
$11=$recv(html)._li();
$recv($11)._with_("Keyword message follow the same rules as unary messages, with a final underscore: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=19;
//>>excludeEnd("ctx");
$recv($11)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$12=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=5;
//>>excludeEnd("ctx");
return $recv($12)._with_("aDictionary at: 3 put: 4");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=21;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=20;
//>>excludeEnd("ctx");
$recv($11)._with_(" becomes ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=22;
//>>excludeEnd("ctx");
$13=$recv($11)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._code())._with_("aDictionary._at_put_(3, 4)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=23;
//>>excludeEnd("ctx");
return $13;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkAndJavascriptSlide3)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Smalltalk '.\x0a\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09html with: ' JavaScript'].\x0a\x09html h2 with: 'Smalltalk ⇒ JavaScript'.\x0a\x09html ol with: [\x0a\x09\x09html li \x0a\x09\x09\x09with: 'Unary messages begin with an underscore: ';\x0a\x09\x09\x09with: [html code with: 'yourself'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: '_yourself()'].\x0a\x09\x09html li \x0a\x09\x09\x09with: 'Binary messages are prefixed with 2 underscores: ';\x0a\x09\x09\x09with: [html code with: '3@4'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: '(3).__at(4)'].\x0a\x09\x09html li \x0a\x09\x09\x09with: 'Keyword message follow the same rules as unary messages, with a final underscore: ';\x0a\x09\x09\x09with: [html code with: 'aDictionary at: 3 put: 4'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'aDictionary._at_put_(3, 4)']]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "class:", "span", "h2", "ol", "li", "code"]
}),
$globals.JtalkAndJavascriptSlide3);



$core.addClass('JtalkAndJavascriptSlide4', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#08C";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#08C'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndJavascriptSlide4);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "jtalkAndJs4";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'jtalkAndJs4'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndJavascriptSlide4);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$6,$7,$9,$8,$10,$11,$13,$12,$14,$15,$17,$16,$18,$19,$20;
$recv($recv(html)._h1())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("JavaScript ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$1=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("red");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_("♥");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$2;
$recv(html)._with_(" Smalltalk too! ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$3=$recv(html)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$4=$recv(html)._span();
$recv($4)._class_("comment");
$5=$recv($4)._with_("(how cute)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._h2())._with_("JavaScript ⇒ Smalltalk");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$recv($recv(html)._ol())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=1;
//>>excludeEnd("ctx");
return $recv($7)._with_("someUser.name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
$recv($6)._with_(" becomes ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
$8=$recv($6)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$9=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=2;
//>>excludeEnd("ctx");
return $recv($9)._with_("someUser name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=13;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=12;
//>>excludeEnd("ctx");
$8;
$10=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=2;
//>>excludeEnd("ctx");
$recv($10)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$11=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=3;
//>>excludeEnd("ctx");
return $recv($11)._with_("someUser name = \x22John\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=15;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=14;
//>>excludeEnd("ctx");
$recv($10)._with_(" becomes ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=16;
//>>excludeEnd("ctx");
$12=$recv($10)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$13=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=4;
//>>excludeEnd("ctx");
return $recv($13)._with_("someUser name: 'John'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=18;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=17;
//>>excludeEnd("ctx");
$12;
$14=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=3;
//>>excludeEnd("ctx");
$recv($14)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$15=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=5;
//>>excludeEnd("ctx");
return $recv($15)._with_("console.log('hello world')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=20;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=19;
//>>excludeEnd("ctx");
$recv($14)._with_(" becomes ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=21;
//>>excludeEnd("ctx");
$16=$recv($14)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$17=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=6;
//>>excludeEnd("ctx");
return $recv($17)._with_("console log: 'hello world'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=23;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,9)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=22;
//>>excludeEnd("ctx");
$16;
$18=$recv(html)._li();
$recv($18)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$19=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=7;
//>>excludeEnd("ctx");
return $recv($19)._with_("window.jQuery('foo').css('background', 'red')");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=25;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,10)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=24;
//>>excludeEnd("ctx");
$recv($18)._with_(" becomes ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=26;
//>>excludeEnd("ctx");
$recv($18)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(html)._br();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,11)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=27;
//>>excludeEnd("ctx");
$20=$recv($18)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._code())._with_("(window jQuery: 'foo') css: 'background' color: 'red'");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,12)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=28;
//>>excludeEnd("ctx");
return $20;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkAndJavascriptSlide4)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'JavaScript '.\x0a\x09\x09html span class: 'red'; with: '♥'.\x0a\x09\x09html with: ' Smalltalk too! ';\x0a\x09\x09with: [html span class: 'comment'; with: '(how cute)']].\x0a\x09html h2 with: 'JavaScript ⇒ Smalltalk'.\x0a\x09html ol with: [\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'someUser.name'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'someUser name'].\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'someUser name = \x22John\x22'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'someUser name: ''John'''].\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'console.log(''hello world'')'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html code with: 'console log: ''hello world'''].\x0a\x09\x09html li \x0a\x09\x09\x09with: [html code with: 'window.jQuery(''foo'').css(''background'', ''red'')'];\x0a\x09\x09\x09with: ' becomes ';\x0a\x09\x09\x09with: [html br];\x0a\x09\x09\x09with: [html code with: '(window jQuery: ''foo'') css: ''background'' color: ''red''']]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "class:", "span", "h2", "ol", "li", "code", "br"]
}),
$globals.JtalkAndJavascriptSlide4);



$core.addClass('JtalkAndNode', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndNode);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndNode";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'JtalkAndNode'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndNode);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv($recv(html)._h1())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("Jtalk and ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$1=$recv(html)._span();
$recv($1)._class_("blue");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_("Node.js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._h2())._with_("Hello.st:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($recv(html)._pre())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("code2");
$4=$recv($3)._with_("Object subclass: #Hello\x0a        instanceVariableNames: ''\x0a        category: 'Hello'!\x0a\x0a!Hello class methodsFor: 'main'!\x0amain\x0a\x09console log: 'Hello world from JTalk in Node.js'\x0a! !");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkAndNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Node.js'].\x0a\x0a\x09html h2 with: 'Hello.st:'.\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'Object subclass: #Hello\x0a        instanceVariableNames: ''''\x0a        category: ''Hello''!\x0a\x0a!Hello class methodsFor: ''main''!\x0amain\x0a\x09console log: ''Hello world from JTalk in Node.js''\x0a! !']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "class:", "span", "h2", "pre", "div"]
}),
$globals.JtalkAndNode);



$core.addClass('JtalkAndNode2', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndNode2);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndNode2";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'JtalkAndNode2'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndNode2);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
$recv($recv(html)._h1())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("Jtalk and ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$1=$recv(html)._span();
$recv($1)._class_("blue");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_("Node.js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$3=$recv(html)._h2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["h2"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("Makefile:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$4=$recv(html)._pre();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pre"]=1;
//>>excludeEnd("ctx");
$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($5)._class_("code2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$6=$recv($5)._with_("Program.js: Hello.st\x0a\x09../../bin/jtalkc -N -m Hello Hello.st Program\x0a\x0arun: Program.js\x0a\x09./hello\x0a\x0aclean:\x0a\x09rm -f Program.js Hello.js\x0a");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$recv($recv(html)._h2())._with_("hello:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$recv($recv(html)._pre())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv(html)._div();
$recv($7)._class_("code2");
$8=$recv($7)._with_("node Program.js $@");
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkAndNode2)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Node.js'].\x0a\x0a\x09html h2 with: 'Makefile:'.\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'Program.js: Hello.st\x0a\x09../../bin/jtalkc -N -m Hello Hello.st Program\x0a\x0arun: Program.js\x0a\x09./hello\x0a\x0aclean:\x0a\x09rm -f Program.js Hello.js\x0a'].\x0ahtml h2 with: 'hello:'.\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'node Program.js $@']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "class:", "span", "h2", "pre", "div"]
}),
$globals.JtalkAndNode2);



$core.addClass('JtalkAndNode3', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndNode3);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndNode3";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'JtalkAndNode3'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndNode3);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$recv($recv(html)._h1())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("Jtalk and ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$1=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("blue");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_("Node.js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._h2())._with_("make clean && make run:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($recv(html)._pre())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._div();
$recv($3)._class_("code2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_("rm -f Program.js Hello.js\x0a../../bin/jtalkc -N -m Hello Hello.st Program\x0aLoading libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js\x0a/home/gokr/jtalk/js/Parser.js /home/gokr/jtalk/js/Compiler.js\x0a/home/gokr/jtalk/js/init.js /home/gokr/jtalk/nodejs/nodecompile.js\x0aand compiling ...\x0aCompiling in debugMode: false\x0aReading file Hello.st\x0aExporting category Hello as Hello.js\x0aAdding libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js  ...\x0aAdding Jtalk code Hello.js ...\x0aAdding initializer /home/gokr/jtalk/js/init.js ...\x0aAdding call to Hello class >> main ...\x0aWriting Program.js ...\x0aDone.\x0a./hello");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._span();
$recv($5)._class_("blue");
$6=$recv($5)._with_("Hello world from JTalk in Node.js");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkAndNode3)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'Node.js'].\x0a\x0a\x09html h2 with: 'make clean && make run:'.\x0a\x0a\x09html pre with: [\x0a\x09\x09html div class: 'code2'; with:  'rm -f Program.js Hello.js\x0a../../bin/jtalkc -N -m Hello Hello.st Program\x0aLoading libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js\x0a/home/gokr/jtalk/js/Parser.js /home/gokr/jtalk/js/Compiler.js\x0a/home/gokr/jtalk/js/init.js /home/gokr/jtalk/nodejs/nodecompile.js\x0aand compiling ...\x0aCompiling in debugMode: false\x0aReading file Hello.st\x0aExporting category Hello as Hello.js\x0aAdding libraries  /home/gokr/jtalk/js/boot.js /home/gokr/jtalk/js/Kernel.js  ...\x0aAdding Jtalk code Hello.js ...\x0aAdding initializer /home/gokr/jtalk/js/init.js ...\x0aAdding call to Hello class >> main ...\x0aWriting Program.js ...\x0aDone.\x0a./hello'.\x0ahtml span class: 'blue'; with:'Hello world from JTalk in Node.js']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "class:", "span", "h2", "pre", "div"]
}),
$globals.JtalkAndNode3);



$core.addClass('JtalkAndWebOS', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "#0A1";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#0A1'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndWebOS);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "JtalkAndWebOS";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'JtalkAndWebOS'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkAndWebOS);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$recv($recv(html)._h1())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._with_("Jtalk and ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$1=$recv(html)._span();
$recv($1)._class_("blue");
$2=$recv($1)._with_("webOS");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._h2())._with_("A really cool mobile OS based on Linux:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($recv(html)._ul())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("The primary language in webOS is Javascript");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$4=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=2;
//>>excludeEnd("ctx");
$recv($4)._with_("The new UI framework for webOS 3.0 is called Enyo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$5=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("Regular apps run in V8 + Webkit");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Background services run in Node.js");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkAndWebOS)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: [\x0a\x09\x09html with: 'Jtalk and '.\x0a\x09\x09html span class: 'blue'; with: 'webOS'].\x0a\x0a\x09html h2 with: 'A really cool mobile OS based on Linux:'.\x0a\x0a\x09html ul with: [\x0a\x09\x09html li with: 'The primary language in webOS is Javascript'.\x0a\x09\x09html li with: 'The new UI framework for webOS 3.0 is called Enyo'.\x0a\x09\x09html li with: 'Regular apps run in V8 + Webkit'.\x0a\x09\x09html li with: 'Background services run in Node.js']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "class:", "span", "h2", "ul", "li"]
}),
$globals.JtalkAndWebOS);



$core.addClass('JtalkFeaturesSlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "features";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'features'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JtalkFeaturesSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$recv($recv(html)._h1())._with_("Jtalk features");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._ul())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("Jtalk is (mostly) written in itself, including the parser & compiler");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$2=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=2;
//>>excludeEnd("ctx");
$recv($2)._with_("Full Smalltalk object system, including classes & metaclasses, etc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$3=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=3;
//>>excludeEnd("ctx");
$recv($3)._with_("Core libraries (streams, collections, RegExp, etc)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$4=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=4;
//>>excludeEnd("ctx");
$recv($4)._with_("Web related libraries: HTML Canvas, DOM manipulation");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$5=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=5;
//>>excludeEnd("ctx");
$recv($5)._with_("Full featured IDE");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(html)._with_("Advanced Smalltalk features, including ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
$6=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=1;
//>>excludeEnd("ctx");
$recv($6)._with_("#doesNotUnderstand:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
$recv(html)._with_(" support and ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
return $recv($recv(html)._code())._with_("thisContext");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.JtalkFeaturesSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: 'Jtalk features'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Jtalk is (mostly) written in itself, including the parser & compiler'.\x0a\x09\x09html li with: 'Full Smalltalk object system, including classes & metaclasses, etc'.\x0a\x09\x09html li with: 'Core libraries (streams, collections, RegExp, etc)'.\x0a\x09\x09html li with: 'Web related libraries: HTML Canvas, DOM manipulation'.\x0a\x09\x09html li with: 'Full featured IDE'.\x0a\x09\x09html li with: [\x0a\x09\x09\x09html with:'Advanced Smalltalk features, including '.\x0a\x09\x09\x09html code with: '#doesNotUnderstand:'.\x0a\x09\x09\x09html with: ' support and '.\x0a\x09\x09\x09html code with: 'thisContext']]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "ul", "li", "code"]
}),
$globals.JtalkFeaturesSlide);



$core.addClass('SweSUGSlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#555";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#555'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUGSlide);

$core.addMethod(
$core.method({
selector: "codeSnippet",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},$globals.SweSUGSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "codeSnippet\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.SweSUGSlide);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'rendering',
fn: function (){
var self=this;
return "slide blue3d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUGSlide);

$core.addMethod(
$core.method({
selector: "renderCodeSnippetOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($SourceArea())._new();
$recv($1)._renderOn_(html);
$2=$recv($1)._editor();
$recv($2)._setValue_(self._codeSnippet());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderCodeSnippetOn:",{html:html},$globals.SweSUGSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderCodeSnippetOn: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: self codeSnippet.",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["setValue:", "renderOn:", "new", "editor", "codeSnippet"]
}),
$globals.SweSUGSlide);

$core.addMethod(
$core.method({
selector: "renderSnippet:on:",
protocol: 'rendering',
fn: function (aString,html){
var self=this;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($SourceArea())._new();
$recv($1)._renderOn_(html);
$2=$recv($1)._editor();
$recv($2)._setValue_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSnippet:on:",{aString:aString,html:html},$globals.SweSUGSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "html"],
source: "renderSnippet: aString on: html\x0a\x09(SourceArea new \x0a\x09\x09\x09renderOn: html;\x0a\x09\x09\x09editor)  setValue: aString.",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["setValue:", "renderOn:", "new", "editor"]
}),
$globals.SweSUGSlide);



$core.addClass('SweSUGAboutSlide', $globals.SweSUGSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#555";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#555'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUGAboutSlide);

$core.addMethod(
$core.method({
selector: "cssClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "slide blue3d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cssClass\x0a\x09^ 'slide blue3d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUGAboutSlide);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "About";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'About'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUGAboutSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $Browser(){return $globals.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $Presentation(){return $globals.Presentation||(typeof Presentation=="undefined"?nil:Presentation)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._h1())._with_("About this presentation");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("This presentation is entirely written in Amber. Lots of stuff was heavily copied from the two earlier presentations from ESUG and FOSDEM.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$4=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p"]=2;
//>>excludeEnd("ctx");
$recv($4)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(html)._with_("Press ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$5=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=1;
//>>excludeEnd("ctx");
$recv($5)._with_("←");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$recv(html)._with_(" to move backward and ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$recv($recv(html)._code())._with_(" →");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
return $recv(html)._with_(" to move forward.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(html)._with_("Open a ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
$6=$recv(html)._button();
$recv($6)._with_("browser");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=12;
//>>excludeEnd("ctx");
$7=$recv($6)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($Browser())._openOn_($Presentation());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
$7;
return $recv(html)._with_(" to edit the source code.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.SweSUGAboutSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'About this presentation'.\x0a\x09\x09html p with: 'This presentation is entirely written in Amber. Lots of stuff was heavily copied from the two earlier presentations from ESUG and FOSDEM.'.\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Press '.\x0a\x09\x09\x09html code with: '←'.\x0a\x09\x09\x09html with: ' to move backward and '.\x0a\x09\x09\x09html code with: ' →'.\x0a\x09\x09\x09html with: ' to move forward.'].\x0a\x09\x09html p with: [\x0a\x09\x09\x09html with: 'Open a '.\x0a\x09\x09\x09html button \x0a\x09\x09\x09\x09with: 'browser';\x0a\x09\x09\x09\x09onClick: [Browser openOn: Presentation].\x0a\x09\x09\x09html with: ' to edit the source code.']]",
referencedClasses: ["Browser", "Presentation"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h1", "p", "code", "button", "onClick:", "openOn:"]
}),
$globals.SweSUGAboutSlide);



$core.addClass('SweSUGAmberFeaturesSlide', $globals.SweSUGSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "features";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'features'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUGAmberFeaturesSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
$recv($recv(html)._h1())._with_("Amber features");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._ul())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("Amber is (mostly) written in itself, including the compiler");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$2=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=2;
//>>excludeEnd("ctx");
$recv($2)._with_("Full Smalltalk object system, including classes & metaclasses, etc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$3=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=3;
//>>excludeEnd("ctx");
$recv($3)._with_("Core libraries (streams, collections, RegExp, etc)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$4=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=4;
//>>excludeEnd("ctx");
$recv($4)._with_("Web related libraries: HTML Canvas, DOM manipulation");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$5=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=5;
//>>excludeEnd("ctx");
$recv($5)._with_("Very good javascript integration, both ways");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$6=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["li"]=6;
//>>excludeEnd("ctx");
$recv($6)._with_("Full featured IDE!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(html)._with_("Advanced features, including ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
$7=$recv(html)._code();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["code"]=1;
//>>excludeEnd("ctx");
$recv($7)._with_("#doesNotUnderstand:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
$recv(html)._with_(" support and ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=12;
//>>excludeEnd("ctx");
return $recv($recv(html)._code())._with_("thisContext");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.SweSUGAmberFeaturesSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html h1 with: 'Amber features'.\x0a\x09html ul with: [\x0a\x09\x09html li with: 'Amber is (mostly) written in itself, including the compiler'.\x0a\x09\x09html li with: 'Full Smalltalk object system, including classes & metaclasses, etc'.\x0a\x09\x09html li with: 'Core libraries (streams, collections, RegExp, etc)'.\x0a\x09\x09html li with: 'Web related libraries: HTML Canvas, DOM manipulation'.\x0a\x09\x09html li with: 'Very good javascript integration, both ways'.\x0a\x09\x09html li with: 'Full featured IDE!'.\x0a\x09\x09html li with: [\x0a\x09\x09\x09html with:'Advanced features, including '.\x0a\x09\x09\x09html code with: '#doesNotUnderstand:'.\x0a\x09\x09\x09html with: ' support and '.\x0a\x09\x09\x09html code with: 'thisContext']]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "h1", "ul", "li", "code"]
}),
$globals.SweSUGAmberFeaturesSlide);



$core.addClass('SweSUGIntroSlide', $globals.SweSUGSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return "Intro";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'Intro'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUGIntroSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$6,$5,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center animate");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._img())._src_("fosdem2012/images/amber.png");
$4=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._author();
$recv(html)._p_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p:"]=1;
//>>excludeEnd("ctx");
$6=self._presentation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["presentation"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._description();
$recv(html)._p_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["p:"]=2;
//>>excludeEnd("ctx");
return $recv(html)._p_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(html)._with_($recv(self._presentation())._email());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.SweSUGIntroSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center animate'; with: [\x0a\x09\x09html img src: 'fosdem2012/images/amber.png'.\x0a\x09\x09html p: self presentation author.\x0a          \x09html p: self presentation description.\x0a\x09\x09html p: [\x0a\x09\x09\x09html with: self presentation email]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "src:", "img", "p:", "author", "presentation", "description", "email"]
}),
$globals.SweSUGIntroSlide);



$core.addClass('SweSUGWhatIsAmberSlide', $globals.SweSUGSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "WhatIsAmber";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'WhatIsAmber'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUGWhatIsAmberSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(html)._img_("esug2011/images/balloon.jpg");
$recv($recv(html)._h1())._with_("Amber in a nutshell");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv(html)._h2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["h2"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("Amber is a true Smalltalk");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$4=$recv(html)._h2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["h2"]=2;
//>>excludeEnd("ctx");
$recv($4)._with_("It compiles to and runs on/in JavaScript");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$5=$recv(html)._h2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["h2"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("MIT license");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$6=$recv(html)._h2();
$recv($6)._class_("fancy");
$7=$recv($6)._with_("Amber is way cool!");
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.SweSUGWhatIsAmberSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html img: 'esug2011/images/balloon.jpg'.\x0a\x09\x09html h1 with: 'Amber in a nutshell'.\x0a\x09\x09html h2 with: 'Amber is a true Smalltalk'.\x0a\x09\x09html h2 with: 'It compiles to and runs on/in JavaScript'.\x0a\x09\x09html h2 with: 'MIT license'.\x0a\x09\x09html h2 class: 'fancy'; with: 'Amber is way cool!']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "img:", "h1", "h2"]
}),
$globals.SweSUGWhatIsAmberSlide);



$core.addClass('SweSUGWorkspaceSlide', $globals.SweSUGSlide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#18bd7d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#18bd7d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUGWorkspaceSlide);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "workspace";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'workspace'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SweSUGWorkspaceSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'accessing',
fn: function (html){
var self=this;
var workspace;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$8,$2;
workspace=$recv($SourceArea())._new();
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("section center");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._h1())._with_("Give Amber a try!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$recv(workspace)._renderOn_(html);
return $recv($recv(html)._div())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("DoIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(workspace)._doIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($5)._with_("PrintIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(workspace)._printIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$6;
$7=$recv(html)._button();
$recv($7)._with_("InspectIt");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(workspace)._inspectIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html,workspace:workspace},$globals.SweSUGWorkspaceSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09| workspace |\x0a\x09workspace := SourceArea new.\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Give Amber a try!'.\x0a\x09\x09workspace renderOn: html.\x0a\x09\x09html div with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09\x09onClick: [workspace doIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09\x09onClick: [workspace printIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'InspectIt';\x0a\x09\x09\x09\x09onClick: [workspace inspectIt]]]",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["new", "class:", "div", "with:", "h1", "renderOn:", "button", "onClick:", "doIt", "printIt", "inspectIt"]
}),
$globals.SweSUGWorkspaceSlide);



$core.addClass('WhatIsJtalkSlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "WhatIsJtalk";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'WhatIsJtalk'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WhatIsJtalkSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$2;
$1=$recv(html)._div();
$recv($1)._class_("section center");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._h1())._with_("Jtalk in a nutshell");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$3=$recv(html)._h2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["h2"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("Jtalk is an implementation of Smalltalk");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$4=$recv(html)._h2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["h2"]=2;
//>>excludeEnd("ctx");
$recv($4)._with_("Jtalk runs on top of the JavaScript runtime");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$5=$recv(html)._h2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["h2"]=3;
//>>excludeEnd("ctx");
$recv($5)._with_("Jtalk is an opensource project (MIT)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$6=$recv(html)._h2();
$recv($6)._class_("fancy");
$7=$recv($6)._with_("Jtalk is cool!");
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},$globals.WhatIsJtalkSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Jtalk in a nutshell'.\x0a\x09\x09html h2 with: 'Jtalk is an implementation of Smalltalk'.\x0a\x09\x09html h2 with: 'Jtalk runs on top of the JavaScript runtime'.\x0a\x09\x09html h2 with: 'Jtalk is an opensource project (MIT)'.\x0a\x09\x09html h2 class: 'fancy'; with: 'Jtalk is cool!']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h1", "h2"]
}),
$globals.WhatIsJtalkSlide);



$core.addClass('WorkspaceSlide', $globals.Slide, [], 'Presentation');
$core.addMethod(
$core.method({
selector: "backgroundColor",
protocol: 'accessing',
fn: function (){
var self=this;
return "#18bd7d";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundColor\x0a\x09^'#18bd7d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WorkspaceSlide);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "workspace";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^'workspace'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WorkspaceSlide);

$core.addMethod(
$core.method({
selector: "renderSlideOn:",
protocol: 'accessing',
fn: function (html){
var self=this;
var workspace;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$8,$2;
workspace=$recv($SourceArea())._new();
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($1)._class_("section center");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(html)._h1())._with_("Give Jtalk a try!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$recv(workspace)._renderOn_(html);
return $recv($recv(html)._div())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_("DoIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(workspace)._doIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4;
$5=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($5)._with_("PrintIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
$6=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(workspace)._printIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$6;
$7=$recv(html)._button();
$recv($7)._with_("InspectIt");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(workspace)._inspectIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
return $8;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html,workspace:workspace},$globals.WorkspaceSlide)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderSlideOn: html\x0a\x09| workspace |\x0a\x09workspace := SourceArea new.\x0a\x09html div class: 'section center'; with: [\x0a\x09\x09html h1 with: 'Give Jtalk a try!'.\x0a\x09\x09workspace renderOn: html.\x0a\x09\x09html div with: [\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'DoIt';\x0a\x09\x09\x09\x09onClick: [workspace doIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'PrintIt';\x0a\x09\x09\x09\x09onClick: [workspace printIt].\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09with: 'InspectIt';\x0a\x09\x09\x09\x09onClick: [workspace inspectIt]]]",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["new", "class:", "div", "with:", "h1", "renderOn:", "button", "onClick:", "doIt", "printIt", "inspectIt"]
}),
$globals.WorkspaceSlide);


});
