#!/bin/sh
# echo (PWD)

# fd .re | while read filename; do node_modules/.bin/bsc -format --parse re --print res $filename >${filename%.re}.res; done
# cat node_modules/.bin/bsc

find . -type f -name "*.mli" -print0
find . -type f -name "*.ml" -print0
# find . -type f -name "*.mli" -print0 | xargs rm
find . -type f -name "*.ml" -print0 | xargs rm

