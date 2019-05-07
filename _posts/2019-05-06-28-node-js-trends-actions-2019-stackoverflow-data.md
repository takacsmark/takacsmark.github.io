---
layout: post
title: "28 Node.js Trends and Actions | 2019 | Based on Stackoverflow Data"
description: "Explore the top tech used in real-life Node.js projects. Use our comprehensive action plan to move forward. All this based on Stackoverflow data."
date: 2019-05-06 07:19:00 +0100
thumbnail: "/assets/images/post-thumbs/28-Node-js-Trends-Actions-2019.png"
categories: Technology, Trends, TechBiz
---
 * TOC
{:toc}


## tl;dr

In this article we take Stackoverflow data dumps and analyze vital aspects of the Node.js ecosystem and identify action points that you can address right now.

**Let me summarize the key trends you find in the article in case you don’t have the time to read the whole thing.**

-   **General Javascript trends play a key role in the use of Node.js**. New additions like Ecmascript-6 and Promises, JWT and the rise of Typescript greatly influence how Node.js is used in projects.
-   **Server side is the main area of use, with Express** as the main tool, Node.js is widely used to build and run web servers and APIs. Frameworks like Express and Sails, or popular full stack solutions like the MEAN stack further strengthen Node's positions in the back-end.
-   The server side use case introduces **MongoDB and Mongoose as key tools**. MySQL also made it to the top 10 tags used with Node.js
-   Nojde.js is used with a wide variety of **cloud platforms** on the server side.
-   **Angular and React** are the hottest overall Javascript topics these days, they are often used together with Node.js, too.

**I’ve put the summary of the action points from the article right here.**

*Industry trends where you should be active right now.*

-   Use Angular or React to create fresh user experiences and applications for desktop and mobile.
-   Use Express with Node.
-   Connect your Node applications to MySQL and MongoDB.
-   Use [Socket.io](https://socket.io/){:target="_blank"} for real-time bidirectional communication.

*Capabilities you should be actively developing.*

-   Move your focus to your Cloud and DevOps strategy. Add Google Cloud, Firebase, AWS and Azure to your options.
-   Experiment with AWS lambda.
-   If you have not yet included Docker into your workflow, it's time to make the move.
-   Build APIs with Loobpack.
-   Use [sequelize.js](https://github.com/sequelize/sequelize){:target="_blank"} for your SQL data needs.
-   Add Ecmascript 6 to your development standards.
-   See how you can use Electron to build cross-platform desktop applications.

*Domains you should consider for future skill building.*

-   Try [Discord](https://discordapp.com/){:target="_blank"} and [discord.js](https://discord.js.org/#/){:target="_blank"}.
-   Need help with UI testing and test automation? [Puppeteer](https://github.com/GoogleChrome/puppeteer){:target="_blank"} might just be right.
-   Consider [Axios](https://github.com/axios/axios){:target="_blank"} for your Node.js requests. (Axios is my go-to solution in Node and React projects, they have 58k stars on GitHub right now.)
-   Run a pilot with [Google's Cloud Platform](https://cloud.google.com/){:target="_blank"}.
-   Try the [Microsoft](https://dev.botframework.com/){:target="_blank"} bot framework for your enterprise chat bots.
-   Check out [Firebase](https://firebase.google.com/){:target="_blank"}.
-   Definitely add [JWT](https://jwt.io/){:target="_blank"} to your security stack.
-   Check out [GraphQL](https://graphql.org/learn/){:target="_blank"} for API data.
-   See if you can utilize [pm2](http://pm2.keymetrics.io/){:target="_blank"} in production operations.
-   Need a solution to manage file uploads? Try [Multer](https://github.com/expressjs/multer){:target="_blank"}.

*New tech to explore.*

-   Get started with [Angular 7](https://angular.io/guide/quickstart){:target="_blank"} and Angular 8.
-   Building an enterprise grade app? Consider [Next.js](https://nextjs.org/){:target="_blank"} and [Gatsby](https://www.gatsbyjs.org/){:target="_blank"} with React or [Nuxt.js](https://nuxtjs.org/){:target="_blank"} with Vue.
-   Experiment with [Apollo and GraphQL](https://www.apollographql.com/){:target="_blank"}.
-   Start a [Dialogflow](https://dialogflow.com/){:target="_blank"} pilot.
-   Check if [TypeORM](https://typeorm.io/#/){:target="_blank"} is the ORM you've been looking for.
-   Try [nodejs-stream](https://nodejs.org/api/stream.html){:target="_blank"} for streaming data.
-   No preferred Node.js testing framework yet? Try [Jest](https://jestjs.io/){:target="_blank"}!


## Top tags in the Node.js domain

Let's continue our Javascript trends analysis with trending Node.js tech based on Stackoverflow data dumps!

**This article is an extension to my [previous article about Javascript trends](https://takacsmark.com/25-top-javascript-trends-actions-2019-stackoverflow-data/){:target="_blank"}; this time we take a closer look at what's hot in the Node.js ecosystem and what concrete actions you can take today to keep up with the trend.** 

You can find a pretty neat overview of Javascript trends with figures in the previous article, so I'd suggest to check it out before moving on right now, because in this article, we just jump right into Node.js without discussing the broader domain of Javascript. You can find that article here <https://takacsmark.com/25-top-javascript-trends-actions-2019-stackoverflow-data/>.

I published that article almost two months ago. I know, it's been a while, please forgive my little delay, I was busy with some data crunching related client work.

**We learned in the Javascript article that Javascript is the main tool to build any and everything front-end related including web and mobile applications and desktop apps.**

We found that Angular, React and Vue are the top growth segments of Javascript. Node.js came out as a top use-case, too.

The table below shows the top Stackoverflow tags used next to Node.js on Stackoverflow questions.

<table>

<thead>
<tr>
<th>#</th>
<th>Tag name</th>
<th>Questions</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>node.js</td>
<td>251743</td>
</tr>

<tr>
<td>2</td>
<td>javascript</td>
<td>92526</td>
</tr>

<tr>
<td>3</td>
<td>express</td>
<td>40473</td>
</tr>

<tr>
<td>4</td>
<td>mongodb</td>
<td>27502</td>
</tr>

<tr>
<td>5</td>
<td>mongoose</td>
<td>17058</td>
</tr>

<tr>
<td>6</td>
<td>npm</td>
<td>13583</td>
</tr>

<tr>
<td>7</td>
<td>socket.io</td>
<td>9741</td>
</tr>

<tr>
<td>8</td>
<td>angularjs</td>
<td>8913</td>
</tr>

<tr>
<td>9</td>
<td>json</td>
<td>7058</td>
</tr>

<tr>
<td>10</td>
<td>mysql</td>
<td>5902</td>
</tr>

<tr>
<td>11</td>
<td>reactjs</td>
<td>5761</td>
</tr>

<tr>
<td>12</td>
<td>asynchronous</td>
<td>4783</td>
</tr>

<tr>
<td>13</td>
<td>angular</td>
<td>4390</td>
</tr>

<tr>
<td>14</td>
<td>promise</td>
<td>4060</td>
</tr>

<tr>
<td>15</td>
<td>jquery</td>
<td>4045</td>
</tr>

<tr>
<td>16</td>
<td>html</td>
<td>3932</td>
</tr>

<tr>
<td>17</td>
<td>heroku</td>
<td>3837</td>
</tr>

<tr>
<td>18</td>
<td>amazon-web-services</td>
<td>3682</td>
</tr>

<tr>
<td>19</td>
<td>passport.js</td>
<td>3681</td>
</tr>

<tr>
<td>20</td>
<td>sockets</td>
<td>3661</td>
</tr>

<tr>
<td>21</td>
<td>typescript</td>
<td>3581</td>
</tr>

<tr>
<td>22</td>
<td>sequelize.js</td>
<td>3527</td>
</tr>

<tr>
<td>23</td>
<td>sails.js</td>
<td>3348</td>
</tr>

<tr>
<td>24</td>
<td>websocket</td>
<td>3071</td>
</tr>

<tr>
<td>25</td>
<td>webpack</td>
<td>3047</td>
</tr>
</tbody>
</table>
Based the table and the more detailed data that I share with you later in the article, we can identify the following key patterns of Node.js use-cases. 

-   **General Javascript trends play a key role in the use of Node.js**. New additions like Ecmascript-6 and Promises, JWT and the rise of Typescript greatly influence how Node.js is used in projects.
-   **Server side is the main area of use, with Express** in the 3rd place, Node.js is widely used to build and run web servers and APIs. Frameworks like Express and Sails, or popular full stack solutions like the MEAN stack further strengthen Node's positions in the back-end.
-   The server side use case brings **MongoDB and Mongoose to place #4 and #5**. We look at database connection trends in the next chapter. Note that MySQL also made it to the top 10 tags used with Node.js
-   Server side would not be complete without **cloud platforms**. We see a few cloud solutions in the table above and as you see in the next figures several cloud solutions are growing rapidly in the Node.js arena.
-   **Angular and React** are the hottest overall Javascript topics these days, they are often used together with Node.js, too.


## Growth trends of the key Javascript domains

Let's look at the trends in all of the above domains.


### Node.js in general

General Javascript trends based on the number of questions created per month as the percentage of all Javascript questions.

![img]({{ site.url }}/assets/images/in-content/njs-js-base-so-questions-trends-2018.png)

As you can see in the picture, the number of Node.js questions is constantly growing, Typescript is growing at the same rate from the base Javascript toolkit.


### Server side frameworks, APIs and communications libraries

Picking the right tool for the job on the server side always requires great research (at least this is my experience :). 

If you have your preferred technologies, you'd better review your preferences regularly to keep up with the trends.

Let's see some of the key server side components right here.

![img]({{ site.url }}/assets/images/in-content/njs-server-side-so-questions-trends-2018.png)

**Express** is the clear winner on the server side. Sails made it to the top 25 tags list above, but its usage shows decline.

**GraphQL and Axios** also demonstrate high growth, and more and more **communications and chat** solutions appear on the growth charts, like Discord or [Microsoft's bot framework](https://dev.botframework.com/){:target="_blank"}.


### Database technologies

The figure shows the number of new monthly questions as a percentage of total questions on Stackoverflow. MySQL is still strong, MongoDB is constantly growing with Mongoose being the preferred way to connect.

The Firebase real-time database and Google Cloud Firestore are the other winners of the recent years.

![img]({{ site.url }}/assets/images/in-content/njs-db-so-questions-per-total-2018.png)


### Cloud services

The next figure shows new monthly questions created for popular cloud solutions as the percentage of total monthly questions on Stackoverflow.

For now, let's note how Firebase is outperforming other players, and also note that the entire cloud ecosystem is in a stable growth phase.

![img]({{ site.url }}/assets/images/in-content/njs-devops-so-questions-per-total-2018.png)


### Web frameworks

I have already mentioned how Angular and React dominate the Javascript trends today. Let's see their growth numbers compared to the number of new Node.js questions a month.

![img]({{ site.url }}/assets/images/in-content/njs-web-frameworks-so-questions-trends-2018.png)

I also added a separate figure for less prominent frameworks; namely Nest, Next and Nuxt.

![img]({{ site.url }}/assets/images/in-content/njs-web-frameworks-1-so-questions-trends-2018.png)


## Growth segments of the Javascript ecosystem

We have come to the sweet-spot of our article. It's time we look at the growth segments of the Node.js domain and set up your action plan based on our data driven findings.

Let's identify the high-growth domains of Node.js by looking at the **growth in question views** in the 6 month period between June 2018 and December 2018. *Note that this time we are looking at the number of question views, which I believe is the best measure of real-life usage.*

We look at the details of the following segments:

-   **Established technologies** - tags with over 4k Node.js related questions
-   **Emerging technologies** - tags with 1k to 4k questions
-   **Trending technologies** - tags with 500 to 1000 questions
-   **Top newcomers** - tags with 50 to 500 questions


### Growth of established technologies

These are the heavy tags that have been around for long enough to have a stable user base and mature solutions. Users look at both old and new questions to find out how to solve daily challenges.

<table>

<thead>
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views Growth %</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>angular</td>
<td>43.74</td>
</tr>

<tr>
<td>2</td>
<td>reactjs</td>
<td>41.67</td>
</tr>

<tr>
<td>3</td>
<td>promise</td>
<td>23.51</td>
</tr>

<tr>
<td>4</td>
<td>mysql</td>
<td>21.47</td>
</tr>

<tr>
<td>5</td>
<td>npm</td>
<td>20.63</td>
</tr>

<tr>
<td>6</td>
<td>javascript</td>
<td>16.88</td>
</tr>

<tr>
<td>7</td>
<td>node.js</td>
<td>16.78</td>
</tr>

<tr>
<td>8</td>
<td>mongoose</td>
<td>16.01</td>
</tr>

<tr>
<td>9</td>
<td>json</td>
<td>15.80</td>
</tr>

<tr>
<td>10</td>
<td>mongodb</td>
<td>15.76</td>
</tr>

<tr>
<td>11</td>
<td>asynchronous</td>
<td>15.45</td>
</tr>

<tr>
<td>12</td>
<td>express</td>
<td>15.33</td>
</tr>

<tr>
<td>13</td>
<td>jquery</td>
<td>12.65</td>
</tr>

<tr>
<td>14</td>
<td>angularjs</td>
<td>10.70</td>
</tr>

<tr>
<td>15</td>
<td>socket.io</td>
<td>9.34</td>
</tr>
</tbody>
</table>
**These are industry trends you should be active in right now**.

-   **Angular's and React's 40+% growth** in question views shows that the use of these technologies in real projects is growing continuously.
-   Besides Angular and React **Express, MySQL and Mongo** are the technologies you should be working with.
-   In the Node.js communications arena **socket.io** is the leading product.

> Actions you may take:
> 
> -   Use Angular or React to create fresh user experiences and applications for desktop and mobile.
> -   Use Express with Node.
> -   Connect your Node applications to MySQL and MongoDB.
> -   Use [Socket.io](https://socket.io/){:target="_blank"} for real-time bidirectional communication.


### Growth of emerging technologies

These tags are also established with a strong base, although somewhat smaller than the ones in the previous chapter.

<table>

<thead>
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views Growth %</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>google-cloud-functions</td>
<td>92.01</td>
</tr>

<tr>
<td>2</td>
<td>firebase</td>
<td>50.46</td>
</tr>

<tr>
<td>3</td>
<td>npm-install</td>
<td>41.72</td>
</tr>

<tr>
<td>4</td>
<td>electron</td>
<td>40.13</td>
</tr>

<tr>
<td>5</td>
<td>typescript</td>
<td>37.06</td>
</tr>

<tr>
<td>6</td>
<td>aws-lambda</td>
<td>36.18</td>
</tr>

<tr>
<td>7</td>
<td>docker</td>
<td>35.62</td>
</tr>

<tr>
<td>8</td>
<td>sequelize.js</td>
<td>32.03</td>
</tr>

<tr>
<td>9</td>
<td>webpack</td>
<td>30.76</td>
</tr>

<tr>
<td>10</td>
<td>amazon-web-services</td>
<td>26.10</td>
</tr>

<tr>
<td>11</td>
<td>ecmascript-6</td>
<td>25.38</td>
</tr>

<tr>
<td>12</td>
<td>amazon-s3</td>
<td>25.28</td>
</tr>

<tr>
<td>13</td>
<td>mongodb-query</td>
<td>23.53</td>
</tr>

<tr>
<td>14</td>
<td>loopbackjs</td>
<td>23.50</td>
</tr>

<tr>
<td>15</td>
<td>azure</td>
<td>22.56</td>
</tr>
</tbody>
</table>
**These are the capabilities you should be actively developing**.

-   Several Cloud components appear on this high growth list from **Google, Firebase, AWS and Azure**.
-   **Webpack** is the most sought for bundler solution out there.
-   The high use of the **Loobpack API Framework** is a sign that Node is widely used as an API platform.

> Actions you may take:
> 
> -   Move your focus to your Cloud and DevOps strategy. Add Google Cloud, Firebase, AWS and Azure to your options.
> -   Experiment with AWS lambda.
> -   If you have not yet included Docker into your workflow, it's time to make the move.
> -   Build APIs with Loobpack.
> -   Use [sequelize.js](https://github.com/sequelize/sequelize){:target="_blank"} for your SQL data needs.
> -   Add Ecmascript 6 to your development standards.
> -   See how you can use Electron to build cross-platform desktop applications.


### TODO Growth of trending technologies

These tags are from smaller niche segments. 

<table>

<thead>
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views Growth %</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>discord.js</td>
<td>191.21</td>
</tr>

<tr>
<td>2</td>
<td>puppeteer</td>
<td>190.04</td>
</tr>

<tr>
<td>3</td>
<td>axios</td>
<td>87.58</td>
</tr>

<tr>
<td>4</td>
<td>vue.js</td>
<td>81.43</td>
</tr>

<tr>
<td>5</td>
<td>google-cloud-platform</td>
<td>72.67</td>
</tr>

<tr>
<td>6</td>
<td>async-await</td>
<td>72.26</td>
</tr>

<tr>
<td>7</td>
<td>graphql</td>
<td>68.04</td>
</tr>

<tr>
<td>8</td>
<td>botframework</td>
<td>56.51</td>
</tr>

<tr>
<td>9</td>
<td>mongoose-schema</td>
<td>54.81</td>
</tr>

<tr>
<td>10</td>
<td>firebase-realtime-database</td>
<td>47.29</td>
</tr>

<tr>
<td>11</td>
<td>react-native</td>
<td>43.25</td>
</tr>

<tr>
<td>12</td>
<td>es6-promise</td>
<td>42.03</td>
</tr>

<tr>
<td>13</td>
<td>visual-studio-code</td>
<td>41.74</td>
</tr>

<tr>
<td>14</td>
<td>pm2</td>
<td>41.02</td>
</tr>

<tr>
<td>15</td>
<td>amazon-dynamodb</td>
<td>36.03</td>
</tr>

<tr>
<td>16</td>
<td>package.json</td>
<td>31.96</td>
</tr>

<tr>
<td>17</td>
<td>jwt</td>
<td>30.17</td>
</tr>

<tr>
<td>18</td>
<td>google-app-engine</td>
<td>30.12</td>
</tr>

<tr>
<td>19</td>
<td>multer</td>
<td>29.13</td>
</tr>

<tr>
<td>20</td>
<td>sql-server</td>
<td>29.09</td>
</tr>
</tbody>
</table>
**These are the technologies to watch, and these are the domains you should consider for future skill building.**

-   **Discord.js**, the Discord Node.js connector, is leading the pack. The chat/video chat/communications and gaming pattern comes back over and over again with high growth numbers.
-   **Puppeteer**, the headless browser solution for testing and static content generation is also used by many teams out there.
-   **Axios** is the go-to solution of many projects when it comes to requests to other components.
-   **Google Cloud Platform's** view growth outperforms that of AWS and Azure, although the latter have more questions on Stackoverflow.
-   **Microsoft's bot framework** is here to build enterprise grade chat bots.
-   **Firebase real-time database** comes in to support mobile app development.
-   **JWT authentication** has gained immense popularity lately.
-   **GraphQL** is used by more and more projects to query API data.
-   **React-native** is becoming the preferred way to deploy mobile applications in React projects.
-   **Pm2, a production process manager** for Node.js is a great tool to monitor your applications and manage Node.js microservices.
-   **Multer** handles multi-part form data, mainly file uploads.

> Actions you may take:
> 
> -   Try [Discord](https://discordapp.com/){:target="_blank"} and [discord.js](https://discord.js.org/#/){:target="_blank"}.
> -   Need help with UI testing and test automation? [Puppeteer](https://github.com/GoogleChrome/puppeteer){:target="_blank"} might just be right.
> -   Consider [Axios](https://github.com/axios/axios){:target="_blank"} for your Node.js requests. (Axios is my go-to solution in Node and React projects, they have 58k stars on GitHub right now.)
> -   Run a pilot with [Google's Cloud Platform](https://cloud.google.com/){:target="_blank"}.
> -   Try the [Microsoft bot framework](https://dev.botframework.com/){:target="_blank"} for your enterprise chat bots.
> -   Check out [Firebase](https://firebase.google.com/){:target="_blank"}.
> -   Definitely add [JWT](https://jwt.io/){:target="_blank"} to your security pack.
> -   Check out [GraphQL](https://graphql.org/learn/){:target="_blank"} for API data.
> -   See if you can utilize [pm2](http://pm2.keymetrics.io/){:target="_blank"} in production operations.
> -   Need a solution to manage file uploads? Try [Multer](https://github.com/expressjs/multer){:target="_blank"}.


### Top newcomers

These tags appeared recently and may or may not become a rising star of the next period.

<table>

<thead>
<tr>
<th>#</th>
<th>Tag name</th>
<th>Views Growth %</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>angular6</td>
<td>4089.60</td>
</tr>

<tr>
<td>2</td>
<td>nestjs</td>
<td>528.61</td>
</tr>

<tr>
<td>3</td>
<td>dialogflow</td>
<td>311.61</td>
</tr>

<tr>
<td>4</td>
<td>bootstrap-4</td>
<td>204.05</td>
</tr>

<tr>
<td>5</td>
<td>google-cloud-firestore</td>
<td>183.99</td>
</tr>

<tr>
<td>6</td>
<td>apollo-server</td>
<td>176.14</td>
</tr>

<tr>
<td>7</td>
<td>serverless</td>
<td>172.07</td>
</tr>

<tr>
<td>8</td>
<td>actions-on-google</td>
<td>163.95</td>
</tr>

<tr>
<td>9</td>
<td>typeorm</td>
<td>161.26</td>
</tr>

<tr>
<td>10</td>
<td>mern</td>
<td>161.04</td>
</tr>

<tr>
<td>11</td>
<td>nodejs-stream</td>
<td>158.90</td>
</tr>

<tr>
<td>12</td>
<td>next.js</td>
<td>155.93</td>
</tr>

<tr>
<td>13</td>
<td>request-promise</td>
<td>154.01</td>
</tr>

<tr>
<td>14</td>
<td>aggregate</td>
<td>151.82</td>
</tr>

<tr>
<td>15</td>
<td>nuxt.js</td>
<td>151.00</td>
</tr>

<tr>
<td>16</td>
<td>electron-packager</td>
<td>143.34</td>
</tr>

<tr>
<td>17</td>
<td>hyperledger-fabric</td>
<td>137.94</td>
</tr>

<tr>
<td>18</td>
<td>jest</td>
<td>130.51</td>
</tr>

<tr>
<td>19</td>
<td>aws-sdk-nodejs</td>
<td>122.72</td>
</tr>

<tr>
<td>20</td>
<td>hyperledger-composer</td>
<td>115.03</td>
</tr>

<tr>
<td>21</td>
<td>sequelize-cli</td>
<td>112.89</td>
</tr>

<tr>
<td>22</td>
<td>web3</td>
<td>108.56</td>
</tr>

<tr>
<td>23</td>
<td>electron-builder</td>
<td>106.07</td>
</tr>

<tr>
<td>24</td>
<td>google-chrome-headless</td>
<td>103.29</td>
</tr>

<tr>
<td>25</td>
<td>create-react-app</td>
<td>102.55</td>
</tr>
</tbody>
</table>
Let's highlight a few special points.

-   **Dialogflow** incorporates Google's machine learning expertise and products to give you ways to build intelligent voice and text based conversational interfaces.
-   **Apollo server** lets you build APIs for GraphQL clients.
-   **Typeorm** is a ORM to be used with both Typescript and Javascript.
-   The **MERN stack** appears on the list, but it has been recently deprecated, use Next.js instead in your React projects.
-   **Nodejs-stream** is an abstract interface to work with streaming data in Node.js.
-   **Jest** is a fantastic Javascript testing framework that I used on both Node.js and React projects.

> Actions you may take:
> 
> -   Get started with [Angular 7](https://angular.io/guide/quickstart){:target="_blank"} and Angular 8.
> -   Building an enterprise grade app? Consider [Next.js](https://nextjs.org/){:target="_blank"} and [Gatsby](https://www.gatsbyjs.org/){:target="_blank"} with React or [Nuxt.js](https://nuxtjs.org/){:target="_blank"} with Vue.
> -   Experiment with [Apollo and GraphQL](https://www.apollographql.com/){:target="_blank"}.
> -   Start a [Dialogflow](https://dialogflow.com/){:target="_blank"} pilot.
> -   Check if [TypeORM](https://typeorm.io/#/){:target="_blank"} is the ORM you've been looking for.
> -   Try [nodejs-stream](https://nodejs.org/api/stream.html){:target="_blank"} for streaming data.
> -   No preferred Node.js testing framework yet? Try [Jest](https://jestjs.io/){:target="_blank"}!


## Wrap-up

Let's summarize the key trends we found in the article.

-   **General Javascript trends play a key role in the use of Node.js**. New additions like Ecmascript-6 and Promises, JWT and the rise of Typescript greatly influence how Node.js is used in projects.
-   **Server side is the main area of use, with Express** as the main tool, Node.js is widely used to build and run web servers and APIs. Frameworks like Express and Sails, or popular full stack solutions like the MEAN stack further strengthen Node's positions in the back-end.
-   The server side use case introduces **MongoDB and Mongoose as key tools**. MySQL also made it to the top 10 tags used with Node.js
-   Nojde.js is used with a wide variety of **cloud platforms** on the server side.
-   **Angular and React** are the hottest overall Javascript topics these days, they are often used together with Node.js, too.

Let’s list the actions you may take again, so that you have them all in one place.

*Industry trends where you should be active right now.*

-   Use Angular or React to create fresh user experiences and applications for desktop and mobile.
-   Use Express with Node.
-   Connect your Node applications to MySQL and MongoDB.
-   Use [Socket.io](https://socket.io/){:target="_blank"} for real-time bidirectional communication.

*Capabilities you should be actively developing.*

-   Move your focus to your Cloud and DevOps strategy. Add Google Cloud, Firebase, AWS and Azure to your options.
-   Experiment with AWS lambda.
-   If you have not yet included Docker into your workflow, it's time to make the move.
-   Build APIs with Loobpack.
-   Use [sequelize.js](https://github.com/sequelize/sequelize){:target="_blank"} for your SQL data needs.
-   Add Ecmascript 6 to your development standards.
-   See how you can use Electron to build cross-platform desktop applications.

*Domains you should consider for future skill building.*

-   Try [Discord](https://discordapp.com/){:target="_blank"} and [discord.js](https://discord.js.org/#/){:target="_blank"}.
-   Need help with UI testing and test automation? [Puppeteer](https://github.com/GoogleChrome/puppeteer){:target="_blank"} might just be right.
-   Consider [Axios](https://github.com/axios/axios){:target="_blank"} for your Node.js requests. (Axios is my go-to solution in Node and React projects, they have 58k stars on GitHub right now.)
-   Run a pilot with [Google's Cloud Platform](https://cloud.google.com/){:target="_blank"}.
-   Try the [[<https://dev.botframework.com/>][Microsoft bot framework for your enterprise chat bots.
-   Check out [Firebase](https://firebase.google.com/){:target="_blank"}.
-   Definitely add [JWT](https://jwt.io/){:target="_blank"} to your security pack.
-   Check out [GraphQL](https://graphql.org/learn/){:target="_blank"} for API data.
-   See if you can utilize [pm2](http://pm2.keymetrics.io/){:target="_blank"} in production operations.
-   Need a solution to manage file uploads? Try [Multer](https://github.com/expressjs/multer){:target="_blank"}.

*New tech to explore.*

-   Get started with [Angular 7](https://angular.io/guide/quickstart){:target="_blank"} and Angular 8.
-   Building an enterprise grade app? Consider [Next.js](https://nextjs.org/){:target="_blank"} and [Gatsby](https://www.gatsbyjs.org/){:target="_blank"} with React or [Nuxt.js](https://nuxtjs.org/){:target="_blank"} with Vue.
-   Experiment with [Apollo and GraphQL](https://www.apollographql.com/){:target="_blank"}.
-   Start a [Dialogflow](https://dialogflow.com/){:target="_blank"} pilot.
-   Check if [TypeORM](https://typeorm.io/#/){:target="_blank"} is the ORM you've been looking for.
-   Try [nodejs-stream](https://nodejs.org/api/stream.html){:target="_blank"} for streaming data.
-   No preferred Node.js testing framework yet? Try [Jest](https://jestjs.io/){:target="_blank"}!

