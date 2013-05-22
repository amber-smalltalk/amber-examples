Smalltalk current createPackage: 'DripfeedIt'!
Object subclass: #DripfeedIt
	instanceVariableNames: 'queryString1'
	package: 'DripfeedIt'!

!DripfeedIt methodsFor: 'ajax'!

query
| result queryString |
queryString := ('#storyStep'  asJQuery val) replace: '#' with: '%23'.
window alert: queryString.
result := jQuery 
	    ajax: 'http://search.twitter.com/search.json?rpp=5&q=', queryString
	    options: #{
		'type' -> 'GET'.
		'success' -> [ :tmp | self success: (tmp results)].
		'error' -> [window alert: 'error'].
		'dataType' -> 'jsonp'
	    }.
!

success: tweets
| playground table tr |

"window alert: 'Success'."

playground := '#playground' asJQuery.
playground empty.
 [:html | 
    table := html table.
    table element id: 'dripfeedit'.

    tweets do: [ :tweet | 
"window alert: 'Tweet', tweet."
		tr := html tr.
               table append: tr.
	       DripfeedItEntry openAt: tr with: tweet
        ]
] appendToJQuery: playground.
! !

Widget subclass: #DripfeedItEntry
	instanceVariableNames: 'json'
	package: 'DripfeedIt'!

!DripfeedItEntry methodsFor: 'accessing'!

json
^json
!

json: aJson
json := aJson
! !

!DripfeedItEntry methodsFor: 'display'!

renderOn: tr

| tdUser tdMessage img a pMessage pDate aExt pExt |
tdUser := HTMLCanvas new td.
tdUser element id: 'user'.
tdMessage := HTMLCanvas new td.
tdMessage element id: 'messageBox'.

tr append: tdUser.
tr append: tdMessage.

img := HTMLCanvas new img src: (json at: 'profile_image_url') .
img element title: (json at: 'from_user').
img element longDesc: ('http://twitter.com/', (json at: 'from_user')).

a := HTMLCanvas new a href: ('http://twitter.com/', (json at: 'from_user')).
a append: img.

tdUser append: a.

pMessage := HTMLCanvas new p.
pMessage element id: 'message'.
pMessage append: (json at: 'text').
tdMessage append: pMessage.

pDate := HTMLCanvas new p.
pDate element id: 'date'.
pDate append: (json at: 'created_at').
tdMessage append: pDate.

aExt := HTMLCanvas new a href: 'http://google.com'.
pExt := HTMLCanvas new p.

pExt append: 'Google IO 2013!!'.
aExt append: pExt.

tdMessage append: aExt.
! !

!DripfeedItEntry class methodsFor: 'not yet classified'!

openAt: tr with: aJson
| tweet |
tweet := self new.
tweet json: aJson.
tweet renderOn: tr.
^tr
! !

Widget subclass: #Story
	instanceVariableNames: 'header btnStart btnPrev btnNext btnEnd message'
	package: 'DripfeedIt'!
!Story commentStamp!
Try:

Story new appendToJQuery: '#desktop' asJQuery!

!Story methodsFor: 'not yet classified'!

clear
   '#desktop' asJQuery empty.
!

dumpEvent: evt
   
   | msg |
   console log: evt. "This will allow drill down"
   "evt toSource." "Only works in Firefox"
   
   msg := (evt srcElement nodeName).
   
   evt offsetX ifNotNil: [
	   msg := msg , '  OffsetX: ', evt offsetX.
   ].

   evt offsetY ifNotNil: [
	   msg := msg , '  OffsetY: ', evt offsetY.
   ].

	   
   self message: msg
!

initialize
	super initialize.
!

message: contents
   message contents: [:html | html with: contents asString]
!

messageEvent: evt
   
   evt ifNotNil: [
	         self message: 'Evt not nil'.
			 self dumpEvent: evt.
         ]
         ifNil: [
			 self message: 'Evt is nil'.
         ]
!

renderOn: html
	| pic |

   "Creates the structure of the block"
	
	header := html h1 with: 'TITLE OF STORY'; yourself.
	
	btnStart := html button with: 'START'; 
	      onClick: [self message: 'start']; 
		  onMouseEnter: [self message: 'Entering START']; 
		  onMouseLeave: [self message: 'Leaving START']; 
		  onMouseOver: [self message: 'Over START'];
		  yourself.
	btnPrev := html button with: 'PREV'; onClick: [self message: 'prev']; yourself.
	btnNext := html button with: 'TREE'; onClick: [self showTree ]; yourself.
	btnEnd := html button with: 'EVENT'; onClick: [ :evt | self messageEvent: evt ]; yourself.
	
	html button with: 'CLEAR'; onClick: [ self clear ].
	
	
	btnStart style: 'font-size: 4em'.
	
	message := html p with: ''; yourself.
	
	"Some Fancy Stuff from Seaside book"
	html p: 'A plain text paragraph.'.
    html p: [
	       html p: 'A paragraph with plain text followed by a line break.'.
        html br.
        html em with: 'Emphasized text '.
        html p: 'followed by a horizontal rule.'.
        html hr.
	 ].
	 
		html p: [
        10 timesRepeat: [
            html img
                src: 'http://amber-lang.net/images/amber.png';
                width: 50 ] ].
				
	html entity: 'copy'.
	
	html with: 'HELLO WITH'.
	
	html em appendString: 'A STRING APPENDED'.		
	
        html p: 'An image: '.
		
		pic := html img src: 'http://amber-lang.net/images/amber.png'; yourself; onClick: [ window alert: 'Pic clicked' ].
!

showTree

jQuery 
		getScript: '../vendor/jstree/dist/jstree.min.js'
		do: [
			'#treecontainer' asJQuery jstree: (JSON parse: '{
    "json_data": {
        "data": [
            {
                "data": "A node",
                "children": [
                    "Child 1",
                    "A Child 2"
                ]
            }
        ]
    },
    "plugins": [
        "json_data",
        "ui"
    ]
}').
	]
! !

!Story class methodsFor: 'not yet classified'!

initialize

 Story new appendToJQuery: '#desktop' asJQuery
! !

