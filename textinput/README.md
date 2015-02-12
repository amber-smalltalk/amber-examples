# Amber Text Input Example

Shows how to work with a text field.

## Getting Started

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions


## How was this example constructed

    mkdir textinput
    amber init
    amber serve

point browser to ``http://localhost:4000``

Create a Widget class for the example

    Widget subclass: #TextInputExample
	instanceVariableNames: 'myInputField'
	package: 'AmberTextInputExample'!


Add a ``renderOn:`` method to construct the GUI

    renderOn: html
       myInputField := html input.
       html button
       with: 'Do something';
        onClick: [ self doSomething]


Implement an action method


    doSomething

       myInputField inspect

And finally add the widget to the application class ``AmberTextInputExample``

	
       doTextFieldExampleAppend

          TextInputExample new appendToJQuery: 'body' asJQuery


class this method from existing #augmentPage method


       augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	self doTextFieldExampleAppend

       



