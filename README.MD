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

## Gulp dev tools

Gulp development tools are used to minimize images that I add to the blog. Use the following command to start the development tools:

```terminal
docker-compose -f docker-compose.devtools.yml run gulp
```

This command will give you an interactive shell inside a `node` container that has Gulp pre-installed.

See the Compose file, `docker-compose.devtools.yml` and `gulpfile.js` for further details.
