**`config/*`と`.env`は gitignore に必ず入れる**

# env

dotenv を使用して  環境変数を作成している。  
.env を参照する 。

## config/.env.develop

ロ ー カル開発の環境情報を入れる

## config/.env.production

本番と同じ環境情報を入れる

# command

## gs:build,gs:develop

使用しない

## build

デプロイする際に使用する

## develop:dev

開発する際に使用する

## develop:prod

本番と同じ環境を手元で再現する

## explore

graphiql みたいな画面を起動する

## env-develop,env-production

config 以下の env 情報をプロジェクト直下の`.env`にコピ ー する

## commit

コミットするときに使用する

## format

`package.json`のフォ ー マット
