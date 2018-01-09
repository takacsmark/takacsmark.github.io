---
layout: post
title:  "Dockerfile tutorial by example "
description: "What career paths are available to a developer who's not interested in management, leadership, or teaching? "
date:   2018-01-05 01:59:00 +0100
thumbnail: "/assets/images/post-thumbs/the-top-5-linux-systems-for-elderly-people.jpg"
categories: Docker, Tutorials
---
* TOC
{:toc}

This article is the writeup of 3 Dockerfile video tutorials on my Youtube channel, meaning I created the videos first and I'm adding the details in written form now.

You'll find the videos included in this article as you read and progress through the content.


## Overview

This article will help you understand the concept behind creating a Dockerfile. Moreover I'll explain why and in which situations you'll want to use a Dockerfile in the first place.  

We'll go through a few examples of my workflow for creating my Dockefiles and I'll share my experience and best practices regarding working with Dockerfiles.

## What is a Dockerfile and why you'd want to use one?

**A Dockerfile is a text file that defines a docker image. You'll use a Dockerfile to create your own custom Docker image, in other words to define your custom environment to be used in a Docker container.**

Since this tutorial is for beginners let's go slow and go deeper into the above definition.

### Review Docker base terms

Let me repeat a few basic concepts to better explain. If you are absolutely new to docker, please start with the [Getting started with Docker - step by step tutorial - article on the blog](http://takacsmark.com/getting-started-with-docker-in-your-project-step-by-step-tutorial/). It got 1,500 likes on Youtube from 120,000 views, so it's not only me who says you'll get this, so don't worry. :)  

Docker's main purpose is to give us run-time environments that we can re-create/reproduce on any machine in any environment. The main advantage is to avoid the situations when we say "it worked on my machine", because Docker containers will give us the same environment on all machines.

In order to follow this article you need to understand the following 2 basic concepts of Docker:
1. **Docker containers**: containers are runtime environments. You usually run one main process in one Docker container. You can think of this like one Docker container provides one service in your project.

    For example you can start one container to be your MySQL database and start another container to be your Wordpress server and connect these containers together to get a Wordpress project setup.

    You can start containers to run all the tech you can think of, you can run databases, web servers, web frameworks, test servers, execute big data scripts, work on shell scripts, there is really no limit.

2. Docker containers are started by running a **Docker image**. A Docker image is a pre-built environment for a certain technology or service. A Docker image is not a runtime, it's rather a collection of files, libraries and configuration files that build up an environment.

    The main source of Docker images online is the [Docker store](http://store.docker.com). You just need to search for your preferred tech component, pull the image from the store with the `docker pull` command and you are ready to start up containers.

    Containers are started from images with the `docker run` command. An image, as you'll see in the videos, is a layered representation of your environment. These layers contain the files and configuration needed by your environment.

    As you start up a container with `docker run`, Docker will add another layer on top of your image. While your image layers are read-only, the additional layer added by the container is read-write.

### Why and when you'd want to use a Dockerfile?

So let's go back to the definition: **A Dockerfile is a text file that defines a docker image. You'll use a Dockerfile to create your own custom Docker image, in other words to define your custom environment to be used in a Docker container.**

You'll want to create your own Dockerfile when the images that area already available don't satisfy your project needs. This will actually happen most of the time, which means that learning about the Dockerfile is pretty essential part of working with Docker.

You'll see in the tutorial that a Dockerfile is a step by step definition of building up a Docker image. The Dockerfile contains a list of instructions that Docker will execute when you issue the `docker build` command. Your workflow is like this.
1. you create the Dockerfile and define the steps that build up your images
2. you isseu the `docker build` commnad which will build a Docker image from the Dockerfiles
3. now you can use this image to start containers with the `docker run` command

INSERT FIGURE HERE TODO

You'll usually start searching for available Docker images on the [Docker store](http://store.docker.com), you'll also find images on github included with a good number of repos (in the form of Dockerfiles), or you can share Docker images within your team or company by creating your own Docker Registry (I'll write about this in an advanced tutorial).  

The definition also implies that the images that you'll find on the Docker store are defined in Dockerfiles. We'll review some Dockerfiles in the first video. **A Docker image is created by building a Dockerfile** with the `docker build` command. We'll see examples later.

This means that technology vendors and developers usually provide a Dockerfile for their specific technologies. They define the steps of building the image in the Dockerfile and they use `docker build` to create the Docker image.

What happens if you can't find the exact Docker image that you need for your project? Most images are generic and won't cover your exact case. **This is the point when you'll create your own Docker images.**

All you need to do is to create a text file named `Dockerfile` (with no extension) and define your image. You'll see that you'll create your own images with almost every project you start, I usually create my own images for sandboxes and playgrounds, too.

**This tutorial will teach you how to define, build and run your own images.**

## Dockerfile basics

In the first video you'll find the key concepts, Dockerfile examples, I teach you how to manage your Docker images locally and we'll create an example web server custom image and understand the concept of layering.

<div class="video-thumb"><iframe width="560" height="315" src="https://www.youtube.com/embed/6Er8MAvTWlI" frameborder="0" allowfullscreen></iframe></div>


### Dockerfile example

Let's start with an example and see what's in a Dockerfile. I attached the below Dockerfile from GitHub, this file is part of the [official PHP image distribution on the Docker store](https://store.docker.com/images/php).

You can access the file directly via this url: [https://github.com/docker-library/php/blob/f4baf0edbc4e05e241938c68bcc7c9635707583d/7.2/stretch/apache/Dockerfile](https://github.com/docker-library/php/blob/f4baf0edbc4e05e241938c68bcc7c9635707583d/7.2/stretch/apache/Dockerfile).

Please browse through the file, it's enough for now if you note the key structural elements, skim trough the comments and see how the file is built up on a high level.

<script src="http://gist-it.appspot.com/https://github.com/docker-library/php/blob/f4baf0edbc4e05e241938c68bcc7c9635707583d/7.2/stretch/apache/Dockerfile"></script>

At this point I would like you to understand the following key points based on the example file:
1. The Dockerfile is a text file that contains the instructions that you would execute on the command line to create an image.
2. A Dockerfile is a step by step set of instructions.
3. Docker provides a set of standard instructions to be used in the Dockerfile, like `FROM`, `COPY`, `RUN`, `ENV`, `EXPOSE`, `CMD` just to name a few basic ones.
4. Docker will build a Docker image automatically by reading these instructions from the Dockerfile.

So from a developer, or tech user perspective you'll be basically describing the build steps of your environment in the Dockerfile. Then you'll build your image from the Dockerfile and start up your containers.

This also implies that understanding Dockerfile instructions is not enough to build create your Dockerfile, you need to also understand the context of the technology you are building for. If, for example, you are bulding a Dockerfile to be used in a PHP project, you'll need to dive into PHP specific knowledge, like configuration methods, PHP extensions, environment settings and such.

The good news is that you can save a lot of time when starting out experimenting with a new technology, because you can you an image prepared by someone else, without understanding the details immediately. Once you are up for some more complex stuff you can start adding to the knowledge that you can extract and learn from other people's Dockerfiles.

>Reading Dockerfiles prepared by others is a great way to learn about technology.

### Listing Docker images on your computer

Let's do some hands-on magic. Before building your own Docker images, let's how to manage images on your computer.

You can follow the video for this part at around 8:00, I'll provide a summary here.

Use the command `docker images` in your terminal to list the images you currently have on your computer. Remember that images are stored on your computer once you pull them from a registry like the docker store, or once you build them on your computer.

If you have not pulled any images yet, your list may be empty. This my computer today (please note that the list is different from the list in the video, because I'm writing this article later in time).

![Dockerfile tutorial - Docker image list]({{ site.url }}/assets/images/in-content/dockerfile-tutorial-docker-images.png)

These are the images that I'm currently using on my computer. I pulled most of them from the docker store, and I have built my own, too. The images that have a nametag in the form of `takacsmark/<image_name>` are the ones that I have built from my own Dockerfiles.

Please note that I usually don't keep all the images that I use, I try to keep everything nice and clean, because images take up a lot of space. I'll show you the exact amount of space images will take from your computer later on. That's why it's very important to learn how to clean up your images (will show you in a minute).

It is worthwhile to check the image sizes in the picture. You'll find that some images have a very small footprint, like the Alpine linux image, while more complex image take up a lot of space, like anaconda3.

### Let's create your first image

Let's start the journey by creating a modified Alpine Linux image. We'll take the base Alpine image from the docker store and modify it by installing a few Linux packages. Please execute the following in terminal:

#### 1. Create the Dockerfile

Create an empty directory for this task and create an empty file in that directory with the name `Dockerfile`. You can do this easily by issuing the command `touch Dockerfile` in your empty directory.

Congratulations, you just created your first Dockerfile! Let's open the file in your favourite text editor.

The Alpine image does not have git, vim and curl by default, as you can see in the video. So let's create a custom image from Alpine that has git, vim and curl included. This will be your first custom Docker image.

#### 2. Define the base image with FROM

Every Dockerfile must start with the `FROM` instruction. The idea behind is that you need a starting point to build your image. You can start `FROM scratch`, scratch is an explicitly empty image on the docker store that is used to build base images like Alpine, Debian and so on.

I start my images mostly from other images. You can start you Docker images from any valid image that you pull from public registries. The image you start from is called you base image. In our case let's add `FROM alpine:3.4` to the Dockerfile.

Right now your Dockerfile should look like this:
{% highlight Dockerfile linenos=table %}
FROM alpine:3.4
{% endhighlight %}

#### 3. Add the lines to install packages

Please add the lines to install vim and curl like this:

{% highlight Dockerfile linenos=table %}
FROM alpine:3.4

RUN apk update
RUN apk add vim
RUN apk add curl
{% endhighlight %}

This is not best practice, these are just a few lines to get started. Don't worry, you'll learn the best practices in this article.

#### 4. Build your image

Please run the following in terminal:
`docker build -t takacsmark/alpine-smarter:1.0 .`

This command is structured as follows:
- docker build is the command to build a docker image from a Dockerfile
- -t takacsmark/alpine-smarter:1.0 defines the tag (hence -t) of the image, which will be basically the name of the image. As the first part I put my own name `takacsmark`, because I'm the maintainer of the image, then I gave it a human readable name `alpine-smarter` and provided a version number `1.0`.
- please note the `.` (dot) at the end of the line. You need to specify the directory where docker build should be looking for a Dockerfile. Therefore `.` tells docker build to look for the file in the current directory.

You should see a similar output in terminal now:

![Dockerfile tutorial - Docker image list]({{ site.url }}/assets/images/in-content/dockerfile-tutorial-image-build_750.png)


#### 5. Enjoy the results

Let's check what's inside our new image, let's run the following command and check out vim and curl:
`docker run --rm -ti takacsmark/alpine-smarter:1.0 /bin/sh`

Right now you should be in the shell of your running container, so let issue the following commands:
`vim --v` and `curl --version`. You should be seeing the version of vim and curl in your terminal.

We have successfully added two packages to the Alpine base image. Let's not stop here, there is more!

### Understand image layering

If you look at the above screen shot again that I added at the end of image building you can notice that `docker build` provided the build output in for steps, namely Step 1/4, Step 2/4, Step 3/4 and Step 4/4.

At the headline of each step you can see the corresponding line in your Dockerfile. This is because `docker build` executes the lines in the Dockerfile one at a time.

What is more important that with every step in the build process docker will create an intermediary image for the specific step. This means that docker will take the base image (alpine:3.4), then execute `RUN apk update` and then docker will add the resulting files from that step as another layer on top of the base image.

You can follow the concept by following the line in the output that start with `---->` these lines denote the image ids of intermediary images.

This means that the final docker image consist of 4 layers and the intermediary layers are also stored on your system as standalone images. This is useful because docker will use the intermediary images as image cache, which means your future builds will be much faster for those Dockerfile steps that you do not modify.

Let's first see all the images that were created. Please issue the command
`docker images -a` in terminal.

You should see something like this:
![Dockerfile tutorial - Docker image list]({{ site.url }}/assets/images/in-content/dockerfile-tutorial-image-layers.png)



<div class="video-thumb"><iframe width="560" height="315" src="https://www.youtube.com/embed/ZcMr4G5DH7c" frameborder="0" allowfullscreen></iframe></div>

<div class="video-thumb"><iframe width="560" height="315" src="https://www.youtube.com/embed/mbmVyXIaY80" frameborder="0" allowfullscreen></iframe></div>
