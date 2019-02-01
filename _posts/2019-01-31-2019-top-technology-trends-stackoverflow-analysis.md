---
layout: post
title: "2019 Top Technology Trends | Based on Stackoverflow Data Analysis"
description: "Discover high growth technology solutions used by companies wordwide in enterprise application development, web apps, data analysis, ML, DevOps, mobile applications and more."
date: 2019-01-31 07:19:00 +0100
thumbnail: "/assets/images/post-thumbs/2019-Technology-Trends-Stackoverflow-Analysis.png"
categories: Technology, Trends, TechBiz
---
* TOC
{:toc}

This post is the result of several days of Stackoverflow data mining. The insights and figures you find in this article come from the December 2, 2018 [Stack Exchange data dump](https://archive.org/download/stackexchange){:target="_blank"}.

_The goal of this post is to show you what's happening in popular enterprise and web application domains, data science, machine learning and cloud technologies._

First, I give you a short introduction to the big picture presenting the top technology domains on Stackoverflow.
Next, we explore the high growth technologies of 2019 grouped into practical categories:

* **Growth of the most established technologies** - find the focus of the industry.
* **Growth of trending technologies** - trending skills you should already have or build right now.
* **Growth of emerging technologies** - up and coming technologies that increase the overall value of your work.
* **High growth newcomers** - new releases you should keep an eye on.

## The leading technical domains on Stackoverflow

[The first Stackoverflow question](https://stackoverflow.com/questions/6/percentage-width-child-element-in-absolutely-positioned-parent-on-internet-explo){:target="_blank"} was created on July 31, 2008. Questions and answers are added continuously since that day. Questions are tagged with the label of their specific domain by Stackoverflow users. The all-time top ranking tags are the ones you see in the table below.

|    | TagName       | Questions |
|----|---------------|-----------|
|  1 | javascript    | 1,723,731 |
|  2 | java          | 1,487,235 |
|  3 | c#            | 1,264,947 |
|  4 | php           | 1,245,650 |
|  5 | android       | 1,155,005 |
|  6 | python        | 1,068,679 |
|  7 | jquery        | 936,264   |
|  8 | html          | 789,778   |
|  9 | c++           | 595,978   |
| 10 | ios           | 584,135   |
| 11 | css           | 563,816   |
| 12 | mysql         | 541,862   |
| 13 | sql           | 468,836   |
| 14 | asp.net       | 340,549   |
| 15 | ruby-on-rails | 300,045   |

The table shows the overall number of questions tagged with the specific "TagName" since the beginning of Stackoverflow. There are over 53k tags, you see the top 15 here.

Let's examine what the table shows us.

* The table features the technologies that are most heavily used to build enterprise applications and web applications. **Javascript, Java, C# and PHP are clearly the top technologies that you see in most businesses, no wonder they have such a high number of questions.**
* **Android and iOS** are also in the top ten, clearly signaling that mobile application development is a high business priority.
* **JQuery, HTML and CSS** are all building blocks of modern websites, although we have to look into the detailed trends to see where these technologies are going.
* **Python is a great general purpose language. Traditionally it is not a preferred choice for enterprise application development, still it holds the sixth position.** Is this due to the increased popularity of Python's machine learning and data mining libraries? This is something we have to explore together.
* In the **database domain MySQL and SQL** made it to the top fifteen and Ruby on Rails seems to be the most popular web application framework.

Please note the huge difference in the numbers between number one and number fifteen; 1.7M vs 300k.

Keep in mind, that these numbers show the accumulated results of a decade, they do not signal current popularity, this is just the beginning.

## Changes in the past six months

Let's compare the above tag counts to the tag counts from June, 2018. I have another Stackoverflow dump from last summer that I used to create the below table.

|    | TagName       | Questions | Questions (06/2018) | Growth # | Growth % |
|----|---------------|-----------|-----------|---------|-------------|
|  1 | javascript    | 1,723,731 | 1,624,044 | 99,687  |        6.14 |
|  2 | java          | 1,487,235 | 1,420,739 | 66,496  |        4.68 |
|  3 | c#            | 1,264,947 | 1,213,373 | 51,574  |        4.25 |
|  4 | php           | 1,245,650 | 1,200,404 | 45,246  |        3.77 |
|  5 | android       | 1,155,005 | 1,106,297 | 48,708  |        4.40 |
|  6 | python        | 1,068,679 | 962,457   | 106,222 |       11.04 |
|  7 | jquery        | 936,264   | 913,262   | 23,002  |        2.52 |
|  8 | html          | 789,778   | 752,349   | 37,429  |        4.97 |
|  9 | c++           | 595,978   | 572,330   | 23,648  |        4.13 |
| 10 | ios           | 584,135   | 564,630   | 19,505  |        3.45 |
| 11 | css           | 563,816   | 537,685   | 26,131  |        4.86 |
| 12 | mysql         | 541,862   | 520,597   | 21,265  |        4.08 |
| 13 | sql           | 468,836   | 443,312   | 25,524  |        5.76 |
| 14 | asp.net       | 340,549   | 333,949   | 6,600   |        1.98 |
| 15 | ruby-on-rails | 300,045   | 292,802   | 7,243   |        2.47 |

The table shows the growth in terms of questions tagged with the top fifteen tags, both the growth in the number of questions and growth percentage are displayed in the **"Growth #"** and **"Growth %"** columns respectively.

_How can you find the real meaning of these numbers?_ The table shows the number of questions developers ask to complete a project task.

Most questions are asked only once. When the answer is on Stackoverflow, people use the existing answer, they don't ask the question again. Does that mean that once we learn how to use a certain technology, then the number of new questions will naturally decrease over time? I don't think so.

Based on the detailed figures that I show you later in this post, my working assumption is different. If a technology is continuously used by a large number of projects worldwide, the number of new questions keeps growing on Stackoverflow.

**The growth in Stackoverflow questions shows a buzzing ecosystem that brings new features, libraries or frameworks to the market continuously and it's used in combination with other emerging technologies to build high-tech stuff.**

Looking at the table we get the feeling that everything around 4% growth shows a stable domain. (The growth mean is 4.57% and the growth median is 4.25%.)

* **We see two distinct high growth areas; namely Javascript and Python, with Python having an extraordinary 11% increase.**
* **SQL** also performs above average, it's quite natural if you think of the growing data processing need of the world.
* **JQuery** added over 23 thousand questions, still it lags behind the overall growth rate of the Javascript ecosystem. We look at Angular and React and see how the rise of these frameworks affect JQuery.
* **Asp.net** has the lowest number on this list, but this does not necessarily mean the abandonment of the asp.net framework. Looking at Asp.net Core, we see 27% growth and a total of 24 thousand questions on Stackoverflow.
* **Ruby on Rails** shows a below average growth rate.

Let's turn the question around and see the top growth tags in the last six months.

## Growth of the most established tags

We start with those tags that had at least 100k questions on Stackoverflow in June, 2018. These are mature technologies with large user base; let's call them established tags. The below table is ordered by growth percentage showing highest growth first.

|    | TagName    | Questions | Questions (06/2018) | Growth # | Growth % |
|----|------------|-----------|-----------|---------|-------------|
|  1 | python-3.x | 131,954   | 103,283   | 28,671  |       27.76 |
|  2 | excel      | 182,653   | 146,298   | 36,355  |       24.85 |
|  3 | angular    | 142,665   | 114,564   | 28,101  |       24.53 |
|  4 | python     | 1,068,679 | 962,457   | 106,222 |       11.04 |
|  5 | node.js    | 252,591   | 227,969   | 24,622  |       10.80 |
|  6 | r          | 265,957   | 240,683   | 25,274  |       10.50 |
|  7 | swift      | 214,571   | 194,762   | 19,809  |       10.17 |
|  8 | django     | 185,010   | 171,428   | 13,582  |        7.92 |
|  9 | spring     | 143,227   | 133,450   | 9,777   |        7.33 |
| 10 | wordpress  | 142,202   | 133,363   | 8,839   |        6.63 |
| 11 | javascript | 1,723,731 | 1,624,044 | 99,687  |        6.14 |
| 12 | arrays     | 281,590   | 265,417   | 16,173  |        6.09 |
| 13 | json       | 249,683   | 235,478   | 14,205  |        6.03 |
| 14 | sql-server | 247,642   | 233,561   | 14,081  |        6.03 |
| 15 | sql        | 468,836   | 443,312   | 25,524  |        5.76 |


This table gives us the overall trends of the industry.

* **Data mining, statistical computing and AI** made it to the top fifteen with Python, Excel, R, SQL and some of the JSON questions.
* Web application frameworks are also a significant group with Angular, Node, Django and Spring. A good portion of the JSON questions is attributed to API development, so **web applications and APIs** are still amongst the hottest topics.
* Android was ahead of iOS in the first chart with 4.4% growth vs 3.45%, but this may be misleading. Looking at this table, we can clearly see that Swift produces a 10.17% growth. **Mobile development** is the third biggest growth area in our analysis.
* Although you don't hear much about Wordpress these days, note that this good old piece of tech still keeps up with today's demand and it sees growing use in the blogging, personal website and SME/SOHO website domains.

## Growth of trending tags

Another interesting segment is the group of tags with over 10k questions on Stackoverflow. We find the up and coming technologies of the past years that took a strong start and are still on the rise.

|    | TagName      | Questions | Questions (06/2018) | Growth # | Growth % |
|----|--------------|---------|-----------|---------|-------------|
|  1 | kotlin       | 16,947  | 11,069    | 5,878   |       53.10 |
|  2 | vue.js       | 26,395  | 18,041    | 8,354   |       46.31 |
|  3 | vba          | 135,135 | 99,820    | 35,315  |       35.38 |
|  4 | web          | 35,788  | 26,518    | 9,270   |       34.96 |
|  5 | react-native | 42,213  | 32,064    | 10,149  |       31.65 |
|  6 | reactjs      | 112,290 | 85,881    | 26,409  |       30.75 |
|  7 | spring-boot  | 48,406  | 37,662    | 10,744  |       28.53 |
|  8 | tensorflow   | 35,850  | 28,128    | 7,722   |       27.45 |
|  9 | asp.net-core | 24,620  | 19,398    | 5,222   |       26.92 |
| 10 | typescript   | 68,305  | 54,863    | 13,442  |       24.50 |
| 11 | pandas       | 88,287  | 70,923    | 17,364  |       24.48 |
| 12 | firebase     | 61,699  | 50,217    | 11,482  |       22.86 |
| 13 | redux        | 16,588  | 13,527    | 3,061   |       22.63 |
| 14 | docker       | 48,222  | 39,408    | 8,814   |       22.37 |
| 15 | dataframe    | 41,810  | 34,330    | 7,480   |       21.79 |

**This is the list that shows you which skills you should develop right now in your company or in your own profile to stay competitive.**

* [Kotlin](https://kotlinlang.org/){:target="_blank"} is an exceptional programming language, you have the ability to code for JVM, develop Android, Javascript and Native applications with the use of the same language. This unique and powerful value proposition brought Kotlin to the top of this list.
* [Vue](https://vuejs.org/){:target="_blank"}, [React](https://reactjs.org/){:target="_blank"}, [React Native](https://facebook.github.io/react-native/){:target="_blank"}, [Redux](https://redux.js.org/){:target="_blank"} and [Angular](https://angular.io/){:target="_blank"} (on the established tags list) represent the **single page application** libraries and frameworks with their versatile solutions to bring the same code also to mobile devices.
* Python, Pandas, dataframe, VBA and Tensorflow reinforce the growing significance of **data science, statistical computing and machine learning**.
* Asp.net Core and Spring Boot are the high growth enterprise web application frameworks.
* [Firebase](https://firebase.google.com/){:target="_blank"}, Google's web application and mobile development platform with excellent integration options and cloud backed features also made it to the top 15.
* **Docker** appears on this list for the first time representing containerization. Docker is so far the only technology from the infrastructure/DevOps related domains that made it to the top list.

## Growth of emerging tags

Let's see what's happening to those tags that have over 1000 questions. These tags are gaining increasing visibility.

|    | TagName                | Questions | Questions (06/2018) | Growth # | Growth % |
|----|------------------------|---------|-----------|---------|-------------|
|  1 | flutter                | 7,728   | 2,781     | 4,947   |      177.89 |
|  2 | google-cloud-firestore | 6,392   | 3,354     | 3,038   |       90.58 |
|  3 | product                | 3,603   | 1,902     | 1,701   |       89.43 |
|  4 | jestjs                 | 4,047   | 2,146     | 1,901   |       88.58 |
|  5 | pandas-groupby         | 2,255   | 1,326     | 929     |       70.06 |
|  6 | discord                | 1,974   | 1,191     | 783     |       65.74 |
|  7 | hyperledger-fabric     | 3,055   | 1,910     | 1,145   |       59.95 |
|  8 | actions-on-google      | 1,721   | 1,083     | 638     |       58.91 |
|  9 | hyperledger-composer   | 1,676   | 1,055     | 621     |       58.86 |
| 10 | axios                  | 4,232   | 2,676     | 1,556   |       58.15 |
| 11 | bootstrap-4            | 9,688   | 6,128     | 3,560   |       58.09 |
| 12 | vuex                   | 2,147   | 1,375     | 772     |       56.15 |
| 13 | hyperledger            | 2,350   | 1,525     | 825     |       54.10 |
| 14 | google-cloud-functions | 4,517   | 2,969     | 1,548   |       52.14 |
| 15 | asp.net-core-webapi    | 1,997   | 1,324     | 673     |       50.83 |

**This list contains smaller libraries, frameworks that you should consider for your overall project toolkit.**

* Google's mobile application SDK, [Flutter](https://flutter.io/){:target="_blank"} just reached version 1.0.
* Flutter is not the only emerging product by Google; cloud components like the [Firestore](https://firebase.google.com/docs/firestore/){:target="_blank"} NoSQL database, [Google Assistant Actions](https://developers.google.com/actions/){:target="_blank"} and [Google Cloud Functions](https://firebase.google.com/docs/functions/functions-and-firebase){:target="_blank"} are gaining momentum.
* Web application development is strongly represented by [Bootstrap 4](https://blog.getbootstrap.com/){:target="_blank"}, [Vuex](https://vuex.vuejs.org/){:target="_blank"}, [Axios](https://github.com/axios/axios){:target="_blank"} and [Jest](https://jestjs.io/){:target="_blank"}, the first testing framework on the top list.
* We find exciting niche tags here like the [Discord messaging API](https://discordapp.com/){:target="_blank"} and [Hyperledger](https://www.hyperledger.org/){:target="_blank"} an umbrella project for open-source blockchain related tools by the Linux Foundation.

## High growth newcomers

Let's look at those tags that had a low number of questions (between 100 and 1000), these are typically new releases that show immense growth from day one.

|    | TagName                         | Questions | Questions (06/2018) | Growth # | Growth % |
|----|---------------------------------|---------|-----------|---------|-------------|
|  1 | angular6                        | 5,231   |       436 | 4,795   |     1099.77 |
|  2 | ubuntu-18.04                    | 622     |       107 | 515     |      481.31 |
|  3 | webpack-4                       | 614     |       149 | 465     |      312.08 |
|  4 | android-collapsingtoolbarlayout | 1,052   |       278 | 774     |      278.42 |
|  5 | firebase-security-rules         | 543     |       168 | 375     |      223.21 |
|  6 | nestjs                          | 323     |       101 | 222     |      219.80 |
|  7 | aws-appsync                     | 336     |       109 | 227     |      208.26 |
|  8 | cypress                         | 467     |       158 | 309     |      195.57 |
|  9 | kubernetes-ingress              | 379     |       136 | 243     |      178.68 |
| 10 | next.js                         | 432     |       164 | 268     |      163.41 |
| 11 | laravel-5.6                     | 1,725   |       662 | 1,063   |      160.57 |
| 12 | php-7.2                         | 364     |       142 | 222     |      156.34 |
| 13 | postgresql-10                   | 296     |       117 | 179     |      152.99 |
| 14 | java-10                         | 353     |       144 | 209     |      145.14 |
| 15 | google-kubernetes-engine        | 691     |       283 | 408     |      144.17 |

**Web application development** is again heavily present with Angular, Webpack, [Cypress](https://www.cypress.io/){:target="_blank"}, an end-to-end Javascript testing framework, [nest](https://nestjs.com/){:target="_blank"} and [Next.js](https://nextjs.org/){:target="_blank"}, a production grade React framework.

Most tags in this category are related to a specific release of a given technology. These versions entered the market during the last year and most of them are not the current latest, but **they clearly show which technologies are continuously used on real projects.**

[Laravel](https://laravel.com/){:target="_blank"}, [Postgres](https://www.postgresql.org/){:target="_blank"} and [Kubernetes](https://kubernetes.io/){:target="_blank"} are a nice addition to your focus list.

Let's look at the tags that are completely new and growing in the December 2018 Stackoverflow data dump.

|    | TagName               |   Questons |
|----|-----------------------|---------|
|  1 | xcode10               |     701 |
|  2 | angular7              |     502 |
|  3 | ios12                 |     472 |
|  4 | laravel-5.7           |     402 |
|  5 | azure-devops-rest-api |     377 |
|  6 | macos-mojave          |     328 |
|  7 | ef-core-2.1           |     310 |
|  8 | swift4.2              |     245 |
|  9 | vue-cli-3             |     174 |
| 10 | angular-material-6    |     167 |
| 11 | raku                  |     133 |
| 12 | azure-artifacts       |     125 |
| 13 | nuxt                  |     123 |
| 14 | laravel-nova          |     123 |
| 15 | ibm-rational          |     120 |

This list re-confirms that **iOS mobile development is a top priority with Xcode, iOS 12 and Swift 4.2, web application frameworks keep evolving with Nuxt and Vue cli, Laravel 5.7 and Angular Material.**

## Wrap-up

I hope you find the various data views in this article useful. Depending on your use-case and profession you may focus on different parts of the data presented here. Let me give you a short summary of the key points and general takeaways:

* **Enterprise applications**, web applications and mobile applications dominate the scene from a helicopter view. Javascript, Java and C# are the go to languages in this domain.
* **Python is the fastest growing language overall.** This growth may be mostly justified with the boom of data science, statistical computing and machine learning applications.
* Both **Android and iOS** development is growing at a standard rate.
* Excel, Python, R and SQL are the key tools for **data science** with Pandas being a key skill in this domain. (I used Python and Pandas for this data analysis myself.)
* **Angular, React and Vue** are leading the SPA and native application development arena.
* If you are looking for **new skills with great potential**, have a look at Kotlin, Firebase, Flutter, nest.js and Next.js.
* Tensorflow has emerged as the key **machine learning** framework.
* **Add Docker and Kubernetes to your skill set.**
* Interested in **Blockchain**? Check out Hyperledger!
* If you need professional, beautiful and easy to use online presence, your best bet is still **Wordpress**.

Have fun and build great skills!
