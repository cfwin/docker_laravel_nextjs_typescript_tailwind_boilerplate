# 项目名称 - Laravel, Next.js, TypeScript, Tailwind Template

## 文档
- [English](/README.md)
- [中文](/docs/ZH.md)
- [日本語](/docs/JA.md)

## 介绍
这个项目是一个Docker化的模板，旨在帮助您快速开始使用Laravel、Next.js、TypeScript和Tailwind CSS构建Web应用程序。

## System Requirements
- Docker: 确保您已经安装了Docker，可以在 Docker官方网站 上找到安装说明。

## 快速开始
1. 克隆此存储库到您的本地环境：
   ```bash
   git clone https://github.com/cfwin/docker_laravel_nextjs_typescript_tailwind_template.git
   ```
2. 进入项目目录：
   ```bash
   cd docker_laravel_nextjs_typescript_tailwind_template
   ```
3. 编辑您的 hosts 文件以将 host.docker.internal 映射到 127.0.0.1。您可以使用文本编辑器打开 C:\Windows\System32\drivers\etc\hosts 文件并添加以下行：
   ```plaintext
   127.0.0.1 host.docker.internal
   ```
4. 构建和启动Docker容器：
   ```bash
   docker-compose up -d
   ```
5. 进入Laravel项目目录：
   ```bash
   docker-compose exec app-api bash
   ```
6. 使用Composer更新依赖项：在容器内部，使用Composer更新Laravel项目的依赖项。运行以下命令：
   ```bash
   cd /src/backend/api
   composer update
   cp .env.example .env
   php artisan key:generate
   ```
   更新 .env 文件的配置：
   ```plaintext
   # Update
   DB_CONNECTION=mysql
   DB_HOST=app-mysql
   DB_PORT=3306
   DB_DATABASE=app
   DB_USERNAME=app
   DB_PASSWORD=password
   
   REDIS_HOST=app-redis
   REDIS_PASSWORD=null
   REDIS_PORT=6379
   
   # Add
   FRONTEND_URL=http://host.docker.internal:8080
   SANCTUM_STATEFUL_DOMAINS=host.docker.internal
   ```
   这会将这些环境变量设置为指定的值。
   
7. 安装并运行 Next.js:

   现在，让我们设置并运行 Next.js 应用程序。
   
   - 运行以下命令以进入 Next.js 项目目录：
   ```bash
   docker-compose exec app-front bash
   ```
   - 进入 Next.js 项目目录：
   ```bash
   cd /usr/src/app
   ```
   - 安装所需的依赖项：
   ```bash
   npm install
   ```
   - 启动 Next.js 开发服务器：
   ```bash
   npm run dev
   ```

7. 进入Laravel项目目录：首先，访问 app-api 服务的容器。您可以通过运行以下命令来实现：
    - Laravel应用程序：在浏览器中访问 [http://localhost:8080/](http://localhost:8080/)
    - Next.js应用程序：在浏览器中访问 [http://localhost:8300/](http://localhost:8300/)
    - Hello页面：在浏览器中访问 http://localhost:8300/hello
    - Mailpit 应用程序: 在浏览器中访问 [http://localhost:8025/](http://localhost:8025/)
    - phpMyAdmin 应用程序: 在浏览器中访问 [http://localhost:8081/](http://localhost:8081/)

## 停止和清理

要停止Docker容器并清理资源，运行以下命令：
   ```bash
   docker-compose down
   ```
## 贡献

欢迎为该项目做出贡献。请查阅贡献指南并提交拉取请求。

## 问题和反馈

如果您遇到任何问题或有反馈意见，请在GitHub上创建问题。

