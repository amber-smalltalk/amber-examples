Smalltalk createPackage: 'AmberTextInputExample'!
Object subclass: #AmberTextInputExample
	instanceVariableNames: ''
	package: 'AmberTextInputExample'!

!AmberTextInputExample methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doTextFieldExampleAppend

      TextInputExample new appendToJQuery: 'body' asJQuery
! !

!AmberTextInputExample methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	self doTextFieldExampleAppend
! !

!AmberTextInputExample class methodsFor: 'starting'!

start
	self new augmentPage
! !

Widget subclass: #TextInputExample
	instanceVariableNames: 'myInputField'
	package: 'AmberTextInputExample'!

!TextInputExample methodsFor: 'not yet classified'!

doSomething

   myInputField inspect
!

renderOn: html
       myInputField := html input.
       html button
       with: 'Do something';
        onClick: [ self doSomething]
! !

