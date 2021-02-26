---
layout: post
title: "DevOps and Docker Trends 2019 | Based on Stackoverflow Data"
description: "Everybody seems to be implementing DevOps and Docker these days. Let's see what tools they use and what actions you may take to keep up."
date: 2019-09-08 07:19:00 +0100
author: Márk Takács
thumbnail: "/assets/images/post-thumbs/devops-docker-trends.png"
category: Tech trends
---

<!-- prettier-ignore -->
* TOC
<!-- prettier-ignore -->
{:toc}

## The premise of DevOps

I like DevOps more than any other recent technology trend. I like it, because for long-long decades IT had the luxury to hide behind technology jargon and be a little different than other business areas (or THE business areas).

I wish DevOps will finally change this. I whish that our DevOps pipelines go way out to the market and IT stakeholders will talk more and more business terms, meaning time to market of new capabilities, continous feedback from customers, flexible and continuous setting of delivery priorities, reduced cost of poor quality, maximized development throughput and similar measures.

**I see the key benefit of DevOps in industrializing the IT development cycle through automation.**

_New technologies enable us to deploy small business requirements into production frequently, rather than deploying many requirements in a big-bang fashion every few months or less often._

<span class="underline">Today we can build small systems that specialize in a certain aspect of our business, choose the right technology to implement such applications and automatically test and even deploy new capabilities as soon as they are checked-in into source control.</span>

<span class="underline">Normally such an increase in the number of business support systems and deployments would result in an immense increase in shipment and operations cost.</span>

**The reason why we can still put such a smooth development cycle in place is that we can reduce resource requirements through automation. This automation is achieved through DevOps practices and tools.**

## Why Docker matters

Docker is a central part of the DevOps foundation. If you want to understand how Docker works and how it can contribute to your team's success, you usually have to **look beyond Docker and understand the broader domain of DevOps and Agility**.

_The reason for this is that Docker fits nicely into our efforts to build an effective CI/CD pipeline, enjoy the benefits of DevOps, Agile development methods and build Microservices._

If you work in an established corporation, you find that there are many moving parts as you try to make progress in all of the above fields.

**You have to train many people, find the right projects for early experimentation and get the new tools up and running and use them the way they are meant to be used.**

_Getting all these things right might still not give you the benefits you are looking for, because you also have to make sure that all these new tools and methods work together with your custom legacy environment that's like no other, and no-one can give you the exact solutions for your special challenges._

**When we look at the Docker related data in this post, we analyze the figures and prepare our proposed actions considering your needs for a streamlined development production line, improvement in delivery speed and quality.**

<span class="underline">In this article we look into Stackoverflow data to understand how real-life projects implement DevOps and how they use Docker.</span>

Let's dive right in!

## Top tags in the Docker ecosystem

Let's start with top DevOps and Docker related tags in my Stackoverflow dump from December 2018.

The table below shows the top tags used next to the \`devops\` tag in Stackoverflow questions based on the number of questions carrying the given tag.

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>Tag name</th>
<th>Questions</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>devops</td>
<td>1796</td>
</tr>

<tr>
<td>2</td>
<td>docker</td>
<td>256</td>
</tr>

<tr>
<td>3</td>
<td>jenkins</td>
<td>237</td>
</tr>

<tr>
<td>4</td>
<td>amazon-web-services</td>
<td>156</td>
</tr>

<tr>
<td>5</td>
<td>ibm-cloud</td>
<td>136</td>
</tr>

<tr>
<td>6</td>
<td>continuous-integration</td>
<td>118</td>
</tr>

<tr>
<td>7</td>
<td>ansible</td>
<td>117</td>
</tr>

<tr>
<td>8</td>
<td>linux</td>
<td>113</td>
</tr>

<tr>
<td>9</td>
<td>azure-devops</td>
<td>85</td>
</tr>

<tr>
<td>10</td>
<td>git</td>
<td>84</td>
</tr>

<tr>
<td>11</td>
<td>kubernetes</td>
<td>80</td>
</tr>

<tr>
<td>12</td>
<td>chef</td>
<td>74</td>
</tr>

<tr>
<td>13</td>
<td>azure</td>
<td>72</td>
</tr>

<tr>
<td>14</td>
<td>tfs</td>
<td>61</td>
</tr>

<tr>
<td>15</td>
<td>deployment</td>
<td>57</td>
</tr>

<tr>
<td>16</td>
<td>docker-compose</td>
<td>55</td>
</tr>

<tr>
<td>17</td>
<td>java</td>
<td>53</td>
</tr>

<tr>
<td>18</td>
<td>amazon-ec2</td>
<td>52</td>
</tr>

<tr>
<td>19</td>
<td>python</td>
<td>51</td>
</tr>

<tr>
<td>20</td>
<td>automation</td>
<td>47</td>
</tr>

<tr>
<td>21</td>
<td>jenkins-pipeline</td>
<td>46</td>
</tr>

<tr>
<td>22</td>
<td>nginx</td>
<td>44</td>
</tr>

<tr>
<td>23</td>
<td>puppet</td>
<td>41</td>
</tr>

<tr>
<td>24</td>
<td>continuous-deployment</td>
<td>39</td>
</tr>

<tr>
<td>25</td>
<td>terraform</td>
<td>38</td>
</tr>
</tbody>
</table>
Let's look at the numbers from a slightly different angle showing the number of views on questions marked with the \`devops\` tag together with a given tag on Stackoverflow.

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>devops</td>
<td>918733</td>
</tr>

<tr>
<td>2</td>
<td>docker</td>
<td>185582</td>
</tr>

<tr>
<td>3</td>
<td>jenkins</td>
<td>162732</td>
</tr>

<tr>
<td>4</td>
<td>ansible</td>
<td>109259</td>
</tr>

<tr>
<td>5</td>
<td>continuous-integration</td>
<td>76334</td>
</tr>

<tr>
<td>6</td>
<td>docker-compose</td>
<td>65835</td>
</tr>

<tr>
<td>7</td>
<td>linux</td>
<td>56545</td>
</tr>

<tr>
<td>8</td>
<td>amazon-web-services</td>
<td>53008</td>
</tr>

<tr>
<td>9</td>
<td>vagrant</td>
<td>46278</td>
</tr>

<tr>
<td>10</td>
<td>ansible-playbook</td>
<td>45724</td>
</tr>

<tr>
<td>11</td>
<td>terraform</td>
<td>42325</td>
</tr>

<tr>
<td>12</td>
<td>kubernetes</td>
<td>42026</td>
</tr>

<tr>
<td>13</td>
<td>jenkins-pipeline</td>
<td>40574</td>
</tr>

<tr>
<td>14</td>
<td>git</td>
<td>37398</td>
</tr>

<tr>
<td>15</td>
<td>sonarqube</td>
<td>37005</td>
</tr>

<tr>
<td>16</td>
<td>continuous-delivery</td>
<td>36739</td>
</tr>

<tr>
<td>17</td>
<td>ibm-cloud</td>
<td>31719</td>
</tr>

<tr>
<td>18</td>
<td>dockerfile</td>
<td>31137</td>
</tr>

<tr>
<td>19</td>
<td>gitlab</td>
<td>28106</td>
</tr>

<tr>
<td>20</td>
<td>containers</td>
<td>28060</td>
</tr>

<tr>
<td>21</td>
<td>deployment</td>
<td>27446</td>
</tr>

<tr>
<td>22</td>
<td>java</td>
<td>26155</td>
</tr>

<tr>
<td>23</td>
<td>virtualbox</td>
<td>25455</td>
</tr>

<tr>
<td>24</td>
<td>hashicorp</td>
<td>23912</td>
</tr>

<tr>
<td>25</td>
<td>github</td>
<td>23881</td>
</tr>
</tbody>
</table>
As you implement your DevOps capabilities you usually start with a few base tools and then add more specialized capabilities gradually. I see people presenting crowded DevOps landscape maps (you know, the ones with a plethora of logos in colored boxes) to their clients and expect that they buy-in immediately to the full Monty.

A better approach is to select the minimum set of components that drive positive change in your company's balance sheet. Based on the tables and our personal experience these are the areas to get started:

- **[Docker](https://docker.com){:target="\_blank"}** is on top of both lists. It's a great automation driver, because you have small footprint operating environment for your applications and this environment is defined as code. _You can destroy and rebuild your entire application and its environment from scratch any time and you get the same results._
- Another tool that most companies add in the beginning is the **[Jenkins automation server](https://jenkins.io){:target="\_blank"}**. Jenkins drives your entire pipeline, _it triggers a job when developers check-in changes under source control and takes care of building, testing, shipping and even live deployment if you prefer through various environments automatically._
- **[Ansible](https://www.ansible.com/){:target="\_blank"}, [Chef](https://www.chef.io/){:target="\_blank"} and [Puppet](https://puppet.com/){:target="\_blank"}** are products that help you manage your infrastructure by automating provisioning and configuration management. Ansible has the highest position in the tables out of these three products. This is in-line with what we see with corporate clients. Ansible is part of the RedHat family of products and I believe this is a definite plus in the enterprise world.
- **[GitHub](https://github.com/){:target="\_blank"} and [GitLab](https://gitlab.com/){:target="\_blank"}** are both based on git, the free and open source version control system originally written by Linus Torvalds. Automation tools like Jenkins are mostly used and therefore best integrated with git. This is why _most clients set up their own GitLab for DevOps initiatives._ GitHub is available as a cloud hosted offering online for organizations whose policies are relaxed enough to go down the public cloud path.
- The list would not be complete without **[Kubernetes](https://kubernetes.io/){:target="\_blank"}**, the market leading container orchestration platform. _Kubernetes does the heavy lifting running your Docker based applications on computer clusters._

_You may achieve tangible benefits just by implementing GitLab, Jenkins and Docker with strong automated tests for some of your applications to get started._

Let's have a few words about some other components on the list:

- **[Terraform](https://www.terraform.io/){:target="\_blank"} and [Vagrant](https://www.vagrantup.com/){:target="\_blank"}** are both products from HashiCorp. Terraform is a tool for building infrastructure. The key difference between Terraform and Ansible, Chef and Puppet from before, is that you use Terraform to create your infrastructure and you use Ansible, Chef and Puppet to manage the configuration of the infrastructure you built with Terraform. Terraform can build and manage large scale infrastructures across multiple cloud providers. Vagrant is a similar tool, but it's used to manage development environments locally.
- **[Sonarqube](https://www.sonarqube.org/){:target="\_blank"}** is your tool for code inspection. _It helps you write high quality code and reduce technical debt by checking your code for bugs, security vulnerabilities, maintainability issues._ It integrates well with other tools like Jenkins and Git.

If you look back at the tables, you find that **[Java](https://www.java.com/en/download/){:target="\_blank"}** is the only programming language that appears on both lists. You see Python and Node.js gain immense popularity lately and their communities are rapidly growing. I am also a great fan of both languages. **If you look at corporate reality, you find that Java still dominates application development and therefore it's a key skill in your DevOps journey.**

Let's have a look what additional info the Docker tables add to the picture!

The table below shows the top tags used next to the \`docker\` tag in Stackoverflow questions based on the number of questions carrying the given tag.

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>Tag name</th>
<th>Questions</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>docker</td>
<td>48102</td>
</tr>

<tr>
<td>2</td>
<td>docker-compose</td>
<td>7723</td>
</tr>

<tr>
<td>3</td>
<td>dockerfile</td>
<td>4630</td>
</tr>

<tr>
<td>4</td>
<td>kubernetes</td>
<td>2195</td>
</tr>

<tr>
<td>5</td>
<td>python</td>
<td>2150</td>
</tr>

<tr>
<td>6</td>
<td>nginx</td>
<td>2065</td>
</tr>

<tr>
<td>7</td>
<td>node.js</td>
<td>1931</td>
</tr>

<tr>
<td>8</td>
<td>linux</td>
<td>1896</td>
</tr>

<tr>
<td>9</td>
<td>containers</td>
<td>1609</td>
</tr>

<tr>
<td>10</td>
<td>docker-swarm</td>
<td>1453</td>
</tr>

<tr>
<td>11</td>
<td>java</td>
<td>1432</td>
</tr>

<tr>
<td>12</td>
<td>mysql</td>
<td>1417</td>
</tr>

<tr>
<td>13</td>
<td>ubuntu</td>
<td>1363</td>
</tr>

<tr>
<td>14</td>
<td>amazon-web-services</td>
<td>1360</td>
</tr>

<tr>
<td>15</td>
<td>jenkins</td>
<td>1357</td>
</tr>

<tr>
<td>16</td>
<td>php</td>
<td>1340</td>
</tr>

<tr>
<td>17</td>
<td>docker-machine</td>
<td>1067</td>
</tr>

<tr>
<td>18</td>
<td>postgresql</td>
<td>1038</td>
</tr>

<tr>
<td>19</td>
<td>bash</td>
<td>922</td>
</tr>

<tr>
<td>20</td>
<td>windows</td>
<td>884</td>
</tr>

<tr>
<td>21</td>
<td>networking</td>
<td>870</td>
</tr>

<tr>
<td>22</td>
<td>boot2docker</td>
<td>836</td>
</tr>

<tr>
<td>23</td>
<td>django</td>
<td>827</td>
</tr>

<tr>
<td>24</td>
<td>macos</td>
<td>799</td>
</tr>

<tr>
<td>25</td>
<td>mongodb</td>
<td>789</td>
</tr>
</tbody>
</table>
This next table shows the top Stackoverflow tags used next to the \`docker\` tag on Stackoverflow questions based on the number of views (the first table was based on the number of questions tagged with the given tag).

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>docker</td>
<td>85386016</td>
</tr>

<tr>
<td>2</td>
<td>docker-compose</td>
<td>11187822</td>
</tr>

<tr>
<td>3</td>
<td>dockerfile</td>
<td>8213045</td>
</tr>

<tr>
<td>4</td>
<td>linux</td>
<td>4550187</td>
</tr>

<tr>
<td>5</td>
<td>ubuntu</td>
<td>3393618</td>
</tr>

<tr>
<td>6</td>
<td>boot2docker</td>
<td>3044807</td>
</tr>

<tr>
<td>7</td>
<td>containers</td>
<td>2879586</td>
</tr>

<tr>
<td>8</td>
<td>docker-container</td>
<td>2812105</td>
</tr>

<tr>
<td>9</td>
<td>nginx</td>
<td>2488078</td>
</tr>

<tr>
<td>10</td>
<td>docker-registry</td>
<td>2303199</td>
</tr>

<tr>
<td>11</td>
<td>kubernetes</td>
<td>2141158</td>
</tr>

<tr>
<td>12</td>
<td>bash</td>
<td>2015336</td>
</tr>

<tr>
<td>13</td>
<td>python</td>
<td>1948038</td>
</tr>

<tr>
<td>14</td>
<td>mysql</td>
<td>1938592</td>
</tr>

<tr>
<td>15</td>
<td>docker-machine</td>
<td>1774725</td>
</tr>

<tr>
<td>16</td>
<td>docker-image</td>
<td>1597680</td>
</tr>

<tr>
<td>17</td>
<td>node.js</td>
<td>1539068</td>
</tr>

<tr>
<td>18</td>
<td>macos</td>
<td>1483438</td>
</tr>

<tr>
<td>19</td>
<td>postgresql</td>
<td>1419400</td>
</tr>

<tr>
<td>20</td>
<td>php</td>
<td>1399732</td>
</tr>

<tr>
<td>21</td>
<td>windows</td>
<td>1351269</td>
</tr>

<tr>
<td>22</td>
<td>java</td>
<td>1327754</td>
</tr>

<tr>
<td>23</td>
<td>jenkins</td>
<td>1279336</td>
</tr>

<tr>
<td>24</td>
<td>networking</td>
<td>1186457</td>
</tr>

<tr>
<td>25</td>
<td>lxc</td>
<td>1109725</td>
</tr>
</tbody>
</table>
The numbers confirm that Docker is high on the DevOps agenda.

The top three tags are related to the Docker toolkit; they are \`docker\` itself, \`docker-compose\` and \`dockerfile\`.

This is a simple but significant point right here. **These are the top tags, because working with Docker your key deliverables are the Dockerfile and the Compose file.**

These artifacts define the working environment of your applications and services, you should add the Dockerfile and Compose file to source control. _It is essential that you build strong skills here, our trainings have a special focus on these points._

Once you master the art of custom Docker images and multi-container applications with Compose, you face the challenge of managing your containers in production. The tools to accomplish this are called container orchestrators and **Kubernetes is clearly the market leader of this niche**. Kubernetes is at the 4th place on the tag list.

Docker's built-in orchestration solution, **Docker Swarm**, has also made it to the list; it stands at place 10. Swarm is an alternative to Kubernetes, it comes built in with Docker out of the box. We usually teach Swarm in our Docker trainings, because it's a great place to understand orchestration. **Our experience is that enterprise clients choose Kubernetes exclusively.**

_Containerization is a means to and end. The main goal in the broader environment is to deploy your applications faster and more frequently, thus increasing the throughput of your entire development line and keep much less work in work in progress for a much shorter period of time._

<span class="underline">This gives a lot better experience for business stakeholders, puts features into production faster and gives you flexibility to re-prioritize your backlog more frequently, so that business does not have to wait several months for a new idea to hit the IT production line.</span>

To pursue these goals you need an automation tool that helps you build these capabilities. **Jenkins** is used by almost every enterprise and Internet client we work with.

A key component of your Docker based delivery pipeline is a **Docker registry**. This is the place where you push your custom Docker images during your CI/CD builds and that's the place were you pull your images from in production.

The Docker Registry in the list is Docker's free solution that lets you set up your own Docker registry. The registry that you get is like having your own [Docker Hub](https://hub.docker.com).

Enterprises usually go for a different product. A popular solution is the [Nexus repository manager](https://www.sonatype.com/nexus-repository-sonatype){:target="\_blank"} by Sonatype.

## Growth trends of the key DevOps and Docker related technologies

Let's look at two figures showing the growth trends of the key tags in DevOps and containerization.

Let's start with broader DevOps related tags as the percentage of all tags on Stackoverflow.

![img]({{ site.url }}/assets/images/in-content/docker-so-questions-per-total-2018.png)

\*You can see the highest growth with AWS, Docker and Kubernetes. Jenkins, GitLab, Ansible and Terraform are also growing steadily, while the other tags seem fairly stable.

Let's have a look at Docker's core components now.

![img]({{ site.url }}/assets/images/in-content/docker-base-so-questions-trends-2018.png)

**Kubernetes, Compose and Dockerfile are clearly the top tags. This is where you should invest into skills and capabilities, these are the key components to build success with Docker.**

## Growth trends of the DevOps and Docker ecosystems

It's time we look at the growth segments of the Docker domain and set up your action plan based on our data driven findings.

Let's identify the high-growth domains of Docker by looking at the **growth in question views** in the 6 month period between June 2018 and December 2018. _Note that this time we are looking at the number of question views, which I believe is the best measure of real-life usage._

We look at the details of the following segments:

- **Established technologies** - mature solutions with a stable user base
- **Emerging technologies** - mature emerging tags
- **Trending technologies** - smaller tags on the rise

### Growth of established technologies

These are the heavy tags that have been around for long enough to have a stable user base and mature solutions. Users look at both old and new questions to find out how to solve daily challenges.

Top growth established tags in the DevOps domain.

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views Growth %</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>kubernetes</td>
<td>145.82</td>
</tr>

<tr>
<td>2</td>
<td>azure-devops</td>
<td>88.69</td>
</tr>

<tr>
<td>3</td>
<td>tfs</td>
<td>73.90</td>
</tr>

<tr>
<td>4</td>
<td>linux</td>
<td>73.54</td>
</tr>

<tr>
<td>5</td>
<td>java</td>
<td>62.36</td>
</tr>

<tr>
<td>6</td>
<td>amazon-web-services</td>
<td>62.35</td>
</tr>

<tr>
<td>7</td>
<td>azure</td>
<td>60.00</td>
</tr>

<tr>
<td>8</td>
<td>docker</td>
<td>58.98</td>
</tr>

<tr>
<td>9</td>
<td>docker-compose</td>
<td>58.17</td>
</tr>

<tr>
<td>10</td>
<td>python</td>
<td>55.13</td>
</tr>

<tr>
<td>11</td>
<td>continuous-integration</td>
<td>53.02</td>
</tr>

<tr>
<td>12</td>
<td>jenkins</td>
<td>52.03</td>
</tr>

<tr>
<td>13</td>
<td>devops</td>
<td>51.07</td>
</tr>

<tr>
<td>14</td>
<td>amazon-ec2</td>
<td>47.49</td>
</tr>

<tr>
<td>15</td>
<td>git</td>
<td>38.74</td>
</tr>
</tbody>
</table>
Top growth established tags in the Docker domain.

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views Growth %</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>docker-swarm</td>
<td>57.78</td>
</tr>

<tr>
<td>2</td>
<td>jenkins</td>
<td>55.16</td>
</tr>

<tr>
<td>3</td>
<td>kubernetes</td>
<td>51.48</td>
</tr>

<tr>
<td>4</td>
<td>docker-compose</td>
<td>50.69</td>
</tr>

<tr>
<td>5</td>
<td>python</td>
<td>49.18</td>
</tr>

<tr>
<td>6</td>
<td>dockerfile</td>
<td>47.98</td>
</tr>

<tr>
<td>7</td>
<td>php</td>
<td>44.19</td>
</tr>

<tr>
<td>8</td>
<td>postgresql</td>
<td>43.23</td>
</tr>

<tr>
<td>9</td>
<td>mysql</td>
<td>40.01</td>
</tr>

<tr>
<td>10</td>
<td>java</td>
<td>37.47</td>
</tr>

<tr>
<td>11</td>
<td>docker-machine</td>
<td>36.68</td>
</tr>

<tr>
<td>12</td>
<td>amazon-web-services</td>
<td>36.08</td>
</tr>

<tr>
<td>13</td>
<td>node.js</td>
<td>35.62</td>
</tr>

<tr>
<td>14</td>
<td>nginx</td>
<td>34.91</td>
</tr>

<tr>
<td>15</td>
<td>docker</td>
<td>34.45</td>
</tr>
</tbody>
</table>
**These are industry trends you should be active in right now**.

- **Docker Swarm and Kubernetes** are on top of the list signaling that you should already have built Docker images for selected applications and it's time to look into orchestration. Most companies use Kubernetes, but learning Swarm is a great first step and it will help you as you move on to Kubernetes.
- You enjoy the benefits of small containers if you set up the right automation flow leveraging Docker. **Jenkins** is the most widely adopted automation server for enterprises.
- **Docker Compose** is a key component in your development flow. Its deployment configuration descriptor, the Compose file, is one of the key artifacts your team produces in the world of containers. You don't use Compose in production, but it has a crucial role in development and testing.
- The **programming languages** on the list are in line with our experience in enterprise projects. Most companies use **Java** for their enterprise applications. They usually use **Oracle** databases with the enterprise apps, but they usually keep the Oracle databases in place; they don't containerize them. Most clients use **Nginx** as a web server or reverse proxy and experiment with **PHP, Python, Node.js, Postgres and Mysql** containers.

> Actions you may take:
>
> - Start learning [Docker](https://docker.com){:target="\_blank"} with special focus on custom Docker images and Compose.
> - Start learning container orchestration building Swarm skills and learning [Kubernetes](https://kubernetes.io){:target="\_blank"} in detail.
> - Set up your [Jenkins](https://jenkins.io/){:target="\_blank"} development pipeline; start measuring and improving the performance of your production line.
> - Start experimenting with small applications first, containerize a web server, a Java or PHP application. Create a proof of concept of a Python automation tool or a Node.js application.

### Growth of emerging technologies

These tags are also established with a strong base, although somewhat smaller than the ones in the previous chapter.

Top growth established tags in the DevOps domain.

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views Growth %</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>jenkins-plugins</td>
<td>108.98</td>
</tr>

<tr>
<td>2</td>
<td>php</td>
<td>103.84</td>
</tr>

<tr>
<td>3</td>
<td>devops-services</td>
<td>85.61</td>
</tr>

<tr>
<td>4</td>
<td>jenkins-pipeline</td>
<td>72.96</td>
</tr>

<tr>
<td>5</td>
<td>continuous-deployment</td>
<td>71.67</td>
</tr>

<tr>
<td>6</td>
<td>nginx</td>
<td>71.08</td>
</tr>

<tr>
<td>7</td>
<td>sonarqube</td>
<td>68.51</td>
</tr>

<tr>
<td>8</td>
<td>automation</td>
<td>65.62</td>
</tr>

<tr>
<td>9</td>
<td>maven</td>
<td>64.83</td>
</tr>

<tr>
<td>10</td>
<td>node.js</td>
<td>53.59</td>
</tr>

<tr>
<td>11</td>
<td>containers</td>
<td>50.73</td>
</tr>

<tr>
<td>12</td>
<td>terraform</td>
<td>46.58</td>
</tr>

<tr>
<td>13</td>
<td>puppet</td>
<td>45.35</td>
</tr>

<tr>
<td>14</td>
<td>build</td>
<td>40.37</td>
</tr>

<tr>
<td>15</td>
<td>powershell</td>
<td>36.51</td>
</tr>
</tbody>
</table>
Top growth established tags in the Docker domain.

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views Growth %</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>gitlab</td>
<td>61.19</td>
</tr>

<tr>
<td>2</td>
<td>spring-boot</td>
<td>49.62</td>
</tr>

<tr>
<td>3</td>
<td>bash</td>
<td>40.28</td>
</tr>

<tr>
<td>4</td>
<td>django</td>
<td>38.19</td>
</tr>

<tr>
<td>5</td>
<td>mongodb</td>
<td>36.80</td>
</tr>

<tr>
<td>6</td>
<td>windows</td>
<td>36.22</td>
</tr>

<tr>
<td>7</td>
<td>amazon-ec2</td>
<td>31.58</td>
</tr>

<tr>
<td>8</td>
<td>networking</td>
<td>31.52</td>
</tr>

<tr>
<td>9</td>
<td>docker-registry</td>
<td>29.49</td>
</tr>

<tr>
<td>10</td>
<td>ruby-on-rails</td>
<td>26.22</td>
</tr>
</tbody>
</table>
**These are capabilities you should be actively developing**.

- I mentioned before that the benefits of Docker are brought by the level of automation you can build in your development workflow. You find **GitLab** in more and more enterprise projects as the source control and CI/CD tool of choice.
- **[Sonarqube](https://www.sonarqube.org/){:target="\_blank"}** code inspection is becoming a vital part of automation architectures.
- The growth of **Terraform**, **Puppet**, **Chef** and **Ansible** signals that we live in the era of end to end automation where infrastructure is no different from traditional code.
- **Spring-boot** gets you up and running with your Spring based Java application. Spring and Spring boot are the tools that we meet in almost every enterprise environment.
- **Bash** is a skill you probably haven't used in a while. As development and opserations both contribute to artifacts like the Dockerfile, your Bash skills are needed again.
- Docker was originally created to be used with Linux based containers. Today you can build, ship and run both Linux and **Windows based containers** with Docker. Most enterprises use Linux though, but building for Windows, especially in a .Net environment is an option you should consider.
- Picking a good web framework is an important choice. I see both **Django** and **Ruby on rails** in independent projects, as well as enterprise applications for smaller, mostly internal systems.
- **Amazon Web Services** appears on the list of established tags and emerging tags, too. While enterprise clients prefer private clouds and on-premise servers, I see projects that use AWS for ad-hoc computing needs to cover certain aspects of development and testing.

> Actions you may take:
>
> - Set up a [GitLab](https://about.gitlab.com/){:target="\_blank"} environment, add it to your DevOps stack as a source control and CI/CD facility.
> - Try [Sonarqube](https://www.sonarqube.org/){:target="\_blank"} in a small project that you are starting now.
> - Think of new ways to maximize the value of your configuration management with tool like Ansible.
> - Create a [Spring boot](https://spring.io/projects/spring-boot){:target="\_blank"} application with Docker. A Restful API backend would be a great candidate for your first pilot.
> - Add a **Bash** training to your developer curriculum.
> - Experiment with Windows based containers, especially if you have .Net applications.
> - Consider [Django](https://www.djangoproject.com/){:target="\_blank"} or [Ruby on Rails](https://rubyonrails.org/){:target="\_blank"} for your next internal web application.
> - Identify components in your development and testing workflow that you may host in public cloud and give it a go with [AWS](https://aws.amazon.com/){:target="\_blank"}.

### Growth of trending technologies

These tags are from smaller niche segments.

Top growth established tags in the DevOps domain.

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views Growth %</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>kubectl</td>
<td>6123.68</td>
</tr>

<tr>
<td>2</td>
<td>conditional</td>
<td>5018.18</td>
</tr>

<tr>
<td>3</td>
<td>hashicorp-vault</td>
<td>4455.56</td>
</tr>

<tr>
<td>4</td>
<td>multibranch-pipeline</td>
<td>1233.33</td>
</tr>

<tr>
<td>5</td>
<td>angular-universal</td>
<td>1221.13</td>
</tr>

<tr>
<td>6</td>
<td>metrics</td>
<td>984.62</td>
</tr>

<tr>
<td>7</td>
<td>exporter</td>
<td>984.62</td>
</tr>

<tr>
<td>8</td>
<td>vue.js</td>
<td>945.83</td>
</tr>

<tr>
<td>9</td>
<td>systemd</td>
<td>817.86</td>
</tr>

<tr>
<td>10</td>
<td>aws-ecr</td>
<td>796.82</td>
</tr>

<tr>
<td>11</td>
<td>circuit-breaker</td>
<td>757.89</td>
</tr>

<tr>
<td>12</td>
<td>envoyproxy</td>
<td>757.89</td>
</tr>

<tr>
<td>13</td>
<td>istio</td>
<td>757.89</td>
</tr>

<tr>
<td>14</td>
<td>graphite</td>
<td>715.15</td>
</tr>

<tr>
<td>15</td>
<td>gitlab-api</td>
<td>700.00</td>
</tr>
</tbody>
</table>
Top growth established tags in the Docker domain.

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views Growth %</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>traefik</td>
<td>176.72</td>
</tr>

<tr>
<td>2</td>
<td>minikube</td>
<td>130.81</td>
</tr>

<tr>
<td>3</td>
<td>hyperledger-fabric</td>
<td>103.87</td>
</tr>

<tr>
<td>4</td>
<td>docker-for-windows</td>
<td>100.82</td>
</tr>

<tr>
<td>5</td>
<td>angular</td>
<td>96.81</td>
</tr>

<tr>
<td>6</td>
<td>jenkins-pipeline</td>
<td>95.41</td>
</tr>

<tr>
<td>7</td>
<td>sql-server</td>
<td>88.07</td>
</tr>

<tr>
<td>8</td>
<td>visual-studio</td>
<td>87.80</td>
</tr>

<tr>
<td>9</td>
<td>swarm</td>
<td>86.09</td>
</tr>

<tr>
<td>10</td>
<td>visual-studio-2017</td>
<td>85.55</td>
</tr>
</tbody>
</table>
**These are the technologies to watch, and these are the domains you should consider for future skill building.**

- Microservices architectures are widely used in scaled web applications and now they are built in various enterprise scenarios, too. I'm also working on such and implementation. Tools that help you build great interoperability and maintainability of your services are amongst the top growing trending tags like [Istio](https://istio.io/docs/concepts/what-is-istio/){:target="\_blank"}, [Envoy Proxy](https://www.envoyproxy.io/){:target="\_blank"}, [Traefik](https://traefik.io/){:target="\_blank"}, [Hashicorp Vault](https://www.vaultproject.io/){:target="\_blank"}, [Graphite](https://graphiteapp.org/){:target="\_blank"} and [the circuit breaker pattern](https://martinfowler.com/bliki/CircuitBreaker.html){:target="\_blank"}.
- [Traefik](https://traefik.io/){:target="\_blank"}, the cloud-native reverse-proxy and load-balancer with 650M+ downloads is a great emerging solution for today's cloud challenges.
- **Minikube** is the one-node Kubernetes cluster that you can install on your machine and start learning right away.
- **Angular** is the reactive front-end UI framework used by most enterprises. You find a lot of debate online whether Angular, React or Vue is the best Node.js UI framework today. Enterprise reality is a little different than independent projects; enterprises go for Angular almost exclusively, because it's a framework with built-in standards out of the box that greatly improve build times and quality with large teams and many applications.

> Actions you may take:
>
> - Dive into microservices, find a small, client facing app, set up the architecture and learn and experiment.
> - Try [Traefik](https://traefik.io/){:target="\_blank"} as a reverse-proxy and load-balancer and compare your development and operations metrics to your current solution.
> - Encourage your development and operations team members to launch [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/){:target="\_blank"} on their computers and practice Kubernetes techniques.
> - Set up a Spring example with Angular and see how you could use this combo to build and deploy new business capabilities faster than your current software frameworks.

## Wrap-up

DevOps goes beyond technology and helps you build a new type of relationship with business stakeholders. I hope the 16 action points help you find some good solutions and bring some fun into your daily development life.

Docker is a fantasctic technology that lets you build, ship and run your applications more frequently and more reliably. Docker is a crucial part of your DevOps foundations, because small footprint containers enable a high level of automation in your organization.

_Your Docker journey should be an integral part of your DevOps initiatives. Implement a holistic DevOps strategy that covers containers, orchestration, CI/CD and agile practices._ **Measure the performance of your development pipeline before and after adding new components to your toolkit; always think positive business impact along the way.**
