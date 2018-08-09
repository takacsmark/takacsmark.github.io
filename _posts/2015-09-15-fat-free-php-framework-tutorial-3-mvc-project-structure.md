---
layout: post
title:  "Fat-Free PHP Framework Tutorial – 3 MVC Project Structure"
description: "This the third video in our Fat-Free Tutorial series. The time has come, we will use what we learnt so far to create our first Fat-Free MVC project."
date:   2015-09-15 16:11:31 +0100
categories: tutorials
thumbnail: /assets/images/post-thumbs/Fat-Free-PHP-Tutorial-3.jpg
videothumb: '<iframe width="420" height="315" src="https://www.youtube.com/embed/DQT5sDO1_Ck" frameborder="0" allowfullscreen></iframe>'
---
The time has come, we will use what we learnt so far to create our first Fat-Free MVC project.  This is the third video in our Fat-Free PHP Framework Tutorial series. As usual, let me ask you to follow the video, because it contains all the steps and therefore it is the ultimate resource to teach you how to build the MVC project structure. This writeup summarizes the key takeaways and this is the place where I give you code snippets that you can copy and paste into your own projects, so that you don't need to type so much.

## The MVC Project Structure

Unlike in previous posts in this tutorial series, this time let me start with the end result and explain the structure. Later on, I will come back to each file in detail.

```terminal
➜  1 base  ll
total 40
drwxr-xr-x  4 markgyorgyiimac  staff   136B Júl 20 20:02 app
-rw-r--r--  1 markgyorgyiimac  staff   225B Júl 20 13:48 composer.json
-rw-r--r--  1 markgyorgyiimac  staff   1,7K Júl 20 13:49 composer.lock
-rw-r--r--  1 markgyorgyiimac  staff    59B Júl 20 20:10 config.ini
-rw-r--r--  1 markgyorgyiimac  staff   137B Sze 15 11:50 index.php
-rw-r--r--  1 markgyorgyiimac  staff    89B Júl 20 20:08 routes.ini
drwxr-xr-x  4 markgyorgyiimac  staff   136B Júl 20 20:04 tmp
drwxr-xr-x  5 markgyorgyiimac  staff   170B Aug 12 19:04 vendor
```

This is the structure of our MVC web application project folder now.

*'app' is a folder that I created. I use this folder to store all the source code that I write for my application.
*'composer.json' is a file we have seen before. It's the config file of the composer PHP package manager.
*'composer.lock' is a file created and used by composer, let's handle it as a black box.
*'index.php' is the main file of our web application. We use this file to configure and run the Fat-Free Framework. This was the only file we worked on so far.
*'routes.ini' is the config file where we store our routes. Yeah, we move our routes from index.php to routes.ini in this lesson.
*'config.ini' is the file where we store our config f3 variables.
*'tmp' directory is created by Fat-Free. f3 has built in caching features. As soon as you add templates to your project, the tmp folder will appear with cached files.
*'vendor' we have seen this directory in the first lesson. It's created and managed by Composer. It contains third party libraries used in your project.

The 'app' folder, the 'config.ini' and 'routes.ini' files were created by me, so you should also create these files and the directory for your own project. 'index.php' should already be there. The other files and folders are managed by Composer or f3, so don't worry about them.

Let's have a look at the structure of the app folder, now. This is where MVC will take place:

```terminal
➜  app  find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
.
|____controllers
| |____Controller.php
| |____MainController.php
|____views
| |____template.htm
```

A side note: the first geeky line is just a tree command for Mac that I found on this blog [https://www.kingluddite.com/tools/adding-tree-command-to-the-terminal-mac-osx](https://www.kingluddite.com/tools/adding-tree-command-to-the-terminal-mac-osx).

I created two directories under 'app' for this lesson. These are 'controllers' and 'views'. The 'models' folder will come also under 'app' later when we will use a database.

I assume you are here to learn how to create an MVC project with Fat-Free rather than to learn what an MVC is. If you are not familiar with the concept, please use google and read about the Model-View-Controller paradigm.

The 'controllers' folder contains our controller files, with one class in each file. In order to enjoy the benefits of f3 autoload, your classes must reside in a dedicated file, one class per file, where the file name and the class name are exactly the same. This way you can configure f3 to automatically include your classes when they are needed. This lesson contains this setting later.

'Controler.php' is our parent controller class in this sample project, all our controller classes will extend this class.

The 'views' folder contains the web view templates in the form of .htm files. This is our presentation layer, or display layer. Fat-Free has its own template solution, we will add a basic template in this lesson and see more complex examples later.

So let's make this work. I have moved the functionality from the previous lesson to the new structure. Here are the files.

## Files under the root folder

### index.php

```php
<?php

require_once("vendor/autoload.php");

$f3 = Base::instance();

$f3->config('config.ini');
$f3->config('routes.ini');

$f3->run();
```

We know this file very well. As you can see its contents have significantly decreased, because we moved our "business" functions to the files in the MVC files. This file contains the inclusion of Composer autoload and the initiation of the f3 instance, that we know from the first lesson.

There are two new lines, 7 and 8. These lines tell f3 to use the 'config.ini' and 'routes.ini' files as config files of the system. This way config variabless and routing info have their dedicated place.

The last line tells f3 to listen to http requests and respond to them.

Now that we told f3 to use the config files, let's move on to these files in the next step.

### routes.ini

```php
[routes]

;base routes
GET /=MainController->render
GET /hello=MainController->sayhello
```

This file contains the route definitions. This is the same info we used to add to our $f3->route() functions in the past, but now we have a different format that you see in the code.

`;` on line 3 denotes a comment, while the [routes] tag on line 1 tells f3 that this is the section where routes are defined. This is important because you could have only one file for all of your config needs in f3, in that scenario you would separate different config sections with different tags. You'll see that our config.ini starts with the tag [globals], because that's where we define global variables.

### config.ini

```php
[globals]

DEBUG=3
UI=app/views/
AUTOLOAD=app/controllers/
```

This is the config file of global variables. Right now we have set three crucial variables.

* DEBUG specifies the debug level from 0 to 3, 0 being the least informative meant for production systems.
* UI tells f3 where to look for view templates. This is where we tell f3 that our views reside under our newly created app/views/ directory
* AUTOLOAD takes care of automatic inclusion of our classes. This is where we tell f3 to find the controller classes under `app/controllers/`. Sooner than later you'll need more than one entry in this setting. Use `|` to separate entries. (e.g. `app/controllers/|app/models/`)

## Files under app/controllers/

### Controller.php

```php
<?php

class Controller {

	function beforeroute(){
		echo 'Before routing - ';
	}

	function afterroute(){
		echo '- After routing';
	}
}
```

The Controller class is the superclass of all of our controllers in this application. It implements the beforeroute and afterroute functions, that we discussed before. These functions will be available in all controllers in the application. As I said before beforeroute is the ideal place for checking session information.

### MainController.php

```php
<?php

class MainController extends Controller{

	function render($f3){
		$f3->set('name','world');
        $template=new Template;
        echo $template->render('template.htm');
	}

	function sayhello(){
		echo 'Hello, babe!';
	}
}
```

This is our main controller class. Its parent class is Controller. As you see, we moved the functions from the previous lesson from 'index.php' into this class. Render will render the main page of our web application. Sayhello is a function that will simply say hello.

### How does f3  invoke these class functions?

It all starts in index.php, where we defined where to find the config files. The routes config points the address '/' to MainController->render, therefore f3 will create an instance of MainController and invoke the render function.

How will f3 find MainController? Based on the AUTOLOAD entry in 'config.ini'.

Hope this clarifies how these files and entries are related. Makes sense, right?

### How does template rendering work?

In the render function you can see that first we set a global variable called 'name' to have the value 'world'. You can pass variables to be used in templates by using globals. So we are basically passing a key-value pair to the template.

Then we create an instance of f3's Template class, that's part of the framework.

Then we tell f3 to render the template called 'template.htm'. f3 will use the UI setting in 'config.ini' to find the template.

## Files under app/views/

### template.htm

```php
<!DOCTYPE html>
<html>
<head>
	<title>Tutorial page</title>
</head>
<body>
	<p>Hello, {{ @name }}!</p>
	<p>This is rendered from the template</p>
</body>
</html>
```

You can write f3 templates in plain HTML. If you need to use variables that are provided by controllers, you need to add your variables as globals in the controller and use f3's template syntax to display or use those values. You can pass all variable types, as well as arrays and objects to templates in global variables.

You should use double curly braces to access globals. Variable names must be preceded by the `@` symbol. E.g. `{{ "{{ @name " }}}}` in the above example.

[There is lot more to templating than this, you can read more about it on the Fat-Free site.](https://fatfreeframework.com/views-and-templates)

## Wrap-up

In this lesson we defined a basic MVC project structure.  This way you have all the tools you need to start your own web application based on the Fat-Free Framework. You can create really complex solutions with f3.

f3 does not have features like scaffolding or database migrations like Django or Rails. Still I find f3 comparable to the big name frameworks, because it gives me the right foundations to build on.

PHP has very nice packages and Composer works like charm. Deployment is a breeze with git, PHP packages are stored as files, you should not expect major environment issues apart from PHP version differences.

In next lessons we will add a database to our application and see how to implement a few more complex scenarios.
