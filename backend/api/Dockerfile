FROM python:3.9
COPY requirements.txt .
RUN pip install flask
RUN pip install flask_mysqldb
WORKDIR /usr/app/src
COPY api.py .