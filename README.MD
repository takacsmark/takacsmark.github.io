# Mark's blog

This is the GitHub Pages repo of my blog on [https://takacsmark.com](https://takacsmark.com).

My blog is a tech educational blog, so I turn my blog's GitHub repo into educational material with this readme.

## Key features

This is a regular GitHub Pages blog, I added a few notable features that you may find useful:

- the blog is served with Docker during development
- development tools based on Gulp are also Dockerized

## Usage

To start the blog in development mode issue the following command:

```termnial
docker-compose up -d
```

This will start up a Jekyll server, it will build the site and serve it on [http://localhost:4000](http://localhost:4000).

To follow the logs use the following command:

```terminal
docker-compose logs -f
```
