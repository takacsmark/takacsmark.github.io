---
layout: post

title: "How to get a Docker container's IP address | Docker tips"
description: "Need to find the IP address of a Docker container? Need to know how to get the IP address of a Docker container on different networks? Here is how."
date: 2019-05-12 07:19:00 +0100
thumbnail: "/assets/images/post-thumbs/docker-tips-container-ip.png"
categories: Docker, DevOps 
---
 * TOC
{:toc}

Let's shed some light on a questions that readers often ask me in email or comments.

**How do I get the IP address of a Docker container?**


## tl;dr

This is a tricky point, because the solution itself is short and simple, but in real life you don't use the IP address of a Docker container unless you want to test or try something on an exceptional basis.

For the above reason, I think it's useful to read the whole post, but in case you don't have the time, here you have the one-liner to solve the issue.

    {% raw %}
    docker inspect -f "{{ .NetworkSettings.Networks.<network_name>.IPAddress }}" <container_name||container_id> 
    {% endraw %}

With a specific example to check the IP of a container called `boring_noyce` on the default bridge network the command looks like this:

    {% raw %}
    docker inspect -f "{{ .NetworkSettings.Networks.bridge.IPAddress }}" boring_noyce
    {% endraw %}

    172.17.0.4

Let's come back to the main point now; why and when you might want to use the IP address of a Docker container?


## Why would you need the IP address of a Docker container?

When you work with Docker in real projects, you may work on various levels, namely:

-   the container level
-   with Docker Compose or
-   Swarm or another orchestrator

The idea behind containerization is that your containers are meant to be *ephemeral by design*. What does this mean?

The meaning of empheral is something short-lived, the Docker documentation explains it like this: 

"By “ephemeral”, we mean that the container can be stopped and destroyed, then rebuilt and replaced with an absolute minimum set up and configuration."

You can read about this in the [Docker docs](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/){:target="_blank"} or in my [in my Dockerfile best practices tutorial](https://takacsmark.com/dockerfile-tutorial-by-example-dockerfile-best-practices-2018/#containers-should-be-ephemeral){:target="_blank"}.

**The real meaning of this is that your containers are just temporary workers that can be destroyed and recreated as you need them.**

The mechanism to construct a complex application with containers that you can throw away and replace any time is built into Docker. You use user defined networks, Compose and Swarm configuration to drive your application stack. 

On the abstract orchestration levels of Compose and Swarm, you don't work with IP addresses directly. You rather work with your definition of the desired state of your entire stack.

*This is why I said in the beginning that you are supposed to work with IP adrersses directly on an exceptional basis only; like tracking down a bug or testing out something new while you are building your configuration.*

**It's important that you build your production system with the Compose file to be used with Compose or Swarm, or deployment descriptors for other orhestrators like Kubernetes rather than relying on container IPs.**

Having said all this, let's see how to get the IP address of a Docker container.


## Understand your networks

The IP address of a container only makes sense in the context of the network your container is connected to.

When you start out with Docker, you probably use one of the default networks of Docker. These are the default networks:

    docker network ls

    NETWORK ID          NAME                DRIVER              SCOPE
    248f5cb44dc3        bridge              bridge              local
    446b31652653        host                host                local
    134a57be5cac        none                null                local

These networks are created by the Docker engine when it starts up on the host machine.

The meaning of these networks is the following:

-   The **bridge** network is the default network; if you create a new container, it will be connected to the bridge network by default. The bridge network provides isolation from your host machine, thus your containers are isolated from the host network. The containers can refer each other by IP address on the bridge network. (They cannot however refer each other by container name.)
-   If you connect a container to the **host** network, then your container will share your host machine's network. This is benefitial if you containerise a legacy system that is heavily dependent on the host IP. The **host** network configuration only works as expected on Linux systems, beacuase Docker uses a virtual machine under the hood on Mac and Windows, thus the host network in these cases refers to the VM rather than the real host itself. (I have not used a host network on a Windows machine with a Windows based container, so I cannot comment on that scenario.)
-   If you connect your container to the **none** network, this means that your contaienr is not connected to any network.

In order to create a good design for your application, you usually create user defined networks. You use these networks to isolate parts of your application architecture and you define contianers that serve as gateways between these networks. *This implies that some of your containers are connected to one user defined network, while other containers are connected to two networks, or even more depending on your design.*

**So it's important to understand the network context of your application before going after the IP address.**

You use the `docker network` commands or the Compose file to define your networks. Please refer to the [Compose tutorial](https://takacsmark.com/docker-compose-tutorial-beginners-by-example-basics/){:target="_blank"}, the [Swarm tutorial](https://takacsmark.com/docker-swarm-tutorial-for-beginners/){:target="_blank"} for more details, or [get the book](https://takacsmark.com/get-started-with-docker-in-your-projects-through-examples){:target="_blank"} for an in-depth learning experience.

Please note that Swarm mode adds further networks to the list. If you create a service in Swarm mode, requests are routed to the right node and right container by the default overlay network. You can, of course create user defined overlay networks.


## Get the IP address of your containers

Let's create a few containers to experiment with. I created 3 Nginx containers running the below commands.

    docker container run --rm -d nginx:1.15.12
    docker container run --rm -d nginx:1.15.12
    docker container run --rm -d nginx:1.15.12

    1215e561f363f8064cb013e224d48d71cc8dfd1308b652729c56a740d1c74136
    fd235de73345ee4a2c4aab8a04dfc5db773e09804dc9fa75ec61e74946d656d4
    66c03e31131f79336f7c87722b9bbe1aee203270e2ec696bac04d4fe3f5114c9

Now these containers are connected to the default bridge network. If you use use `docker-compose` to start containers from a Compose file, you can use the same methods that I desribe here.

Let's examine the bridge network now.

    docker network inspect bridge

    [
        {
            "Name": "bridge",
            "Id": "248f5cb44dc3d6dc44eabb17110a3a318ef903e5c936bfeb6029d6fcb1188624",
            "Created": "2019-04-22T17:05:43.146582559Z",
            "Scope": "local",
            "Driver": "bridge",
            "EnableIPv6": false,
            "IPAM": {
                "Driver": "default",
                "Options": null,
                "Config": [
                    {
                        "Subnet": "172.17.0.0/16",
                        "Gateway": "172.17.0.1"
                    }
                ]
            },
            "Internal": false,
            "Attachable": false,
            "Ingress": false,
            "ConfigFrom": {
                "Network": ""
            },
            "ConfigOnly": false,
            "Containers": {
                "365f0c943761ab12d47db51cc97bffcb4206c9c299bf5f4deb4d9ec865f6f609": {
                    "Name": "heuristic_panini",
                    "EndpointID": "1bf0aab8eadbf437bd361f14b7a179dcbc9b002d204777f53e425b30792ee59b",
                    "MacAddress": "02:42:ac:11:00:03",
                    "IPv4Address": "172.17.0.3/16",
                    "IPv6Address": ""
                },
                "485a8401ff947ffbc1e0cf3f972c7a03c7bbebaeb55e00a9e726913fcd983828": {
                    "Name": "boring_noyce",
                    "EndpointID": "0728c437aafa9b5b48eaed9ff8726cc69b2c322181eabd30305696ed30b35647",
                    "MacAddress": "02:42:ac:11:00:04",
                    "IPv4Address": "172.17.0.4/16",
                    "IPv6Address": ""
                },
                "f877cb919685ebd3676513e51ca25139251e3c3a469b4edd7032b35ab97fcd60": {
                    "Name": "gracious_pare",
                    "EndpointID": "52e1197d7a6563e61ffa92b1c658b0442909c31a24cff49de36e7f741ac38c6a",
                    "MacAddress": "02:42:ac:11:00:02",
                    "IPv4Address": "172.17.0.2/16",
                    "IPv6Address": ""
                }
            },
            "Options": {
                "com.docker.network.bridge.default_bridge": "true",
                "com.docker.network.bridge.enable_icc": "true",
                "com.docker.network.bridge.enable_ip_masquerade": "true",
                "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
                "com.docker.network.bridge.name": "docker0",
                "com.docker.network.driver.mtu": "1500"
            },
            "Labels": {}
        }
    ]

As you can see the `bridge` network (I mean the network called `bridge`) has three containers connected now. **If you want to casually see the IP address of the containers on a network, you can always inpect the network and see the IPs.**

You can get the IP address of a single container inspecting the container itself and using GO templates to filter the results with the `-f` (filter) flag.

    {% raw %}
    docker inspect -f "{{ .NetworkSettings.Networks.bridge.IPAddress }}" boring_noyce
    {% endraw %}

    172.17.0.4

This one-liner may look elegant, but I think it's impractical, because it's too long and you need to enter the network name (`bridge`) in the middle manually. 

*You may think now that the one-liner is better, because you can use it in scripts. Please remember that you are not supposed to do that. If you need the IP address in production scripting, your should probably improve your network design.*

Let's add a user defined network to the picture and see what happens.

    docker network create mynet
    docker network connect mynet boring_noyce

    9ec39d6cbaabd62c3092b110e56610b5001cdd77a07725f984331fb82b139795

    docker network inspect mynet

    [
        {
            "Name": "mynet",
            "Id": "9ec39d6cbaabd62c3092b110e56610b5001cdd77a07725f984331fb82b139795",
            "Created": "2019-05-13T09:13:32.0337693Z",
            "Scope": "local",
            "Driver": "bridge",
            "EnableIPv6": false,
            "IPAM": {
                "Driver": "default",
                "Options": {},
                "Config": [
                    {
                        "Subnet": "172.22.0.0/16",
                        "Gateway": "172.22.0.1"
                    }
                ]
            },
            "Internal": false,
            "Attachable": false,
            "Ingress": false,
            "ConfigFrom": {
                "Network": ""
            },
            "ConfigOnly": false,
            "Containers": {
                "485a8401ff947ffbc1e0cf3f972c7a03c7bbebaeb55e00a9e726913fcd983828": {
                    "Name": "boring_noyce",
                    "EndpointID": "f20220041b7f2dc07de6e2d29820db7907e1b7df54eb824af4ad4ad07c09aba3",
                    "MacAddress": "02:42:ac:16:00:02",
                    "IPv4Address": "172.22.0.2/16",
                    "IPv6Address": ""
                }
            },
            "Options": {},
            "Labels": {}
        }
    ]

Now our container called `boring_noyce` is connected to `mynet`, too. Let's inspect the container's network settings.

    {% raw %}
    docker container inspect -f "{{ .NetworkSettings }}" boring_noyce 
    {% endraw %}

{% raw %}

    {{ f7e683369c04398e325c677559c4c9e392c1ea9482387fcec6e2e5d5da108368 false  0 map[80/tcp:[]] /var/run/docker/netns/f7e683369c04 [] []} {0728c437aafa9b5b48eaed9ff8726cc69b2c322181eabd30305696ed30b35647 172.17.0.1  0 172.17.0.4 16  02:42:ac:11:00:04} map[bridge:0xc4205da000 mynet:0xc4205da0c0]}

{% endraw %}

We can try again to find out the IP address of this container on the various networks.

    {% raw %}
    docker inspect -f "{{ .NetworkSettings.Networks.bridge.IPAddress }}" boring_noyce
    {% endraw %}

    172.17.0.4

    {% raw %}
    docker inspect -f "{{ .NetworkSettings.Networks.mynet.IPAddress }}" boring_noyce
    {% endraw %}

    172.22.0.2

**The main point I'm trying to make with this post is to learn the art of architecture design and spend time on your networks definition rather than hacking with IPs.** Nevertheless you have the tools here to find out your container IPs.

Having said this, I think we can get a bit more funky with this command. We can, for example, list the IPs of all containers on the bridge network.

    {% raw %}
    docker inspect -f "{{ .NetworkSettings.Networks.bridge.IPAddress }}" $(docker container ls -qa)
    {% endraw %}

    172.17.0.4
    172.17.0.3
    172.17.0.2

The same command on the user defined network gives only one IP, because only one of the containers is connected.

    {% raw %}
    docker inspect -f "{{ .NetworkSettings.Networks.mynet.IPAddress }}" $(docker container ls -qa)
    {% endraw %}

    172.22.0.2
    <no value>
    <no value>


## A note on Swarm mode

If you are in Swarm mode, you work with services directly. You are not supposed to touch containers. If you need to work with a container (on an exceptional basis) to check something, your best option is to `ssh` into one of the nodes in the Swarm and use `docker container ls` and the commands I showed you in this post.

