#!/bin/sh
# echo (PWD)

# fd .re | while read filename; do node_modules/.bin/bsc -format --parse re --print res $filename >${filename%.re}.res; done
cat node_modules/.bin/bsc

var=$(pwd)
echo "The currerent working directory $var."
list="$(find . -name \*.mli)"
echo ".mli files are $list."
find . -name "*.mli"| while read -r filename; do refmt $filename >"${filename%.mli}".rei; done
find . -type f -name "*.mli" -print0 | xargs rm
list="$(find . -name \*.rei)"
echo "new .rei files are $list"
