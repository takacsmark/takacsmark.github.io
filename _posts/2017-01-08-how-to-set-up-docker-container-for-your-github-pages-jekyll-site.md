---
layout: post
title: "How to set up a Docker container for your GithHub Pages site?"
description: "Serving my existing GitHub Pages Jekyll sites from a Docker container was not easy. Here is how I fixed the issue."
date: 2017-01-08 10:07:00 +0100
author: Márk Takács
thumbnail: "/assets/images/post-thumbs/docker-jekyll.png"
category: Tutorial
---

<!-- prettier-ignore -->
* TOC
<!-- prettier-ignore -->
{:toc}

\***\*Tip**\*\*\*\*\*\*
If you are absolutely new to Docker, please start with the [beginners tutorial with examples]({{ site.url }}/getting-started-with-docker-in-your-project-step-by-step-tutorial/).

\***\*Tip**\*\*\*\*\*\*
Watch the video that I created for this post on Youtube. I show you what issue I faced when I tried to serve my existing GitHub Pages sites from the official Jekyll container. I also give you the fix that I created.

<div class="aspect-w-16 aspect-h-9">
    <iframe src="https://www.youtube.com/embed/6UAf8b_2juk" allowfullscreen></iframe>
</div>

This article is the writeup of the video tutorial, meaning I created the video first and I'm adding the details in written form now.

## Overview

This article is about serving existing GitHub Pages sites from a Docker container.

When I bought my new Mac recently, I decided to use Docker development environments exclusively. I host 2 sites on GitHub Pages, so I started setting up my containers with the official Jekyll Docker image.

The official images seems to be working with new sites, I saw people on forums who were able to start up a new site with the official image.

There are many of us, who are facing issues with existing sites. **The main issue being "permission denied" error messages when starting up a container.**

Let's see what is the cause of these issues and let's see how to fix it.

## Understanding the problem

Jekyll has an official Docker images that you can find in the [Docker Store](https://store.docker.com/community/images/jekyll/jekyll){:target="\_blank"}.

Unlike other images on the Docker Store, this one has a very poor documentation. I know, I can always contribute to the project, instead of bitching about poor documentation on my blog, so let's just take my remark as a statement of an obvious fact.

If you want to understand how to use the Jekyll image, you can directly [go the Wiki](https://github.com/jekyll/docker/wiki/Usage:-Running){:target="\_blank"}. It would be nice to bring this information in front of new users, instead of hiding it behind a couple of links. (OK, I stop whining.)

So once I dug my way through the docs, I launched a command like this (note that you need to use the :pages tag to get the GitHub Pages version of the image):

`docker run -p 4400:4000 -v $(pwd):/srv/jekyll jekyll/jekyll:pages`

What happens is that the container starts up and it will try to install the dependencies listed in the `Gemfile` and `Gemfile.lock` files of your project. These files are in your project to make sure that the same packages are installed wherever you develop your blog. So this stuff is good for you. The problem is that the installation fails with error messages like the ones below:

```shell
Fetching gem metadata from https://rubygems.org/..........
Fetching version metadata from https://rubygems.org/...
Fetching dependency metadata from https://rubygems.org/..
Installing RedCloth 4.2.9 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/RedCloth-4.2.9
Using i18n 0.7.0
Using json 1.8.3
Installing minitest 5.8.4
Using thread_safe 0.3.5
Installing addressable 2.3.8
Using coffee-script-source 1.10.0
Installing execjs 2.6.0
Installing colorator 0.1
Installing ffi 1.9.10 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/ffi-1.9.10
Using multipart-post 2.0.0
Using gemoji 2.1.0
Using net-dns 0.8.0
Using public_suffix 1.5.3
Installing sass 3.4.21
Using rb-fsevent 0.9.7
Installing kramdown 1.9.0
Using liquid 3.0.6
Installing mercenary 0.3.5
Installing rouge 1.10.1
Using safe_yaml 1.0.4
Installing jekyll-feed 0.3.1
Installing mini_portile2 2.0.0
Using jekyll-paginate 1.1.0
Using jekyll-sitemap 0.10.0
Installing rdiscount 2.1.8 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/rdiscount-2.1.8
Installing redcarpet 3.3.3 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/redcarpet-3.3.3
Installing terminal-table 1.5.2
Using bundler 1.12.5
An error occurred while installing RedCloth (4.2.9), and Bundler cannot
continue.
Make sure that `gem install RedCloth -v '4.2.9'` succeeds before bundling.
fetch http://mirror.envygeeks.io/alpine/v3.4/main/x86_64/APKINDEX.tar.gz
fetch http://mirror.envygeeks.io/alpine/edge/community/x86_64/APKINDEX.tar.gz
fetch http://mirror.envygeeks.io/alpine/edge/testing/x86_64/APKINDEX.tar.gz
(1/27) Upgrading musl (1.1.14-r11 -> 1.1.14-r14)
(2/27) Installing binutils-libs (2.26-r0)
(3/27) Installing binutils (2.26-r0)
(4/27) Installing isl (0.14.1-r0)
(5/27) Installing libgomp (5.3.0-r0)
(6/27) Installing libatomic (5.3.0-r0)
(7/27) Installing pkgconf (0.9.12-r0)
(8/27) Installing pkgconfig (0.25-r1)
(9/27) Installing mpfr3 (3.1.2-r0)
(10/27) Installing mpc1 (1.0.3-r0)
(11/27) Installing gcc (5.3.0-r0)
(12/27) Installing make (4.1-r1)
(13/27) Installing musl-dev (1.1.14-r14)
(14/27) Installing libc-dev (0.7-r0)
(15/27) Installing fortify-headers (0.8-r0)
(16/27) Installing g++ (5.3.0-r0)
(17/27) Installing build-base (0.4-r1)
(18/27) Upgrading musl-utils (1.1.14-r11 -> 1.1.14-r14)
(19/27) Installing libffi-dev (3.2.1-r2)
(20/27) Installing zlib-dev (1.2.8-r2)
(21/27) Installing libxml2-dev (2.9.4-r0)
(22/27) Installing libxslt-dev (1.1.29-r0)
(23/27) Installing readline-dev (6.3.008-r4)
(24/27) Installing libgmpxx (6.1.0-r0)
(25/27) Installing gmp-dev (6.1.0-r0)
(26/27) Installing ruby-dev (2.3.1-r0)
(27/27) Installing yaml-dev (0.1.6-r1)
Executing busybox-1.24.2-r11.trigger
OK: 250 MiB in 70 packages
Fetching gem metadata from https://rubygems.org/..........
Fetching version metadata from https://rubygems.org/...
Fetching dependency metadata from https://rubygems.org/..
Installing RedCloth 4.2.9 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/RedCloth-4.2.9
Using i18n 0.7.0
Using json 1.8.3
Using minitest 5.8.4
Using thread_safe 0.3.5
Using addressable 2.3.8
Using coffee-script-source 1.10.0
Using execjs 2.6.0
Using colorator 0.1
Installing ffi 1.9.10 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/ffi-1.9.10
Using multipart-post 2.0.0
Using gemoji 2.1.0
Using net-dns 0.8.0
Using public_suffix 1.5.3
Using sass 3.4.21
Using rb-fsevent 0.9.7
Using kramdown 1.9.0
Using liquid 3.0.6
Using mercenary 0.3.5
Using rouge 1.10.1
Using safe_yaml 1.0.4
Using jekyll-feed 0.3.1
Using mini_portile2 2.0.0
Using jekyll-paginate 1.1.0
Using jekyll-sitemap 0.10.0
Installing rdiscount 2.1.8 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/rdiscount-2.1.8
Installing redcarpet 3.3.3 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/redcarpet-3.3.3
Using terminal-table 1.5.2
Using bundler 1.12.5
An error occurred while installing RedCloth (4.2.9), and Bundler cannot
continue.
Make sure that `gem install RedCloth -v '4.2.9'` succeeds before bundling.
fetch http://mirror.envygeeks.io/alpine/v3.4/main/x86_64/APKINDEX.tar.gz
fetch http://mirror.envygeeks.io/alpine/edge/community/x86_64/APKINDEX.tar.gz
fetch http://mirror.envygeeks.io/alpine/edge/testing/x86_64/APKINDEX.tar.gz
OK: 250 MiB in 70 packages
Fetching gem metadata from https://rubygems.org/..........
Fetching version metadata from https://rubygems.org/...
Fetching dependency metadata from https://rubygems.org/..
Installing RedCloth 4.2.9 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/RedCloth-4.2.9
Using i18n 0.7.0
Using json 1.8.3
Using minitest 5.8.4
Using thread_safe 0.3.5
Using addressable 2.3.8
Using coffee-script-source 1.10.0
Using execjs 2.6.0
Using colorator 0.1
Installing ffi 1.9.10 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/ffi-1.9.10
Using multipart-post 2.0.0
Using gemoji 2.1.0
Using net-dns 0.8.0
Using public_suffix 1.5.3
Using sass 3.4.21
Using rb-fsevent 0.9.7
Using kramdown 1.9.0
Using liquid 3.0.6
Using mercenary 0.3.5
Using rouge 1.10.1
Using safe_yaml 1.0.4
Using jekyll-feed 0.3.1
Using mini_portile2 2.0.0
Using jekyll-paginate 1.1.0
Using jekyll-sitemap 0.10.0
Installing rdiscount 2.1.8 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/rdiscount-2.1.8
Installing redcarpet 3.3.3 with native extensions

Errno::EACCES: Permission denied @ dir_s_mkdir - /usr/lib/ruby/gems/2.3.0/extensions/x86_64-linux/2.3.0/redcarpet-3.3.3
Using terminal-table 1.5.2
Using bundler 1.12.5
An error occurred while installing RedCloth (4.2.9), and Bundler cannot
continue.
Make sure that `gem install RedCloth -v '4.2.9'` succeeds before bundling.
/usr/lib/ruby/gems/2.3.0/gems/bundler-1.12.5/lib/bundler/spec_set.rb:95:in `block in materialize': Could not find RedCloth-4.2.9 in any of the sources (Bundler::GemNotFound)
	from /usr/lib/ruby/gems/2.3.0/gems/bundler-1.12.5/lib/bundler/spec_set.rb:88:in `map!'
	from /usr/lib/ruby/gems/2.3.0/gems/bundler-1.12.5/lib/bundler/spec_set.rb:88:in `materialize'
	from /usr/lib/ruby/gems/2.3.0/gems/bundler-1.12.5/lib/bundler/definition.rb:140:in `specs'
	from /usr/lib/ruby/gems/2.3.0/gems/bundler-1.12.5/lib/bundler/definition.rb:185:in `specs_for'
	from /usr/lib/ruby/gems/2.3.0/gems/bundler-1.12.5/lib/bundler/definition.rb:174:in `requested_specs'
	from /usr/lib/ruby/gems/2.3.0/gems/bundler-1.12.5/lib/bundler/environment.rb:19:in `requested_specs'
	from /usr/lib/ruby/gems/2.3.0/gems/bundler-1.12.5/lib/bundler/runtime.rb:14:in `setup'
	from /usr/lib/ruby/gems/2.3.0/gems/bundler-1.12.5/lib/bundler.rb:95:in `setup'
	from /usr/lib/ruby/gems/2.3.0/gems/jekyll-3.2.1/lib/jekyll/plugin_manager.rb:36:in `require_from_bundler'
	from /usr/lib/ruby/gems/2.3.0/gems/jekyll-3.2.1/exe/jekyll:9:in `<main>'
sh: can't kill pid 455: No such process
```

It seems that the "jekyll" user does not have permission to install these gems.

## Making it work

I was looking for a non destructive way to fix the issue, so I created a new Docker image starting from the official jekyll/jekyll:pages image.

I added this Dockerfile to my project:

```dockerfile
FROM jekyll/jekyll:pages

COPY Gemfile* /srv/jekyll/

WORKDIR /srv/jekyll

RUN apk update && \
	apk add ruby-dev gcc make curl build-base libc-dev libffi-dev zlib-dev libxml2-dev libgcrypt-dev libxslt-dev python

RUN bundle config build.nokogiri --use-system-libraries && \
	bundle install

EXPOSE 4000
```

This Dockerfile will copy `Gemfile` and `Gemfile.lock` into your custom image and run the installation of the gems when building the image. The Linux packages (the ones added with apk) are the ones required for the installation of the Gems.

I Googled every single error message along every single build and added the Linux packages and gem config for Nokogiri to make this work. So this is basically the result of a try and fail approach.

As I said I have two sites and this config works with both of them.

In case you still get issues you may want to add more packages to your specific case.

In order to build and run the image I added a docker-compose.yml file to my project with the following content:

```yml
version: "2"
services:
  takacsmark:
    build: .
    ports:
      - "4000:4000"
    volumes:
      - .:/srv/jekyll
    command: bundle exec jekyll serve --drafts --config _config.yml,_config_dev.yml
```

If I execute `docker-compose up -d` from terminal, the image will be built and the site comes up on `http://localhost:4000`.

[If you wanna check out the entire source, please feel free to read it on GitHub.](https://github.com/takacsmark/takacsmark.github.io){:target="\_blank"}

Please note that I'm using stuff like Gulp on my blog, but I haven't added Gulp to the Dockerfile yet, so you won't find it there.
