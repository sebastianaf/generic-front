# generic-ui

Quickstart web user interface with designed using React, Tailwind and preconfigured with Docker.

## Requirements

This code is built using React and other packages (please see the `package.json` for more info).

To run this project make sure to install [Docker](https://docs.docker.com/).

Now let's follow the next steps.

### 1.Create environment variables

Rename the `.env.example` file to `.env` this variables will be used by the containers.

### 2.Change `org` and `project` names

It's recommend to change all the names in files and lines (in `docker-compose.yml` and `Dockerfile`'s files) named with `org` and `project` with your own organization name and project name.

### 3. Deploy

At the end just type

```
docker build -t org-project-ui
```

This commands will build the Docker image with the project, after `docker run` it can be access it thought port specified in `UI_PORT` environment variable.

## Folder contents

```
See the repo content.
```