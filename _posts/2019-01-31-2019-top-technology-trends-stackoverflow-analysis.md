---
layout: post
title: "2019 Top Technology Trends | Based on Stackoverflow Data Analysis"
description: "Discover high growth technology solutions used by companies worldwide in enterprise application development, web apps, data analysis, ML, DevOps, mobile applications and more."
date: 2019-01-31 07:19:00 +0100
author: Márk Takács
thumbnail: "/assets/images/post-thumbs/2019-Technology-Trends-Stackoverflow-Analysis.png"
category: Tech trends
---

<!-- prettier-ignore -->
* TOC
<!-- prettier-ignore -->
{:toc}

This post is the result of several days of Stackoverflow data mining. The insights and figures you find in this article come from the December 2, 2018 [Stack Exchange data dump](https://archive.org/download/stackexchange){:target="\_blank"}.

_The goal of this post is to show you what's happening in popular enterprise and web application domains, data science, machine learning and cloud technologies._

First, I give you a short introduction to the big picture presenting the top technology domains on Stackoverflow.
Next, we explore the high growth technologies of 2019 grouped into practical categories:

- **Growth of the most established technologies** - find the focus of the industry.
- **Growth of trending technologies** - trending skills you should already have or build right now.
- **Growth of emerging technologies** - up and coming technologies that increase the overall value of your work.
- **High growth newcomers** - new releases you should keep an eye on.

## The leading technical domains on Stackoverflow

[The first Stackoverflow question](https://stackoverflow.com/questions/6/percentage-width-child-element-in-absolutely-positioned-parent-on-internet-explo){:target="\_blank"} was created on July 31, 2008. Questions and answers are added continuously since that day. Questions are tagged with the label of their specific domain by Stackoverflow users. The all-time top ranking tags are the ones you see in the table below.

<table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th>&nbsp;</th>
      <th>TagName</th>
      <th>Questions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>javascript</td>
      <td>1,723,731</td>
    </tr>
    <tr>
      <td>2</td>
      <td>java</td>
      <td>1,487,235</td>
    </tr>
    <tr>
      <td>3</td>
      <td>c#</td>
      <td>1,264,947</td>
    </tr>
    <tr>
      <td>4</td>
      <td>php</td>
      <td>1,245,650</td>
    </tr>
    <tr>
      <td>5</td>
      <td>android</td>
      <td>1,155,005</td>
    </tr>
    <tr>
      <td>6</td>
      <td>python</td>
      <td>1,068,679</td>
    </tr>
    <tr>
      <td>7</td>
      <td>jquery</td>
      <td>936,264</td>
    </tr>
    <tr>
      <td>8</td>
      <td>html</td>
      <td>789,778</td>
    </tr>
    <tr>
      <td>9</td>
      <td>c++</td>
      <td>595,978</td>
    </tr>
    <tr>
      <td>10</td>
      <td>ios</td>
      <td>584,135</td>
    </tr>
    <tr>
      <td>11</td>
      <td>css</td>
      <td>563,816</td>
    </tr>
    <tr>
      <td>12</td>
      <td>mysql</td>
      <td>541,862</td>
    </tr>
    <tr>
      <td>13</td>
      <td>sql</td>
      <td>468,836</td>
    </tr>
    <tr>
      <td>14</td>
      <td>asp.net</td>
      <td>340,549</td>
    </tr>
    <tr>
      <td>15</td>
      <td>ruby-on-rails</td>
      <td>300,045</td>
    </tr>
  </tbody>
</table>

The table shows the overall number of questions tagged with the specific "TagName" since the beginning of Stackoverflow. There are over 53k tags, you see the top 15 here.

Let's examine what the table shows us.

- The table features the technologies that are most heavily used to build enterprise applications and web applications. **Javascript, Java, C# and PHP are clearly the top technologies that you see in most businesses, no wonder they have such a high number of questions.**
- **Android and iOS** are also in the top ten, clearly signaling that mobile application development is a high business priority.
- **JQuery, HTML and CSS** are all building blocks of modern websites, although we have to look into the detailed trends to see where these technologies are going.
- **Python is a great general purpose language. Traditionally it is not a preferred choice for enterprise application development, still it holds the sixth position.** Is this due to the increased popularity of Python's machine learning and data mining libraries? This is something we have to explore together.
- In the **database domain MySQL and SQL** made it to the top fifteen and Ruby on Rails seems to be the most popular web application framework.

Please note the huge difference in the numbers between number one and number fifteen; 1.7M vs 300k.

Keep in mind, that these numbers show the accumulated results of a decade, they do not signal current popularity, this is just the beginning.

## Changes in the past six months

Let's compare the above tag counts to the tag counts from June, 2018. I have another Stackoverflow dump from last summer that I used to create the below table.

<table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th>&nbsp;</th>
      <th>TagName</th>
      <th>Questions</th>
      <th>Questions (06/2018)</th>
      <th>Growth #</th>
      <th>Growth %</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>javascript</td>
      <td>1,723,731</td>
      <td>1,624,044</td>
      <td>99,687</td>
      <td>6.14</td>
    </tr>
    <tr>
      <td>2</td>
      <td>java</td>
      <td>1,487,235</td>
      <td>1,420,739</td>
      <td>66,496</td>
      <td>4.68</td>
    </tr>
    <tr>
      <td>3</td>
      <td>c#</td>
      <td>1,264,947</td>
      <td>1,213,373</td>
      <td>51,574</td>
      <td>4.25</td>
    </tr>
    <tr>
      <td>4</td>
      <td>php</td>
      <td>1,245,650</td>
      <td>1,200,404</td>
      <td>45,246</td>
      <td>3.77</td>
    </tr>
    <tr>
      <td>5</td>
      <td>android</td>
      <td>1,155,005</td>
      <td>1,106,297</td>
      <td>48,708</td>
      <td>4.40</td>
    </tr>
    <tr>
      <td>6</td>
      <td>python</td>
      <td>1,068,679</td>
      <td>962,457</td>
      <td>106,222</td>
      <td>11.04</td>
    </tr>
    <tr>
      <td>7</td>
      <td>jquery</td>
      <td>936,264</td>
      <td>913,262</td>
      <td>23,002</td>
      <td>2.52</td>
    </tr>
    <tr>
      <td>8</td>
      <td>html</td>
      <td>789,778</td>
      <td>752,349</td>
      <td>37,429</td>
      <td>4.97</td>
    </tr>
    <tr>
      <td>9</td>
      <td>c++</td>
      <td>595,978</td>
      <td>572,330</td>
      <td>23,648</td>
      <td>4.13</td>
    </tr>
    <tr>
      <td>10</td>
      <td>ios</td>
      <td>584,135</td>
      <td>564,630</td>
      <td>19,505</td>
      <td>3.45</td>
    </tr>
    <tr>
      <td>11</td>
      <td>css</td>
      <td>563,816</td>
      <td>537,685</td>
      <td>26,131</td>
      <td>4.86</td>
    </tr>
    <tr>
      <td>12</td>
      <td>mysql</td>
      <td>541,862</td>
      <td>520,597</td>
      <td>21,265</td>
      <td>4.08</td>
    </tr>
    <tr>
      <td>13</td>
      <td>sql</td>
      <td>468,836</td>
      <td>443,312</td>
      <td>25,524</td>
      <td>5.76</td>
    </tr>
    <tr>
      <td>14</td>
      <td>asp.net</td>
      <td>340,549</td>
      <td>333,949</td>
      <td>6,600</td>
      <td>1.98</td>
    </tr>
    <tr>
      <td>15</td>
      <td>ruby-on-rails</td>
      <td>300,045</td>
      <td>292,802</td>
      <td>7,243</td>
      <td>2.47</td>
    </tr>
  </tbody>
</table>

The table shows the growth in terms of questions tagged with the top fifteen tags, both the growth in the number of questions and growth percentage are displayed in the **"Growth #"** and **"Growth %"** columns respectively.

_How can you find the real meaning of these numbers?_ The table shows the number of questions developers ask to complete a project task.

Most questions are asked only once. When the answer is on Stackoverflow, people use the existing answer, they don't ask the question again. Does that mean that once we learn how to use a certain technology, then the number of new questions will naturally decrease over time? I don't think so.

Based on the detailed figures that I show you later in this post, my working assumption is different. If a technology is continuously used by a large number of projects worldwide, the number of new questions keeps growing on Stackoverflow.

**The growth in Stackoverflow questions shows a buzzing ecosystem that brings new features, libraries or frameworks to the market continuously and it's used in combination with other emerging technologies to build high-tech stuff.**

Looking at the table we get the feeling that everything around 4% growth shows a stable domain. (The growth mean is 4.57% and the growth median is 4.25%.)

- **We see two distinct high growth areas; namely Javascript and Python, with Python having an extraordinary 11% increase.**
- **SQL** also performs above average, it's quite natural if you think of the growing data processing need of the world.
- **JQuery** added over 23 thousand questions, still it lags behind the overall growth rate of the Javascript ecosystem. We look at Angular and React and see how the rise of these frameworks affect JQuery.
- **Asp.net** has the lowest number on this list, but this does not necessarily mean the abandonment of the asp.net framework. Looking at Asp.net Core, we see 27% growth and a total of 24 thousand questions on Stackoverflow.
- **Ruby on Rails** shows a below average growth rate.

Let's turn the question around and see the top growth tags in the last six months.

## Growth of the most established tags

We start with those tags that had at least 100k questions on Stackoverflow in June, 2018. These are mature technologies with large user base; let's call them established tags. The below table is ordered by growth percentage showing highest growth first.

<table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th>&nbsp;</th>
      <th>TagName</th>
      <th>Questions</th>
      <th>Questions (06/2018)</th>
      <th>Growth #</th>
      <th>Growth %</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>python-3.x</td>
      <td>131,954</td>
      <td>103,283</td>
      <td>28,671</td>
      <td>27.76</td>
    </tr>
    <tr>
      <td>2</td>
      <td>excel</td>
      <td>182,653</td>
      <td>146,298</td>
      <td>36,355</td>
      <td>24.85</td>
    </tr>
    <tr>
      <td>3</td>
      <td>angular</td>
      <td>142,665</td>
      <td>114,564</td>
      <td>28,101</td>
      <td>24.53</td>
    </tr>
    <tr>
      <td>4</td>
      <td>python</td>
      <td>1,068,679</td>
      <td>962,457</td>
      <td>106,222</td>
      <td>11.04</td>
    </tr>
    <tr>
      <td>5</td>
      <td>node.js</td>
      <td>252,591</td>
      <td>227,969</td>
      <td>24,622</td>
      <td>10.80</td>
    </tr>
    <tr>
      <td>6</td>
      <td>r</td>
      <td>265,957</td>
      <td>240,683</td>
      <td>25,274</td>
      <td>10.50</td>
    </tr>
    <tr>
      <td>7</td>
      <td>swift</td>
      <td>214,571</td>
      <td>194,762</td>
      <td>19,809</td>
      <td>10.17</td>
    </tr>
    <tr>
      <td>8</td>
      <td>django</td>
      <td>185,010</td>
      <td>171,428</td>
      <td>13,582</td>
      <td>7.92</td>
    </tr>
    <tr>
      <td>9</td>
      <td>spring</td>
      <td>143,227</td>
      <td>133,450</td>
      <td>9,777</td>
      <td>7.33</td>
    </tr>
    <tr>
      <td>10</td>
      <td>wordpress</td>
      <td>142,202</td>
      <td>133,363</td>
      <td>8,839</td>
      <td>6.63</td>
    </tr>
    <tr>
      <td>11</td>
      <td>javascript</td>
      <td>1,723,731</td>
      <td>1,624,044</td>
      <td>99,687</td>
      <td>6.14</td>
    </tr>
    <tr>
      <td>12</td>
      <td>arrays</td>
      <td>281,590</td>
      <td>265,417</td>
      <td>16,173</td>
      <td>6.09</td>
    </tr>
    <tr>
      <td>13</td>
      <td>json</td>
      <td>249,683</td>
      <td>235,478</td>
      <td>14,205</td>
      <td>6.03</td>
    </tr>
    <tr>
      <td>14</td>
      <td>sql-server</td>
      <td>247,642</td>
      <td>233,561</td>
      <td>14,081</td>
      <td>6.03</td>
    </tr>
    <tr>
      <td>15</td>
      <td>sql</td>
      <td>468,836</td>
      <td>443,312</td>
      <td>25,524</td>
      <td>5.76</td>
    </tr>
  </tbody>
</table>

This table gives us the overall trends of the industry.

- **Data mining, statistical computing and AI** made it to the top fifteen with Python, Excel, R, SQL and some of the JSON questions.
- Web application frameworks are also a significant group with Angular, Node, Django and Spring. A good portion of the JSON questions is attributed to API development, so **web applications and APIs** are still amongst the hottest topics.
- Android was ahead of iOS in the first chart with 4.4% growth vs 3.45%, but this may be misleading. Looking at this table, we can clearly see that Swift produces a 10.17% growth. **Mobile development** is the third biggest growth area in our analysis.
- Although you don't hear much about Wordpress these days, note that this good old piece of tech still keeps up with today's demand and it sees growing use in the blogging, personal website and SME/SOHO website domains.

## Growth of trending tags

Another interesting segment is the group of tags with over 10k questions on Stackoverflow. We find the up and coming technologies of the past years that took a strong start and are still on the rise.

<table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th>&nbsp;</th>
      <th>TagName</th>
      <th>Questions</th>
      <th>Questions (06/2018)</th>
      <th>Growth #</th>
      <th>Growth %</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>kotlin</td>
      <td>16,947</td>
      <td>11,069</td>
      <td>5,878</td>
      <td>53.10</td>
    </tr>
    <tr>
      <td>2</td>
      <td>vue.js</td>
      <td>26,395</td>
      <td>18,041</td>
      <td>8,354</td>
      <td>46.31</td>
    </tr>
    <tr>
      <td>3</td>
      <td>vba</td>
      <td>135,135</td>
      <td>99,820</td>
      <td>35,315</td>
      <td>35.38</td>
    </tr>
    <tr>
      <td>4</td>
      <td>web</td>
      <td>35,788</td>
      <td>26,518</td>
      <td>9,270</td>
      <td>34.96</td>
    </tr>
    <tr>
      <td>5</td>
      <td>react-native</td>
      <td>42,213</td>
      <td>32,064</td>
      <td>10,149</td>
      <td>31.65</td>
    </tr>
    <tr>
      <td>6</td>
      <td>reactjs</td>
      <td>112,290</td>
      <td>85,881</td>
      <td>26,409</td>
      <td>30.75</td>
    </tr>
    <tr>
      <td>7</td>
      <td>spring-boot</td>
      <td>48,406</td>
      <td>37,662</td>
      <td>10,744</td>
      <td>28.53</td>
    </tr>
    <tr>
      <td>8</td>
      <td>tensorflow</td>
      <td>35,850</td>
      <td>28,128</td>
      <td>7,722</td>
      <td>27.45</td>
    </tr>
    <tr>
      <td>9</td>
      <td>asp.net-core</td>
      <td>24,620</td>
      <td>19,398</td>
      <td>5,222</td>
      <td>26.92</td>
    </tr>
    <tr>
      <td>10</td>
      <td>typescript</td>
      <td>68,305</td>
      <td>54,863</td>
      <td>13,442</td>
      <td>24.50</td>
    </tr>
    <tr>
      <td>11</td>
      <td>pandas</td>
      <td>88,287</td>
      <td>70,923</td>
      <td>17,364</td>
      <td>24.48</td>
    </tr>
    <tr>
      <td>12</td>
      <td>firebase</td>
      <td>61,699</td>
      <td>50,217</td>
      <td>11,482</td>
      <td>22.86</td>
    </tr>
    <tr>
      <td>13</td>
      <td>redux</td>
      <td>16,588</td>
      <td>13,527</td>
      <td>3,061</td>
      <td>22.63</td>
    </tr>
    <tr>
      <td>14</td>
      <td>docker</td>
      <td>48,222</td>
      <td>39,408</td>
      <td>8,814</td>
      <td>22.37</td>
    </tr>
    <tr>
      <td>15</td>
      <td>dataframe</td>
      <td>41,810</td>
      <td>34,330</td>
      <td>7,480</td>
      <td>21.79</td>
    </tr>
  </tbody>
</table>

**This is the list that shows you which skills you should develop right now in your company or in your own profile to stay competitive.**

- [Kotlin](https://kotlinlang.org/){:target="\_blank"} is an exceptional programming language, you have the ability to code for JVM, develop Android, Javascript and Native applications with the use of the same language. This unique and powerful value proposition brought Kotlin to the top of this list.
- [Vue](https://vuejs.org/){:target="\_blank"}, [React](https://reactjs.org/){:target="\_blank"}, [React Native](https://facebook.github.io/react-native/){:target="\_blank"}, [Redux](https://redux.js.org/){:target="\_blank"} and [Angular](https://angular.io/){:target="\_blank"} (on the established tags list) represent the **single page application** libraries and frameworks with their versatile solutions to bring the same code also to mobile devices.
- Python, Pandas, dataframe, VBA and Tensorflow reinforce the growing significance of **data science, statistical computing and machine learning**.
- Asp.net Core and Spring Boot are the high growth enterprise web application frameworks.
- [Firebase](https://firebase.google.com/){:target="\_blank"}, Google's web application and mobile development platform with excellent integration options and cloud backed features also made it to the top 15.
- **Docker** appears on this list for the first time representing containerization. Docker is so far the only technology from the infrastructure/DevOps related domains that made it to the top list.

## Growth of emerging tags

Let's see what's happening to those tags that have over 1000 questions. These tags are gaining increasing visibility.

<table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th>&nbsp;</th>
      <th>TagName</th>
      <th>Questions</th>
      <th>Questions (06/2018)</th>
      <th>Growth #</th>
      <th>Growth %</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>flutter</td>
      <td>7,728</td>
      <td>2,781</td>
      <td>4,947</td>
      <td>177.89</td>
    </tr>
    <tr>
      <td>2</td>
      <td>google-cloud-firestore</td>
      <td>6,392</td>
      <td>3,354</td>
      <td>3,038</td>
      <td>90.58</td>
    </tr>
    <tr>
      <td>3</td>
      <td>product</td>
      <td>3,603</td>
      <td>1,902</td>
      <td>1,701</td>
      <td>89.43</td>
    </tr>
    <tr>
      <td>4</td>
      <td>jestjs</td>
      <td>4,047</td>
      <td>2,146</td>
      <td>1,901</td>
      <td>88.58</td>
    </tr>
    <tr>
      <td>5</td>
      <td>pandas-groupby</td>
      <td>2,255</td>
      <td>1,326</td>
      <td>929</td>
      <td>70.06</td>
    </tr>
    <tr>
      <td>6</td>
      <td>discord</td>
      <td>1,974</td>
      <td>1,191</td>
      <td>783</td>
      <td>65.74</td>
    </tr>
    <tr>
      <td>7</td>
      <td>hyperledger-fabric</td>
      <td>3,055</td>
      <td>1,910</td>
      <td>1,145</td>
      <td>59.95</td>
    </tr>
    <tr>
      <td>8</td>
      <td>actions-on-google</td>
      <td>1,721</td>
      <td>1,083</td>
      <td>638</td>
      <td>58.91</td>
    </tr>
    <tr>
      <td>9</td>
      <td>hyperledger-composer</td>
      <td>1,676</td>
      <td>1,055</td>
      <td>621</td>
      <td>58.86</td>
    </tr>
    <tr>
      <td>10</td>
      <td>axios</td>
      <td>4,232</td>
      <td>2,676</td>
      <td>1,556</td>
      <td>58.15</td>
    </tr>
    <tr>
      <td>11</td>
      <td>bootstrap-4</td>
      <td>9,688</td>
      <td>6,128</td>
      <td>3,560</td>
      <td>58.09</td>
    </tr>
    <tr>
      <td>12</td>
      <td>vuex</td>
      <td>2,147</td>
      <td>1,375</td>
      <td>772</td>
      <td>56.15</td>
    </tr>
    <tr>
      <td>13</td>
      <td>hyperledger</td>
      <td>2,350</td>
      <td>1,525</td>
      <td>825</td>
      <td>54.10</td>
    </tr>
    <tr>
      <td>14</td>
      <td>google-cloud-functions</td>
      <td>4,517</td>
      <td>2,969</td>
      <td>1,548</td>
      <td>52.14</td>
    </tr>
    <tr>
      <td>15</td>
      <td>asp.net-core-webapi</td>
      <td>1,997</td>
      <td>1,324</td>
      <td>673</td>
      <td>50.83</td>
    </tr>
  </tbody>
</table>

**This list contains smaller libraries, frameworks that you should consider for your overall project toolkit.**

- Google's mobile application SDK, [Flutter](https://flutter.io/){:target="\_blank"} just reached version 1.0.
- Flutter is not the only emerging product by Google; cloud components like the [Firestore](https://firebase.google.com/docs/firestore/){:target="\_blank"} NoSQL database, [Google Assistant Actions](https://developers.google.com/actions/){:target="\_blank"} and [Google Cloud Functions](https://firebase.google.com/docs/functions/functions-and-firebase){:target="\_blank"} are gaining momentum.
- Web application development is strongly represented by [Bootstrap 4](https://blog.getbootstrap.com/){:target="\_blank"}, [Vuex](https://vuex.vuejs.org/){:target="\_blank"}, [Axios](https://github.com/axios/axios){:target="\_blank"} and [Jest](https://jestjs.io/){:target="\_blank"}, the first testing framework on the top list.
- We find exciting niche tags here like the [Discord messaging API](https://discordapp.com/){:target="\_blank"} and [Hyperledger](https://www.hyperledger.org/){:target="\_blank"} an umbrella project for open-source blockchain related tools by the Linux Foundation.

## High growth newcomers

Let's look at those tags that had a low number of questions (between 100 and 1000), these are typically new releases that show immense growth from day one.

<table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th>&nbsp;</th>
      <th>TagName</th>
      <th>Questions</th>
      <th>Questions (06/2018)</th>
      <th>Growth #</th>
      <th>Growth %</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>angular6</td>
      <td>5,231</td>
      <td>436</td>
      <td>4,795</td>
      <td>1099.77</td>
    </tr>
    <tr>
      <td>2</td>
      <td>ubuntu-18.04</td>
      <td>622</td>
      <td>107</td>
      <td>515</td>
      <td>481.31</td>
    </tr>
    <tr>
      <td>3</td>
      <td>webpack-4</td>
      <td>614</td>
      <td>149</td>
      <td>465</td>
      <td>312.08</td>
    </tr>
    <tr>
      <td>4</td>
      <td>android-collapsingtoolbarlayout</td>
      <td>1,052</td>
      <td>278</td>
      <td>774</td>
      <td>278.42</td>
    </tr>
    <tr>
      <td>5</td>
      <td>firebase-security-rules</td>
      <td>543</td>
      <td>168</td>
      <td>375</td>
      <td>223.21</td>
    </tr>
    <tr>
      <td>6</td>
      <td>nestjs</td>
      <td>323</td>
      <td>101</td>
      <td>222</td>
      <td>219.80</td>
    </tr>
    <tr>
      <td>7</td>
      <td>aws-appsync</td>
      <td>336</td>
      <td>109</td>
      <td>227</td>
      <td>208.26</td>
    </tr>
    <tr>
      <td>8</td>
      <td>cypress</td>
      <td>467</td>
      <td>158</td>
      <td>309</td>
      <td>195.57</td>
    </tr>
    <tr>
      <td>9</td>
      <td>kubernetes-ingress</td>
      <td>379</td>
      <td>136</td>
      <td>243</td>
      <td>178.68</td>
    </tr>
    <tr>
      <td>10</td>
      <td>next.js</td>
      <td>432</td>
      <td>164</td>
      <td>268</td>
      <td>163.41</td>
    </tr>
    <tr>
      <td>11</td>
      <td>laravel-5.6</td>
      <td>1,725</td>
      <td>662</td>
      <td>1,063</td>
      <td>160.57</td>
    </tr>
    <tr>
      <td>12</td>
      <td>php-7.2</td>
      <td>364</td>
      <td>142</td>
      <td>222</td>
      <td>156.34</td>
    </tr>
    <tr>
      <td>13</td>
      <td>postgresql-10</td>
      <td>296</td>
      <td>117</td>
      <td>179</td>
      <td>152.99</td>
    </tr>
    <tr>
      <td>14</td>
      <td>java-10</td>
      <td>353</td>
      <td>144</td>
      <td>209</td>
      <td>145.14</td>
    </tr>
    <tr>
      <td>15</td>
      <td>google-kubernetes-engine</td>
      <td>691</td>
      <td>283</td>
      <td>408</td>
      <td>144.17</td>
    </tr>
  </tbody>
</table>

**Web application development** is again heavily present with Angular, Webpack, [Cypress](https://www.cypress.io/){:target="\_blank"}, an end-to-end Javascript testing framework, [nest](https://nestjs.com/){:target="\_blank"} and [Next.js](https://nextjs.org/){:target="\_blank"}, a production grade React framework.

Most tags in this category are related to a specific release of a given technology. These versions entered the market during the last year and most of them are not the current latest, but **they clearly show which technologies are continuously used on real projects.**

[Laravel](https://laravel.com/){:target="\_blank"}, [Postgres](https://www.postgresql.org/){:target="\_blank"} and [Kubernetes](https://kubernetes.io/){:target="\_blank"} are a nice addition to your focus list.

Let's look at the tags that are completely new and growing in the December 2018 Stackoverflow data dump.

<table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th>&nbsp;</th>
      <th>TagName</th>
      <th>Questons</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>xcode10</td>
      <td>701</td>
    </tr>
    <tr>
      <td>2</td>
      <td>angular7</td>
      <td>502</td>
    </tr>
    <tr>
      <td>3</td>
      <td>ios12</td>
      <td>472</td>
    </tr>
    <tr>
      <td>4</td>
      <td>laravel-5.7</td>
      <td>402</td>
    </tr>
    <tr>
      <td>5</td>
      <td>azure-devops-rest-api</td>
      <td>377</td>
    </tr>
    <tr>
      <td>6</td>
      <td>macos-mojave</td>
      <td>328</td>
    </tr>
    <tr>
      <td>7</td>
      <td>ef-core-2.1</td>
      <td>310</td>
    </tr>
    <tr>
      <td>8</td>
      <td>swift4.2</td>
      <td>245</td>
    </tr>
    <tr>
      <td>9</td>
      <td>vue-cli-3</td>
      <td>174</td>
    </tr>
    <tr>
      <td>10</td>
      <td>angular-material-6</td>
      <td>167</td>
    </tr>
    <tr>
      <td>11</td>
      <td>raku</td>
      <td>133</td>
    </tr>
    <tr>
      <td>12</td>
      <td>azure-artifacts</td>
      <td>125</td>
    </tr>
    <tr>
      <td>13</td>
      <td>nuxt</td>
      <td>123</td>
    </tr>
    <tr>
      <td>14</td>
      <td>laravel-nova</td>
      <td>123</td>
    </tr>
    <tr>
      <td>15</td>
      <td>ibm-rational</td>
      <td>120</td>
    </tr>
  </tbody>
</table>

This list re-confirms that **iOS mobile development is a top priority with Xcode, iOS 12 and Swift 4.2, web application frameworks keep evolving with Nuxt and Vue cli, Laravel 5.7 and Angular Material.**

## Wrap-up

I hope you find the various data views in this article useful. Depending on your use-case and profession you may focus on different parts of the data presented here. Let me give you a short summary of the key points and general takeaways:

- **Enterprise applications**, web applications and mobile applications dominate the scene from a helicopter view. Javascript, Java and C# are the go to languages in this domain.
- **Python is the fastest growing language overall.** This growth may be mostly justified with the boom of data science, statistical computing and machine learning applications.
- Both **Android and iOS** development is growing at a standard rate.
- Excel, Python, R and SQL are the key tools for **data science** with Pandas being a key skill in this domain. (I used Python and Pandas for this data analysis myself.)
- **Angular, React and Vue** are leading the SPA and native application development arena.
- If you are looking for **new skills with great potential**, have a look at Kotlin, Firebase, Flutter, nest.js and Next.js.
- Tensorflow has emerged as the key **machine learning** framework.
- **Add Docker and Kubernetes to your skill set.**
- Interested in **Blockchain**? Check out Hyperledger!
- If you need professional, beautiful and easy to use online presence, your best bet is still **Wordpress**.

Have fun and build great skills!
