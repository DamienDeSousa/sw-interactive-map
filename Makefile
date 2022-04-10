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

ps: ## show docker compose services which are running
	docker-compose ps

fix-permissions: ## fix ownership of project files
	sudo chown ${CURRENT_UID}:${CURRENT_GID} -R .

reboot: ## docker down containers, rm volumes and up containers again
	$(MAKE) down
	$(MAKE) up

db-co: ## Connect to database
	echo Todo

db-dump: ## Dump the magento database
	echo Todo

npm-install: ## npm install packages
	docker-compose exec node npm install

connect-mongo-service: ## connect to mongo service with bas
	docker-compose exec database bash

connect-node-service: ## connect to node service with bash
	docker-compose exec node bash
