#!/bin/bash

if [ ! -d /usr/local/src ]
then
    echo "/usr/local/src directory is not exist"
    exit 1
fi

export COMAGIC_ENV_USER=""
action=''

while [ -n "$1" ]
do
    if [ "$1" = "-u" ]
    then
        export COMAGIC_ENV_USER=$2
        shift
    elif [ "$1" = "-s" ]
    then
        export AMOCRM_WIDGET_SERVER_DOMAIN=$2
        shift
    elif [ "$1" = "-e" ]
    then
        export AMOCRM_WIDGET_EVENTS_WS_DOMAIN=$2
        shift
    else
        action=$1
    fi

    shift
done

if [ ! -d "/usr/local/src/amocrm_widget" ]
then
    cd /usr/local/src
    git clone git@git.dev.uis.st:web/amocrm_widget.git
fi

if [ ! -d "/usr/local/src/amocrm_widget/node_modules" ]
then
    install-dependencies

    if [ "$action" = "production" ]
    then
        build-production
    else
        build
    fi

    if [ "$action" = "build" || "$action" = "production" ]
    then
        action='exit'
    fi
fi

cd /usr/local/src/amocrm_widget

if [ -z "$action" ]
then
    bash
else
    if [ "$action" = "runserver" ]
    then
        runserver
        bash
    elif [ "$action" = "build" ]
    then
        build
    elif [ "$action" = "production" ]
    then
        build-production
    elif [ "$action" = 'exit' ]
    then
        exit 0
    else
        bash
    fi
fi
