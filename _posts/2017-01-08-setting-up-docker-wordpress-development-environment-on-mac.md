---
layout: post
title: "Setting up a Docker Wordpress development environment on Mac"
description: "Looking for a good practice to set up a Docker development environment with Wordpress and MariaDB? Here we go..."
date: 2017-01-08 08:07:00 +0100
author: Márk Takács
thumbnail: "/assets/images/post-thumbs/docker-wordpress-mariadb.png"
category: Tutorial
---

<!-- prettier-ignore -->
- TOC
<!-- prettier-ignore -->
{:toc}

\***\*Tip**\*\*\*\*\*\*
If you are absolutely new to Docker, please start with the [beginners tutorial with examples]({{ site.url }}/getting-started-with-docker-in-your-project-step-by-step-tutorial/).

\***\*Tip**\*\*\*\*\*\*
Watch the video that I created for this post on Youtube. I show how to install the docker engine on Mac in the video plus I walk you through all the steps that are needed to set up a Wordpress development environment with MySQL using Docker containers.

<div class="aspect-w-16 aspect-h-9">
    <iframe src="https://www.youtube.com/embed/eBGvHkTFDTs" allowfullscreen></iframe>
</div>

This article is the writeup of the video tutorial, meaning I created the video first and I'm adding the details in written form now.

## Intro and prerequisites

The purpose of this article is to teach you how to set up a Wordpress + MySQL development environment on your machine. I like local development with Docker, because it gives me a couple of valuable benefits. Some of these benefits are the following:

- a well separated development environment on my machine,
- my production and development environments use the exact same Docker image,
- I can easily bring up a development container of various Wordpress versions,
- deployment is a breeze,
- I don't need to install all the messy dev tools on my shiny new MacBook Pro (yeah, I'm an orderly person).

In order to enjoy the above benefits, you need to install the Docker engine on your machine first. We are lucky, because I just bought a new Mac, so you can see the native Docker for Mac installation in the video. There is not much to write about it, it's just a wizard that you should follow. Just go to [https://www.docker.com/products/docker#/mac](https://www.docker.com/products/docker#/mac){:target="\_blank"} and follow the steps in my video.

We'll use a SQL client during this tutorial, so please make sure that your preferred SQL client is available on your machine. If you don't know what to use, check out my favorite for the Mac; [Sequel Pro](https://sequelpro.com){:target="\_blank"}.

After we sorted out the installation here is what we will do:

1. pull the MySQL (MariaDB) image from the Docker store
2. store data outside the container
3. run the MariaDB container
4. pull the Wordpress image
5. run the Wordpress container

## Pulling the MySQL image to your machine

Let's go to the [Docker Store](https://store.docker.com/search?q=mariadb&source=verified){:target="\_blank"} and search for MariaDB.

If you are wondering why we are using MariaDB as our MySQL image, here is the deal: there are various implementations of MySQL. Official MySQL is maintained by Oracle, it's completely free (unless you need enterprise grade support). MariaDB is the community edition of MySQL. We have projects in the corporate environment where I work, that use MySQL. For my own small business, startup hacking type of projects I prefer the community version.

Please carefully pick an exact version of the image on the Docker Store. I explain some more of my thought process around this in the video.

Let's run this command in terminal:

`docker pull mariadb:10.0.25`

If you run the command `docker images` now in terminal, you should see a new line under your Docker images. It should look something like this:

```terminal
REPOSITORY                      TAG                   IMAGE ID            CREATED             SIZE
mariadb                         10.0.25               bb3fc12095a7        7 months ago        344.4 MB
```

OK, now that we have the image pulled, let's see how to start up a database. In order to make it work, we need to see how to store data for the MariaDB container.

## Storing data of your MariaDB container

Docker containers are meant to be stateless. Containers are environments, they don't behave like apps and they don't behave like virtual machines. They are just a better way of configuration and operating environments.

A docker image is a definition of an environment, while a container is a parametrized runtime of the image. We should be able to replicate the images and containers anytime and anywhere. Therefore storing stuff that may change in a container is not a good idea.

We'd better store data, source code, config files and anything mutable outside containers. Docker uses volumes to make this work. If you need more info to grasp the concept, check out the [beginners tutorial with examples]({{ site.url }}/getting-started-with-docker-in-your-project-step-by-step-tutorial/){:target="\_blank"}.

Here is how to solve the challenge around data storage. Go to your computer and create a directory for your MariaDB database files.

The exact location is a matter of preference. I usually create a directory called `env` under my `Development` directory and under `env` I add `mariadb\data`. The whole thing looks like this on my machine:

`/Users/takacsmark/Development/env/mariadb/data`

I usually put other environment stuff under the `env` folder, like Nginx config, MongoDB and such. I use a dedicated `data` folder under `mariadb` because this way I can use the `mariadb` folder to add more structure for config files and other stuff, if I need to.

Here is where the MariaDB container should store all data files. Let's see how we do it.

## Start up your MariaDB container

All we need to do now is to start the container with the right parameters. Please make sure to issue this command from your MariaDB data directory. We will use the `docker run` command and add the following parameters:

- --name mariadb - this means that we call our container "mariadb"
- -d means that we will run the container in the background
- -v $(pwd):/var/lib/mysql is a crucial point. This is where we map the data directory that we created in the previous point to the data directory within the container. $(pwd) means the current directory, so this is why it's important that you `cd` into your data directory to execute this command.
- -e MYSQL_ROOT_PASSWORD:root provides the root password to MySQL. Please note that providing the password `root` is not a good practice. Use some authentic password.
- -p 3306:3306 maps the MySQL port of the container to port 3306 on the host machine. This parameter makes sure that you can access the MariaDB database on your machine from a MySQL client.

Here is the entire command, please run it in terminal:

`docker run --name mariadb -d -v $(pwd):/var/lib/mysql -e MYSQL_ROOT_PASSWORD:root -p 3306:3306 mariadb:10.0.25`

This will start up your database container plus it will create the database files in your data directory. The contents of your data folder will be something like this:

```terminal
-rw-rw----@  1 takacsmark  staff    16K Jan  8 11:51 aria_log.00000001
-rw-rw----@  1 takacsmark  staff    52B Jan  8 11:51 aria_log_control
-rw-rw----@  1 takacsmark  staff    48M Jan  8 11:51 ib_logfile0
-rw-rw----@  1 takacsmark  staff    48M Nov 20 11:31 ib_logfile1
-rw-rw----@  1 takacsmark  staff    76M Jan  8 11:51 ibdata1
-rw-rw----@  1 takacsmark  staff     0B Nov 20 11:31 multi-master.info
drwx------@ 89 takacsmark  staff   3.0K Nov 20 11:31 mysql
drwx------@ 55 takacsmark  staff   1.8K Nov 20 11:31 performance_schema
```

Now you can use your SQL client to connect to your database. My Sequel Pro connection looks like this:

![Sequel Pro Localhost MariaDB Connection](/assets/images/in-content/Sequel_Pro_Mysql_Docker_Tutorial.png){:.img-fluid}

We are halfway through. Let's add Wordpress to the picture.

## Pulling the Wordpress image from Docker

There is one basic decision I took regarding this step. Early on I had to decide whether I prefer to use a Wordpress image that has MySQL included or whether I will use separate images for MySQL and Wordpress.

I decided to go for the second option for a couple of reasons:

- on a small scale I can use the same MariaDB container to serve multiple databases to multiple applications. This is my current production setup and I use a single db to serve multiple pages.
- on a larger scale if I need to scale my setup I'd prefer to be able to scale web servers and databases separately as need be.

So let's pull the [official Wordpress image from the Docker Store](https://store.docker.com/images/c14a56d6-07e4-464b-b71c-4b24dc7f1836?tab=description){:target="\_blank"}. Please pick the version of your preference. In the tutorial we use this command in terminal:

`docker pull wordpress:4.6.1-php7.0-apache`

After the pull you should see the new image, just issue the command `docker images`. Mine looks like this:

```terminal
REPOSITORY                      TAG                   IMAGE ID            CREATED             SIZE
wordpress                       4.6.1-php7.0-apache   80f218d7d14e        7 weeks ago         433.2 MB
mariadb                         10.0.25               bb3fc12095a7        7 months ago        344.4 MB
```

## Start up your Wordpress Docker container

Woohoo, there is only one small step to be done now. Let's run the container.

The trick here is to understand how you can link your Wordpress container to your MariaDB container. Docker provides a very elegant way to do this. It's called linking.

We will use a new parameter to link the containers. `--link mariadb:mysql` means that we are linking the container called `mariadb` (this is the name we specified with the `--name` parameter when we stared our database container) and map it to the `mysql` environment variable in the Wordpress container. Docker will take care of the connection details for us.

Here is the entire command:

`docker run --name wordpress-tut -d --link mariadb:mysql -p 8080:80 wordpress:4.6.1-php7.0-apache`

If you go to `http://localhost:8080` now, you should be getting a Wordpress site setup page.

You are good to go. Please watch the end of my video, if you'd like to see how I go through the Wordpress wizard.
