---
layout: post
title:  "Fat-Free PHP Framework Tutorial – 4 DBs, Models & CRUD"
description: "4th lesson in our tutorial series covers Fat-Free models, database connections and CRUD. This makes the MVC sample project ready for you to start your own."
date:   2015-09-21 17:36:00 +0100
categories: tutorials
thumbnail: /assets/images/post-thumbs/Fatfree_PHP_Framework_Tutorial_-_4_-_YouTube.jpg
videothumb: '<iframe width="420" height="315" src="https://www.youtube.com/embed/XydAAp3ZF-M" frameborder="0" allowfullscreen></iframe>'
---
It's time we add 'M' to MVC and complete the core of our Fat-Free MVC sample project. In this lesson we will create a new database, connect to it from our project and set up models with f3's ORM functionality.

*****UPDATE** you can clone the project files on github here [https://github.com/takacsmark/Fat-Free-PHP-MVC-Sample-Project.git](https://github.com/takacsmark/Fat-Free-PHP-MVC-Sample-Project.git).

After this lesson you'll be able to build the cool functionality you have in mind on top of your own Fat-Free kick-start project. Let's see how to do it!

## Creating a database

I assume that people who are learning f3 are skilled enough to set up a database locally. Anyway, there's no point in doing a poor job in a tutorial (or anywhere at all), so I'll drive you through the steps.

We'll use MySQL. This is not a suggestion or preference on my side. It's really up to you what database you'll use in your projects. I picked MySQL for the tutorial because it's the most widely used free database online. You'll need to set up a MySQL database on your local computer.

You can choose to install the database server from the [MySQL website](https://dev.mysql.com/) or you can use [XAMPP](https://www.apachefriends.org/index.html) or [MAMP](https://www.mamp.info/en/) to run a database server on your computer. Various Linux distros come with the MySQL service already installed, all you need to do is start the service ($ sudo service mysql start).

On my computer I use MySQL installed, plus I use an instance of MAMP, both work just fine.

After your server is running, you'll need a GUI to manage your databases. Although we could work from the command line, I don't like it.

In MAMP and XAMPP you can use phpMyAdmin, but I prefer MySQLWorkbench because it looks like the enterprise tools I used to use. [You can install it from here](https://dev.mysql.com/downloads/workbench/), on Linux you can do $ sudo apt-get install mysql-workbench.

Let's open up our database admin tool, phpMyAdmin or MySQLWorkbench and connect to the local database. The default settings are; network address 127.0.0.1, port 3306, user root, and no password. If you're not on MAMP or XAMPP, go to the Server menu in MySQLWordbench and under the Startup/Shutdown submenu Start the server.

Create a new database, i.e. a new database schema as shown in the screenshot.

![MySQLWorkbench create db schema]({{ site.url }}/assets/images/in-content/MySQL-Workbench-create-database.jpg)

Let's add a new admin user to the new database, please look at the video to see how to do this.

## Prepare test data

Click the db schema indicator in the left pane and right click Tables. Let's create a new table with the create table menu. (see video for details). Let's just create a table called 'messages', where we store messages we want to display on our website.

![MySQLWorkbench create table]({{ site.url }}/assets/images/in-content/MySQL_Workbench-create-table.jpg)

Next, we add a new record to this table. You can do this from the Query window in MySQLWorkbench by directly editing query results. (see video for details).

![MySQLWorkbench edit table data]({{ site.url }}/assets/images/in-content/MySQL_Workbench-edit-table-data.jpg)

## Connecting Fat-Free to the database

### config.ini

First, let's add the database to the config.ini file, the full contents of the file should look like this:
{% highlight php linenos=table %}
[globals]

DEBUG=3
UI=app/views/
AUTOLOAD=app/controllers/

devdb = "mysql:host=127.0.0.1;port=3306;dbname=sbf3MVC"
devdbusername = "sbf3MVC"
devdbpassword = "sbf3MVC"
{% endhighlight %}
Note that the global variable names (devdb, devdbusername and devdbpassword were made up by me, you can use any name you like). The structure of the values follows f3 conventions, I think they are self explanatory. [You can read more about the different database connections on the Fat-Free site.](https://fatfreeframework.com/databases)

### controller.php

In the next step, we move on to our controller parent class and add the database connection to the constructor. This way, every controller in our application will have access to the same database connection without any further coding.

Our new controller.php should look like this:
{% highlight php linenos=table %}
<?php

class Controller {
	
	protected $f3;
    protected $db;

	function beforeroute(){
		echo 'Before routing - ';
	}

	function afterroute(){
		echo '- After routing';
	}

	function __construct() {
		
		$f3=Base::instance();
		$this->f3=$f3;

	    $db=new DB\SQL(
	        $f3->get('devdb'),
	        $f3->get('devdbusername'),
	        $f3->get('devdbpassword'),
	        array( \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION )
	    );

	    $this->db=$db;
	}

}
{% endhighlight %}
A couple of thing happened here. We added an f3 variable to our parent controller, we set its value in the constructor. This is the f3 instance we have seen in the previous lectures. It's a singleton, so it's the very same instance we use in our index.php. We add it to our parent controller as a class variable for easy access in our controllers.

Additionally our parent controller will have now a $db variable that we use in all of our controllers to manipulate data in our database. Please note line 21, where we added an option to f3 telling the framework to raise db exceptions. This way SQL exception from the database will be propagated to our error handling mechanism. This will be a life saver during debugging tasks.

See how we use the global variables from config.ini to establish the connection. I think it's a good idea to visit our site at this stage and see what it does. The expected result is that it will display the same message that we had at the end of the last lecture.

## Creating the model

Let's create the 'models' folder under our project's app folder and let's create a new empty file under models, called Messages.php. This is our first model in our MVC.

In the file we will create something called a DB\SQL\Mapper. This is the heart of f3's ORM, it will neatly map our table to a PHP object. Here is how:
{% highlight php linenos=table %}
<?php

class Messages extends DB\SQL\Mapper{

	public function __construct(DB\SQL $db) {
	    parent::__construct($db,'messages');
	}
	
	public function all() {
	    $this->load();
	    return $this->query;
	}
}
{% endhighlight %}
Our model class extends DB\SQL\Mapper. On line 6 we specify the name of the db table we want to map in the constructor. Later on we can add our own functions to manipulate data.

Right now we have only one function that will read all messages. $this simply refers to the PHP object that is the mapping of our database table to PHP.

### Including models

Now we need to make sure that f3 will include our model classes. We do this in the config.ini file, by adding the models folder to the AUTOLOAD global variable. Remember from previous lectures how we separate folders with the pipe (`|`) symbol.
{% highlight php linenos=table %}
[globals]

DEBUG=3
UI=app/views/
AUTOLOAD=app/controllers/|app/models/

devdb = "mysql:host=127.0.0.1;port=3306;dbname=sbf3MVC"
devdbusername = "f3admin"
devdbpassword = "f3admin"
{% endhighlight %}

## Displaying test data from the db

### MainController.php

Let's go to our MainController.php now and change the render function.
{% highlight php linenos=table %}
<?php

class MainController extends Controller{

	function render($f3){
		
		$messages = new Messages($this->db);
		$msg = $messages->all()[0];

		$f3->set('msg',$msg);
        $template=new Template;
        echo $template->render('template.htm');
	}

	function sayhello(){
		echo 'Hello, babe!';
	}
}
{% endhighlight%}
We create a new Messages object, we pass the db connection as a parameter. $this->db here refers to the $db variable that we set in our Controller.php. Remember that MainController extends Controller.

Next we take the first record from the result set (number [0], of course) and pass this variable, $msg, to the template as a global variable. $msg in fact is an object that has properties following the table structure. Thus $msg->message or $msg['message'] also represent the message field in the database table.

We pass the entire object to the template and take care of the individual fields there. We do this because most of the time this is the way we use it with more complex data.

### template.htm

There is one thing left to do now. We have to change our message in the template on line 7. f3 lets us use the handy dot notation to access object properties.
{% highlight html linenos=table %}
<!DOCTYPE html>
<html>
<head>
	<title>Tutorial page</title>
</head>
<body>
	<p>{{ @msg.message }}!</p>
	<p>This is rendered from the template</p>
</body>
</html>
{% endhighlight %}
If all goes well you should see the new Hello World message coming from the database. :)

## CRUD

This tutorial would not be complete without a comprehensive CRUD example. I usually use two alternative methods to handle CRUD.

### Method 1. Model functions

Let's update our Messages.php model file with the below functions:
{% highlight php linenos=table %}
<?php

class Messages extends DB\SQL\Mapper{

	public function __construct(DB\SQL $db) {
	    parent::__construct($db,'messages');
	}
	
	public function all() {
	    $this->load();
	    return $this->query;
	}

	public function getById($id) {
	    $this->load(array('id=?',$id));
	    return $this->query;
	}

	public function add() {
	    $this->copyFrom('POST');
	    $this->save();
	}
	
	public function edit($id) {
	    $this->load(array('id=?',$id));
	    $this->copyFrom('POST');
	    $this->update();
	}
	
	public function delete($id) {
	    $this->load(array('id=?',$id));
	    $this->erase();
	}


}
{% endhighlight %}
These functions to the following:

* getById() returns the database record with a given id. We can use this method to get a record with a specific primary key, this is useful when we wanna display, or update certain attributes of a given record.
* add() - f3 Mapper has a pretty cool feature. The copyFrom function copies the contents of an array into the Mapper object. The only constraint is that the array keys must be identical to database field names. This way it's much easier to create a form that manages a certain database object.
* edit() also uses the copyFrom method, but it selects the record by id.
* delete() will delete a record with a given id.

Remember, you can use the 'POST' array and also other arrays in the copyFrom function. But what if, you don't wanna copy an entire array? You can set object attributes.

### Method 2. Setting object attributes

Let's add some code to our MainController and create a new message in the database and display it on our screen.
{% highlight php linenos=table %}
<?php

class MainController extends Controller{

	function render(){
		
		$message = new Messages($this->db);
		$message->key = 'Second message';
		$message->message = 'This is the second message inserted from code';
		$message->save();

		$messages = new Messages($this->db);
		$msg = $messages->all()[1];

		$this->f3->set('msg',$msg);
        $template=new Template;
        echo $template->render('template.htm');
	}

	function sayhello(){
		echo 'Hello, babe!';
	}
}
{% endhighlight %}
Ok, all I did was adding a few lines 7-10, that create a new Messages object, set object properties in PHP syntax and call the save() method. This saved a new record to the database. I did not have to set the id explicitly, because it's automatically incremented by MySQL.

Then I select all records from the database and changed line 13 to display the second record. Now we have the new record on our page, plus we have it in our database, too.

I use a mixture of the above two methods, depending which one is more convenient. I put all complex data manipulation into my Models, to keep my code modular and reusable.

Regular object manipulation, on the other hand is completely feasible with standard mapper functions immediately in the controller.

## Wrap-up

Now we have covered the MVC basics in the Fat-Free PHP Framework. I hope you found it helpful and you'll find a good use for the structure presented in this tutorial.

There are still more lessons to come. I wanna refine and enrich the sample project with advanced data management, css, js, forms, modals, Bootstrap, to give a more comprehensive sample project.