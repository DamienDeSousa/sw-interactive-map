MAKE=make

SHELL := /bin/bash

CURRENT_UID := $(shell id -u)
CURRENT_GID := $(shell id -g)
CURRENT_PWD := $(shell pwd)

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

up: ## start containers
	docker-compose up -d --build

down: ## stop containers
	docker-compose down
