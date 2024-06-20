# controleDeEstoqueNdj

Documentação versao 1.0

instalar o nodejs versao 18.13.0 LTS

Inciando o projeto

mkdir ControleDeEstoqueNdj

############################################

npm install --global yarn

yarn init -y

yarn add typescript -D

yarn add express

yarn add @types/express -D

yarn add ts-node-dev -D

npx -p typescript tsc --init

yarn add express-async-errors

yarn add cors

yarn add @types/cors -D

######################################


yarn add prisma

yarn add @prisma/client

npx prisma init

npx prisma generate

possivel falha rodar 

npx yarn-upgrade-all

yarn add @prisma/client

npx prisma migrate reset

obs: depois do schema.prisma configurado
realizar o commando

yarn prisma migrate dev controle-de-estoque

#####################################

yarn add bcryptjs

yarn add jsonwebtoken

#####################################
upload

yarn add multer

yarn add @types/multer -D


####################################

yarn add swagger-ui-express

yarn add @types/swagger-ui-express -D

