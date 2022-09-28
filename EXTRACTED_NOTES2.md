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

- 
