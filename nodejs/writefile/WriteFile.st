Object subclass: #WriteFile
    instanceVariableNames: ''
    package: 'WriteFileExample'!

!WriteFile class methodsFor: 'main'!


main
| fs |
    console log: 'Writing a file called "message.txt".'.

    fs := require value: 'fs'.

    fs writeFileSync: 'message.txt' content: 'This file was written by Amber.' 
       errFn:  nil.

! ! 
