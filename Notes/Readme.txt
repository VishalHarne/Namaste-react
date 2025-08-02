We can plain start with a html 

	1. Just create a Index.html file 
	2. Type html:5 and tehn the cursor automatically gives u a ready to run cod ein VS code.

Now to this code
Inside body addd -a five and then add h1 as Hello world .

Go to folder and double click the Index,html and you would see Hello world :)

Marked in yellow is changes done by us - other code is a readymade one.


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>
<body>
    <div id="root">
        <h1>Hello World</h1>
    </div>
</body>
</html>

Now we will see How do we do same thing with javascript 

How do we embed Java script in html ? 
We do this using the tag SCRIPT - remember anything we type in <Script> </Script> is considered as javascript and rendered accordingly.

Lets take a look at the code.


<body>
    <div id="root">
        <!-- <h1>Hello World</h1> -->
         <script>
            const heading = document.createElement("h1");
            heading.innerHTML = "Hello World from javascript";
            const root = document.getElementById("root");
            root.appendChild(heading);
         </script>
    </div>
</body>
</html>


Now here - we first create a heading by using document.CreateElement("h1") and then we add innerhtml text which should gets displayed.

Now first we get the root by getElementById and then appendchild h1 to the root.

CDN - Learn about CDN ? Content Delivery Network - these is the place where React library is hosted.
Why do we use CDN ?

CDN Link 
https://legacy.reactjs.org/docs/cdn-links.html

First React Program 

React is a JavaScript Library 

For this we first inlcude the 2 links as scripts from above CDN react link - 1 link has entire react code(JS) and another has entire code for react DOM

Now we will write react similar as JS inside script 
 please see below code 
	1. We create a element using React.CreateElement 
	2. We create root using ReactDOM.createRoot

Then we simply render the root by using render method and passing in heading to render



<body>
    <div id="root">
        <!-- <h1>Hello World</h1> -->
         <!-- <script>
            const heading = document.createElement("h1");
            heading.innerHTML = "Hello World from javascript";
            const root = document.getElementById("root");
            root.appendChild(heading)
         </script> -->
    </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const heading = React.createElement("h1", {}, "hello World from react");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
</body>

Now how do we do this in a better way ? 

Create a separate file lets say - App.js and move all the js code there
Now load this App.js into our Index.html

App.js creates a react object not an html - when it is rendered in chrome at that time react object is converted into html 


 <script src="App.js">
        
    </script>





Now I want to have 2 child at same level inside a parent ? How do we do that ?  We can sedn array of child instead of a single child

This is how we can send array 



const parent = React.createElement("div",{id:"parent"},
    [
    React.createElement("div", {id:"child"},
        React.createElement("h1",{},"I am a H1 Tag")
    ),
     React.createElement("div", {id:"child"},
        React.createElement("h1",{},"I am a H2 Tag")
    ),
]);

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




Here if we also have extra element inside a root div - 
This gets displayed but quickly gets replaced by App.js as we first load the html page from top to bottom - first of places whatever root has and in the last line it replaces everything inside eApp.js into root.

body>
    <div id="root">
        <h1>Vishal is here</h1>
        <h1>Vishal is here</h1>
        <h1>Vishal is here</h1>
        <h1>Vishal is here</h1>
        <h1>Vishal is here</h1>
        <h1>Vishal is here</h1>
        <h1>Vishal is here</h1>
        <!-- <h1>Hello World</h1> -->
         <!-- <script>
            const heading = document.createElement("h1");
            heading.innerHTML = "Hello World from javascript";
            const root = document.getElementById("root");
            root.appendChild(heading)
         </script> -->
    </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="App.js">
        
    </script>
</body>


