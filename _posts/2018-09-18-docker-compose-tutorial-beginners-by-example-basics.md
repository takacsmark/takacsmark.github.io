---
layout: post
title: "Docker compose tutorial for beginners by example [all you need to know]"
description: "Learn everything you need to get started with Docker Compose in your project work. Learn gradually going through examples, get best practices based on previous project experience."
date: 2018-09-18 01:59:00 +0100
thumbnail: "/assets/images/post-thumbs/docker-compose-beginners-all-you-need-to-know.png"
categories: Docker, Tutorials
---
* TOC
{:toc}

In previous tutorials we learned the basics of Docker containers and Docker images, and we've built several examples together. If you missed those lessons or need a refresher, please check out my previous tutorials, we'll build on top of the learning points from those articles here.

## What is Docker Compose

Most projects build architectures that involve more that one architecture component. Even the simplest hobby project will probably be built with a database and an application server of some kind. For example, the popular Wordpress stack consists of a Wordpress installation and a MySQL database instance.

So far we have learned how to build images and start up containers for a single purpose.

If your application needs multiple components, i.e. multiple containers for differenct purposes, you need some tool to define the containers involved in your application stack and how these containers work together.

I don't want to make this article confusing for beginners, so we'll stay with the below definition for the first example and we'll add more details later in this post:

**Docker Compose is the toolkit provided by Docker to build, ship and run multi-container applicatoins.**

There are two key forms of Docker Compose that you'll use in your project:

* Docker Compose comes in the form of a command line command that you'll use to build, ship and run multi-container applications. The command is called `docker-compose`.
* Docker Compose provides the Compose file, where you'll define your application stack and the way components in your stack interact with each other. The Compose file is a text file in the `yml` format.

## Compose file basics

Let's build an example together to get started with the Compose file. First, we'll define a simple stack with the Compose file, and then we'll use the `docker-compose` command to start up the stack and see how we can manage multi-container applications on the command line.

I decided to build a Python Flask sample application with a Redis data store. I think building Wordpress would be a good idea, but I wanted to pick something more development-like, so maybe I'll cover Wordpress in another post (you can find the Wordpress stack in my Docker book, if you need it now).

Our Flask stack will contain the following components:

* The Flask application server that takes user requests and manipulates data in the data store.
* The Redis data store.

People new to Docker often try to build containers that contain both the application server and the database in one container. While this is technically feasible, it is not the Docker way.

As we learned before, one Docker container should have one concern. Containers are isolated from each other and are deployed and scaled independently. To separate concerns in our application, we'll keep our Flask application server and the Redis data store in separate containers.

### Preparing the example

This means that we'll run two containers in our stack, and we'll have to define the two images to be used for these two containers:

* The Flask container will contain our Flask application source code, so we'll build a custom Docker image based on the Dockerfile that we'll create for this example.
* The data store container will use the official Redis image from the Docker Hub .

Let's prepare the basis of the application server. We'll create the following files:

* `requirements.txt` - describes the Python dependencies, we'll use this file to install Flask and the Redis Python interface to be used in the Python application.
* `app.py` - defines our Flask application
* `Dockerfile` - defines the Docker image of the Flask application

Please create a directory for this exercise on your machine, I call mine `flask-redis` and place the file into this directory. My directory looks like this now:

```console
$ tree
.
├── Dockerfile
├── app.py
└── requirements.txt
```

Let's see what to put into the files!

#### requirements.txt

Let's add the contents to `requirements.txt`:

```text
flask
redis
```

#### app.py

Our application code in `app.py` is shown below:

```python
from flask import Flask, request, jsonify
from redis import Redis

app = Flask(__name__)
redis = Redis(host="redis", db=0, socket_timeout=5, charset="utf-8", decode_responses=True)

@app.route('/', methods=['POST', 'GET'])
def index():

    if request.method == 'POST':
        name = request.json['name']
        redis.rpush('students', {'name': name})
        return jsonify({'name': name})

    if request.method == 'GET':
        return jsonify(redis.lrange('students', 0, -1))
```

If you are not familiar with Python or Flask, please do not worry, this is a very simple example. Let me explain what the code does:

We import the `Flask` class, the `request` object and `jsonify` from the `flask` package. `Flask` is the class that we'll use to instantiate the Flask application. We handle user requests in the form of the `request` object and we'll use `jsonify` to return json responses from our request handler function, called `index`.

After the import lines, we use `app = Flask(__name__)` to create a Flask application instance.

With `redis = Redis(host="redis", db=0, socket_timeout=5, charset="utf-8", decode_responses=True)` we create a Redis interface instance in our application. We'll talk about this line in more details later.

The rest of the code defines a route that we can send requests to from a browser or an API client like Postman or curl.

You can send an http `POST` request to the application with data in the form `{"name" : "<some_name>" }` to the URI `"/"` and the app will add a new entriy to the end of the `students` list in Redis.

Sending an http `GET` request to the `"/"` URI will retrieve and return the list of students in the Redis store.

#### Dockerfile

This is the initial contents of our Dockerfile:

```dockerfile
FROM python:3.7.0-alpine3.8

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_APP=app.py

CMD flask run --host=0.0.0.0
```

#### Adding the Compose file

In order to make the application work we have to add the Compose file to glue all the components together. Let's create a file called `docker-compose.yml` in our project directory.

The name `docker-compose.yml` is the default name of the compose file. The `docker-compose` command will look for the Compose file by this name. We'll see later in this post how you can change the name of the Compose file, or use multiple Compose files that extend each other.

The structure of my project directory is this right now:

```console
$ tree
.
├── Dockerfile
├── app.py
├── docker-compose.yml
└── requirements.txt
```

Let's add the below contents to the compose file, and I'll explain what's going on:

```yaml
version: '3'

services:
  app:
    build: .
    image: takacsmark/flask-redis:1.0
    environment:
      - FLASK_ENV=development
    ports:
      - 5000:5000

  redis:
    image: redis:4.0.11-alpine
```

This file is in the `YAML` format, which is a "human friendly data serialization standard for all programming languages", as seen on [yaml.org.](http://yaml.org/){:target="_blank"}

On the first line we specify the version of the Compose file format as `version: '3'`. Docker Compose file format has various versions as new features are added to the Compose file. Versioning is essential to make sure that changes won't break your applications.

If you don't specify the version in the Compose file it will be considered `version: 1`.

The Compose file uses a two digit versioning notation. The current latest version is `3.7`. It is enough to specify the major version (i.e. `version: 3`) in your Compose file, but for certain new features you may have to add the exact two digit version number, like `version: 3.7`.

In the `services` section, we are defining two services, as we already decided at the beginning of the project: one service for our Flask application, that we call `app` and another service that we call `redis`.

Services correspond to your application components. As you separate your concerns in your architecture, you'll create separate Docker images to serve separate concerns.

One service in a Compose file is supposed to serve one concern of your architecture. You can specify exactly one `image` per service. _So, a simple rule of thumb is to create one service for each image in your application._

We'll use the `docker-compose` command soon to start up containers using the images that we specified for our services in the Compose file.

Our first service looks like this:

```yml
  app:
    build: .
    image: takacsmark/flask-redis:1.0
    environment:
      - FLASK_ENV=development
    ports:
      - 5000:5000
```

This section starts by defining `build: .`. This means that this service uses a custom image that is built using the Dockerfile in the current directory (hence `.`).

The name of the image is specified on the next line: `image: takacsmark/flask-redis:1.0`. If the image does not exist on the local machine, Docker Compose will build it with the name specified in the `image` tag.

You can notice that the rest of the options (`environment` and `ports`) are very similar to the options that you use with the `docker run` command. The reason for this is that we use Docker Compose to create containers from images the same way we use `docker run` to create containers form Docker images.

In the example we define an environment variable for the containers we start from the service's image, plus we define the port mapping `5000:5000` to map port `5000` from the container to port `5000` on the host machine.

The code of the Redis service is much shorter:

```yaml
  redis:
    image: redis:4.0.11-alpine
```

We tell Docker Compose to use the official Redis image for this service. Docker Compose will pull this image from the Docker Hub when we start up the application.

### Run the example

To run the example you need to have `docker-compose` installed on your system. The Docker for Mac and Windows apps come with `docker-compose` included, but on Linux systems you need to install it yourself. If you are on Linux, please follow [this guide](https://docs.docker.com/compose/install/#install-compose){:target="_blank"} to install Compose.

Let's run the example with a single command:

```console
$ docker-compose up
```

This command will build the custom image for the `app` service and pull the Redis image from the Docker Hub and start them as we described the stack in our Compose file.

To test the app, you can post a student with curl like this (or alternatively you can use a tool like [Postman](https://www.getpostman.com/){:target="_blank"}):

```console
$ curl --header "Content-Type: application/json" \
--request POST \
--data '{"name":"Kumar"}' \
localhost:5000

{
  "name": "Kumar"
}
```

Let's get the list of students back with another request:

```console
$ curl localhost:5000

[
  "{'name': 'Kumar'}"
]
```

### How are the containers connected

As you can see, the containers are automagically connected when we run the stack with `docker-compose up`. Our Flask app can access the Redis data store without any further configuration. It's crucial to understand the mechanism behind this magic.

To look into this, let's stop the stack with the following command:
```console
$ docker-compose down
```

Yes, it is to simple to stop a stack, we'll talk about this later in this post.

Let's see what Docker does when we we issue the `docker-compose up` command again. I added the `-d` flag to the command to start the stack in the background to get less output info:

```console
$ docker-compose up -d
Creating network "flask-redis_default" with the default driver
Creating flask-redis_app_1   ... done
Creating flask-redis_redis_1 ... done
```

Docker is creating two containers as expected, but it's also creating something else; Docker created a default network for our application components.

The two containers are connected to the network named `flask-redis_default`. This network was created by Docker Compose automatically for our stack.

The network `flask-redis_default` is isolated from other networks on the host machine, which means that no other containers may access containers on this network without permission. Beyond isolation, there is a great advantage that comes with the custom network.

**Containers on this network can refer each other by service name.** This means that if I want to access the Redis container from my app code, I can use the service name `redis` as the host name to access the container.

This is exaclty how we connected our Redis service to our app in `app.py` on this line:

```python
redis = Redis(host="redis", db=0, socket_timeout=5, charset="utf-8", decode_responses=True)
```

As you can see, the value of the `host` argument is set to `redis`, because the name of the Redis service is `redis` in our Compose file.

This way you can easily connect containers to each other with Docker Compose. You can also specify custom, more complex network setups beyond the default network.

If you inspect the custom network that Compose has created, you'll find that there are exactly two containers connected to this network; `flask-redis_app_1` and `flask-redis_redis_1`.

```console
$ docker network inspect flask-redis_default
[
    {
        "Name": "flask-redis_default",
        "Id": "e3b63124782efbcb2b193985d907e848c9cf3618e4996c80456e5591156aeef3",
        "Created": "2018-09-21T11:42:17.1362975Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.27.0.0/16",
                    "Gateway": "172.27.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": true,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "4e11ac08ae2c75853d0a65172b707c259edb645584465f7bbc726b30acc01108": {
                "Name": "flask-redis_app_1",
                "EndpointID": "a463e63c13641d3fc551100db5bef0f76c87664e1af14cc2c7f9281e768d88e0",
                "MacAddress": "02:42:ac:1b:00:02",
                "IPv4Address": "172.27.0.2/16",
                "IPv6Address": ""
            },
            "83d226621db9fb78e9b41a730229fc8160e9d80a23466ca879ebf85b77f3d5ad": {
                "Name": "flask-redis_redis_1",
                "EndpointID": "83206a1c551723ea1c32701a5e2dd6a359f5709261b31f56b5b2f96edb7fa516",
                "MacAddress": "02:42:ac:1b:00:03",
                "IPv4Address": "172.27.0.3/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {
            "com.docker.compose.network": "default",
            "com.docker.compose.project": "flask-redis",
            "com.docker.compose.version": "1.22.0"
        }
    }
]
```

If you inspect the containers individually, you'll find that they are only connected to one network, namely `flask-redis_default`.

If you do not define your own network configuration in the Compose file, Compose will always create the default network for your stack. This way you can always enjoy the benefits of the default network, or you can build your own networking configuration for your stack.

## Working with the Compose file

Compose provides a huge number of options, let me point out a crucial resource that you'll use almost continuously.

### The Compose file reference

The best resource for writing Compose files is the [official Compose file reference](https://docs.docker.com/compose/compose-file/){:target="_blank"}. I usually have this page open all the time, this single page contains all options and possibilities that you can use in the Compose file.

It's best to use it as a mere reference to find out how to specify various aspects of your stack in the Compose file. The reference will not give you a broad overview of the concepts around Docker Compose, but don't worry we'll do this in this article.

The Compose file reference is a practical resource, I would only highlight a few aspects so that you can find your way easier when you're using it.

### Docker Compose vs Swarm

To understand the usage of the Compose file reference, we need to understand a broader concept, namely the difference between Docker Compose and Docker Swarm.  

I know that this might be a bit overwhelming for a beginner, but we have to see this, I'll try to explain it gently.

As we stated before, Docker Compose is a tool to manage multi-container applications. **Docker Compose can manage multi-container applications on a single machine only. It does not work on computer clusters, accross multiple machines.**

**Docker Swarm, another Docker product, is designed to manage multi-container application stacks on computer clusters. You can use Docker Swarm to deploy and run your stack accross multiple machines.**

We'll return to the implications of this difference later in the article, right now there is one point I would like to teach you.

_Docker Compose and Docker Swarm can both use the same Compose file to deploy and run application stacks._ The evolution of this design is historical.

Docker Compose was released first and we used it to create applicaitons with multiple services, connected them with custom networks and run them on a single machine.

Later on, the cluster management features were added to Docker with Docker Swarm and the Compose file has been made compatible with the Swarm mode.

**_This implies, that you'll find entries in the Compose file reference online that are compatible with either Docker Compose or Docker Swarm. Whenever some feature is limited to either Compose or Swarm, it is clearly highlighted in the documentation._**

We focus on Compose in this article. If you see limitations related to Docker Swarm, or a Swarm command called Docker Stack in the file reference, that means that those features will not work with Compose.

You can read more about practical implications of this evolution in the chapter called "Docker Compose in production" below.

### The structure of the Compose file

The compose file reference documentation is layed out following the structure of the Compose file. The main chapters in the docs are related to the top-level entries of the Compose file, these are the following as of today:

* version - specifies the version of the Compose file reference, you have seen it in the example.
* services - specifies the services in your application, we used it in the example.
* networks - you can define the networking set-up of your application here, we'll see an example in a minute.
* volumes - you can define the volumes used by your applicaiton here, we'll see an example.
* secrets - secrets are related to Swarm mode only, you can use them to provide secret information like passwords in a secure way to your application services.
* configs - configs lets you add external configuration to your containers. Keeping configurations external will make your containers more generic. Configs is available both in Compose and in Swarm mode.

### Service configuration options

The Compose file reference is very well written, I'll only highlight a few practical use cases that are very common.

#### Build configuration

If your service uses a custom Docker image, you use the `build` section to specify the details of the build. You can define your build `context`, build arguments (`args`), `dockerfile` location and even the `target` build stage in a multi-stage build. We'll see build examples below.

#### Runtime configuration

You can specify runtime parameters in the Config file the same way you can specify them with the `docker run` command. This makes Docker Compose an ideal automation tool for your `docker run` commands, too.

The `image` section specifies the name of the image to be used to start up containers. If your service has a build section, the resulting image of the build will be tagged with the name that you specify in the `image` section.

You can override the container command in the `command` section in the Compose file. You can specify an entry point with `entrypoint`.

You define port mappings with `ports`, volumes with `volumes`, attach containers to your custom networks with `networks`.

You can specify a custom `container_name`, this may be useful if you need the container name in a script, for example. Compose can scale your services, meaning start up multiple replicas of a service as you'll see later. If you use a custom `container_name`, you cannot scale that service beyond one container.

You can specify service dependencies with `depends_on`. Services will be started up in dependency order. Please note that this does not mean that the services you start up first will be fully functional. Docker only makes sure that the container is started, it does not guarantee that the functionality is ready to be consumed by other containers. For example, it does not mean that your DB is ready to be used by other contianers, it just means that the DB container is up first.

You can pass environment variables with `environment` as we have seen in the example.

#### Deployment options

The `deploy` section only applies in Swarm mode. It includes deployment configuration and resource limitations, update and rollback preferences and more. Version 3 of the Compose file reference does not include deployment config for Compose based services.

This makes the use of Compose in production rather difficult. Version 2 of the Compose file format has CPU, memory and other resource configuraiton options, you can use version 2 if you want to use Compose in production.

You can read more about this later in this article.

## Work with Docker Compose in your projects

### Compose CLI

The Docker Compose command has various subcommands that you can use during your everyday work. We'll use the most important ones in this article. If you are in need of an overview or a refresher, you can always use this command in Terminal to get help:

```console
$ docker-compose --help
```

This command will give you a list of subcommands and options. We have used the `up`, `down` and `help` subcommands so far.

### Build images with Docker Compose

Docker Compose provides a dedicated subcommand to build images, it's called `docker-compose build`. You can get detailed help about subcommands, too:

```console
$ docker-compose build --help
```

The `build` subcommand will build all the images that are specified in the Compose file. The command will go through all services in the Compose file and build the ones that have a `build` section defined.

You can use the `docker-compse up` command in the form of `docker-compose up --build` to build images when starting up your stack.

The command `docker-compose up` will only build your image if the image does not exist, but if it exists it will not re-build it every time you start up your application. The command `docker-compose up --build` will re-build your image if the Dockerfile or image files have changed. If you need to initiate a build with no cache you can use the `docker-compose build --no-cache` command.

I know it sounds a bit overwhelming, I usually use `docker-compose up --build` in local development and use `docker-compose build --no-cache` if something looks out of place.

### Use build arguments

I think this option is so significant that we should update our example quickly. Build arguments are arguments that you can pass to your build, i.e. you can pass these arguments from the Compose file to the Docker file. Let's pass the parent image version to our Dockerfile as a build argument.

Let's change the Compose file like this:

```yaml
version: '3'

services:
  app:
    build:
      context: .
      args:
        - IMAGE_VERSION=3.7.0-alpine3.8
    image: takacsmark/flask-redis:1.0
    environment:
      - FLASK_ENV=development
    ports:
      - 5000:5000
  redis:
    image: redis:4.0.11-alpine
```

We changed the build section from `build: .` to multiple options on multiple lines. To achieve this we moved the build context path to the line `context: .` and we added the build argument under `args`. We can add multiple arguments if we need to.

We use the image version in the Dockerfile like this:

```docker
ARG IMAGE_VERSION

FROM python:$IMAGE_VERSION

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_APP=app.py

CMD flask run --host=0.0.0.0
```

First, we use the `ARG` instruction to denote that we'll use the argument `IMAGE_VERSION`. Since we are using the argument in the `FROM` instruction we have to put `ARG` before `FROM`.

Then we use the value of the build argument on the next line: `FROM python:$IMAGE_VERSION`.

Please run the stack with:

```console
$ docker-compose up -d --build
```

You should get the same results as before. Please create a few students in the data store, you'll need them later.

### Manage multi-container applications

Docker Compose gives you various subcommands to manage multi-container applications.

The command `docker-compose ps` will list the containers in your application

```console
$ docker-compose ps
       Name                      Command               State           Ports
-------------------------------------------------------------------------------------
flask-redis_app_1     /bin/sh -c flask run --hos ...   Up      0.0.0.0:5000->5000/tcp
flask-redis_redis_1   docker-entrypoint.sh redis ...   Up      6379/tcp
```

You can access the logs of all containers like this:

```console
$ docker-compose logs
```

Please note that the usual flags are available also here, so you can use `-f` to follow the logs, for example. You can get more info about the available options with `docker-compose logs --help`.

If you want to access the logs of one service only, you can use this form: `docker-compose logs SERVICE`.

To see the processes in your containers use the following command:

```console
$ docker-compose top

flask-redis_app_1
 PID    USER   TIME                                  COMMAND
-------------------------------------------------------------------------------------------
37327   root   0:00   {flask} /usr/local/bin/python /usr/local/bin/flask run --host=0.0.0.0
37550   root   0:02   /usr/local/bin/python /usr/local/bin/flask run --host=0.0.0.0

flask-redis_redis_1
 PID    USER   TIME     COMMAND
----------------------------------
37294   rpc    0:01   redis-server
```

You also have subcommands to start, stop, kill and restart containers for all or some servicessome in your multi-container application with the `start`, `stop`, `kill` and `restart` subcommands.

### Execute commands in a running container

We need to execute commands in running containers quite often, especially during development. We can easily do this with the use of the service name:

```console
$ docker-compose exec app ps
PID   USER     TIME  COMMAND
    1 root      0:00 {flask} /usr/local/bin/python /usr/local/bin/flask run --h
    7 root      0:06 /usr/local/bin/python /usr/local/bin/flask run --host=0.0.
   16 root      0:00 ps
```

Or you can double check the data in the data store:

```console
$ docker-compose exec redis redis-cli lrange students 0 -1
1) "{'name': 'Mark'}"
```

### Run one-off commands

Sometimes you want to run one-off commands in a container. This is different form the `exec` subcommand, because `run` is not executed against a running container, `run` will start a new container to execute the command. This is useful if you don't want to mess with the running containers.

There is one key difference between `run` and `up`. When you use `run` Docker will not map the ports to the host machine. This behavior lets you run one-off commands in new containers even when your stack is running and your container that you started with `docker-compose up` is already mapped to the host port. If you need to map a port, you can use the `-p` flag of `docker-compose run`.

Let's run an example:

```console
$ docker-compose run app tail -f > dev0
```

Let's see the running containers in a new Terminal window:

```console
$ docker-compose ps
        Name                       Command               State           Ports
---------------------------------------------------------------------------------------
flask-redis_app_1       /bin/sh -c flask run --hos ...   Up      0.0.0.0:5000->5000/tcp
flask-redis_app_run_1   tail -f                          Up
flask-redis_redis_1     docker-entrypoint.sh redis ...   Up      6379/tcp
```

You can find the container we started with `run` without any mapped ports on the list.

### Ship your multi-container applications

Once you tested your application, you will want to ship your image to a Docker registry like the Docker Hub, or your own private registry. Docker Compose gives you tools to achieve this with a single command:

```console
$ docker-compose push
Pushing app (takacsmark/flask-redis:1.0)...
The push refers to repository [docker.io/takacsmark/flask-redis]
165bd66bd261: Pushed
4eebb5b8404d: Pushed
6647e4b8d1e3: Pushed
3463e90bf867: Pushed
75fed4290ceb: Mounted from library/python
6795dbd93463: Mounted from library/python
e2986b5e7ba2: Pushed
beefb6beb20f: Mounted from library/python
df64d3292fd6: Mounted from library/python
1.0: digest: sha256:cd32e727be0cbe76f84f816405bab96059c7ee66fb55f362b0fb43e4739cf512 size: 2200
```

You can use this command to push images related to all services or a single service (`docker-compose push SERVICE`).

Pulling your image to a new machine is also a single command exercise, however there is a catch. You need to copy your Compose file to the target system before you can use `docker-compose` commands. You can copy the Compose file with `scp`, or your regular configuration management solution, or you can use an SSH tunnel. We'll not do this here step by step, you can find a detailed guide in my Docker book.

Use the following command to pull the images for your solution:

```console
$ docker-compose pull
Pulling app   ... done
Pulling redis ... done
```

You can pull all images or an image of a single service (`docker-compose pull SERVICE`).

### The concept of desired state

When you use `docker-compose up` to start up a multi-container application, your Compose file works as the description of the desired state.

This means that if you change the Compose file and issue the `docker-compose up` command again, Compose will analyze the changes and will recreate only those parts of your application that were changed.

_In other words, compose will analyze the actual state of your application and the desired state described in the Compose file and it will apply those changes that are needed to make the actual state identical to the desired state._

Let's change the Compose file of our application to demonsrate this. I changed the host machine port to port 80 in the port mapping of the app service:

```yaml
version: '3'

services:
  app:
    build: 
      context: .
      args:
        - IMAGE_VERSION=3.7.0-alpine3.8
    image: takacsmark/flask-redis:1.0
    environment:
      - FLASK_ENV=development
    ports:
      - 80:5000
  redis:
    image: redis:4.0.11-alpine
```

Let's issue `docker-compose up` again (note the application is already running):

```console
$ docker-compose up -d
Recreating flask-redis_app_1 ...
Recreating flask-redis_app_1 ... done
```

Compose has recreated our app service, but did not touch the Redis service. Our application is available on port 80 on localhost now.

### Scale a service with Compose

Docker compose provides an option to scale a service to the specified number of replicas. You can try this for exmaple:

```console
$ docker-compose up -d --scale app=3
WARNING: The "app" service specifies a port on the host. If multiple containers for this service are created on a single host, the port will clash.
Starting flask-redis_app_2 ...
Starting flask-redis_app_2 ... error
Starting flask-redis_app_3 ... error

ERROR: for flask-redis_app_3  Cannot start service app: driver failed programming external connectivity on endpoint flask-redis_app_3 (d6388a05c2f8766a8e7f9b420bdd7a4c3f3b67069d6232ef0aa3ca1be2459f97): Bind for 0.0.0.0:5000 failed: port is already allocated

ERROR: for flask-redis_app_2  Cannot start service app: driver failed programming external connectivity on endpoint flask-redis_app_2 (3416f43425663cf4faf7bfc6d9eab99cbdd11e4b5bf8490f249128997c4d9efc): Bind for 0.0.0.0:5000 failed: port is already allocated

ERROR: for app  Cannot start service app: driver failed programming external connectivity on endpoint flask-redis_app_3 (d6388a05c2f8766a8e7f9b420bdd7a4c3f3b67069d6232ef0aa3ca1be2459f97): Bind for 0.0.0.0:5000 failed: port is already allocated
ERROR: Encountered errors while bringing up the project.
```

This did not work, because there was a port conflict, you can not scale a service with mapped ports with Docker Compose.

You can however, scale containers that do not have a port mapping and run multiple replicas of the same container. You can use this kind of setup to start up multiple worker containers behind a load balancer that you define as a separate service in your Compose file.

If you need scalability and load balancing features, it's better to use Swarm or another container orchestration solution. We'll learn about these in another post.

### Docker Compose networks

You can connect your service with custom, user defined networks using the Compose file. Let's see how we can add our own network to our application:

```yml
version: '3'

services:
  app:
    build: 
      context: .
      args:
        - IMAGE_VERSION=3.7.0-alpine3.8
    image: takacsmark/flask-redis:1.0
    environment:
      - FLASK_ENV=development
    ports:
      - 80:5000
    networks:
      - mynet
  redis:
    image: redis:4.0.11-alpine
    networks:
      - mynet

networks:
  mynet:
```

I have defined a user defined network under the top-level networks section at the end of the file and called the network `mynet`.

This is a bridge network, which means that it's a network on the host machine that is isolated from the rest of the host network stack.

Under each service I added the `networks` key to specify that these services should connect to `mynet`.

Let's change the state of our application to the desired state described in the updated Compose file:

```console
$ docker-compose up -d
Creating network "flask-redis_mynet" with the default driver
Recreating flask-redis_redis_1 ... done
Recreating flask-redis_app_1   ... done
```

Compose has created the new network and recreated the containers and attached them to this network. You can inspect this like this:

```console
$ docker network inspect flask-redis_mynet
[
    {
        "Name": "flask-redis_mynet",
        "Id": "feac8d162d4a479eaa82a7c4bd81e7e119de758c31763a20802b26fc292c57ba",
        "Created": "2018-09-24T08:49:11.334098Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "192.168.0.0/20",
                    "Gateway": "192.168.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": true,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "6cbc00be8688ed8a669e5efc1cf50e239a051faf203225199450bad45ec493e2": {
                "Name": "flask-redis_app_1",
                "EndpointID": "e3cb75482c1f2edc465fde3fdfe090cb7474109c97aae6ea60b04adadd4fd471",
                "MacAddress": "02:42:c0:a8:00:03",
                "IPv4Address": "192.168.0.3/20",
                "IPv6Address": ""
            },
            "9831fea7bbef0c8c1bdf73bbf374d8567e9279b9feff08af390f52628ca72b9a": {
                "Name": "flask-redis_redis_1",
                "EndpointID": "4cac07fe5457c93e52eb14400925c3dd70602362d82cc4c577ad6ed83f076792",
                "MacAddress": "02:42:c0:a8:00:02",
                "IPv4Address": "192.168.0.2/20",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {
            "com.docker.compose.network": "mynet",
            "com.docker.compose.project": "flask-redis",
            "com.docker.compose.version": "1.22.0"
        }
    }
]
```

Inspecting the containers, you'll see that they are connected to the custom network now.

You can use the top-level networks section to specify a more complex network configuration, too. You can specify multiple networks and attach containers to various network segments of your architecture.

### Volumes and Compose

The top level volumes section lets you create named volumes for your application.

As we have seen in previous tutorials, volumes are used to store data outside containers. This is handy if you destroy a container and create a new one, your data will not be lost with the container, but it'll be persisted on the host machine in a volume.

Our example uses one volume currently that is defined in the the Redis image:

```console
$ docker volume ls
DRIVER              VOLUME NAME
local               b221ff8751f0e57e1d20830f6238f1ff1255a9c5fd08c2132974b4486e937c86
```

This volume is automatically created whenever we start up a container from the Redis image. The volume is created automatically with a random name. This means that we cannot re-use the data in the volume between server runs. In order to achieve this, we can define a named volume in the Compose file:

```yaml
version: '3'

services:
  app:
    build:
      context: .
      args:
        - IMAGE_VERSION=3.7.0-alpine3.8
    image: takacsmark/flask-redis:1.0
    environment:
      - FLASK_ENV=development
    ports:
      - 80:5000
    networks:
      - mynet
  redis:
    image: redis:4.0.11-alpine
    networks:
      - mynet
    volumes:
      - mydata:/data

networks:
  mynet:
volumes:
  mydata:
```

We defined the `mydata` volume in the top-level `volumes` section at the end of the file and we mapped this volume with the `volumes` option to the `redis` service.

In order to make this work, we need to destroy and recreate our stack:

```console
$ docker-compose down
Stopping flask-redis_redis_1 ... done
Stopping flask-redis_app_1   ... done
Removing flask-redis_redis_1 ... done
Removing flask-redis_app_1   ... done
Removing network flask-redis_mynet

$ docker-compose up -d
Creating network "flask-redis_mynet" with the default driver
Creating flask-redis_app_1   ... done
Creating flask-redis_redis_1 ... done
```

Our Redis service is using a named volume now:

```console
$ docker volume ls
DRIVER              VOLUME NAME
local               b221ff8751f0e57e1d20830f6238f1ff1255a9c5fd08c2132974b4486e937c86
local               flask-redis_mydata
```

### Use env_file to pass environment variables

We usually prefer to use environment files in our projects to pass environment variables to our applications. Use the `env_file` option to add an environment file to your service's configuration to pass environment variables.

Let's add an `env_file` to our app:

```yaml
version: '3'

services:
  app:
    build: 
      context: .
      args:
        - IMAGE_VERSION=3.7.0-alpine3.8
    image: takacsmark/flask-redis:1.0
    env_file: .env.txt
    ports:
      - 80:5000
    networks:
      - mynet
  redis:
    image: redis:4.0.11-alpine
    networks:
      - mynet
    volumes:
      - mydata:/data

networks:
  mynet:
volumes:
  mydata:
```

I changed the `environment` section under the app service and turned it into `env_file: .env.txt`. Let's add `.env.txt` to our project:

```config
FLASK_ENV=development
```

Running `docker-compose up` will give you the same results as before. If you check the logs (`docker-compose logs`), you'll see that we are still in development mode.

### Variable substitution

Variable substitution comes in handy when you drive your project's config with environment variables. Please note that this point is not about passing environment variables to your containers, this is about using environment variables in your Compose file to make it more generic and flexible.

Let's see an example. Docker Compose will automatically pick up the contents of a `.env` file that you put into the directory where you run Docker compose.

Let's add a file called `.env` to our project with the below lines:

```configuration
PYTHON_VERSION=3.7.0-alpine3.8
REDIS_VERSION=4.0.11-alpine
DOCKER_USER=takacsmark
```

You can use these variables in the Compose file like this:

```yaml
version: '3'

services:
  app:
    build:
      context: .
      args:
        - IMAGE_VERSION=${PYTHON_VERSION}
    image: ${DOCKER_USER}/flask-redis:1.0
    env_file: .env.txt
    ports:
      - 80:5000
    networks:
      - mynet
  redis:
    image: redis:${REDIS_VERSION}
    networks:
      - mynet
    volumes:
      - mydata:/data

networks:
  mynet:
volumes:
  mydata:
```

Running the application will give the same results as before.

### Override the Compose file

In most projects, you'll use multiple compose files. The best practice for small projects is the following:

* use the file named `docker-compose.yml` to store your production configuration.
* use the file named `docker-compose.override.yml` to override the setting in your `docker-compose.yml` for development.

Docker Compose will pick up both file names automatically and will apply the overrides in the override file on top of `docker-compose.yml`.

You can stack multiple Compose files on top of each other. In more complex projects, you'll want to create dedicated compose files for various environments like `docker-compose.dev.yml`, `docker-compose.test.yml`, etc.

You can use custom compose file names with the `-f` option of Docker Compose, for example:

``` console
$ docker-compose -f docker-compose.dev.yml up
```

You can stack Compose file on top of each other with a single command using multiple `-f` arguments:

``` console
$ docker-compose -f docker-compose.1.yml -f docker-compose.2.yml -f docker-compose.3.yml up
```

If you want to see a more well-rounded example, please refer to the last chapter of my book.

## Docker Compose in production

Now that we learned all this, you might be wondering how you can use Docker Compose in your projects.

All-in-all Docker Compose is a great tool to develop and run multi-container applications on a single computer. I've been running a small site with Docker Compose for many years without any issues. Version 2 of the Compose file gives you ways to limit resources, too.

Docker Compose is not the state of the art solution to run applications in production though. Docker Swarm is the preferred way to run applications in production. We'll learn about Docker Swarm and its alternatives, like Kubernetes in a later most.

If you need more info and examples about Swarm and Kubernetes now, check out my book here on the blog.

Despite its limitations, Docker Compose is still an essential part of the development workflow, mainly used in the development stage and for testing and prototyping purposes.

## Wrap-up

This post is pretty long, I hope you enjoyed it. I think the logical next steps of your journey may be to learn more about Docker networking, volumes and Swarm mode. Build a few stacks and build up some Docker muscle. Check out my book, you'll find detailed and more advanced examples there.