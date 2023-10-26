# プロジェクト名 - Laravel, Next.js, TypeScript, Tailwind Template

## はじめに
このプロジェクトは、Laravel、Next.js、TypeScript、およびTailwind CSSを使用してWebアプリケーションの構築を迅速に開始するのに役立つDocker化されたテンプレートです。

## システム要件
- Docker: Dockerがインストールされていることを確認してください。インストール手順は[Docker公式ウェブサイト](https://www.docker.com/get-started)で見つけることができます。

## スタート
1. このリポジトリをローカル環境にクローンします：
   ```bash
   git clone https://github.com/cfwin/docker_laravel_nextjs_typescript_tailwind_template.git
   ```
2. プロジェクトディレクトリに移動します：
   ```bash
   cd docker_laravel_nextjs_typescript_tailwind_template
   ```
3. hostsファイルを編集し、host.docker.internalを127.0.0.1にマップします。テキストエディタでC:\Windows\System32\drivers\etc\hostsファイルを開き、次の行を追加します：
   ```plaintext
   127.0.0.1 host.docker.internal
   ```
4. Dockerコンテナをビルドおよび起動します：
   ```bash
   docker-compose up -d
   ```
5. Dockerコンテナに入ります：
   ```bash
   docker-compose exec app-api bash
   ```
6. Composerを使用して依存関係を更新します：コンテナ内でComposerを使用してLaravelプロジェクトの依存関係を更新します。次のコマンドを実行します：
   ```bash
   cd /src/backend/api
   composer update
   ```
   .env ファイルの末尾に以下の行を追加して、FRONTEND_URL と SANCTUM_STATEFUL_DOMAINS の設定を行います：
   ```plaintext
    FRONTEND_URL=http://host.docker.internal:8080
    SANCTUM_STATEFUL_DOMAINS=host.docker.internal
   ```
   これにより、これらの環境変数が指定した値に設定されます。
7. Laravelプロジェクトのディレクトリに入ります：最初にapp-apiサービスのコンテナにアクセスします。次のコマンドを実行してください：
    - Laravelアプリケーション：ブラウザで http://localhost:8080/ を訪れます。
    - Next.jsアプリケーション：ブラウザで http://localhost:8300/ を訪れます。
    - ハローページ：ブラウザで http://localhost:8300/hello を訪れます。

## 開発

これでプロジェクト内で開発を開始できます。Laravel、Next.js、TypeScript、およびTailwind CSSの関連するコードファイルはそれぞれのディレクトリにあります。

## 停止とクリーンアップ

Dockerコンテナを停止し、リソースをクリーンアップするには、次のコマンドを実行します：

   ```bash
   docker-compose down
   ```
## 貢献

プロジェクトへの貢献は歓迎します。貢献ガイドラインを確認し、プルリクエストを提出してください。


## 問題とフィードバック

問題が発生した場合やフィードバックがある場合は、GitHubで問題を作成してください。




