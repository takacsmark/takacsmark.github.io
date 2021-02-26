---
layout: post
title: "Docker prune explained - usage and examples"
description: "Docker prune is the way to clean up containers, images, volumes and networks on your system. See how to remove unused resources, free up space and unclutter you environment."
date: 2018-10-02 07:19:00 +0100
author: Márk Takács
thumbnail: "/assets/images/post-thumbs/docker-prune.png"
category: Tutorial
---

<!-- prettier-ignore -->
* TOC
<!-- prettier-ignore -->
{:toc}

Working with Docker, you'll soon find various objects on your system that are hanging around from previous activities. It is essential to learn how to clean up Docker objects safely and pragmatically during project work.

**You can watch this tutorial on Youtube, too.**

<div class="mb-4 embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QruAkYHCFPE" allowfullscreen></iframe>
</div>

## What Docker objects need clean up

The Docker objects that stay around may be of various types:

- Docker containers
- Docker images
- Docker volumes
- Docker networks

## Clean up Docker containers

Docker will not clean up stopped containers by default. Containers may exit with a success exit code or with an error, and they may be stopped by you. In all these cases the containers will remain on your system and you'll want to clean them up after a while.

Before we move to the cleaning instructions, let me give you a few tips to remove containers as part of your workflow:

- Starting your Docker containers with `docker container run --rm` tells Docker to remove the container when it exits. The downside of this method is that you'll not be able to access the Docker logs after the container exits.
- Starting your containers with `docker-compose up` and stopping them with `docker-compose down` when you finished your activities, will remove all containers and networks involved with the application automatically. This is good practice because the logs will be available all along and cleanup is built into the workflow. Using Docker Compose will leave less garbage on the system.
- Using Swarm mode's `docker service create` or `docker stack deploy` to create containers and `docker service rm` or `docker stack rm` will remove containers automatically. Your workflow and benefits are similar to Docker Compose.

After a while we all have something to clean up, so let's see how to do this. I started up a few Docker containers on my machine:

```shell
~ docker container ls -a
CONTAINER ID        IMAGE                                                   COMMAND                  CREATED             STATUS                    PORTS                                              NAMES
b805f67ec113        nginx:1.15.1-alpine                                     "nginx -g 'daemon of…"   13 seconds ago      Up 11 seconds             0.0.0.0:8080->80/tcp                               hardcore_archimedes
8cfa08b910f6        nginx:1.15.1-alpine                                     "-d"                     38 seconds ago      Created                   0.0.0.0:8080->80/tcp                               romantic_elbakyan
3edccda81c16        takacsmark/takacsmark-dot-com:devtools-10.8.0-stretch   "/bin/bash"              19 hours ago        Exited (0) 18 hours ago                                                      takacsmarkgithubio_gulp_run_1
df2c60b675f1        jekyll/jekyll:3.8.3                                     "/usr/jekyll/bin/ent…"   19 hours ago        Up 19 hours               0.0.0.0:4000->4000/tcp, 0.0.0.0:35729->35729/tcp   takacsmark-dot-com
```

I have 4 Docker containers on the list:

- 2 Nginx containers. Please note that one of the Nginx containers is running (it's in the "Up" state) and the other container is in "Created" state. The created state means that the container was created but it's not running.
- I have a container based on a custom Docker image called `takacsmark/takacsmark-dot-com:devtools-10.8.0-stretch`. I use this image to run gulp tasks when I build my blog. This container was created with `docker compose run` and it is in the "Exited" state now.
- I have another container called `takacsmark-dot-com` that serves my blog in development mode. This container was started with Docker Compose.

We can clean up the containers with the `docker container prune` command. Docker will focus on the containers only, it won't matter which way you started them. The command will remove all stopped containers.

Let's see how it works:

```shell
~ docker container prune
WARNING! This will remove all stopped containers.
Are you sure you want to continue? [y/N] y
Deleted Containers:
a3586090a7ac9647a6170e0e4ea5ac495918373b245af1dab6e88ec5e202c928
8cfa08b910f6cc61001426f4ce00de50a030b62bcb34975999dd19e23c918820

Total reclaimed space: 5B
```

This command will ask for confirmation (that you can suppress with the `-f` flag). It has removed two Docker containers from my machine. As you can see in the output, Docker has removed 2 containers and the amount of total reclaimed space is also displayed.

This is the list of containers now:

```shell
~ docker container ls -a
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                                              NAMES
b805f67ec113        nginx:1.15.1-alpine   "nginx -g 'daemon of…"   About an hour ago   Up About an hour    0.0.0.0:8080->80/tcp                               hardcore_archimedes
df2c60b675f1        jekyll/jekyll:3.8.3   "/usr/jekyll/bin/ent…"   20 hours ago        Up 20 hours         0.0.0.0:4000->4000/tcp, 0.0.0.0:35729->35729/tcp   takacsmark-dot-com
```

As you can see the containers in "Exited" or "Created" state were removed from my system.

You can use `docker container prune` in a bit more sophisticated way with filters. You can, for example, remove containers created more than 10 hours ago like this:

```shell
~ docker container prune --force --filter "until=10h"
```

Get more help with the command `docker container prune --help`.

## Cleaning Docker images

Yyou can use `docker image prune` to cleaning up Docker images in two modes:

- Clean up dangling images. - This is the default behavior.
- Clean up all Docker images that have no running containers associated with them.

### Cleaning dangling images

Dangling images are the images that are not tagged on your system. They are created when you build a Docker image with the same tag again and again. In this case Docker will move the tag to the latest image resulting from the build and all previous images created by that build will have no tag.

Here is an example:

```shell
~ docker image ls
REPOSITORY                                          TAG                       IMAGE ID            CREATED              SIZE
takacsmark/flask-redis                              1.0                       027a4f101492        2 seconds ago        88.2MB
<none>                                              <none>                    74ebf583f7b3        About a minute ago   88.2MB
takacsmark/flask-redis                              <none>                    7c94cfc2fcd5        5 days ago           88.2MB
```

These images are the result of the same build process, but they have been built at different times and they incorporate project changes, so they are different. Only one of them has a proper tag, the other two are dangling.

You can list dangling images on your system with this command:

```shell
~ docker image ls -f "dangling=true"
```

You can prune dangling images with the `docker image prune` command:

```shell
~ docker image prune
WARNING! This will remove all dangling images.
Are you sure you want to continue? [y/N] y
Deleted Images:
deleted: sha256:74ebf583f7b37c6ab2e15a72c6b47f7ba508c0b5a206df087574a91269193157
deleted: sha256:d143fb78b3a0618e934dcbda2b1132432fdc463705a752d24d6e46a4a93603b0
deleted: sha256:b733b700e67275d0f3c697118033196f92c1c47f78e5b730cae3536b385a243e
deleted: sha256:77899bf89c610b150eb69069177d08e1a4254141b2229bd12f04062b1886c129
untagged: takacsmark/flask-redis@sha256:24f3a64f803558336d214b0d72367e7b22777f61967bb0a9754f507b24ef8dc9
deleted: sha256:7c94cfc2fcd548208ec003b99581fb7fdcc0fda86c5acfca6fb62432de634a5c
deleted: sha256:99433c6f5ec4307e3931af82eae6d51d85422f2cc49511d851ec08eb1f6cc061
deleted: sha256:904ba7062c986684394f48cffd1fc43f9d6db3bfecc5891d1ec338091d7924e8
deleted: sha256:a5584c56e7347c6a67570c09a1940ec7030641b5dd4ffaf7ee68c2f8ee819b77

Total reclaimed space: 14.59kB
```

Both images were cleaned from my system with all layers associated with them. The reclaimed space is not significant right now, but it can be quite important if you build large images.

### Cleaning all Docker images

You can use the command `docker image prune -a` or `docker image prune --all` to remove all unused images from your system. I never used this command, to be honest, I like a bit more control over what I clean up.

You can use the `-filter` option with `docker image prune`, too, and you can get more information using the command `docker image prune --help`.

## Cleaning Docker volumes

Docker volumes are not removed by Docker by default, because Docker volumes contain data, and you should be in control of your data at all times. So, if you stop a container, the related volumes will hang around on your system.

If you list the Docker volumes on your machine, you might be surprised:

```shell
~ docker volume ls
DRIVER              VOLUME NAME
local               4760c2d78bf6de835421aed7a2dba9a3b401d874af9ccc2bf608e0d785718f1a
local               68968027bb09ffaad6a2d8c6e95e3019e14142d2fca49a4a15784162b04611dd
local               69acecb345cbc93109bbcbee27c0159bd74cdaae52feef8cbefba1b3508a25df
local               flask-redis_mydata
local               wordpress-official_mariadbdata
local               wordpress-official_wordpressdata
```

You'll find that you have the named volumes that you created on your system, like `flask-redis_mydata` or `wordpress-official_mariadbdata` on my list.

You'll also have volumes with random long names. These volumes are created automatically by Docker. Most often they are created because they are defined in Docker images. Many official images define Docker volumes to store data externally. These volumes will be created, even if you do not specify any volume information when you start up your containers. In this case such volumes get a random name.

The official Mariadb image defines a volume in the [Dockerfile](https://github.com/docker-library/mariadb/blob/4891ee2e3bd2dc6b07db634a39433ad579764a4b/10.3/Dockerfile){:target="\_blank"} that points to `/var/lib/mysql`, for example. The official Postgres [Dockerfile](https://github.com/docker-library/postgres/blob/3f585c58df93e93b730c09a13e8904b96fa20c58/10/Dockerfile){:target="\_blank"} defines an image that points to `/var/lib/postgresql/data`. This means that if you start up a container from these images, Docker will create a volume with a random name and put the data under the specific directory into that volume.

You may accumulate quite many Docker volumes on your system over time. It's a good practice to check and clean your volumes regularly.

**Cleaning Docker volumes is critical during development. It happens often that the data in your named volumes will give you bugs when you run updated code on the old version of your data. You should build volume pruning into your workflow.**

The `docker volume prune` command will remove all volumes that are not used by at least one container. This may get dangerous, because you may loose some prepared data. **Therefore it is essential to set up REPEATABLE data initiation and migration tools for your projects, don't just store critical data in your Docker volumes.**

```shell
~ docker volume prune
WARNING! This will remove all local volumes not used by at least one container.
Are you sure you want to continue? [y/N] y
Deleted Volumes:
4760c2d78bf6de835421aed7a2dba9a3b401d874af9ccc2bf608e0d785718f1a
68968027bb09ffaad6a2d8c6e95e3019e14142d2fca49a4a15784162b04611dd
69acecb345cbc93109bbcbee27c0159bd74cdaae52feef8cbefba1b3508a25df
flask-redis_mydata
wordpress-official_mariadbdata
wordpress-official_wordpressdata

Total reclaimed space: 146MB
```

The command has removed all volumes form my machine.

The official documentation suggest to use labels to keep some of your volumes and use a prune command like `docker volume prune --filter "label!=keep"`. I would advice against this practice, because it will not stop anyone from running a `docker volume prune` on your system.

You can get more help with the command `docker volume prune --help`.

## Clean up Docker networks

Docker networks are usually created in a larger context with Docker Compose or in Swarm mode, and you usually use these tools to remove the stacks that will remove networks automatically. Unused networks tend to hang around less often than images or volumes, at least this is my experience.

Nonetheless, you may crate networks with `docker netwrok create` or you may end up with unused networks, so let's see how to clean them.

These are the Docker networks on my machine now:

```shell
~ docker network ls
NETWORK ID          NAME                         DRIVER              SCOPE
adb3e03409a4        bridge                       bridge              local
cef4092fbf4c        docker_gwbridge              bridge              local
b14410585a68        host                         host                local
nwmxlht20wbe        ingress                      overlay             swarm
6f7f82dc82cd        none                         null                local
aed6eb1a783e        takacsmarkgithubio_default   bridge              local
```

The first 5 networks are default networks; `bridge`, `host` and `none` are the default networks created by the Docker Engine and `ingress` and `docker_gwbridge` are created by the Swarm mode. I turned on Swarm mode to show you what happens to these networks.

The last Docker network is custom and it is not used by containers.

If I clean them, the custom network will be removed:

```shell
~ docker network prune
WARNING! This will remove all networks not used by at least one container.
Are you sure you want to continue? [y/N] y
Deleted Networks:
takacsmarkgithubio_default
```

You can get more help with `docker network prune --help`.

## Clean up your system

There is one command to rule them all; you can clean up your entire system with `docker system prune`:

- stopped containers
- unused networks
- dangling images
- build cache

The command will not clean up volumes by default, you can use the `docker system prune --volumes` command to include volumes in to the cleanup.

You can add the `-a` or `--all` flag to clean up all images, not just dangling ones. Filters are also available, similarly to the previous prune commands.

You can get more information with `docker system prune --help`.
