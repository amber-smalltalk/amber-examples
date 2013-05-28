Object subclass: #MyScript
	instanceVariableNames: ''
	package: 'MyScript'!

!MyScript class methodsFor: 'main'!
main
	"Just a trivial example showing some meta programming by
	creating a class, compiling some methods and then exporting
	this package in javascript format to stdout"

	| klass method |

	console log: 'Creating new class #Dummy'.

	Object subclass: #Dummy instanceVariableNames: '' package: 'Dummy'.
	klass := Smalltalk current at: #Dummy.

	console log: 'Add method #foo to class #Dummy'.
	klass compile: 'foo ^10' category: 'foo'.

	console log: 'Add method #bar to class #Dummy'.
	klass compile: 'bar ^ self foo * 2' category: 'foo'.

	console log: '--- Exported JavaScript for class #Dummy ---'.
	console log: (Exporter new exportPackage: 'Dummy').
	console log: '--- Exported JavaScript for class #Dummy End---'.
! !


