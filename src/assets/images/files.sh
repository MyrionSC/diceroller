#!/bin/bash
FILES=./*.jpg
I=0

for f in $FILES
do
  mv $f img$I.jpg
  echo img$I.jpg
  ((I=I+1))
done
