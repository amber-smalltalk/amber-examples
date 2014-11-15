define("amber-trysmalltalk/TrySmalltalk", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('TrySmalltalk');
$core.packages["TrySmalltalk"].transport = {"type":"amd","amdNamespace":"amber-trysmalltalk"};

$core.addClass('AbstractTutorial', $globals.Object, [], 'TrySmalltalk');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AbstractTutorial.comment="Parent class of all ProfStef tutorials.\x0a\x0aTo create your own tutorial:\x0a- subclass AbstractTutorial\x0a- implement a few methods which returns a Lesson instance\x0a- implement tutorial which returns a Collection of selectors to the methods you've created.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "indexOfLesson:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._tableOfContents())._indexOf_(aSelector);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOfLesson:",{aSelector:aSelector},$globals.AbstractTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "indexOfLesson: aSelector\x0a\x09^self tableOfContents indexOf: aSelector.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:", "tableOfContents"]
}),
$globals.AbstractTutorial);

$core.addMethod(
$core.method({
selector: "lessonAt:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
var lessonSelector;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
lessonSelector=$recv(self._tableOfContents())._at_(anInteger);
$1=self._perform_(lessonSelector);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lessonAt:",{anInteger:anInteger,lessonSelector:lessonSelector},$globals.AbstractTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "lessonAt: anInteger\x0a\x09| lessonSelector |\x0a\x09lessonSelector := self tableOfContents at: anInteger.\x0a\x09^ self perform: lessonSelector.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "tableOfContents", "perform:"]
}),
$globals.AbstractTutorial);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._tableOfContents())._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.AbstractTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ self tableOfContents size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "tableOfContents"]
}),
$globals.AbstractTutorial);

$core.addMethod(
$core.method({
selector: "tableOfContents",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["welcome", "testLesson", "theEnd"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tableOfContents\x0a^ #(\x0a  'welcome'\x0a  'testLesson'\x0a  'theEnd'\x0a)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AbstractTutorial);

$core.addMethod(
$core.method({
selector: "testLesson",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Test Lesson","\x22This lesson is a test\x22");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLesson",{},$globals.AbstractTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLesson\x0a\x09^ Lesson\x0a\x09\x09title: 'Test Lesson' \x0a\x09\x09contents: '\x22This lesson is a test\x22'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.AbstractTutorial);

$core.addMethod(
$core.method({
selector: "theEnd",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("The End","\x22And that'd be pretty much it :)\x22");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theEnd",{},$globals.AbstractTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theEnd\x0a\x09^ Lesson\x0a\x09\x09title: 'The End' \x0a\x09\x09contents: '\x22And that''d be pretty much it :)\x22'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.AbstractTutorial);

$core.addMethod(
$core.method({
selector: "welcome",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Welcome","\x22Hi, this is a test tutorial.\x22");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"welcome",{},$globals.AbstractTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "welcome\x0a\x09^ Lesson\x0a\x09\x09title: 'Welcome' \x0a\x09\x09contents: '\x22Hi, this is a test tutorial.\x22'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.AbstractTutorial);



$core.addClass('SmalltalkSyntaxTutorial', $globals.AbstractTutorial, [], 'TrySmalltalk');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SmalltalkSyntaxTutorial.comment="The default ProfStef tutorial to learn Smalltalk syntax";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "basicTypesArray",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Basic types: Array","\x22Literal arrays are created at parse time:\x22\x0a\x0a#(1 2 3).\x0a\x0a#( 1 2 3 #(4 5 6)) size.\x0a\x0a#(1 2 4) isEmpty.\x0a\x0a#(1 2 3) first.\x0a\x0a#('hello' 'Javascript') at: 2 put: 'Smalltalk'; yourself.\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicTypesArray",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicTypesArray\x0a\x09^ Lesson\x0atitle: 'Basic types: Array' \x0acontents: \x0a'\x22Literal arrays are created at parse time:\x22\x0a\x0a#(1 2 3).\x0a\x0a#( 1 2 3 #(4 5 6)) size.\x0a\x0a#(1 2 4) isEmpty.\x0a\x0a#(1 2 3) first.\x0a\x0a#(''hello'' ''Javascript'') at: 2 put: ''Smalltalk''; yourself.\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "basicTypesCharacters",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Basic types: Characters","\x22A Character can be instantiated using $ operator:\x22\x0a\x0a$A.\x0a\x0a$A class.\x0a\x0a$B charCode.\x0a\x0aCharacter cr.\x0a\x0aCharacter space.\x0a\x0a\x22You can print all 256 characters of the ASCII extended set:\x22\x0a\x0aCharacter allByteCharacters.\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicTypesCharacters",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicTypesCharacters\x0a\x09^ Lesson\x0atitle: 'Basic types: Characters' \x0acontents: \x0a'\x22A Character can be instantiated using $ operator:\x22\x0a\x0a$A.\x0a\x0a$A class.\x0a\x0a$B charCode.\x0a\x0aCharacter cr.\x0a\x0aCharacter space.\x0a\x0a\x22You can print all 256 characters of the ASCII extended set:\x22\x0a\x0aCharacter allByteCharacters.\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "basicTypesDynamicArray",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Basic types: Dynamic Array","\x22Dynamic Arrays are created at execution time:\x22\x0a\x0a{ (2+3) . (6*6) }.\x0a\x0a{ (2+3) . (6*6) . 'hello', ' Stef'} size.\x0a\x0a\x0a{ ProfStef } first next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicTypesDynamicArray",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicTypesDynamicArray\x0a\x09^ Lesson\x0atitle: 'Basic types: Dynamic Array' \x0acontents: \x0a'\x22Dynamic Arrays are created at execution time:\x22\x0a\x0a{ (2+3) . (6*6) }.\x0a\x0a{ (2+3) . (6*6) . ''hello'', '' Stef''} size.\x0a\x0a\x0a{ ProfStef } first next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "basicTypesNumbers",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Basic types: Numbers","\x22You now know how to execute Smalltalk code. \x0a\x0aNow let's talk about basic objects.\x0a\x0a1, 2, 100, 2/3 ... are Numbers, and respond to many messages evaluating mathematical expressions.\x0aEvaluate these ones:\x22\x0a\x0a2.\x0a\x0a(1/3).\x0a\x0a(1/3) + (4/5).\x0a\x0a(18/5) rounded.\x0a\x0a1 class.\x0a\x0a1 negated.\x0a\x0a1 negated negated.\x0a\x0a(1 + 3) odd.\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicTypesNumbers",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicTypesNumbers\x0a\x09^ Lesson\x0atitle: 'Basic types: Numbers' \x0acontents: \x0a'\x22You now know how to execute Smalltalk code. \x0a\x0aNow let''s talk about basic objects.\x0a\x0a1, 2, 100, 2/3 ... are Numbers, and respond to many messages evaluating mathematical expressions.\x0aEvaluate these ones:\x22\x0a\x0a2.\x0a\x0a(1/3).\x0a\x0a(1/3) + (4/5).\x0a\x0a(18/5) rounded.\x0a\x0a1 class.\x0a\x0a1 negated.\x0a\x0a1 negated negated.\x0a\x0a(1 + 3) odd.\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "basicTypesString",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Basic types: Strings","\x22A String is a collection of characters. Use single quotes to create a String object. Print these expressions:\x22\x0a\x0a'ProfStef'.\x0a\x0a'ProfStef' size.\x0a\x0a'abc' asUppercase.\x0a\x0a'Hello World' reversed. \x0a\x0a\x22You can access each character using at: message\x22\x0a\x0a'ProfStef' at: 1.\x0a\x0a\x22String concatenation uses the comma operator:\x22\x0a\x0a'ProfStef', ' is cool'.\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicTypesString",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicTypesString\x0a\x09^ Lesson\x0atitle: 'Basic types: Strings' \x0acontents: \x0a'\x22A String is a collection of characters. Use single quotes to create a String object. Print these expressions:\x22\x0a\x0a''ProfStef''.\x0a\x0a''ProfStef'' size.\x0a\x0a''abc'' asUppercase.\x0a\x0a''Hello World'' reversed. \x0a\x0a\x22You can access each character using at: message\x22\x0a\x0a''ProfStef'' at: 1.\x0a\x0a\x22String concatenation uses the comma operator:\x22\x0a\x0a''ProfStef'', '' is cool''.\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "basicTypesSymbol",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Basic types: Symbols","\x22A Symbol is a String which is guaranteed to be globally unique. \x0a\x0aThere is one and only one Symbol #ProfStef. There may be several 'ProfStef' String objects.\x0a\x0a(Message == returns true if the two objects are the SAME)\x22\x0a\x0a'ProfStef' asSymbol.\x0a\x0a#ProfStef asString.\x0a\x0a(2 asString) == (2 asString).\x0a\x0a(2 asString) asSymbol == (2 asString) asSymbol.\x0a\x0a\x0a(Smalltalk at: #ProfStef) next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicTypesSymbol",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicTypesSymbol\x0a\x09^ Lesson\x0atitle: 'Basic types: Symbols' \x0acontents: \x0a'\x22A Symbol is a String which is guaranteed to be globally unique. \x0a\x0aThere is one and only one Symbol #ProfStef. There may be several ''ProfStef'' String objects.\x0a\x0a(Message == returns true if the two objects are the SAME)\x22\x0a\x0a''ProfStef'' asSymbol.\x0a\x0a#ProfStef asString.\x0a\x0a(2 asString) == (2 asString).\x0a\x0a(2 asString) asSymbol == (2 asString) asSymbol.\x0a\x0a\x0a(Smalltalk at: #ProfStef) next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "blocks",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Blocks","\x22Cascade is cool ! Let's talk about blocks.\x0a\x0aBlocks are anonymous methods that can be stored into variables and executed on demand.\x0a\x0aBlocks are delimited by square brackets: []\x22\x0a\x0a[Transcript open].\x0a\x0a\x22does not open a Transcript because the block is not executed.\x0a\x0aHere is a block that adds 2 to its argument (its argument is named x):\x22\x0a\x0a[:x | x+2].\x0a\x0a\x22We can execute a block by sending it value messages.\x22\x0a\x0a[:x | x+2] value: 5.\x0a\x0a[Transcript open] value.\x0a\x0a[:x | x+2] value: 10.\x0a\x0a[:x :y| x + y] value:3 value:5.\x0a\x0a[ProfStef next] value.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blocks",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blocks\x0a\x09^ Lesson\x0atitle: 'Blocks' \x0acontents: \x0a'\x22Cascade is cool ! Let''s talk about blocks.\x0a\x0aBlocks are anonymous methods that can be stored into variables and executed on demand.\x0a\x0aBlocks are delimited by square brackets: []\x22\x0a\x0a[Transcript open].\x0a\x0a\x22does not open a Transcript because the block is not executed.\x0a\x0aHere is a block that adds 2 to its argument (its argument is named x):\x22\x0a\x0a[:x | x+2].\x0a\x0a\x22We can execute a block by sending it value messages.\x22\x0a\x0a[:x | x+2] value: 5.\x0a\x0a[Transcript open] value.\x0a\x0a[:x | x+2] value: 10.\x0a\x0a[:x :y| x + y] value:3 value:5.\x0a\x0a[ProfStef next] value.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "blocksAssignation",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Block assignation","\x22Blocks can be assigned to a variable then executed later.\x0a\x0aNote that |b| is the declaration of a variable named 'b' and that ':=' assigns a value to a variable.\x0a\x0aSelect the three lines then Print It:\x22\x0a\x0a|b|\x0ab := [:x | x+2].\x0ab value: 12.\x0a\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blocksAssignation",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blocksAssignation\x0a\x09^ Lesson\x0atitle: 'Block assignation' \x0acontents: \x0a'\x22Blocks can be assigned to a variable then executed later.\x0a\x0aNote that |b| is the declaration of a variable named ''b'' and that '':='' assigns a value to a variable.\x0a\x0aSelect the three lines then Print It:\x22\x0a\x0a|b|\x0ab := [:x | x+2].\x0ab value: 12.\x0a\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "conditionals",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Conditionals","\x22Conditionals are just messages sent to Boolean objects\x22\x0a\x0a1 < 2\x0a  ifTrue: [100]\x0a  ifFalse: [42].\x0a\x0a\x22Here the message is ifTrue:ifFalse\x0a\x0aTry this:\x22\x0a\x0aTranscript open.\x0a\x0a3 > 10 \x0a\x09ifTrue: [Transcript show: 'maybe there''s a bug ....']\x0a\x09ifFalse: [Transcript show: 'No : 3 is less than 10'].\x0a\x0a3 = 3 ifTrue: [ProfStef next].");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"conditionals",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "conditionals\x0a\x09^ Lesson\x0atitle: 'Conditionals' \x0acontents: \x0a'\x22Conditionals are just messages sent to Boolean objects\x22\x0a\x0a1 < 2\x0a  ifTrue: [100]\x0a  ifFalse: [42].\x0a\x0a\x22Here the message is ifTrue:ifFalse\x0a\x0aTry this:\x22\x0a\x0aTranscript open.\x0a\x0a3 > 10 \x0a\x09ifTrue: [Transcript show: ''maybe there''''s a bug ....'']\x0a\x09ifFalse: [Transcript show: ''No : 3 is less than 10''].\x0a\x0a3 = 3 ifTrue: [ProfStef next].'.",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "debugger",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Debugger","\x22The Debugger may be the most famous tool of Smalltalk environments. It will open as soon as an unmanaged Exception occurs. \x0a\x0aThe following code will open the debugger.\x0a\x0a***This should be rethought completely***\x22\x0a\x0a\x0a ");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"debugger",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "debugger\x0a\x09^ Lesson\x0atitle: 'Debugger' \x0acontents: '\x22The Debugger may be the most famous tool of Smalltalk environments. It will open as soon as an unmanaged Exception occurs. \x0a\x0aThe following code will open the debugger.\x0a\x0a***This should be rethought completely***\x22\x0a\x0a\x0a '",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "doingVSPrinting",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Doing VS Printing: Doing","\x22Cool ! (I like to say Cooool :) ).\x0aYou've just executed a Smalltalk expression.\x0aMore precisely, you sent the message 'next' to ProfStef class (it's me !).\x0a\x0aNote you can run this tutorial again by evaluating: 'ProfStef go'. \x0a'ProfStef previous' returns to the previous lesson.\x0a\x0aYou can also Do It using the keyboard shortcut 'CTRL d'\x0a\x0aTry to evaluate this expression:\x22\x0a\x0awindow alert: 'hello world!'.\x0a\x0a\x22Then go to the next lesson:\x22\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doingVSPrinting",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doingVSPrinting \x0a\x09^ Lesson\x0atitle: 'Doing VS Printing: Doing' \x0acontents: \x0a'\x22Cool ! (I like to say Cooool :) ).\x0aYou''ve just executed a Smalltalk expression.\x0aMore precisely, you sent the message ''next'' to ProfStef class (it''s me !).\x0a\x0aNote you can run this tutorial again by evaluating: ''ProfStef go''. \x0a''ProfStef previous'' returns to the previous lesson.\x0a\x0aYou can also Do It using the keyboard shortcut ''CTRL d''\x0a\x0aTry to evaluate this expression:\x22\x0a\x0awindow alert: ''hello world!''.\x0a\x0a\x22Then go to the next lesson:\x22\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "instanciation",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Instanciation","\x22Objects are instances of their class. Usually, we send the message #new to a class for creating an instance of this class.\x0a\x0aFor example, let's create an instance of the class Array:\x22\x0a\x0aArray new\x0a\x09add: 'Some text';\x0a\x09add: 3.;\x0a\x09yourself.\x0a\x0a\x22See the array we've created? Actually, #('Some text' 3) is just a shorthand for instantiating arrays.\x22\x0a\x0a\x22If we use a variable to keep track of this object, we'll be able to do stuff with it.\x22\x0a\x0a\x22The following code must be ran all at one, as the 'anArray' variable will cease to exist once the execution finishes:\x22\x0a\x0a|anArray|\x0a\x0aanArray := Array new\x0a\x09add: 'Some text';\x0a\x09add: 3;\x0a\x09yourself.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray remove: 3.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray add: 'Some more text!'.\x0a\x0aTranscript show: anArray; cr.\x0a\x09\x0a\x22I'll put myself in an instance of a class named Dictionary and go to the next lesson:\x22\x0a\x0a((Dictionary new add: ('move on!' -> ProfStef)) at: 'move on!') next");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"instanciation",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instanciation\x0a\x09^ Lesson\x0atitle: 'Instanciation' \x0acontents: \x0a'\x22Objects are instances of their class. Usually, we send the message #new to a class for creating an instance of this class.\x0a\x0aFor example, let''s create an instance of the class Array:\x22\x0a\x0aArray new\x0a\x09add: ''Some text'';\x0a\x09add: 3.;\x0a\x09yourself.\x0a\x0a\x22See the array we''ve created? Actually, #(''Some text'' 3) is just a shorthand for instantiating arrays.\x22\x0a\x0a\x22If we use a variable to keep track of this object, we''ll be able to do stuff with it.\x22\x0a\x0a\x22The following code must be ran all at one, as the ''anArray'' variable will cease to exist once the execution finishes:\x22\x0a\x0a|anArray|\x0a\x0aanArray := Array new\x0a\x09add: ''Some text'';\x0a\x09add: 3;\x0a\x09yourself.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray remove: 3.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray add: ''Some more text!''.\x0a\x0aTranscript show: anArray; cr.\x0a\x09\x0a\x22I''ll put myself in an instance of a class named Dictionary and go to the next lesson:\x22\x0a\x0a((Dictionary new add: (''move on!'' -> ProfStef)) at: ''move on!'') next'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "iterators",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Iterators","\x22The message do: is sent to a collection of objects (Array, Dictionary, String, etc), evaluating the block for each element.\x0a\x0aHere we want to print all the numbers on the Transcript (a console)\x22\x0a\x0a#(11 38 3 -2 10) do: [:each |\x0a     Transcript show: each printString; cr].\x0a\x0a\x22Some other really nice iterators\x22\x0a\x0a#(11 38 3 -2 10) collect: [:each | each negated].\x0a\x0a#(11 38 3 -2 10) collect: [:each | each odd].\x0a\x0a#(11 38 3 -2 10) select: [:each | each odd].\x0a\x0a#(11 38 3 -2 10) select: [:each | each > 10].\x0a\x0a#(11 38 3 -2 10) reject: [:each | each > 10].\x0a\x0a#(11 38 3 -2 10) \x0a     do: [:each | Transcript show: each printString]\x0a     separatedBy: [Transcript show: '.'].\x0a\x0a\x0a(Smalltalk current classes select: [:eachClass | eachClass name = 'ProfStef']) do: [:eachProfstef | eachProfstef next].");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iterators",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iterators\x0a\x09^ Lesson\x0atitle: 'Iterators' \x0acontents: \x0a'\x22The message do: is sent to a collection of objects (Array, Dictionary, String, etc), evaluating the block for each element.\x0a\x0aHere we want to print all the numbers on the Transcript (a console)\x22\x0a\x0a#(11 38 3 -2 10) do: [:each |\x0a     Transcript show: each printString; cr].\x0a\x0a\x22Some other really nice iterators\x22\x0a\x0a#(11 38 3 -2 10) collect: [:each | each negated].\x0a\x0a#(11 38 3 -2 10) collect: [:each | each odd].\x0a\x0a#(11 38 3 -2 10) select: [:each | each odd].\x0a\x0a#(11 38 3 -2 10) select: [:each | each > 10].\x0a\x0a#(11 38 3 -2 10) reject: [:each | each > 10].\x0a\x0a#(11 38 3 -2 10) \x0a     do: [:each | Transcript show: each printString]\x0a     separatedBy: [Transcript show: ''.''].\x0a\x0a\x0a(Smalltalk current classes select: [:eachClass | eachClass name = ''ProfStef'']) do: [:eachProfstef | eachProfstef next].'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "loops",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Loops","\x22Loops are high-level collection iterators, implemented as regular methods.\x22\x0a\x0a\x22Basic loops:\x0a  to:do:\x0a  to:by:do\x22\x0a\x0a1 to: 100 do:\x0a  [:i | Transcript show: i asString; cr ].\x0a\x0a1 to: 100 by: 3 do: [:i | Transcript show: i asString; cr].\x0a\x0a100 to: 0 by: -2 do: \x0a    [:i | Transcript show: i asString; cr].\x0a\x0a1 to: 1 do: [:i | ProfStef next].");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loops",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loops\x0a\x09^ Lesson\x0atitle: 'Loops' \x0acontents: \x0a'\x22Loops are high-level collection iterators, implemented as regular methods.\x22\x0a\x0a\x22Basic loops:\x0a  to:do:\x0a  to:by:do\x22\x0a\x0a1 to: 100 do:\x0a  [:i | Transcript show: i asString; cr ].\x0a\x0a1 to: 100 by: 3 do: [:i | Transcript show: i asString; cr].\x0a\x0a100 to: 0 by: -2 do: \x0a    [:i | Transcript show: i asString; cr].\x0a\x0a1 to: 1 do: [:i | ProfStef next].'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "mathematicalPrecedence",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Mathematical precedence","\x22Traditional precedence rules from mathematics do not follow in Smalltalk.\x22\x0a\x0a2 * 10 + 2.\x0a\x0a\x22Here the message * is sent to 2, which answers 20, then 20 receive the message +\x0a\x0aRemember that all messages always follow a simple left-to-right precedence rule, * without exceptions *.\x22\x0a\x0a2 + 2 * 10.\x0a\x0a2 + (2 * 10).\x0a\x0a8 - 5 / 2.\x0a\x0a(8 - 5) / 2.\x0a\x0a8 - (5 / 2).\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mathematicalPrecedence",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mathematicalPrecedence\x0a\x09^ Lesson\x0atitle: 'Mathematical precedence'\x0acontents: \x0a'\x22Traditional precedence rules from mathematics do not follow in Smalltalk.\x22\x0a\x0a2 * 10 + 2.\x0a\x0a\x22Here the message * is sent to 2, which answers 20, then 20 receive the message +\x0a\x0aRemember that all messages always follow a simple left-to-right precedence rule, * without exceptions *.\x22\x0a\x0a2 + 2 * 10.\x0a\x0a2 + (2 * 10).\x0a\x0a8 - 5 / 2.\x0a\x0a(8 - 5) / 2.\x0a\x0a8 - (5 / 2).\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "messageSyntaxBinary",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Message syntax: Binary messages","\x22Binary messages have the following form:\x0a    anObject + anotherObject\x22\x0a\x0a3 * 2.\x0a\x0aDate today year = 2011.\x0a\x0afalse | false.\x0a\x0atrue & true.\x0a\x0atrue & false.\x0a\x0a10 @ 100.\x0a\x0a10 <= 12.\x0a\x0a'ab', 'cd'.\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxBinary",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSyntaxBinary\x0a\x09^ Lesson\x0atitle: 'Message syntax: Binary messages' \x0acontents: \x0a'\x22Binary messages have the following form:\x0a    anObject + anotherObject\x22\x0a\x0a3 * 2.\x0a\x0aDate today year = 2011.\x0a\x0afalse | false.\x0a\x0atrue & true.\x0a\x0atrue & false.\x0a\x0a10 @ 100.\x0a\x0a10 <= 12.\x0a\x0a''ab'', ''cd''.\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "messageSyntaxCascade",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Message syntax: Cascade","\x22; is the cascade operator. It's useful to send message to the SAME receiver\x0aOpen a Transcript (console):\x22\x0a\x0aTranscript open.\x0a\x0a\x22Then:\x22\x0a\x0aTranscript show: 'hello'.\x0aTranscript show: 'Smalltalk'.\x0aTranscript cr.\x0a\x0a\x22is equivalent to:\x22\x0a\x0aTranscript \x0a\x09   show: 'hello';\x0a\x09   show: 'Smalltalk' ;\x0a\x09   cr.\x0a\x0a\x22You can close the development tools by clicking on the red circle with a cross at the bottom left of the website.\x0aTry to go to the next lesson with a cascade of two 'next' messages:\x22\x0a\x0aProfStef");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxCascade",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSyntaxCascade\x0a\x09^ Lesson\x0atitle: 'Message syntax: Cascade' \x0acontents: \x0a'\x22; is the cascade operator. It''s useful to send message to the SAME receiver\x0aOpen a Transcript (console):\x22\x0a\x0aTranscript open.\x0a\x0a\x22Then:\x22\x0a\x0aTranscript show: ''hello''.\x0aTranscript show: ''Smalltalk''.\x0aTranscript cr.\x0a\x0a\x22is equivalent to:\x22\x0a\x0aTranscript \x0a\x09   show: ''hello'';\x0a\x09   show: ''Smalltalk'' ;\x0a\x09   cr.\x0a\x0a\x22You can close the development tools by clicking on the red circle with a cross at the bottom left of the website.\x0aTry to go to the next lesson with a cascade of two ''next'' messages:\x22\x0a\x0aProfStef'.",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "messageSyntaxCascadeShouldNotBeHere",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Lost ?","\x22Hey, you should not be here !! \x0a\x0aGo back and use a cascade !\x22\x0a\x0aProfStef previous.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxCascadeShouldNotBeHere",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSyntaxCascadeShouldNotBeHere\x0a\x09^ Lesson\x0atitle: 'Lost ?' \x0acontents: \x0a'\x22Hey, you should not be here !! \x0a\x0aGo back and use a cascade !\x22\x0a\x0aProfStef previous.'.",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "messageSyntaxExecutionOrder",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Message syntax: Execution order","\x22Unary messages are executed first, then binary messages and finally keyword messages:\x0a    Unary > Binary > Keywords\x22\x0a\x0a2.5 + 3.8 rounded.\x0a\x0a3 max: 2 + 2.\x0a  \x0a(0@0) class.\x0a\x0a0@0 x: 100.\x0a\x0a(0@0 x: 100) class.\x0a\x0a\x22Between messages of similar precedence, expressions are executed from left to right\x22\x0a\x0a-12345 negated asString reversed.\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxExecutionOrder",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSyntaxExecutionOrder\x0a\x09^ Lesson\x0atitle: 'Message syntax: Execution order' \x0acontents: \x0a'\x22Unary messages are executed first, then binary messages and finally keyword messages:\x0a    Unary > Binary > Keywords\x22\x0a\x0a2.5 + 3.8 rounded.\x0a\x0a3 max: 2 + 2.\x0a  \x0a(0@0) class.\x0a\x0a0@0 x: 100.\x0a\x0a(0@0 x: 100) class.\x0a\x0a\x22Between messages of similar precedence, expressions are executed from left to right\x22\x0a\x0a-12345 negated asString reversed.\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "messageSyntaxExecutionOrderParentheses",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Message syntax: Parentheses","\x22Use parentheses to change order of evaluation\x22\x0a\x0a(2.5 + 3.8) rounded.\x0a\x0a(3 max: 2) + 2.\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxExecutionOrderParentheses",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSyntaxExecutionOrderParentheses\x0a\x09^ Lesson\x0atitle: 'Message syntax: Parentheses'\x0acontents: \x0a'\x22Use parentheses to change order of evaluation\x22\x0a\x0a(2.5 + 3.8) rounded.\x0a\x0a(3 max: 2) + 2.\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "messageSyntaxKeyword",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Message syntax: Keyword messages","\x22Keyword Messages are messages with arguments. They have the following form:\x0a    anObject akey: anotherObject akey2: anotherObject2\x22\x0a\x0a'Web development is a good deal of pain' copyFrom: 1 to: 30\x0a\x0a\x22The message is copyFrom:to: sent to the String 'Web development is a good deal of pain'\x22\x0a\x0a1 max: 3.\x0a\x0aArray with: 'hello' with: 2 with: Smalltalk.\x0a\x0a\x22The message is with:with:with: implemented on class Array. Note you can also write\x22\x0a\x0aArray\x0a\x09with: 'Hi there!'\x0a\x09with: 2\x0a\x09with: Smalltalk.\x0a\x09\x0aProfStef perform: 'next'.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxKeyword",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSyntaxKeyword\x0a\x09^ Lesson\x0atitle: 'Message syntax: Keyword messages' \x0acontents: \x0a'\x22Keyword Messages are messages with arguments. They have the following form:\x0a    anObject akey: anotherObject akey2: anotherObject2\x22\x0a\x0a''Web development is a good deal of pain'' copyFrom: 1 to: 30\x0a\x0a\x22The message is copyFrom:to: sent to the String ''Web development is a good deal of pain''\x22\x0a\x0a1 max: 3.\x0a\x0aArray with: ''hello'' with: 2 with: Smalltalk.\x0a\x0a\x22The message is with:with:with: implemented on class Array. Note you can also write\x22\x0a\x0aArray\x0a\x09with: ''Hi there!''\x0a\x09with: 2\x0a\x09with: Smalltalk.\x0a\x09\x0aProfStef perform: ''next''.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "messageSyntaxUnary",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Message syntax: Unary messages","\x22Messages are sent to objects. There are three types of message: Unary, Binary and Keyword.\x0a\x0aUnary messages have the following form:\x0a    anObject aMessage \x0a\x0aYou've already sent unary messages. For example:\x22\x0a\x0a1 class.\x0a\x0afalse not.\x0a\x0aDate today.\x0a\x0aNumber pi.\x0a\x0a\x22And of course: \x22\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxUnary",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSyntaxUnary\x0a\x09^ Lesson\x0atitle: 'Message syntax: Unary messages' \x0acontents: \x0a'\x22Messages are sent to objects. There are three types of message: Unary, Binary and Keyword.\x0a\x0aUnary messages have the following form:\x0a    anObject aMessage \x0a\x0aYou''ve already sent unary messages. For example:\x22\x0a\x0a1 class.\x0a\x0afalse not.\x0a\x0aDate today.\x0a\x0aNumber pi.\x0a\x0a\x22And of course: \x22\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "pharoEnvironment",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Pharo environment","\x22Every Smalltalk system is full of objects.\x0aThere are windows, text, numbers, dates, colors, points and much more.\x0aYou can interact with objects in a much more direct way than is possible with other programming languages.\x0a\x0aEvery object understands the message 'explore'. As a result, you get an Explorer window that shows details about the object.\x22\x0a\x0aDate today explore.\x0a\x0a\x22This shows that the date object consists of a point in time (start) and a duration (one day long).\x22\x0a\x0aProfStef explore.\x0a\x0a\x22You see, ProfStef class has a lot of objects. Let's take a look at my code:\x22\x0a\x0aProfStef browse.\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pharoEnvironment",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pharoEnvironment\x0a\x09^ Lesson\x0atitle: 'Pharo environment' \x0acontents: \x0a'\x22Every Smalltalk system is full of objects.\x0aThere are windows, text, numbers, dates, colors, points and much more.\x0aYou can interact with objects in a much more direct way than is possible with other programming languages.\x0a\x0aEvery object understands the message ''explore''. As a result, you get an Explorer window that shows details about the object.\x22\x0a\x0aDate today explore.\x0a\x0a\x22This shows that the date object consists of a point in time (start) and a duration (one day long).\x22\x0a\x0aProfStef explore.\x0a\x0a\x22You see, ProfStef class has a lot of objects. Let''s take a look at my code:\x22\x0a\x0aProfStef browse.\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "printing",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Doing VS Printing: Printing","\x22Now you're a Do It master ! Let's talk about printing.\x0aIt's a Do It which prints the result next to the expression you've selected.\x0aFor example, select the text below, and click on 'PrintIt':\x22\x0a\x0a1 + 2.\x0a\x0a\x22As with 'DoIt', there is also a shortcut to execute this command.\x0a\x0aTry CTRL-p on the following expressions:\x22\x0a\x0aDate today.\x0a\x0a\x22The result is selected, so you can erase it using the backspace key. Try it !\x22\x0a\x0aDate today asDateString.\x0a\x0aDate today asTimeString.\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printing",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printing \x0a\x09^ Lesson\x0atitle: 'Doing VS Printing: Printing' \x0acontents: \x0a'\x22Now you''re a Do It master ! Let''s talk about printing.\x0aIt''s a Do It which prints the result next to the expression you''ve selected.\x0aFor example, select the text below, and click on ''PrintIt'':\x22\x0a\x0a1 + 2.\x0a\x0a\x22As with ''DoIt'', there is also a shortcut to execute this command.\x0a\x0aTry CTRL-p on the following expressions:\x22\x0a\x0aDate today.\x0a\x0a\x22The result is selected, so you can erase it using the backspace key. Try it !\x22\x0a\x0aDate today asDateString.\x0a\x0aDate today asTimeString.\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "reflection",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Reflection","\x22You can inspect and change the system at runtime.\x0a\x0aTake a look at the source code of the method #and: of the class Boolean:\x22\x0a\x0a(Boolean methodDictionary at: 'and:') source.\x0a\x0a\x22Or all the methods it sends:\x22\x0a\x0a(Boolean methodDictionary at: 'and:') messageSends.\x0a\x0a\x22Here's all the methods I implement:\x22\x0a\x0aProfStef methodDictionary.\x0a\x0a\x22Let's create a new method to go to the next lesson:\x22\x0a\x0a|newMethod|\x0anewMethod := Compiler new\x0a\x09install: 'goToNextLesson ProfStef next.'\x0a\x09forClass: ProfStef\x0a\x09category: 'navigation'.\x0aProfStef class addCompiledMethod: newMethod\x0a\x0a\x22Wow! I can't wait to use my new method!\x22\x0a\x0aProfStef goToNextLesson.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reflection",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reflection\x0a\x09^ Lesson\x0atitle: 'Reflection' \x0acontents: \x0a'\x22You can inspect and change the system at runtime.\x0a\x0aTake a look at the source code of the method #and: of the class Boolean:\x22\x0a\x0a(Boolean methodDictionary at: ''and:'') source.\x0a\x0a\x22Or all the methods it sends:\x22\x0a\x0a(Boolean methodDictionary at: ''and:'') messageSends.\x0a\x0a\x22Here''s all the methods I implement:\x22\x0a\x0aProfStef methodDictionary.\x0a\x0a\x22Let''s create a new method to go to the next lesson:\x22\x0a\x0a|newMethod|\x0anewMethod := Compiler new\x0a\x09install: ''goToNextLesson ProfStef next.''\x0a\x09forClass: ProfStef\x0a\x09category: ''navigation''.\x0aProfStef class addCompiledMethod: newMethod\x0a\x0a\x22Wow! I can''t wait to use my new method!\x22\x0a\x0aProfStef goToNextLesson.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "reflectionContinued",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Reflection continued","\x22So cool, isn't it ?  Before going further, let's remove this method:\x22\x0a\x0aProfStef class methodAt: #goToNextLesson.\x0a\x0aProfStef class removeCompiledMethod: (ProfStef class methodAt: #goToNextLesson).\x0a\x0aProfStef class methodAt: #goToNextLesson.\x0a\x0a\x0a\x22Then move forward:\x22\x0a\x0aProfStef perform:#next");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reflectionContinued",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reflectionContinued\x0a\x09^ Lesson\x0atitle: 'Reflection continued' \x0acontents: \x0a'\x22So cool, isn''t it ?  Before going further, let''s remove this method:\x22\x0a\x0aProfStef class methodAt: #goToNextLesson.\x0a\x0aProfStef class removeCompiledMethod: (ProfStef class methodAt: #goToNextLesson).\x0a\x0aProfStef class methodAt: #goToNextLesson.\x0a\x0a\x0a\x22Then move forward:\x22\x0a\x0aProfStef perform:#next'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "tableOfContents",
protocol: 'contents',
fn: function (){
var self=this;
var $1;
$1=["welcome", "doingVSPrinting", "printing", "basicTypesNumbers", "basicTypesString", "basicTypesArray", "basicTypesDynamicArray", "messageSyntaxUnary", "messageSyntaxBinary", "messageSyntaxKeyword", "messageSyntaxExecutionOrder", "messageSyntaxExecutionOrderParentheses", "mathematicalPrecedence", "messageSyntaxCascade", "messageSyntaxCascadeShouldNotBeHere", "blocks", "blocksAssignation", "conditionals", "loops", "iterators", "instanciation", "reflection", "reflectionContinued", "theEnd"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tableOfContents\x0a^ #(\x09'welcome'\x0a\x09'doingVSPrinting'\x0a\x09'printing'\x0a\x0a\x09'basicTypesNumbers'\x0a\x09\x22'basicTypesCharacters'\x22\x0a\x09'basicTypesString'\x0a\x09\x22'basicTypesSymbol'\x22\x0a\x09'basicTypesArray'\x0a\x09'basicTypesDynamicArray'\x0a\x0a\x09'messageSyntaxUnary'\x0a\x09'messageSyntaxBinary'\x0a\x09'messageSyntaxKeyword'\x0a\x09'messageSyntaxExecutionOrder'\x0a\x09'messageSyntaxExecutionOrderParentheses'\x0a\x09'mathematicalPrecedence'\x0a\x09'messageSyntaxCascade'\x0a\x09'messageSyntaxCascadeShouldNotBeHere'\x0a\x0a\x09'blocks'\x0a\x09'blocksAssignation'\x0a\x09'conditionals'\x0a\x09'loops'\x0a\x09'iterators'\x0a\x0a\x09'instanciation'\x0a\x0a\x09'reflection'\x0a\x09'reflectionContinued'\x0a\x09\x22'pharoEnvironment'\x22\x0a\x0a\x09\x22'debugger'\x22\x0a\x09'theEnd' )",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "theEnd",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Tutorial done !","\x22This tutorial is done. Enjoy programming Smalltalk with Amber. \x0a\x0aYou can run this tutorial again by evaluating: ProfStef go.\x0a\x0aSee you soon !\x22\x0a");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"theEnd",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theEnd\x0a\x09^ Lesson\x0atitle: 'Tutorial done !' \x0acontents: \x0a'\x22This tutorial is done. Enjoy programming Smalltalk with Amber. \x0a\x0aYou can run this tutorial again by evaluating: ProfStef go.\x0a\x0aSee you soon !\x22\x0a'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);

$core.addMethod(
$core.method({
selector: "welcome",
protocol: 'pages',
fn: function (){
var self=this;
function $Lesson(){return $globals.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($Lesson())._title_contents_("Welcome"," \x22Hello! I'm Professor Stef. \x0a\x0aYou must want me to help you learn Smalltalk.\x0a\x0aSo let's go to the first lesson.  Select the text below and click on the 'DoIt' button\x22\x0a\x0aProfStef next.");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"welcome",{},$globals.SmalltalkSyntaxTutorial)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "welcome\x0a\x09^ Lesson\x0atitle: 'Welcome' \x0acontents: \x0a' \x22Hello! I''m Professor Stef. \x0a\x0aYou must want me to help you learn Smalltalk.\x0a\x0aSo let''s go to the first lesson.  Select the text below and click on the ''DoIt'' button\x22\x0a\x0aProfStef next.'",
referencedClasses: ["Lesson"],
//>>excludeEnd("ide");
messageSends: ["title:contents:"]
}),
$globals.SmalltalkSyntaxTutorial);



$core.addClass('Lesson', $globals.Object, ['title', 'contents'], 'TrySmalltalk');
$core.addMethod(
$core.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@contents"];
if(($receiver = $2) == null || $receiver.isNil){
self["@contents"]="";
$1=self["@contents"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{},$globals.Lesson)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^ contents ifNil: [contents := '']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Lesson);

$core.addMethod(
$core.method({
selector: "contents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@contents"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "contents: aString\x0a\x09contents := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Lesson);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@title"];
if(($receiver = $2) == null || $receiver.isNil){
self["@title"]="";
$1=self["@title"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title",{},$globals.Lesson)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09^ title ifNil: [title := '']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Lesson);

$core.addMethod(
$core.method({
selector: "title:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@title"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "title: aString\x0a\x09title := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Lesson);


$core.addMethod(
$core.method({
selector: "title:contents:",
protocol: 'instance creation',
fn: function (aTitle,someContents){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._title_(aTitle);
$3=$recv($2)._contents_(someContents);
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"title:contents:",{aTitle:aTitle,someContents:someContents},$globals.Lesson.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTitle", "someContents"],
source: "title: aTitle contents: someContents\x0a\x09^ (self new)\x0a\x09\x09title: aTitle;\x0a\x09\x09contents: someContents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["title:", "new", "contents:"]
}),
$globals.Lesson.klass);


$core.addClass('ProfStef', $globals.Object, ['tutorialPlayer', 'widget'], 'TrySmalltalk');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ProfStef.comment="A ProfStef is the Smalltalk teacher. To start the tutorial, evaluate:\x0aProfStef go.\x0a\x0aTo go to the next lesson evaluate:\x0aProfStef next.\x0a\x0aTo execute your own tutorial:\x0aProfStef goOn: MyOwnTutorial\x0a\x0aTo see a table of contents with all defined tutorials:\x0aProfStef contents";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "first",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self._tutorialPlayer())._first();
$1=self._showCurrentLesson();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first",{},$globals.ProfStef)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "first\x0a\x09self tutorialPlayer first.\x0a\x09^ self showCurrentLesson.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["first", "tutorialPlayer", "showCurrentLesson"]
}),
$globals.ProfStef);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self._tutorialPlayer())._next();
$1=self._showCurrentLesson();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{},$globals.ProfStef)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09self tutorialPlayer next.\x0a\x09^ self showCurrentLesson.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["next", "tutorialPlayer", "showCurrentLesson"]
}),
$globals.ProfStef);

$core.addMethod(
$core.method({
selector: "previous",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self._tutorialPlayer())._previous();
$1=self._showCurrentLesson();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"previous",{},$globals.ProfStef)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "previous\x0a\x09self tutorialPlayer previous.\x0a\x09^ self showCurrentLesson.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["previous", "tutorialPlayer", "showCurrentLesson"]
}),
$globals.ProfStef);

$core.addMethod(
$core.method({
selector: "progress",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv("(".__comma(self._tutorialPositionString())).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(self._tutorialSizeString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"progress",{},$globals.ProfStef)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "progress\x0a\x09^ '(', self tutorialPositionString, '/', self tutorialSizeString, ')'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "tutorialPositionString", "tutorialSizeString"]
}),
$globals.ProfStef);

$core.addMethod(
$core.method({
selector: "showCurrentLesson",
protocol: 'accessing',
fn: function (){
var self=this;
var lesson;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
lesson=$recv(self._tutorialPlayer())._currentLesson();
$recv(self["@widget"])._contents_($recv(lesson)._contents());
$1=self["@widget"];
$2=$recv($recv($recv(lesson)._title()).__comma(" ")).__comma(self._progress());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._setTitle_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showCurrentLesson",{lesson:lesson},$globals.ProfStef)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showCurrentLesson\x0a\x09| lesson |\x0a\x09lesson := self tutorialPlayer currentLesson.\x0a\x09widget contents: lesson contents.\x0a\x09widget setTitle: lesson title , ' ' , self progress.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentLesson", "tutorialPlayer", "contents:", "contents", "setTitle:", ",", "title", "progress"]
}),
$globals.ProfStef);

$core.addMethod(
$core.method({
selector: "tutorialPlayer",
protocol: 'accessing',
fn: function (){
var self=this;
function $TutorialPlayer(){return $globals.TutorialPlayer||(typeof TutorialPlayer=="undefined"?nil:TutorialPlayer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@tutorialPlayer"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tutorialPlayer"]=$recv($TutorialPlayer())._new();
$1=self["@tutorialPlayer"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tutorialPlayer",{},$globals.ProfStef)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tutorialPlayer\x0a\x09^ tutorialPlayer ifNil: [tutorialPlayer := TutorialPlayer new]",
referencedClasses: ["TutorialPlayer"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.ProfStef);

$core.addMethod(
$core.method({
selector: "tutorialPositionString",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._tutorialPlayer())._tutorialPosition())._asString();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tutorialPositionString",{},$globals.ProfStef)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tutorialPositionString\x0a\x09^ self tutorialPlayer tutorialPosition asString.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asString", "tutorialPosition", "tutorialPlayer"]
}),
$globals.ProfStef);

$core.addMethod(
$core.method({
selector: "tutorialSizeString",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._tutorialPlayer())._size())._asString();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tutorialSizeString",{},$globals.ProfStef)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tutorialSizeString\x0a\x09^ self tutorialPlayer size asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asString", "size", "tutorialPlayer"]
}),
$globals.ProfStef);

$core.addMethod(
$core.method({
selector: "widget:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
self["@widget"]=aWidget;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProfStef);


$globals.ProfStef.klass.iVarNames = ['instance'];
$core.addMethod(
$core.method({
selector: "default",
protocol: 'initialize',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@instance"];
if(($receiver = $2) == null || $receiver.isNil){
self["@instance"]=self._new();
$1=self["@instance"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{},$globals.ProfStef.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default \x0a\x09^ instance ifNil: [instance := self new]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.ProfStef.klass);

$core.addMethod(
$core.method({
selector: "first",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._default())._first();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first",{},$globals.ProfStef.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "first\x0a\x09^ self default first.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["first", "default"]
}),
$globals.ProfStef.klass);

$core.addMethod(
$core.method({
selector: "go",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._first();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"go",{},$globals.ProfStef.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "go\x0a\x09self first.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["first"]
}),
$globals.ProfStef.klass);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._default())._next();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{},$globals.ProfStef.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09^ self default next.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["next", "default"]
}),
$globals.ProfStef.klass);

$core.addMethod(
$core.method({
selector: "previous",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._default())._previous();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"previous",{},$globals.ProfStef.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "previous\x0a\x09^ self default previous.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["previous", "default"]
}),
$globals.ProfStef.klass);


$core.addClass('TrySmalltalkWidget', $globals.Widget, ['workspace', 'contents', 'header'], 'TrySmalltalk');
$core.addMethod(
$core.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._workspace())._val();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{},$globals.TrySmalltalkWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^self workspace val",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val", "workspace"]
}),
$globals.TrySmalltalkWidget);

$core.addMethod(
$core.method({
selector: "contents:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._workspace())._val_(aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},$globals.TrySmalltalkWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "contents: aString\x0a\x09self workspace val: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val:", "workspace"]
}),
$globals.TrySmalltalkWidget);

$core.addMethod(
$core.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5,$7,$8;
$1=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("DoIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($1)._title_("ctrl+d");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["title:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self._workspace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["workspace"]=1;
//>>excludeEnd("ctx");
return $recv($3)._doIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$4=$recv(html)._button();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["button"]=2;
//>>excludeEnd("ctx");
$recv($4)._with_("PrintIt");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$recv($4)._title_("ctrl+p");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["title:"]=2;
//>>excludeEnd("ctx");
$5=$recv($4)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=self._workspace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["workspace"]=2;
//>>excludeEnd("ctx");
return $recv($6)._printIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$7=$recv(html)._button();
$recv($7)._with_("InspectIt");
$recv($7)._title_("ctrl+i");
$8=$recv($7)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._workspace())._inspectIt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},$globals.TrySmalltalkWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderButtonsOn: html\x0a    html button\x0a\x09with: 'DoIt';\x0a\x09title: 'ctrl+d';\x0a\x09onClick: [self workspace doIt].\x0a    html button\x0a\x09with: 'PrintIt';\x0a\x09title: 'ctrl+p';\x0a\x09onClick: [self workspace printIt].\x0a    html button\x0a\x09with: 'InspectIt';\x0a\x09title: 'ctrl+i';\x0a\x09onClick: [self workspace inspectIt]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "button", "title:", "onClick:", "doIt", "workspace", "printIt", "inspectIt"]
}),
$globals.TrySmalltalkWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $ProfStef(){return $globals.ProfStef||(typeof ProfStef=="undefined"?nil:ProfStef)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=$recv(html)._div();
$recv($1)._class_("profStef");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@header"]=$recv(html)._h2();
return self["@header"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._workspace())._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderButtonsOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$3=$recv($ProfStef())._default();
$recv($3)._widget_(self);
$4=$recv($3)._showCurrentLesson();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.TrySmalltalkWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a\x09\x09class: 'profStef'; \x0a\x09\x09with: [header := html h2];\x0a\x09\x09with: [self workspace renderOn: html];\x0a\x09\x09with: [self renderButtonsOn: html].\x0a          ProfStef default \x0a\x09\x09widget: self;\x0a\x09\x09showCurrentLesson",
referencedClasses: ["ProfStef"],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "h2", "renderOn:", "workspace", "renderButtonsOn:", "widget:", "default", "showCurrentLesson"]
}),
$globals.TrySmalltalkWidget);

$core.addMethod(
$core.method({
selector: "setTitle:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@header"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(html)._with_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setTitle:",{aString:aString},$globals.TrySmalltalkWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "setTitle: aString\x0a\x09header contents: [:html | html with: aString]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "with:"]
}),
$globals.TrySmalltalkWidget);

$core.addMethod(
$core.method({
selector: "workspace",
protocol: 'accessing',
fn: function (){
var self=this;
function $SourceArea(){return $globals.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@workspace"];
if(($receiver = $2) == null || $receiver.isNil){
self["@workspace"]=$recv($SourceArea())._new();
$1=self["@workspace"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"workspace",{},$globals.TrySmalltalkWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "workspace\x0a\x09^ workspace ifNil: [\x0a          \x09workspace := SourceArea new]",
referencedClasses: ["SourceArea"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.TrySmalltalkWidget);


$core.addMethod(
$core.method({
selector: "open",
protocol: 'initialize',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._new())._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.TrySmalltalkWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09self new appendToJQuery: 'body' asJQuery.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.TrySmalltalkWidget.klass);


$core.addClass('TutorialPlayer', $globals.Object, ['tutorialPosition', 'tutorial'], 'TrySmalltalk');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TutorialPlayer.comment="I can navigate through an AbstractTutorial subclass. With #next and #previous you can go forward and backward through the tutorial.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "currentLesson",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._tutorial())._lessonAt_(self._tutorialPosition());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentLesson",{},$globals.TutorialPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentLesson\x0a\x09^ self tutorial lessonAt: self tutorialPosition.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lessonAt:", "tutorial", "tutorialPosition"]
}),
$globals.TutorialPlayer);

$core.addMethod(
$core.method({
selector: "first",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._rewind();
$1=self._currentLesson();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"first",{},$globals.TutorialPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "first\x0a\x09self rewind.\x0a\x09^ self currentLesson",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rewind", "currentLesson"]
}),
$globals.TutorialPlayer);

$core.addMethod(
$core.method({
selector: "last",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@tutorialPosition"]=self._size();
$1=self._currentLesson();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"last",{},$globals.TutorialPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "last\x0a\x09tutorialPosition := self size.\x0a\x09^ self currentLesson",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "currentLesson"]
}),
$globals.TutorialPlayer);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._tutorialPosition()).__lt(self._size());
if($core.assert($1)){
self["@tutorialPosition"]=$recv(self["@tutorialPosition"]).__plus((1));
self["@tutorialPosition"];
};
$2=self._currentLesson();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{},$globals.TutorialPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09self tutorialPosition < self size\x0a\x09\x09ifTrue: [tutorialPosition := tutorialPosition + 1].\x0a\x09^ self currentLesson",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "tutorialPosition", "size", "+", "currentLesson"]
}),
$globals.TutorialPlayer);

$core.addMethod(
$core.method({
selector: "previous",
protocol: 'navigation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@tutorialPosition"]).__gt((1));
if($core.assert($1)){
self["@tutorialPosition"]=$recv(self["@tutorialPosition"]).__minus((1));
self["@tutorialPosition"];
};
$2=self._currentLesson();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"previous",{},$globals.TutorialPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "previous\x0a\x09tutorialPosition >  1 ifTrue: [tutorialPosition := tutorialPosition  - 1].\x0a\x09^ self currentLesson",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", ">", "-", "currentLesson"]
}),
$globals.TutorialPlayer);

$core.addMethod(
$core.method({
selector: "rewind",
protocol: 'navigation',
fn: function (){
var self=this;
self["@tutorialPosition"]=(1);
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rewind\x0a\x09tutorialPosition := 1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TutorialPlayer);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._tutorial())._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.TutorialPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ self tutorial size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "tutorial"]
}),
$globals.TutorialPlayer);

$core.addMethod(
$core.method({
selector: "tutorial",
protocol: 'accessing',
fn: function (){
var self=this;
function $SmalltalkSyntaxTutorial(){return $globals.SmalltalkSyntaxTutorial||(typeof SmalltalkSyntaxTutorial=="undefined"?nil:SmalltalkSyntaxTutorial)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@tutorial"];
if(($receiver = $2) == null || $receiver.isNil){
self["@tutorial"]=$recv($SmalltalkSyntaxTutorial())._new();
$1=self["@tutorial"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tutorial",{},$globals.TutorialPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tutorial\x0a\x09^ tutorial  ifNil: [tutorial := SmalltalkSyntaxTutorial new]",
referencedClasses: ["SmalltalkSyntaxTutorial"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.TutorialPlayer);

$core.addMethod(
$core.method({
selector: "tutorial:",
protocol: 'accessing',
fn: function (aTutorial){
var self=this;
self["@tutorial"]=aTutorial;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTutorial"],
source: "tutorial: aTutorial\x0a\x09tutorial := aTutorial",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TutorialPlayer);

$core.addMethod(
$core.method({
selector: "tutorialPosition",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@tutorialPosition"];
if(($receiver = $2) == null || $receiver.isNil){
self._rewind();
$1=self["@tutorialPosition"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tutorialPosition",{},$globals.TutorialPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tutorialPosition \x0a\x09^ tutorialPosition  ifNil: [\x0a\x09\x09self rewind.\x0a\x09\x09tutorialPosition.\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "rewind"]
}),
$globals.TutorialPlayer);

$core.addMethod(
$core.method({
selector: "tutorialPosition:",
protocol: 'accessing',
fn: function (aTutorialPosition){
var self=this;
self["@tutorialPosition"]=aTutorialPosition;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTutorialPosition"],
source: "tutorialPosition: aTutorialPosition \x0a\x09tutorialPosition := aTutorialPosition",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TutorialPlayer);


});
