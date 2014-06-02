#!/bin/bash

echo
echo M8tro 3.1.1-alpha
echo =================

if [ -z $1 ]
then
	for THEME in 'src/themes'/*
	do
		THEME_BASE=$(basename $THEME)
		echo Compiling style-sheet for $THEME_BASE, please wait.
		lessc -x src/themes/$THEME_BASE/build.less dist/$THEME_BASE.min.css
	done
else
	THEME=$1
	echo Compiling style-sheet for $THEME, please wait.
	lessc -x src/themes/$THEME/build.less dist/$THEME.min.css
fi
echo Completed.