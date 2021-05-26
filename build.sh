git config credential.helper store

echo "Atualizando projeto"

git pull https://username:your_password@github.com/username/repo_name.git

# echo "Atualizando pacotes"

# npm i

echo "Build do projeto"

ng build --prod

echo "Reiniciando servidor..."

service nginx restart

echo "Status Pm2"

pm2 status
