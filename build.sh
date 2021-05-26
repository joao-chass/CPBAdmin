echo "Atualizando projeto"

git pull

echo "Atualizando pacotes"

npm i

echo "Build do projeto"

ng build --prod

echo "Reiniciando servidor..."

service nginx restart

echo "Status Pm2"

pm2 status
