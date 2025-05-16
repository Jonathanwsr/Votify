# Votify

**Votify** é uma aplicação web para gerenciamento de votações. Com ela, é possível criar e gerenciar sessões de votação, pautas (agendas) e realizar operações de autenticação e recuperação de senha.

O sistema é dividido em dois módulos:
- **Backend:** Desenvolvido em Spring Boot com Java 21
- **Frontend:** Desenvolvido em Angular CLI 19
- **Banco de dados:** PostgreSQL

---

## Funcionalidades

- CRUD de sessões de votação
- CRUD de pautas (agendas)
- Autenticação com login e senha
- Recuperação de senha via e-mail
- Validação e autorização de usuários
- Interface responsiva com Angular

---
# CONTROLE DE ACESSO

### Cada tipo de usuário tem sua funçoes  pre definidas com suas repectivas telas. 

## 🔓 Acesso público (sem autenticação)
Qualquer usuário (mesmo não autenticado) pode:

Fazer POST em api/v1/auth/** → usado para login, registro, etc.

Acessar o Swagger e a documentação da API:

/swagger-ui.html

/v3/api-docs/**

/swagger-ui/**

/swagger-resources/**

/webjars/**

## 👤 ASSOCIATE
Usuários com a autoridade ASSOCIATE podem:

 Fazer GET em:

- api/v1/sessions/** → listar ou visualizar sessões.

- api/v1/agendas/** → listar ou visualizar pautas/agendas.

- Acessar (qualquer método) em:

- api/v1/votes/** → votar (possivelmente POST/GET).

## 👥 ORGANIZER
Usuários com a autoridade ORGANIZER podem:

- Fazer qualquer requisição (GET, POST, PUT, DELETE, etc.) em:

- api/v1/sessions/** → criar, editar, excluir ou visualizar sessões.

- api/v1/agendas/** → criar, editar, excluir ou visualizar pautas/agendas.

- Acessar (qualquer método) em:

- api/v1/users/** → gerenciamento de usuários (junto com ADMIN).

## 🛠️ ADMIN
Usuários com a autoridade ADMIN podem:

- Acessar (qualquer método) em:

- api/v1/users/** → gerenciamento completo de usuários.

## 🔒 Qualquer outra requisição
Requer autenticação, mas será bloqueada se o usuário não tiver permissão específica definida acima.


## Tecnologias Utilizadas

### Backend
- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL Driver
- JWT para autenticação
- Java Mail Sender (para recuperação de senha)

### Frontend
- Angular CLI 19
- Angular Material
- RxJS
- Bootstrap (opcional)

### Banco de Dados
- PostgreSQL

---

## Pré-requisitos

Antes de iniciar o projeto, verifique se você tem os seguintes itens instalados:

- [Java 21 JDK](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
- [Node.js (versão 18+)](https://nodejs.org/)
- [Angular CLI 19](https://angular.io/cli)
- [PostgreSQL (versão 14+)](https://www.postgresql.org/download/)
- [Maven](https://maven.apache.org/) ou [Gradle](https://gradle.org/)

---

## Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/votify.git
cd votify


---

2. Configurar o backend

a. Acesse o diretório backend:

cd backend

b. Configure o arquivo application.properties ou application.yml:

spring.datasource.url=jdbc:postgresql://localhost:5432/votify
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.mail.host=smtp.seuprovedor.com
spring.mail.port=587
spring.mail.username=seuemail@provedor.com
spring.mail.password=suasenha
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

c. Rodar o backend

./mvnw spring-boot:run


---

3. Configurar o frontend

a. Acesse o diretório frontend:

cd ../frontend

b. Instale as dependências:

npm install

c. Configure o ambiente (src/environments/environment.ts):

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};

d. Inicie o frontend:

ng serve

A aplicação estará disponível em http://localhost:4200.


---

Scripts úteis

Backend

./mvnw clean install      # Compila e instala dependências
./mvnw spring-boot:run    # Inicia o servidor backend

Frontend

ng serve                  # Inicia o servidor Angular
ng build                  # Gera a build de produção


---

Estrutura do Projeto

votify/
├── backend/
│   └── src/main/java/... (Spring Boot backend)
├── frontend/
│   └── src/app/... (Angular frontend)


---

Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request.


---

Licença

Este projeto está licenciado sob a MIT License.

---





