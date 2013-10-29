(function(smalltalk,nil,_st){
smalltalk.addPackage('TrySmalltalk');
smalltalk.addClass('AbstractTutorial', smalltalk.Object, [], 'TrySmalltalk');
smalltalk.addMethod(
smalltalk.method({
selector: "indexOfLesson:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._tableOfContents())._indexOf_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOfLesson:",{aSelector:aSelector},smalltalk.AbstractTutorial)})},
messageSends: ["indexOf:", "tableOfContents"]}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "lessonAt:",
fn: function (anInteger){
var self=this;
var lessonSelector;
return smalltalk.withContext(function($ctx1) { 
var $1;
lessonSelector=_st(self._tableOfContents())._at_(anInteger);
$1=self._perform_(lessonSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"lessonAt:",{anInteger:anInteger,lessonSelector:lessonSelector},smalltalk.AbstractTutorial)})},
messageSends: ["at:", "tableOfContents", "perform:"]}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._tableOfContents())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.AbstractTutorial)})},
messageSends: ["size", "tableOfContents"]}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "tableOfContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["welcome", "testLesson", "theEnd"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"tableOfContents",{},smalltalk.AbstractTutorial)})},
messageSends: []}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "testLesson",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Test Lesson","\x22This lesson is a test\x22");
return $1;
}, function($ctx1) {$ctx1.fill(self,"testLesson",{},smalltalk.AbstractTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "theEnd",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("The End","\x22And that'd be pretty much it :)\x22");
return $1;
}, function($ctx1) {$ctx1.fill(self,"theEnd",{},smalltalk.AbstractTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.AbstractTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "welcome",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Welcome","\x22Hi, this is a test tutorial.\x22");
return $1;
}, function($ctx1) {$ctx1.fill(self,"welcome",{},smalltalk.AbstractTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.AbstractTutorial);



smalltalk.addClass('SmalltalkSyntaxTutorial', smalltalk.AbstractTutorial, [], 'TrySmalltalk');
smalltalk.addMethod(
smalltalk.method({
selector: "basicTypesArray",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Basic types: Array","\x22Literal arrays are created at parse time:\x22\x0a\x0a#(1 2 3).\x0a\x0a#( 1 2 3 #(4 5 6)) size.\x0a\x0a#(1 2 4) isEmpty.\x0a\x0a#(1 2 3) first.\x0a\x0a#('hello' 'Javascript') at: 2 put: 'Smalltalk'; yourself.\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicTypesArray",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "basicTypesCharacters",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Basic types: Characters","\x22A Character can be instantiated using $ operator:\x22\x0a\x0a$A.\x0a\x0a$A class.\x0a\x0a$B charCode.\x0a\x0aCharacter cr.\x0a\x0aCharacter space.\x0a\x0a\x22You can print all 256 characters of the ASCII extended set:\x22\x0a\x0aCharacter allByteCharacters.\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicTypesCharacters",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "basicTypesDynamicArray",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Basic types: Dynamic Array","\x22Dynamic Arrays are created at execution time:\x22\x0a\x0a{ (2+3) . (6*6) }.\x0a\x0a{ (2+3) . (6*6) . 'hello', ' Stef'} size.\x0a\x0a\x0a{ ProfStef } first next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicTypesDynamicArray",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "basicTypesNumbers",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Basic types: Numbers","\x22You now know how to execute Smalltalk code. \x0a\x0aNow let's talk about basic objects.\x0a\x0a1, 2, 100, 2/3 ... are Numbers, and respond to many messages evaluating mathematical expressions.\x0aEvaluate these ones:\x22\x0a\x0a2.\x0a\x0a(1/3).\x0a\x0a(1/3) + (4/5).\x0a\x0a(18/5) rounded.\x0a\x0a1 class.\x0a\x0a1 negated.\x0a\x0a1 negated negated.\x0a\x0a(1 + 3) odd.\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicTypesNumbers",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "basicTypesString",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Basic types: Strings","\x22A String is a collection of characters. Use single quotes to create a String object. Print these expressions:\x22\x0a\x0a'ProfStef'.\x0a\x0a'ProfStef' size.\x0a\x0a'abc' asUppercase.\x0a\x0a'Hello World' reversed. \x0a\x0a\x22You can access each character using at: message\x22\x0a\x0a'ProfStef' at: 1.\x0a\x0a\x22String concatenation uses the comma operator:\x22\x0a\x0a'ProfStef', ' is cool'.\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicTypesString",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "basicTypesSymbol",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Basic types: Symbols","\x22A Symbol is a String which is guaranteed to be globally unique. \x0a\x0aThere is one and only one Symbol #ProfStef. There may be several 'ProfStef' String objects.\x0a\x0a(Message == returns true if the two objects are the SAME)\x22\x0a\x0a'ProfStef' asSymbol.\x0a\x0a#ProfStef asString.\x0a\x0a(2 asString) == (2 asString).\x0a\x0a(2 asString) asSymbol == (2 asString) asSymbol.\x0a\x0a\x0a(Smalltalk at: #ProfStef) next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicTypesSymbol",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "blocks",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Blocks","\x22Cascade is cool ! Let's talk about blocks.\x0a\x0aBlocks are anonymous methods that can be stored into variables and executed on demand.\x0a\x0aBlocks are delimited by square brackets: []\x22\x0a\x0a[Transcript open].\x0a\x0a\x22does not open a Transcript because the block is not executed.\x0a\x0aHere is a block that adds 2 to its argument (its argument is named x):\x22\x0a\x0a[:x | x+2].\x0a\x0a\x22We can execute a block by sending it value messages.\x22\x0a\x0a[:x | x+2] value: 5.\x0a\x0a[Transcript open] value.\x0a\x0a[:x | x+2] value: 10.\x0a\x0a[:x :y| x + y] value:3 value:5.\x0a\x0a[ProfStef next] value.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"blocks",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "blocksAssignation",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Block assignation","\x22Blocks can be assigned to a variable then executed later.\x0a\x0aNote that |b| is the declaration of a variable named 'b' and that ':=' assigns a value to a variable.\x0a\x0aSelect the three lines then Print It:\x22\x0a\x0a|b|\x0ab := [:x | x+2].\x0ab value: 12.\x0a\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"blocksAssignation",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "conditionals",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Conditionals","\x22Conditionals are just messages sent to Boolean objects\x22\x0a\x0a1 < 2\x0a  ifTrue: [100]\x0a  ifFalse: [42].\x0a\x0a\x22Here the message is ifTrue:ifFalse\x0a\x0aTry this:\x22\x0a\x0aTranscript open.\x0a\x0a3 > 10 \x0a\x09ifTrue: [Transcript show: 'maybe there''s a bug ....']\x0a\x09ifFalse: [Transcript show: 'No : 3 is less than 10'].\x0a\x0a3 = 3 ifTrue: [ProfStef next].");
return $1;
}, function($ctx1) {$ctx1.fill(self,"conditionals",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "debugger",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Debugger","\x22The Debugger may be the most famous tool of Smalltalk environments. It will open as soon as an unmanaged Exception occurs. \x0a\x0aThe following code will open the debugger.\x0a\x0a***This should be rethought completely***\x22\x0a\x0a\x0a ");
return $1;
}, function($ctx1) {$ctx1.fill(self,"debugger",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "doingVSPrinting",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Doing VS Printing: Doing","\x22Cool ! (I like to say Cooool :) ).\x0aYou've just executed a Smalltalk expression.\x0aMore precisely, you sent the message 'next' to ProfStef class (it's me !).\x0a\x0aNote you can run this tutorial again by evaluating: 'ProfStef go'. \x0a'ProfStef previous' returns to the previous lesson.\x0a\x0aYou can also Do It using the keyboard shortcut 'CTRL d'\x0a\x0aTry to evaluate this expression:\x22\x0a\x0awindow alert: 'hello world!'.\x0a\x0a\x22Then go to the next lesson:\x22\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"doingVSPrinting",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "instanciation",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Instanciation","\x22Objects are instances of their class. Usually, we send the message #new to a class for creating an instance of this class.\x0a\x0aFor example, let's create an instance of the class Array:\x22\x0a\x0aArray new\x0a\x09add: 'Some text';\x0a\x09add: 3.;\x0a\x09yourself.\x0a\x0a\x22See the array we've created? Actually, #('Some text' 3) is just a shorthand for instantiating arrays.\x22\x0a\x0a\x22If we use a variable to keep track of this object, we'll be able to do stuff with it.\x22\x0a\x0a\x22The following code must be ran all at one, as the 'anArray' variable will cease to exist once the execution finishes:\x22\x0a\x0a|anArray|\x0a\x0aanArray := Array new\x0a\x09add: 'Some text';\x0a\x09add: 3;\x0a\x09yourself.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray remove: 3.\x0a\x0aTranscript show: anArray; cr.\x0a\x0aanArray add: 'Some more text!'.\x0a\x0aTranscript show: anArray; cr.\x0a\x09\x0a\x22I'll put myself in an instance of a class named Dictionary and go to the next lesson:\x22\x0a\x0a((Dictionary new add: ('move on!' -> ProfStef)) at: 'move on!') next");
return $1;
}, function($ctx1) {$ctx1.fill(self,"instanciation",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "iterators",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Iterators","\x22The message do: is sent to a collection of objects (Array, Dictionary, String, etc), evaluating the block for each element.\x0a\x0aHere we want to print all the numbers on the Transcript (a console)\x22\x0a\x0a#(11 38 3 -2 10) do: [:each |\x0a     Transcript show: each printString; cr].\x0a\x0a\x22Some other really nice iterators\x22\x0a\x0a#(11 38 3 -2 10) collect: [:each | each negated].\x0a\x0a#(11 38 3 -2 10) collect: [:each | each odd].\x0a\x0a#(11 38 3 -2 10) select: [:each | each odd].\x0a\x0a#(11 38 3 -2 10) select: [:each | each > 10].\x0a\x0a#(11 38 3 -2 10) reject: [:each | each > 10].\x0a\x0a#(11 38 3 -2 10) \x0a     do: [:each | Transcript show: each printString]\x0a     separatedBy: [Transcript show: '.'].\x0a\x0a\x0a(Smalltalk current classes select: [:eachClass | eachClass name = 'ProfStef']) do: [:eachProfstef | eachProfstef next].");
return $1;
}, function($ctx1) {$ctx1.fill(self,"iterators",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "loops",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Loops","\x22Loops are high-level collection iterators, implemented as regular methods.\x22\x0a\x0a\x22Basic loops:\x0a  to:do:\x0a  to:by:do\x22\x0a\x0a1 to: 100 do:\x0a  [:i | Transcript show: i asString; cr ].\x0a\x0a1 to: 100 by: 3 do: [:i | Transcript show: i asString; cr].\x0a\x0a100 to: 0 by: -2 do: \x0a    [:i | Transcript show: i asString; cr].\x0a\x0a1 to: 1 do: [:i | ProfStef next].");
return $1;
}, function($ctx1) {$ctx1.fill(self,"loops",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "mathematicalPrecedence",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Mathematical precedence","\x22Traditional precedence rules from mathematics do not follow in Smalltalk.\x22\x0a\x0a2 * 10 + 2.\x0a\x0a\x22Here the message * is sent to 2, which answers 20, then 20 receive the message +\x0a\x0aRemember that all messages always follow a simple left-to-right precedence rule, * without exceptions *.\x22\x0a\x0a2 + 2 * 10.\x0a\x0a2 + (2 * 10).\x0a\x0a8 - 5 / 2.\x0a\x0a(8 - 5) / 2.\x0a\x0a8 - (5 / 2).\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"mathematicalPrecedence",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSyntaxBinary",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Message syntax: Binary messages","\x22Binary messages have the following form:\x0a    anObject + anotherObject\x22\x0a\x0a3 * 2.\x0a\x0aDate today year = 2011.\x0a\x0afalse | false.\x0a\x0atrue & true.\x0a\x0atrue & false.\x0a\x0a10 @ 100.\x0a\x0a10 <= 12.\x0a\x0a'ab', 'cd'.\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxBinary",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSyntaxCascade",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Message syntax: Cascade","\x22; is the cascade operator. It's useful to send message to the SAME receiver\x0aOpen a Transcript (console):\x22\x0a\x0aTranscript open.\x0a\x0a\x22Then:\x22\x0a\x0aTranscript show: 'hello'.\x0aTranscript show: 'Smalltalk'.\x0aTranscript cr.\x0a\x0a\x22is equivalent to:\x22\x0a\x0aTranscript \x0a\x09   show: 'hello';\x0a\x09   show: 'Smalltalk' ;\x0a\x09   cr.\x0a\x0a\x22You can close the development tools by clicking on the red circle with a cross at the bottom left of the website.\x0aTry to go to the next lesson with a cascade of two 'next' messages:\x22\x0a\x0aProfStef");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxCascade",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSyntaxCascadeShouldNotBeHere",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Lost ?","\x22Hey, you should not be here !! \x0a\x0aGo back and use a cascade !\x22\x0a\x0aProfStef previous.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxCascadeShouldNotBeHere",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSyntaxExecutionOrder",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Message syntax: Execution order","\x22Unary messages are executed first, then binary messages and finally keyword messages:\x0a    Unary > Binary > Keywords\x22\x0a\x0a2.5 + 3.8 rounded.\x0a\x0a3 max: 2 + 2.\x0a  \x0a(0@0) class.\x0a\x0a0@0 x: 100.\x0a\x0a(0@0 x: 100) class.\x0a\x0a\x22Between messages of similar precedence, expressions are executed from left to right\x22\x0a\x0a-12345 negated asString reversed.\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxExecutionOrder",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSyntaxExecutionOrderParentheses",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Message syntax: Parentheses","\x22Use parentheses to change order of evaluation\x22\x0a\x0a(2.5 + 3.8) rounded.\x0a\x0a(3 max: 2) + 2.\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxExecutionOrderParentheses",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSyntaxKeyword",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Message syntax: Keyword messages","\x22Keyword Messages are messages with arguments. They have the following form:\x0a    anObject akey: anotherObject akey2: anotherObject2\x22\x0a\x0a'Web development is a good deal of pain' copyFrom: 1 to: 30\x0a\x0a\x22The message is copyFrom:to: sent to the String 'Web development is a good deal of pain'\x22\x0a\x0a1 max: 3.\x0a\x0aArray with: 'hello' with: 2 with: Smalltalk.\x0a\x0a\x22The message is with:with:with: implemented on class Array. Note you can also write\x22\x0a\x0aArray\x0a\x09with: 'Hi there!'\x0a\x09with: 2\x0a\x09with: Smalltalk.\x0a\x09\x0aProfStef perform: 'next'.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxKeyword",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "messageSyntaxUnary",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Message syntax: Unary messages","\x22Messages are sent to objects. There are three types of message: Unary, Binary and Keyword.\x0a\x0aUnary messages have the following form:\x0a    anObject aMessage \x0a\x0aYou've already sent unary messages. For example:\x22\x0a\x0a1 class.\x0a\x0afalse not.\x0a\x0aDate today.\x0a\x0aNumber pi.\x0a\x0a\x22And of course: \x22\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageSyntaxUnary",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "pharoEnvironment",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Pharo environment","\x22Every Smalltalk system is full of objects.\x0aThere are windows, text, numbers, dates, colors, points and much more.\x0aYou can interact with objects in a much more direct way than is possible with other programming languages.\x0a\x0aEvery object understands the message 'explore'. As a result, you get an Explorer window that shows details about the object.\x22\x0a\x0aDate today explore.\x0a\x0a\x22This shows that the date object consists of a point in time (start) and a duration (one day long).\x22\x0a\x0aProfStef explore.\x0a\x0a\x22You see, ProfStef class has a lot of objects. Let's take a look at my code:\x22\x0a\x0aProfStef browse.\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"pharoEnvironment",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "printing",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Doing VS Printing: Printing","\x22Now you're a Do It master ! Let's talk about printing.\x0aIt's a Do It which prints the result next to the expression you've selected.\x0aFor example, select the text below, and click on 'PrintIt':\x22\x0a\x0a1 + 2.\x0a\x0a\x22As with 'DoIt', there is also a shortcut to execute this command.\x0a\x0aTry CTRL-p on the following expressions:\x22\x0a\x0aDate today.\x0a\x0a\x22The result is selected, so you can erase it using the backspace key. Try it !\x22\x0a\x0aDate today asDateString.\x0a\x0aDate today asTimeString.\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printing",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "reflection",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Reflection","\x22You can inspect and change the system at runtime.\x0a\x0aTake a look at the source code of the method #and: of the class Boolean:\x22\x0a\x0a(Boolean methodDictionary at: 'and:') source.\x0a\x0a\x22Or all the methods it sends:\x22\x0a\x0a(Boolean methodDictionary at: 'and:') messageSends.\x0a\x0a\x22Here's all the methods I implement:\x22\x0a\x0aProfStef methodDictionary.\x0a\x0a\x22Let's create a new method to go to the next lesson:\x22\x0a\x0a|newMethod|\x0anewMethod := Compiler new load: 'goToNextLesson ProfStef next.' forClass: ProfStef.\x0aProfStef class addCompiledMethod: newMethod\x0a\x0a\x22Wow! I can't wait to use my new method!\x22\x0a\x0aProfStef goToNextLesson.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"reflection",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "reflectionContinued",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Reflection continued","\x22So cool, isn't it ?  Before going further, let's remove this method:\x22\x0a\x0aProfStef class methodAt: #goToNextLesson.\x0a\x0aProfStef class removeCompiledMethod: (ProfStef class methodAt: #goToNextLesson).\x0a\x0aProfStef class methodAt: #goToNextLesson.\x0a\x0a\x0a\x22Then move forward:\x22\x0a\x0aProfStef perform:#next");
return $1;
}, function($ctx1) {$ctx1.fill(self,"reflectionContinued",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "tableOfContents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["welcome", "doingVSPrinting", "printing", "basicTypesNumbers", "basicTypesString", "basicTypesArray", "basicTypesDynamicArray", "messageSyntaxUnary", "messageSyntaxBinary", "messageSyntaxKeyword", "messageSyntaxExecutionOrder", "messageSyntaxExecutionOrderParentheses", "mathematicalPrecedence", "messageSyntaxCascade", "messageSyntaxCascadeShouldNotBeHere", "blocks", "blocksAssignation", "conditionals", "loops", "iterators", "instanciation", "reflection", "reflectionContinued", "theEnd"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"tableOfContents",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: []}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "theEnd",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Tutorial done !","\x22This tutorial is done. Enjoy programming Smalltalk with Amber. \x0a\x0aYou can run this tutorial again by evaluating: ProfStef go.\x0a\x0aSee you soon !\x22\x0a");
return $1;
}, function($ctx1) {$ctx1.fill(self,"theEnd",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);

smalltalk.addMethod(
smalltalk.method({
selector: "welcome",
fn: function (){
var self=this;
function $Lesson(){return smalltalk.Lesson||(typeof Lesson=="undefined"?nil:Lesson)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Lesson())._title_contents_("Welcome"," \x22Hello! I'm Professor Stef. \x0a\x0aYou must want me to help you learn Smalltalk.\x0a\x0aSo let's go to the first lesson.  Select the text below and click on the 'DoIt' button\x22\x0a\x0aProfStef next.");
return $1;
}, function($ctx1) {$ctx1.fill(self,"welcome",{},smalltalk.SmalltalkSyntaxTutorial)})},
messageSends: ["title:contents:"]}),
smalltalk.SmalltalkSyntaxTutorial);



smalltalk.addClass('Lesson', smalltalk.Object, ['title', 'contents'], 'TrySmalltalk');
smalltalk.addMethod(
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@contents"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@contents"]="";
$1=self["@contents"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.Lesson)})},
messageSends: ["ifNil:"]}),
smalltalk.Lesson);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@contents"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},smalltalk.Lesson)})},
messageSends: []}),
smalltalk.Lesson);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@title"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@title"]="";
$1=self["@title"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.Lesson)})},
messageSends: ["ifNil:"]}),
smalltalk.Lesson);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@title"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},smalltalk.Lesson)})},
messageSends: []}),
smalltalk.Lesson);


smalltalk.addMethod(
smalltalk.method({
selector: "title:contents:",
fn: function (aTitle,someContents){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._title_(aTitle);
$3=_st($2)._contents_(someContents);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"title:contents:",{aTitle:aTitle,someContents:someContents},smalltalk.Lesson.klass)})},
messageSends: ["title:", "new", "contents:"]}),
smalltalk.Lesson.klass);


smalltalk.addClass('ProfStef', smalltalk.Object, ['tutorialPlayer', 'widget'], 'TrySmalltalk');
smalltalk.addMethod(
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._tutorialPlayer())._first();
$1=self._showCurrentLesson();
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{},smalltalk.ProfStef)})},
messageSends: ["first", "tutorialPlayer", "showCurrentLesson"]}),
smalltalk.ProfStef);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._tutorialPlayer())._next();
$1=self._showCurrentLesson();
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.ProfStef)})},
messageSends: ["next", "tutorialPlayer", "showCurrentLesson"]}),
smalltalk.ProfStef);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._tutorialPlayer())._previous();
$1=self._showCurrentLesson();
return $1;
}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.ProfStef)})},
messageSends: ["previous", "tutorialPlayer", "showCurrentLesson"]}),
smalltalk.ProfStef);

smalltalk.addMethod(
smalltalk.method({
selector: "progress",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st("(".__comma(self._tutorialPositionString())).__comma("/")).__comma(self._tutorialSizeString())).__comma(")");
return $1;
}, function($ctx1) {$ctx1.fill(self,"progress",{},smalltalk.ProfStef)})},
messageSends: [",", "tutorialSizeString", "tutorialPositionString"]}),
smalltalk.ProfStef);

smalltalk.addMethod(
smalltalk.method({
selector: "showCurrentLesson",
fn: function (){
var self=this;
var lesson;
return smalltalk.withContext(function($ctx1) { 
lesson=_st(self._tutorialPlayer())._currentLesson();
_st(self["@widget"])._contents_(_st(lesson)._contents());
_st(self["@widget"])._setTitle_(_st(_st(_st(lesson)._title()).__comma(" ")).__comma(self._progress()));
return self}, function($ctx1) {$ctx1.fill(self,"showCurrentLesson",{lesson:lesson},smalltalk.ProfStef)})},
messageSends: ["currentLesson", "tutorialPlayer", "contents:", "contents", "setTitle:", ",", "progress", "title"]}),
smalltalk.ProfStef);

smalltalk.addMethod(
smalltalk.method({
selector: "tutorialPlayer",
fn: function (){
var self=this;
function $TutorialPlayer(){return smalltalk.TutorialPlayer||(typeof TutorialPlayer=="undefined"?nil:TutorialPlayer)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@tutorialPlayer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@tutorialPlayer"]=_st($TutorialPlayer())._new();
$1=self["@tutorialPlayer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tutorialPlayer",{},smalltalk.ProfStef)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ProfStef);

smalltalk.addMethod(
smalltalk.method({
selector: "tutorialPositionString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._tutorialPlayer())._tutorialPosition())._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tutorialPositionString",{},smalltalk.ProfStef)})},
messageSends: ["asString", "tutorialPosition", "tutorialPlayer"]}),
smalltalk.ProfStef);

smalltalk.addMethod(
smalltalk.method({
selector: "tutorialSizeString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._tutorialPlayer())._size())._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tutorialSizeString",{},smalltalk.ProfStef)})},
messageSends: ["asString", "size", "tutorialPlayer"]}),
smalltalk.ProfStef);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"widget:",{aWidget:aWidget},smalltalk.ProfStef)})},
messageSends: []}),
smalltalk.ProfStef);


smalltalk.ProfStef.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@instance"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@instance"]=self._new();
$1=self["@instance"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.ProfStef.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._default())._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{},smalltalk.ProfStef.klass)})},
messageSends: ["first", "default"]}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "go",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._first();
return self}, function($ctx1) {$ctx1.fill(self,"go",{},smalltalk.ProfStef.klass)})},
messageSends: ["first"]}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._default())._next();
return $1;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.ProfStef.klass)})},
messageSends: ["next", "default"]}),
smalltalk.ProfStef.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._default())._previous();
return $1;
}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.ProfStef.klass)})},
messageSends: ["previous", "default"]}),
smalltalk.ProfStef.klass);


smalltalk.addClass('TrySmalltalkWidget', smalltalk.Widget, ['workspace', 'contents', 'header'], 'TrySmalltalk');
smalltalk.addMethod(
smalltalk.method({
selector: "contents",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._workspace())._val();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.TrySmalltalkWidget)})},
messageSends: ["val", "workspace"]}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "contents:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._workspace())._val_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"contents:",{aString:aString},smalltalk.TrySmalltalkWidget)})},
messageSends: ["val:", "workspace"]}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._button();
_st($1)._with_("DoIt");
_st($1)._title_("ctrl+d");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._workspace())._doIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._button();
_st($3)._with_("PrintIt");
_st($3)._title_("ctrl+p");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._workspace())._printIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._with_("InspectIt");
_st($5)._title_("ctrl+i");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._workspace())._inspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},smalltalk.TrySmalltalkWidget)})},
messageSends: ["with:", "button", "title:", "onClick:", "doIt", "workspace", "printIt", "inspectIt"]}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
function $ProfStef(){return smalltalk.ProfStef||(typeof ProfStef=="undefined"?nil:ProfStef)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._div();
_st($1)._class_("profStef");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@header"]=_st(html)._h2();
return self["@header"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._workspace())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderButtonsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st($ProfStef())._default();
_st($3)._widget_(self);
$4=_st($3)._showCurrentLesson();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TrySmalltalkWidget)})},
messageSends: ["class:", "div", "with:", "h2", "renderOn:", "workspace", "renderButtonsOn:", "widget:", "default", "showCurrentLesson"]}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "setTitle:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(aString);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setTitle:",{aString:aString},smalltalk.TrySmalltalkWidget)})},
messageSends: ["contents:", "with:"]}),
smalltalk.TrySmalltalkWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "workspace",
fn: function (){
var self=this;
function $SourceArea(){return smalltalk.SourceArea||(typeof SourceArea=="undefined"?nil:SourceArea)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@workspace"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@workspace"]=_st($SourceArea())._new();
$1=self["@workspace"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"workspace",{},smalltalk.TrySmalltalkWidget)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TrySmalltalkWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TrySmalltalkWidget.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.TrySmalltalkWidget.klass);


smalltalk.addClass('TutorialPlayer', smalltalk.Object, ['tutorialPosition', 'tutorial'], 'TrySmalltalk');
smalltalk.addMethod(
smalltalk.method({
selector: "currentLesson",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._tutorial())._lessonAt_(self._tutorialPosition());
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentLesson",{},smalltalk.TutorialPlayer)})},
messageSends: ["lessonAt:", "tutorialPosition", "tutorial"]}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "first",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._rewind();
$1=self._currentLesson();
return $1;
}, function($ctx1) {$ctx1.fill(self,"first",{},smalltalk.TutorialPlayer)})},
messageSends: ["rewind", "currentLesson"]}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "last",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@tutorialPosition"]=self._size();
$1=self._currentLesson();
return $1;
}, function($ctx1) {$ctx1.fill(self,"last",{},smalltalk.TutorialPlayer)})},
messageSends: ["size", "currentLesson"]}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "next",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._tutorialPosition()).__lt(self._size());
if(smalltalk.assert($1)){
self["@tutorialPosition"]=_st(self["@tutorialPosition"]).__plus((1));
self["@tutorialPosition"];
};
$2=self._currentLesson();
return $2;
}, function($ctx1) {$ctx1.fill(self,"next",{},smalltalk.TutorialPlayer)})},
messageSends: ["ifTrue:", "+", "<", "size", "tutorialPosition", "currentLesson"]}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "previous",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@tutorialPosition"]).__gt((1));
if(smalltalk.assert($1)){
self["@tutorialPosition"]=_st(self["@tutorialPosition"]).__minus((1));
self["@tutorialPosition"];
};
$2=self._currentLesson();
return $2;
}, function($ctx1) {$ctx1.fill(self,"previous",{},smalltalk.TutorialPlayer)})},
messageSends: ["ifTrue:", "-", ">", "currentLesson"]}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "rewind",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@tutorialPosition"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"rewind",{},smalltalk.TutorialPlayer)})},
messageSends: []}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._tutorial())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.TutorialPlayer)})},
messageSends: ["size", "tutorial"]}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "tutorial",
fn: function (){
var self=this;
function $SmalltalkSyntaxTutorial(){return smalltalk.SmalltalkSyntaxTutorial||(typeof SmalltalkSyntaxTutorial=="undefined"?nil:SmalltalkSyntaxTutorial)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@tutorial"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@tutorial"]=_st($SmalltalkSyntaxTutorial())._new();
$1=self["@tutorial"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tutorial",{},smalltalk.TutorialPlayer)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "tutorial:",
fn: function (aTutorial){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@tutorial"]=aTutorial;
return self}, function($ctx1) {$ctx1.fill(self,"tutorial:",{aTutorial:aTutorial},smalltalk.TutorialPlayer)})},
messageSends: []}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "tutorialPosition",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@tutorialPosition"];
if(($receiver = $2) == nil || $receiver == undefined){
self._rewind();
$1=self["@tutorialPosition"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tutorialPosition",{},smalltalk.TutorialPlayer)})},
messageSends: ["ifNil:", "rewind"]}),
smalltalk.TutorialPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "tutorialPosition:",
fn: function (aTutorialPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@tutorialPosition"]=aTutorialPosition;
return self}, function($ctx1) {$ctx1.fill(self,"tutorialPosition:",{aTutorialPosition:aTutorialPosition},smalltalk.TutorialPlayer)})},
messageSends: []}),
smalltalk.TutorialPlayer);



})(global_smalltalk,global_nil,global__st);
