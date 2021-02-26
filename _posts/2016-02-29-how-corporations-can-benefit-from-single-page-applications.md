---
layout: post
title: "How corporations can benefit from single page applications?"
description: "Single page applications are a hot topic. How will they improve customer experience and IT costs? Who are the players? What are the risks? Where to start?"
date: 2016-02-28 15:58:00 +0100
author: Márk Takács
thumbnail: "/assets/images/post-thumbs/single_page_applications_instagram.jpg"
category: Blog
---

<!-- prettier-ignore -->
- TOC
<!-- prettier-ignore -->
{:toc}

_I'm sending this post with love to anyone who's interested in reading about single page applications. There is, however, one special audience who is close to my heart._

Dear busy corporate managers, I know how it feels when you don't have the time to play with leading edge tech. Your hobby project lies untouched on your table at home, while you're working your ass off at the office. I dedicate this post to you.

**I chose to write about single page applications, because I love the way they change how we use and think of web sites and web apps.** I believe that SPAs will soon become a topic in the corporate segment, because they enable the same user experience across channels and devices.

In addition they are cost-effective tools when creating web apps, mobile apps and desktop applications by reusing the same code components.

## What are single page applications?

The key highlight of SPAs is that your users get a fluid, application-like experience on the web. This is achieved by the fact that SPAs don't need to download every page one-by-one as users traverse through the app.

The app/website structure is downloaded only once when the app is initially accessed. Your web site or web application does not need to run several http requests to retrieve megabytes of HTML, CSS and JavaScript for every page. These are all in your browser after the initial load.

The only thing that is requested from your backend during sessions is pure business data, in the form of JSON, XML or some other lean representation.

SPAs are called single page, because technically they consist of a single web-page, in the sence that one web page structure, styling and JavaScript bundle is downloaded at the beginning of a session.

Logically you can have various pages in your app or website, but technically these are provided by the code that was downloaded initially.

> SPAs behave like desktop applications we used to use in a client-server environment. All the presentation logic is part of the app and is readily available when you start the application. Data is requested from the server as required.

## Who are the players?

**There are two leading providers of SPA technology. Google and Facebook.**

- Google developed [angular.js](https://angular.io/){:target="\_blank"}, which is a web framework to create single page applications.

- Facebook created [react.js](https://facebook.github.io/react/){:target="\_blank"} to be used in interactive features like FB chat. Facebook's Instagram is entirely built with React.

Both projects are open sourced on [GitHub](https://github.com/){:target="\_blank"} with an active community using and extending the packages. There is a plethora of extensions and complementary packages available on GitHub for both technologies.

Official documentation is adequate in both cases, however there is a significant difference between the two.

**Angular is a framework, it inherently contains the key features required to set up a well-rounded web application.**

**React is different. Being a package, you need to make your own choices from available packages when putting together your entire app.**

This has an impact on the React learning curve, because React is less opinionated, there are several solutions for routing, state management etc., there is no one single best approach to do things.

Angular being one framework has some inherent preferences and a 5 minute getting started guide. This statement is true for Angular2, which currently is in beta, still evolving.

Well, both options are super leading edge.

Personally I like React sites better than Angular, and moved from Angular 1 to React mainly because of better state management and paid the price of the steep learning curve.

## Great examples of single page applications

Both Google and Facebook use these technologies in their in-house solutions.

[Google trends](https://www.google.com/trends/){:target="\_blank"}, for instance, is an angular web app. [Instagram](https://www.instagram.com/){:target="\_blank"} is the best reference for React in-house, while [Khan Academy](https://www.khanacademy.org/){:target="\_blank"} is one of my favorite implementations of react.js. Khan Academy have become one of the key contributors to the React project, by the way.

Please note how pages are not loaded in their entirety after the initial load. After you get into a course on Khan Academy for example, all lessons become blazing fast, no page load, no HTML download, just pure content data. It really feels like sitting in the class room.

You can check out more examples here: [Built with Angular](https://www.madewithangular.com/#/){:target="\_blank"}, [made with React](https://github.com/facebook/react/wiki/Sites-Using-React){:target="\_blank"}.

## How corporations can benefit from SPAs?

### Exceptional customer service across channels and devices

_Improving customer service experience is continuously a top priority of corporations. Customer expectations moved to the realms of intuitive, zero touch self-service experiences across various channels and devices._

A good example is [Gap Inc.](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Fsecure-www.gap.com%2Fbuy%2Fshopping_bag.do){:target="\_blank"}(built with Angular), where you can connect your shopping bag across devices.

![Gap Angular example]({{ site.url }}/assets/images/in-content/gap_angular_example.jpg){:.img-fluid}
author: Márk Takács

Such experiences greatly improve customer loyalty and engagement. SPAs have an extra, soft plus being fluid and responsive, giving way to personalization and intuition.

Besides the above mentioned cool factor, there are hard facts supporting the customer experience case.

When designing such experiences project teams usually reach a point when they make compromises for different devices and platforms. This results in different features on different platforms. Your customers will not have the same services on a mobile phone and on your website, which is often annoying.

The reasons behind these compromises vary. They could be the high cost of implementation for many platforms, privacy/security issues, legacy limitations, inadequate mobile design tools, etc.

Clearing the limits between channels and devices is still to come.

### Save on mobile, web and desktop while providing the same experience

**Angular and React are created for more than the web only. One great advantage of these tools is that you can re-use your code components to build your mobile, web and desktop applications.**

This means that you need to implement your business logic only once. You'll have to apply some extra steps, though, but you'll be saving big time on the implementation costs.

This way you'll have the same services across channels and devices based on the same code components.

**These tools were purposefully designed to support web, mobile and desktop development. Angular uses [Ionic](https://ionicframework.com){:target="\_blank"} and [NativeScript](https://www.nativescript.org){:target="\_blank"} to build hybrid and native applications. React provides [React Native](https://facebook.github.io/react-native/){:target="\_blank"} for native mobile app creation.**

Both Angular and React will let you create apps for iOS and Android.

### Rediscover desktop applications

Cross platform desktop applications start to gain traction again. They are used to bring customer experiences into the personal space.

**One big area of such apps is messaging and productivity. They are built to fulfill the needs of collaboration and communications across global teams in a digital world.**

Another great user group of cross-platform desktop apps is the creative community. Designers and developers use such apps every day. A great example is [Google's powerful prototyping platform: Pixate](https://www.pixate.com){:target="\_blank"}.

One great tool to build cross-platform desktop applications is [GitHub's Electron](https://electron.atom.io){:target="\_blank"}. Its development tools come from the same technical segment (JavaScript and node) as Angular and React.

You can use your Angular and React components to build Electron applications. Electron is available for OS X, Windows and Linux (Ubuntu, Fedora, Debian).

## What are the risks involved?

**It's the well-known mantra of 'ilities'.**

- While usability, extensibility and portability are great, other points need some extra planning.

- Scalability of these tools should be examined in a broader context. Google trends or Instagram prove that you can scale any corporate service with these tools. The question is how to scale your legacy systems to serve data to another large group of users.

- Security and privacy has been on the agenda for years now. The ways of the web changed the requirements for corporate security. The appearance of single page applications just increased this pressure.

- I belive the previous two points are known to corporate managers. The big question with Angular and React adoption in my opinion is maintainability.

_Most technologies involved are going through high-speed evolution. The base language, JavaScript, has made some big steps with [ES6/ES2015](https://www.ecma-international.org/ecma-262/6.0/){:target="\_blank"} just recently._

I'm doing my best to keep my environment stable, still I'm using packages with React that publish new releases every other day on GitHub. Following up with changes is a continuous effort and requires attention.

> The trick is probably the open-source nature of Angular and React. They are not created for users to be used as-is. They are co-created with users. This may be a big step for traditional corporations. Instead of expecting a mature product, you assign people to extend a great open source product to suit your needs ... and you open-source the stuff you added.

## How can I get started?

You'll need a few things to get started with single page applications using the above tools.

1. You'll need a [node.js](https://nodejs.org/en/){:target="\_blank"} environment. The easiest option is to use a cloud development environment provider like [Cloud 9](https://c9.io/){:target="\_blank"}, where you can get hold of a node environment in minutes for free.

2. Here comes the hard part. Learning. Official documentation is available on the [angular.js](https://angular.io/){:target="\_blank"} and [react.js](https://facebook.github.io/react/){:target="\_blank"} pages.

3. Most of us need more information than what is available in the official docs. A good tip is to clone one of the many boilerplate repos from [GitHub](https://github.com){:target="\_blank"}.

4. There are great tutorials out there on [Udemy](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Fwww.udemy.com%2F){:target="\_blank"}, like the [The Complete Guide to Angular 2](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Fwww.udemy.com%2Fthe-complete-guide-to-angular-2%2F){:target="\_blank"} with 93 lectures and 10.5 hours of video material. A similar, best-in-class course for React would be [Modern React with Redux](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Fwww.udemy.com%2Freact-redux%2F){:target="\_blank"}, which uses the ever so popular Redux to manage application state and events.

5. Another quality course resource for Angular and React is [Egghead](https://egghead.io/){:target="\_blank"} with specialized courses in the node.js arena. You can access the most authentic Redux course [here](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree?series=getting-started-with-redux){:target="\_blank"} by the author, Dan Abramov.

## Wrap-up

_Single page applications provide a new, high-speed, intuitive user experience in web applications and web-sites. It is a clear trend, that sites built with this technology are getting more and more attention from users and developers._

Their popularity lies in their application feel, personalized services, fluid transactions and intuitive features.

They not only attract customers, they have the power to remedy burning issues of corporations. They are ideal to create superior customer service experiences, they are designed to re-use the same code components for various channels and devices, thus saving implementation and maintenance cost.

The risks involved are related to the cutting edge-nature of these products. Despite the risks, several big names, like [Airbnb](https://www.airbnb.com/){:target="\_blank"}, [Netflix](https://www.netflix.com/){:target="\_blank"}, Salesforce, MSNBC, Deezer, Atlassian, [Gap Inc.](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Fsecure-www.gap.com%2Fbuy%2Fshopping_bag.do){:target="\_blank"}, [The New York Times](https://www.nytimes.com/){:target="\_blank"}, [IMDb](https://www.imdb.com/){:target="\_blank"} and many others think that SPAs are worth the investment.
