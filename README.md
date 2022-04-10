# Prerequiste

Make sure you have [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed locally.

# Installation

Execute the following cli command for Linux OS:
```console
foo@bar:~$ make up
```

Or this one for Windows OS:
```console
foo@bar:~$ docker-compose up -d --build
```

Now the project is installed and operating. You can query the api at [localhost](http://localhost:3000).

# Architecture

## Structure

`routes` directory contains routes to query through http.  
`controllers` directory contains logic behind routes queried.  
`models` directory contains data representation.  
