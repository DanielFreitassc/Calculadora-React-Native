```
sudo apt update

```
```
sudo apt install nodejs npm

```
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

```
```
sudo apt update
sudo apt install npm


```
```
npm install -g next


```
```
npm install next


```
```
npx next dev


```
```

nvm install stable

```
```
nvm use stable


```
```
sudo ln -s /etc/nginx/sites-available/meusite /etc/nginx/sites-enabled/


```
```
cd /caminho/para/sua/aplicacao
npm install
npm run dev
``
```
sudo nano /etc/nginx/sites-available/lpa-frontend
```
```
server {
    listen 80;
    listen [::]:80;

    server_name lpa-frontend;

    location / {
        proxy_pass http://127.0.0.1:3000; # Endereço onde o Next.js está rodando (porta 3000)
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```
