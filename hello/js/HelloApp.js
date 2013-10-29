define("com_example_hello/HelloApp", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('HelloApp');
smalltalk.packages["HelloApp"].transport = {"type":"amd","amdNamespace":"com_example_hello"};

smalltalk.addClass('Hello', smalltalk.Object, [], 'HelloApp');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'not yet classified',
fn: function (){
var self=this;
var msg,button;
return smalltalk.withContext(function($ctx1) { 
msg="Hello world!";
button="#sayHello"._asJQuery();
_st(button)._click_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(button)._after_(_st("<p>".__comma(msg)).__comma("</p>"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"begin",{msg:msg,button:button},smalltalk.Hello)})},
args: [],
source: "begin\x0a\x22Makes me say hello to the user.\x22\x0a\x0a| msg button |\x0amsg := 'Hello world!'.\x0abutton := '#sayHello' asJQuery.\x0abutton click: [button after: '<p>' , msg , '</p>'].",
messageSends: ["asJQuery", "click:", "after:", ","],
referencedClasses: []
}),
smalltalk.Hello);


});
