#!/bin/bash
echo "Setting up GitHub user info"
git config --global user.name "$USER_NAME"
git config --global user.email "$USER_EMAIL"
echo "Setting up ssh key"
ssh-add id_rsa
echo "Executing npm run deploy"
npm run deploy