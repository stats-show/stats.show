#!/bin/bash
git config --global user.name "$USER_NAME"
git config --global user.email "$USER_EMAIL"
ssh-add id_rsa
npm run deploy