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
	myClass := Smalltalk current at: #Dummy.

	console log: 'Add method #foo to class #Dummy'.
	myClass compile: 'foo ^10' category: 'foo'.

	console log: 'Add method #bar to class #Dummy'.
	myClass compile: 'bar ^ self foo * 2' category: 'foo'.

	console log: '--- Exported JavaScript for class #Dummy ---'.
	console log: (String streamContents: [ :str | Exporter new exportPackage: (Smalltalk current packageAt: 'Dummy') on: str ] ).
	console log: '--- Exported JavaScript for class #Dummy End---'.
! !


