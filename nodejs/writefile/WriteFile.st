Object subclass: #WriteFile
    instanceVariableNames: ''
    package: 'WriteFile'!

!WriteFile class methodsFor: 'main'!


main
| fs |

    console log: 'Writing a file called "message.txt".'.



    "get access to the nodejs file system library"

    fs := require value: 'fs'.



    "use a fs api function http://nodejs.org/api/fs.html"

    fs writeFileSync: 'message.txt' content: 'This file was written by Amber.' 
       errFn:  nil.

! ! 
