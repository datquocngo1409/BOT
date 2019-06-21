#!/bin/bash
 
myscript(){
   node main.js
}
 
until myscript; do
        echo Script main.js has been crashed with exit code $?. Restart echo now!
        sleep 1
done
