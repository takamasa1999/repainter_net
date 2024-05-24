cd "$(dirname "$0")"

docker compose -f "docker-compose.common.yml" down
docker compose -f "docker-compose.prod.yml" down

docker compose -f "docker-compose.construction.yml" up -d --build
docker compose  -f "docker-compose.common.yml" up -d --build
docker compose  -f "docker-compose.prod.yml" up -d --build backend_prod frontend_prod
docker compose -f "docker-compose.construction.yml" down
docker compose  -f "docker-compose.prod.yml" up -d --build proxy_prod