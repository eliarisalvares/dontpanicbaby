#!/usr/bin/sh

sudo apt update && sudo apt upgrade -y
sudo apt install gcc g++ make openssh-server net-tools build-essential -y
curl -sL https://deb.nodesource.com/setup_17.x | sudo bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn nodejs -y
yarn
yarn build
sudo yarn global add http-server --prefix /usr/local
x-terminal-emulator -e yarn start
firefox http://localhost:8080 &
cd frontend && http-server
