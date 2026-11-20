#!/bin/sh
set -e

# Create or update the database tables before starting the server
python manage.py migrate --noinput

# Collect the static files of the Django admin and DRF
python manage.py collectstatic --noinput

exec "$@"