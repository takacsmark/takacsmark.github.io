---
layout: post
title: "Copying files from the host to a Docker container and back | Docker tips"
description: "Confused about copying files to a container? Here are all the scenarios and solutions."
date: 2019-08-07 07:19:00 +0100
author: Márk Takács
thumbnail: "/assets/images/post-thumbs/docker-tips-copy-files.png"
categories: Docker Tutorials 
---
**So you want to copy files from the host machine to a Docker container or vice versa?** _Let's see in which scenarios you may want to do this and what are the right steps to accomplish what you are looking for._

You may want to copy files from the host machine into a Docker container or the other way around in the following scenarios:

 * TOC
{:toc}

Let's get to it!

## You already have a running container and want to copy a file for quick testing/prototyping

_First, let me say that this practice should not be used to create a Docker container for production. The official method is to use a Dockerfile to create a custom Docker image for your project._

**Sometimes however, you need a quick way to copy some stuff into a running container to test it out.** Docker provides a dedicated command called `docker cp` to support this.

Let's start an [Nginx](https://www.nginx.com/){:target="_blank"} container on your machine and list its container name and id.

```shell
$ docker run -d -p 80:80 nginx

$ docker container ls

CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
32968fb89612        nginx                 "nginx -g 'daemon of…"   4 seconds ago       Up 3 seconds        0.0.0.0:80->80/tcp                                 eager_curran
```

Visiting [http://localhost](http://localhost){:target="_blank"} you should see the default Nginx welcome page. Please note the container name in the above output, we'll use it later. (My container is called `eager_curran`, yours has a different name.


Now let's create a simple HTML file on your host machine in a new directory. We'll copy this file into the container in the next step.

```shell
$ echo "<h1>Containerize all the things</h1>" >> index.html

```

Let's copy this file into the running container using the container's name from the first command output.

```shell
$ docker cp index.html eager_curran:/usr/share/nginx/html/index.html
```

Let's visit [http://localhost](http://localhost){:target="_blank"} and check out the results. **The new html page should be displayed in your browser.**

My experience is that you hardly ever use this command in real projects, because there is a better way to achieve file sharing between host and container for development and prototyping purposes. 

**The more Docker-like way is to bind mount a host directory or a host file into your Docker contianer.** Bind mounting works both ways; meaning any change in the host file system will immediately appear in the container and similarly any change in the container in the mounted directory will immediately appear on the host.

This way you have a flexible all-rounder solution for your problem.

Let's see and example. Please stop and remove the previous container with `docker container rm $(docker container stop <container_name>)` and let's start a new container.

```shell
$ docker run -d -p 80:80 -v $(pwd):/usr/share/nginx/html/ nginx

CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
802a9e2c30ec        nginx                 "nginx -g 'daemon of…"   7 seconds ago       Up 6 seconds        0.0.0.0:80->80/tcp                                 awesome_franklin
```

Now if you go to [http://localhost](http://localhost){:target="_blank"}, you find our custom html page appear in the browser right away. What's really great about bind mounting the local directory is that if you change `index.html` now on the host machine with a text editor (and save it), then refreshing the browser page gives you the changed file after refreshing the browser page.

_Bind mounting is a much more effective way of copying files from the host machine to a Docker contianer for development, testing and prototyping._

## You are building a custom image for your project and you want to add files to the image from your host machine

**Mastering the art of building a custom Docker image for your project is one of the most crucial steps in your Docker learning journey.**

I see many people struggle to build an effective workflow to experiment with various image building steps.

There are still tutorials out there from many years ago that suggest to start a container, add your stuff in there and turn your Docker container into a Docker image with the `docker commit` command. Please don't go down this path. Let me tell you why.

_When you build your Docker image, your final deliverable is a Dockerfile. The Dockerfile is a step by step instruction list that tells Docker how to build a Docker image with the `docker build` command. (Or `docker-compose build` if you are using Compose.)_

Whit the use of the Dockerfile you have a repetable, ephemeral way to build a Docker image all over again and get the same results every time. 

Moreover, the Dockerfile is an artifact that **you should check into source control**. Having part of your environment described in the Dockerfile under source control will greatly improve your project's quality and save you time, money and headache.

So we'd better find a smart and reliable way to build the Dockerfile. Here is how I usually do it.

1. Find a good parent image for your custom image and add it to the Dockerfile in the `FROM` instruction.
2. Create your `docker-compose.yml` file, describe the build settings for your image.
3. Create your `docker-compose.override.yml` file for development configuration and map the local directory into the container.
4. Start up the container with `docker-compose up`.
5. Use `docker-compose exec` to start an interactive shell in the container.
6. Experiment with an image building step and check the results.
7. Once you're happy with a step add it to the Dockerfile.
8. Stop the running container with `docker-compose down`, rebuild the project and repeat step 4 to 8 as many times as needed.

You can see working examples of this workflow following the exercises in my [Docker book](http://localhost:4000/get-started-with-docker-in-your-projects-through-examples){:target="_blank"}.

Some people get confused wether they should use `ADD` or `COPY` in the Dockerfile to copy files from the host to the image. 

**The best practice is to use `COPY`, this is what projects should follow.**

The difference between `ADD` and `COPY` is historical. Both can copy files and directories from the host machine into the image during build time. `ADD` was created first, and beyond the file system copy functionality it can also copy files from URLs (the web) and copy and uncompress compressed files into the Docker image. It can do more than `COPY` that does not have these extra features, but there is a catch. Due to the uncompressing abilities of `ADD` it is not always reliable, meaning that it may produce different results depending on wether it supports a certain compression format or not.

Most projects did not like the relative unreliability of `ADD` and `COPY` was created that does only one thing but does it well. That's why it's recommended to use `COPY` in your projects.

## You created some artifact in a Docker container and want to copy it to the host

**We often use Docker as a development tool, in the sense that we create Docker containers to initialize the project code base from a template, generate code from a model or create development artifacts in some automated way.**

My book has an example where we take a [Cookiecutter](https://github.com/cookiecutter/cookiecutter){:target="_blank"} project template and initialize the project with a Python image. The project is generated within the image and must be copied to the host machine.

In that project I'm not using bind mounted volumes in my initialization Docker container, because I wanted to keep everything in the container and get the final project files only. I automated the whole process with a Makefile.

Once the project files are generated I have a `docker cp` command in my Makefile that copyies the project files from the container to the host. 

**I can do this because `docker cp` works both ways**.

**Another common use case is to copy default configuration files from official project images to your host machine to be changed in your project.**

Let's see an example of this case and copy the default Nginx configuration file to the host.

Remove any running containers and start a new one.

```shell
$ docker run -d -p 80:80 nginx

$ docker container ls

CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
8e29e553ce82        nginx                 "nginx -g 'daemon of…"   3 seconds ago       Up 2 seconds        0.0.0.0:80->80/tcp                                 laughing_keldysh
```

Let's copy the Nginx configuration file to your host machine.

```shell
$ docker cp laughing_keldysh:/etc/nginx/nginx.conf ./
```

**The default Nginx configuration was copied into your working directory on the host machine. Now you can add the file to your project, change it and use it in your Dockerfile.**

If you want to make these steps automatic, you can use the `--name` option in your `docker run` command, this way your container will always have the same name that you can use in a script.

_NOTE: this method is great when you need to copy files from the container that you want to change and track in source control. This method is not meant for your build process._

What I mean is that you should not use a container to build your project and copy your build artifacts with `docker cp` to the next stage of your build and deployment pipeline. **Docker has [multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/){:target="_blank"} to achieve this.**
