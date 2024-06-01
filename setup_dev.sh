cd "$(dirname "$0")"

docker compose -f "docker-compose.common.yml" down --remove-orphans
docker compose -f "docker-compose.dev.yml" down --remove-orphans

docker compose  -f "docker-compose.common.yml" up -d --build
docker compose  -f "docker-compose.dev.yml" up -d --build nextjs
docker compose  -f "docker-compose.dev.yml" up -d --build proxy