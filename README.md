# Configuração do servidor next no Linux Mint
## Este é um guia passo a passo para configurar o servidor Next com Nginx no Linux Mint OS.
`
Observação, para facilitar o uso do terminal do linux Mint OS, Copie o codigo e cole no terminal usando as teclas de atalho Ctrl + Insert do teclado.
`
#  Use o atalho abaixo para abrir o Terminal:
```
Ctrl + Alt + T
```
#  Use o comando abaixo para Instalar o Nginx no Mint 21.X.
```
sudo apt install git vim perl python2 python3 unzip ghostscript zlib1g zlib1g-dev apt-transport-https
```
# Use o comando abaixo para Habilitar o NGINX 
```
sudo systemctl daemon-reload
sudo systemctl enable nginx
sudo systemctl start nginx
```
# Vamos configurar o servidor
## primeiramente vamos desativar a configuração padrão do servidor para seu site ser achado. Insira um `#` no começo de todas as linhas codigo,  Use o comando abaixo. 
````
sudo nano /etc/nginx/sites-available/default
````
___
# Depois disso podemos iniciar.
___
## Use o comando abaixo para ir até a configuração do seu site.
````
sudo nano /etc/nginx/sites-available/meusite.com
````
___
## Cole isso dentro da configuração do servidor.
### Altere lpa-frontend pelo nome desejado.
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
___
### Para sair e salvar: CTR + x  >>> Digite "S" >>> ENTER
___
# Testar se as configurações foram feitas.
```
sudo nginx -t
```
# Criar um link simbólico para o arquivo de configuração no diretório `sites-enabled`: 
```
sudo ln -s /etc/nginx/sites-available/meusite.com /etc/nginx/sites-enabled/
```
___
## Verificar se não há erros de sintaxe no arquivo de configuração do NGINX:
```
sudo nginx -t
```
___
## Anote seu endereço IP iremos precisar.
```
ip addr show
```
___
## Editar o arquivo `/etc/hosts`:
```
sudo nano /etc/hosts
```
___
## Adicionar uma linha ao arquivo `/etc/hosts` com o endereço IP e o nome do site, obs:só funcionara procurar o nome na maquina que foi configurado assim, as demais sera necessario ou repetir essa configuração ou procurar por endereço de ip:
## (Substitua `<IP_ADDRESS>` pelo endereço IP do seu servidor)
```
<IP_ADDRESS> meusite.com
```
___
___
## Salvar e fechar o arquivo `/etc/hosts`.

### Para sair e salvar: CTR + x  >>> Digite "S" >>> ENTER
___
# Por fim coloque seu site com o nome correto dentro da pasta `/var/www/meusite.com/aqui: index.html ou index.php` do seu site
## Alem disso para permitir o usuario enviar arquivos  
### Substitua simuladosatc.com pelo nome do diretorio faça isso a cada diretorio novo.
```
sudo chown -R www-data:www-data /var/www/simuladosatc.com/uploads
sudo chown -R www-data:www-data /var/www/simuladosatc.com
sudo chmod -R 755 /var/www/simuladosatc.com/uploads
sudo chmod -R 755 /var/www/simuladosatc.com/
sudo chmod -R 777 /var/www/simuladosatc.com/receber.php
```
# Reincie o nginx para garantiar que tudo funcione.
___
```
sudo systemctl restart nginx
```
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
```
