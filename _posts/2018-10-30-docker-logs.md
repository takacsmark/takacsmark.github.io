---
layout: post
title: "Docker logs - Container, Compose, Swarm and Engine Logs"
description: "The easiest way to see Docker logs is to start containers in the foreground. There are many ways to see logs of detached containers, the easiest is to use the `docker container logs` command. With several handy options this command will save you hours."
date: 2018-10-30 07:39:00 +0100
author: Márk Takács
thumbnail: "/assets/images/post-thumbs/docker-logs.png"
category: Tutorial
---

<!-- prettier-ignore -->
* TOC
<!-- prettier-ignore -->
{:toc}

Let's explore Docker logs from containers to Compose, Swarm and the Docker Engine in a single post.

## Docker container logs in the foreground

The easiest way to see Docker logs is to start containers in the foreground. Your log messages are printed to your terminal:

```console
~ docker run -p 80:80 nginx:latest
172.17.0.1 - - [02/Oct/2018:12:57:59 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:62.0) Gecko/20100101 Firefox/62.0" "-"
```

You start a Docker container in the foreground by not specifying the `-d` (detached) flag of the `docker run` command. Docker will attach to stdout and stderr in this mode.

## Docker logs of detached containers

Use the `docker container logs` command to see the logs of detached Docker containers.

Let's start a container in detached mode:

```console
$ docker run -p 80:80 -d nginx:latest
3f840a82aabe788ecf7c7d3865e4fd3403f8de5e4b93ced5e0fd807dfc2d7180
```

Check the logs:

```console
$ docker container logs 3f840a82aabe
172.17.0.1 - - [02/Oct/2018:13:08:18 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" "-"
```

The `docker logs` command is an alias of `docker container logs`. **They show the logs of a single container.**

### Follow container logs

Often you need to keep the log open and follow messages, you can do this with the `--follow` or `-f` flag.

```console
$ docker container logs --follow 3f840a82aabe
```

### Tail logs

Limit the output to a certain number of lines from the end of the log.

```console
$ docker container logs --tail 1 3f840a82aabe
172.17.0.1 - - [02/Oct/2018:13:08:18 +0000] "GET /favicon.ico HTTP/1.1" 404 571 "http://localhost/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" "-"
```

### Display timestamps

Display timestamps in Docker log output with `--timestamps` or `-t`.

```console
docker container logs --tail 1 --timestamps 3f840a82aabe
2018-10-02T13:08:18.661924100Z 172.17.0.1 - - [02/Oct/2018:13:08:18 +0000] "GET /favicon.ico HTTP/1.1" 404 571 "http://localhost/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" "-"
```

### Show logs since timestamp

Use relative time.

```console
$ docker container logs --since 15m --timestamps 3f840a82aabe
2018-10-02T13:08:18.004863500Z 172.17.0.1 - - [02/Oct/2018:13:08:18 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" "-"
```

Use absolute time.

```console
$ docker container logs --since 2018-10-02T13:08:15 --timestamps 3f840a82aabe
2018-10-02T13:08:18.004863500Z 172.17.0.1 - - [02/Oct/2018:13:08:18 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" "-"
```

### Show logs until timestamp

The `--until` option is similar to `--since`, but shows logs before a certain point in time. It works with absolute and relative time values.

## Docker Compose logs

Docker Compose will send logs to stdout and stderr if started in the foreground (not with `-d`). It will display all log messages from all Compose services.

When starting your application in detached mode, i.e. with `docker-compose up -d`, then the `docker-compose logs` command is used to analyze logs. Let's see an example of an app that has two services:

```console
$ docker-compose logs
Attaching to flask-redis-final_app_1, flask-redis-final_redis_1
redis_1  | 1:C 02 Oct 13:25:30.164 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis_1  | 1:C 02 Oct 13:25:30.164 # Redis version=4.0.11, bits=64, commit=00000000, modified=0, pid=1, just started
redis_1  | 1:M 02 Oct 13:25:30.165 * Running mode=standalone, port=6379.
redis_1  | 1:M 02 Oct 13:25:30.165 # Server initialized
redis_1  | 1:M 02 Oct 13:25:30.165 * Ready to accept connections
app_1    |  * Serving Flask app "app.py" (lazy loading)
app_1    |  * Environment: development
app_1    |  * Debug mode: on
app_1    |  * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
app_1    |  * Restarting with stat
app_1    |  * Debugger is active!
app_1    |  * Debugger PIN: 119-685-546
```

**The `docker-compose logs` command will display the logs from all services in the application defined in the Compose file by default.**

### View logs of a single service

View logs of a single service in the form `docker-compose logs SERVICE`:

```console
docker-compose logs app
Attaching to flask-redis-final_app_1
app_1    |  * Serving Flask app "app.py" (lazy loading)
app_1    |  * Environment: development
app_1    |  * Debug mode: on
app_1    |  * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
app_1    |  * Restarting with stat
app_1    |  * Debugger is active!
app_1    |  * Debugger PIN: 119-685-546
```

### Docker Compose logs options

You can use the `--follow`, `--timestamps` and `--tail` options with `docker-compose logs` with the same meaning you have seen earlier in the post. The `--since` and `--until` options are not available.

## Docker Swarm logs

In the Swarm you analyize logs on the Docker service level. Use the `docker service logs SERVICE` command.

```console
$ docker service logs mystifying_lamarr
mystifying_lamarr.1.y1dh43k1ckv3@linuxkit-025000000001    | 10.255.0.2 - - [02/Oct/2018:14:14:17 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" "-"
```

**You can use `--follow`, `--since`, `--tail` and `--timestamps` just like before.**

Docker service logs has some extra options.

### Do not map service name to ID

The above log output contains the service name (`mystifying_lamarr`). You can tell Docker to use the service ID instead with `--no-resolve`.

```console
$ docker service logs --no-resolve mystifying_lamarr
ms2px19ievti796cq6dhsqy5w.1.y1dh43k1ckv3@757cwv4l0fi68pzho3wwldxpz    | 10.255.0.2 - - [02/Oct/2018:14:14:17 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" "-"
```

### Omit task ids

You can tell Docker no to print task IDs with `--no-task-ids`.

```console
$ docker service logs --no-task-ids mystifying_lamarr
mystifying_lamarr.1@linuxkit-025000000001    | 10.255.0.2 - - [02/Oct/2018:14:14:17 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" "-"
```

### Do not truncate output

If you use the `--no-trunc` option, Docker will not truncate the output, this will give you the full IDs in the logs, like task IDs, for example.

```console
$ docker service logs --no-trunc mystifying_lamarr
mystifying_lamarr.1.y1dh43k1ckv32wjoqd49j7avn@linuxkit-025000000001    | 10.255.0.2 - - [02/Oct/2018:14:14:17 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" "-"
```

### Get raw output

Using the `--raw` option, you'll get raw output, note how the service identifier has been replaced with the IP address.

```console
$ docker service logs --raw mystifying_lamarr
10.255.0.2 - - [02/Oct/2018:14:14:17 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" "-"
```

## Docker Engine logs

Docker logs are not only about containers, they're also about the logs of the Docker Engine itself. The location of the Docker Engine logs is different on different platforms.

You can find the up-to-date spec on the [Docker site](https://docs.docker.com/config/daemon/#read-the-logs){:target="\_blank"}.

Let me share the current info here:

- RHEL, Oracle Linux - `/var/log/messages`
- Debian - `/var/log/daemon.log`
- Ubuntu 16.04+, CentOS - `$ journalctl -u docker.service`
- Ubuntu 14.10- - `/var/log/upstart/docker.log`
- macOS (Docker 18.01+) - `~/Library/Containers/com.docker.docker/Data/vms/0/console-ring`
- macOS (Docker <18.01) - `~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/console-ring`
- Windows - `AppData\Local`
