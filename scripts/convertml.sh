#!/bin/sh
# echo (PWD)

# fd .re | while read filename; do node_modules/.bin/bsc -format --parse re --print res $filename >${filename%.re}.res; done
cat node_modules/.bin/bsc

var=$(pwd)
echo "The currerent working directory $var."
list="$(find . -name \*.ml)"
echo ".re files are $list."
find . -name "*.ml"| while read -r filename; do refmt "$filename" >"${filename%.ml}".re; done
# find . -type f -name "*.ml" -print0 | xargs rm
$list -print0 | xargs rm
list="$(find . -name \*.re)"
echo "new .rei files are $list"
