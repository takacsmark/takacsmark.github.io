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


<script src="http://gist-it.appspot.com/https://github.com/docker-library/php/blob/32313ea407379d70259e14414ec8aa0311c0a4c4/7.1/jessie/apache/Dockerfile"></script>







<div class="video-thumb"><iframe width="560" height="315" src="https://www.youtube.com/embed/ZcMr4G5DH7c" frameborder="0" allowfullscreen></iframe></div>

<div class="video-thumb"><iframe width="560" height="315" src="https://www.youtube.com/embed/mbmVyXIaY80" frameborder="0" allowfullscreen></iframe></div>
