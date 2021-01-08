#!/bin/sh
dir=$PWD
echo "$dir"
for f in "$dir"/**/*.re; do node_modules/.bin/bsc -format "$f" > "${f%.re}".res && rm "$f"; done;
