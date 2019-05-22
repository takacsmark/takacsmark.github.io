---
layout: post
title:  "Fat-Free PHP Framework Tutorial – 2 Class Based Routing"
description: "Set and get values of global variables and see how Fat-Free enables building a completely modular MVC project with class based routing."
date:   2015-09-15 16:09:24 +0100
categories: tutorials
thumbnail: /assets/images/post-thumbs/Fat-Free-PHP-Tutorial-3.jpg
videothumb: "https://www.youtube.com/embed/fAng7nIQKpM"
---
In this lesson, I will explain how you can set and get values of global variables and I will also explain how Fat-Free enables building a completely modular MVC project with class based routing. 

This is the writeup of the second video in the Fat-Free PHP Framework Tutorial series. Again, please watch the video for all the details, the writeup contains the key takeaways, while the video explains every little step, plus you can watch me building the sample files.

Let's get started!

## Global variables

I found that global variables in Fat-Free are very useful for certain purposes, like storing application config information, or passing variables from controller to views and other miscellaneous stuff. Let's learn  how we can set global variables. It's actually pretty simple.

```php
<?php

require_once("vendor/autoload.php");

$f3 = Base::instance();

$f3->set('message', 'Hello World!');

$f3->route('GET /',
    function($f3) {
        echo $f3->get('message');
    }
);

$f3->run();
```

Look at lines 7 and 11 above. On line 7 we use f3's set method to create a new custom variable. The first argument is its name, and the second is the value. Yep, it's just a key-value pair. On line 11 we use f3's get method to get the value for the key 'message'. It's as simple as that. This piece of knowledge will be very useful later.

I would also point out line 10, where we have to apply some change to make this work. We had to pass $f3 to the routing function.

## Class based routing

**This section is super important.** This is the point where you can move away from function based programming to classes. Without class based routing we would not be able to create the MVC project you will see in this tutorial. It is not complicated, but it's crucial that you follow along now (and watch the video, of course).

Let's start by simply changing our routing function to a routing class. Here is the code:

```php
<?php

require_once("vendor/autoload.php");

$f3 = Base::instance();

class Main {

    function render() {
        echo 'Hello world!';
    }
}

$f3->route('GET /', 'Main->render');

$f3->run();
```

What happened here? We added a class that we called Main. The routing function we used so far in our previous route definition code will live in this class. So we created a method in the Main class and called it render. We moved the code echo 'Hello world' into this function.

Then I changed our route definition from the previous function based form to the new class based form. See how I just replaced the second argument on line 14 and added the name of the routing function in the Main class, i.e. I entered 'Main->render'. That's it, now you can define your routes with routing classes. Here is the same sample with two routes:

```php
<?php

require_once("vendor/autoload.php");

$f3 = Base::instance();

class Main {

	function render() {
		echo 'Hello world!';
	}

	function sayhello() {
		echo 'Hello, babe!';
	}
}

$f3->route('GET /', 'Main->render');
$f3->route('GET /hello', 'Main->sayhello');

$f3->run();
```

I added another route that points to the sayhello function of the Main class. I added this function to the Main class and added code to display a different message. I hope, it doesn't require more explanation, let's move on.

**Now, here is the learning of the day!** Fat-Free has two methods that the framework will invoke automatically before and after every routing call. If you add these two methods to your class, Fat-Free will automatically pick them up during routing. The only thing you have to do is following the naming convention. **These methods must be literally named 'beforeroute' and 'afterroute'.** Here is how you can use them:

```php
<?php

require_once("vendor/autoload.php");

$f3 = Base::instance();

class Main {

	function beforeroute() {
		echo 'Before routing - ';
	}

	function afterroute() {
		echo ' - After routing';
	}

	function render() {
		echo 'Hello world!';
	}

	function sayhello() {
		echo 'Hello, babe!';
	}
}

$f3->route('GET /', 'Main->render');
$f3->route('GET /hello', 'Main->sayhello');

$f3->run();
```

If you try this code, you will see that both the root address (`/`) and the /hello address will respond in a way that the beforeroute and afterroute functions are invoked before and after the routing functions respectively. As I mentioned in the video, I usually do my session checks in the beforeroute function, but you can of course add any code you think will be useful.

We have come one step closer to creating a modular MVC project. The Main class here is the first primitive version of our future controllers. Let's move a little further and see how we can create the basics of a generic controller for our application. Let's see the following example:

```php
<?php

require_once("vendor/autoload.php");

$f3 = Base::instance();

class AppController {
	function beforeroute() {
		echo 'Before routing - ';
	}

	function afterroute() {
		echo ' - After routing';
	}
}

class Main extends AppController {

	function render() {
		echo 'Hello world!';
	}

	function sayhello() {
		echo 'Hello, babe!';
	}
}

class AboutController extends AppController {
	
	function render() {
		echo 'This is the about page';
	}
}

$f3->route('GET /', 'Main->render');
$f3->route('GET /hello', 'Main->sayhello');
$f3->route('GET /about', 'AboutController->render');

$f3->run();
```

Let's walk through the highlights. First I added a new class called AppController, this will be the parent class of all of our controllers. We can have the same beforeroute and afterroute behavior application wide with this approach. You can of course override these methods in controller classes if you need to.

Now our Main class extends AppController which means that AppController is Main's parent class, i.e. Main will inherit methods and variables from the AppController class. Inheritance goes according to the regular rules of PHP, nothing fancy here. If you are not familiar with object oriented programming, I think it would be time to have a look.

I added another class called AboutController, this will render our imaginary about us page. I changed it's name from AboutPage in the video to AboutController, because this is what it is. It's gonna be an MVC controller pretty soon in a future lesson.

## Wrap-up

Thanks for following the steps in the tutorial. Now we are ready to give structure to our Fat-Free based MVC project. We will do it in the next lesson.
