docker compose -f "compose.dev.yaml" up -d --build 

cd db
bash register_db_to_connector.bash