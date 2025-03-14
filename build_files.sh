#!/bin/bash

# Update system packages
apt-get update && apt-get install -y python3.11 python3-pip

# Install dependencies
pip3 install -r requirements.txt

# Collect static files
python3 manage.py collectstatic --noinput
