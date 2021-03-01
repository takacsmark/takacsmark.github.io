---
layout: post
title: "What the world built with programming languages in 2020"
description: "We are all triyng to stay relevant, we learn, experiement and keep building to keep up with tech trends. In this article we explore what the projects of the world built with the top programming languages."
date: 2021-01-09 07:19:00 +0100
thumbnail: "/assets/images/post-thumbs/what-the-world-built-programming-languages-2020.png"
category: Tech trends
---

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<!-- prettier-ignore -->
 * TOC
<!-- prettier-ignore -->
{:toc}

I see how we all are trying to stay informed and keep up with tech trends. It's vital for both newcomers and old hands to understand where the industry is heading and shape our skills and profiles to stay relevant.

When I say relevant, I mean two things; on one hand we seek access to good projects to be able to provide for our families, on the other hand we all try to build something meaningful and new tech usually enables new solutions.

Programming langugages are at the core of what we are doing in tech. Beginners pick one or two languages to strat with, veterans keep learning and experimenting as things evolve.

We apply tech in various different fields and industries today, we have strong focus on data and machine learning, web and mobile apps are born every day to solve old problems in new creative ways, we have DevOps to make the whole process sensible, we see the rise of streaming and AR/VR and I'm sure we could go on and on with this list.

As these applications evolve a few tech components emerge as the potential winners in ther respective fields. As we approach these technologies we usually find a significant programming language in the background.

**Looking at programming language trends is valuable for two reasons; one is that we get a good feeling of what languages people are using in real-life projects out there, second is that we may get an idea of the tech most used in specific fields.**

This may help us to decide what language or library to learn next, and see what alternatives other people are using in situations similar to ours.

## Most used programming languages in the world

A few years ago I saw a graph that was very similar to the one below. It showed the growth trends of the top programming languages on Stackoverflow. When I saw that graph I became truly excited because I found a way to get a sneak peek at how real people and projects are using today's tech.

The figures shows how many Stackoverflow questions were tagged with a given programming language's tag as the percentage of total questions every month. The graph starts on the launch day of Stackoverflow in 2008.

{% include plots/2021-01-09/questions-per-month-top-programming-languages.html %}

You may remember heated articles from around 2018 when Python overtook Javascript as the leading programming language on Stackoverflow.

I would not directly compare these languages though and would not really think in terms of overtaking.

I rather think of the lines as indicators; a strong upward slope (e.g. `Python`) is a clear sign of something new and interesting happening, and an obvious downward slope (e.g. `PHP`) is a clear sign of a decline in new applications.

Javascript's line looks fairly stable, but we all know that there is a lot going on and it's one of the most thrilling languages to be involved with.

Python's line means that we found a killer application, which is data science and machine learning as we'll see later.

Let me show you more than six languages though, so let's get the list of the top programming languages of all time from Stackoverflow.

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>count</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>javascript</td>
<td>2,130,783</td>
</tr>

<tr>
<td>2</td>
<td>java</td>
<td>1,735,439</td>
</tr>

<tr>
<td>3</td>
<td>python</td>
<td>1,597,896</td>
</tr>

<tr>
<td>4</td>
<td>c#</td>
<td>1,450,818</td>
</tr>

<tr>
<td>5</td>
<td>php</td>
<td>1,381,623</td>
</tr>

<tr>
<td>6</td>
<td>html</td>
<td>1,038,358</td>
</tr>

<tr>
<td>7</td>
<td>c++</td>
<td>702,947</td>
</tr>

<tr>
<td>8</td>
<td>css</td>
<td>694,921</td>
</tr>

<tr>
<td>9</td>
<td>sql</td>
<td>570,524</td>
</tr>

<tr>
<td>10</td>
<td>r</td>
<td>377,700</td>
</tr>

<tr>
<td>11</td>
<td>c</td>
<td>345,968</td>
</tr>

<tr>
<td>12</td>
<td>swift</td>
<td>283,856</td>
</tr>

<tr>
<td>13</td>
<td>python-3.x</td>
<td>262,833</td>
</tr>

<tr>
<td>14</td>
<td>ruby</td>
<td>216,766</td>
</tr>

<tr>
<td>15</td>
<td>typescript</td>
<td>133,885</td>
</tr>

<tr>
<td>16</td>
<td>bash</td>
<td>130,986</td>
</tr>

<tr>
<td>17</td>
<td>scala</td>
<td>101,729</td>
</tr>

<tr>
<td>18</td>
<td>perl</td>
<td>65,965</td>
</tr>

<tr>
<td>19</td>
<td>go</td>
<td>50,358</td>
</tr>

<tr>
<td>20</td>
<td>kotlin</td>
<td>49,720</td>
</tr>

<tr>
<td>21</td>
<td>delphi</td>
<td>47,010</td>
</tr>

<tr>
<td>22</td>
<td>haskell</td>
<td>45,393</td>
</tr>

<tr>
<td>23</td>
<td>dart</td>
<td>41,892</td>
</tr>
</tbody>
</table>
The numbers show the total number of questions carrying the given programming language's tag since 2008. I was curious to see what's happening to `Dart` and I stopped there, 23 is a good number to move on and I will look at `Lisp` some other time.

Let's draw the graph of the rest of the programming languages on the list.

{% include plots/2021-01-09/questions-per-month-tier2-programming-languages.html %}

`Dart` immediately pops out, it's the language of [Flutter](https://flutter.dev){:target="\_blank"}, Google's mobile and web app building framework, a contender of React Native. We found a gem you may want to explore later.

I'm a bit baffled by `C`, the line looks like Google trends of seasonal demand, as if people would go to Stackoverflow and ask a lot of `C` questions every year during the holiday season.

{% include plots/2021-01-09/questions-per-month-tier3-programming-languages.html %}

In the third group `R` and `Typescript` are the languages to watch. I expected to see `R` like this, but it surpassing `SQL` surprised me.

`SQL`, too, may be noteworthy, because the line is stable, for structured data `SQL` remains strong in a data driven world.

Ruby on Rails used to be a highly preferred web application framework some 6-7 years ago, but many things happened, Node came, serverless emerged, Python stayed strong and Ruby seems to slowly decrease.

## Programming language trends in 2020

Please find below the overview of programming languages in 2020, the graph shows the number of new questions as the percentage of all questions created on Stackoverflow in 2020.

{% include plots/2021-01-09/2020-share-total.html %}

The data I used to look into the 2020 trends is from the Stackoverflow dump published on December 6, 2020. In order to look at an entire year, I defined 2020 as the period between December 6, 2019 and December 6, 2020 and defined the year 2019 as the period between December 6, 2018 and December 6 2019.

I think it would be wrong to argue that we build most projects with `Python` and `Javascript`, I know this is not the case.

I'd rather interpret the figure like this: the world needs more of what we build with `Python` and `Javascript` right now.

Which means that the main focus of most projects is data and apps (web and mobile). We might get a better view based on the growth figures from 2019 to 2020.

{% include plots/2021-01-09/pl-yoy-growth.html %}

One questions remains: What kind of problems are people solving with these programming languages? Let's find out in the next chapter!

## What we built in 2020

I tried to depict the details on sunburst diagrams and I found that the largest 2-3 segments under each programming language will give a good idea of the domains where most projects use them.

Feel free to hover over the narrow parts though, maybe you'll find something exciting.

{% include plots/2021-01-09/pl-2020-sb.html %}

Seeing data crunching and machine learning related tech under `Python` was expected. On the other hand, I found it interesting to see `Django` with so much weight under `Python`.

We can see so much debate online whether using `Javascript` on the server side is a good solution, the tags show that `node.js` is a strong `Javascript` application, which is in line with our real-life experience of working with more and more Node apps at work.

Please let's not compare React and Angular based on this graph, because Angular is Typescript based, so most Angular questions are not marked with `Javascript` (although some are, as you can see), hence this comparison would be misleading.

On the `Java` side you'll find that the Android mobile development use case gives the largest portion, and `Spring` is the other big item.

Good old `PHP` is still in the game with Laravel and Wordpress, these are very powerful options to start an online venture quickly and cost-effectively.

{% include plots/2021-01-09/pl-2020-sb2.html %}

This slide seems obvious at first, but looking at the details, we might find some treasure.

One would be that `JQuery` is still a thing and investing some time into learning `JQuery` might be useful.

Flexbox might be another point worth noting. I ignored it for many years, but it's incorporated in the latest facelift of my blog and serves me well.

{% include plots/2021-01-09/pl-2020-sb3.html %}

The last graph is clear: we still don't understand pointers. You might need `C`, because embedded programming is a thing now. `Python` is, of course strongly used in the domain, but let's remember that `Python` (besides so many more things) was also written in `C`. So, learning `C` is eternal.

I think there is one pretty cool tech hidden in this figure that I'd recommend. It's [Firebase](https://firebase.google.com/){:target="\_blank"}; you can find it under `Dart`. Firebase is a cloud service by Google, that gives you all the necessary services to start your app with minimum hassle.

They give you just the right basis; a document database, static file hosting, Javascript and Mobile SDK, cloud functions, authentication (!) and ML (and analytics and stuff). I use Firebase to display post view counts on my blog, I think it's ideal to bring your online app ideas to life.

I also included `Bash` on this list as a reminder that it's a skill we all have to maintain from time to time.

## Wrap up

I hope you enjoyed the post and graphs. If I had to give you three takeaways, I'd give you these:

- Data science and machine learning are really booming, explore `Python` and `R` and don't forget about `SQL`.
- Build your applications with `Typescript` for web, mobile and the server. Use `Python` or `Spring boot` as a server side alternative and experiment with `Dart` for web and mobile.
- Check out Firebase.
