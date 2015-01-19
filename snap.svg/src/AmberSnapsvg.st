Smalltalk createPackage: 'AmberSnapsvg'!
Object subclass: #AmberSnapsvg
	instanceVariableNames: ''
	package: 'AmberSnapsvg'!

!AmberSnapsvg methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doSnapSvg
"translation to Smalltalk points 1 to 4 of
http://snapsvg.io/start/ "

| s snapLib bigCircle smallCircle |

snapLib := require value: 'snap.svg'.
s := snapLib value: 300 value: 600.

bigCircle := s circle: 150 value: 150 value: 100.
bigCircle attr: #{'fill' -> '#bada55'. 'stroke' -> '#000'. 'strokeWidth' -> 5}.
smallCircle := s circle: 100 value: 150 value: 70.
"Transcript show: s outerSVG."
"s inspect"
! !

!AmberSnapsvg methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	'#snapsvg-button' asJQuery click: [self doSnapSvg]
! !

!AmberSnapsvg class methodsFor: 'starting'!

start
	self new augmentPage
! !

