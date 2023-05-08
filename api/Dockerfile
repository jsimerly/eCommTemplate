FROM python:3.10-slim-buster

RUN apt-get update && \
    apt-get install -y libpq-dev gcc

WORKDIR /api

COPY . /api

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

ENV PYTHONUNBUFFERED=1 \
    DJANGO_ENV=production

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

