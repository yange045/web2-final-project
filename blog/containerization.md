---
title: Containerization
description: A reference guide for common Docker commands and Docker Compose usage.
author: Eliy Yang
published: 2026-02-20
---

# Containerization

## Images
- `docker pull image_name` - Downloads an image.
- `docker run image_name` - Create and starts a container for an image.

## Containers
- `docker ps` - Lists all running containers.
- `docker ps -a` - Lists all containers including stopped ones.
- `docker stop container_name` - This will stop that container.
- `docker start container_name` - This will start that container.
- `docker rm container_name` - This will remove that container.
- `docker exec -it container_name` - This will allow you to enter that container.

## Docker Compose
- `docker compose up -d` - This starts all services within a docker-compose.yml.
- `docker compose down` - This will stop and remove all services.
