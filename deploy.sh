#!/usr/bin/env bash

tar -cf diceroller.tar dist
rsync -v diceroller.tar marand@192.168.87.177:/var/www/html/apps
ssh marand@192.168.87.177 "cd /var/www/html/apps && tar -xf diceroller.tar && mv dist diceroller && rm diceroller.tar"
rm diceroller.tar

