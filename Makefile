.PHONY: default

default: run

run:
	 cd docs && bundle exec jekyll serve --port 3300

