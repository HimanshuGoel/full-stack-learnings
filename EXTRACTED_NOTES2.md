## HTML

- HyperText Markup Language – HTML is the language that we use to create document that we want to share across the world wide we or more appropriately across the internet. HTML was created to share research documents which includes text, data, images, and all linked together.

- We should not have plan text into HTML it should be enclosed in some element like div or span.

- The doctype declaration let the client know which standards we are following.

- <head> tag is used for metadata information which includes title, meta elements, script, style, link, base. The link specifies the related documents and base specify base address for all relative links on the page.

- Block vs. Inline – Block elements are container for elements for grouping they can contain other block elements and in-line element example – paragraph.  Block level element will start from new a new line.

- Use ‘&nbsp;’ for telling browser, do not break at this particular point. So, when we resize the browser it will not break that words in between but it show it as a whole in any line.

- We used links to linking within a document or another document. Likes can be absolute or relative. If files on the server use absolute path, or if they in our local site content folder then use relative path.

- History of HTML5 – WHATWG accounted that it will no longer work on named versions of HTML so there will be no HTML6, HTML7, but the HTML spec is now a living standard. So HTML 5 no longer exists as new features are found in living standard.

![html-history](html-history)

- Standard Bodies for HTML – W3C, WHATWG, ECMASCRIPT

- Inbuilt APIs - Elements with API – canvas, audio, video, Forms element – meter, progress, math, data-list, New JavaScript APIs –  canvas, web animations, Interaction, events and messaging APIs -  battery status, clipboard API and events, cross document messaging, device and screen orientation, full screen, geolocation, media capture, notifications, touch events, vibration
Storage and files APIs – Blob URL’s File API, File Reader, IndexedDB, Local Storage, Real time communication APIs – Push API, server sent events, web sockets

- Fallbacks and Polyfills – fall back is to provide similar functionality as a native feature but maybe just with a different API. A Polyfills, on the other hand, is meant to replicate the exact same interface as well as functionality as how the native implementation would be built in the browser. For this use www.html5please.com website.

- Types of images
    - Vector – used for displaying simple images, and we can enlarge them without losing pixels. The image is made of a set of instructions of how to draw an image. It is rendered on fly when image is displayed.
    - Raster image – jpeg, png or gif. These are images with a set dimension where every pixel within the defined space of the image has a designated colour. These are great for pictures but will lose pixels when enlarge. HTML5 canvas works upon raster images. 
    - Canvas -  it is just a drawing surface. We can draw shapes, apply colours and even manipulate images on the canvas. Due to rasterized nature of the canvas gives us a pixel by pixel control of that drawing surface. It uses underline grid system.

- Semantic HTML – mark-up that conveys meaning about its contents. It is mostly beneficial for the machines and also helps human too. Tags – small, footer, address. HTML mark-up is also used by search engines and screen readers and machine are not smart enough to understand the meaning of content.

- We should avoid using generic elements, inconsistent structure, presentational (CSS) mark-up into HTML. Like we should not use <strong/> tag just to bold a text, we should use it if we wanted to give text more important to other text. It should not use just for presentational purpose.

- Sectioning elements – elements whose intended use in to divide content up into logical sections like div, aside, article, section, figure, main, address, header, nav, footer

- To enable the proper parsing, use doctype tag on first line of the HTML page. Specify the lang attribute for main language of the page it is important for screen reader. For proper parsing and rendering use http-equiv and content attributes.

- To avoid CSS styles and JavaScript scripts to override our DOM subtree, The shadow DOM seeks to solve these systemic problems by creating an encapsulate spot to define our mark-up in CSS by creating a hidden and encapsulate subtree that is separate from the light DOM. Shadow DOM in native HTML like video, date, input type range tag. To see the shadow DOM, we need to enable setting “show user agent shadow DEOM” in browser. Native elements already using shadow DOM.

- Shadow DOM alternatives – we have iframe but it is clunky to read, undescriptive, excessive encapsulation, no clean API. We also have canvas but has accessibility issues, seo issues, can not easily compose, cannot extent existing elements.
Shadow DOM encapsulates DOM subtrees and styles. Shadow DOM is like an iframe without all the baggage in a friendlier API

- Web real time communication lets us incorporate peer to peer video, audio and data communication in the browser without any plug-ins. Use cases and inspiration of WebRTC

![html-webrtc-usecases](html-webrtc-usecases)

- History of web

    ![html-history-of-web](html-history-of-web)
    
 - What is WWW – is an information space where documents and other web resources are identified by URL in linked by hypertext links and can be accessed via the internet. The internet has been around since the 80s and the web has been around since the 90s.
![html-history-of-html](html-history-of-html)
- History of css
    
![html-history-of-css](html-history-of-css)
    
CSS is the styling mechanism for the web. It is a standard of selectors, properties and attributes. As it is just a standard so it doesn’t do anything, it just tells the people of created the web browsers how to interpret the CSS language and how to style HTML with it.
    
- History of JavaScript
    
[html-history-of-javascript](html-history-of-javascript)
    
- Html file naming conventions – always start with a lowercase letter, no special characters, no spaces, hyphens, underscores, or camel case can be used for file names with multiple word. Index.html is the standard name for a home page, browser looks for this name page to display as your lading or home page.

- HTML is made up of tags, tags tell the browser where an element should start and end. Tags should be lowercase, and each tag and its content is an HTML element.

- For checkbox and radio box, wrapped them into <legend> and <fieldset> tags
    
  - Disabled field doesn’t get included into form data submit, but read-only field will be included. Generally, we use read-only if that user has filled its value in previous page and we don’t allow to edit it on current page.
    
 - ID vs Class attributes – use class attribute for styling instead of id.
    
    ![html-id-vs-class-attribute](html-id-vs-class-attribute)

- If images are deemed as part of the content, we should add it as HTML. If its is there for presentation and style, it should be added using CSS.
    
- SASS has two different syntax, the original SASS syntax a bit different from CSS. It essentially removes the curly braces and semicolons from CSS, and it relies on white space. Because of this we can’t take a CSS spreadsheet and change the extension and treat it as SASS. So, for exiting projects with large CSS stylesheet porting to SASS is problematic. Due to this an alternative syntax has been developed by name SCSS. SASS is built on Ruby, LESS and Stylus built on Node.

- Responsive Page - text, images, buttons size become large/small, also page layout changes based on screen size changes. We can use media queries for it
    
- Cookies are just additional pieces of information that the server asks the browser to store and send back to the server with every request. But now local storage is preferred. These generally stores authentication and configuration related information which server needs to see in any request. In JavaScript object we can define properties that are functions, in JSON functions are not a legal property.

 - Page request lifecycle: when we request a webpage in our browser, either by clicking a link to a new page or typing a URL in the browser. The server sends down the HTML to our page in the body of the response. Now after this browser has received the HTML it begins processing it. And part of that processing is to look four kind of different directions in the HTML i.e. CSS links, scripts tags of the source attributes, image tags, and font face directives in CSS rules. New requests were made based on these and response included their assets.

- App shell architecture – cached shell loads instantly on repeat visits, it is a main u ser interface for our application without any content. by this we can avoid showing black page while loading which frustrates users.
    
- We will use the service worker to cache the app shell. The cache API is a cache storage for requests and responses, it is a pre-requisite for service workers. It stores values in key value pairs, and available from window scope and service worker scope. Like below it will cache the entire request and response.
    
- Web worker – a script running int the background. It initiated from the main document, runs separately from main document and doesn’t have access to the DOM. It is often used as a programmable network proxy which lets you control incoming and outgoing network request. We can combine it with the cache API to serve requests from the cache. Specially if network request fails from server, it can handle it
    
![html-service-worker-life-cycle](html-service-worker-life-cycle)
    
 - Workbox caching strategies –
    
    ![html-workbox-cache-stratergies](html-workbox-cache-stratergies)
    
- Browser cache, if files are already in browser cache then it will not make request to sever for them. In application, all the cache files will be in grouped to a single manifest file. We should not mix browser caching and application caching. In browser, we can specify when a file will be expired, but in application cache we can only send updated files if we change the manifest file.
    
 - Web storage comes in two flavour in local storage and session base. Security is per session and per domain. Capacity is between 2 to 10 MB. Web storage is client only (don’t need to send every time to the server) and larger capacity unlike cookies. It has simple API, key/value pair and widespread availability.
    
- Web workers – it brings background threading as a first-class citizen to web browsers. We can splice an intensive process logic into a worker and it will run independent of the UI thread.

 - Two types – dedicated (linked to browser that spawned the worker so it has a very tight relationship), shared (runs in the background and basically any script that’s running within that domain can send messages to that worker. It is largely unimplemented in browser currently.).

- The data which is stored in a sandbox so if website A creates it then it cannot be access by website B. local storage will work as session storage if working in private mode. Data is serialized to file system in a hard drive outside of the browser. It is synchronous.
    
- Browser represent a web page in memory is through the document object model.

- Using javascript we cannot set a class using .class, we need to use classList as class is a reserved word.
    
- To indicate emphasis use italic tag in the text, we can use <em> for meaning purpose and <i> for just styling purpose. So, use <em> not <i>, same with use <strong> not <b>.
    
- HTML is derived from SGML.
    
 - Why should we structure our text – users can get to information quickly, enables accessibility tools to understand information, enables browsers to style the content, helps search engines to understand content.
    
- The term progressive enhancement refers to the use of newer features that add to the experience in modern browsers that support those features, but doesn’t detract from the experience in older browsers.
    
- URL part composition
    
    ![html-url-parts-composition](html-url-parts-composition)

## CSS
    
- types of selectors - The pseudo classes are just something that the browser will implicitly apply.

![css-types-of-selectors](css-types-of-selectors)

- The 1.0em; states for the size which is default to the page. If we say width: 50%; then it will be half of its parent width.

- We also have a star selector which matches everything on the page:

```css
*
{
color: White
}
```

- Ordering rules – if two conflicting rules are coming from the same source it just uses the last rule.

- CSS Reset – it is a stylesheet that effectively override the default styles given by a web browser for all HTML elements. Because every browser has slightly different default styles, it will remove this different in style by making it all to reset. There are many available like from yahoo, meyerweb.com. we need to just give the reference of that stylesheet to our main page.

- Specificity – the higher is the specificity number the more important the rule is. It contains 3 parts ABC like below:

![css-specificity](css-specificity)

- Inheritance – some property values of an element will be inherited form the elements parents. Like text in div which is inside paragraph will inherit paragraph font size. But border, margin, paddings will not inherited form the parents. So, border set on paragraph will not have border on div or em or other tags inside it.

- Vertical margins collapse – when top and bottom margins meet they will overlap or collapse, technically the will overlap until one of the margins touches the border. But horizontal margins do not collapse.

- Width – when we specify the exact width it will specify of the content area. Any border, margin, or padding that we add will add to the width and require more space.

![css-width](css-width)

- Layout with CSS - default position value is static. it stacked up elements one after the other down the page. relative position moves an element from its default position in some direction.  we can set the top and left properties values. fixed and absolute removes the elements from the flow of documents.  Absolute position moves an element to a specific position relative to the body of the document the top and left will be consider from the body element. while fixed position is relative to the window itself. When we apply relative position, we can set top or left kind of properties on it, it is unlike the padding and margin. It will sit on top on the element instead of just pushing them around.

![css-position](css-position)

- Fixed positioning – it fixes the position of an element relative to the browser window. The element always stays fixed in place, even when scrolling. Generally, we use this in menu bar or navigation.

- Absolute positioning – it will not scroll with the browser window unlike fixed positioning. It takes an element out of the document flow, meaning the browser acts as if the element has no width and height, and the other elements on the page move up as if it was never there.

- By default, if the element is inside a container and we apply absolute on the element then it will relative to the body top left corner, but if we apply absolute on the container as well then it will be relative to that container.

- Relative Positioning -  in this, other elements do not ignore its width and height. It doesn’t take out from the document flow. The original space will be maintained. The bottom: 0 value will make it to stay as it is because the bottom will be the same bottom of the element unlike absolute which will move it to the bottom of the window. And setting the position of the container element as relative does nothing at all unlike absolute positioning. If we have container with relative positioning and element as absolute, then the element will be relative to the container.

- Z-index – it allows us to control the stacking order of the elements. It will start from the negative value -1 and all the way up to highest z-index value.

- We should not have an orphan character on a new line, we can use typogrify module to make last two letters with “no break space” on every line.

- The full form of SASS is syntactically awesome stylesheets.

- Instead of putting money to make UI better for older browser which market is going down, we should put it in the modern browser to make it better for future.

- Visual break points in Bootstrap

![css-bootstrap-visual-break-points](css-bootstrap-visual-break-points)

- types of selectors - relational, atribute, structural

- Relational selectors 

![css-relational-selectors](css-relational-selectors)


- Other selectors

![css-other-selectors](css-other-selectors)

- Earlier we use table-based layout, then fluid-based layout came, now flexbox is the latest layout technique.

- The full name of flexbox is flexible box module, it is an extension of display property. It is a set of CSS properties to create flexible layouts and distributing extra space and aligning content. Because in CSS block, inline, table and positioning properties do not provide enough control for flexible layout, it becomes hacky and awkward to layout some more complex web applications which is why flexbox has been created.

- Flexbox is all about the relationship between a parent container and its direct descendant child items named by flex-container and flex-items. Flexbox was made for layout, float was not.

- Flexbox controls how items flow in one dimension, where the grid controls how items flow in two dimensions. Flexbox is great in handling alignment, distribution and order of content in space. CSS grid on the other hand is suited to lay items out in both dimensions. CSS grid, like flexbox, is all about the relationship between parent container and child items, grid-container, grid-items. It establishes a grid context for its children.


![css-flexlayout-vs-grid](css-flexlayout-vs-grid)

- Responsive web design is a technique for creating a website that adapts to accommodate various device widths. It involves Fluid Grid, media queries, flexible images.

- raster vs. vector images

![css-raster-vs-vector-images](css-raster-vs-vector-images)

- JPEG format usage: progressive JPEG means it will render with the lowest quality first then get improved over time, unlike normal JPEG which gets render line by line paint with full quality. It is a best format for photos, lossy compression and progressive.

- Other formats - GIF (now a days use in animation only), PNG (lossy compression not as much as JPEG, mainly used to allow trasnparency scenario), WEBP (created by goodgle, animation and transparency, limited browser support), SVG (XML vector image format, pionts, lines, shapes, resolution independent).

- We use use SVG images wherever possible.

- Lossy optimizer and lossless optimizer: the lossless compression will remove lots of metadata/properties information from the file without affecting its visual quality unlike lossy which don’t remove the metadata info but other data related to visual looks.

- Use radio buttons for less than 5 options, use dropdown for more than 5 options.

- CSS is crafted to be simple, but scaling simplicity is difficult. It is Sass not SASS, full form is syntactically awesome stylesheets. Its extension is “.scss”.

- Responsive design got started when Steve Jobs launched iPhone in 2007 with web browser. Four mobile strategy - ignore them, build a seperate mobile web site, build an appfor the apple store, build a responsive site

- We should follow mobile first approach, then add media queries rules medium and large screen as required. So, we don’t have to add media queries in CSS reset and small screen. Due to this maximum CSS style rules will in small.css, then fewer in medium.css and few in large.css:

![css-mobile-first-approach-style-files](css-mobile-first-approach-style-files)

- In progressive enhancement we first apply rule for small screen then by media query apply rules for medium screen and then finally for large screen.

- Icons are vector based not pixel-based like the sprites, this means icons are very smooth specially on screens with high resolutions.

- The flexbox model provides an efficient way to layout a line and distribute space among elements within our document. By this we can control the layout of children in a parent container. We can tell the children to line up left to right or right to left, or top to bottom or bottom to top, we can tell them fit on one line or wrapped to multiple lines. We can control the spacing around images and text and align the items either top or bottom. By this we can make responsive design much easier. We can use flexbox for creating an image gallery website.

- The Origins of Styling Scroll - 1920’s cartoons are the earlier example of scrolling effect, often used when character was walking. In 1980’s video games used the same technique as cartoons but added triggers which increase interest. Web designers began using parallax scrolling in 2011, Early design used only 2 layers.

- In 2007 iPhone release a phone in which he made the browser tell a lie to the website that it is having desktop size browser and then it shrinking the size to fit on the mobile, in other mobile on those days were not able to render complete website and making the website unusable. But as a responsive design now a days we want to know the actual size of browser on mobile not a lie, so we need to add below tag.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0. maxium-scale=1.0. user-scalable=0" />
```

- Pseudo classes allow us to conditionally select an element based on state or position, they start with a colon (:).

- 12 column grid layout – it has history in newspaper because when we had multiple editions coming out in a single day, we need to lay them out quickly and 12 columns can easily be divided into halves, quarters or thirds. So, it is an easy layout to achieve.

- The data-* attributes on HTML allows us to store extra information on standard, semantic HTML elements without other hacks, such as non-standard attributes, extra properties on DOM, or Node.setUserData(). So, they are allows us to target javascript.

- By using forkJoin we can make two calls simultaneously, it is like q.all() functionality in promises, these calls will happen in parallel.

- Popover – It is like tooltip but gives us additional features like title. Tooltips are usually smalls, quick hints, and appear on hover. Popovers have an explicit title area and get additional related content. They are generally bigger and typically dismiss with click rather than hover status, popovers are more like a modal.

- Fonts of a typeface – 

![css-fonts-of-a-typeface](css-fonts-of-a-typeface)

- Anatomy of typeface –

![css-anatomy-of-a-typeface](css-anatomy-of-a-typeface)

- Hyphenation – dividing words at the end of a line. Doesn’t look clean. No clear advantage. On digital application do not hyphenate.

![css-hyphenation](css-hyphenation)

- Don’t put indent first paragraph in digital world –

![css-indent](css-indent)

- Use all caps sparingly – instead of this try to use title cases

- Pull quotes – it should not be a copy of original text.

![css-pull-quotes](css-pull-quotes)

- Use maximum two different typefaces in the application like serif and sans-serif. Like one for header and another for content. We can use website fontjoy.com and fontinuse.com for font pairing.

- Font file types –TrueType (.TTF), OpenType (.OTF), Web Open Font Format (.WOFF), Embedded Open Type (.EOT)

- Pseudo-classes - :hover, :nth-of-type, :first-of-type, :last-of-type, :nth-child, :first-child, :last-child

- CSS grid properties –

![css-grid-properties](css-grid-properties)

- When not to use flexbox – they are good for simple layout where we can control over the components. But they are not meant for complex application grid systems. Better suited for individual components. So, should use more CSS grids instead of flexbox on entire page. Flexbox provide limited control over order. CSS grids provides better control over text layouts.

- Building colors in RGB

![css-rgb-colors](css-rgb-colors)

- Different ways to represent colors – RGB, CYMK, HSL, HSV and Pantone. RGB rules the world.

- Choosing an image format (bitmap, tiff, compressed TIFF, gif, jpeg) only gif and jpeg can be used over the internet. Use gif for illustrations, logs and backgrounds and jpeg for photographs. We don’t use gif for photos because the compression would be lousy and if we use jpeg for illustration then its compression will be lousy.

- Portable network graphics (PiNG) because GIF compression was patented. PiNG (PNG) provides lossless compression means we can save it over and over again without losing information. JPEG still have smaller size than PNG. But PNGs don’t do animation. GIF and PNG can do transparency, JPEG cannot. Transparency allows the color of the parent layer to shine through. So, use PNG unless we are sure you need JPEG, JPEG compression is lossy, don’t use for working copies. 

- Rater vs. vector based images – for vector we use .svg files -

![css-raster-vs-vector-images2](css-raster-vs-vector-images2)

- CSS filters – we can apply effects on images or other elements. Supported filters – blur, brigtness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepie

- What is missing in CSS – no CSS constant and no cross browser supports, for this we should use SASS. SASS is the technology platform and SCSS is syntax. It has more features like nested style as below second one is more cleaner with SASS. SASS modules – color, list, map, math, meta, selector, string.

- Difference between without and with fluid container in flexbox – The grid will take all unused horizontal space.

- Theme colors –

![css-theme-colors](css-theme-colors)

- Flexbox is a collection of CSS properties used to align content and distribute space. It includes concepts such as flex containers, flex items and flex lines. Flex containers control layout of child items.

## Angular
    
- Angular 1 is an MVC pattern, but Angular 2 is component-based pattern, it is like a directive in angular 1 but smoother.

- The interpolation {{}} represents one-way binding.

- Using template reference variable to interact with child components – this variable allows us to specify a variable name that points to a component and then we can access any public properties and method on that component using that variable.

- Angular need to know the exact URL where our app is hosted, so that it can knows what its routes are relative to so that it can parse the URL. For this we need to provide the base tag in our index.html.

- Content project is an ability to change the content inside of a component based on the needs of the application. Like a dialog box and reuse it with different pieces of content for save and cancel button or reposting logic. This is called transclusion in angular JS. In multiple slot projection we have more than one slot into which the variable content can go. We need to use ng-content tag which will tell angular whatever content exists inside of my component, put it inside of it.

- Mutability – objects and arrays in JavaScript are mutable; they can change any time without changing their identity. By default, angular only runs a pipe when the identity of the source has changed. Using impure pipes, it runs on every cycle of the change detection engine, this method of executing the filtering or sorting code every time change detection runs is how angular JS filter worked. Pipes are no longer recommended as the way to filter and sort our data. We should do it ourselves using component so that we can filter and sort the data when source gets changed by ourselves.

- We should not use global objects of third party services inside the application, if we do this then we won’t be able to use concepts ES6 modules, tree shaking, and also it is bad practice.

- Angular dependency injection lookup – whenever we provide a class into providers, angular takes it and provide an instance for that class using constructor function. In angular 1 we use strings to register the dependencies, in angular 2 we are using classes or types, that is our keys or in other words our token.

- Using OpaqueToken for dependency injection, angular 2 provide a mechanism for us to create a key or token that we can use in the dependency injector without creating a class. Its job is simply to create a token used for the DI registry in order to find the instance of the object we want.

- The useExisting and useFactory Providers – whenever somebody will ask for the MinimalLogger they will get the instance of the Logger, but they will see only those methods that are on minimal logger API that you actually want to use. useFactory allows us to parameterize the creation of an object. We use this when we need to have a very complex way to construct an instance of a class to use as a service.

- For integration test angular use TestBed utility construct the component, unlike unit test where we ourselves construct the component, in integration test angular does that sing TestBed. It also constructs a module for us to be used in the test run for the component to operate in a realistic environment.

- Using debug element – debugEl has a query method which we can use to select from the root node using “By” predicate.

![angular-debug-element](angular-debug-element)

- Tree shaking removes the properties and functions from production build code that is never called.

- Enable production mode by calling enableProdMode(), the development runs an extra step though angular 2 change detection process. When it’s all done running change detection, it runs it one more time to make sure that nothing has changed. So, in production mode we want to disable this feature.

- Ahead of time compiler (AOT) benefits – in this precompiling our application like compiling template. We need to install compiler itself from platform-server. With AOT we cannot use full path but relative path. It provides faster rendering, fewer requests, detect template errors, better security.

- Optimistic bundle download – eager lazy loading of the module. It will download it as soon as there is available download. We do not want to wait to render the application until it is downloaded.

![angular-preload-all-modules](angular-preload-all-modules)

- Using a Testbed – Using fixture gives us a hold on the component, but not just its class with its method and properties but also its template, the actual HTML template. We can inspect the template, change it, ask angular to run change detection and expect, this is also a main benefit of testbed to able to get a hold of this fixture. Also using Testbed, we can setup the dependencies in a bit of an easier way. Testbed is also just an angular module.

- If we set schemas: [NO_ERRORS_SCHEMA], it means we are testing shallow components, so angular won’t give error any error as it won’t render the child components. In provider if we use useClass or useValue then while doing dependency injection it will pass the instance of that class or value.

- For change detection angular is used zone library, zone listen all the asynchronous activity in a zone. It has a queue of asynchronous activity that it listens for and it waits until it finishes. So we can utilize this concepts using testbed to be able to know when these asynchronous activity is finished versus doing a “done” call-back as in traditional approach.

- Fake Async in the tests – we need to wrap the test in fakeAsync method, it allows us to fake time. Using tick() method to fake time while using fakeAsync. Working with Async – it helps us to wait for while selecting any DOM to do test deep / child component as integrated test. We use a method fixture.whenStable() for this type of testing.

- The nativeElement property exposes the regular old browser’s DOM API to work with template. There is an another property called debugElement() it is like nativeElement() and it has a way to access to root element of our template. It has some different set of functionalities that is very similar to nativeElement.

- To make the ngOnInit() method to get called as a lifecycle event we need to raise changeDetect() event. We can manually call ngOnInit() but it is not recommended approach.

- Using the fakeAsync helper function to avoid slowness and increase readability. We can use tick() function to call any code that should be called inside of that timeframe, then we can call our expect() statement. The reason we can do this is because angular itself funs inside of zone.js and fakeAsync function makes this code run in a special kind of zone, that zone.js will create that allows us to essentially control the clock inside of that zone. So, we can tell it to tick forward.

- If we don’t know the actual tick times then use flush() it will make zone.js to run all the pending tasks in its queue.

- Using the async helper function – it works with promises. Promises are also asynchronous. It also utilizes the same concept of zone.js. it is also a part of angular core testing module. It will ask our component to wait until it has stabilized. The component understands when it sees a promise inside of itself that hasn’t yet been stabilized until that promise resolves. But async() doesn’t deal well with setTimeouts.

- fakeAsync can work with both a promise and a setTimeout and with all other asynchronous types of code. But async is only works well with promises. We should prefer using fakeAsync approach.

- Interceptors allows us to write a small bit of code figure in a single place and apply to all of the HTTP request and responses. They are like services and implement the HttpInterceptor interface. They manipulate HTTP requests before they are sent to the server. They also manipulate the responses before they are returned to our app. Uses for interceptors – adding headers to all requests, logging, reporting progress events, client-side caching.

- Angular HTTP testing utilities – HttpClientTestingModule, HttpTestingController. TestBed utility configures the environmental to run our unit tests, it also implements angular inject interface due to which we can inject the classes which we need in our test.

- Types of directives – component, attribute directive, structural directive. An attribute directive changes the appearance or behaviour of a DOM element. It makes DOM more dynamic, responding to run-time environments and quick & easy to reuse.

- Pipes modify data for display only. types - async, currency, date, decimal, json, lowercase, percent, slice, titlecase, uppercase

- Query decorator - if template is inside view then use @ViewChild otherwise @ContentChild if template is inside component

![angular-query-decorator](angular-query-decorator)

- Directive selectors

![angular-directive-selectors](angular-directive-selectors)

- Native element using cautions – it tight couple our back-end code with front-end presentation, it is unavailable in angular universal, and we cannot move any logic directly using nativeElement into a web worker. So, if we use it property then these problems will not arise. For this we should use Renderer2 class.

- Building templates with ngTemplate – by default it’s just add an empty element as comment <!----> on DOM. We can also use it with ngIf-then-else condition:

![angular-ng-tempalte](angular-ng-tempalte)

- NgTempalteOutlet – by this we can decide the position of template to display on the DOM, other use-cases can be alternate UI, repeated UI elements, dynamic UI placement:

![angular-ng-tempalte-outlet.png](angular-ng-tempalte-outlet.png)

- ngTemplateOutlet Context: we can pass some JSON which will alter the templateOutlet, it is useful for simple template modification scenarios:

![angular-ng-tempalte-outlet-context.png](angular-ng-tempalte-outlet-context.png)

- Dynamic component creation - *ngComponentOutlet, ComponentFactoryResolver, resolveComponentFactory

- Use ng-container wherever possible instead of div or span.

![angular-ng-container](angular-ng-container)

- ngSwitch Bloat – instead of this use NgTemplateOutlet:

![angualr-avoid-switch-bloat](angualr-avoid-switch-bloat)

- A pipe shouldn’t do a lot, for this a component will be a better choice. All built-in pipe are pure, except - splice, json, async

- A better ngFor while iterating collections using trackBy function so that while manipulating the collection angular don’t have to re-create it on the DOM

- Angular lifecycle hooks – the blue blocks hooks don’t available in directives only in components:

![angular-lifecycle-hooks](angular-lifecycle-hooks)

![angular-lifecycle-hooks-playground.png](angular-lifecycle-hooks-playground.png)

![angular-lifecycle-hooks-playground2.png](angular-lifecycle-hooks-playground2.png)

- Angular treats the UI as a DMZ, accessible to anyone untrusted and untrustable. Angular treats all values as untrusted by default. Angular only trusts template HTML, binding expressions, and attributes. It will sanitize or cleanse any content it doesn’t trust before adding it to the DOM. It will still display it like a script by converting first into simple string text so that browser doesn’t parse it.

