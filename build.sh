#!/bin/bash

echo $1
if [ -z "$1" ]
then
	THEME=m8tro
else
	THEME=$1
fi

echo Compiling style sheet for $THEME, please wait... 
lessc -x src/themes/$THEME/build.less dist/$THEME.min.css