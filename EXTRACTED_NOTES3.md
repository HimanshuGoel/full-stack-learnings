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
