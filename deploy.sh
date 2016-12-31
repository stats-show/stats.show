#!/bin/bash
chmod 600 id_rsa
eval `ssh-agent -s`
ssh-add id_rsa
ssh-add -l
npm run deploy