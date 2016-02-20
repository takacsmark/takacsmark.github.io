---
layout: post
title:  "Fat-Free PHP Framework Tutorial - 1 Basics"
description: "First lecture of my video tutorial series on solving web programming challenges with Fat-Free. Lecture 1 covers installation, project setup and routing."
date:   2015-08-12 16:06:00 +0100
categories: tutorials
thumbnail: /assets/images/post-thumbs/Fat-Free_PHP_Framework_Tutorial_-_1_Basics_and_1__markgyorgyiimac_Mark-es-Gyorgyi____Documents_Development_Tutorials_fatfree_1_base__zsh_.jpg
videothumb: '<iframe width="420" height="315" src="https://www.youtube.com/embed/R-ydcTTrR5s" frameborder="0" allowfullscreen></iframe>'
---
I published the first 3 videos of the Fat-Free PHP Framework Tutorial a few weeks ago. Now that my vacation is over, it's time to add the related posts that will give you additional information about concepts covered in the video.

This description is not the writeup of everything I said in the tutorial video. On the contrary, this post is meant to enrich your video experience with information that I cannot give you verbally. So please do watch the video and use this article as a summary of key concepts and the source of relevant links and code.

##So why learn the Fat-Free PHP Framework in the first place?

I use Fat-Free to support my online venture called Vanitysocks. The site is a guide to men's socks from all over the internet. The idea is to describe and present thousands of quality socks in one place. This segment has been booming in the last years and today there are more men's socks brands than one would think. As a socks lover I decided to understand the world of modern socks and share my learnings with people online.

**This requires that I collect product information from online stores and keep products up-to-date regularly. This is where Fat-Free comes into the picture.**

Vanitysocks is serves by a Fat-Free based backend that can automatically crawl our affiliate partners' sites and translate the product information from those sites to our own proprietary format. And it does all this automatically. This is basically a web scraping and DOM crawling challenge managed on a neat admin website written in PHP Fat-Free .

I started the work in node.js, but moved away from it quickly. The learning curve usually won't scare me off. My main reason was that I just could not keep calm when I saw all the callback spaghetti in my code using the famous 'asynch' library. Another reason was that the library I picked for DOM crawling was not performing as well as I expected.

**I consider MVC a must, so I was looking for something like Rails, just more simple and minimal. All I wanted was an MVC framework that gives me basic features like routing, logging, config management and database tools.**

I googled the issue and found Fat-Free. The best thing it gave me on top of the above requirements is that it works so well together with 3rd party libraries when used with Composer. It gives me the basics and just the basics, so I can focus on my own desired functionality my own way.

##What to expect from the tutorials?

It's not a beginner's tutorial in the sense that I assume you already have some knowledge of PHP, HTML, Javascript and CSS, so I won't describe these concepts in detail. We will work on a higher level and I will explain how to solve typical web programming challenges with Fat-Free. In the first 3 tutorials we cover these topics:

1. Installation, setting up the first project and the first route
2. Framework globals, class based routing, structuring for MVC
3. Config files of system variables and route definitions, view templates, controller classes and advanced project structure

In later tutorials we'll move on to create a complex project with extensive use of 3rd party libraries, Bootstrap, we will add our own library, add session management, cookies, call APIs, add web scraping and DOM processing.

##Where to start?

In order to use the Fat-Free Framework, you need to install it into your project. I prefer to use the Composer package management solution, so this is what we use for the tutorials. [You can find installation instructions using this link.](https://getcomposer.org/doc/00-intro.md)

After you installed composer, you need to add Fat-Free to your project using Composer. So please create your project directory on your computer if you haven't done so yet and open the location in terminal. Go into your project folder and issue the following command:

`composer init`

Please follow the questions of the composer project initiation process, you can follow along my example in the video. After you successfully completed the composer initiation steps you should have a new file in your project folder called:

`composer.json`

The file has contents that are similar to the below code sample. By adding the below lines, we are telling composer to download and add the Fat-Free Framework to our project.

{% highlight json linenos=table %}
{
    "name": "takacsmark/fatfreetutorial1",
    "authors": [
        {
            "name": "Mark Takacs",
            "email": "youremail@xxx.com"
        }
    ],
    "require": {
        "bcosca/fatfree": "3.5.0"
    }
}
{% endhighlight %}

In order to make this effective, please issue the following command from under your project folder in terminal.

`composer update`

After you've done this step a new folder called vendor should appear under your project folder. The vendor folder contains the third party libraries installed by composer. Now the fun begins.

##Running f3 for the first time

This is the part of the video where I explain why I do the things I do, where I get the information from and where you can find support online.

**In order not to repeat a good 15 minutes monologue, I suggest you to watch the part of the video where we take a look into the Fat-Free source code to understand the basic concepts and the key classes of the framework.**

This is important, because the few lines that we write into our final code get their real meaning with this approach.

Fat-Free's official site has great online resources and documentation, you can find a user friendly almost tutorial level description of key features in the [user guide](http://fatfreeframework.com/user-guide), and a more [detailed API documentation](http://fatfreeframework.com/api-reference) that I found useful after I knew what I was looking for.

In order to run Fat-Free, all you need to do is to create a file called index.php under your project directory. This file should reside immediately in your project folder, not in a subfolder. When your file is ready, open your code editor and add the following source code. Don't worry, I'll explain what the lines mean.

{% highlight php linenos=table %}
<?php

require_once("vendor/autoload.php");

$f3 = Base::instance();

$f3->route('GET /',
    function() {
        echo 'Hello world!';
    } 
);

$f3->run();
{% endhighlight %}

* Line 3 includes a file called autoload.php under the vendor directory. This file is automatically generated by Composer during the update that we run before. This file takes care of including the third party library classes as they are required by your code. This means that you do not need to require files one by one, you just need to include this one and use any third party library class.
* Line 5 gets an instance of the Fat-Free base class. I spent a good amount of time explaining this in the video, have look. The point is that the fundamental class of Fat-Free is called Base. Base is a [singleton](https://en.wikipedia.org/wiki/Singleton_pattern), meaning there is only one instance of this class at all times. In order to use Fat-Free, we reach out to Base and ask for the instance using the instance function (if you are not familiar with static functions, that is the :: notation, [read this](http://php.net/manual/en/language.oop5.static.php)). We assign this instance to a variable called f3. f3 is the quasi standard name of the Fat-Free instance, most people use this name. (you can change the name of the variable, I have never tried it, [but others have](http://stackoverflow.com/questions/26325803/fat-free-framework-change-f3-variable-name))
* Line 7 calls the route function of our Fat-Free instance, f3. This will define a route URL and the function that shall be called when that URL is requested. So what is this? Routes are URLs of HTTP requests handled by f3. In the example we defined a route that will handle an HTTP GET request for the URL "/", which is the root page of our site. The function in the second argument will be executed when the route address is requested.
* Line 13 invokes the run function of the Base class. f3 starts listening for requests and will handle them using the Fat-Free routing mechanism. This means, that the route we defined before will only work if we add this line and run f3.

The sample code will eventually display "Hello world!" if we request our site's base URL (http://example.com/) in a browser.

In order to achieve this you need to run a web server on your machine or in the cloud. If you wanna run a quick test, php's built in web server is a great option (as of PHP 5.4.0). You can start it by issuing the following command from your terminal when your are in your project directory:

`php -S localhost:8088 -t .`

If you use a different web server you'll be required to activate an URL rewriting mechanism. [You can find detailed instructions for Apache, Nginx, Lighttpd and IIS on the Fat-Free routing page.](http://fatfreeframework.com/routing-engine)

##Wrap-up

This first part gives you the details to get started. We will explore advanced topics in the next videos.

The first very special topic we will touch is, how we can build a project structure that will serve more complex websites with complex features. In oder to achieve this, we will first explore a way to define routing to class functions, instead of just functions. We will see Fat-Free's smart mechanism to add functionality before and after the routing is executed.

We will also explore ways to separate the view functionality from controller functionality with page templates.

All of the above will give us the opportunity to build an MVC solution with controller classes, class hierarchy and views.

I hope you found this post useful, stay tuned! Your comments are very welcome.