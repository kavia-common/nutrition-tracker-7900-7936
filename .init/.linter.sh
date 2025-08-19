#!/bin/bash
cd /home/kavia/workspace/code-generation/nutrition-tracker-7900-7936/nutrition_tracker_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

