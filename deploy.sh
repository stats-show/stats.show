#!/bin/bash
chmod 600 id_rsa
eval `ssh-agent -s`
ssh-add id_rsa
ssh-add -l

gh-pages -d build -r git@github.com:StarRatio/star-ratio.git