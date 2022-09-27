# Extracted Learnings

These learnings have been pulled out from various notes acquired from various trainings, articles, books, etc. These learnings can be considered as a quick reference notes in case of a brush up on a particular topic.

## Table of Contents

- [Extracted Learnings](#extracted-learnings)
  - [Table of Contents](#table-of-contents)
  - [VS Code](#vs-code)
  - [Angular](#angular)
  - [User Experience](#user-experience)
  - [Unit Testing](#unit-testing)
  - [Typescript](#typescript)
  - [Security](#security)
  - [Node JS](#node-js)
  - [Markdown](#markdown)
  - [Cypress](#cypress)
  - [Git](#git)
  - [Others](#others)
  - [Accessibility](#accessibility)
  - [Data Structures](#data-structures)
  - [Angular JS](#angular-js)

## VS Code

- Fast, cross platform, intellisense and auto complete, debugging, rich refactoring, sits perfectly between editor and IDE.

- What is Editor - lightweight/fast, file/folders, many languages, many workflows, keyboard centered

- What is IDE - project systems, code understanding, debug, integrated build, file->new, wizards, designers, ALM integration, platform tools

- Electron is a native shell for widows, mac, and Linux that hosts JavaScript-based app like Monaco. Visual studio code is a combination of Monaco and Electron.

- Installing extension locally – copy your extension to the VS code extension directory. (windows - %USERPROFILE%\.vscode\extensions)

## Angular

- Angular is a tool to help you build interactive websites, you can call it a framework. It provides tools to communicate with the server and to improve the performance, package application, maintain state, organize code/logic, ease display of data, synchronize state as it changes.

- Angular 2 is more standard based (modern web standards), modern (state management, change detection, etc.), more performant.

- Angular releases major version every 6 months, 6 months of active support and 12 months of LTS support (only security and bug fixes, no new features unlike active support).

- Universal benefits – reduction of cost, standards compliance, extremely performance, open source, use typescript, backed by Google, very uniformity (make onboarding new developers cheaper and simpler), amazing documentation.

- It indirectly provides environment for router, HTTP, forms, RxJS, etc. Already configured with Typescript no need extra to configure, opinionated means fewer decisions to take. Provides support for progressive web apps, lazy-loading, fully reactive forms library support, fully featured router, animations library, supports strictly typed forms.

- Angular also supports server-side rendering, mobile friendly, angular language service (Intellisense and better debugging in templates).

- Components – building blocks of modularity. It breaks up display of application in manageable chunks. It has display and logic.

- Services are a place to put logic which is not related with the display like checking more than article reading limit has been crossed or not.

- Directives are a way to give existing tag a new functionality like making elements or appear on hove, control the visibility, etc.

- Pipes is used, to format the data to display like uppercase.

- Modules are not optional in angular 14. It is a grouping of other features like services, components, pipe and directives, it can also include other modules.

- Application state gets changes on user interaction, http service response or by timer execution.

- Efficient change detection – first the state gets change then cascading changes occurs and finally re-render of page.

- Inefficient change detection – the system is not smart enough to identify the cascading changes and re-render the UI multiple times.

- Zone.js is a wrapper on the things which can change the state change like user interactions, http and timers, it knows when these things gets completed. Angular then subscribed to notification from zone.js so that it can run the change detection and re-render the display.

  ![Angular Zone](./src/assets/snipping/angular-zone.png)

- Rendering targets provided by angular – browser/DOM, server-side, native mobile apps, native desktop apps.

- Angular CLI solves JS fatigue problem which setting up the JS environment to build an application.

- Server side rendering – increase performance as initial download size gets reduced, increase render time, search engine optimization. Modes – full pre-render, dynamic pre-render, client-side switch.

- To build the native mobile apps with angular, there are two common tools ionic and NativeScript. For Native desktop, we need to use Electron.

- Angular testing utilities – TestBed – helpful in testing component with templates. It helps to constructs component in small, live, angular environment and gives us handles to wrapper around component and DOM created by its model. Async and fakeAsync, MockBackend.

- AOT – browser needs to compile the templates into DOM Functions i.e. the actual views. The AOT does it during the compile time itself.

## User Experience

- Software has to work and be easy and enjoyable to work. User can easily and quickly accomplish their tasks.

- Wireframe types - Low-fidelity, High-fidelity.

- Principles - Alignment, Contrast, Visual hierarchy, Proximity, Layouts, Whitespace, Consistency.

- UX Testability

  - Visibility of System Status - the system should always keep users informed about what is going on, through appropriate feedback within reasonable time. Like showing username on login, showing copy/delete progress windows OS.
  - Match between system and the real world - the system should speak the user's language, with words, phrases and concepts familiar to user. Like not using words like `Accept/Decline` but `Save password/Nope`.
  - Error prevention - like showing auto-complete, showing confirm dialog before deleting the record.
  - Recognition rather than recall - showing dropdown, intellisense

- The good user experience has 3 desired results – happy, satisfied and productive. Our ultimate results should be delighted, contented, and empowered.

- Avoid common pitfalls - throwing data on the screen, exposing tech to the user, forcing the user to think like DBA, Messy UI, coding for expert user.

- 10 UX myths - low friction clicks are okay, vertical scrolling is okay.

- Leading hack - making the user brain work less by leading them to their goal. Showing steps (wizard) on the screen.

- Limit the number of colors used should be 5 or less.

- Reading in upper case takes 10% more time than lower case, so avoid using them.

- A UX developer can bring efficiency, logic, relevance, user advocacy, research, communication, effectiveness, interaction, elegance, simplicity.

- Types of industry - Finance, Education, Retail, Healthcare, Business & IT Services, Research & Development, Government and Defense.

- In natural world there is no monochrome except blue sky overhead on a clear day, even sky is a gradient. So, while creating UI component use gradient from light to dark as top down lighting bias to makes the screen appear as more natural not as artificial monochrome. And the gradient shouldn’t be noticeable and flashy

- Instead of rectangle design, we should use curves. Humans usually prefer curved things over sharp-edged things – curved connotes safety, sharp-edged connotes danger. Curve soften the design and less stressful.

- We should bring the UI element on screen on more gradual way and move that from one place to another in gradual way too or changing the size. Using animation as it feels more natural and don’t surprise or confuse user. While changing the screen from one to another also try to implement a subtle animation. Animation also help in maintaining context.

- When an action is not appropriate, prevent the user from doing it, provide a visual signal that the action is not available, like disabling a button instead of allowing it to click and showing error message or any popup.

- Sliders component are good for numbers with large increments of numbers where the user is not quite so interested in precision.

- Reserve confirmation for very exceptional circumstances, otherwise it will dilute its value like in windows vista. Instead of this we can provide some undo like functionality or show a countdown before making the commit to the database, this is called forgiveness

- Web fonts recommendations

  - ![web-fonts-recommendations1](src/assets/snipping/ux-web-fonts-recommendations1.png)
  - ![web-fonts-recommendations2](src/assets/snipping/ux-web-fonts-recommendations2.png)

- Color meanings

  - ![ux-color-meaning-blue](src/assets/snipping/ux-color-meaning-blue.png)
  - ![ux-color-meaning-brown](src/assets/snipping/ux-color-meaning-brown.png)
  - ![ux-color-meaning-green](src/assets/snipping/ux-color-meaning-green.png)
  - ![ux-color-meaning-orange](src/assets/snipping/ux-color-meaning-orange.png)
  - ![ux-color-meaning-red](src/assets/snipping/ux-color-meaning-red.png)
  - ![ux-color-meaning-violet](src/assets/snipping/ux-color-meaning-violet.png)
  - ![ux-color-meaning-white-black](src/assets/snipping/ux-color-meaning-white-black.png)
  - ![ux-color-meaning-yellow](src/assets/snipping/ux-color-meaning-yellow.png)

- Color preferences
  - ![ux-color-preference-blue](src/assets/snipping/ux-color-preference-blue.png)
  - ![ux-color-preference-green](src/assets/snipping/ux-color-preference-green.png)
  - ![ux-color-preference-orange](src/assets/snipping/ux-color-preference-orange.png)
  - ![ux-color-preference-red](src/assets/snipping/ux-color-preference-red.png)
  - ![ux-color-preference-yellow](src/assets/snipping/ux-color-preference-yellow.png)

## Unit Testing

- In constructor method we should only build objects and prepares them for use. Don’t construct other dependencies, talk to external resources, execute initialization logic or application logic. Don’t write any logic in constructor. Just use assignments. We should inject dependencies assign to the private variables inside constructor.

- Actually, legacy code is the one which doesn’t have automated test for it. It makes the code more brittle and harder to maintain and extend.

- ![TDD History](src/assets/snipping/unit-testing-tdd-history.png)

- Types of testing - unit testing, integration testing, acceptance testing (user interface).

- Immutability – an object can’t change its state. Anytime a method would change the state of the object like pushing an item on a stack, it needs to return a new copy of the object with the change. The previous instant remains unchanged. It helps us in writing concurrent code more easily

- Test doubles - it is a generic term for any kind of pretend object used in place of a real object for testing purpose. Types - stubs, fakes, mocks, spies.

- Stubs provide canned answers to calls made during the test. when a fake is being used as a means to guarantee a certain date is returned. A fake is stub when it needs to be setup before the action so that the action can be controlled better, but the results from the action remain the thing being tested, not the fake itself, for what the mock is used for. When a fake is the thing being tested then it is mock as a assertion.

- Mocks are pre-programmed with expectations which forms a specification to be verified.

- Fakes – to isolate our unit test from external resources like API calls. MOQ is a faking library that will help us avoid some of the boilerplate of faking our tests.

- Unit tests are less brittle that’s why they are preferred a lot. It tests smallest behaviour.

- What is pragmatism? A reasonable and logical way of doing thing. that is based on dealing with specific situations instead of ideas and theories.

- Testing structure types - AAA (Act, Arrange, assert), Behavioral (Given, When, Then)

- Anti-patterns – we should test the overall behavior details instead of implementation details. So, don’t overuse of mock, prefer stub. Focus of return of the function instead of inner details. Tests should be short and to the point.

- Static method should be used only for pure functions like those methods which returns same value for same input, and in future there would be not change needed for those method implementations like math library inbuilt function.

- When adding code to a fixture setup or teardown is that only code that is 100 percent common to all methods should go over there. If a lot not all methods have some common code then use helper method.

- In unit testing don’t use random number to generate random number to test some value, it can generate random failures. So, we should not have random logic.

- We can also have the stub return a certain value if the test subject is expecting a return value. For cases where we are testing interaction behavior we will create a mock that knows it was called, with what parameters and how many times.

- Naming convention of the test method – choose any naming convention for unit tests that works for you and only try to stick with it consistently throughout the project.
- Instead of using the manual mock we should use automatic mock like MOQ library.

- We should avoid loops and branching instruction in tests, they may lead to bugs in testing code. It also reduces the cyclomatic complexity.

- Precondition and post-conditions of a method pattern, like passing an empty array to an method. In this case the caller function should check the param input before calling to the function, in preconditions a Boolean condition which must be satisfied before a method is invoked, in post-condition a Boolean condition which must be satisfied after a method completes

  - Method pre-condition - condition which must be satisfied before method is invoked.
  - Method post-condition - condition which must be satisfied by the invoked method after it executes.

- Try to avoid giving classes same names as interfaces they implement, what is specific to this class. Interface names are operating at abstract levels, class names are operating at implementation levels. Interface names are normally vague, inconclusive, while class names are sharp and to the point.
- If a method does not want to accept null parameter then it should not throw an exception as it would be meaningless to the caller function.

- We should handle exceptions like below -
  ![handling-of-exceptions](src/assets/snipping/unit-testing-how-to-handle-exceptions.png)

- Styles of unit testing – output verification or functional verification, state verification, collaboration verification.

- Writing the test is easier then running the application. Testing is not like frosting on the cake, but it is sugar or flour which needs to bake when we are preparing the cake not in the end. This is also same issue with automation testing.

- We should break into code into two type of classes, one which have business logic and others which make stuffs. Don’t combine both classes.

- Benefits of unit testing – higher quality, fewer defects, living documentation, well-crafted code, automatic regression harness. A unit test confirms functionality of a small unit of functionality or component in a larger system.

- Code refactoring should not change the functionality of the application, in the same way the unit test case should not be fail. Refactoring is like cleaning the kitchen after serving food to customer. It improves readability, maintainability and scalability of code. We should refactor the code after fixing a failing test, before adding a new feature or after identifying a quality problem. Simple refactoring – rename, introduce parameter, extract method.

- Isolating code -

  - Dummy – it is the simplest and most primitive type of test double and will contain no implementation.

    ```typescript
    var person = new Person();
    person.first = 'John';
    person.last = 'Snow';
    Assert.IsNotNull(person.fullName);
    ```

  - Stubs – it is a minimal implementation of a class that likely implements a given interface or some abstract base class. It doesn’t maintain state and leaves method unimplemented like it just return some hard-code value directly:

    ```typescript
    public class StubRepo: IOwnerRepository
    {
    public IOwner FindById(int id){}
    public IOwner save(IOwner owner)
    {
    return new Owner();
    }
    public void Delete(IOwner owner){}
    }
    ```

    - Fake – building on a stub and adding a bit more sophistication is the idea of fake. It contains a bit more complex implementation by having state but not functional implementation. Like below we actually add and delete the list.
      ![unit-testing-fake](src/assets/snipping/unit-testing-fake.png)

    - Spy – it records the information about the interaction that it has with the SUT. This information can be available for assertion purpose by the test itself.

      ![unit-testing-spy](src/assets/snipping/unit-testing-spy.png)

    - Mock – can be used to simulate complex behavior. We should not develop mock our self, we should use mock libraries which allows us to configure mock behavior. Libraries example – type mock, rhino mock and MOQ.

- We can have separate build environment for acceptance test running and can trigger once a day. We can also share it reports to business for progress:
  ![unit-testing-acceptance-testing-progress-report](src/assets/snipping/unit-testing-acceptance-testing-progress-report.png)

- Prudent code coverage – 100% code coverage doesn’t mean no defects. Use code coverage as a developer tool not a performance metric. Let the code coverage find things that are important enough to add test, but realize that it is only contextually important and it is very rare that we need to strive for any sort of code coverage numbers up around 90 and 100%.

- Devi’s advocate, Gollum style and Ping Pong technique to write unit test case:
  ![unit-testing-devils-advocate](src/assets/snipping/unit-testing-devils-advocate.png)
  ![unit-testing-ping-pong](src/assets/snipping/unit-testing-ping-pong.png)

- While creating an interface it should either contains all properties or all functions not both.

- It is not creation of millions of objects that keep application from being efficient but it is rather the efficiency of methods that we are executing that may make it slow. So, we can create many objects using immutable objects without causing any performance issue.

- We should only throw exception if there is no way for the application to continue working under circumstances, otherwise implement different use case as-well. Also, don’t handle the exception in immediate caller but at the top most caller, the one which initiated the whole operation, by this the lower parts of the code will be clean from complicated error handling code, they will focus on normal control flow. We can handle this by showing a pop-up to user, retry the function or simply ignoring the error and moving forward. While using the immutable objects try to keep them small.

- While designing a class it should contains operations which naturally belongs to the class, if operation doesn’t belong to a class the move it out to a dependency and use the dependency to complete the operation.

- Test doubles – dummies like a placeholder, stubs objects that return predefined data, fakes slightly more realistic, mocks objects pre-programmed with expected outputs for given inputs and also able to verify their calls, spies real object and verify interactions like mocks it is an hybrid of stubs, fakes and mocks.

- Marble testing is a technique where we draw marble diagrams using ACSII characters while writing unit test to visualize asynchronous observables behavior in a synchronous way. Benefits of marble testing – readable code, test synchronously and helps to find out race condition in our code. Marble syntax - -, |, #, ^, !, a, ()

- For empty observable use |, for never use \_ or ----.

- Hot observables start emitting the values before any subscribe method is called on. Any subscribers can subscribe at any time and they can get the latest values at the time of subscription. They are multicast means more than one subscriber can subscribe to this observable however they will listen to the same producer. Publish and share are used to make a hot observable like tune radio channel, cinema theater, mouse clicks, live movies, live cricket match, stock tickers, live life events.

![unit-testing-jasmine-marble-hot-observable](src/assets/snipping/unit-testing-jasmine-marble-hot-observable.png)

- Cold Observable – In RxJs the observables are cold by nature. Cold is when the producer is owned by the observable. Observable creates and activates the producer at the time of subscription only. The data is created from the observable itself. Will produce data only when subscribe method has been called. Subscriber get their own copy of values and they are unicast i.e. one subscriber per producer like of, from, interval, timers. Real life example – watching downloaded movies, recorded podcast or song, snapshot movies in which each have their own copy.

![unit-testing-jasmine-marble-cold-observable1](src/assets/snipping/unit-testing-jasmine-marble-cold-observable1.png)
![unit-testing-jasmine-marble-cold-observable2](src/assets/snipping/unit-testing-jasmine-marble-cold-observable2.png)

- Frame – Jasmine-marbles convers observable sequence into frames. Frame is a JSON that consists of RxJs notification object that wraps the actual delivered value with additional metadata and message type.

![unit-testing-jasmine-marble-frame](src/assets/snipping/unit-testing-jasmine-marble-frame.png)

- RxJS schedulers are centre to control the time for any operator or observables in our project. Also, RxJS has made this schedulers injectable so that we can mock these schedulers and control the time in our test cases.

- Scheduler is a primitive inside RxJS, RxJS operators take scheduler as the second optional parameter. It is async by default. Marble testing uses virtual time so that we can test these async function synchronously.

- Race condition scenario – in a scenario where we are searching a string, and first search return the value with a delay than second one, then in the result we will get the first result as a final response by overriding the second one. To avoid this we can use the switchMap operator, it will cancel the previous Http request in-case of second has been triggered and always return the latest result.

- In integration test we test component and its template together. In integration if we only test parent component then it becomes shallow integration test otherwise if we also test its working with its child or directive component then it becomes deep integration test.

- To write the integration test to test the template along with component, we need to use the ‘Testbed’.

- A component fixture is a wrapper for component that also has few extra properties for testing, we can use its one of the properties called componentInstance to get the instance of the component itself.

- Use fixture.detectChanges() on component spec files to tell the component to run change detection and update any binding that may exist on the component. It will also cause to ngOnInit() lifecycle to run.

- The flush() method lets us decide what data to send back when the call is made.

## Typescript

## Security

- Content Security Policies (CSP) Reporting - It is regarding the policies send alongside with website says where can this page load images, scripts and styles from, and where the form can post the requests and the browser will restrict the page accordingly. We can send it either in http header or metatags. We can also mention the report-uri where those reports will be sent. It was originally design to stop cross side scripting.

```typescript
Content-Security-Policy: upgrade-insecure-requests
Content-Security-Policy-Report-Only: default-src https:;report-uri https://demo.report-uri.com/r/default/csp/reportOnly
```

- Certificate Authority Authorization (CAA) Reporting - CAA is much safer than HPKP, by which we can say whom we want to authorize some particular CAs to be able to issue certificates for us.

- Cross-site Scripting (XSS) Reporting - Now, the browser has built-in an XSS auditor, in XSS attack we generally have kind of get parameter they sent to the server, rendered into the DOM and then reflected back to the browser.

```typescript
x-xss-protection: 1; report=https://report.uri.com/xss/enforce
```

- Broken Authentication – passwords are very vulnerable and very in-secure. We can refer haveibeenpwned.com and avoid user to choose the password which were breached in history. The password rotation was never a good policy and it works against us as humans are terrible at passwords.

- Sensitive data exposure – SSN, credit cards information, addresses, religion, health records, political affiliation, birthday. Combination of these information can become dangerous.

- XML external entities (XXE) – SAST static source code analysis (manual code reviews), we can also use DAST tool for testing.

- Broken access control – IDOR, indirect object references, where we can twiddle a value in the URL to get someone else’s data. We should test access control so that we can’t do things outside of our privilege level.

- Security Misconfiguration – weak ciphers, SSL problems, we can use tools to check them.

- Cross-site scripting (XSS) – latest frameworks are helping to prevent this vulnerability.

- Insecure deserialization – remote command execution (RCA) running command on other server, and another thing is changing the serialized objects to elevate our privileges to do something interested, tempering of objects. To avoid this, we can use HMAC and check the validity of object type on server to check its integrity.

- Using components with knows vulnerabilities – we should break our build if any vulnerable component is found. Latest package manager automatically detects such problem with 3rd party libraries and CICD we should break the build. We can use CSP to avoid such issues.

- Insufficient logging and monitoring – we should have some sort of audit trails in place.

- HSTS helps us ensure that connections are always made securely and they never drop back to HTTP.

- What Is Serialization and Deserialization? - When we want to store an object to disk then we need to represent the multi-dimensional object into a flattened format. So, serialization is converting an object into a byte stream. A byte stream can be a file or a data stream over a network.

- Insecure deserialization – (serialized) data abusing the security of an application when being deserialized. Abuse of logic, corrupt data, denial of service, remote code execution. It is possible to execute arbitrary code merely by deserializing a corrupted or untrusted file. It affects confidentiality, integrity and availability.

- We should not use equal sign to compare the two strings as it is not cryptographically secure, as it will lead to timing attach, so always use built-in functions to compare hashes with each other.

- The dangers of logging too much – legislation, confidentiality (credentials, payment details, sensitive information), information overload, cost of processing information. Information exposure through and error message – the dangers of showing users, or non-privileged accounts error messages.

- Certificate authorities – it is an entity that issues digital certificates. Our machine needs to trust a CA. The CA signs the certificate; and when it is returned to the browser from the website, our machine validates that the certificate is legitimate by referring to our local list of trusted authorities. To check this list use certmgr.msc from run command, this list is used by windows, ie and chrome.

- SSL vs. TLS – we should ideally use term TSL not SSL as SSL is dead already:

- HTTP strict transport security (HSTS) – now redirect will give 307 status instead of 301, also the size would be 0. The browser will perform 307 internal redirect. Once our browser sees the STS response header, for the period of time, specified in that max age value, it will not make an insecure request to that domain.

```typescript
strict-transport-security: max-age=2592000
```

```typescript
Status Code: 307 Internal Redirect
Non-Authoritative-Reason: HSTS
```

- Secure cookies – capturing someone cookie will lead to session hijacking. Secure cookie will not get send over insecure connection. So, always use secure cookies flag as default setting:

![secure cookie settings](src/assets/snipping/security-secure-cookie-settings.png)

- Using HTTPS will reduce the load on client and server both sides. As HTTP uses 1.1 protocol but HTTPS uses h2 protocol i.e. HTTP2, and HTTP2 allows for a binary stream of content, so lots of data coming down to the parallel. HTTP2 is only supported over TLS.

- Getting new certificate and renewing it has very less cost involved. We can use letsencrypt.org for free certificate authority. We can use cerbot.eff.org for automatically renewal of the certificates.

- To avoid enumeration risk, show below message when login failed, like a generic message, don’t say that user doesn’t exist:

![security-avoid-enumeration-risk](src/assets/snipping/security/../security-avoid-enumeration-risk.png)

- Even in below case, if user type unavailable password then don’t show that it doesn’t exist, as we don’t want to show presence of a user on our system:

![security-avoid-enumeration-risk2](src/assets/snipping/security-avoid-enumeration-risk2.png)

- To solve an issue where account is already exist, sent an email to their registered email, so do not show message like "Username already taken".

- Brute force attack is to guess someone else password again and again, hackers use botnet for this which provides thousands of different IP addresses, so we cannot verify the request per address. If someone try to do failed login with many attempts, we can simply lock his account or can have a buffer for some minutes to let them retry. Or use OAuth with google or Facebook to delegate this problem to them.

- In password strength do not put maximum limit threshold, as user want to use pass phrase.

- With anti-automation aka Captcha is bad for user experience, it is used to avoid bot to create spam registrations. Using Captcha on registration/signup is okay as it will be one-time activity for a user, but we should not use it on login.

- Multiple simultaneous logins – it depends upon business needs, like for bank website we should not allow it, but for website like stackoverflow.com we might allow it as user wants to open that website from multiple of devices. It is also not feasible on server to know whether a user is logged-in or not, as the cookie is based on client interaction.

- Broken authentication and session management – to protect the cookie from session hijacking, we can secure it by setting it as HTTP only by this cookie cannot be read by client script to avoid XHR attach to read that cookie, if we also set the secure flag to true then it can only be sent over HTTPS connection.

- X-Frame-Options – if we use deny value then it means this page cannot be framed, means cannot be put inside iframe of any other page. This helps in prevent click checking.

```typescript
X-Frame-Options: Deny
```

- Security threats on server side - SQL injection, insufficient authorization, weak credential storage

- Security threats on client side - Cross site scripting, insufficient transport layer security, click jacking.

- Non-standard and browser prefixed headers – headers started with X was browser specific and has been deprecated now – X-Content-Security-Policy, X-WebKit-CSP, X-Frame-Options, X-XSS-Protection.

- Using HSTS (HTTP Strict Transport Security) – it will tell the browser you may not make an insecure request. Internally within the browser, you need to redirect or effectively go and make that request securely. That’s it also took only fraction of millisecond for first request with 307 status code, so by this the man in the middle won’t see this first request but the second request only.

```typescript
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
```

- HTTP Public Key Pinning (HPKP) - This is progression over HSTS, which tells the website must also serve a particular certificate that the browser expects, not just on that’s valid but one that adheres to a very specific set of criteria, to avoid a scenario where certificate authority itself gets compromised.

```typescript
Public-Key-Pins: pin-sha256=[pin 1]; pin-sha256=[pin 2]; max-age=2592000; report-uri=[uri];includeSubdomains
```

- The frame-ancestors – to avoid click jacking attacks. Attacker would embed the targeting website in his website into an iframe, then making that target website transparent putting content the attacker provides under the target website and enticing the user to click what they think is a button the attacker’s website but instead clicking a button on the target website. We can avoid this by this header so that our websites won’t be framed into some other website.

```typescript
frame-ancesors: 'none';
```

- Brute force attacks – an attacker trying over and over again to execute some sort of online process like trying to login into someone account with different password.

- Cross site request forgery – changing the password or account details using context of hacker. Use anti-forgery token to avoid this.

- Encryption is also not secure, because as soon as the encrypted key is found, entire system can be decrypted back. Instead of this we should use cryptography using hash so that no one can decrypt them back.

- We need to use hashing with a salt to avoid getting same output with same input, it also protects with rainbow table problems, but we need to use hash algorithm properly:

![security-hash-with-salt](src/assets/snipping/security-hash-with-salt.png)

- Email as username vs. free text for username for uniqueness – we should prefer email as username. Email as username is easier to remember, one less field to capture at sign-up, it is already unique per user, must be able to change in future. Free text for username can be displayed to user with less privacy risk, enable multiple accounts against one email, requires a "retrieve my username feature".

- Password strength criteria – don’t limit the max entry criteria, also don’t put any condition for not having special characters, don’t discriminate with some character, allow user to pass any character. Pass phrases are stronger. We can use utility like 1password to generate password and saving it into centralize place.

- We can also make backend call to check whether password is very simple to crack, then show as invalid like below, we can check it with bad list of passwords.

- Don’t disable the password paste option on the field. People disable it to avoid brute force attack, but disabling the paste option, make the other worst problems like bad UX. To solve a problem, if that solution makes the problem worse than it is called as cobra effect.

- Verifying accounts via Email to avoid entering fake and corrupted emails, as user can use any random or someone else email’s id.

- Using CAPTCHA for anti-automation – suppose someone made a automation tool and in make thousands to call for sign-up then that email person will get those many emails which will lead to spamming. To avoid this, we use re-captcha.

- Protecting the logon against brute force – degrade the service means for each time failed logon take some more time for re-login and sending the response back by using thread sleep, and we can return a message that maximum retry has been exceeded, please try after sometime. So, each request will take longer time, server can track number of hits against the account.

- Don’t lock an account out as it will lead to DoS (denial of service) attack. We should degrade the service and log everything. Don't lock an account out, restrict logon by IP and limit attempts with a cookie.

- We should generally allow simultaneous logons by a user from different machine, unless business requirement like banking website, but to not allowing multiple simultaneous logons will have many edge cases which we need to support as-well like unsaved data.

- Remember Me - This feature frequently implemented insecurely, by using user name and password in cookie and using it for re-login. It is a feature which requires trade-offs: security versus usability. It can disclose the credential of a user. It reduces the fiction of return visits for frequently used services like stackoverflow.com. It allows long-running sessions. But it increases numerous risks – someone else using the PC, a CSRF risk being exploited, if someone has access to unlocked machine. To make available this feature, it depends upon the nature of the application. We can give this option just for remembering the Client ID not password for sensitive websites, but this is not a remember me feature completely as it won’t do the auto login when user comes back to the website

- If we have expiry as ‘session’, then if we close the browser and reopen it, we won’t be able to logged on, the cookie will go away. If we use remember me feature, then it will have one more cookie for expiry of 1 year, it will not go away and reauthenticate the user again automatically. To implement it securely, don’t create remember me cookie, just change the auth token cookie from session scope to sometime duration scope like for a week, also mark http and secure flag as true. Additional security controls – like ebay we can choose an approach where we are breaking the cookie into two parts, first for user identity for long expiration time, and another cookie which requires for financial activity for short duration and re-authenticate user for the financial activity only.

- How attackers change account details – direct browser access, credential theft, CSRF, session hijacking (sending session on HTTP connection on in query strings), social engineering.

- Account attributes attackers want to change – password, email, identity, credit card, attackers can chain together these many information and processes in order to gain access to a victim’s account.

- To change the password or email, we should also ask the current password as-well, also keep change password feature on its own page

- Account change notification – to cater a scenario where attacker already got the access for legitimate password, we need to notify the changes on different channel as-well like email or SMS. We should not allow to change the email address without first confirming via the original email address on the account. But if user not have access to original email then it will be a problem, then we can solve this by directing to manual human interaction at support desk.

- The risk of password hints – don’t use password hint in any circumstances.

- Why logging off is important – due to remember me we can have a long running session – also in browser if we choose below feature, then browser won’t delete the cookie after browser gets closed browser even if we don’t use remember me feature, so to avoid this we need to provide explicitly logoff functionality.

- What constitutes of logging off – it removes the authentication token, by setting remember me token as empty and setting cookie expiry one day ago already.

- Web application firewalls (WAF) – we can get it by using Cloudflare service, it will look request pattern and reject it if it found malicious before allowing it to hit the actual web server:

![security-web-application-firewalls](src/assets/snipping/security-web-application-firewalls.png)

- We should keep common barrier of defines around and apply same business rules like for brute force check, whether it is getting called by API, mobile, desktop or some admin. To have code reuse pattern will help here to avoid inconsistency of codding logic for different channels.

- We humans are the weakest link in the security chain.

- In symmetric cryptography same key is used to decrypt and encrypt the message, but asymmetric cryptography uses different keys to avoid man in the middle attack

- Types of cryptograph algorithms – symmetric, asymmetric and hash functions.

- Asymmetric algorithms – public and private keys, the RSA algorithm.

- Big O notation allows us to express in terms of the size of the input, the amount of work takes to solve the problem -

- ![security-bigo-notation-types](src/assets/snipping/security-bigo-notation-types.png)

- Public key can identify somebody, and their private key can prove their identity.

- OpenID Connect – it allows users to log in to 3rd party sites using their Facebook or twitter or google credentials. It is built on top of OAuth.

- Evolution of software ecosystem -

![security-evolution-of-software-ecosystem](src/assets/snipping/security-evolution-of-software-ecosystem.png)

- Types of versioning – calendar based, sequence based and semantic based versioning. Recommended is semantic based versioning.

- Common sources of untrusted data – in the URL via a query string or route, posted via a form, in cookies, in the request headers, external services, our own database.

- We should sanitize the data right after receiving from the user. So, if user trying to search like "<i>enzo</i>"`then the text should display on the screen in encoding form of it i.e.`&lt;i&gt;enzo&lt;/i&gt;

- Cookies - It is simply a text of data stored in browser. Cookie attributes – domain, path, expiration, HttpOnly, secure. To reduce risk further we can set expiration time on cookies. For some we can set for current session only and for some for a shorter or longer time even if user close his browser.

- We should trim down all the header from HTTP response which might disclose the framework or the server underline technologies details. We can also change the header properties sort order and default bad request or default response format which was specific to some server format to avoid attacker guessing the server details.

- HTTP fingerprinting of servers – it is to identifying various attributes of a particular website which might lead it to disclose what is running underneath.

- Fuzz testing – it is the process for searching for vulnerabilities does commonly adhere to a very regular pattern like in XSS to avoid laborious manual testing, and we bombarding an application with random data with those patterns. We can use third party tool like intruder21 or fuzzdb for doing fuzz testing.

- Mounting a click jacking attack – in this the attacker will also get the access of anti-forgery token by rendering the website into iframe and setting as opacity to 0, and below to that page will render the corrupted website. In below the I “Wanna win!” button is overlay on “Change Password” button

- We should store password using hashed approach while saving the database. If we store it into plain text then there is cryptography, everything is immediately exposed if the password storage is breached. If we use encrypted approach, then it can also get decrypted which makes is less secure. Only if we use hashed approach, it would become one-way, deterministic algorithm which means that password can't be un-hashed.

- We should re-authenticate the user before key actions, like asking current password on change password screen.

- Unlike browser, mobile app doesn’t have secure paddle lock icon, as mobile app doesn’t run in browser. The mobile app, company itself handle the client communication, so we should not always trust the mobile apps.

- We can have two types of certificates DV and AV. Below is an AV certificate, it requires a business name also need to be registered.

![security-padlock](src/assets/snipping/security-padlock.png)

- We can connect fiddler for the remote machine-like android device from our computer. By this we can intercept mobile app data in fiddler. By we can get a sense for how device is communicating with backend servers.

- Instead of using the .png format we should use .jpeg format as it has better compression and can reduce the data size 75%.

- By using Wi-Fi Pineapple and LAN Tap, we can monitor the traffic even for those devices which makes hard to proxy traffic like IOT devices.

- Discovering leaky API’s – we should not return sensitive data from the web API in normal text form, also don’t return the data which is not need or non-essentials data on client side

- The role of OpenID Connect and OAuth – OpenID Connect is a simple identity layer on top of the OAuth protocol. It allows clients to verify the identity of the end-user based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the end-user in an interoperable and REST-like manner. OpenID is for authentication and OAuth is for Authorization

- Configuring fiddler to decrypt encrypted connections – it will install its root certificate on our windows machine, by this we just compromised our system (PC) only.

- LDAP kept our user directory together, assign roles and query information about the user.

- OAuth2 is about requesting access tokens from an authorization serve, then we can use this token to talk with backend service. OAuth is an open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications. OAuth is about delegating authorization; means we want to authorize a client to access our resources on our behalf.

![security-oauth-architecture](src/assets/snipping/security-oauth-architecture.png)

- The idea of OAuth2 is how we can create valet parking key, not the master key. By which a resource owner gives the client a key to access the resources on the resource’s behalf, without giving the client master key aka the password.

- OpenID connect means the application doesn’t need to connect with back-end service, but it needs to know who the user is. It is for authentication.

- Security tokens are protected data structures, contain information about issuer and subject, signed and typically contain an expiration time. A client requests a token, an issuer issues a token and a resource like API consumes a token, that resource has a trust relationship with the issuer.

- History of token - SAML (XML based, very expression, many encryption & signature options), Simple Web Token (SWT), JSON web tokens (JWT).

- JWT structure and format - headers (metadata, algorithms & keys used), claims (issuer, audience, issue at, expiration, subject, other application defined claims)

![security-jwt-token-format](src/assets/snipping/security-jwt-token-format.png)

- There are two type of tokens access tokens (short lived) and refresh token (long lived).

- OpenID Connect - It is built on top of OAuth2, and sometime we just need authentication at least to begin with to identify user in an application. OAuth2 is regularly abused for that.

- OpenID connects adds some new concepts like ID token and UserInfo endpoint. OpenID code flow – identity provider, authorization endpoint, token endpoint, user info endpoint.

- OAuth2 Concerns - Specification bloat, bearer tokens, security theatre, attack surface.

## Node JS

- What is REST - REST means representational state transfer (ReST). If we are storing information about the request or about the client, then we are not writing a truly a restful service. We also need to tell the client of caching, means caching timeout so that next time client doesn’t to call server to fetch data. One more constraint is the uniform interface, we need to deal with resources those are nouns not actions so don’t name authorize or login but like books and authors. HTTP verbs defines actions, also use PUT for update the object.

- Mongoose is an ORM for MongoDB. We don’t have to deal with MongoDB directly, mongoose is going to do that for us.

- Updating data - PUT verb replaces and item but PATCH only changes a piece.

- Middleware – It is going to inject itself in between the calls and this route.

![node-js-middleware](node-js-middleware)

- Implementing PATCH – Need to use the Object.entries() method to out an array of key-value pairs from req.body and run for-each on it to modify only those properties on object which got change, so need to check every property manually

```typescript
const { book } = req;
if (req.body._id) {
  delete req.body._id;
}

Object.entries(req.body).forEach((item) => {
  const key = item[0];
  const value = item[1];
  book[key] = value;
});

req.book.save((err) => {
  if (err) {
    return res.send(err);
  }
  return res.json(book);
});
```

- HATEOAS - Using hypermedia to building self-documenting API, it is very easy for someone to navigate and understand what options are available to them anytime while they are using our API. HATEOAS means that list of links available to us that help us navigate the API.

- Node.js provides a wrapper around V8 JS Runtime engine to provide additional functionalities for building network applications. It is fast because all written in C language. We can build WebSocket server, fast file uploading client, Ad Server, Any real-time data apps. Node.js is not a multi-threaded application. Benefits of non-blocking code – files will be read in parallel

![node-js-blocking-vs-non-blocking](node-js-blocking-vs-non-blocking)

- We use javascript with Node.js because javascript makes easy to do evented programming using the event loop and makes the code non-blocking.

- Node register the event whenever request comes in, whenever it is done registering the script, it starts the event loop when finished means it checking for events continuously, whenever a request comes it trigger its call-back. Known events are request, connection, close, timeout these evets further more events, one event at a time will get processed in event queue, other will be queued in event queue.

![node-js-event-loop](node-js-event-loop)

- Node JS server can simultaneously handle uploading of two files, one of main reason of Node JS creation is to handle the file upload. Other web apps try to load entire file into memory before writing it to the disk which can cause all sorts of issue at server side, also tricky to provide the progress of file uploads, but in Node JS we can do it very simply.

- Express is Sinatra inspired web development for Node.js, i.e. insanely fast, flexible, and simple.

- Node is generally deployed on Linux machines in production.
- Execution of javascript on the server is not done by Node, but it is done with a virtual machine, VM like V8 or Chakra. Node is just the coordinator, it is the one who instructs a VM like V8 to execute our javascript. So Node.js is a wrapper around a VM like V8. V8 will tell the results to Node and Node will tell this result to us. Node comes with built-in modules providing rich features through easy-to-use asynchronous API’s. this works great because V8 itself is single threaded, this is also true for browser.

- Node offers async API’s that we can use and not worry about threads, to do things in parallel without needing to deal with threads this is the biggest benefits of using a runtime like node. We can also create addons using C++.

- NPM is basically the world’s largest of free and reusable code.

- Node has a reliable module dependency manager usually referred to as CommonJS. This is basically the “require” function in Node combined with the “module” object.

- Node.js is like the kitchen itself, it allows you to execute lines in our recipes by using built-in modules like our oven and sink.

- REPL stands for Read, Eval, Print and Loop. Use the ctrl + l to break the REPL session.

- Using Async/Await – it is easier to read.

- Due to the package.lock.json file, other team members will also get the exact same versions event for the sub-dependencies tree. This contains the project’s direct dependencies but also whole dependencies tree for the project.

- The event Loop – what node uses to process asynchronous actions and interface them for you so that you don’t have to deal with threads.

- We should run our node process under PM2 tool, it will automatically use all the available cores in our server and it will automatically create a new process every time an active process crashes and exits. It will also reload our application without any downtime. This tool is must in production.

- Event emitters -

```typescript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

setImmediate(() => {
  myEmitter.emit('TEST_EVENT');
});

myEmitter.on('TEST_EVENT', () => {
  console.log('TEST_EVENT was fired');
});
```

- By using Electron, we can create cross platform desktop applications.

- Instead of using console.log() use debug(), it will only log when we are running in development mode not in production mode.

- For callbacks, use arrow function instead of normal function.

- Middleware – we can use router.all() for using middleware.

![node-js-router-all-middleware](node-js-router-all-middleware)

- Using passport for user authentication and authorization, this is a default option for express library, and a simple way to implement. It manages user object in the session. It also deals with dropping it in a cookie, and pulling it out of a cookie and applying it to the session. We also need to use cookie-parser and express-session package for this

- Node has inbuilt HTTP module to create http server and connection. But due to some limitation and code needs to write, we generally prefer express web framework it has routes and middleware.

- REST is not a framework nor HTTP pattern or protocol. Its full name is representational state transfer. The request should be stateless, it should not pass around the information about previous requests or next one. It should transfer data in JSON or XML. We should design the routes to access the resource like business modal.

- Blueprint of a restful service -

![node-js-restful-services-blueprint](node-js-restful-services-blueprint)

- Use express.static to serve everything within client as a static resource, and it will serve the index.html on the root of that directly on a GET to ‘/’

![image](https://user-images.githubusercontent.com/6235979/191412937-5a57ebe8-149c-43f1-bf69-a0219b64677f.png)

![node-js-express-static](node-js-express-static)

- Always send back the data which has been created or modified on POST request itself so that we don’t have to call it back by using another REST service.

- While using PUT request to update the object, use assign / extend function like below -

![node-js-update-data-put-request](node-js-update-data-put-request)

- If we are building API for our application then don’t return all other unnecessary details from API, but if we are building API as a service then we can return all the information.

- Middleware is kind of like setting utility classes to help express to do the dirty work. Middleware is just a function that has access to the request object, the response object and the next function to go to the next middleware. Type of middleware – 3rd party, router level, application level, error-handling, built-in

- We should group our folder based on feature not types, also contain config and utils folder

![node-js-folder-structure-group-by-feature](node-js-folder-structure-group-by-feature)

- Schema is like a blueprint the way we would like to have our data, the model is the JS representation of data, the document is the instance that belongs to the collection. Collection is group of documents.

- Middleware is more tied to routes, validations are more tied to models, so we should bake the validation logic into the model itself using mongoose.

- Promises are invented for JS for single threaded environment.

- Authentication - There are many ways to protect our API like JSON Web Tokens (JWT) is popular one. It is a token approach due to this we don’t need to keep track of who is signed in with a session store or have cookies. The JWT will be sent on every request because REST is stateless and we not know of the previous request. The token has to be stored on the client at the is requesting resources.

- Mongoose, like express, has support for middleware. Middleware is perfect for validating, changing, notifying, input sanitization etc. we will use middleware to hash our passwords before a user is created. Middleware will attach to lifecycle events around our documents like before save, before validations, after save, etc.

- Understanding CORS – if we are on localhost:4500, and we are trying to get access a route on localhost:3000, the browsers aren’t going to let me in due to security concern. To work around this we need to enable CORS on our server. By this the browser makes two requests, the first request is called pre-flight check by using verbs OPTIONS to check if it is allowed to make request to that server, server responds like yes or no like 200.

- Before deploying checklist -
  ![node-js-pre-deployment-checklist](node-js-pre-deployment-checklist)

- Factors we can use for two-factor authentication - something you know (password), something you have (badge, id card, token), something you are (biometric)

- Server less is an architecture it is building your application based on 3rd party services that is known as backend as a service, we also rely on custom code which runs in ephemeral containers that is known as functions as a service. We can also use this to create web hooks and notifications.

- We can ship a software update if we have added value without removing any existing value even though the new value feature is not complete, so user can’t still use it from UI, it is called dark release.

- Node’s architecture – V8 and libuv

![node-js-architecture](node-js-architecture)

- NPM is not really part of node, it is just come packaged with node since it is the default and most popular package manager.

- The event loop – the entity that handles external events and converts them into callback invocations. It is a loop that picks events from the event queue and pushes their callbacks to the call stack.

- How call stack actually works: event queue will only send the callbacks to call stack once call stack is empty otherwise it will wait until it gets empty.

![node-js-callstack-working](node-js-callstack-working)

- The setImmediate will take preference over setTimeout. So, use setImmediate if we want to execute it on next tick of the event loop, node has similar api called process.nextTick.

- Parsing URLs and query strings – components of a parsed URL. Use url.parse for parsing an URL and other helper methods -

![node-js-url-components](node-js-url-components)

- Working with big amounts of data in node js means working with streams. Streams are simple collection of data that might not be available all at once and don’t have to fit in memory. Types of streams – readable, writable, duplex, transform.

- Duplex and transform streams – with duplex streams we can implement both a readable and writeable stream with the same object. It is like if we are inheriting from both interfaces. In transform stream its output is computed from its input like converting small caps into upper case or file conversion into different format.

- Using multiple processes is the only way to scale a node js application. Node JS is designed for building distributed applications with many nodes. To increase the scalability, we have strategies like cloning, decomposing (micro services), splitting into multiple instances (horizontal partitioning or sharding).

- The cluster module can be used to enable load balancing over an environment multiple CPU core. It is based on form function, it basically allows us to fork our main application process as many times as we have CPU cores, and then it will take over and load balance all request to the main process across all forked processes. This module is a helper for implementing cloning strategies but only on one machine. We can use process manager like PM2.

![node-js-load-balancing](node-js-load-balancing)

- Load balancing and HTTP server – if a machine has 8 cores, it will start the 8 processes. These are completely different node js processes, each worker process will have its own even loop and memory space. The loaded will be distribute among different worker process.

- Availability and zero-downtime restarts – with multiple instances the availability of the system will get increased in-case of any instance gets down. When we want to restart all of the processes like for a deployment of new code, in this instead of restarting them together we can simply restart them on at a time to allow other workers to continue to serve requests while on worker is being restarted. It is called zero-downtime restart

- Node works well on windows, but it is much safer option to host production Node applications on Linux platform, many other production tools are more stable on Linux.

- Shared state and sticky load balancing – due to load balancing we had problem of thread safety which is sharing data between threads or worker processes. So, with a cluster setup we can no longer cache things in memory because every worker process has its own memory space, so if we cache something in one worker’s memory, other worker’s will not have access to it. If we need cache thing with a cluster setup, we have to use a separate entity and read write to that entity’s API from all workers, this entity can be a database server or in-memory cache service like Redis.

- In cluster setup stateful communication also become a problem. Since the communication is not guaranteed to be with the same worker, creating a stateful channel on any one worker is not an option, like problem in authentication to one worker and next time sending its request to another worker which doesn’t know its authentication status. This problem can be solved by simply share the state across the many workers we have by storing these session’s information in a shared database or a Redis node, or better way is using sticky load balancing in this we send the same user request to same worker process but by this we don’t really get the full benefits of load balancing for authenticated users -

![node-js-state-share](node-js-state-share)

- Pruning – to remove unused package from the project, it gives extraneous error if package is installed but not mentioned in package.json file. We can use npm prune, npm prune grunt it will match the installed the package with package.json file and remove the non-specified ones. We can use npm prune –production to remove dev dependencies package before going to production.

- Gulp is in-memory streams, fast and code over configuration by more declarative, and has large plugin ecosystem. Instead of using Grunt or Gulp, we should use NPM directly which has simpler debugging, better docs, easy to learn, simple and no need for separate plugins.

- Transpilers - Babel, TypeScript, Elm

![node-js-transpilers-typescript-vs-babel](node-js-transpilers-typescript-vs-babel)

- ECMASript versions -

![node-js-ecmascript-versions](node-js-ecmascript-versions)

- Module formats - IIFE, Asynchronous Module Definition (AMD), CommonJS (CJS), Universal Module Definition (UMD), ES6 Modules

- Cache busting – by default we set the cache expiration to 1 year, and if JavaScript file changes then change the bundle name to force request for latest version. For this we need to hash the bundle filename, and generate that name into HTML dynamically.

- Package vs. module – a module is a single javascript file that has some reasonable functionality, a package is a directory with one or more models inside of it and package.json file which has metadata about the package. It can be from simpler like from lodash to complex one like express. While working with NPM we are working with packages, which is why it is called node package manager.

- The package-lock.json files gets created when we installed some packages, it specify the exact versions of every package that got installed. By this it will be sure that everybody in the team using the same exact versions of all packages even if that team member join after a while to the team.

- Semantic versioning – 1.8.3 where 1 is major version, 8 is minor version and 3 is the revision or the patch number. Patch will be used when some bug fix or performance improvement, that doesn’t change the functionality. Minor means new feature is introduced but no breaking changes, major is when breaking changes like changing the function signature.

- Tilde (~) operator will get the latest patch version, carrot (^) will get the latest minor version, use \* or ‘x’ if we even okay to get the latest major version

- The package-lock.json file overrides the package.json file, so while installing a package it will take the version from package-lock.json file instead of from package.json file, if we don’t want this then we need to delete it temporary for avoiding this.

- Node js provides a wrapper on V8 Javascript runtime engine to provide additional functionalities for building network applications. It is very fast because it is written in C language. By using node js, we can build chat server, fast file upload client, ad server, real time data apps.

- Node js creates an event loop which listens for events like request, connection, close, etc. It supports non-blocking operations.

- For efficiency, whenever we are dealing large size of data that needs to be send across the network wire, we should access that data piece by piece so that server doesn’t not store the large file data in the memory . Streams are like channels where the date can simply flow through. Streams can be readable, writeable or both. The ‘request’ and ‘response’ is also a stream type.

- Javascript Event loop – Javascript is a single threaded due to which we can execute only one chunk of code at a time i.e. a function. It executes a synchronous task in “Sync Task Queue” this is a callstack for our application. The callback functions which needs to be executed in asynchronously, they needs to be added in the “Async Task Queue” by “Sync Task Queue” and when “Sync Task Queue” is done with execution the Synchronous task, it will pick the async task from the “Async Task Queue. There is also a “Async Micro Task Queue”, it will contains asynchronous microtask which will have higher priority than normal asynchronous tasks resides in “Async Task Queue”. We should not block the event loop, so wherever possible we should write the asynchronous code using async and await keywords.

![node-js-javascript-event-loop](node-js-javascript-event-loop)

- Generators enabled the functionality for async-await keywords because of pause-resume feature. Generator functions can be paused and resumed unlike normal functions. They also stored the state of the function while paused. They return generators object which implement the iterator protocol by this they provide a method name ‘next()’, this method restarts a paused generator function. They works upon concept of lazy execution by which they compute the values on demand.

- Async-await let us write the asynchronous code more like the way we write the synchronous code. Data returned from async func is automatically wrapped in a promise. Using the await keyword will automatically extract data from a promise. Also, we need to use try-catch while using async-await because await will only return value when it gets success result.

- Because of an asynchronous event-driven runtime, Node.js is designed to build scalable network applications.

- We can write event-driven code with EventEmitters classes. The EventEmitter calls all listeners synchronously in the order in which they were registered. This ensures the proper sequencing of events and helps to avoid race conditions and logic errors. But we can made them async for a particular case by using setImmediate(), it will push the code execution into the next cycle of the event loop.

- Worker threads helps us to write CPU intensive tasks by running events in parallel. It will create a new thread by making main thread available for new user request. This is similar to web workers. Using worker thread is like creating a new event loop. We can pass messages between main and worker thread. Worker threads should be used only with CPU intensive tasks. For IO bound code like disk access or network calls, it is more efficient to use the async API’s.

![node-js-worker-threads](node-js-worker-threads)

- Underneath all the http calls uses XML HTTP Request (XHR) object which is a javascript API to create AJAX requests. Its methods provide the ability to send network requests between the browser and a server.

- When we read a file, node open that file and put that content into the memory become making it available in the code. In-case of a large file, it may throw an error, to avoid this, we should use steam to read file through stream.

- Use omitBy() function from lodash to send only the changed property with a PATCH request –

![node-js-using-omitby-with-patch-request](node-js-using-omitby-with-patch-request)

- In case of wrong entity/data send from frontend and it fails the validation of server, then we should return 422 – Unprocessable entity status code. We should not send status 200 if the data is not valid.

- In case of cookie scenario, if server sends a cookie to the browser, then for further requests the browser automatically sends the cookie to the server for that same domain, so we don’t to write any specific code in client side unlike token approach in auth header. If our token contains sensitive information then we should use JSON web encryption (JWE).

- We should send hypermedia links with each request, it reduces the decoupling between client and server as client can directly use those hypermedia while forming the request for the server.

- Lifecycle scripts – prestart, start and test. Custom scripts – debug, predebug-compile, debug-compile, prebuild, build, etc. If we are running lifecycle script then we don’t have to specify ‘run’ while running that script like “npm start”.

- Sample Node JS architecture -

[node-js-sample-architecture](node-js-sample-architecture)

- Sample REST API

[node-js-sample-rest-api](node-js-sample-rest-api)

- We need to set the form attribute enctype as multipart/form-data for and input type as file.

- There is no server required to run node js, it is itself a server. Node js is also gets used for building command line applications like webpack, gulp, eslint and yeoman. Node uses libuv library for asynchronous I/O and event loop.

- History of Node JS - New major versions gets released every 6 months of Node js.

![node-js-history](node-js-history)

- Node js shines in I/O intensive uses that is in network applications. In order for event loop to function properly, our code can’t spend too much time doing anything of its own, this includes works that requires heavy use of CPU.

- In node js event loop at a time only one function will be executing, all the async request like network, file i/o or timer is listened by the event loop for a callback function.

- For the https communication, the default port is 443 and for http the default port is 8080.

- Cookie gets deleted whenever user closes the browser.

- HTML 5 storage API – session (per origin and per instance, tied to domain origin) storage, local storage.

- Local storage is also attached to per origin but available across all browser instances.

- Storage API issues – function are synchronous, no access from web workers, vulnerable to XSS attacks.

- We should not store any sensitive data in storage. The storage API is designed for simple key-value storage. We can save the complex object as-well but we need to stringy if before saving, but it causes the performance overhead.

- We can create polling request for an API on some specific intervals by using setInterval() method.

- HTTPS is called TLS (transport layer security), it encrypts payloads over the network using certificates.

- The history of distributed APIs

![node-js-history-of-distributed-api](node-js-history-of-distributed-api)

- Common formats of data - JSON, XML, JSONP, RSS, ATOM

- Association – design API’s like “api/regions/africa/sites/123/locations/1” but it still be okay “api/sites?country=usa” if it going too deeply nested

- The response code status 304 means it is served from cache and not modified.

- We can cache the request using ETags. We can send this ETag which we receive from server by setting a header key “if-none-match” (in-case of GET) and if-match (in-case of update the resource).

- Functional APIs – they are not RESTful but sometimes we need to handle these operation like calculate premium or start a machine, etc. For these APIs we should use OPTIONS or LINK verbs.

![node-js-functional-apis](node-js-functional-apis)

- If users rely on the API not changing, then we should use versioning. Types of design – URI path, Query String, with Headers, Accept header and versioning with Content Type. For simple APIs the query string is the recommended one, but for complex APIs the versioning with Content Type is recommended.

- Authentication types for APIs – Cookies, Basic Auth, Token Auth and OAuth.

- OAuth - It uses trusted third-party to identify users. So the application which uses OAuth, never gets the credentials. User authenticates with third party and use token to confirm identity, it is safer for the application (don’t have to dealt with the user credential and authentication) and the user.

![node-js-how-oauth-works](node-js-how-oauth-works)

- CSRF support is indirectly inbuilt in angular which will check any XSRF-TOKEN from the server response headers and set it to the request header automatically so that it will get match on the server side. We can override this behavior to provide a different token by using XSRF strategy service

- Mocha is a testing framework and Chai is an assertion library. Sinon is a mocking library.

- Require() Vs. Import statements –

![node-js-require-vs-import-statements](node-js-require-vs-import-statements)

## Markdown

- We can use fence block of code syntax by using 3 back ticks like ```html

- Two of the most popular of the lightweight variety are Markdown and reStructuredText.

- Use _for italics, \*\* for bold and `` for code words. Use_ for unordered list, #. for numeric list.

- Artifact are the result of the build, if this process of creating artifacts doesn’t require any person to do anything for it to happen, other than make the change to source control, the you have continuous integration. If it also gets deployed automatically then I become continuous deployment as well.

![markdown-cd-ci](markdown-cd-ci)

- For technical document writing reStructuredText is better than Markdown.

- Purpose of technical writing: Developers (Get information out of the heads of the creators), users (into the heads of users in a way they can use it).

- Writing process - plan -> research -> write -> review/edit -> launch

- Don’t be vague but be simple and user friendly. Don’t use passive sentence but use active sentences:

![markdown-writing-tips1](markdown-writing-tips1)

- But sometimes we should use passive voice, which makes a sentence a bit soft -

![markdown-writing-tips1](markdown-writing-tips2)
![markdown-writing-tips1](markdown-writing-tips3)
![markdown-writing-tips1](markdown-writing-tips4)

- Layout and Design

  - Serif fonts are considered classic, traditional, and embellished.
  - Sans is French for Without, Sans Serif fonts are considered modern, minimalist and clean.
  - Script fonts are more fluid in their stroke and they resemble handwriting particularly cursive handwriting. They are considered as handwritten, calligraphic and fancy.
  - Decorative fonts are also known as ornamental or display fonts. They should be used sparingly and for a very distinct purpose. They are fun, unique and expressive.

- Recommendation of uses -

![markdown-recommendation-of-uses](markdown-recommendation-of-uses)

- If document is more than 10 pages then use table of contents. It will allow readers to locate information and pages quickly and easily.

- Use visuals – screenshots, icons, tables, graphs and flow charts.

- Create story stories as per below format -

- [markdown-user-story-format](markdown-user-story-format)

- Software design document (SDD) - A written description of a software product that gives a development team overall guidance to the architecture of the software project.

![markdown-software-design-document-format](markdown-software-design-document-format)

- README Files – a file that helps users/other developers know how to do things with your software. Even we should write README file before we code.

- Release notes – documents the differences between two versions of the same software.

## Cypress

- We can use Cypress to test any web application built on any type of technology.

- It has four key folders – fixtures, integrations, support and plugins.

Best practices – we should avoid using id’s or css classes to select element from the DOM, it will make the test brittle, because those things are likely to change. We should either use data attribute or actual component name itself.

- Whereas selenium executes remote commands through the network, Cypress runs in the same run-loop as our application. Other tools like protector uses selenium under the hood unlike Cypress. It provides features like real time loading, time travel, consistent results.

- With Cypress, all related things are available out of the box –

![cypress-things-available](cypress-things-available)

- Cypress command API – it is a chained API where subject is passed through the chain.

![cypress-chained-api](cypress-chained-api)

- Test commands are executed in a deterministic manner, resulting in flake-free testing. Cypress will automatically wait for this assertion “.should” (4 seconds by default). So we don’t need to write code for wait and sleep until element is ready

- In cypress we can also stub network response with fixtures by using cy.server() command.

- Selenium and similar tools were designed to test applications that require a full-page refresh. Supporting SPAs with Ajax data fetching was an afterthought. This lead to many issues with timing and flakey tests. Tests would sometimes fail due to slow API requests or network latency. Fixing these flakey tests typically required adding sleep statements and increasing timeouts. This made the test code more brittle. Not to mention extremely slow.

- It’s worth mentioning Google’s Puppeteer has inner access to web browser events, allowing us to wait on things like Ajax calls. However, writing tests with Puppeteer requires more initial setup work and more effort to write each test than it should.

- Cypress.io is a relatively new framework. It overcomes many shortcomings found in Selenium, Phantom.js, and others before them. It uses an event-based architecture that hooks into Google Chrome’s lifecycle events. This enables it to wait for things like Ajax requests to complete without using a polling/timeout mechanism. This leads to reliable and fast tests. In short, it is truly the future of E2E testing and how it should have been in the first place.

- You can run Cypress in two modes: full-mode and headless-mode. The former lets you see your app’s UI and tests performed one step at a time. This mode is excellent for building up your test suite and debugging. The latter is great for a Continuous Integration (CI) environment. Another use case for headless-mode: you just want to make sure you haven’t broken anything with new changes but don’t care about the detailed steps.

- Headless-mode is useful for running on a Continuous Integration (CI) server like CircleCI. Once you start writing tests more regularly as part of your development, you should invest time in getting a CI server configured so that every git commit runs the entire test suite.

- Cypress is an end-to-end framework that was created by Brian Mann, who wanted to solve some pain points that a lot of developers face when writing integration tests: hard to write, unreliable and too slow. Similar to TestCafe, it was built on top of Node, with no dependencies on Selenium, and is a standalone testing framework that supports Javascript.

- You can have a 100% code coverage with unit-tests that test all your components in isolation, but your application might still fail when components start to communicate with each other.

- The real important tests are the ones that test functionalities that your users use every day. These are things like: “Can a user buy a product?” and “Will my order be shipped to the right address if I change the address later?” These kinds of things are impossible to test with unit tests, as they use all components of your application.

## Git

- Code review serves as an exchange of best practices and experiences. Code reviews should be classless, it should provide an opportunity for mentorship and collaboration. Means a junior can also review the pull request raised by senior member.

- The PR should be small, it can contains changed lines from 100 to 500 and 5 to 10 files changed.

- We should have a self-review, before submitting the pull request. Also, We should reply to all comments, whether we fixed them as suggested, or fixed the way we preferred or push back the comment.

- We should have at least 2 code reviewers and one of them should know the business logic behind the code and customer requirement.

- Praise the author in the comment if work exceeds expectations, new team member picks up quickly, high quality code, reinforces good practices.

- If we found a nitpick and still want to approve it then we can comment like “nitpick: several types in comments. Approving anyway”. We should not be doing pre-approving frivolously.

- Git was developed by Linus Torvalds for managing the Linux kernel. It can be used offline and online for doing all the related operations. We can push or pull our changes after connecting with the network. Git is actually a bunch of individual scripts, most of which are written in Perl.

- Other source code control system works with files, but Git works with content. When we say add to a file, it takes a snapshot of that, adds that to the index and then that’s what gets committed. We can fake this file based thing by saying Git commit –a, this commands stage any changes that are in the whole project right now, add those and do commits.

- The Git commands are called porcelain commands. At core Git is simply a map (a table with keys and values), a simple structure that maps keys to values. This structure is persistent and stored on our disk. Values are content of file, when we give values Git will calculate a key for us i.e. a SHA1 hash.

- Git Branches - Another layer will make it a revision control system which includes features like branches and merges. When we do our first commit, Git creates a default branch the name is master branch. Git save its details in heads folder in refs folder of .git folder, it is the SHA1 of the last commit, the branch is nothing else but a simple reference to a commit. Branches are just references to the commit.

- Detached Head – it is a situation when we checkout a commit. Then the head will refer to that commit, not the current branch. Git also runs a garbage collection like in below scenario, if we wanted to avoid that then we must create a branch which will refer to these isolated commits.

- By using tags, we can tag a commit with a tag name. The command can be git tag –a dinner. The tag information saved into tags folder inside ref folder. Tag is also just a reference to an object just like branch but it doesn’t move. On a new commit, the current branch will move not the tag.

- Git Fork – it is kind of like clone, but it is a remote clone. By this we are cloning the project from someone else account to our GitHub account, and then we clone it from out account to our local machine. Upstream – to track the changes to the original project, then we need to add another remote point at it. It is called upstream. We can pull and push the changes to our account project, but only do pull from the upstream original account. We can send a pull request to this original account maintainer to pull our changes.

- Git is a source control system used by GitHub. GitHub is a Git Repository for open source. Along with Bitbucket they provide a great user experience for Git users in the cloud. Git uses snapshots instead of deltas like other source control system. Atlassian Source Tree is a famous GUI toll for Git.

- Stashing – it means if things go messy, save changes for later and then apply when needed. It is like shelve set in TFS; they will no longer be present in working area.

- Recovering deleted commits – we can recover this dangling commit, we need to get back the value of SHA1 using commands reflog, and fsck.

- Reverting commits – use command git revert #commit SHA1. Be careful while reverting the reverting a merge. Revert doesn’t mean undo operation.

- Peer to Peer Model -

![git-peer-to-peer-model](git-peer-to-peer-model)

- Centralize Model -

![git-centralized-model](git-centralized-model)

- Pull request model -

![git-pull-request-model](git-pull-request-model)

- Dictator and Lieutenants model

![git-dictator-and-lieutenants-model](git-dictator-and-lieutenants-model)

- In general, we have integration, release, feature and hotfix branches.

- Constraints – we can use Git Hooks feature to raise some notification on different Events before committing like checking if build is red on server then showing warning while doing another commit.

- Evil merge – we should never introduce changes in the merge commit.

- Disadvantages of doing all work in main branch instead of multiple feature branches - difficult to track, difficult to manage merges, difficult to back out, difficult to experiment

- Creating a Hotfix - If we spot something wrong in release production code to fix these issues are called hot fixes by creating hot fixes branch. In this we create this branch from master and then merge the code back into master and development.

- Version control system: it is a time travel machine for our project.

- Evolution of version control - Local computer -> local version control systems -> centralized version control systems -> distributed version control system

![git-short-history](git-short-history)
![git-history](git-history)

- Git maintained integrity using check-summed generated by SHA1 hashing algorithm.

- The three stages of a git project - working directory, staging area (index), .git Directory (repository)

- Rewriting History - Rebase – it replays a set of commits on top of a specific base commits. D_and E_ are new commits but with same messages:

![git-visualizing-a-rebase](git-visualizing-a-rebase)

- Difference between collaborators (key people) and contributors (everyone outside from the core team and have lower permissions).

  - Maintainers - key decision makers within your company who are responsible for driving a project's vision and for managing day-to-day contributions.
  - Contributors - Members within the company that help drive the software forward. Contributors are no necessarily part of the direct project team but help build software by contributing code, submitting bug fixes, and more.
  - Community members - people who use the project or software within the company.

- Creating GitHub pages – to share information, it can be a static site hosting website without server-side code.

- Label can be applied on issues and PR. Labels are used to organize and also prioritize items such as issues. Built-in labels - bug, duplicate, enchancement, help-wanted, question, wontfix, good-first-issue, invalid.

- GitHub calls it pull request instead of merge request because it let you tell others about the changes you pushed to a branch the action they would do is pull those changes in once that merged. Repo permissions related to pull requests.

![git-repo-permissions]](git-repo-permissions)

- By using cherry pick we can copy specific commit to another branch. It creates duplicate commit in each branch and can cause confusion. Just use command git cherry-pick <commit> by specify the commit sha.
- Popular open source licenses – apache 2.0, bsd 2-caluse, bsd 3 clause, gnu gpl, gnu lgpl, mit (or expat license), Mozilla public license, cddl, eclipse public license version 2.0.

- License file deals with the legal side, Contribution Guidelines file deals with the technical side, Code of Conduct file deals with the ethical side.

## Others

- Elements, console, sources tabs are called panel and windows inside each of them are called pane.
- Use $0, $1, $2, $3, $4 to evaluate currently or previous selected elements from console.

## Accessibility

- History of accessibility

![accessibility-history](accessibility-history)

- Who needs accessibility –

  ![accessibility-who-needs-it.png](accessibility-who-needs-it.png)

- Create accessible forms – each control should have label or aria-labelled-by, use grouping of controls, provide clear notifications, break up long forms. We should avoid placeholder text in your forms. It is often low contrast and difficult to see.

- Assistive technology – screen readers, screen magnification software, speech input software, head pointers, eye tracking, single switch entry devices.
- Web accessibility guidelines – WCAG (A, AA, AAA).

- 4 types of disability – physical, vision-related, cognitive and hearing-related.

- Focusable elements – links, buttons, form elements – text input, text area, select, checkboxes, radio buttons.

- On the website load, the first tab should go to the ‘skip link’, it generally skips the site navigation or repetitive contents.

- In radio button, if a radio is selected then we need to use the arrows to move around other options, but if none is selected then we can use tab key to move around other options. It is called widget navigation where too many focusable elements on a control, it provides skip links functionality.

- Interactive form controls are activated with SPACE key. For links to activate use enter key.

- For low vision user, the content should be zoomable, it should not lead to any loss of functionality and content.

- Too much use of the animation can cause distractions among users, the website should also provide pause, stop and hide the animation. We can use chrome emulation for testing
- We should have language, charset=utf-8, title tags on the HTML page. The title bar of browser should also include company name.

- HTML landmarks such as header, nav, main, footer, aside, form and section should have accessible name by providing aria-label attribute.

- Links are for navigation or change of context, buttons are for action.

- The email field should have autocomplete attribute as `email`.
- The WCAG (web content accessibility guidelines) measure to accessibility of a website. Level A, Level AA, Level AAA. Who benefits – who only has one arm so can’t operate mouse, only the keyboard, a person who is blind so uses a screen reader, a person who has dexterity problem, can’t click on a small item, uses keyboard if she is struggling with the mouse.

- Basic commands on form which can be interacted with like button, link and input controls, they are called focusable elements, pressing enter on that link or button should activate it. Space bar is used to toggle a checkbox and open a select control. Up and down arrows are used to scrolling the page or scroll through select component.

- Mouse should be required only for drawing in an art program, some games, but drag and drop and resizing and rotating can be handled through the keyboard.

- If we set tab index as -1 then we cannot tab to it with keyboard, but can set focus programmatically. If we set 0 then we can tab to element and focus order determined by the HTML.
- ARIA is a technical specification for improving the accessibility of web pages, it allows us to update the accessibility tree.

- Common navigation patters are navigation bars, side navs, breadcrumb and hamburger menus.
- It will be hard and require more money to support accessibility if we try to implement it after project has been complete, if we start the project with accessibility in mind then it will become easy and without any additional budget.
- Typography – choosing right typeface and hierarchy of font sizes it should be in rage of 16px to 20px.
- Every transition or animation should have purpose. When everything is just flashing and sliding around all over the page, it is not good for anyone, it makes user sick. We should provide an option to the user to disable animations.
- Images are inaccessible so we need to use alt attribute to provide description of content of the image.
- Aria roles is about filing the gap between what is available and the semantics of the code that we are using and what’s actually occurring in our rich internet applications.

- ARIA states – describe dynamic states and changed with JavaScript: aria-busy, aria-disabled, aria-grabbed, aria-hidden, aria-invalid.
- For forms the spacebar should activates controls and the enter key should submit the default action of the form.

- We should only use custom elements, widgets and ARIA when we either do not have an HTML equivalent control or when we absolutely cannot use the existing control because it doesn’t have the functionality that we need.

## Data Structures

- Node chains – 
  
  ![ds-node-chains](ds-node-chains)
  
- Linked list – single chain of nodes, head pointer, tail pointer, operations – add, remove, find, enumerate.

  - Doubly linked list – singly linked list works great when we need only forward access to the nodes, but for backwords combability as-well we need to use doubly linked list.

!{ds-doubly-linked-list](ds-doubly-linked-list)
  
- Stack - It is based on LIFO concept. Each pop reduces the stack depth.

- Stack using linked list – pros with linked list approach – no hard size limit, easy to implement – no bounds checking, empty list means empty stack, cons – memory allocation on push, per node memory overhead, potential performance issues.

- Stack using arrays – cons with arrays approach – overallocation of array. While enumerating we need to iterate it backwords.
  
- Postfix calculator – postfix notation also known as reverse polish notation in this approach operator follows the operands by this, we can avoid the ambiguity in operation order.
  
- ![ds-postfix-calculator](ds-postfix-calculator)
  
- Undo implementation using Stack – we use stack to store the changes and to reverse the changes when undo is clicked.
  
- Queue - It is based on FIFO concepts. We can do enqueue and dequeue operations on it.

- Queue using linked list implementation – in this we will add last and remove first, not add first and remove last due to enumeration order. Add last/remove first allow list enumeration to “just work”. Queue allows to take incoming data and store it in a way that allows us to process it later, but in the order, it showed up, which is a sort of fairness.
  
- Handling growth of an array – we also need to copy from 0 to head – 1 in case of non-empty values. Arrays has benefits over linked list approach like data locality and performance gains, reducing the overall number of allocations and incredibly fast enqueue and dequeue times when there isn’t an allocation being performed.
  
- Priority queue – highest priority items dequeued first, not first in and first out. Only enqueue operation need to be change in implementation others operations will be same.
  
- What is a tree – instead of a linear structure which can be traversed backword and forward, these are a hierarchical rather than a linear manner. Terms are root or head node, leaf nodes, child nodes. A node can have any number of children but only one parent. Fundamental rule for a tree structure is that there is exactly one path from the head node to any other node in the tree and likewise exactly one path from any node in the tree back to the head node, therefore there is exactly one path can be taken between any nodes in the tree.
  
- Binary tree – it can have most 2 child nodes called left and right children.
  
- Binary search tree – sorted hierarchy of data. Small values on left and larger values are on right. Left most node contains the smallest value and right most node contains the largest value.
  
- Finding data – searching. Data ordering requirements make the binary search tree a really efficient structure for searching for data, as we don’t need to traverse all node to search the data.
  
Traversals – to enumerate in well-defined order they are pre-order, in-order and post-order. Pre-order and post-order are used in mathematical expression evaluation, and evaluation of run time behaviours in a language like compilers use trees, dependency graph for which depends upon which operation.
  
- Hash Tables - Hash tables are fit into the broad category of structures knows as associative arrays. Associative arrays provide the storage of key/value pairs into an array or an array like collection. But unlike an array, the index can be any comparable type not just an integer, each key is unique. The key type is mapped to an index.

 - This GetIndex() method hashed the string, hashing is a process that derives a fixed size result from an arbitrary input. Any string of any length when hashed would return a fixed size i.e. 32-bit integer hash value. The features of a hashing algorithm - stable (same input generates the same output everytime), uniform (hash value should be uniformly distributed through available space), efficeint and secure.
  
 - String hashing - Naive implementation - summing of the ASCII value of character.
  
 - Handling collisions – if two distinct items have same hash value, then we have collision as items are assigned to the same index in the has table. To handle this, we can follow two strategies – open addressing (moving to next index in table), chaining (storing item in a linked list)
  
 - Counting words – real world example of hash table. Hash table shines in a scenario where key/value pairs we are updating the values and we have a stable key.
  
 - Sorting means arranging data in a collection based on a comparison algorithm like any object with a notion of greater-than/less-than/equality. Two general families of sorting algorithms – linear sorting, divide and conquer. Linear algorithms treat the problem of sorting as a single large operation. Divide and conquer algorithms partition the data to be sorted into smaller sets that can be independently sorted. Measuring performance – number of comparisons, swaps operations.

- Bubble sort – simplest sorting algorithm. Consist of many passes until no swaps are performed in a pass. Performance is not good O(n2), not appropriate for large unsorted data sets. But for the best-case performance is very good i.e. O(n) also for the space requirement it is good i.e. O(n) as it directly operates on the input array and it is a candidate algorithm when minimizing space is paramount.

  ![ds-bubble-sort1](ds-bubble-sort1)
  ![ds-bubble-sort2](ds-bubble-sort2)
  
  - Insertion sort – sorts each item in the array as they are encountered. It uses only simple pass, everything left of the item is known to be sorted and everything to the right is unsorted. Performance and space matrixes are same as bubble sort.
  
  ![ds-insertion-sort](ds-insertion-sort)
  
- Selection sort – another linear algorithm, hybrid between bubble and insertion sort. It sorts the data by finding the smallest item and swapping it into the array in the first unsorted location. Performance is similar to bubble and insertion sort. Best case performance is O(n2). It Is not appropriate for large unsorted data set. For a system where comparison is cheap and swaps are costly then we can use this algorithm.
  
![ds-selection-sort1](ds-selection-sort1)
![ds-selection-sort2](ds-selection-sort2)
  
- Merge sort – it is a divide and conquer algorithm. They array is recursively split in half, and splitting continues until the array is in groups of 1, it is reconstructed in the sort order. Each reconstructed array is merged with the other half. Worst, average and best cases performance is O (n log n), data splitting means that the algorithm can be made parallel, that’s why it is appropriate for large datasets. Space required is O(n), merge can be, but is often not, performed in-place. These extra allocations increase the memory footprint required to sort data.
  
 ![ds-merge-sort](ds-merge-sort)
  
- Quick sort – commonly used general purpose language and also based on divide and conquer. Pick a pivot value and partition the array.
  
 ![ds-quick-sort1](ds-quick-sort1)
  ![ds-quick-sort2](ds-quick-sort2)
  ![ds-quick-sort3](ds-quick-sort3)
  
- Worst case is O (n2) not appropriate for large pathologically sorted (inverse sorted) data sets, average case performance is O (n log n) appropriate for large data sets, best case performance is O (n log n) very good best case performance and can efficiently sort small and nearly sorted data sets, space required O (n).
  
- AVL Tree - Binary tree is a collection that stores data in a tree structure. AVL tree are self-balancing binary tree invented by Adelson-velsky and landis (1942). Only insertion and deletion differ in running the balance algorithm from binary tree. AVL tree new concepts are self-balancing, height, balance factor, right/left heavy. An unbalance binary tree can cause performance issues like reduce the search time; it might become a linked list as below, like loading a English dictionary –

  ![ds-avl-unbalance-tree](ds-avl-unbalance-tree)
  
Balanced binary tree – the tree remains balanced as nodes are inserted or deleted, height or left and right tree differ by at most 1.
  
![ds-balance-tree](ds-balance-tree)
  
- Balancing is done using node rotation. Rotation changes the physical structure of the tree within the constraints of the binary tree, smaller values on the left and larger or equal on the right. Rotation algorithms are right rotation, left rotation, right-left rotation, left-right rotation.
  
- AVL tree vs. Binary tree visualization – AVL tree won’t get much height and depth unlike binary tree. For bad 100 number, the binary tree will become the linked list like linear structure. Also, it is shows the difference between balanced tree and unbalanced trees.
  
![ds-avl-tree-visualization](ds-avl-tree-visualization)
  ![ds-binary-tree-visualization](ds-binary-tree-visualization)
  
- String Searching Algorithms - API Overview – by using interface we can implement algorithms in a uniform manner and this will allow us to use them interchangeably.

  - Naïve Search - We can use run the loop till the string length minus the search string length to get some optimization. This algorithm is most appropriate when the string to search and find are both small.
  
  ![ds-naive-search1](ds-naive-search1)
  ![ds-naive-search2](ds-naive-search2)
  
  Boyer Moore Horspool Search – it minimizes the overall cost of search by skipping as many characters as possible. This is appropriate as a general-purpose string search algorithm. It will also improve the performance if search string is longer.
  
  ![ds-boyer-moore-horspool-search.png](ds-boyer-moore-horspool-search.png)
  
  - Data structures is a way of storing data. Data structures and algorithms are heavily linked. DS typically use some sort of algorithm to perform their inner organization, and algorithms typically uses data structure to store internal states.
  
- Ways of measuring performance – timing with stopwatch (but it depends on hardware, programming language, environment, etc.), counting instructions executed by machine, looking at execution curve, best case, worst case, average case.
  
- Asymptotic performance – In Asymptotic Analysis, we evaluate the performance of an algorithm in terms of input size (we don’t measure the actual running time). We calculate, how does the time (or space) taken by an algorithm increases with the input size.
  
- Big Theta – it can be used to express the complexity of a program.
  
- Big O – worst-case complexity of the program.
  
 - Binary search – complexity in terms of Big O
  
  ![ds-binary-search-big-o](ds-binary-search-big-o)
  
  - Amortized complexity – it deals with the complexity of performing the same operation multiple times for varying inputs like inserting multiple elements in a data structure.
  
 - Priority queues – internally elements are organized in a data structure called heap, types of heaps are min heap, max heap and min-max heap, interval heap. A heap is an binary balanced tree structure where each node has at most two children, in min-heap each element is smaller than its immediate children.
  
- Hash table – two flavours – first is a container that store the values that are added directly, just like arrays and linked lists, this container is often called a set or a hash set. The other flavour is a container that maps a setup of keys to a set of values, this is referred to as a map or a dictionary. Search operation is much faster in hash table.
  
- By hash table we can quickly lookup the name of a certain user id and this makes hash tables ideal data structure for caches, fast insertion, fast lookup and fast deletion, but elements order as per we receive them can’t be possible in hash table unlike arrays.
  
  ![ds-common-big-o-examples](ds-common-big-o-examples)
  
- Brute force and greedy algorithm – problem solving strategy where all possible combinations or solution candidates are tried out blindly until a solution is found is called brute force.
  
  ![ds-brute-force-combinations](ds-brute-force-combinations)
  
  - Greedy algorithms work smarter than brute faster, they may speed up the search for a solution, but they come with a catch of stalling at a local maximum or minimum if we search for a small solution.
  
  ![ds-greedy-algorithms](ds-greedy-algorithms)
  
- Divide and conquer – key ingredient is to discover how to divide the larger, original problem into sub-problems. Once divided, each of the smaller and easier-to-understand sub-problems are solved, leaving us with sub-solutions. Finally, find a way to combine, or deduce these sub-solutions into a solution to the original and larger problem, thereby conquering it. We can also apply it recursively. Example – quicksort
  
  ![ds-quick-sort-divide-and-conquer](ds-quick-sort-divide-and-conquer)
  
  - Dynamic programming – this is also built on the core idea of divide and conquer. If sub problems cannot be separated but overlaps, then overlapping part would need to be solved in both sub-problems. We can cache the solved result of sub-problem. It will improve the performance.
  
- The 0/1 Knapsack problem – using dynamic problem we can get the performance advantages as it has lower complexity.
  
  ![ds-knapsack-problem](ds-knapsack-problem)
  
- Other examples – where to put line breaks to obtain a nice and even text justification, finding shortest paths, finding difference between two files, sequence alignment, various games
  
  ![ds-knapsack-problem-other-examples.png](ds-knapsack-problem-other-examples.png)
  
  - P vs. NP – exponential functions grow much faster than polynomials. The complexity category P covers problems that can be solved in polynomial time i.e. easy problems like sorting, traversing, lists, etc. But problems in NP category are decision problems (in which answer is yes or no) verifiable in polynomial time.
  
  ![ds-p-vs-np1](ds-p-vs-np1)
  ![ds-p-vs-np2](ds-p-vs-np2)
  
  NP hard – at least as hard as NP complete, they don’t need to be decision problem, and they do not need to be verifiable in polynomial time like knapsack problem, halting problem, traveling salesman problem.
  
  ![ds-np-hard](ds-np-hard)
  
  - Heuristics and approximation algorithms – they are general techniques for dealing with computationally hard problems. Heuristics – wanted speed, trade with accuracy.

  - Cuckoo hashing to create hash table – it is an open addressing scheme, inspired by cuckoo bird.
  
  - Prefix-querying Sequences Efficiently with Tries - Tries – represent a number of strings in a single tree structure where the root node represents the enter string with no letters added yet and with each subsequent level of the tree corresponding to a pending one more letter to a string.

  ![ds-tries](ds-tries)
  
  Radix tree – a compressed tries structure, it improves the performance. We can use it if read-only or read-mostly operations. Tries is useful for autocompletion, prefix only scenario.
  
  ![ds-radix-trees](ds-radix-trees)
  
  Suffix trees also allows to search a pattern anywhere in a string.
  
  ![ds-suffix-trees](ds-suffix-trees)
  
  - Data structure is a method of organizing information so that the information can be stored and retrieved efficiently.
  
  - Big O notation – computer science defines performance by something called Big O notation. It shows how the data structure will perform as the data increase.
  
  ![ds-big-o-notation](ds-big-o-notation)
  ![ds-big-o-notation2](ds-big-o-notation2)
  ![ds-big-o-notation3](ds-big-o-notation3)
  
- One of the problems with a hash structure is when we run into collisions when putting data into the hash. Collisions slow down the performance of the hash, which kind of defeats one of the main points of using the hash. We can reduce has collisions by increasing the has capacity or improve the hashCode() method quality to improve the uniqueness of hash value.
  
- The binary tree doesn’t need to always have two nodes per parent. the tree additions are based on comparisons rather than keeping the tree balanced. Because the tree data is dispersed based on comparison, it makes adding and finding the data quite efficient, so don’t have to traversed all the elements like array list due to which the Big O notation would be logarithmic which is one of the best access performance we can get out of a data structure. But implementing a tree data structure is a bit of complex in code.
  
- Safely Using Arrays - Arrays are used in examples like storing share prices of a company in different points of time, use arrays of pixels to store and process images. Arrays properties – contiguous memory locations as it is a very cache friendly data structure, same element type cannot have mixed up type of elements in a same array, direct fast element access by index, indexes are zero-based.

- Big O notation and Asymptotic runtime complexity – Big O also commonly known as asymptotic complexity is a notation that is often used to express a trend to evaluate the performance of algorithm when some quantity grows like number of items that algorithm process. By Big O we get estimate the runtime performance, by this metrices we can pick one algorithm or another.

- Data transfer algorithms – physical vs. internet data transfer. We should pick the constant one because at some point it will be faster than linear complexity.

  ![ds-physical-vs-internet-data-transer](ds-physical-vs-internet-data-transer)
  ![ds-physical-vs-internet-data-transer2](ds-physical-vs-internet-data-transer2)
  
- Stack overflow – if internal array to store stack values gets full, then push operation will cause it outside of stack area which is not owned by stack. In this case, we should throw an exception from code.
  
- Arrays vs. linked lists – memory layout – direct fast element access by index not possible in linked list we have to traverse all the elements, also it is not cache friendly as it is not having continuous memory allocations. Linked list is good for inserting new item as all don’t have to shift. So, no reallocation overhead. The nodes of the linked list are stored in sparse memory locations. They are scattered all over computer’s memory.
  
![ds-array-vs-linked-list](ds-array-vs-linked-list)
  
## Angular JS
  
- Binding expression {{}}

- Modules provide some sort of container for the code that we write so that it will not leak-out to some other code.
  
- Modules provide some sort of container for the code that we write so that it will not leak-out to some other code.
  
- Angular is an opinionated software. It extends HTML vocabulary using the concept of directive.
  
- The ngCloak directive allows us to hide portions or all of our page and tell angular a chance to run to go though and parse the HTML and replace the directives or bindings with the actual values which it wants to display to avoid the flashes of unbound HTML on slower computer. 
  
- HTML doesn’t allow forms to be nested but using ngForm directive we can have nested forms to allow creating the smaller sections of the form.
  
- $compile service – is used heavily internally by angular whenever a page is loaded it uses to look through the directive and process them. We can also generally used them inside directives. $compile return a ‘link’ function in which we passed the scope.
  
- Using $parse service – it is also similar with the $compile service and used by angular internally. It is used to evaluate and expression and turn that expression into function that can be evaluated against a given context.
  
- $rootScope – one $rootScope per application. When we create a new scope it is created from $rootScope getting prototypal inheritance. We can inject global data on it. Avoid using it as a best practice.
  
- It is helpful in creating single page application. Gmail website is an example of single page application. Routing is a key part in writing single page application.
  
- Keyboard shortcut: hold down mouse click on history button on browser to see history. Angular will take care of managing history in the browser as we are not actually loading pages but just loading the angular templates.
  
- If we use ‘&’ means that we will execute this function into the parent scope instead in the isolate scope. ‘=’ means we are expecting an object. The ‘@’ sign indicates that we are going expect a string to be passed in, so we pass a string or an expression using evaluation {{}} operator.
  
- Understanding Transclution – it typically refers to taking a portion of a document and embedding it inside a document. In angular we take an HTML and embedded it inside a directive.

- If we have some HTML content side a directive like below angular will not show it because it is replacing the <collapsible> tag with the HTML inside the template, so we need to use transude to true and in template need to specify where it needs to be shown

- Using compile function – it is used to manipulate the DOM prior the link function executing. Angular team choose to break out the compile and link function due to performance reason because in compile angular need to traverse the whole DOM to find the directive that need to be processed. When we use the compile function scope will not be available to us as it is mainly used for DOM manipulation not finding the scope or adding watches.

- We can return from the compile function a link function then that link function will be executed for each element. So compile function runs once and affects all the instances of the directive the same way then the link function runs individually for each directive. Most often when we create a directive we will not create a compile function, typically we can take care of kinds of things that we need to do using the linking function and the template to manipulate the HTML. The angular ng-repeat directive uses the compile function in order to do its work.

- We can achieve the same functionality using link and inside it using compile but it will be expensive because compile will run many times as per ‘for’ loop value.
  
- Previously Karma called testacular and it is independent of angular, it can used to test other javascript code as well.
  
- Angular was originally written by Misko Hevery. Why angular – it is a complete solution and easy to learn. Abstract away complexity and open source backed by google. Highly testable. Benefits – code reduction. Makes forms more interactive using 2 way bindings. Poor API hiding like using directly ng-click. It supports accessibility using ngAria for screen readers and internationalization.
  
- Angular auto do the change detection unlike in other technologies like in asp.net using component.render() where user has to do it which cause many problems. 

- Angular use dirty checking as in javascript comparing two objects is very fast operation. Angular watch all events which can change the data like ng-click or service call then run digest cycle, do dirty check and re-render the page.

- Angular uses dependency injection to make it easy to get a hold of components, or services that can hold encapsulated functionality and data that we can use to build complex application out of small and simple pieces.

- JQuery – Angular included jQuery in its core library for basic selection and manipulation functions. If we give reference of jQuery then it will use its full version. When a directive does need to manipulate the DOM directly, jQuery is a tool used to do it.
  
- Because angular utilize the client side rendering technique, means most of our HTML isn’t sent directly with the page but instead it comes later on. Due to this most search engines almost see nothing of our site because without the javascript rendering the HTML our site has almost nothing to display. If SEO is important to you then need to use some technique like rely on google only, render portions of site of server, or use a pre-renderer.
  
- React suffer from Frankenstein framework syndrome, means React by itself is really only a rendering engine, it doesn’t do other things like routing or server communication so we need to look around and piece together the different libraries and parts that we ne need to make a complete solution. So need a good architect person to decide which piece will work best. But angular is a complete solution.
  
- In angular 2 the angular team has completely revamped the framework to move it forward in a way that really wouldn’t be possible without major changes, due to this angular 2 doesn’t have backwards compatibility with angular 1 framework.

- Angular 2 is created keeping performance in mind so it is much faster than angular 1 which is like 5 to 10 times faster. It has simplified the conceptual model and removed the idea of controllers and modules and simplified how services works and removed much of the configuration overhead. Angular 2 is designed to be more mobile friendly and web standards in mind.

- 5 types of services - provider(), factory(), service(), value(), constant()
  
- The $q service makes it easy to implement async patterns in our app. It is an object which represent the pending result of an async operation. It provides and API to work with promises and deferred objects that return promises to the calling code. when first client make request to server, the server will first create the deferred object using $q, which is used to communicate the status of the async work back to the client. This deferred object will immediately return a promise back to the client. Then client can use promise API to configure a callback function to execute when the work and the service is complete.

- Client side routing doesn’t replace the server side routing. But while using client side routing the call to server is for getting the little bit of information rather than complete webpages and all of it related resources. SPA need client side routing as a means of referring to different locations with the SPA. There still be interaction with server but for partial data.
  
![angular-js-server-side-routing](angular-js-server-side-routing)
![angular-js-client-side-routing](angular-js-client-side-routing)
  
- Hashbang versus HTML5 Mode – this is the default mode. There will be “#” character after the domain name in the URL. All the text on URL after this character will be for client side routing and angular will handle it. The alternate to this mode is HTML mode
  
- When angular is configured to run in HTML5 mode it attempts to use the browser’s HTML5 history API.
  
  ![angular-js-hashbang-vs-html5mode](angular-js-hashbang-vs-html5mode)
  
  - Jasmine is a behaviour driven development framework, it gives us mechanism to write and then execute the unit tests in javascript. The describe function provides the logical grouping of the multiple test cases, and the ‘it’ function state the name of the test cases.

- The main ability karma gives us to execute our unit tests via the command line, so instead of every time do switching between browser and text editor we can easily run it in the command line. Phantom JS will allow us to use the headless browser for even faster test feedback.
  
- Whenever we construct a new date its base value will always be in UTC, it is a time standard by which the world regulates clocks and time. If we specify a date without an offset, UTC is assumed. A date instance has two states the UTC time and a local time based on the system settings. These two states cause problems in unit tests.
  
- TzDate is a wrapper for the native javascript date type to construct date with time zone information. We can setup a time zone that will not change according to the local machine. It is not a complete implementation of date type object. Its main purposeis to create Date-like instances with timezone fixed to the specified timezone offset, so that we can test code that depends on local timezone settings without dependency on the time zone settings of the machine where the code is running.
  
- Creating directive by using attribute or element are only recommended because other two are easy to overlook while reading HTML. By using attribute it means we are modifying an existing element while if we use it like element then it means we are adding a new object on the page.

- Because HTML is case insensitive so we need to use dasherization or snake casing while using directive name in HTML. We can also use colon or underscore.
  
- Types of directives:
    - Component type – it represents some data and its associated HTML and related functionality, and always implemented as a custom element or also called widget. Like buttons
    - Decorator type – most commonly used. It adds additional functionality to an existing tag or modifies that tag’s display. Like ng-click. These are always implemented as an attribute never have template.
    - Structural/Templating type – like ng-repeat. These type of directive manipulates the DOM structurally to produce a display.

Best Practice: do not use the replace attribute. And always prefix your directive name with some custom project specific text.

- There are three ways by which we can set the relationship among the directive’s scope and containing controller scope, the default is or the directive to share the scope with the containing controller.
    - Shared type 
    - Inherited directive scope – if we create new item on the directive then it will be internal to that directive only. To implement this just create a scope property on directive and set it as true. Its parent and proto property will be containing controller scope. False value will be shared scope.
    - Isolated scope – isolated scope can’t see everything on the parent scope, but it can see specific items that we make visible to the isolated scope. Its parent scope will still have the containing container but the proto property would not have the containing controller scope. By using this we will be able to create a directive that is truly reusable.

- We should break a component/directive into multiple small directives. It is just like not to putting all your code in main class but break into multiple classes as per object orientation.
  
- Transclusion - It is like a picture frame. Like frame is completely separate from the picture inside of it. Just set the transclude property to true, and use the ng-transclude attribute inside the template html.

![angular-js-transclusion](angular-js-transclusion)
  
- Structural Directive - These types of directives are complex and rarely created. These are also template directives. It modifies the overall HTML structure. Like ng-if it removes the entire element from the DOM unlike ng-hide which only use simple css display rule to none and ng-repeat, ng-switch. They all use transclusion and control where and when the transclusion will be available in the node.

- If we use the '^' then it will look the directive on the parent node, for '?' sign means that directive may not be present then in that case it will give is as null. If we use the '^^' then we only looking on the parent node not on the current node.
  
- Why to use Angular? Expressive HTML, modularity, Rule based navigation, powerful data binding, testable, popular so better support and help.

- Key factors in building a line of business application – data is an asset, amount of data is significant, number of input/output data fields is significant, data integrity is critical, data visualization

![angular-js-line-of-business-application-structure](angular-js-line-of-business-application-structure)
  
- Bootstrap is a framework for prettifying the web pages, help you build responsive web applications means responsive to changes in layout, it scales to multiple form factors – phones, tablets, laptops and desktops and handle browser differences. It is developed by twitter.
  
- For routing angular use fragment identifier because it gets processed on client side and doesn’t get submitted on server, so we assign a unique fragment identifier to each view. The ngRoute is based on fragment identifies while uiRouter is based on application states URL fragment identifier is optional in it. Nester routing can provide the navigation for a tab-based set of edit pages.

- Controller should not have more than 5 collaborators means dependency. We can also use the façade class to arrogate the interaction with several collaborator sin to a single collaborator.  Value provider can be used to create global data. Controller should be testable by following the guidelines like too many used collaborators will make it difficult, like manipulating the DOM or too many business logic, too much work it will be tough to test.
  
- Avoid FOUC (flash of un-styled or un-compiled content) – we can avoid that by using ngCloak, ngBind or waiting image. The ng-bind gives us ability to do the same thing as {{}}.
  
- Treating HTML as a DSL (domain specific language) – by using directive we can create HTML like DSL which will specify our page functionality.
  
- For bootstrap logic which is required to start the app, should be in app.run().
  
- We can organize our app using by feature or type. For large project ‘by feature’ would be better or mix with both types. The LIFT principle (locating our code is easy, identify code at a glance, flat structure as long as we can, try to stay DRY). Have below format while writing controller to have ‘above the fold’ concept, and should not have more than 3 level for folder, it should be flat.
  
![angular-js-lift-principle](angular-js-lift-principle)
  
- 3 categories of modules – angular js modules, 3rd party modules, custom modules (which we create our self).
  
- Exceptions cannot be avoided entirely but they can be handled gracefully.
  
- 
