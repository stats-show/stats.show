#!/bin/bash
chmod 600 id_rsa
eval `ssh-agent -s`
ssh-add id_rsa
ssh-add -l

REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}

gh-pages -d build -r $SSH_REPO