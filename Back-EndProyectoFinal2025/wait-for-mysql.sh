#!/bin/bash
# filepath: ./Back-EndProyectoFinal2025/wait-for-mysql.sh

echo "Esperando a que MySQL esté disponible..."
while ! nc -z mysql-db 3306; do
  sleep 2
done
echo "MySQL está listo, iniciando Django..."
exec "$@"