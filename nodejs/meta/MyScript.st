Object subclass: #MyScript
	instanceVariableNames: ''
	package: 'MyScript'!

!MyScript class methodsFor: 'main'!
main
	"Just a trivial example showing some meta programming by
	creating a class, compiling some methods and then exporting
	this package in javascript format to stdout"

	| myClass method |

	console log: 'Creating new class #Dummy'.

	Object subclass: #Dummy instanceVariableNames: '' package: 'Dummy'.
	myClass := Smalltalk globals at: #Dummy.

	console log: 'Add method #foo to class #Dummy'.
	myClass compile: 'foo ^10' protocol: 'foo'.

	console log: 'Add method #bar to class #Dummy'.
	myClass compile: 'bar ^ self foo * 2' protocol: 'foo'.

	console log: 'Add amd transport to package #Dummy'.
	(Smalltalk packageAt: 'Dummy') transport: (AmdPackageTransport namespace: 'dummy').

	console log: '--- Exported JavaScript for class #Dummy ---'.
	console log: (String streamContents: [ :str | AmdExporter new exportPackage: (Smalltalk packageAt: 'Dummy') on: str ] ).
	console log: '--- Exported JavaScript for class #Dummy End---'.
! !


