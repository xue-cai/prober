import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

const url = __ENV.TOGETHER_API_URL
const body = {
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
}

export function completion_request() {
    const res = http.post(url, 
        JSON.stringify(body),
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${__ENV.TOGETHER_API_KEY}`
            }
        }
      );
      check(res, { 
        'status is 200': (res) => res.status === 200,
      });
}


export default function main() {
    for (let i = 0; i < 400; i++) {
        completion_request();
    }
  }