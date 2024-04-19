FROM python:3.9
COPY requirements.txt .
RUN pip install flask
RUN pip install flask_mysqldb
RUN pip install cloudinary
WORKDIR /usr/app/src
COPY api.py .