#!/bin/bash

if [ -z "$TOGETHER_API_KEY" ] || [ -z "$TOGETHER_API_URL" ]; then
    echo "Error: Required environment variables not set"
    echo "Please set both TOGETHER_API_KEY and TOGETHER_API_URL"
    exit 1
fi

for i in {1..20}; do
    curl -s -X POST \
        "$TOGETHER_API_URL" \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $TOGETHER_API_KEY" \
        -d '{
            "model": "test/test-worker",
            "max_tokens": 1,
            "details": true,
            "prompt": "a horse is a horse",
            "stream_tokens": false,
            "temperature": 0.1,
            "delay": "0.0",
            "enforceV2RateLimit": true,
            "input_size": [10, 10],
            "output_size": [10, 10]
        }'
    sleep 1
done