apt-get update && apt-get install -y python3.11 python3-pip
pip3 install -r requirements.txt
python3 manage.py collectstatic --noinput