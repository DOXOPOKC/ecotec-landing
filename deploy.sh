#!/usr/bin/env sh

TAG=$1
MODE=$2

# остановить публикацию при ошибках
set -e

# сборка
npm run build --mode ${MODE}

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git tag -a ${TAG} -m 'Version '${TAG}

git push -f git@github.com:DOXOPOKC/ecotec-landing.git master:gh-pages --follow-tags

cd -