# 3.6.2 is the working version
FROM jekyll/jekyll:latest

COPY Gemfile /srv/jekyll
RUN bundle install
