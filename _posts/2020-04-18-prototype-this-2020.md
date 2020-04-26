---
layout: post
title: "What to Prototype in 2020 to be on Top of Your Game?"
description: "Get learning and prototyping ideas with this FREE Ebook based on Stackoverflow data in the field of Web & Mobile app building, Machine Learning and DevOps."
date: 2020-04-18 07:19:00 +0100
author: Márk Takács
thumbnail: "/assets/images/post-thumbs/prototype-this-2020.png"
categories: technology, prototyping, trends
---
 * TOC
{:toc}

<a data-dpd-type="widget" data-text="DOWNLOAD PDF" data-variant="portrait" data-description="" data-bg-color="469d3d" data-bg-color-hover="5cc052" data-text-color="ffffff" data-background-color="ffffff" data-border-color="c7c7c7" data-title-color="333333" data-price-color="469d3d" data-desc-color="4c4c4c" data-lightbox="1" href="https://takacsmark-com.dpdcart.com/cart/add?product_id=194509&amp;method_id=210996">0,What to Prototype in 2020 and be on Top of Your Game?</a><script src="https://takacsmark-com.dpdcart.com/dpd.js"></script>


## Introduction

**I make this report for tech professionals, enthusiasts, students and anyone who wants to see what technologies real-life projects are using.** *My goal is to help you (and me) to find those new tech components, libraries, frameworks that are worth your time reading, experimenting and prototyping.*

**I use Stackoverflow data to find out what's trending and set up a list of what I want to prototype and learn during the year.** *I'm sharing my findings with you now, maybe you spot a new skill to build, or create a prototype that will change your life.*

**The report is based on Stackoverflow data, so you can assume it's pretty close to reality. It tells you about the technologies that real-life teams are discussing in Stackoverflow questions and answers.**

The backing data is a dump of all Stackoverflow questions and answers. Stackoverflow releases their data every quarter and it's available in the internet archives at [https://archive.org/download/stackexchange](https://archive.org/download/stackexchange){:target="_blank"}.

I download the Stackoverflow files every year and add them to a database on an external SSD that I labeled DWH. Having multiple archives at hand lets me create trends that would not be possible with one dump only. **Everything you read here is the result of tedious data crunching with Emacs Org Mode, Python and Postgres.**

*Every Stackoverflow question has one or more tags assigned to them. I start from the list of top tags on Stackoverflow and dig deeper from there. You can see the top tags in the table below.*

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th># of questions</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>javascript</td>
<td>1,909,662</td>
</tr>

<tr>
<td>2</td>
<td>java</td>
<td>1,613,332</td>
</tr>

<tr>
<td>3</td>
<td>c#</td>
<td>1,363,768</td>
</tr>

<tr>
<td>4</td>
<td>php</td>
<td>1,320,075</td>
</tr>

<tr>
<td>5</td>
<td>python</td>
<td>1,297,831</td>
</tr>

<tr>
<td>6</td>
<td>android</td>
<td>1,237,204</td>
</tr>

<tr>
<td>7</td>
<td>jquery</td>
<td>971,432</td>
</tr>

<tr>
<td>8</td>
<td>html</td>
<td>863,524</td>
</tr>

<tr>
<td>9</td>
<td>c++</td>
<td>644,544</td>
</tr>

<tr>
<td>10</td>
<td>ios</td>
<td>615,326</td>
</tr>
</tbody>
</table>
![img]({{ site.url }}/assets/images/in-content/questions-per-month-top-programming-languages.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

You can see the number of questions with the top tags since 2008, when Stackoverflow started in the table above. The graph shows the number of monthly questions created with the top tags as the percentage of all questions.

I take the questions marked with broader tags like **Javascript** or **Docker** and see what other tags are present in those questions next to the main tag; like **React** next to **Javascript** or **Kubernetes** next to **Docker**.

**The chapters of this report are structured around those significant tags that indicate a domain and we explore tags within these domains and their growth trends.** I followed the data to create the table of contents:

1.  We start with **Python** and its two applications that generate most buzz; **machine learning** and **data science**. The most inspiring **IoT** and **Embedded** projects are related to AI, so we inspect them here.
2.  We look at application building; **web applications**, **mobile development**, **enterprise apps** looking at tags like **Javascript**, **Java**, **web-applications**, **mobile**, **android** and **ios**. We include some **Python** web tech where applicable.
3.  We go beyond code and dive into **devops** and **docker** and two more work related topics; **architecture** and **enterprise**.

These are the areas that I found most interesting based on the data. If something is missing, it does not mean that it's not important, it just means that I could not read the data in a presentable way. **Let's dive in!**


## Python, machine learning and data science

![img]({{ site.url }}/assets/images/in-content/tags-next-to-python.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

**Python has become the fastest growing tag on Stackoverflow and took over the leading position from Javascript**. Python's steep incline started around 2012 as you can see on the graph in the introduction.

**The heat map here shows the most used tags next to the python tag in Stackoverflow questions**. 

You meet many **data science** and **machine learning** related tags like **pandas**, **numpy**, **matplotlib** and **tensorflow** here. 

Tags like **regex**, **django** and **flask** prove that the scripting and web application side of Python is still strong.

**In order to have a good idea of fastest growing tags, we take a look at Python questions and see which additional tags got the most growth in question views last year.** *This growth is depicted in the tables below.*

I split this table into 3 parts. You find this categorisation in all chapters, so let me explain quickly how this works.

-   **Established tags** are the tags that have a high number of questions, they have been around for a while and many projects use them.
-   **Trending tags** are the tags that have less questions, but they also have a solid track record on Stackoverflow.
-   **Emerging tags** are the ones that have a few questions, you find newcomers and hidden gems in this category.

Based on the tables you probably agree that **we can attribute most of Python's growth in the past years to data science and machine learning applications**.

**Established tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>keras</td>
<td>138.83</td>
</tr>

<tr>
<td>2</td>
<td>tensorflow</td>
<td>75.46</td>
</tr>

<tr>
<td>3</td>
<td>dataframe</td>
<td>70.66</td>
</tr>

<tr>
<td>4</td>
<td>pandas</td>
<td>67.79</td>
</tr>

<tr>
<td>5</td>
<td>machine-learning</td>
<td>66.29</td>
</tr>

<tr>
<td>6</td>
<td>scikit-learn</td>
<td>62.50</td>
</tr>

<tr>
<td>7</td>
<td>python-3.x</td>
<td>54.11</td>
</tr>

<tr>
<td>8</td>
<td>opencv</td>
<td>53.01</td>
</tr>

<tr>
<td>9</td>
<td>selenium</td>
<td>47.88</td>
</tr>

<tr>
<td>10</td>
<td>flask</td>
<td>46.54</td>
</tr>
</tbody>
</table>
**Trending tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>pyqt5</td>
<td>96.05</td>
</tr>

<tr>
<td>2</td>
<td>deep-learning</td>
<td>92.38</td>
</tr>

<tr>
<td>3</td>
<td>jupyter-notebook</td>
<td>91.67</td>
</tr>

<tr>
<td>4</td>
<td>pyspark</td>
<td>80.89</td>
</tr>

<tr>
<td>5</td>
<td>anaconda</td>
<td>73.92</td>
</tr>

<tr>
<td>6</td>
<td>apache-spark</td>
<td>68.40</td>
</tr>

<tr>
<td>7</td>
<td>amazon-web-services</td>
<td>62.04</td>
</tr>

<tr>
<td>8</td>
<td>django-rest-framework</td>
<td>53.98</td>
</tr>

<tr>
<td>9</td>
<td>pycharm</td>
<td>50.15</td>
</tr>

<tr>
<td>10</td>
<td>python-requests</td>
<td>49.73</td>
</tr>
</tbody>
</table>
**Emerging tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>azure-databricks</td>
<td>47976.09</td>
</tr>

<tr>
<td>2</td>
<td>odoo-12</td>
<td>26496.88</td>
</tr>

<tr>
<td>3</td>
<td>webdriverwait</td>
<td>1175.36</td>
</tr>

<tr>
<td>4</td>
<td>tensorflow-lite</td>
<td>710.58</td>
</tr>

<tr>
<td>5</td>
<td>ubuntu-18.04</td>
<td>612.13</td>
</tr>

<tr>
<td>6</td>
<td>pynput</td>
<td>605.95</td>
</tr>

<tr>
<td>7</td>
<td>python-3.7</td>
<td>576.63</td>
</tr>

<tr>
<td>8</td>
<td>google-cloud-functions</td>
<td>524.90</td>
</tr>

<tr>
<td>9</td>
<td>yolo</td>
<td>518.16</td>
</tr>

<tr>
<td>10</td>
<td>google-cloud-firestore</td>
<td>509.84</td>
</tr>
</tbody>
</table>
*Let's talk about the tags in the table a little bit.* **The tables are the best place to find new tech to learn or prototype.**

**The top established tags** are usually the ones that are used by most projects to accomplish core tasks. **[Keras](https://keras.io/){:target="_blank"}**, **[tensorflow](https://www.tensorflow.org/){:target="_blank"}** and **[scikit-learn](https://scikit-learn.org/stable/){:target="_blank"}** are mainstream machine learning tech, all great to start learning.

**[Pandas](https://pandas.pydata.org/){:target="_blank"}** and the **dataframe** are fundamental data manipulation tools, this report is also made with them.

**Anaconda** and **Jupyter notebook** are in the growth table. **You can use [Anaconda](https://www.anaconda.com/){:target="_blank"} to conduct professional grade data science and ML work, at the same time it's a great spot to get your hands dirty, it contains all the tools you need to get started.**

**Jupyter notebooks** are notebooks containing your Python code, execution results and Markdown documentation. It's a great way to work, present, share and collaborate. *Jupyter notebooks comes with Anaconda.*

**Thanks to Google we have a cloud version of the notebook available for free at <https://colab.research.google.com>.** *If you build your first Python data crunching or machine learning prototype, start here!*

**Computer vision** and **natural language processing** are the fields of machine learning you can meet every day (just think about phone apps with face recognition or voice assistants). *So it's not a surprise to see **opencv** on the established tags list.* 

![img]({{ site.url }}/assets/images/in-content/tags-next-to-machine-learning.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

![img]({{ site.url }}/assets/images/in-content/tags-next-to-data-science.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

Let's look at the top tags next to **machine learning** in the first graph and **data science** in the second graph and discover more options for prototyping.

**As you can see these domains are dominated by Python related libraries and frameworks,** actually both lists start with **python** itself. 

Let's note the other fast growing language in the field; **R**.

We also find tags here that represent broader fields like **deep-learning**, **neural-networks**, **computer vision** and **nlp**.

**Neural networks** and **deep neural networks** are the state of the art machine learning methods and these charts also confirm that **computer vision** and **nlp** are the common applications.

The next table contains the **detailed growth segments of machine learning**.

**Established tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>python-3.x</td>
<td>128.14</td>
</tr>

<tr>
<td>2</td>
<td>keras</td>
<td>127.49</td>
</tr>

<tr>
<td>3</td>
<td>data-science</td>
<td>90.27</td>
</tr>

<tr>
<td>4</td>
<td>conv-neural-network</td>
<td>83.71</td>
</tr>

<tr>
<td>5</td>
<td>pandas</td>
<td>76.91</td>
</tr>

<tr>
<td>6</td>
<td>deep-learning</td>
<td>68.64</td>
</tr>

<tr>
<td>7</td>
<td>python</td>
<td>66.29</td>
</tr>

<tr>
<td>8</td>
<td>tensorflow</td>
<td>63.80</td>
</tr>

<tr>
<td>9</td>
<td>scikit-learn</td>
<td>61.53</td>
</tr>

<tr>
<td>10</td>
<td>numpy</td>
<td>52.03</td>
</tr>
</tbody>
</table>
**Trending tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>pytorch</td>
<td>372.07</td>
</tr>

<tr>
<td>2</td>
<td>lstm</td>
<td>85.76</td>
</tr>

<tr>
<td>3</td>
<td>xgboost</td>
<td>75.17</td>
</tr>

<tr>
<td>4</td>
<td>recurrent-neural-network</td>
<td>72.76</td>
</tr>

<tr>
<td>5</td>
<td>cross-validation</td>
<td>65.36</td>
</tr>

<tr>
<td>6</td>
<td>logistic-regression</td>
<td>58.00</td>
</tr>

<tr>
<td>7</td>
<td>linear-regression</td>
<td>50.04</td>
</tr>

<tr>
<td>8</td>
<td>time-series</td>
<td>48.28</td>
</tr>

<tr>
<td>9</td>
<td>text-classification</td>
<td>47.46</td>
</tr>

<tr>
<td>10</td>
<td>apache-spark</td>
<td>47.20</td>
</tr>
</tbody>
</table>
**Emerging tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>tensorflow.js</td>
<td>526.04</td>
</tr>

<tr>
<td>2</td>
<td>ml.net</td>
<td>449.21</td>
</tr>

<tr>
<td>3</td>
<td>google-colaboratory</td>
<td>361.87</td>
</tr>

<tr>
<td>4</td>
<td>amazon-sagemaker</td>
<td>334.10</td>
</tr>

<tr>
<td>5</td>
<td>yolo</td>
<td>314.60</td>
</tr>

<tr>
<td>6</td>
<td>spacy</td>
<td>245.45</td>
</tr>

<tr>
<td>7</td>
<td>loss-function</td>
<td>243.18</td>
</tr>

<tr>
<td>8</td>
<td>lightgbm</td>
<td>194.38</td>
</tr>

<tr>
<td>9</td>
<td>convolutional-neural-network</td>
<td>177.01</td>
</tr>

<tr>
<td>10</td>
<td>multiclass-classification</td>
<td>159.22</td>
</tr>
</tbody>
</table>
**An important change from past years is that cloud platforms are climbing up the growth charts.** 

**[Amazon Sagemaker](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Faws.amazon.com%2Fsagemaker%2F){:target="_blank"} and Google Colaboratory** are emerging tags and we have [Azure Machine Learning Studio](https://studio.azureml.net/){:target="_blank"} and [IBM Watson Studio](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Fwww.ibm.com%2Fhu-en%2Fmarketplace%2Fwatson-studio){:target="_blank"} to choose from. *AI is becoming industrialized, it's important that you build skills on at least one of these platforms.*

**Additional prominent trend is to bring machine learning to mobile and edge devices.** The top growing machine learning framework in the trending tags, **[Pytorch](https://pytorch.org/){:target="_blank"}**, has capabilities to run ML on edge devices including iOS and Android. 

**Google's popular Tensorflow machine learning project is moving in the same direction with [Tensorflow lite](https://www.tensorflow.org/lite){:target="_blank"}.** Tensorflow also provides [Tensorflow.js](https://www.tensorflow.org/js){:target="_blank"} (the top emerging tag in the machine learning table) **a Javascript library to use ML in the browser and Node.js**.

**Apache spark appears both in the Python and machine learning growth tables**. Apache Spark and **pyspark** (Python API to support Apache Spark) let you analyze large volumes of data on clusters. **Microsoft's Apache Spark based analytics service, [Azure Databricks](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Fazure.microsoft.com%2Fen-us%2Fservices%2Fdatabricks%2F){:target="_blank"}, is the top item on the Python emerging tags list.**

**Real time object detection and industrial grade nlp are represented by [Yolo](https://pjreddie.com/darknet/yolo/){:target="_blank"} and [Spacy](https://spacy.io/){:target="_blank"}.** *I made a quick prototype with Yolo and got a cool image with boxes around every object. It's too personal to share, though; my wife is standing there between a potted plant and a backpack smiling frantically surrounded by box that says: "person".*

**Let's look at some cool applications of machine learning beyond image processing and nlp!** You find some of these tags in the table above, while some other tags come from additional exploratory queries that I run.

![img]({{ site.url }}/assets/images/in-content/openaigym.png){: .img-fluid style="max-width: 400px;"}

**The [Gym toolkit](https://gym.openai.com/){:target="_blank"} is an open-source project to build reinforcement learning projects.** You can use it to teach your machine to walk or play games. 

**Reinforcement learning is the kind of machine learning where your software agent is learning from its own experience.** 

It's very similar to the way we learn from our own mistakes. This is the kind of AI I find most exciting.

**Gym makes an Atari game environment available to train on games, and 2D and 3D robots are also available beyond algorithmic scenarios.**

 Photo credit <https://gym.openai.com/>.

Walking and playing games are human qualities, so is conversation. **Conversational AI is an emerging platform in terms of user experience, as well as a business opportunity**. 

Context is the weak point of present chat bots and virtual assistants. **[Rasa, the open source contextual assistant](https://rasa.com/){:target="_blank"} has 2M+ downloads is available for free or with enterprise support.** Sounds like a chance for clever business prototype.

This year is buzzing with AI enabled IoT and embedded projects.

**Nvidia's Jetson product line offers development kits and embedded products to prototype and run neural networks.** 

You can build robotics applications for manufacturing, delivery, smart cities and retail with Nvidia's developer kits. 

**For more information visit the [Nvidia Jetson site](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Fwww.nvidia.com%2Fen-us%2Fautonomous-machines%2Fjetson-store%2F){:target="_blank"}.**

 Photo credit: <https://www.nvidia.com>

![img]({{ site.url }}/assets/images/in-content/nvidia-jetson-nano-dev-kit-2c50-D.png){: .img-fluid style="max-width: 400px;"}

![img]({{ site.url }}/assets/images/in-content/crazyflie.png){: .img-fluid style="max-width: 400px;"}

**One more cool example is the [Crazyflie open source flying develeopment platform by Bitcraze](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Fstore.bitcraze.io%2Fproducts%2Fcrazyflie-2-1){:target="_blank"}.**

**The Craziflie is a tiny quadcopter drone** that you can extend. **It has advanced positioning extensions enabling autonomous flights and swarms.** 

 Photo credit: <https://www.bitcraze.io/>


## Applications created for customers on the web, mobile and the enterprise

![img]({{ site.url }}/assets/images/in-content/tags-next-to-javascript.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

Javascript has been the top tag on Stackoverflow for many years (before Python took the world) and **it's still the beloved magical beast when we create stuff that will be touched or clicked by users.**

*The heat map shows the most frequent tags next to Javascript on Stackoverflow questions.*

Javascript is everywhere; front-end, back-end, database, IoT and embedded. It also appears in machine learning as you saw in the previous chapter.

**Using Javascript goes way beyond using just the language itself.** The ecosystem is built up with various frameworks, libraries and asynchronous programming wizardry.

**Looking at the heat map you might think that we are back in 2005 with JQuery, HTML, CSS and PHP** on top. *Well, HTML and CSS are still evolving, although they are hidden behind flashy frameworks. (I know, React is a library&#x2026;)*

*Good old JQuery and PHP are slowly expiring, they still run most of the web, but new applications are built with new tech.*

**Let's see the tables that show us the top growing tags in the Javascript universe.**

**Established tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>reactjs</td>
<td>77.96</td>
</tr>

<tr>
<td>2</td>
<td>typescript</td>
<td>70.91</td>
</tr>

<tr>
<td>3</td>
<td>angular</td>
<td>70.10</td>
</tr>

<tr>
<td>4</td>
<td>node.js</td>
<td>34.21</td>
</tr>

<tr>
<td>5</td>
<td>arrays</td>
<td>27.00</td>
</tr>

<tr>
<td>6</td>
<td>regex</td>
<td>21.14</td>
</tr>

<tr>
<td>7</td>
<td>google-chrome</td>
<td>20.98</td>
</tr>

<tr>
<td>8</td>
<td>javascript</td>
<td>20.17</td>
</tr>

<tr>
<td>9</td>
<td>json</td>
<td>19.99</td>
</tr>

<tr>
<td>10</td>
<td>css</td>
<td>19.24</td>
</tr>
</tbody>
</table>
**Trending tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>vue.js</td>
<td>119.97</td>
</tr>

<tr>
<td>2</td>
<td>react-native</td>
<td>91.79</td>
</tr>

<tr>
<td>3</td>
<td>firebase</td>
<td>68.75</td>
</tr>

<tr>
<td>4</td>
<td>ecmascript-6</td>
<td>57.72</td>
</tr>

<tr>
<td>5</td>
<td>webpack</td>
<td>53.89</td>
</tr>

<tr>
<td>6</td>
<td>promise</td>
<td>40.09</td>
</tr>

<tr>
<td>7</td>
<td>express</td>
<td>32.99</td>
</tr>

<tr>
<td>8</td>
<td>python</td>
<td>30.36</td>
</tr>

<tr>
<td>9</td>
<td>mongodb</td>
<td>27.97</td>
</tr>

<tr>
<td>10</td>
<td>object</td>
<td>24.72</td>
</tr>
</tbody>
</table>
**Emerging tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>react-hooks</td>
<td>9901.93</td>
</tr>

<tr>
<td>2</td>
<td>angular7</td>
<td>7191.05</td>
</tr>

<tr>
<td>3</td>
<td>vue-cli-3</td>
<td>2887.24</td>
</tr>

<tr>
<td>4</td>
<td>nuxt</td>
<td>2362.68</td>
</tr>

<tr>
<td>5</td>
<td>nestjs</td>
<td>1529.09</td>
</tr>

<tr>
<td>6</td>
<td>lit-element</td>
<td>1404.53</td>
</tr>

<tr>
<td>7</td>
<td>tabulator</td>
<td>1249.09</td>
</tr>

<tr>
<td>8</td>
<td>cypress</td>
<td>746.32</td>
</tr>

<tr>
<td>9</td>
<td>svelte</td>
<td>729.45</td>
</tr>

<tr>
<td>10</td>
<td>formik</td>
<td>704.12</td>
</tr>
</tbody>
</table>
**The established tags start with the \*front-end framework battle that used to be loud a few years back**, with heated articles and videos about **React vs Angular** and later also **Vue**.

*Today the picture seems a bit clearer, Angular is higher on the heat map, which means it has more questions than React, but React is growing a bit faster. We have to come back to the figures next year to see where this trend is going.*

**In real life these two frameworks (except for React, which is a library, of course) seem to serve different type of businesses and projects.**

**The enterprise clients I work with use Angular exclusively**. My understanding is that they do so because Angular is a framework, meaning there is a built in standard way to accomplish core tasks. *This helps a lot with quality and skill building in large organizations.*

**React is a library; you have several options to extend it with further libraries to build up your own stack.** There are however mature and winning combinations and there are some **React based frameworks** on the rise that provide standardized solutions. 

**[Gatsby](https://www.gatsbyjs.org/){:target="_blank"} and [Next.js](https://nextjs.org/){:target="_blank"} are such frameworks for React.** They don't appear in the table, but a similar solution for Vue, [Nuxt.js](https://nuxtjs.org/ ){:target="_blank"}, is amongst emerging tags.

![img]({{ site.url }}/assets/images/in-content/questions-per-month-top-spa.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

![img]({{ site.url }}/assets/images/in-content/questions-per-month-top-js-framework.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

The first graph above visualizes the number of questions created per month as the percentage of total questions for the **big Javascript front-end tags**.

**You see that Angular and React are far ahead with Vue in the third position.** **Adding [Svelte](https://svelte.dev/){:target="_blank"} to the picture has no strong visual value**, but it's a fast growing newcomer (it's on the emerging list on the previous page).

*Svelte is inspired by React and Angular and is built on the experience of the big frameworks.* It feels a little like a newer generation keeping what's working well and fixing what's not so good. I built a chat app prototype with Svelte and it was a pleasing experience, you might want to give it a try.

**The second graph shows Next.js and Nuxt.js front-end frameworks mentioned on the last page.**

*The third tag on the graph, Nest.js, is different; it's a server side Node.js framework.* (I put these on one graph because the scale of the numbers is similar, so you can see the rapidly growing trend.)

**[Nest.js](https://nestjs.com/){:target="_blank"} is built to give you production grade Javascript architecture on the backend.** It has controllers, services, middleware, database, authentication, GraphQL, Websockets and more. **Nest has been added to [JHipster,](https://www.jhipster.tech/){:target="_blank"} my beloved application accelerator right now, as a backend solution.** *JHipster uses Spring Boot as the backend, having Nest as an alternative to Spring Boot shows its potential in enterprise implementations.*

**Nest can run two Node.js server solutions under the hood; Express or [Fastify](https://www.fastify.io/){:target="_blank"}.** Express is the Node.js classic, while Fastify, as the name suggests, is tweaked towards performance. *Express has not received new commits in the past 9 months on GitHub, which makes projects like Fastify highly welcome.*  

Modern frameworks and architecture styles are a lot of fun, but the complexity and infrastructure need is often unreasonable; you might want something simpler for your next web or mobile app MVP.

**Here comes [Google's Firebase](https://firebase.google.com/){:target="_blank"}, a development platform that has the right tools and infrastructure components you need to launch your web or mobile app quickly.** (Firebase is on the trending tags list on the previous page and appears in several tables in this report.)

**With Firebase you get the Cloud Firestore, a NoSQL database that can notify clients about data changes in real time.** Cloud Functions in Javascript, static hosting, storage for images and videos, authentication and a machine learning kit. *You don't need to manage infrastructure or servers.*

Firebase offers just the right tools, plus features for A/B testing, predictions, messaging, quality assurance and analytics. **I used Firebase in a recent prototype and loved it.**

**Data editing and visualization has reached Javascript, too**. **[Tabulator](http://tabulator.info/){:target="_blank"}**, a table editing Javascript library pops up on the emerging tags list. 

One of Python's essential plotting libraries, **[Plotly, now provides a Javascript library](https://plot.ly/javascript/){:target="_blank"} for interactive data visualization on the web**. It also works with React.

**[Mpld3](https://mpld3.github.io/){:target="_blank"} brings together the power of Matplotlib and d3js to create interactive data visualizations from Python to be presented to your users with Javascript.** It's on my backlog to check how it fits my blog.

To give you another visualization option, you might consider **[Apex charts](https://apexcharts.com/){:target="_blank"}, compatible with all major Javascript frameworks, with stunning looks and 8.5k GitHub stars**.

![img]({{ site.url }}/assets/images/in-content/tags-next-to-java.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

**Java is an amazing creature.** *I learned to appreciate it with time.*

**It runs most businesses across the globe and it does its job really well.** *No wonder large corporations put their trust in Java and are slow to move to hip tech like Node.js.*

Java does not appear in trendy articles often, there is no hype, but it's catching up with features for *functional and reactive programming and machine learning*.

**The main Java use case is enterprise business support systems development and Android development.**

*Java has the most sophisticated arsenal to support the enterprise, but this machinery comes from the pre-cloud era and it makes Java look a little dated compared to modern options especially when it comes to app startup times, memory consumption or container deployment size with fat jars.*

**The heat map shows the most used tags next to Java on Stackoverflow.**

**Do you mind if I write about the [Spring framework](https://spring.io/){:target="_blank"} and Spring Boot right away?** *Spring is the top server side tech on the heat map and Spring boot is the fastest growing Java related established tech in the table below.*

Spring is the enterprise tech lead's dream come true. It's computerized Swiss army knife that has all the best practices included that you need to build a serious, secure and performant business application.

*You don't need to reinvent solutions for dodgy functional areas like security, REST, database connections, MVC or microservices; Spring got you covered.*

The amount of experience built into Spring is astonishing. **If this does not sound intimidating, you can experiment with [JHipster](https://www.jhipster.tech/){:target="_blank"}, a project that generates Spring applications plus Angular/React front-ends as a monolith or a microservices architecture ready to run in production.**

**Established tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>spring-boot</td>
<td>68.09</td>
</tr>

<tr>
<td>2</td>
<td>javafx</td>
<td>31.13</td>
</tr>

<tr>
<td>3</td>
<td>spring</td>
<td>25.59</td>
</tr>

<tr>
<td>4</td>
<td>maven</td>
<td>24.97</td>
</tr>

<tr>
<td>5</td>
<td>json</td>
<td>23.22</td>
</tr>

<tr>
<td>6</td>
<td>spring-mvc</td>
<td>21.36</td>
</tr>

<tr>
<td>7</td>
<td>mysql</td>
<td>20.42</td>
</tr>

<tr>
<td>8</td>
<td>jpa</td>
<td>19.79</td>
</tr>

<tr>
<td>9</td>
<td>hibernate</td>
<td>17.26</td>
</tr>

<tr>
<td>10</td>
<td>android</td>
<td>17.09</td>
</tr>
</tbody>
</table>
**Trending tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>java-8</td>
<td>38.54</td>
</tr>

<tr>
<td>2</td>
<td>intellij-idea</td>
<td>32.57</td>
</tr>

<tr>
<td>3</td>
<td>selenium</td>
<td>27.17</td>
</tr>

<tr>
<td>4</td>
<td>android-studio</td>
<td>26.71</td>
</tr>

<tr>
<td>5</td>
<td>selenium-webdriver</td>
<td>25.22</td>
</tr>

<tr>
<td>6</td>
<td>junit</td>
<td>23.84</td>
</tr>

<tr>
<td>7</td>
<td>rest</td>
<td>22.62</td>
</tr>

<tr>
<td>8</td>
<td>sql</td>
<td>16.85</td>
</tr>

<tr>
<td>9</td>
<td>class</td>
<td>16.18</td>
</tr>

<tr>
<td>10</td>
<td>exception</td>
<td>15.87</td>
</tr>
</tbody>
</table>
**Emerging tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>micronaut</td>
<td>3022.57</td>
</tr>

<tr>
<td>2</td>
<td>androidx</td>
<td>1679.12</td>
</tr>

<tr>
<td>3</td>
<td>javafx-11</td>
<td>1268.48</td>
</tr>

<tr>
<td>4</td>
<td>openjfx</td>
<td>726.93</td>
</tr>

<tr>
<td>5</td>
<td>flutter</td>
<td>497.07</td>
</tr>

<tr>
<td>6</td>
<td>tomcat9</td>
<td>425.14</td>
</tr>

<tr>
<td>7</td>
<td>openapi</td>
<td>421.20</td>
</tr>

<tr>
<td>8</td>
<td>android-livedata</td>
<td>375.94</td>
</tr>

<tr>
<td>9</td>
<td>java-11</td>
<td>345.95</td>
</tr>

<tr>
<td>10</td>
<td>reactive</td>
<td>321.16</td>
</tr>
</tbody>
</table>
Most tags in the growth tables denote some standard tools used everyday in enterprise projects, but there are a few different ones like **micronaut and OpenJFX**. 

**[Micronaut](https://micronaut.io/){:target="_blank"}, a Java based framework to build microservices and serverless applications, promises to deliver on the key weak points of Java; startup time and memory consumption.** *If you take the time and test it out, please let me know about your findings.*

**[OpenJFX](https://openjfx.io/){:target="_blank"} is an open-source project to build cross-platform client applications in Java.** Cross platform development is catching up with many languages, and Java is also joining in with JavaFx.

**Staying on the server side, let's mention Python's contribution. [Django](https://www.djangoproject.com/){:target="_blank"} and [Flask](https://flask.palletsprojects.com/en/1.1.x/){:target="_blank"}** are both on the Python top list and they are a beloved alternatives to Java and Node.js on the server side. They are used for web applications and as microservice backends. **[Connexion](https://github.com/zalando/connexion){:target="_blank"}, a project that serves your HTTP request based on your OpeanAPI YAML specification using Flask, seems to be a hot candidate for a prototype.**

**Now that we saw web front-end and back-end tech, let's spend some time with mobile development.**

**Coming from a more classic IT era, it took me some time to realize that mobile first does not just mean to design your mobile website first.** *It really means to start your business giving a mobile app to your customers and the rest will follow.*

I created a couple of online ventures as my own initiative in the past, but never really came up with a service idea on mobile and launched it. **If there is something I really should be prototyping is a business idea that starts on mobile.**

**Thinking about mobile development seems a bit double sided to me.** *On one hand, it's just iOS and Android and you have to do both, so I'm not getting any headaches here.*

**On the other hand, mastering both iOS and Android and maintaining two code bases seems a lot of work.** *We've got cross platform solutions to address this, but many companies say these bring even more pain.*

**Let's have a look at the most used tags next to mobile, Android and iOS on Stackoverflow on the heat maps below.**

![img]({{ site.url }}/assets/images/in-content/tags-next-to-mobile.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

![img]({{ site.url }}/assets/images/in-content/tags-next-to-android.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

![img]({{ site.url }}/assets/images/in-content/tags-next-to-ios.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

**The heat maps show the essential tools of the trade; Android, Java (for Android development), Swift for iOS and some old-fashioned tech like JQuery mobile to build responsive websites.**

**So what shall the avid prototyper do to lay her/his hands on some new mobile tech?** I hope we find the answer in the detailed growth tables. **We start with the top tags next to Android.** 

**Established tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>kotlin</td>
<td>130.05</td>
</tr>

<tr>
<td>2</td>
<td>firebase</td>
<td>58.53</td>
</tr>

<tr>
<td>3</td>
<td>android-recyclerview</td>
<td>34.46</td>
</tr>

<tr>
<td>4</td>
<td>gradle</td>
<td>26.12</td>
</tr>

<tr>
<td>5</td>
<td>android-studio</td>
<td>24.71</td>
</tr>

<tr>
<td>6</td>
<td>ios</td>
<td>24.45</td>
</tr>

<tr>
<td>7</td>
<td>javascript</td>
<td>18.06</td>
</tr>

<tr>
<td>8</td>
<td>json</td>
<td>17.37</td>
</tr>

<tr>
<td>9</td>
<td>java</td>
<td>17.09</td>
</tr>

<tr>
<td>10</td>
<td>xml</td>
<td>16.22</td>
</tr>
</tbody>
</table>
**Trending tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>react-native</td>
<td>88.59</td>
</tr>

<tr>
<td>2</td>
<td>retrofit2</td>
<td>62.95</td>
</tr>

<tr>
<td>3</td>
<td>firebase-realtime-database</td>
<td>50.66</td>
</tr>

<tr>
<td>4</td>
<td>retrofit</td>
<td>33.03</td>
</tr>

<tr>
<td>5</td>
<td>unity3d</td>
<td>30.92</td>
</tr>

<tr>
<td>6</td>
<td>android-gradle-plugin</td>
<td>30.90</td>
</tr>

<tr>
<td>7</td>
<td>xamarin</td>
<td>25.53</td>
</tr>

<tr>
<td>8</td>
<td>c#</td>
<td>23.47</td>
</tr>

<tr>
<td>9</td>
<td>android-volley</td>
<td>20.83</td>
</tr>

<tr>
<td>10</td>
<td>xamarin.android</td>
<td>20.31</td>
</tr>
</tbody>
</table>
**Emerging tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>ionic4</td>
<td>5318.64</td>
</tr>

<tr>
<td>2</td>
<td>android-motionlayout</td>
<td>3919.43</td>
</tr>

<tr>
<td>3</td>
<td>android-app-bundle</td>
<td>1733.25</td>
</tr>

<tr>
<td>4</td>
<td>flutter-layout</td>
<td>1561.22</td>
</tr>

<tr>
<td>5</td>
<td>koin</td>
<td>1137.37</td>
</tr>

<tr>
<td>6</td>
<td>androidx</td>
<td>1085.38</td>
</tr>

<tr>
<td>7</td>
<td>mutablelivedata</td>
<td>953.02</td>
</tr>

<tr>
<td>8</td>
<td>flutter-dependencies</td>
<td>695.04</td>
</tr>

<tr>
<td>9</td>
<td>android-architecture-navigation</td>
<td>689.11</td>
</tr>

<tr>
<td>10</td>
<td>android-jetpack</td>
<td>674.91</td>
</tr>
</tbody>
</table>
**We all know by now that Kotlin is a programming language interoperable with Java, but meant to fix Java's main flaws.** We see it on top of the Android growth chart, which *I'm sure is great news for devs who are deep into Android development; according to Stackoverflow you can improve your life by giving Kotlin a chance.*

For me, who is not into any platform yet, but willing to prototype a new app in 2020, Kotlin is not the solution I'm looking for. **I'd rather try some cross-platform stuff.** *It should be fresh, modern and proven with a solution to every problem.:)*

**The thing with cross platform tools is that you regularly see news about large companies moving away from one or the other. You also see the opposite; cool tech players committing to one platform for the long run.** *I don't wanna put brand names here, please ask google for examples.*

**There are various reasons to abandon a cross platform development solution, the most common ones being; startup times, worse than native performance, partial coverage of features; meaning some features still need to be developed natively for iOS and Android.** *This implies that you have to maintain 3 code bases instead of 1 cross-platform or 2 native.*

So the question comes, which one should I use in my prototypes going forward? **Let's add the growth table of iOS to the picture and come up with a plan.**

**Established tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>firebase</td>
<td>46.47</td>
</tr>

<tr>
<td>2</td>
<td>swift3</td>
<td>34.63</td>
</tr>

<tr>
<td>3</td>
<td>swift</td>
<td>29.45</td>
</tr>

<tr>
<td>4</td>
<td>android</td>
<td>24.45</td>
</tr>

<tr>
<td>5</td>
<td>javascript</td>
<td>20.39</td>
</tr>

<tr>
<td>6</td>
<td>uicollectionview</td>
<td>17.86</td>
</tr>

<tr>
<td>7</td>
<td>xcode</td>
<td>14.69</td>
</tr>

<tr>
<td>8</td>
<td>ios</td>
<td>13.67</td>
</tr>

<tr>
<td>9</td>
<td>autolayout</td>
<td>13.34</td>
</tr>

<tr>
<td>10</td>
<td>uibutton</td>
<td>12.53</td>
</tr>
</tbody>
</table>
**Trending tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>swift4</td>
<td>84.69</td>
</tr>

<tr>
<td>2</td>
<td>react-native</td>
<td>73.98</td>
</tr>

<tr>
<td>3</td>
<td>firebase-realtime-database</td>
<td>37.32</td>
</tr>

<tr>
<td>4</td>
<td>alamofire</td>
<td>34.08</td>
</tr>

<tr>
<td>5</td>
<td>cocoapods</td>
<td>28.57</td>
</tr>

<tr>
<td>6</td>
<td>arrays</td>
<td>22.27</td>
</tr>

<tr>
<td>7</td>
<td>xamarin</td>
<td>21.21</td>
</tr>

<tr>
<td>8</td>
<td>swift2</td>
<td>21.15</td>
</tr>

<tr>
<td>9</td>
<td>google-maps</td>
<td>20.87</td>
</tr>

<tr>
<td>10</td>
<td>itunesconnect</td>
<td>19.55</td>
</tr>
</tbody>
</table>
**Emerging tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>xcode11</td>
<td>27170.43</td>
</tr>

<tr>
<td>2</td>
<td>ionic4</td>
<td>2311.21</td>
</tr>

<tr>
<td>3</td>
<td>flutter</td>
<td>765.74</td>
</tr>

<tr>
<td>4</td>
<td>dart</td>
<td>684.33</td>
</tr>

<tr>
<td>5</td>
<td>swift4.2</td>
<td>586.00</td>
</tr>

<tr>
<td>6</td>
<td>sirishortcuts</td>
<td>276.22</td>
</tr>

<tr>
<td>7</td>
<td>xcuitest</td>
<td>249.36</td>
</tr>

<tr>
<td>8</td>
<td>google-cloud-firestore</td>
<td>231.63</td>
</tr>

<tr>
<td>9</td>
<td>expo</td>
<td>228.76</td>
</tr>

<tr>
<td>10</td>
<td>xcode10</td>
<td>220.94</td>
</tr>
</tbody>
</table>
**It's obvious that I have to put [React Native](https://reactnative.dev/){:target="_blank"} on my shortlist.** It's a top growth tag next to iOS and Android, too. I've got React skills (that I acquired through blood, sweat and tears), it seems like a no brainer. *But I have a concern.*

Learning React was painful because I had to research and choose the right library to be added to React to cover the basics. 

**React does front-end right, I like its logic, style, I even like JSX, it's compatible with my brain's wiring. But React stops at the front-end and leaves the rest of your app to you.** *I'd rather check out something that gives me more end-to-end support.*

**We've got [Xamarin](https://dotnet.microsoft.com/apps/xamarin){:target="_blank"} and [Ionic](https://ionicframework.com/){:target="_blank"} in the growth tables and [Apache Cordova](https://cordova.apache.org/){:target="_blank"} on the heat map**. I would not go with Cordova, because it's not on the growth list.

**Xamarin works with .Net and C#, I saw it in various corporations doing a good job.** If you are into the Microsoft ecosystem and already know C#, it looks like a great option, because MS got your back end to end.

**Ionic is gives the promise to build your app with web technologies; vanilla Javascript or any one of React, Angular or Vue.** 

**Established tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>flutter</td>
<td>390.71</td>
</tr>

<tr>
<td>2</td>
<td>dart</td>
<td>303.49</td>
</tr>

<tr>
<td>3</td>
<td>reactjs</td>
<td>117.23</td>
</tr>

<tr>
<td>4</td>
<td>react-native</td>
<td>105.98</td>
</tr>

<tr>
<td>5</td>
<td>responsive</td>
<td>66.77</td>
</tr>

<tr>
<td>6</td>
<td>appium</td>
<td>65.15</td>
</tr>

<tr>
<td>7</td>
<td>angular</td>
<td>62.14</td>
</tr>

<tr>
<td>8</td>
<td>xamarin.forms</td>
<td>49.27</td>
</tr>

<tr>
<td>9</td>
<td>node.js</td>
<td>45.71</td>
</tr>

<tr>
<td>10</td>
<td>android-studio</td>
<td>44.07</td>
</tr>
</tbody>
</table>
**To complete the short list let's look at the growth next to the mobile tag, too. [Flutter by Google](https://flutter.dev/){:target="_blank"} and its programming language, Dart, appear on top.**

**Another Google project, Firebase, is listed in all the growth tables in some form.** I'm particularly excited about the real time database, and I'd love to build my mobile prototype with it.

**I'd add React Native or Flutter to implement the mobile part.** Flutter integrates well with Firebase with good learning materials and examples. *I'd have to learn Dart though.*

**React Native seems easier if you know React, but then you have to figure out how to integrate with Firebase.** *I think I have to research this.* 


## Architecture, Enterprise, DevOps and Docker

**These tags, especially architecture and enterprise are smaller, Stackoverflow is more about code related issues than conceptual matters.**

*Still I'm very curious about these tags, because like many of you, I also work with enterprise clients, and do solution architecting work.*

**Prototyping for enterprise makes a real difference when you are in the process of moving into cloud, digital, data-driven, event-based and real-time.** I realize, this list sounds like b\*\*\*shit bingo, but this is reality.

I see these projects happening right now and enterprise experts need a lot of training and guidance to design and implement systems with the new mindset. *Prototyping is essential, because this stuff improves the bottom line.*

**Let's see if we can find something worth trying!**

![img]({{ site.url }}/assets/images/in-content/tags-next-to-architecture.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

![img]({{ site.url }}/assets/images/in-content/tags-next-to-enterprise.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

**The heat maps show the most used tags next to architecture (first graph) and enterprise (second graph).**

Tags like **C#, Java, MVC and database** pretty much summarize what we used to build in-house applications in the past two decades. No big news here.

**The way we implement modern applications changes though.**

**Having iOS and Android on the heat map means that mobile has been a top enterprise priority for years.** *Corporations with legacy stacks add mobile applications as a new customer channel to their existing applications.*

Mobile integration uncovers the shortcomings of legacy architectures. **It's inefficient to retrieve a screenful of information from legacy monoliths, they don't have the right gateways, the interfaces are too fat and system boundaries are not in line with mobile screen flow.**

*New enterprise systems are implemented with the microservices pattern and old legacy stacks are re-architected to resemble microservices as much as possible.*

**Architecture**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>angular</td>
<td>93.30</td>
</tr>

<tr>
<td>2</td>
<td>microservices</td>
<td>54.29</td>
</tr>

<tr>
<td>3</td>
<td>reactjs</td>
<td>30.56</td>
</tr>

<tr>
<td>4</td>
<td>django</td>
<td>30.45</td>
</tr>

<tr>
<td>5</td>
<td>cqrs</td>
<td>28.79</td>
</tr>

<tr>
<td>6</td>
<td>software-design</td>
<td>25.64</td>
</tr>

<tr>
<td>7</td>
<td>python</td>
<td>25.05</td>
</tr>

<tr>
<td>8</td>
<td>amazon-web-services</td>
<td>24.32</td>
</tr>

<tr>
<td>9</td>
<td>rest</td>
<td>22.61</td>
</tr>

<tr>
<td>10</td>
<td>service</td>
<td>20.06</td>
</tr>
</tbody>
</table>
**Enterprise**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>sql-server</td>
<td>67.09</td>
</tr>

<tr>
<td>2</td>
<td>github</td>
<td>36.94</td>
</tr>

<tr>
<td>3</td>
<td>database</td>
<td>20.48</td>
</tr>

<tr>
<td>4</td>
<td>in-house-distribution</td>
<td>19.62</td>
</tr>

<tr>
<td>5</td>
<td>mysql</td>
<td>18.74</td>
</tr>

<tr>
<td>6</td>
<td>.net</td>
<td>17.64</td>
</tr>

<tr>
<td>7</td>
<td>python</td>
<td>16.42</td>
</tr>

<tr>
<td>8</td>
<td>sql</td>
<td>14.89</td>
</tr>

<tr>
<td>9</td>
<td>oracle</td>
<td>12.84</td>
</tr>

<tr>
<td>10</td>
<td>provisioning-profile</td>
<td>12.75</td>
</tr>
</tbody>
</table>
**You find the top growing tags next to architecture and enterprise in the tables above.** Microservices architecture appears right on the top of the list. It's a vast universe with its pluses and flaws, but **it's totally feasible to build a small scale prototype architecture for learning purposes for yourself.**

**I built mine with [JHipster](https://www.jhipster.tech){:target="_blank"} and I would recommend it to architects and devs who want to play hands on.**

*You get a Spring Boot backend, an Angular or React front-end, API gateway, Traefik, Authorization system, SQL or NoSQL, Kafka and deployment with Docker and Kubernetes. You get it all generated for you automatically and you can start experimenting.* Sweet, isn't it?

If you want to get into Spring Boot a little deeper, [I recommend the courses of this author on Udemy](https://fave.co/2Rvp6by){:target="_blank"}.

On the design side **Domain driven design** and **Clean architecture** are the concepts trending on Stackoverflow. **To get started check out [Domain Driven Design by Eric Evans](https://amzn.to/2VAjyhc){:target="_blank"} and [Clean Architecture: A Craftsman's Guide to Software Structure and Design by Robert C. Martin a.k.a. Uncle Bob.](https://amzn.to/2RIBNQo){:target="_blank"}**

![img]({{ site.url }}/assets/images/in-content/tags-next-to-devops.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

![img]({{ site.url }}/assets/images/in-content/tags-next-to-docker.png){: .img-fluid style="background-color: #141C21; padding: 2rem;" }

**Our prototyping ideation must touch upon DevOps and Docker.** *These tools enable whole new levels of automation. This is a hot topic everywhere.* 

I teach Docker in classroom trainings at large corporations. 

**People learn the tools first, then they realize that they can solve problems in entirely new faster and simpler ways.** 

*This is the moment when it's great to be in education.*

**Docker and DevOps means a lot to me. Not technically, more like personally.** From the day when I first saw a computer in around 1986 I firmly believe that technology will take us to a highly intelligent age when everything happens automagically and we'll all be very happy.

*So in my early career it was pretty shocking to see that dev and ops are two different disciplines separated by a giant wall.* **Why would anyone do that?** It was so unbearable that I married the head of application support to put the universe back in order. 

No wonder I'm a great fan of [The Phoenix Project,](https://amzn.to/3cl9SOr){:target="_blank"} a one of a kind IT novel by Gene Kim, that shows dev and ops the way I like to look at IT. 

**The heat maps above show a good picture about the everyday reality of this domain; Docker, Jenkins, Kubernetes, Ansible, Linux, Git and Cloud** skills do the job here.

*The table below shows the top growing tags in the DevOps domain and the table after shows the growth tags of Docker related questions on Stackoverflow.*

**Established tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>kubernetes</td>
<td>294.98</td>
</tr>

<tr>
<td>2</td>
<td>azure-devops</td>
<td>267.56</td>
</tr>

<tr>
<td>3</td>
<td>azure</td>
<td>221.14</td>
</tr>

<tr>
<td>4</td>
<td>amazon-web-services</td>
<td>171.38</td>
</tr>

<tr>
<td>5</td>
<td>docker-compose</td>
<td>134.40</td>
</tr>

<tr>
<td>6</td>
<td>tfs</td>
<td>133.87</td>
</tr>

<tr>
<td>7</td>
<td>docker</td>
<td>122.81</td>
</tr>

<tr>
<td>8</td>
<td>python</td>
<td>120.64</td>
</tr>

<tr>
<td>9</td>
<td>jenkins-pipeline</td>
<td>120.10</td>
</tr>

<tr>
<td>10</td>
<td>git</td>
<td>105.00</td>
</tr>
</tbody>
</table>
**Trending tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>gitlab</td>
<td>148.43</td>
</tr>

<tr>
<td>2</td>
<td>amazon-ec2</td>
<td>133.06</td>
</tr>

<tr>
<td>3</td>
<td>continuous-deployment</td>
<td>126.02</td>
</tr>

<tr>
<td>4</td>
<td>node.js</td>
<td>124.90</td>
</tr>

<tr>
<td>5</td>
<td>python</td>
<td>120.64</td>
</tr>

<tr>
<td>6</td>
<td>jenkins-pipeline</td>
<td>120.10</td>
</tr>

<tr>
<td>7</td>
<td>automation</td>
<td>119.66</td>
</tr>

<tr>
<td>8</td>
<td>java</td>
<td>114.82</td>
</tr>

<tr>
<td>9</td>
<td>nginx</td>
<td>99.36</td>
</tr>

<tr>
<td>10</td>
<td>terraform</td>
<td>95.56</td>
</tr>
</tbody>
</table>
**Emerging tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>infrastructure-as-code</td>
<td>3246.45</td>
</tr>

<tr>
<td>2</td>
<td>aws-lambda</td>
<td>2713.64</td>
</tr>

<tr>
<td>3</td>
<td>kubernetes-pod</td>
<td>2195.45</td>
</tr>

<tr>
<td>4</td>
<td>terraform-provider-aws</td>
<td>1831.41</td>
</tr>

<tr>
<td>5</td>
<td>gcloud</td>
<td>1714.49</td>
</tr>

<tr>
<td>6</td>
<td>.net-core</td>
<td>647.74</td>
</tr>

<tr>
<td>7</td>
<td>traefik</td>
<td>597.38</td>
</tr>

<tr>
<td>8</td>
<td>kubernetes-helm</td>
<td>546.62</td>
</tr>

<tr>
<td>9</td>
<td>aws-codebuild</td>
<td>507.07</td>
</tr>

<tr>
<td>10</td>
<td>curl</td>
<td>463.02</td>
</tr>
</tbody>
</table>
**Established tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>spring-boot</td>
<td>110.79</td>
</tr>

<tr>
<td>2</td>
<td>kubernetes</td>
<td>109.59</td>
</tr>

<tr>
<td>3</td>
<td>python</td>
<td>103.92</td>
</tr>

<tr>
<td>4</td>
<td>docker-swarm</td>
<td>98.22</td>
</tr>

<tr>
<td>5</td>
<td>docker-compose</td>
<td>97.11</td>
</tr>

<tr>
<td>6</td>
<td>jenkins</td>
<td>95.67</td>
</tr>

<tr>
<td>7</td>
<td>dockerfile</td>
<td>87.12</td>
</tr>

<tr>
<td>8</td>
<td>django</td>
<td>86.62</td>
</tr>

<tr>
<td>9</td>
<td>php</td>
<td>86.00</td>
</tr>

<tr>
<td>10</td>
<td>java</td>
<td>84.65</td>
</tr>
</tbody>
</table>
**Trending tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>alpine</td>
<td>156.45</td>
</tr>

<tr>
<td>2</td>
<td>flask</td>
<td>151.33</td>
</tr>

<tr>
<td>3</td>
<td>.net-core</td>
<td>151.32</td>
</tr>

<tr>
<td>4</td>
<td>gitlab-ci</td>
<td>140.70</td>
</tr>

<tr>
<td>5</td>
<td>docker-for-windows</td>
<td>136.86</td>
</tr>

<tr>
<td>6</td>
<td>c#</td>
<td>135.43</td>
</tr>

<tr>
<td>7</td>
<td>asp.net-core</td>
<td>122.53</td>
</tr>

<tr>
<td>8</td>
<td>azure</td>
<td>117.05</td>
</tr>

<tr>
<td>9</td>
<td>gitlab</td>
<td>115.34</td>
</tr>

<tr>
<td>10</td>
<td>docker-volume</td>
<td>109.82</td>
</tr>
</tbody>
</table>
**Emerging tags**

<table class="table table-striped">

<thead class="thead-dark">
<tr>
<th>#</th>
<th>tag</th>
<th>growth(%)</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>kubernetes-helm</td>
<td>330.85</td>
</tr>

<tr>
<td>2</td>
<td>ubuntu-18.04</td>
<td>314.24</td>
</tr>

<tr>
<td>3</td>
<td>nginx-reverse-proxy</td>
<td>268.22</td>
</tr>

<tr>
<td>4</td>
<td>docker-network</td>
<td>261.80</td>
</tr>

<tr>
<td>5</td>
<td>azure-devops</td>
<td>258.39</td>
</tr>

<tr>
<td>6</td>
<td>vue.js</td>
<td>253.64</td>
</tr>

<tr>
<td>7</td>
<td>keycloak</td>
<td>214.13</td>
</tr>

<tr>
<td>8</td>
<td>minikube</td>
<td>198.07</td>
</tr>

<tr>
<td>9</td>
<td>airflow</td>
<td>195.87</td>
</tr>

<tr>
<td>10</td>
<td>docker-stack</td>
<td>189.77</td>
</tr>
</tbody>
</table>
**If you take a look at tags in the above tables, you can see that Kubernetes is at the top both next to devops and docker.** The reason for this is that *Kubernetes is the most adopted container orchestrator on Earth right now*.

*Mastering Kubernetes is a pretty daunting task.* To cope with the complexity most clients use PaaS solutions like OpenShift or cloud providers to set up and manage k8s clusters.

**You can build your first Kubernetes prototype with [Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/){:target="_blank"} and learn the basics. Then try running applications on GCP, AWS and Azure with their respective managed Kubernetes offerings.**

**[Jenkins](https://jenkins.io/){:target="_blank"} is at the core of automation, it's the most popular CI/CD solution for corporations.** *While there are various cloud options available like CircleCI or Travis, you can always set up your own Jenkins on your own servers.* Try running Jenkins with Docker as a prototype, I have a blog post almost ready to publish to show you how you can do this.

**Another key tool that you can set up on premises is [Gitlab](https://about.gitlab.com/){:target="_blank"}**. *Gitlab with Jenkins is a frequent combination in enterprise projects.*

**Moving further into automation you find infrastructure automation with [Terraform by HashiCorp](https://www.terraform.io/){:target="_blank"} and configuration management with [Ansible](https://www.ansible.com/){:target="_blank"}, [Chef](https://www.chef.io/){:target="_blank"} and [Puppet](https://puppet.com/){:target="_blank"}**. You find most of them in the top growth tables. *Prototyping these tools is pretty easy, just take any web application prototype you already have and deploy it to a cloud service with these tools.*

**There are good number of solutions to help you deploy a production level Kubernetes cluster**. [Kubespray](http://go.takacsmark.com?id=61108X1384518&xs=1&url=https%3A%2F%2Fgithub.com%2Fkubernetes-sigs%2Fkubespray){:target="_blank"} works with all major cloud services, supports Ansible and Vagrant and has great compatibility with 3rd party components.

**If you deploy your apps on edge devices, you might want to check out [microk8s](https://microk8s.io/){:target="_blank"}, the zero-ops Kubernetes for workstations IoT and embedded applications.**

Identity and access management is an aspect you have to handle in every project. **[Keycloak](https://www.keycloak.org/){:target="_blank"}, a project backed by RedHat provides all-around open-source identity and access management.** *I just built a few small prototypes with it and liked the experience a lot. I rebuilt the prototypes with Firebase Auth and liked it even better. I'm also considering another rebuild with AWS Cognito.*

**If you are new to Docker and willing to learn, check out my [Docker tutorial book I teach in classroom trainings; Get Started with Docker in your Projects - through Examples](https://takacsmark.com/get-started-with-docker-in-your-projects-through-examples/){:target="_blank"}.**

