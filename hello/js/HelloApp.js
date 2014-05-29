define("com_examples_hello/HelloApp", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('HelloApp');
smalltalk.packages["HelloApp"].transport = {"type":"amd","amdNamespace":"com_examples_hello"};

smalltalk.addClass('Hello', globals.Object, [], 'HelloApp');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
protocol: 'not yet classified',
fn: function (){
var self=this;
var msg,button;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
msg="Hello world!";
button="#sayHello"._asJQuery();
_st(button)._click_((function(){
return smalltalk.withContext(function($ctx2) {
$1=button;
$2=_st("<p>".__comma(msg)).__comma("</p>");
$ctx2.sendIdx[","]=1;
return _st($1)._after_($2);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"begin",{msg:msg,button:button},globals.Hello)})},
args: [],
source: "begin\x0a\x22Makes me say hello to the user.\x22\x0a\x0a| msg button |\x0amsg := 'Hello world!'.\x0abutton := '#sayHello' asJQuery.\x0abutton click: [button after: '<p>' , msg , '</p>'].",
messageSends: ["asJQuery", "click:", "after:", ","],
referencedClasses: []
}),
globals.Hello);


});
