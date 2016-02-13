---
layout: post
title:  "Adding Bootstrap and User Authentication to Fatfree PHP MVC Project"
description: "This lesson describes how to add Bootstrap to your Fat-Free based PHP web application. Plus it describes basic user authentication based on PHP."
date:   2015-11-09 14:58:00 +0100
categories: tutorials
thumbnail: /assets/images/Adding_Bootstrap_and_User_Authentication_to_Fatfree_PHP_MVC_Project.jpg
videothumb: '<iframe width="420" height="315" src="https://www.youtube.com/embed/2vNijEnRBfg" frameborder="0" allowfullscreen></iframe>'
---
Welcome back fellow developers and beloved students! In this lesson I will share the logical first steps towards a usable web application based on Bootstrap and the Fat-Free PHP Framework.

When I started my online journey I spent some time experimenting with different web technologies like nodejs, Ruby, Django and PHP.

I ended up developing in PHP, because the language and my chosen framework, Fat-Free, were the best choice to build the system that I had in mind.

Now, that my requirements are changing I'm actually migrating my back-end to python and Django, but that's another story.

After checking my key requirements and choosing PHP and Fat-Free, the first thing that I did was to build a strong basis that I can build my web application on.

Sort of a framework on top of the framework. The first 4 lessons in the Fat-Free Framework tutorial series described how to set up the bare technical basics, like the MVC, database connections, the ORM and CRUD.

We are still laying down the basics, but now we will add functional components, i.e. the base features that most web applications need to implement.

**This lesson describes how to add Bootstrap to your Fat-Free based PHP web application. Plus it describes basic user authentication based on PHP.**

If you are not working with Fat-Free, but you are interested in the basics of the above features, feel free to join, I believe you can benefit from this video, too.

Please make sure to follow the video, that is the only way to follow step by step. The description in the post contains some explanation and reference links, but it's definitely not a step-by-step description.

##Bootstrap

[Bootstrap](http://getbootstrap.com) is a front-end framework for web applications. It contains components that you can use on your website layout, like buttons, forms, icons and such.

Most front-end frameworks feature a grid system, which is absolutely essential when laying out columns and rows on your web pages.

Bootstrap has a pretty good grid system and an easy to use and easy to understand documentation and notation. Bootstrap is based on css and javascript.

I checked out other alternatives, too, like [Foundation](http://foundation.zurb.com/), [HTML5 Boilerplate](http://html5boilerplate.com/) and [Pure](http://purecss.io/).

I decided to stay with Bootstrap, because it's the most widely used framework for some good reasons. The documentation is simple and very rich. The learning curve is manageable and bootstrap is available through several methods including CDN.

Other frameworks have similar features, but Bootstrap has all of these in one place with easy access.

Adding Bootstrap to your site is easy as 1-2-3. Bootstrap has a css and a js file to be added to your site. If you don't need the features supported by Javascript, you may even skip Javascript and add it later.

In order to add the css, just copy the below line into the `&lt;head&gt;` section of your html file.

{% highlight html linenos=table %}
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
{% endhighlight %}

In order to add Bootstrap javascript copy and paste the below code right before your closing `&lt;/body&gt;` tag.

{% highlight html linenos=table %}
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
{% endhighlight %}

The above code uses Bootstrap css and js stored in the cloud on MaxCDN. If you need other installation methods, check out the [Getting Started page on the Bootstrap site.](http://getbootstrap.com/getting-started/)

##Authentication

One reason why we added Bootstrap in this lesson, is to lay out the sign-in page of our sample website.

For the reason that I use Fat-Free and PHP to build back-end solutions, adding security is the natural first step in my case.

I can keep unwanted visitors out of our super sophisticated and super confidential breathtakingly cutting edge shopping platform :).

Adding authentication to the Fat-Free MVC site requires a couple of new components and modifications. These are the following:

1. a User table in the database
2. a new user in the User table
3. a User model object in PHP
4. a User Controller in PHP
5. a new view login.htm based on Bootstrap
6. signin.css stylesheet from the Bootstrap sign-in example
7. new routes for login and authentication
8. turn on cache in config.ini to enable cache based sessions
9. start a new session in index.php
10. add security restrictions to the application's parent controller
This looks like a lot of work, but it's just a series of small tasks. Nonetheless you need to complete each and every one to make authentication work.

Let's take these one by one!

##1 Create the User table

Use your favorite database management tool to create a new table called User in the database. (Please have a look at previous lessons to see what database we're using).

Add the following structure:

* id, int(11) - auto increment, primary key, not null
* username, varchar(45) - utf8, not null
* password, varchar(95) - utf8, not null

Please note that I set the password field to be 95 characters long. The reason for this is that we are not going to store the password as is. **We'll store an encrypted version of the password and that's gonna be longer.**

You can even specify a higher length if you like.

This is common practice to hide the literal form of the password. The encryption algorithm works only one way. You cannot decrypt the original password.

Comparison between the stored password and the password entered by the user works in a way, that the user entry will be encoded with the same algorithm and will be compared in the encrypted form to the entry in the database.

Let's see how to create an encrypted password.

##2 Create a new user in the database

Let's create a user in the database with the name f3user, and let's create the encrypted password as follows:

1. open up Terminal on your computer
2. launch PHP in interactive shell mode by typing php -a
3. at the php> prompt type and execute the command echo password_hash('f3password', PASSWORD_DEFAULT);
What's just happened here? The interactive PHP shell lets you execute PHP commands in Terminal in a command line fashion.

We used PHP's password_hash function to encrypt our password string.

PASSWORD_DEFAULT is the default hashing algorithm used by PHP, it changes over time, the current default is "bcrypt".

Please copy and paste the hashed password, i.e. the long, messy looking string returned by PHP, into the password field of the database and save your user.

##3 Create the user model object

Let's create a new file called User.php under our app/models/ directory with the familiar model class implementation.
{% highlight php linenos=table %}
<?php

class User extends DB\SQL\Mapper{

    public function __construct(DB\SQL $db) {
        parent::__construct($db,'user');
    }
    
    public function all() {
        $this->load();
        return $this->query;
    }

    public function getById($id) {
        $this->load(array('id=?',$id));
        return $this->query;
    }

    public function getByName($name) {
        $this->load(array('username=?', $name));
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

We discussed the above code in details in previous lessons, please have a look at those if you need clarification.

##4 Create the User Controller in PHP

Add a new file under the app/controllers/ folder, called UserController.php with the following contents:
{% highlight php linenos=table %}
<?php

class UserController extends Controller{
    function render(){

        $template=new Template;
        echo $template->render('login.htm');
    }

    function beforeroute(){
    }

    function authenticate() {

        $username = $this->f3->get('POST.username');
        $password = $this->f3->get('POST.password');

        $user = new User($this->db);
        $user->getByName($username);

        if($user->dry()) {
            $this->f3->reroute('/login');
        }

        if(password_verify($password, $user->password)) {
            $this->f3->set('SESSION.user', $user->username);
            $this->f3->reroute('/');
        } else {
            $this->f3->reroute('/login');
        }
    }
}
{% endhighlight %}

This is an important point. The render method will render the login page that we add later. I hope this is easy to understand by now.

Let's see what's going on in the authenticate method!

The method is called when we hit the sign-in button on the login page. The username and password values from the sign-in form will be available under POST variables. We use this information to retrieve the user by username from the database.

If the user does not exist (the user object is dry, this is f3 convenience), then we redirect the user to the login page.

If the user exists, we verify the password with PHP's password_verify function. If the password is correct, we add the a new session variable to our session. We will use this information in the parent controller of our application to check wether the user is logged in, i.e. if the user has an active session.

If the password does not match, we redirect the user to the login page.

##5 Login html based on Bootstrap

Copy and paste the code of the login page from the Bootstrap example to a new file called login.htm.  The contents should be like this:

{% highlight html linenos=table %}
<html lang="en"><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>F3 Sample Project Login Page</title>

    <!-- Bootstrap core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="app/css/signin.css" rel="stylesheet">

  </head>

  <body class="buffer-pinterest">

    <div class="container">

      <form class="form-signin" method="POST" action="/authenticate">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Username</label>
        <input type="email" id="inputEmail" name="username" class="form-control" placeholder="Username" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required="">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div> <!-- /container -->

</body>
</html>
{% endhighlight %}

Note that we included a dedicated signin.css, see the next point for details.

##6 Add signin.css stylesheet from the Bootstrap sign-in example

Copy the contents of the signin.css from the Bootstrap example using developer tools as seen in the video. Copy the code into a new file under app/css/signin.css. Please see the contents of the file below for reference:

{% highlight css linenos=table %}
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
{% endhighlight %}

##7 New routes for login and authentication

Your routes.ini should look like this, lines 6 and 7 are in charge of login and authentication:

{% highlight php linenos=table %}
[routes]

;base routes
GET /=MainController->render

GET /login=UserController->render
POST /authenticate=UserController->authenticate
{% endhighlight %}

##8 Turn on CACHE in config.ini to enable cache based sessions

Use the Fat-Free cache setting on line 6 to turn on caching. We need this feature because we will store session information in a file based cache. You can, of course store session info in a database, but that's your homework to implement.

If you are wondering what session information I'm talking about see point 4 about the user controller.

{% highlight php linenos=table %}
[globals]

DEBUG=3
UI=app/views/
AUTOLOAD=app/controllers/|app/models/
CACHE=true 

devdb = "mysql:host=127.0.0.1;port=3306;dbname=f3MVC"
devdbusername = "f3MVCadmin"
devdbpassword = "f3MVCadmin"
9 Start a new session in index.php
{% endhighlight %}

In order to make authentication work as described in point 4, we need to start a new session for the user request. It's done in your index.php.

{% highlight php linenos=table %}
<?php

require_once("vendor/autoload.php");

$f3 = Base::instance();

$f3->config('config.ini');
$f3->config('routes.ini');

new Session();

$f3->run();
{% endhighlight %}

##10 Add security restrictions to the application's parent controller

To close the loop, we need to make sure that users without an active session cannot access restricted routes. In order to achieve this we add some logic to the beforeroute method of the parent controller in Controller.php.

{% highlight php linenos=table %}
<?php

class Controller {
    
    protected $f3;
    protected $db;

    function beforeroute(){
        if($this->f3->get('SESSION.user') === null ) {
            $this->f3->reroute('/login');
            exit;
        }
    }

    function afterroute(){
        //echo '- After routing';
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

Please note that we have overridden the beforeroute method in UserController.php, so login features are available for users without an active session.

##Wrap-up

In this lesson we started adding functional elements to our Fat-Free MVC sample project.

I created a new repo on GitHub and called it Fat-Free PHP Bootstrap Site. This way you can browse the MVC sample project in its own repo and follow the Bootstrap sample site in a dedicated repo in the future.

Hope you found this lesson useful, good luck with your endeavors!