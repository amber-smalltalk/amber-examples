smalltalk.addPackage('TwitterWall');
smalltalk.addClass('Tweet', smalltalk.Widget, ['json'], 'TwitterWall');
smalltalk.addMethod(
smalltalk.method({
selector: "json",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@json"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"json",{},smalltalk.Tweet)})},
args: [],
source: "json\x0a^json",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tweet);

smalltalk.addMethod(
smalltalk.method({
selector: "json:",
category: 'not yet classified',
fn: function (aJson){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@json"]=aJson;
return self}, function($ctx1) {$ctx1.fill(self,"json:",{aJson:aJson},smalltalk.Tweet)})},
args: ["aJson"],
source: "json: aJson\x0ajson := aJson",
messageSends: [],
referencedClasses: []
}),
smalltalk.Tweet);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (tr){
var self=this;
var tdUser,tdMessage,img,a,pMessage,pDate;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
tdUser=_st(_st($HTMLCanvas())._new())._td();
_st(_st(tdUser)._element())._id_("user");
tdMessage=_st(_st($HTMLCanvas())._new())._td();
_st(_st(tdMessage)._element())._id_("messageBox");
_st(tr)._append_(tdUser);
_st(tr)._append_(tdMessage);
img=_st(_st(_st($HTMLCanvas())._new())._img())._src_(_st(self["@json"])._at_("profile_image_url"));
_st(_st(img)._element())._title_(_st(self["@json"])._at_("from_user"));
_st(_st(img)._element())._longDesc_("http://twitter.com/".__comma(_st(self["@json"])._at_("from_user")));
a=_st(_st(_st($HTMLCanvas())._new())._a())._href_("http://twitter.com/".__comma(_st(self["@json"])._at_("from_user")));
_st(a)._append_(img);
_st(tdUser)._append_(a);
pMessage=_st(_st($HTMLCanvas())._new())._p();
_st(_st(pMessage)._element())._id_("message");
_st(pMessage)._append_(_st(self["@json"])._at_("text"));
_st(tdMessage)._append_(pMessage);
pDate=_st(_st($HTMLCanvas())._new())._p();
_st(_st(pDate)._element())._id_("date");
_st(pDate)._append_(_st(self["@json"])._at_("created_at"));
_st(tdMessage)._append_(pDate);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{tr:tr,tdUser:tdUser,tdMessage:tdMessage,img:img,a:a,pMessage:pMessage,pDate:pDate},smalltalk.Tweet)})},
args: ["tr"],
source: "renderOn: tr\x0a\x0a| tdUser tdMessage img a pMessage pDate |\x0atdUser := HTMLCanvas new td.\x0atdUser element id: 'user'.\x0atdMessage := HTMLCanvas new td.\x0atdMessage element id: 'messageBox'.\x0a\x0atr append: tdUser.\x0atr append: tdMessage.\x0a\x0aimg := HTMLCanvas new img src: (json at: 'profile_image_url') .\x0aimg element title: (json at: 'from_user').\x0aimg element longDesc: ('http://twitter.com/', (json at: 'from_user')).\x0a\x0aa := HTMLCanvas new a href: ('http://twitter.com/', (json at: 'from_user')).\x0aa append: img.\x0a\x0atdUser append: a.\x0a\x0apMessage := HTMLCanvas new p.\x0apMessage element id: 'message'.\x0apMessage append: (json at: 'text').\x0atdMessage append: pMessage.\x0a\x0apDate := HTMLCanvas new p.\x0apDate element id: 'date'.\x0apDate append: (json at: 'created_at').\x0atdMessage append: pDate.",
messageSends: ["td", "new", "id:", "element", "append:", "src:", "at:", "img", "title:", "longDesc:", ",", "href:", "a", "p"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.Tweet);


smalltalk.addMethod(
smalltalk.method({
selector: "openAt:with:",
category: 'not yet classified',
fn: function (tr,aJson){
var self=this;
var tweet;
return smalltalk.withContext(function($ctx1) { 
var $1;
tweet=self._new();
_st(tweet)._json_(aJson);
_st(tweet)._renderOn_(tr);
$1=tr;
return $1;
}, function($ctx1) {$ctx1.fill(self,"openAt:with:",{tr:tr,aJson:aJson,tweet:tweet},smalltalk.Tweet.klass)})},
args: ["tr", "aJson"],
source: "openAt: tr with: aJson\x0a| tweet |\x0atweet := self new.\x0atweet json: aJson.\x0atweet renderOn: tr.\x0a^tr",
messageSends: ["new", "json:", "renderOn:"],
referencedClasses: []
}),
smalltalk.Tweet.klass);


smalltalk.addClass('TwitterSearch', smalltalk.Object, [], 'TwitterWall');
smalltalk.addMethod(
smalltalk.method({
selector: "query",
category: 'not yet classified',
fn: function (){
var self=this;
var result,queryString;
return smalltalk.withContext(function($ctx1) { 
queryString=_st(_st("#searchQuery"._asJQuery())._val())._replace_with_("#","%23");
result=_st(jQuery)._ajax_options_("http://search.twitter.com/search.json?rpp=5&q=".__comma(queryString),smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(tmp){
return smalltalk.withContext(function($ctx2) {
return self._success_(_st(tmp)._results());
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),"error".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("error");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"dataType".__minus_gt("jsonp")]));
return self}, function($ctx1) {$ctx1.fill(self,"query",{result:result,queryString:queryString},smalltalk.TwitterSearch)})},
args: [],
source: "query\x0a| result queryString |\x0aqueryString := ('#searchQuery'  asJQuery val) replace: '#' with: '%23'.\x0aresult := jQuery \x0a\x09\x09\x09ajax: 'http://search.twitter.com/search.json?rpp=5&q=', queryString\x0a\x09\x09\x09options: #{\x0a\x09\x09\x09\x09'type' -> 'GET'.\x0a\x09\x09\x09\x09'success' -> [ :tmp | self success: (tmp results)].\x0a\x09\x09\x09\x09'error' -> [window alert: 'error'].\x0a\x09\x09\x09\x09'dataType' -> 'jsonp'\x0a\x09\x09\x09}.",
messageSends: ["replace:with:", "val", "asJQuery", "ajax:options:", ",", "->", "success:", "results", "alert:"],
referencedClasses: []
}),
smalltalk.TwitterSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "success:",
category: 'not yet classified',
fn: function (tweets){
var self=this;
var playground,table,tr;
function $Tweet(){return smalltalk.Tweet||(typeof Tweet=="undefined"?nil:Tweet)}
return smalltalk.withContext(function($ctx1) { 
playground="#playground"._asJQuery();
_st(playground)._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
table=_st(html)._table();
table;
_st(_st(table)._element())._id_("twitterwall");
return _st(tweets)._do_((function(tweet){
return smalltalk.withContext(function($ctx3) {
tr=_st(html)._tr();
tr;
_st(table)._append_(tr);
return _st($Tweet())._openAt_with_(tr,tweet);
}, function($ctx3) {$ctx3.fillBlock({tweet:tweet},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToJQuery_(playground);
return self}, function($ctx1) {$ctx1.fill(self,"success:",{tweets:tweets,playground:playground,table:table,tr:tr},smalltalk.TwitterSearch)})},
args: ["tweets"],
source: "success: tweets\x0a| playground table tr |\x0aplayground := '#playground' asJQuery.\x0aplayground empty.\x0a [:html | \x0a\x09table := html table.\x0a\x09table element id: 'twitterwall'.\x0a\x0a\x09tweets do: [ :tweet | \x0a        \x09   tr := html tr.\x0a\x09           table append: tr.\x0a        \x09   Tweet openAt: tr with: tweet\x0a        ]\x0a] appendToJQuery: playground.",
messageSends: ["asJQuery", "empty", "appendToJQuery:", "table", "id:", "element", "do:", "tr", "append:", "openAt:with:"],
referencedClasses: ["Tweet"]
}),
smalltalk.TwitterSearch);



