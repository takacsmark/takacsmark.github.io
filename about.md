---
layout: page
title: About
permalink: /about/
---

## The blog

This is the second time that I am starting this blog. I launched the original version when my career took a new turn and I moved to India for a short assignment.

Then my life took some more turns and I was busy re-building everything around me and I felt it was not the right time to write. Well, mainly because I could not tell how things will turn out in the end.

I am sitting here today thinking that I wanna write about practical things of life, no big philosophy. Things like, how I grow cactus from seeds, what are the best on-line courses I attended or which tools I found useful building my on-line business.

## Bio

Mark is a guy turning 43 these days. He is happily married and he is fond of computers.

He spent over 15 years in IT and telecommunications, he architected complex IT solutions and lead large-scale delivery programs.

Mark decided to use his experience and his creative powers to build his own on-line venture with stuff he always wanted to use, but could not work with in a professional environment. Like AI, for example, or photography and vector art. Yeah, you usually don't see program directors running around with Bamboo tablets. And Mark did not like that.

Today, Mark is working from home with his wife, who also left her career in telecommunications and joined the family project. They spend their days learning new tricks of marketing, SEO, the fashion industry and the cloud. They are building everything by themselves.

Mark and his wife know a good deal about how large enterprises work and now they are trying to build a cool family business with the mindset and reflexes of the corporate world. Sometimes this results in funny situations, some other times wise and insightful observations come out of it, because they have already dealt with complex and sizable stuff.

Mark and his wife live and work in Budapest, Hungary.

## Contact

<ul class="no-bullet">
    {% if site.linkedin_username %}
    <li>
        <a href="https://linkedin.com/in/{{ site.linkedin_username }}">
            <i class="fi-social-linkedin"></i>
            <span>{{ site.linkedin_username }}</span>
            <!--[if lt IE 9]><em>LinkedIn</em><![endif]-->
        </a>
    </li>
    {% endif %}

    {% if site.facebook_page %}
    <li>
        <a href="https://facebook.com/{{ site.facebook_page }}">
            <i class="fi-social-facebook"></i>
            <span>{{ site.facebook_page }}</span>
            <!--[if lt IE 9]><em>Facebook</em><![endif]-->
        </a>
    </li>
    {% endif %}

    {% if site.twitter_username %}
    <li>
        <a href="https://twitter.com/{{ site.twitter_username }}">
            <i class="fi-social-twitter"></i>
            <span>{{ site.twitter_username }}</span>
        </a>
    </li>
    {% endif %}

    {% if site.youtube_channel %}
    <li>
        <a href="https://youtube.com/{{ site.youtube_channel}}">
            <i class="fi-social-youtube"></i>
            <span>{{ site.youtube_channel }}</span>
            <!--[if lt IE 9]><em>Youtube</em><![endif]-->
        </a>
    </li>
    {% endif %}

    {% if site.github_username %}
    <li>
        <a href="https://github.com/{{ site.github_username }}">
            <i class="fi-social-github"></i>
            <span>{{ site.github_username }}</span>
        </a>
    </li>
    {% endif %}

    {% if site.instagram_username %}
    <li>
        <a href="https://instagram.com/{{ site.instagram_username }}">
            <i class="fi-social-instagram"></i>
            <span>{{ site.instagram_username}}</span>
            <!--[if lt IE 9]><em>Instagram</em><![endif]-->
        </a>
    </li>
    {% endif %}

    {% if site.googleplus_username %}
    <li>
        <a href="https://plus.google.com/{{ site.googleplus_username }}">
            <i class="fi-social-google-plus"></i>
            <span>{{ site.googleplus_username }}</span>
            <!--[if lt IE 9]><em>Google Plus</em><![endif]-->
        </a>
    </li>
    {% endif %}

    <li>
        <a href="{{ site.url }}/feed.xml">
            <i class="fi-rss"></i>
            <span>rss</span>
            <!--[if lt IE 9]><em>RSS</em><![endif]-->
        </a>
    </li>

    {% if site.email %}
    <li>
        <a href="mailto:{{ site.email }}">
            <i class="fi-mail"></i>
            <span>{{ site.email }}</span>
            <!--[if lt IE 9]><em>Email</em><![endif]-->
        </a>
    </li>
    {% endif %}
</ul>
