---
layout: post
title:  "What HTML meta tags to add to your site and what do they do?"
description: "Eager to clarify what meta tags you need in your HTML markup? Need some info on where, why and how to add them? Could use a few examples?"
date:   2016-04-04 16:07:00 +0100
thumbnail: "/assets/images/post-thumbs/html_meta_tags.jpg"
categories: Web development, User experience
---
* TOC
{:toc}

So you can't wait to release your new site? Eager to clarify what meta tags you need in your HTML markup? Need some info on where, why and how to add them? Could use a few examples?

Search no more, here is the post you've been looking for.

**Meta tags help computers (e.g. Google's robots) understand the contents of your website's pages.**

I bet, you already heard that you need meta tags for SEO. I think that this definition is somewhat narrow in 2016.

>These days I would define the purpose of meta tags that they enrich the human readable information on webpages with computer understandable meta information. This way your pages' contents can be successfully included into the on-line collaboration of people, web apps and computers in general.

Yep, this goes beyond SEO.

**Search engines massively rely on some meta tags, but today there are dedicated meta tags for social sites like Facebook, Twitter and LinkedIn, too.**

**Besides the social tags, there are meta tags that are used to describe your content in more detail. The most widely used content description system is provided by [schema.org](https://schema.org).**

These are the meta tags you'll need on your site to successfully work with today's on-line ecosystem:

- Title and description
- Google related meta
- Verification tags
- Social meta
- Schema.org to describe your content

## Title and description

Everybody knows these two guys: `title` and `description`, every page has them (at least the ones listed on the first few hundred pages in Google search results).

**Every page on your website should have a `title` and `description` meta tag. Put these tags into the `<head>` section of your html pages.** For example:
{% highlight html linenos=table %}
<!DOCTYPE html>
<html>
    <head>
        <!-- The page title comes into the <title> tag -->
        <title>This is the title of your page</title>
        <!-- The page description is defined in the meta format -->
        <meta name="description" content="This is the description of your page">
    </head>

    <body>
        <!-- Page content comes here... -->
    </body>
</html>
{% endhighlight %}

As you can see `<title>` technically does not carry the `<meta>` tag format, but it's almost always discussed when talk comes to meta tags.

### What does title do?

It gives the human readable title of your webpage. The `title` is **displayed at the top of your browser window**, typically on the open tab.

Besides this, **`title` plays a very important part in SEO.** The title of your page defines what your page is about, therefore search engines heavily rely on this information and it's a key part of the SEO ranking of your pages.

The `title` is also displayed as the title of search results. It's crucial that you choose your title wisely, so it will give the right information about your page's content to humans, as well as search engines.

Title is also used as a fallback mechanism by social sites, when social title meta is not available.

### What is description used for?

Description is not part of your pages' search ranking. It's main purpose is, that it's displayed in search results on search engines. **Think of it as your elevator pitch that attracts people to your pages.**

The description may also be used as a description on social sites.

### Writing title and description

Writing titles and descriptions for successful SEO has its own literature. I often have the feeling that people are overcomplicating this stuff. This post is about tags, so I won't start an argument now. I give you my simple guideline instead.

**Write a title (often called a headline) and a description to highlight what value you are providing to your audience.** Make it straightforward, simple and descriptive.

Describe what's in the article and give visitors a reason not to miss it. Tell them what they'll have that they don't have now once they've read your article.

If you wanna deep dive into the dark art of headlines, just search for headline optimization or emotional headlines.

### Title and description length

Here comes some practical advice: **Google and other search engines will only display a limited number of characters in the search results.** Let's take this example:

![title and description in google search results](/assets/images/in-content/title-description-google-search-results.jpg)

This is my post copied from the 6th position of Google search.

The picture shows us how your title and description will be displayed on Google. **This is what people will see amongst many other results. If you get these tags right, you'll receive more clicks from search engines.**

There is not one magic number for the length of title or description, because the shape of letters influences how many characters fit into the results. You can add more slim characters like "i"s that "o"s, for instance.

Google typically displays 50-60 characters from the title, and about 150-160 from the description. The rest of the information in these tags will not be visible on the results page.

If you're wondering how you can make sure that you don't mess up, use this [Google snippet optimization tool on-line](http://snippetoptimizer.net).

If you wanna know more details about length, [here is an information-rich study by Moz.](https://moz.com/blog/new-title-tag-guidelines-preview-tool)

## Miscellaneous meta

There are some meta tags that you should add to all of your webpages under `<head>`. These are:

- `charset` specifies the character encoding of the HTML document. The browser uses this information to display the page correctly.
- `http-viewport` denotes the user visible area of a webpage. It was introduced with responsive web design. You can control the initial dimensions and scaling when the page is loaded. You can read a [good explanation of http-viewport featuring examples on w3schools.](https://www.w3schools.com/css/css_rwd_viewport.asp)

Let's extend our previous example:
{% highlight html linenos=table %}
<!DOCTYPE html>
<html>
    <head>
        <!-- UTF8 is a broad character encoding  -->
        <meta charset="utf-8">
        <!-- Setting page width to the width of the device with scaling 1 -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- The page title comes into the <title> tag -->
        <title>This is the title of your page</title>
        <!-- The page description is defined in the meta format -->
        <meta name="description" content="This is the description of your page">
    </head>

    <body>
        <!-- Page content comes here... -->
    </body>
</html>
{% endhighlight %}

There are further less frequent meta tags, the most notable ones are `robots`, `google` and `http-equiv`.

There is another important piece of meta information we should mention, although it does not come in the form of a tag. **The `alt` attribute on images describes the content of pictures on your site.**

`alt` is the only way you can be successful in image search, because computers don't understand images yet, so we have to tell them what's on the picture. Therefore `alt` attributes are a must for all images.

## Verification tags

Bloggers, web masters and other nerdy people will have to prove the ownership of their websites when using online services. You're required to do this when

- your site's data is used by a service
-  or your site's identity is part of your service identity.

Let me explain.

Google search console (still better known as webmaster tools) will give you information about your site's statistics. You also have the possibility to influence how Google sees your site. You need to prove that the site in question is yours.

An example of the second scenario is Pinterest. You can track pins from your website on Pinterest, plus you can embed your Pinterest boards on your website. To be able to do this you need to prove that you are in charge of the specific site.

**The simplest option to prove the ownership of a site is a meta tag.** The verification code is provided by the online services like Google Search Console, Pinterest, etc.

Let's add a Google example to our sample code, where the value of the content field is a verification code provided by Google Search Console:

{% highlight html linenos=table %}
<!DOCTYPE html>
<html>
    <head>
        <!-- UTF8 is broad character encoding  -->
        <meta charset="utf-8">
        <!-- Setting page width to the width of the device with scaling 1 -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- The page title comes into the <title> tag -->
        <title>This is the title of your page</title>
        <!-- The page description is defined in the meta format -->
        <meta name="description" content="This is the description of your page">

        <!-- Google site Verification -->
        <meta name="google-site-verification" content="59408yhfuhfjskdlhfasdhfuoyHJHLJHK__Random__BLAH_BLAH" />

    </head>

    <body>
        <!-- Page content comes here... -->
    </body>
</html>
{% endhighlight %}

## Social meta

I like this part a lot, because it'll give you spectacular results. **Social meta tags contain the information that is picked up by social sites when you copy your page link to the sharing box on social media, or you push the share button on your site's sharing tool.**

The minimum information you should provide is title, description and an image.

Most social sites support the [Open Graph protocol](http://ogp.me) to acquire useful information about a webpage.

Twitter uses its own notation, but if it's not present on your page Twitter will use Open Graph data.

Let's define a set of Open Graph tags to be used by Facebook, Google Plus and LinkedIn. I will also add a Twitter title.

{% highlight html linenos=table %}
<!DOCTYPE html>
<html>
    <head>
        <!-- UTF8 is broad character encoding  -->
        <meta charset="utf-8">
        <!-- Setting page width to the width of the device with scaling 1 -->
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- The page title comes into the <title> tag -->
        <title>This is the title of your page</title>
        <!-- The page description is defined in the meta format -->
        <meta name="description" content="This is the description of your page">

        <!-- Google site Verification -->
        <meta name="google-site-verification" content="59408yhfuhfjskdlhfasdhfuoyHJHLJHK__Random__BLAH_BLAH" />

        <!-- Open Graph Data -->
        <meta property="og:title" content="This is the title of your page<" />
        <meta property="twitter:title" content="This is the title of your page<" />
        <meta property="og:description" content="This is the description of your page">
        <meta property="og:image" content="http://yourtsite.com/yourimagedir/yourthumbnail.jpg" />
    </head>

    <body>
        <!-- Page content comes here... -->
    </body>
</html>
{% endhighlight %}

**If you have issues with your Open Graph meta start debugging with [Facebook's Open Graph debugger.](https://developers.facebook.com/tools/debug/)**

## Schema.org to describe your content

[Schema.org](https://schema.org) provides schemas for structured data on the internet.

Use them to describe articles, blog posts, products, product listings, events, people, and so on.

You'll help search engines and other computer based content tools understand the content of your page. This way you can better perform in content related on-line solutions.

Let's see a blog post example:
{% highlight html linenos=table %}
<article itemscope itemtype="http://schema.org/BlogPosting">
    <meta itemprop="image" content="http://yoursite.com/image.jpg">
    <img src="http://yoursite.com/image.jpg">

    <h1 itemprop="name headline">Post title</h1>

    <p>
        <time datetime="date_to_xmlschema" itemprop="datePublished">{{ page.date | date: "%b %-d, %Y" }}</time>

        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
            <span itemprop="name">Post author name</span>
        </span>
    </p>

    <div itemprop="articleBody">
        <!-- Post body comes here -->
    </div>
</article>
{% endhighlight %}

Use the `itemscope` attribute to denote the start of a new schema.org object. `itemtype` specifies the type of the item started by `itemscope`. Use the `itemprop` attribute within the opening and closing tags of the element with the `itemscope` attribute.

The `itemprop` markup that you put inside the item scope will define various properties of the object. In case of a blog post in the example we have specified the title, image, publishing date, author and article body properties of the post.

Use schema.org and Google and other search engines will better understand what is on your pages. You can highlight your products for example, so that they will be available in Google shopping for search. More people will find your products and your online shop. Sounds good, right?

## Wrap-up

You will have tremendous benefits on-line if you use meta tags on your webpages. The advantages include better search rankings and click through rate, control over how your pages and posts appear on social media channels, more streamlined user experience across devices and more sophisticated integration with content tools.

Don't miss meta tags and schema markup on your pages. They are a must for every website. If you don't have them, add them today.
