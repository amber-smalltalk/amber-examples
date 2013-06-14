(function(smalltalk,nil,_st){
smalltalk.addPackage('Presentation');
smalltalk.addClass('Presentation', smalltalk.Widget, ['currentSlide', 'slides'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "John Smith";
}, function($ctx1) {$ctx1.fill(self,"author",{},smalltalk.Presentation)})},
messageSends: []}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentSlide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentSlide"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentSlide",{},smalltalk.Presentation)})},
messageSends: []}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentSlide:",
fn: function (aSlide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentSlide"]=aSlide;
return self}, function($ctx1) {$ctx1.fill(self,"currentSlide:",{aSlide:aSlide},smalltalk.Presentation)})},
messageSends: []}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "currentSlideIndex",
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
messageSends: ["indexOf:ifAbsent:", "currentSlide", "slides"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "A presentation written in Jtalk";
}, function($ctx1) {$ctx1.fill(self,"description",{},smalltalk.Presentation)})},
messageSends: []}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "john@smith.com";
}, function($ctx1) {$ctx1.fill(self,"email",{},smalltalk.Presentation)})},
messageSends: []}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "initSlides",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@slides"]=_st(self._slideClasses())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._on_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initSlides",{},smalltalk.Presentation)})},
messageSends: ["collect:", "on:", "slideClasses"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAt:",
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
messageSends: ["at:ifAbsent:", "slides", "ifNotNil:", "show"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "nextSlide",
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
messageSends: ["ifNotNil:", "at:ifAbsent:", "+", "currentSlideIndex", "slides", "show", "currentSlide"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "previousSlide",
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
messageSends: ["ifNotNil:", "at:ifAbsent:", "-", "currentSlideIndex", "slides", "show", "currentSlide"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["type:", "style", "with:", "id:", "div", "renderSlidesOn:"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlidesOn:",
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
messageSends: ["do:", "renderOn:", "slides", "ifNil:", "first", "showCurrentSlide"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "showCurrentSlide",
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
messageSends: ["ifNotNil:", "hide", "asJQuery", "show", ",", "id", "currentSlide", "text:", "title"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"slideClasses",{},smalltalk.Presentation)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideTransition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "fade";
}, function($ctx1) {$ctx1.fill(self,"slideTransition",{},smalltalk.Presentation)})},
messageSends: []}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slides",
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
messageSends: ["ifNil:", "initSlides"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slidesDo:",
fn: function (aBlockWithArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._slides())._do_((function(aSlide){
return smalltalk.withContext(function($ctx2) {
return _st(aBlockWithArg)._value_(aSlide);
}, function($ctx2) {$ctx2.fillBlock({aSlide:aSlide},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"slidesDo:",{aBlockWithArg:aBlockWithArg},smalltalk.Presentation)})},
messageSends: ["do:", "value:", "slides"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.Presentation)})},
messageSends: []}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._title();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.Presentation)})},
messageSends: ["title", "class"]}),
smalltalk.Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "http://jtalk-project.org";
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.Presentation)})},
messageSends: []}),
smalltalk.Presentation);


smalltalk.Presentation.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "concretePresentations",
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
messageSends: ["select:", "isConcrete", "allSubclasses"]}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "concretePresentationsDo:",
fn: function (aBlockWithArg){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._concretePresentations())._do_(aBlockWithArg);
return self}, function($ctx1) {$ctx1.fill(self,"concretePresentationsDo:",{aBlockWithArg:aBlockWithArg},smalltalk.Presentation.klass)})},
messageSends: ["do:", "concretePresentations"]}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.Presentation.klass)})},
messageSends: []}),
smalltalk.Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Slides";
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.Presentation.klass)})},
messageSends: []}),
smalltalk.Presentation.klass);


smalltalk.addClass('ESUG2011Presentation', smalltalk.Presentation, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Nicolas Petton";
}, function($ctx1) {$ctx1.fill(self,"author",{},smalltalk.ESUG2011Presentation)})},
messageSends: []}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ESUG 2011, Edinburgh";
}, function($ctx1) {$ctx1.fill(self,"description",{},smalltalk.ESUG2011Presentation)})},
messageSends: []}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "nico@objectfusion.fr";
}, function($ctx1) {$ctx1.fill(self,"email",{},smalltalk.ESUG2011Presentation)})},
messageSends: []}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
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
messageSends: ["add:", "new", "yourself"]}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.ESUG2011Presentation)})},
messageSends: []}),
smalltalk.ESUG2011Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "http://jtalk-project.org";
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.ESUG2011Presentation)})},
messageSends: []}),
smalltalk.ESUG2011Presentation);


smalltalk.ESUG2011Presentation.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.ESUG2011Presentation.klass)})},
messageSends: []}),
smalltalk.ESUG2011Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Jtalk";
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.ESUG2011Presentation.klass)})},
messageSends: []}),
smalltalk.ESUG2011Presentation.klass);


smalltalk.addClass('FOSDEM2012Presentation', smalltalk.Presentation, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Laurent Laffont, Johnny Thornton";
}, function($ctx1) {$ctx1.fill(self,"author",{},smalltalk.FOSDEM2012Presentation)})},
messageSends: []}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "FOSDEM 2012, Brussels";
}, function($ctx1) {$ctx1.fill(self,"description",{},smalltalk.FOSDEM2012Presentation)})},
messageSends: []}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "laurent.laffont@gmail.com,  johnnyt@xan.do";
}, function($ctx1) {$ctx1.fill(self,"email",{},smalltalk.FOSDEM2012Presentation)})},
messageSends: []}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
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
messageSends: []}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 700px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a\x0a.slide.blue3d {\x0a  background: #feffff;\x0a  background: -moz-linear-gradient(top, #feffff 0%, #d2ebf9 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#feffff), color-stop(100%,#d2ebf9));\x0a  background: -webkit-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -o-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  background: -ms-linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#feffff\x22, endColorstr=\x22#d2ebf9\x22,GradientType=0 );\x0a  background: linear-gradient(top, #feffff 0%,#d2ebf9 100%);\x0a}\x0a\x0a\x0a.slide.red3d {\x0a  background: #febbbb;\x0a  background: -moz-linear-gradient(top, #febbbb 0%, #fe9090 71%, #ff5c5c 95%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#febbbb), color-stop(71%,#fe9090), color-stop(95%,#ff5c5c));\x0a  background: -webkit-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -o-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  background: -ms-linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#febbbb\x22, endColorstr=\x22#ff5c5c\x22,GradientType=0 );\x0a  background: linear-gradient(top, #febbbb 0%,#fe9090 71%,#ff5c5c 95%);\x0a}\x0a\x0a\x0a.slide.green3d {\x0a  background: #cdeb8e;\x0a  background: -moz-linear-gradient(top, #cdeb8e 0%, #a5c956 100%);\x0a  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#cdeb8e), color-stop(100%,#a5c956));\x0a  background: -webkit-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -o-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  background: -ms-linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\x22#cdeb8e\x22, endColorstr=\x22#a5c956\x22,GradientType=0 );\x0a  background: linear-gradient(top, #cdeb8e 0%,#a5c956 100%);\x0a}\x0a\x0a@-webkit-keyframes rotate-horizontal {\x0a\x090% { -webkit-transform: perspective(1000px) rotateY(-10deg);}\x0a\x09100% { -webkit-transform: perspective(1000px) rotateY(10deg);}\x0a}\x0a\x0a.animate p{\x0a-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a#FOSDEMAmberBackend img {\x0a\x09margin: 5px;\x0a\x09-webkit-animation: rotate-horizontal 2s infinite alternate ease-in-out;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#FOSDEMContributionsSlide .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a\x0a.tweet {\x0a\x09background-color: #aaa;\x0a\x09color: black;\x0a\x09padding: 10px;\x0a\x09border-radius: 10px;\x0a\x09border: 5px solid #eee;\x0a\x09margin: 10px;\x0a}\x0a\x0a.tweet img {\x0a\x09vertical-align: top;\x0a\x09margin-right: 10px;\x0a}\x0a\x0a.tweet span:first-child {\x0a\x09float: right;\x0a}\x0a";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.FOSDEM2012Presentation)})},
messageSends: []}),
smalltalk.FOSDEM2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "http://amber-lang.net";
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.FOSDEM2012Presentation)})},
messageSends: []}),
smalltalk.FOSDEM2012Presentation);


smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.FOSDEM2012Presentation.klass)})},
messageSends: []}),
smalltalk.FOSDEM2012Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Amber";
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.FOSDEM2012Presentation.klass)})},
messageSends: []}),
smalltalk.FOSDEM2012Presentation.klass);


smalltalk.addClass('SweSUG2012Presentation', smalltalk.Presentation, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Göran Krampe";
}, function($ctx1) {$ctx1.fill(self,"author",{},smalltalk.SweSUG2012Presentation)})},
messageSends: []}),
smalltalk.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "description",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "SweSUG 2012, Stockholm";
}, function($ctx1) {$ctx1.fill(self,"description",{},smalltalk.SweSUG2012Presentation)})},
messageSends: []}),
smalltalk.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "email",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "goran@krampe.se";
}, function($ctx1) {$ctx1.fill(self,"email",{},smalltalk.SweSUG2012Presentation)})},
messageSends: []}),
smalltalk.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "slideClasses",
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
messageSends: ["add:", "new", "yourself"]}),
smalltalk.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "\x0abody {\x0a    font-family: Helvetica,Arial,sans;\x0a}\x0a\x0a#slides {\x0a    width: 100%;\x0a    height: 100%;\x0a    overflow: hidden;\x0a    position: absolute;\x0a    top: 0;\x0a    bottom: 0;\x0a    left: 0;\x0a    right: 0;\x0a    background: #555;\x0a}\x0a\x0a.slide {\x0a    background: #fff;\x0a    color: #444;\x0a    text-align: left;\x0a    font-size: 20px;\x0a    line-height: 1.8em;\x0a    height: 500px;\x0a    width: 700px;\x0a    padding: 60px;\x0a    position: absolute;\x0a    left: 50%;\x0a    top: 50%;\x0a    margin-left: -420px;\x0a    margin-top: -320px;\x0a    box-shadow: 0 0 20px #111;\x0a    -moz-box-shadow: 0 0 20px #111;\x0a    -webkit-box-shadow: 0 0 20px #111;\x0a}\x0a\x0a.slide.transparent {\x0a    background: transparent;\x0a    box-shadow: 0 0 0 none;\x0a    -moz-box-shadow: 0 0 0 transparent;\x0a    -webkit-box-shadow: 0 0 0 transparent;\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black {\x0a    background: black;\x0a    background-image: -webkit-gradient(\x0a\x09linear,\x0a\x09left bottom,\x0a\x09left top,\x0a\x09color-stop(0.38, rgb(79,79,79)),\x0a\x09color-stop(0.69, rgb(33,33,33)),\x0a\x09color-stop(0.86, rgb(4,4,4))\x0a    );\x0a    background-image: -moz-linear-gradient(\x0a\x09center bottom,\x0a\x09rgb(79,79,79) 38%,\x0a\x09rgb(33,33,33) 69%,\x0a\x09rgb(4,4,4) 86%\x0a    );\x0a    color: #fff !important;\x0a}\x0a\x0a.slide.black h1, .slide.black h2, .slide.black h3,\x0a.slide.transparent h1, .slide.transparent h2, .slide.transparent h3 {\x0a    color: #fff;\x0a    text-shadow: 0 1px 4px #aaa;\x0a}\x0a\x0a.slide.black a, .slide.transparent a {\x0a    color: #ccc;\x0a}\x0a\x0a.slide.white {\x0a    color: #333 !important;\x0a}\x0a\x0a.slide.white h1, .slide.white h2, .slide.white h3 {\x0a    color: #333;\x0a}\x0a\x0a.slide.white a {\x0a    color: #333;\x0a}\x0a\x0a\x0a.slide h1, .slide h2, .slide h3 {\x0a    color: #333;\x0a    /* text-align: center; */\x0a}\x0a\x0a.slide h1 {\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 36px;\x0a    text-shadow: 0 1px 4px #aaa;\x0a    margin-top: 30px;\x0a    margin-bottom: 50px;\x0a}\x0a\x0a/* .slide ul, .slide li { */\x0a/*     padding: 0; */\x0a/*     margin: 0; */\x0a/* } */\x0a\x0a.slide button {\x0a    font-size: 18px;\x0a}\x0a\x0a.slide a {\x0a    color: #555;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a}\x0a\x0a.slide a:hover {\x0a    color: #fff;\x0a    background: #555;\x0a}\x0a\x0a.slide .right {\x0a    text-align: right;\x0a}\x0a\x0a.slide .section.center {\x0a    text-align: center;\x0a    display: table-cell;\x0a    vertical-align: middle;\x0a    width: 700px;\x0a    height: 500px;\x0a}\x0a\x0a.slide code {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    color: #444;\x0a    border: 1px solid #ddd;\x0a    background: #eee;\x0a    border-radius: 4px;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a.slide .code2 {\x0a    font-family: \x22Droid Sans Mono\x22;\x0a    line-height: 1.2em;\x0a    color: #444;\x0a    padding: 2px;\x0a    font-size: 16px;\x0a}\x0a\x0a\x0a.slide .CodeMirror {\x0a    width: 500px;\x0a    height: 300px;\x0a    text-align: left;\x0a}\x0a\x0a.slide .CodeMirror-scroll {\x0a    text-align: left;\x0a}\x0a\x0a.slide .fancy {\x0a    margin-top: 30px;\x0a    -webkit-transform: rotate(-10deg);\x0a    -moz-transform: rotate(-10deg);\x0a    transform: rotate(-10deg);\x0a    color: red;\x0a}\x0a\x0a.slide .comment {\x0a    opacity: 0.6;\x0a    font-weight: normal;\x0a}\x0a\x0a.slide .red {\x0a    color: red;\x0a}\x0a\x0a.slide .blue {\x0a    color: blue;\x0a}\x0a\x0a.slide#WhatIsJtalk {\x0a    background: white url(\x22esug2011/images/balloon.jpg\x22) 650px 50px no-repeat;\x0a}\x0a\x0a.slide#ide {\x0a    background: black url(\x22esug2011/images/ide_star_wars.png\x22) center center no-repeat;\x0a}\x0a\x0a.slide#JtalkAndCLI {\x0a    background: white url(\x22esug2011/images/terminal.png\x22) 620px 20px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a.slide#JtalkAndNode2 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndNode3 {\x0a    background: white url(\x22esug2011/images/nodejs.png\x22) 580px 40px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndWebOS {\x0a    background: white url(\x22esug2011/images/devices.jpg\x22) 380px 280px no-repeat;\x0a}\x0a\x0a.slide#JtalkAndEnyo {\x0a    background: white url(\x22esug2011/images/enyo.png\x22) 130px 150px no-repeat;\x0a}\x0a\x0a.slide#links {\x0a    background: white url(\x22esug2011/images/asterix.png\x22) 30px 130px no-repeat;\x0a}\x0a\x0a.slide#links .section {\x0a    margin-left: 250px;\x0a    margin-top: 200px;\x0a    font-family: \x22Droid Sans\x22;\x0a    font-size: 26px;\x0a    font-weight: bold;\x0a}\x0a\x0a\x0a#meta {\x0a    position: absolute;\x0a    font-size: 12px;\x0a    opacity: 0.6;\x0a    bottom: 0;\x0a    right: 0;\x0a    z-index: 2;\x0a    background: #333;\x0a    text-align: right;\x0a    padding: 0 10px;\x0a    line-height: 1.8em;\x0a    color: #eee;\x0a    border-top-left-radius: 5px;\x0a}\x0a\x0a#meta:hover {\x0a    opacity: 0.8;\x0a}\x0a\x0a#meta p {\x0a    display: inline;\x0a    padding: 0 5px;\x0a}\x0a\x0a#meta a {\x0a    //background: #ccc;\x0a    color: #ccc;\x0a    text-decoration: none;\x0a    padding: 0 5px;\x0a}\x0a\x0a.slide {\x0a    \x0a}\x0a";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.SweSUG2012Presentation)})},
messageSends: []}),
smalltalk.SweSUG2012Presentation);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "http://www.amber-lang.net";
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.SweSUG2012Presentation)})},
messageSends: []}),
smalltalk.SweSUG2012Presentation);


smalltalk.addMethod(
smalltalk.method({
selector: "isConcrete",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isConcrete",{},smalltalk.SweSUG2012Presentation.klass)})},
messageSends: []}),
smalltalk.SweSUG2012Presentation.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Amber rocks!";
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.SweSUG2012Presentation.klass)})},
messageSends: []}),
smalltalk.SweSUG2012Presentation.klass);


smalltalk.addClass('PresentationNavigator', smalltalk.Widget, ['presentationBrush', 'currentPresentation', 'slideSelect'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "checkHash",
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
messageSends: ["tokenize:", "replace:with:", "hash", "location", "detect:ifNone:", "==", "first", "name", "concretePresentations", "ifFalse:", "selectPresentationNamed:", "selectSlideAt:", "last", "class", "currentPresentation"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "checkHashChange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._jQuery_(window))._bind_do_("hashchange",(function(){
return smalltalk.withContext(function($ctx2) {
return self._checkHash();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkHashChange",{},smalltalk.PresentationNavigator)})},
messageSends: ["bind:do:", "checkHash", "jQuery:"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPresentation",
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
messageSends: ["ifNil:", "new", "first", "concretePresentations"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPresentation:",
fn: function (aPresentation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentPresentation"]=aPresentation;
return self}, function($ctx1) {$ctx1.fill(self,"currentPresentation:",{aPresentation:aPresentation},smalltalk.PresentationNavigator)})},
messageSends: []}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "nextSlide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentPresentation())._nextSlide();
self._updateHash();
return self}, function($ctx1) {$ctx1.fill(self,"nextSlide",{},smalltalk.PresentationNavigator)})},
messageSends: ["nextSlide", "currentPresentation", "updateHash"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
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
messageSends: ["ready:", "appendToJQuery:", "asJQuery", "setKeybindings", "checkHashChange", "jQuery:"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "previousSlide",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentPresentation())._previousSlide();
self._updateHash();
return self}, function($ctx1) {$ctx1.fill(self,"previousSlide",{},smalltalk.PresentationNavigator)})},
messageSends: ["previousSlide", "currentPresentation", "updateHash"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "reload",
fn: function (){
var self=this;
var slideIndex;
return smalltalk.withContext(function($ctx1) { 
slideIndex=_st(self._currentPresentation())._currentSlideIndex();
self._currentPresentation_(_st(_st(self._currentPresentation())._class())._new());
self._renderCurrentPresentation();
self._selectSlideAt_(slideIndex);
return self}, function($ctx1) {$ctx1.fill(self,"reload",{slideIndex:slideIndex},smalltalk.PresentationNavigator)})},
messageSends: ["currentSlideIndex", "currentPresentation", "currentPresentation:", "new", "class", "renderCurrentPresentation", "selectSlideAt:"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCurrentPresentation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@presentationBrush"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(self._currentPresentation())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
self._updateSlideSelect();
return self}, function($ctx1) {$ctx1.fill(self,"renderCurrentPresentation",{},smalltalk.PresentationNavigator)})},
messageSends: ["contents:", "renderOn:", "currentPresentation", "updateSlideSelect"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["type:", "style", "with:", "id:", "div", "renderToolsOn:", "renderPresentationSelectOn:", "renderSlideSelectOn:", "yourself", "checkHash", "renderCurrentPresentation"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderPresentationSelectOn:",
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
messageSends: ["select", "onChange:", "selectPresentationNamed:", "val", "asJQuery", "with:", "concretePresentationsDo:", "value:", "name", "option", "title"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideSelectOn:",
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
messageSends: ["select", "onChange:", "selectSlideAt:", "val", "asJQuery", "updateSlideSelect"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "renderToolsOn:",
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
messageSends: ["with:", "a", "onClick:", "open", "current", "reload", "previousSlide", "nextSlide"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "selectPresentation:",
fn: function (aPresentationClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._currentPresentation_(_st(aPresentationClass)._new());
self._renderCurrentPresentation();
return self}, function($ctx1) {$ctx1.fill(self,"selectPresentation:",{aPresentationClass:aPresentationClass},smalltalk.PresentationNavigator)})},
messageSends: ["currentPresentation:", "new", "renderCurrentPresentation"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "selectPresentationNamed:",
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
messageSends: ["at:", "current", "ifNotNil:", "selectPresentation:"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "selectSlideAt:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._currentPresentation())._moveAt_(anInteger);
self._updateHash();
return self}, function($ctx1) {$ctx1.fill(self,"selectSlideAt:",{anInteger:anInteger},smalltalk.PresentationNavigator)})},
messageSends: ["moveAt:", "currentPresentation", "updateHash"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "setKeybindings",
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
messageSends: ["keyup:", "asLowercase", "nodeName", "target", "ifFalse:", "ifTrue:", "nextSlide", "=", "keyCode", "previousSlide", "or:", "jQuery:"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "\x0a#navigator {\x0a    z-index: 1;\x0a    position: fixed;\x0a    top: 0;\x0a    left: 50%;\x0a    margin-left: -150px;\x0a    padding: 5px;\x0a    border-radius: 5px;\x0a    -moz-border-radius: 5px;\x0a    -webkit-border-radius: 5px;\x0a    background: #333;\x0a    opacity: 0.3;\x0a    color: #eee;\x0a}\x0a\x0a#navigator a {\x0a    font-weight: bold;\x0a    color: #eee;\x0a    text-decoration: none;\x0a    cursor: pointer;\x0a    padding: 0 2px;\x0a    font-size: 14px;\x0a}\x0a\x0a#navigator:hover {\x0a    opacity: 0.8;\x0a}\x0a";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.PresentationNavigator)})},
messageSends: []}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "updateHash",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(document)._location())._hash_(_st(_st(_st(_st(self._currentPresentation())._class())._name()).__comma("-")).__comma(_st(self._currentPresentation())._currentSlideIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"updateHash",{},smalltalk.PresentationNavigator)})},
messageSends: ["hash:", ",", "currentSlideIndex", "currentPresentation", "name", "class", "location"]}),
smalltalk.PresentationNavigator);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSlideSelect",
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
messageSends: ["contents:", "slidesDo:", "+", "value:", "option", "with:", "title", "currentPresentation"]}),
smalltalk.PresentationNavigator);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.PresentationNavigator.klass)})},
messageSends: ["open"]}),
smalltalk.PresentationNavigator.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.PresentationNavigator.klass)})},
messageSends: ["open", "new"]}),
smalltalk.PresentationNavigator.klass);


smalltalk.addClass('Slide', smalltalk.Widget, ['presentation'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#555";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.Slide)})},
messageSends: []}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.Slide)})},
messageSends: []}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.Slide)})},
messageSends: ["name", "class"]}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "presentation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@presentation"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"presentation",{},smalltalk.Slide)})},
messageSends: []}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "presentation:",
fn: function (aPresentation){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@presentation"]=aPresentation;
return self}, function($ctx1) {$ctx1.fill(self,"presentation:",{aPresentation:aPresentation},smalltalk.Slide)})},
messageSends: []}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMetaOn:",
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
messageSends: ["id:", "div", "with:", "class:", "p", "title", "presentation", "description", "a", "author", "href:", ",", "email", "url"]}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["class:", "cssClass", "div", "id:", "id", "with:", "renderSlideOn:", "renderMetaOn:"]}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.Slide)})},
messageSends: []}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
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
messageSends: ["ifNotNil:", "css:color:", "backgroundColor", "jQuery:", "hide:options:duration:", "slideTransition", "presentation", "show:options:duration:", ",", "id"]}),
smalltalk.Slide);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._id();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.Slide)})},
messageSends: ["id"]}),
smalltalk.Slide);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["presentation:", "new", "yourself"]}),
smalltalk.Slide.klass);


smalltalk.addClass('AboutSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "white";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.AboutSlide)})},
messageSends: []}),
smalltalk.AboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide transparent white";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.AboutSlide)})},
messageSends: []}),
smalltalk.AboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "about";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.AboutSlide)})},
messageSends: []}),
smalltalk.AboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "h1", "p", "code", "button", "onClick:", "openOn:"]}),
smalltalk.AboutSlide);



smalltalk.addClass('ContributionsSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "links";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.ContributionsSlide)})},
messageSends: []}),
smalltalk.ContributionsSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "href:", "a", "p"]}),
smalltalk.ContributionsSlide);



smalltalk.addClass('CountersSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#18bd7d";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.CountersSlide)})},
messageSends: []}),
smalltalk.CountersSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "counters";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.CountersSlide)})},
messageSends: []}),
smalltalk.CountersSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "h1", "timesRepeat:", "renderOn:", "new"]}),
smalltalk.CountersSlide);



smalltalk.addClass('FOSDEMSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.FOSDEMSlide)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.FOSDEMSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCodeSnippetOn:",
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
messageSends: ["setValue:", "codeSnippet", "renderOn:", "new", "editor"]}),
smalltalk.FOSDEMSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSnippet:on:",
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
messageSends: ["setValue:", "renderOn:", "new", "editor"]}),
smalltalk.FOSDEMSlide);



smalltalk.addClass('FOSDEMAmberBackend', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide green3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.FOSDEMAmberBackend)})},
messageSends: []}),
smalltalk.FOSDEMAmberBackend);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "h1:", "do:", "img:", ","]}),
smalltalk.FOSDEMAmberBackend);



smalltalk.addClass('FOSDEMAmberZeroNine', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "h1:", "div:", "cite"]}),
smalltalk.FOSDEMAmberZeroNine);



smalltalk.addClass('FOSDEMBookletSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "bookletOptions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=smalltalk.HashedCollection._from_(["arrows".__minus_gt(true),"keyboard".__minus_gt(false),"pageNumbers".__minus_gt(false),"closed".__minus_gt(true)]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bookletOptions",{},smalltalk.FOSDEMBookletSlide)})},
messageSends: ["->"]}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide blue3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.FOSDEMBookletSlide)})},
messageSends: []}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBookOn:",
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
messageSends: ["id:", "div", "with:", "class:", "div:", "onClick:", "openOn:", "button"]}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["renderBookOn:", "rel:", "link", "href:", "style:", "style", "getScript:do:", "booklet:", "bookletOptions", "asJQuery"]}),
smalltalk.FOSDEMBookletSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "style",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "\x0a#book { font-size: 1.4em; }\x0a#book .b-load .b-wrap-right { background-color: #DEC3A9;}\x0a#book .b-load .b-wrap-left { background-color: #DDD;} \x0a";
}, function($ctx1) {$ctx1.fill(self,"style",{},smalltalk.FOSDEMBookletSlide)})},
messageSends: []}),
smalltalk.FOSDEMBookletSlide);



smalltalk.addClass('FOSDEMCLISlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "cd examples/nodejs/hello\x0a../../../bin/amberc -m Hello Hello.st Program\x0anode Program.js\x0a\x0aHello world from Amber in Node.js";
}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.FOSDEMCLISlide)})},
messageSends: []}),
smalltalk.FOSDEMCLISlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h1_("CLI");
_st(html)._with_("amberc compiles .st files into node programs !");
self._renderCodeSnippetOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMCLISlide)})},
messageSends: ["h1:", "with:", "renderCodeSnippetOn:"]}),
smalltalk.FOSDEMCLISlide);



smalltalk.addClass('FOSDEMCanvasSlide', smalltalk.FOSDEMSlide, ['c2d', 'canvas'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide red3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.FOSDEMCanvasSlide)})},
messageSends: []}),
smalltalk.FOSDEMCanvasSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOnCanvas",
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
messageSends: ["getContext:", "element", "clearRect:y:width:height:", "width", "height", "timesRepeat:", "join:", "atRandom", "/", "at:put:", ",", "fillRect:y:width:height:"]}),
smalltalk.FOSDEMCanvasSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["h1:", "width:", "canvas", "height:", "updateCanvas"]}),
smalltalk.FOSDEMCanvasSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "updateCanvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._drawOnCanvas();
_st(window)._setTimeout_delay_((function(){
return smalltalk.withContext(function($ctx2) {
return self._updateCanvas();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(500));
return self}, function($ctx1) {$ctx1.fill(self,"updateCanvas",{},smalltalk.FOSDEMCanvasSlide)})},
messageSends: ["drawOnCanvas", "setTimeout:delay:", "updateCanvas"]}),
smalltalk.FOSDEMCanvasSlide);



smalltalk.addClass('FOSDEMContributionsSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "href:", "a", "p"]}),
smalltalk.FOSDEMContributionsSlide);



smalltalk.addClass('FOSDEMIntroSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "src:", "img", "p:", "author", "presentation", "description", "email"]}),
smalltalk.FOSDEMIntroSlide);



smalltalk.addClass('FOSDEMJSPlayGroundSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "|logo|\x0alogo:='img#amberlogo' asJQuery.\x0a\x0alogo\x0a  css:'-webkit-transition' put:'all 10s ease-in-out'.\x0a\x0a<logo.css('-webkit-transform', 'rotateY(360deg)');>.\x0a\x0alogo click: [window alert: 'This is cool !'].\x0a\x0alogo inspect";
}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.FOSDEMJSPlayGroundSlide)})},
messageSends: []}),
smalltalk.FOSDEMJSPlayGroundSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "renderCodeSnippetOn:", "id:", "img", "src:"]}),
smalltalk.FOSDEMJSPlayGroundSlide);



smalltalk.addClass('FOSDEMJSToSmalltalk', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "var counter = window.smalltalk.Counter._new();\x0acounter._appendToJQuery_($('#jsToSmalltalk'));";
}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.FOSDEMJSToSmalltalk)})},
messageSends: []}),
smalltalk.FOSDEMJSToSmalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide blue3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.FOSDEMJSToSmalltalk)})},
messageSends: []}),
smalltalk.FOSDEMJSToSmalltalk);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["h1:", "id:", "div", "style:", "renderCodeSnippetOn:"]}),
smalltalk.FOSDEMJSToSmalltalk);



smalltalk.addClass('FOSDEMREPLSlide', smalltalk.FOSDEMSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "./bin/amber\x0afs := require value: 'fs'.\x0afs readdir: '/tmp' do: [:err :file| console log: file]";
}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.FOSDEMREPLSlide)})},
messageSends: []}),
smalltalk.FOSDEMREPLSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h1_("REPL");
self._renderCodeSnippetOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.FOSDEMREPLSlide)})},
messageSends: ["h1:", "renderCodeSnippetOn:"]}),
smalltalk.FOSDEMREPLSlide);



smalltalk.addClass('FOSDEMTwitter', smalltalk.FOSDEMSlide, ['twitterDiv'], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide black";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.FOSDEMTwitter)})},
messageSends: []}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "loadTweets",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_("http://search.twitter.com/search.json?rpp=3&q=%40AmberSmalltalk",smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(json){
return smalltalk.withContext(function($ctx2) {
return self._renderTweets_(_st(json)._results());
}, function($ctx2) {$ctx2.fillBlock({json:json},$ctx1)})})),"dataType".__minus_gt("jsonp")]));
return self}, function($ctx1) {$ctx1.fill(self,"loadTweets",{},smalltalk.FOSDEMTwitter)})},
messageSends: ["ajax:options:", "->", "renderTweets:", "results"]}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["onClick:", "loadTweets", "button", "with:", "div"]}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTweet:on:",
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
messageSends: ["class:", "div", "with:", "span:", "at:", "img:", "div:"]}),
smalltalk.FOSDEMTwitter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTweets:",
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
messageSends: ["contents:", "do:", "renderTweet:on:"]}),
smalltalk.FOSDEMTwitter);



smalltalk.addClass('IDESlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "black";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.IDESlide)})},
messageSends: []}),
smalltalk.IDESlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide transparent";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.IDESlide)})},
messageSends: []}),
smalltalk.IDESlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ide";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.IDESlide)})},
messageSends: []}),
smalltalk.IDESlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderSlideOn:",{html:html},smalltalk.IDESlide)})},
messageSends: []}),
smalltalk.IDESlide);



smalltalk.addClass('IntroSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide black";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.IntroSlide)})},
messageSends: []}),
smalltalk.IntroSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "intro";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.IntroSlide)})},
messageSends: []}),
smalltalk.IntroSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "h1", ",", "description", "presentation", "author", "p", "email", "a", "href:"]}),
smalltalk.IntroSlide);



smalltalk.addClass('JtalkAndCLI', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndCLI)})},
messageSends: []}),
smalltalk.JtalkAndCLI);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndCLI";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndCLI)})},
messageSends: []}),
smalltalk.JtalkAndCLI);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "class:", "span", "h1", "h2", "li", "ul"]}),
smalltalk.JtalkAndCLI);



smalltalk.addClass('JtalkAndEnyo', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndEnyo)})},
messageSends: []}),
smalltalk.JtalkAndEnyo);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndEnyo";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndEnyo)})},
messageSends: []}),
smalltalk.JtalkAndEnyo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "class:", "span", "h1"]}),
smalltalk.JtalkAndEnyo);



smalltalk.addClass('JtalkAndJavascriptSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#08C";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndJavascriptSlide)})},
messageSends: []}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide transparent";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.JtalkAndJavascriptSlide)})},
messageSends: []}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "jtalkAndJs";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndJavascriptSlide)})},
messageSends: []}),
smalltalk.JtalkAndJavascriptSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "span", "h1"]}),
smalltalk.JtalkAndJavascriptSlide);



smalltalk.addClass('JtalkAndJavascriptSlide2', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#08C";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndJavascriptSlide2)})},
messageSends: []}),
smalltalk.JtalkAndJavascriptSlide2);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "jtalkAndJs2";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndJavascriptSlide2)})},
messageSends: []}),
smalltalk.JtalkAndJavascriptSlide2);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "class:", "span", "h1", "h2", "li", "ul"]}),
smalltalk.JtalkAndJavascriptSlide2);



smalltalk.addClass('JtalkAndJavascriptSlide3', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#08C";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndJavascriptSlide3)})},
messageSends: []}),
smalltalk.JtalkAndJavascriptSlide3);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "jtalkAndJs3";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndJavascriptSlide3)})},
messageSends: []}),
smalltalk.JtalkAndJavascriptSlide3);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "class:", "span", "h1", "h2", "li", "code", "ol"]}),
smalltalk.JtalkAndJavascriptSlide3);



smalltalk.addClass('JtalkAndJavascriptSlide4', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#08C";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndJavascriptSlide4)})},
messageSends: []}),
smalltalk.JtalkAndJavascriptSlide4);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "jtalkAndJs4";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndJavascriptSlide4)})},
messageSends: []}),
smalltalk.JtalkAndJavascriptSlide4);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "class:", "span", "h1", "h2", "code", "li", "br", "ol"]}),
smalltalk.JtalkAndJavascriptSlide4);



smalltalk.addClass('JtalkAndNode', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndNode)})},
messageSends: []}),
smalltalk.JtalkAndNode);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndNode";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndNode)})},
messageSends: []}),
smalltalk.JtalkAndNode);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "class:", "span", "h1", "h2", "div", "pre"]}),
smalltalk.JtalkAndNode);



smalltalk.addClass('JtalkAndNode2', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndNode2)})},
messageSends: []}),
smalltalk.JtalkAndNode2);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndNode2";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndNode2)})},
messageSends: []}),
smalltalk.JtalkAndNode2);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "class:", "span", "h1", "h2", "div", "pre"]}),
smalltalk.JtalkAndNode2);



smalltalk.addClass('JtalkAndNode3', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndNode3)})},
messageSends: []}),
smalltalk.JtalkAndNode3);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndNode3";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndNode3)})},
messageSends: []}),
smalltalk.JtalkAndNode3);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "class:", "span", "h1", "h2", "div", "pre"]}),
smalltalk.JtalkAndNode3);



smalltalk.addClass('JtalkAndWebOS', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#0A1";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.JtalkAndWebOS)})},
messageSends: []}),
smalltalk.JtalkAndWebOS);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "JtalkAndWebOS";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkAndWebOS)})},
messageSends: []}),
smalltalk.JtalkAndWebOS);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "class:", "span", "h1", "h2", "li", "ul"]}),
smalltalk.JtalkAndWebOS);



smalltalk.addClass('JtalkFeaturesSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "features";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.JtalkFeaturesSlide)})},
messageSends: []}),
smalltalk.JtalkFeaturesSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "h1", "li", "code", "ul"]}),
smalltalk.JtalkFeaturesSlide);



smalltalk.addClass('SweSUGSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#555";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.SweSUGSlide)})},
messageSends: []}),
smalltalk.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "codeSnippet",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"codeSnippet",{},smalltalk.SweSUGSlide)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide blue3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.SweSUGSlide)})},
messageSends: []}),
smalltalk.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCodeSnippetOn:",
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
messageSends: ["setValue:", "codeSnippet", "renderOn:", "new", "editor"]}),
smalltalk.SweSUGSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSnippet:on:",
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
messageSends: ["setValue:", "renderOn:", "new", "editor"]}),
smalltalk.SweSUGSlide);



smalltalk.addClass('SweSUGAboutSlide', smalltalk.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#555";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.SweSUGAboutSlide)})},
messageSends: []}),
smalltalk.SweSUGAboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "slide blue3d";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.SweSUGAboutSlide)})},
messageSends: []}),
smalltalk.SweSUGAboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "About";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.SweSUGAboutSlide)})},
messageSends: []}),
smalltalk.SweSUGAboutSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "h1", "p", "code", "button", "onClick:", "openOn:"]}),
smalltalk.SweSUGAboutSlide);



smalltalk.addClass('SweSUGAmberFeaturesSlide', smalltalk.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "features";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.SweSUGAmberFeaturesSlide)})},
messageSends: []}),
smalltalk.SweSUGAmberFeaturesSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["with:", "h1", "li", "code", "ul"]}),
smalltalk.SweSUGAmberFeaturesSlide);



smalltalk.addClass('SweSUGIntroSlide', smalltalk.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Intro";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.SweSUGIntroSlide)})},
messageSends: []}),
smalltalk.SweSUGIntroSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "src:", "img", "p:", "author", "presentation", "description", "email"]}),
smalltalk.SweSUGIntroSlide);



smalltalk.addClass('SweSUGWhatIsAmberSlide', smalltalk.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "WhatIsAmber";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.SweSUGWhatIsAmberSlide)})},
messageSends: []}),
smalltalk.SweSUGWhatIsAmberSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "img:", "h1", "h2"]}),
smalltalk.SweSUGWhatIsAmberSlide);



smalltalk.addClass('SweSUGWorkspaceSlide', smalltalk.SweSUGSlide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#18bd7d";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.SweSUGWorkspaceSlide)})},
messageSends: []}),
smalltalk.SweSUGWorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "workspace";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.SweSUGWorkspaceSlide)})},
messageSends: []}),
smalltalk.SweSUGWorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["new", "class:", "div", "with:", "h1", "renderOn:", "button", "onClick:", "doIt", "printIt", "inspectIt"]}),
smalltalk.SweSUGWorkspaceSlide);



smalltalk.addClass('WhatIsJtalkSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "WhatIsJtalk";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.WhatIsJtalkSlide)})},
messageSends: []}),
smalltalk.WhatIsJtalkSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["class:", "div", "with:", "h1", "h2"]}),
smalltalk.WhatIsJtalkSlide);



smalltalk.addClass('WorkspaceSlide', smalltalk.Slide, [], 'Presentation');
smalltalk.addMethod(
smalltalk.method({
selector: "backgroundColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#18bd7d";
}, function($ctx1) {$ctx1.fill(self,"backgroundColor",{},smalltalk.WorkspaceSlide)})},
messageSends: []}),
smalltalk.WorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "workspace";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.WorkspaceSlide)})},
messageSends: []}),
smalltalk.WorkspaceSlide);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSlideOn:",
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
messageSends: ["new", "class:", "div", "with:", "h1", "renderOn:", "button", "onClick:", "doIt", "printIt", "inspectIt"]}),
smalltalk.WorkspaceSlide);



})(global_smalltalk,global_nil,global__st);
