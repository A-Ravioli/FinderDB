FROM python:3.9
EXPOSE 8000
WORKDIR app
COPY api.py /app
RUN pip install flask
RUN pip install flask_mysqldb
CMD python api.py