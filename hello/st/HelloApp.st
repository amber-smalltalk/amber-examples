Smalltalk createPackage: 'HelloApp'!
Object subclass: #Hello
	instanceVariableNames: ''
	package: 'HelloApp'!

!Hello methodsFor: 'not yet classified'!

begin
"Makes me say hello to the user."

| msg button |
msg := 'Hello world!!'.
button := '#sayHello' asJQuery.
button click: [button after: '<p>' , msg , '</p>'].
! !

