.PHONY: default

default: run

run:
	bundle exec jekyll serve --livereload

build:
	jekyll build

docker_run:
	docker build -t kanca-docs-07062023-1 .
	docker run -d -p 85:4000 kanca-docs-07062023-1