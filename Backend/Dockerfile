# ---------- Stage 1: build the Python dependencies ----------
FROM python:3.12-slim AS builder

ENV PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

# Tools and headers needed to compile mysqlclient
RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential pkg-config default-libmysqlclient-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /build
COPY requirements.txt .
RUN pip wheel --wheel-dir /wheels -r requirements.txt


# ---------- Stage 2: runtime image ----------
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

# Only the runtime client library of MySQL/MariaDB (no compilers in the final image)
RUN apt-get update \
    && apt-get install -y --no-install-recommends libmariadb3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /wheels /wheels
RUN pip install /wheels/* && rm -rf /wheels

# Application code
COPY . .

# Non-root user; media/ is mounted as a volume for uploaded files
RUN useradd --create-home --uid 1000 appuser \
    && mkdir -p /app/media /app/staticfiles \
    && chown -R appuser:appuser /app \
    && chmod +x /app/entrypoint.sh
USER appuser

EXPOSE 8000

ENTRYPOINT ["/app/entrypoint.sh"]
# Replace "config" with the name of your Django project folder (the one that contains wsgi.py)
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3", "--timeout", "60"]