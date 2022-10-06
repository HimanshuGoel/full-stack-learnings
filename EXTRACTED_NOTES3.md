## TypeScript

- The overall computer system doesn’t care for the source code, but the compile or interpreter does. It only understands the binary instructions. Source code is for us to understand and for developers.

- Alert pop-up box is given by the browser not by the JavaScript.

- In JavaScript, the variable does not have types but value has types. So, any variable can have any type of values. It is different behaviour from the static languages.

- While passing the values to a function called arguments, and in function declaration they are called parameters. These two terminology cannot be used interchangeably.

- JavaScript has nothing to do with Java, similar names for marketing reasons. Developed by Netscape in 1995 to create products and applications that run in the browser. It is primarily client side. It was originally designed as a scripting language, it is actually a fully featured language.

- The ‘this’ keyword refers to an object. That object is whatever object is executing the current bit of code. By default it is global object in browser it is window object. The new keyword creates a new empty JavaScript object, sets the context of ‘this’ to that new object and then calls the function. So if we do not use ‘new’ keyword it will be undefined, because that function does not return anything. Object literal and object constructor are syntactic sugar for object.create() function.

- Even if the property is marked for the writable as false, we can change the value of a property of the object that name property was pointing to. But we cannot change the value if it is not pointing to an object. We can prevent the object from being changed by using object.freeze() method

- The for-in loop can be used to loop through the property on an object. If we set enumerable false we cannot loop through that property. Also that property will not be JSON serialized.

- If we set the configurable as false then we cannot change the attribute of that object except the writable attribute, also we cannot delete the property.

- A prototype is an object that exists on every function in JavaScript. Initially it is just empty object for new created function. New object do not have prototype property but __proto__. If current object do not have required asked property then JavaScript will search in its prototype. Functions also behave in the same way because functions are also a property in JavaScript. Object prototype is null.

- The jQuery is the best example of Façade pattern on over complicated object interface like DOM. It provides common vocabulary while discussing the problem.

- Types of patterns
	- Creational – deals with creation of new objects. Example – constructor, module, factory, singleton
	- Structural – making up the actual objects themselves. Example- decorator, façade, flyweight
	- Behavioral – how objects are relates to each other and operates. Example – command, mediator and observer.

- Façade pattern – it is used to provide a simplified interface to a complicated system. It is like seeing a building from outside, which looks very clean but inside there might be chaos. So, it hides the chaos form us. It is different from decorator, as we are not adding any functionality to it.

- Observer Pattern – it allows a collection of objects to watch an object and be notified of changes. It allows for loosely coupled system. One object is the focal point and group of objects watch for changes. There are three vocabulary subject, notification and observers. Subject has ObjserverList {} and Notify () function.

- Flyweight pattern – conserves memory by sharing portions of an object between objects. Like I have created 5000 tasks and for the name property the data will be the same and repeated. Flyweight shares data across objects. So, my name string will be shared among other object data. It is like creating prototype instead of creating function on an object for reuse. It is only useful if it has large numbers of objects.

- Mediator pattern – it controls communication between objects so neither object has been to be coupled to the others. It allows loosely couple system. One object manages all communication. It allows many too many relationships.

- Command pattern – encapsulates the calling of a method as an object as it is own individual thing. By this it allows fully decouples the execution from the implementation. Allows for less fragile implementations. It also allows undo operations. Supports audition and logging of operations. It is like USB which provides a generic interface for implementation.

- The apply() let us use a parameter name args which has all the arguments, unlike call() method in which we need to specify the each parameter separately.

- The smallest timeout delay period will be 4 milliseconds, even 0 will be bumped to 4 milliseconds. Timers will not start until the outer most function is finished.

- Browsers are typically single threaded, either do update UI or executing JavaScript a piece of time. Unless we use web workers concept to avoid this. Long running process make UI unresponsive. To avoid this use timeout for realise the thread to go back to the UI process quickly to avoid this unresponsiveness.

- Promises are like pub/sub but more designed for asynchronous operations.

- Ways in which we can define JavaScript function, last one is preferred and myObject name should be like a namespace name for your application. Function 2 and function 5 will be available on the global scope.

![typescript-function-defining-ways](typescript-function-defining-ways)

- Event handlers are not supposed to return any value at all. But if we return false it will tell browser to stop any subsequent processing associated with that event. But we should use a JavaScript function by name preventDefault() to cancel and event because all browser do not support to cancel the event if we return as false. Example scenario if we apply double click event on div which contains text then it will by default also select the text.

- jQuery has two methods for this stopPropagation() and stopImmediatePropagation(). And also preventDefault().

- URI stands for Uniform Resource Identifier, this is used to reference web pages, images, videos, files and pretty much any resource available to a computer, tablet, or smart phone, the browser processes in terms of URI. jQuery use term of URL for web pages.

- The promise returns just a subset of the deferred that let us attach handlers like we have been doing, but doesn’t allow the state of the deferred to be changed by us.

- A deferred object is really just a wrapper that can be placed around asynchronous processing. Instead of trying to manage multiple success and failure callbacks for a series of async calls, the deferred object can wrap them all together in to a single process that will work regardless of the sequence. Once a deferred is rejected or resolved, it cannot change state again. The jQuery deferred object can only have one failure as soon as that happened, all subsequent failures were ignored.

- Hoisting is JavaScript’s default behaviour of moving all declarations to the top of the current scope.

- Function has a ‘function’ type in JavaScript. In JavaScript functions are first class object we can assign them to a variable.

- Avoid call-back hell or Christmas tree code in your program by using named function. Do not use anonymous functions. In our final callback call we should return it by ‘return’ keyword to specify that everything is done.

- Arrow functions are used to make ‘this’ easier to understand. Below code will return the window object, not the document object which would be the case if we do not use arrow function. So, we are no more limited to have access only object which called the function means context of the function:

![typescript-arrow-function-issue](typescript-arrow-function-issue)

- Below code as well will return the window object not the invoice object:

![typescript-arrow-function-issue2.png](typescript-arrow-function-issue2.png)

- Symbols is a concept in ES6 to provide some unique string. It is a unique and immutable data type and may be used as an identifier for object properties. There is no way to access its unique ID value. Well-known symbols used in meta programming, meta programming involves looking more deeply in objects or functions even how JavaScript operates.

- Iterator is an object that let us iterate through an array, an object, a string, or even our custom objects.

- Generators is a special kind of function that function can yield right in the middle of execution and return to the calling function example if we want to create a function that will return a dataset row by row we can create generator for that.

- Map and Weak Map – ES5 to create map like functionality we use object with key and value pair. But we cannot make key as an object, that’s why map is created in ES6. And weak map let that object to be garbage collected it is no longer referenced.

- Set and Weak set – they are similar to map but deals with single value or single object. There is no mapping from key to value as in map. The purpose of set is to guarantee of uniqueness of its item. It will simply ignore the duplicate object.

- JavaScript is also a complied language, not interpreter. Because in interpreter while executing line 3 it has no idea what it is on line 4. In JIT just in time compilation, it won’t compile the function at instance, but when it was force to, means when we will call that function.

- Undefined means the variable was declared, but it has a special empty value that we mistakenly called undefined. It is uninitialized. It doesn’t mean undeclared, it is like vacuum. Undefined is a proper value.

- Lexical scope and dynamic scope: Perl and bash languages only have dynamic scope. Lexical scope means compile time scope, when it is parsing our code. Lexical scope is like building going from first floor to top floor to find, or nested scope bubbles.

- Let keyword will implicitly hijack the scope of whichever block we happened to be in, and will add that variable to that block, rather than attaching it to that function. So, like in below it will attach the baz variable to “if” statement block, not with the function level scope, i.e. with the two pairs of curly braces. This also has performance benefits as value of variable will be garbage collected earlier. Let keyword doesn’t get hoist.

- Dynamic scope – The decision of how scoping works in dynamic scoping, is a runtime decision as opposed to, in lexical scoping it is an author time decision. In dynamic scope inside the function of foo, when we reference a variable bar, it will not look where the code was written but it instead would look at the call stack.it will look for the code which called this foo function, so it will go one level up to the call stack.

- Hoisting – there is no such thing hoisting in JavaScript specification. It is a mental construct that we have invented to explain the behaviors of JavaScript. The variable declaration will moved top of the code. Functions will also work in same way, function declaration will get hoisted, but function declaration will not get hoisted.

- Mutual recursion refers to two or more functions calling each other until a some terminating condition. To support mutual recursion hoisting feature is required, as one of the function will be declared too late. Interpreted language couldn’t handle this mutual recursion. It is like manually hoisting the head files in C language.

- Temporal dead zone: if we try to reference the variable before it has been declared with a let, it is a reference error.

- Call site of “this” keyword – four rules – default binding rule , this rules says that if we are in strict mode, default ‘this’ keyword to the undefined value, if we are not strict mode, then default the ‘this’ keyword to global value. Example for this rule is foo(); call. Third rule is implicit binding rule, the call site binding object will become the “this” keyword value. Example is o2.foo().

- Explicit binding – if we use .call() or .apply() at the call site, both of those utilities take as their first parameter a “this” binding.

- The ‘new’ keyword – this is the fourth rule – when we put new keyword in front of any function call, it magical turns that function call into what we might call a constructor call. It will do four things, a brand new empty object will be created, this new object will get linked to a different object, this new object also gets bound as the this keyword for the purposes of that function call, and if that function doesn’t return anything then it will return “this”, so this new object will be return for us. Below code will print undefined undefined

- Closure is a mathematical concepts, it comes from lambda calculus, it is when a function ‘remembers’ its lexical scope even when the function is executed outside that lexical scope. That lexical scope stayed attached to that function, no matter where he got transported.

- Closure is a necessary mechanism for a language with first-class function as values to be useful. If functions could be passed around with their values, but they couldn’t remember anything about their lexical scope then nobody would pass functions around. Closure gets created when inner function is transported outside of the outer function.

- In JavaScript if we keep a reference to an object around, that object doesn’t get garbage collected until it is not referenced any variable. Same behavior works with closure, when we execute a function, it creates a scope object. If there is anybody that gets a reference to that scope object via closure, that scope doesn’t get garbage collected when the function ends.

- Module pattern – this is useful ness of closure mechanism. Classic module pattern has two characteristics, first there must be wrapping function that’s gets executed, secondly there must be one or more functions that get returned from that function call, so one or more inner function that have colure over the inner private scope. So by this it can access the internal state that makes it a module. It implements encapsulation and principle of least exposure. It is like a module factory.

- Prototype – every single “object” is built by a constructor function. Each time a constructor is called, a new object is created. A constructor makes an object linked to its own prototype. [[prototype]] are called internal linkage with its constructor call function’s porotype.

- JavaScript and Lua are only two languages which are object oriented; others like C# are just class oriented languages. Only in these languages we can create object without a class.

- The alternate name for __proto__ is dunder proto. It is a getter function, which is actually resides only at main object prototype object. This getter function returns the internal prototype linkage. IE11 above supports it, we can use Object.getPrototypeOf() function in IE9.

- Prototype linkages – it will go one level up to the porotype if that property / function doesn’t get found on the current instance. If we have same property on the object same as prototype then object property will over shadow the prototype ones. Need to use foo.prototype.identify.

- Using same method name at multiple levels in an object is called shadowing.

- Objects linked – in below code calling Bar.prototype = new Foo() will call the actual Foo method and attach the me property on it. Object.create method do first two things out of 4 done by new keyword. It creates new object and link it, so no call to constructor and nor return the object.

- The [[prototype]] points to the prototype of the constructor used to create the object. It is a linkage from one object to another object. By this we can call a property or a method on an object reference , and it can’t handle that object or property, if it can’t handle that, it delegates up to prototype chain to a different object. We can find out where an object’s [[protogype]] points to using dunder proto, Object.getPrototypeOf, and “.constructor.prototype“.

- Inheritance vs. prototypical inheritance – they are opposite to each other, one of them is copy down, one of them is a delegation up the chain. We should say JavaScript has behavior delegation not inheritance.

- Using callbacks – we can take something that is fundamentally asynchronous like a timer, and express it in such a fashion that we can reason about that asynchronously code in a synchronous fashion.

- Callback hell: it is not about the indentation, there is a trust issue with callbacks, in this we can giving our piece of code to many some 3rd party library to execute, which call it many times like in a credit card transaction scenario. So we are giving the control of this program code to untrusted library, which is also called inversion of control. Callback hell is giving over control of your program.

- Promises – in this we have a transaction which is asynchronously completing, like ordering for food from Mac, getting receipt, then waiting, and then exchanging that receipt with actual food. In other words it provides continuation events, it allows us to subscribe to a continuation event, when we get notified of that event then we proceed. By this we avoid the problem of IOC in callbacks. It is a solution for callback hell and inversion of control, because it un-invert that inversion of control.

- Asynquence – promise are very low level implementation, in future we use a abstraction on it, to have more complex flow control. Asynquence and queue are some of the third party abstraction library. It creates automatically chain promise for us.

- Arrow Func – it is used to deal with the issue with scope in callback function in which anonymous function passed as callback to other function create their own scope. Arrow function bind the scope of where they are defined, not where they are used which is also known is lexical binding. We get rid off the function name and use arrow for it.

- We should use map if keys are unknown until runtime, if keys are predefined then we can use normal javascript object as a map

- Service worker is essentially something that’s going to run in the background of a web application, and it will continue to run even we don’t have a browser open.

- Typo squatting – it is like uploading vulnerable package by changing some characters in spelling to make them look like some famous package and people might download it after getting confuse.

- Braces are used to create blocks in JavaScript.

- Nested functions are in scope of outer function, braces do not create scope. Variables declared inside a function would not be accessible outside of that function.

- Closure – function is called in the scope in which it was declared, not in the scope in which it is invoked. The way closure works is that a function is going to scope its variable at the time it is declared, not at the time it is run.

- Recursion example of conversion of normal function into recursion, anything we can write recursively, we can also write iteratively. The recursive version is smaller, more elegant but one danger is that they are building up one after another on the stack, we can run out of memory if we put a very large number, but with modern computers, that is not much a problem.

- As a developer we don’t assign undefined to variables, we let the JavaScript to do that, we should use null assignment in that case. The null is an object type and type of undefined is undefined itself.

- We can use IFFE, revealing module pattern to create encapsulation for module and to avoid global scope pollution. IFFE gets invoked when declared, it won’t be callable from another code, but they are not for dependency management.

- The revealing module pattern takes advantage of the fact that variables are scoped to function in JavaScript. Function scoping nice encapsulation of a module’s implementation details. It adds one value to global scope per module and clear delineation between private implementation and public API, but no dependency management between modules. It comes into two flavour – singleton, or function constructor (provide multiple instances as needed)

- Module formats are just a syntax which is used to define a module, module loaders are generally JS library which we can include in our project that understand the module format we have decided to use and how to load and execute the modules we define in that format. This relationship is similar to JS and browser and itself.

![typescript-module-type-format](typescript-module-type-format)

- Common JS format is used mostly with server side, Universal module definition (UMD) is a single format that attempts to be compatible with both the AMD and Common JS formats. We might consider using this format if we need to same module on the server in a node application and as part of a browser application. It would be supported by the CommonJS module loader in Node, as well as an AMD loader in the browser like RequireJS.

- Module formats – non-native – AMD, common js, UMD, system.register. Native format – ES2015.

- Module loaders – for different types of module formats we need different module loaders. AMD for require JS, for AMD, common JS, UMD and system.register we need SystemJS.

- The AMD format gives us all of the encapsulation benefits with private members and a clean public API we got with the revealing module pattern but it doesn’t add new objects to the global scope and it does support dependency management between modules.

- Using the AMD format with RequireJS – we just need to give the main file and it will load the dependency accordingly.

- It is better to have only one function defined globally than perhaps dozens of modules, so in below unlike revealing module pattern, every module will be inside require function. The AMD module format is great option for building browser based JavaScript applications.

- Common JS format – like the require function, the exports object is a special object that a common js module loader will use when creating the structure of the module and the API it will expose to other modules in the application.

- AMD modules are the first choice for doing client-side development, because they are optimized to load modules asynchronously in a browser, common JS format is most often used in server-side code. Node js code natively uses the common js format, which makes it the perfect format to use in that environment.

- These are native modules and built-in into the language. We don’t need any helper libraries or packages in order to write them, but we need to transpile them to earlier version of JS to use them in a browser as browser still don’t support them largely.

- Babel – it is a transpiler, it is tool which helps bridge the gap between what is possible in the latest versions of JS and code that can actually be executed in modern browsers. Because browsers takes years to implement new features. Babel converts all of the newer ES2015 features into equivalent code in an earlier version of JavaScript.

- They can replace module loaders in a browser, as they can be used in build steps rather than run time. A bundler follows the chain of module dependencies in an application, just like a loader, but instead of downloading a dependency when it’s needed, it just adds it to the bundle in the proper order. The result of the bundling process is that we are left with far fewer files that the browser has to download. Browserify and webpack are famous bundlers.

- Webpack support many module formats, code splitting, it can bundles more than just JS modules, also use loaders feature for transformation before bundling.

- We can use function for creating encapsulation, functions are objects that does something. We can have higher order function which we can pass around within other function as a parameter. Functions have scope.

- Arguments is a special keyword that lives inside a function and it gets a value of the arguments that we pass in the form of an array-like object. It is an array like object as it won’t have many array methods like slice on it.

- Scope is created dynamically whenever we call a function. Whenever we call a function we create a new scope, using the same function we can have different values based on the parameters.

- Higher order function either takes a function as an argument or it returns a function as an output.

- Underscore library - Difference between map and each function – from each we cannot return anything, use map if we want to return something like array. For returning an object then wrap each into map. We need to use return in map otherwise we will get an array of undefined.

- Function expression also called functions on the fly, also it gets builds only when we call that function. A variable that holds a function can be passed into other functions. Function expression can give flexibility in choosing which functionality to build. Function expression are never hoisted, they are treated as assignments.

- Using inheritance, we can create new objects with our existing objects as prototypes

- hasOwnProperty() methods helps identify property location, searching prototype chains for potential overridden properties becomes easy with this function, it helps us in finding the owner of a particular property. Use __proto__ to move up the prototype chain to find that property.

- Pure Functions - List transformation (map), list exclusion (filter), list composition (reduce), list iteration (forEach).

- An impure function is a function that produces side-effects, it changes the state of the programs by indirect means. The console.log() is also side-effect, or a function is returning value on each time. Below is the example of impure function. We should not leave something impure publically exposed. To make a impure function pure, we should wrap a another function on it to contain all of those side effects within that function and from outside world that function itself the outer function becomes pure, it has be pure on highest most level not all the deep nested level. Impure functions make the code harder to reason about

- A pure function is a function that has no side-effects, it operates entirely on its own variables, its own state or any of the things that are passed into it like arguments. It can access the outside variables but don’t change them.

- Composition is about taking the output of one function and putting it directly in as the input to another function. So, instead of calling the once function and then calling another function, we are going to call one function, and its output is going to become at least part of the input for another function and then the output of that could become part of the input for another function.

- Object.freeze utility, it reaches into an object and at a shallow level i.e. is the top level of all of its properties, it makes all of those read-only. So, it will only do shallow immutability. Changing of binding is not that much of problem, but changing the values underneath us. Because bindings are always localized, they are always within the program that we can see immediately in front of us. But values are portable and can be shipped elsewhere, and over there somebody can change that value, this is much bigger problem. It helps in a situation where you give someone an object in function parameter and they modified it and misunderstood as they are using a local copy of it. Arrays are also passed by reference. Browser consoles don’t work like real JavaScript environments.

- Closure is when a function “remembers” the variables around it even when that function is executed elsewhere.

- Recursion – it means a function that we define, it is going to perform some action and we want for that function to stop calling itself, it is going to call itself as a part of solution, but we want for it to stop calling itself when it reaches what we call it as a base case. Mutual recursion is two or more functions calling each other until they reach a base case. But recursion is not good for memory, when one function calls another function, even if that function is itself, the first function call allocates in memory what we call a stack frame. Stack frame is a place in memory where all the variables and state are held, and program counter as its walking through. When it finishes with that stack frame, it throws stack frame away means on finishing of that function, it throws away that memory and reclaims it and reuses it. In earlier IE the limitation of call stack was 13 deep only, but for now for modern browser it is more than 10K. It is worst for memory if device ran out of memory it will restart the device i.e. worst UX. In new browser engine there is new thing TCO (tail calls optimization), and if we done the recursion with proper tail calls, then we can do arbitrary deep recursion with O (1) memory (constant memory) usage. Virtually all recursion can be rewritten to use proper tail calls, but that technique is difficult.

- Crude computation bug – below will make the infinite loop. JavaScript only has 1 number type and it is IEEE 754 double-precision floating point, by this we can represent wide range of values but downside is that some of the precession can be lost in the process.

![typescript-number-type](typescript-number-type)

![javascript-number-type-2](javascript-number-type-2)

- The new operator creates a new object, sets its prototype to the constructors prototype, executes the constructor using the new object as the ‘this’ context, and then returns the new object. So if we call it like below without using new keyword, no new object will be created and the name will be on global object. So, consider best practice to upper-case for your constructor function to signify to developer that it needs to be new’ed up. This technique is meant to protect against accidental creation of objects without using new

- To make overloading work in javascript, instead of creating different methods, we should handle it manually in same method by taking consideration of arguments length or types

- Value of ‘this’ in function for different cases invocation. We need to use call, bind or prototype to control this context –

![typescript-value-of-this-based-on-context](typescript-value-of-this-based-on-context)

![typescript-value-of-this-based-on-context2.png](typescript-value-of-this-based-on-context2.png)

- We cannot compare NaN with NaN, it will give false. So we need to call isNaN(NaN) function instead

- Pregnable property bug – for-in works with arrays and other types, however, it is most valuable when iterating over an object, but it will also iterate the prototype properties as-well, to avoid this use hasOwnProperty() method

- JSON is a subset of the object literal notation of JavaScript – JSON keys need to be double quotes and JSON strings are also need to be double quoted. But object literals are much more flexible, they can have single quote or double quoted, or keys can have without quote. There is no such thing as JSON object, JSON is a string, it is not an object but it is serialized data which comes from server which gets formed with some kind of special library.

- The for-of loop iterates over property values, and it is a better way to loop over arrays and other iterable objects.

- The for-of statement cannot be used to iterate over properties in plan JS object out of the box. In order to work with for-of, objects need a special function assigned to the Symbol.Iterator property. The presence of this property allows us to know whether an object is iterable

- Issues with using Objects as Maps – when using objects as maps, its key are always converted to strings. We should stop using the object, but use Map objects which is a simple key/value data structure. Any value may be used as either a key or a value, and the objects are not converted to strings. Also, we can use maps when keys are unknown until runtime, use objects if keys are predefined. We should also use maps when keys are of same type and all values are of same type. Maps are iterable, so they can be used in a for-of loop. Each run of the loops returns a [key, value] pair for an entry in the Map.

![typescript-using-maps-instead-of-objects](typescript-using-maps-instead-of-objects)

- The WeakMap is a type of Map where only objects can be passed as keys, primitive data types such as strings, numbers, Booleans, etc. are not allowed. WeekMaps are not iterable, so they can’t be used with for-of loop. Weakmaps are better with memory, they can be garbage collected. Individual entries in a weakmap can be garbage collected, while the weakmap itself still exists.

- Limitations with arrays, they don’t enforce uniqueness of items, duplicate entries are allowed. But the set object stores unique values of any type, whether primitive values or object references, it will ignore the duplicate entries. Sets objects are iterable so we can use them for-of and destructuring.

- Weaksets is a type of set where only objects are allowed to be stored. But we cannot use for-of loop with them. Good use case of weaksets, we want to add a different background color to posts that have not yet been read. One way to ‘tag’ unread posts is to change a property on each post objects once they are read, but we can use weaksets to create special groups from existing objects without mutating them. Favouring immutable objects allows for much simpler code with no unexpected side effects.

- A common approach to encapsulation in JS is using a constructor function. But adding functions to prototype required quite a bit coding and some repetition. Using class we can write it into much simpler way. The class syntax is not introducing a new object model to javascript. It is just syntactical sugar over the existing prototype-based inheritance.

- ES2017 is unofficially called ES8. JS was created by Brendan Eich, he was told to create java like language for Netscape browser. ES is a standard that guides the path of JS.

- The exponentiation operator can be use by ‘**’, earlier we used to use Math.pow() method.

- A web-worker is another option to run tasks in parallel in JS. They are designed for browsers. They are started by main thread and every worker gets his own isolated global environment, nothing is shared between main thread and worker thread. SharedArrayBuffer supports a scenario where many worker thread need to share same data. Normal arrays are not optimized for this kind of work, due to which ArrayBuffer and TypedArrays have been introduced, they reduces memory footprint and optimize data transfer.

- By using Object.values we can get the values of all keys, it is the same way in which we get all the keys from Object.keys method. By using Object.entries we can get both the keys and values in one go, it produces array of arrays.

- The number type in JS is IEEE-754 format, this format is prone to rounding errors, but by this we can represent integers and floating point numbers.

- JS is interpreted, in C# compilation includes verification of syntactically correctness of code and creating intermediate language (IL) code packages. But in JS we can use JSLint to check for correctness and minification for packaging.

- Functional programming has main terms like pure functions, higher order functions, immutability, and side effects.

- Pure functions – similar to math functions, they don’t depend on data other than what is passed in, and don’t alter data other than what they returned, but math.random() is not a pure function.

- Module Pattern - This is the pattern Douglas Crockford came up initially. The main pros is that it expose only public members which hiding private members. So, unlike porotype pattern we can define variables or functions as public or private. Main con is that function will get duplicated because we are not using prototype, also it is very hard to extend, so we want to create a library that can be extend by consumer then this is not a good pattern, we should choose porotype pattern in this case.

- The revealing module pattern is similar to this only, it will just make the return object much simpler and easy to read.

- Revealing Prototype Pattern - It combines porotype and revealing module pattern to get the best from both of them. Functions loaded into memory once, also it is extensible.

- Webpack process –

![typescript-webpack-process](typescript-webpack-process)

- The call() and apply() methods allows us to call a function and change the ‘this’ value, but sometimes we need to make a copy of the function and also change the this value, we can do this by ‘bind()’ method.

- In JS constructor functions are used to create new objects. When we use the new keyword the function gets a branch new empty context, here we store the properties and functions for this object on ‘this’. By using prototype property we can create a function directly on function without having duplicate copies on every object. Prototype also helps us to extend an objects to add new functionalities to the instance of that object. Polyfills also uses prototypes for their working.

- BOM refers to the browser object model and that lets us access functionality in the browser. We can change the URL we are pointing at, get information on the URL. DOM is document object model we use this to change the actual web page.

- Window is a global object in JS, we can access it from anywhere. Important key things are below –

![typescript-important-document-api](typescript-important-document-api)

- By using eval() keyword, it will open our application for injection attacks. Like the string is coming from database or web api which might be compromised, then eval will execute then string as a javascript script.

- Any data we have set on global scope can be easily to look at watch window, this is also one of the reason not to use global variables

- We can use webpack web server for local development environment, it serves the bundle file in-memory which makes our debugging and application fast on localhost. It will keep all JS files into one bundle file

- But when our application is complete we need to build it for a production environment, so we need a package file that we can send off to store on the server, we need to minimize the code for production. For production, webpack will create a dist folder and files like below, it will also have a map file, this file is useful in some tools for getting the exact line numbers, it maps the minimize code to the original code. Webpack do all of these for us. Three main files one is html, another is JS file and finally one is a map file

- Single threaded means a bank with one teller or a bar with only one bathroom. This behaviour is unlike with multithreaded environment more than one piece of code can execute at the same time.

- The event queue – if at a time only person can go to the teller, then there has to be a queue to hold the other people, this queue is a part of event loop in JS. This is where work is stored until the current operation or task is done executing.


![typescript-event-queue](typescript-event-queue)

- The javascript engine will only execute one piece of JS code at a time, behind the scenes there are a pool of threads that are used for things like making web requests. This pool of threads can have multiple connections open to multiple different servers to request data for multiple different requests at the same time. This is all hidden behind the scenes, this is how we can still achieve parallelism within JS. We still have behind the scenes the ability for multithreading, it is not just applied to our JS code itself.

- So, JS supports concurrency by not blocking for I/O, the non-blocking nature of code in JS allows us to still have performant programs because we don’t have to wait for results of long running operations to complete like a web requests or opening a file. It is like a person forget the ID or paperwork, then the teller can serve the next person in queue, and once that person come back then the teller can pick up where they left off.

- Run to completion – for a blocking operation it will run for completion, until that code runs completely like a ‘for’ loop, then only next code will rung. It is like satisfy customer before next by a teller. If we need to avoid this then we need to use web workers, it would be lot like opening up another line at the bank if somebody is taking a long time. This run to completion approach in JS is in stark contrast to multithreaded language where it is possible that a chunk of code could be pre-empted, means essentially interrupting our code wherever it is executing, to give the thread to somebody else. It is like if a person is taking more time, then moving him back at the bottom of line and serving next customer.

- Cooperative concurrency – the person servicing the queue usually has control over the queue like the teller can eject someone from the queue, but in JavaScript that is not the case, in JS it is much more like bar/bathroom situation. The person who is using the bar has control over the rest of the line means he use read newspaper while others are waiting outside. Cooperative concurrency means customers play nice to each other. As long as our program doesn’t abuse and hold up the rest of the queue, our programs will appear to have the ability to execute multiple things at the same time. So, each program should execute itself in smaller pieces of chunks.

- The JS engine and the browser tab that we are working has a separate event loop dedicated just to our application, this event loop contains a queue, inside of this queue work can be placed that will be eventually executed when whatever is running is complete. In addition to this queue, there is a call stack it contains whatever is executing at this current time, a call stack is like a todo list while performing a task. Work will be pushed on call stack and then once it is done it will vanish. A todo item can also have sub-task like to create a hamburger we might need to find many items to look for same with the work, it will be further pushed to the stack only, as usual after completion of that subtask, it will be removed from the stack and controls get back to the earlier item on the stack.

![typescript-event-loop2](typescript-event-loop2)

- The black box items will be handle by browser behind the scenes for us, and a mechanism in browser will also listen for the their responses as-well, after getting the response it will push those response inside the queue. Behind the scene the browser is handling these requests not the JS engine, so that multiple threads handling multiple request at the same time. So it is possible while our single-
threaded JS engine is doing work that behind the scenes other things can be happening, we just don’t have those things happening inside of our JS engine –

![typescript-event-loop3](typescript-event-loop3)

- In setTimeout() function there is not guarantee that our function will be called at exactly at the mentioned time, at that time elapse the function will be pushed in the queue, but it will called once all other prior work in the queue gets completed. Also when we say 0 milliseconds the browser is putting in as 4.

- In the browser the call stack pane is real life stack of JS event queue.

- Nodejs nextTick and setImmediate – these are like timers. In Nodejs 0 milliseconds will be default to 1 milliseconds.

- The process.nextTick take precedence over setTimeout. In nextTick() all the callbacks that we register will be run at the end of the current event loop turn. Means whatever is running right now once it is done, the registered nextTick() will be called. nextTick() is like a bouncer that lets people cut in line, lets the VIP people get in ahead of everybody else.

- Event listeners are synchronous like below – it is because to avoid race condition which happens with the order of operations in the queue with async requests. Then if the data coming from events are not in sync order then it could jumble up the form or operation, and the order of the events won’t be persevered. But there would be asynchronicity between an event and another event of the same type being raised.

- Key terms of functional programming – pure functions, composition, higher order functions, currying, immutable data, closure. We can use libraries like – immutable.js, ramda, folktale, skit, sanctuary, monet.

- The console.log() is not pure function as it change the state of console. We should never return null or undefined from a pure function.

- Higher order functions – a function which takes a function as a parameter or return a function as a value.

- Currying is the act of taking a function which accepts 1 to n parameters, and producing a collection of 1 to n function, which each take 1 parameter.

- Immutablity helps in performance, if we have an object that needs to be change the value stored in one of its properties, it may take a long time for JS to recognize that that properties has been changed, basically every property on that object has to be checked to see if its changed in order to determine that our data has changed. By enforcing immutability all JS has to do is check the object reference to see if that’s changed. If it has changed then that some property value is changed, checking for object reference changes in very fast. So in this case immutability is performance enhancer. It is mainly for objects/arrays other data types are already immutable.

- Human head has two systems – head and gut. Head is the higher level one, its analytic, its algorithm, it is where we do mathematics and reasoning and logic, it requires tremendous amount of effort and a bit slow, most of the time we need to turn it off, due to its slowness only we needed to invent computer. Another part is gut, it is intuitive, heuristic, associative and very, very fast, requires no effort and we cannot turn it off, it is on all the time. Head gets its assumptions from gut and it is not aware of that connection, its think it is getting results from vault of deep truth, but as it is getting from gut, sometimes head can get wrong input.

- The computer programs are most complicated thigs that people make, there is nothing else in human experience which is composed of as many tiny little pieces which all have to go together perfectly that have to work in real time with changing states and changing inputs in a dynamic situation.

- Initially the goal of the AI originally was to figure out a way to have the computer write their own programs because it was just too hard to have humans writing them.

- There is no test for the perfection of a program, we have tests for imperfection. None of our programs are perfect.

- Programming uses head and gut both. But we don’t understand how we write program, we just write instruction to create a program and hand it over to someone else those instructions, we cannot tell someone else how to do it and that’s why we can’t tell the machines how to do it. We look at a problem and we will look at top-down and bottom-up and take a macro view and a micro view, we keep constantly shifting our point of view until eventually a program emerges and we don’t know how we do that.

- JSLint defines a professional subset of JS, it will hurt our feelings as we get really emotional about how we write our programs.

- JS was designed as a language for beginners, that was the original goal.

- Switch statement is having fall-through hazards, so we should use ‘break’ keywords.

- A good style can help produce better programs, it should not be about personal preference and self-expression but to reduce the error rates.

- In English language itself lowercase, word breaks, and punctuation into their manuscripts to helped reduce their error rates and easier to read, earlier it was all caps letter with no space.

- Unfortunately, in the browser the use of global variables is required because there is no kind of linkage mechanism that allows one compilation unit to find another. They just share a common global scope. So, in browser use very minimum global variables and named the as UPPER_CASE.

- The ‘++’ operator was used to do pointer arithmetic, now it is used to add 1 to variable, we should not use this operator. Instead of this use compound operators like ‘+=’.

- History of JS – at the national centre for super computing applications at the university of Illinois, there were couple of kids who were developing a client program for internet for number of protocols like WAIS, Archie, Gopher, FTB, Finger and WWW, they called this program MOSAIC. Finally, out of these protocols the WWW won, this format can also display image tag. A bunch of the people from that project were lured to California where they become part of a company called Netscape. Netscape made the first commercial web browser called Netscape navigator and it was a huge hit. For the new release of this navigator they also wanted to make it easy for end-user programming, they remembered something that had been on Macintosh called HyperCard, that was a simple application program based on a simple metaphor of stacks of cards and it was an event driven script thing and remarkably easy to use and they wanted something like that in the web browser. So, they gave this job to Brendan Eich, his idea was he would write a scheme interpreter to do this like he was told to do in a language like java or visual basic which people like and popular at that time, this if for the kids. He was given 10 days to create a prototype of this new interactive browser and in those 10 days he designed and implemented a new programming language which is an amazing achievement. So, from java he took syntax another language was scheme which is a dialect of LISP, scheme has lambdas i.e. functions, there is a dialect of small talk called Self it was having better performance and expressive, from Self he didn’t took the feature of classes, by removing classes they could make it much faster and much better to program. Netscape called this initial language as LiveScript. While this is going on another language that was being developed by a guy at Sun named Jim Gosling, they wrote a web browser in this language the browser called hot java, the language name was Java and become wildly successful. These both companies were working against Microsoft, so they form an alliance the first thing they agreed upon that Netscape adds java to the web browser in-exchange for that Sun will drop their hot java browser. Another thing is that they have to kill LiveScript as they were saying to the world that Java is the last programming language world ever need, but Netscape denied that because Java was not for beginners and they also wanted to launch the new browser right away and so the way they put Java in was they had Java talk to LiveScript through an interface called Live Connect. So, LiveScript could talk to the browser and java could talk to LiveScript through Live Connect. And if they took LiveScript out, Java wouldn’t work, so to save the alliance they change the name of language from LiveScript to javascript, and to showcase not a new language but as a subset to javas, interpreted java and they lied about the relationships of these two languages.

- Meanwhile after seeing this Microsoft had completely missed the web and the internet, they thought the future of telecommunications was going to be fax and cable TV. So they bought out a browser company, it was another spinoff out of Illinois called spyglass, took their thing and relabelled it as IE and decided that they also need one more thing related to JS. So, they reverse engineering the first JS engine. MS also noticed all the blunders, bugs, errors, design defects, MS carefully documents all of them and replicates them, they called it Jscript. Then Netscape went to w3c to make the standard of their language, but w3c denied then they went to ISO, and then European computer manufactures association (ECMA), MS also joined this committee and dominates the committee. Also, MS told that all the bugs will remain in the standard, those standards where published by name ECMAScript.

- Other OO programming language has inheritance is classical where objects are instance of classes and classes inherit from other classes, but in JS it is based on prototypes where objects inherit from objects and that’s it. There are no classes, this idea it got from Self language.

- Javascript provides concept of delegations i.e. differential inheritance, where an object can only do what it can do and if its asked to do something that it can’t do, it will designate another object to do that work on its behalf.

- By using Object.create(null) we can create an object that inherits nothing, not even from object.prototype. It will act much more like hash table.

- Everything in JS are objects like from number, Boolean, string, array, date, regexp, function, etc. In JS there is only one number type, no integer types, it is based on 64-bit binary floating point which is also call double based on IEEE-754. But binary floating point and a binary floating point cannot accurately represent most of the decimal fractions. It can only approximate them, but it approximates them with infinite repeating bit patterns

- We also get NaN as a confusing thing from IEEE format; it is the result of confusing or erroneous operations.

- Array is a contiguous series or span of memory divided into equal size slots where each slot is indexed by a number; very fast, very efficient. One advantage is that we don’t need to provide length or type when creating an array. We don’t have to worry about out of bound array, as it is not an actual array but an hash table, so every value is in bounds, in first version of javascript they forget to add the concept of array.

- The Date function is based on Java’s Date class and due to this it was no Y2K ready.

- RegExp are not readable and understandable easily if they are long, there is tool regulex (http://jex.im/regulex/) which we can use to see it in a diagrammatic form to understand it better.

- In JS all values are objects, except null and undefined, they are bottom values in JS. So, we should only choose one bottom values that is undefined.

- Closure are good parts of JS. Closure – the context of an inner function includes the scope of the outer function. An inner function enjoys that context even after the parent functions have returned. Function scope works like a block scope. To the value of a retain while executing the inner function for this the solution was don’t allocate the activation records on the stack, allocate them on the heap, get a good garbage collection. JS was the first language to bring this concept then python, ruby, C#, C++, then java followed it

- In a function object there is basically an object with two extra pointers in it, one for the pointer to the code and one for the pointer to the activation of the creating function. There will also be a link to the prototype object which is a waste because we are not going to use it. So, no much memory in these things, not a lot of work to initialize them, so it is very light weight.

- The Metamorphosis of AJAX - The web comes from word processing and word processing historically comes in two very distinct schools – binary proprietary and textual open. For this the first program was runoff then GML (general mark-up language then html comes from GML). The angular brackets for tabs from Brian Reid’s scribe to distinguish between format and content.

- Initially HTML was intended for simple document viewers, it wasn’t intended to be an application platform. The DOM is the API that the browser presents to JS and it is one of the worst APIs ever invented. The inventory tried to implement the HyperCard like system as DOM.

- When those kinds then move to Netscape, their goal was to kill Mosaic, they wanted to create a monster that kills Mosaic so they make a Mozilla. In this instead of waiting for the images to get downloaded they put a placeholder at that point and continue resume parsing, it improved the user experience.

- W3C was not happy about JS surviving in the web after they rejected it. There was a lot more sympathy for Java at W3C then JS, so over these years they have been trying to replace the API with something that would be more friendly for Java than for JS, even though the Java has never lived in browsers in this way. So, they added methods like getAttribute() and setAttribute().

- CSS and DOM were both designed about the same time and each project was aware of the other. The guy who designed CSS was aware that someday programming language were going to manipulate style sheets, he thought that was a certainty, and yet he choose to use the minus sign as a hyphen, knowing that most of our programming languages want to do subtraction with it and this creates syntactic difficulty for all of us.

- The W3C standard doesn’t provide access to the HTML parser, all browsers implement MS innerHTML property but it is a security hazard.

- Browsers are really good at is parsing HTML and they can do that really quickly and they can get the whole thing done in one transaction whereas messing with the DOM, every time we touch the DOM we are going to pay a big time penalty.

- Netscape 2 version introduced the Events, the browser has an even-driven, single threaded programming model. Events are targeted to particular nodes; events cause the invocation of event handler functions. The target is the topmost (z-index) node containing the cursor.

- Trickling and Bubbling – MS choose the bubbling approach which was correct way to do it.

- The reason that JSON requires quotes around its names was because of this deign problem in ES3 which got fixed in ES5 in which we can use the reserved word on property names

- The Object.create() is a primitive which makes a new object that inherits from another object. It gives us a direct way of doing prototypal inheritance.

- Meta object API – a property is a named collection of attributes, earlier this api wasn’t exposed for outside world.

![typescript-meta-object-api](typescript-meta-object-api)

- We can stop object extensibility by using preventExtensions() method, the object won’t accept new property assignment. The freeze() stop its extension and also make all property as read-only and immutable. By this we can pass this object to third party and be confident that third party can’t be able to corrupt this object

- Currying function – the process of taking a function with multiple arguments and turning into multiple arguments and turning into multiple functions that take a single argument is called currying. It is named after Haskell Curry who is a mathematician. By normalizing all functions to take only one argument, it made a lot of operations easier to think about.

- Object.toString() doesn’t show you anything about what it is in the object so it is useless, so we need to use JSON.stringify()

- Retursion -it is when we have a function that returns itself. In recursion a function calls itself.

- We have two distinct kind of objects, we have objects which just contain data, only data, and objects contain only functions, which are frozen, and those objects are very strong and very reliable, they cannot be tempered with, they provide the interface for dealing with the objects which are containing the data. By this we can create good API which can defend themselves, which can remain robust in the face of all the confusion happening inside our system. So, in above image put data in member variables.

- Event driven model was inspired by HyperCard

![typescript-hyper-card](typescript-hyper-card)

- In node.js we got non-blocking file i/o which is the main advantage. Node.js implements a web server in a JS event loop. It is a high-performance event pump.

- Servers are significantly different than browsers, in a server, we are not dealing with events, we are dealing with messages like messages coming from network, we will do something, we will send another message out.

- It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to subtract.

- Danger driven development – where we are doing crazy reckless stuff in the code just to keep in interesting. Always take the time to code well.

- In ES6 there is proper tail calls, so the compiler will turn that into a jump instead of a call return. It will go a little faster, take less memory in getting there. It enables continuation passing style, by this JS become finally become the real functional programming language.

- Everything takes at least generation, is because we don’t change minds, we have to wait for a generation to retire or die before we can get critical mass on the next new idea. And that’s the way progress goes.

- The big advantage in prototypal systems is we eliminate or reduce coupling between classes unlike classification inheritance.

- In 40s when the first Von Neumann machines start coming online they are integer-only machines, but most of the programmers are mathematicians and they are trying to figure out how to do read computation and it is hard, they were trying to do stuff with scaled integers and it is lot of work, and it is error prone. And someone figures out floating point, that we will have two numbers per number, one is the number itself and other is a scale factor, which tells us how many positions to move the decimal point. Then we can just give it to a subroutine, and subroutine will figure out how to add these things. And it worked and it made programming much easier to do. Unfortunately, those libraries were really slow. So, when we get to the 50s, there is now interest in putting floating point into hardware, but we were making out stuff of tubes, and it is hard to do. Someone has figured it out that if we use binary floating pinot instead of decimal floating point, we don’t have to implement a dive by 10 in order to do a scaling, we can just shift 1 bit, which is free. That worked great for scientific computing because in scientific computing, our lower digits are probably wrong anyway, but it doesn’t work for business processing because they are adding up money and they need to be exact. They have to give the cents exact. So, even successor like java is not good with business types, that is the tragedy we are in now. The solution might be below, this might be only 1 number system which a future language needs to be adopt –

![typescript-dec-64](typescript-dec-64)

- If we are adding integers in a software implementation, it can add two integers and five instructions, in a hardware implementation adding integers should happen in once cycle, which means we don’t need to have int as a separate type in order to get performance. We can get performance and range of values that we need in one number type.

- CSS was designed to format technical document, that was its purpose of life, but that is not what we use it for. We use it for all kinds of stuff that it is very badly suited for. We use it as it is only option.

