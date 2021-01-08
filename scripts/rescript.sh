#!/bin/sh
dir=$PWD
echo "$dir"
list="$(find "$dir" -name \*.re)"
echo "$list"
# for f in "$dir"/**/*.re; do node_modules/.bin/bsc -format "$f" > "${f%.re}".res && rm "$f"; done;
for f in $list; do node_modules/.bin/bsc -format "$f" > "${f%.re}".res && rm "$f"; done;
