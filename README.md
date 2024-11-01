# Instructions

1. Install k6
```
brew install k6
```

2. Set up API key
```
export TOGETHER_API_KEY=<your-api-key>

```

3. Set up API URL, choose one of the following:
```
export TOGETHER_API_URL='https://api-edge.together.ai/v1/chat/completions'

# If you are on US West, use this url
export TOGETHER_API_URL='https://curiouscrow.api.together.ai/v1/chat/completions'

# If you are on US East, use this url
export TOGETHER_API_URL='https://happypiglet.api.together.ai/v1/chat/completions'
```

4. Run the script
```
k6 run main.js
```

You should see the output like this:

Run from Bay Area to 'https://api-edge.together.ai/v1/chat/completions'. Notice the median latency (`http_req_duration` `med`) is **57.22ms**
```
k6 run main.js                                                            

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: main.js
        output: -

     scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
              * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


     ✓ status is 200

     checks.........................: 100.00% 400 out of 400
     data_received..................: 301 kB  12 kB/s
     data_sent......................: 114 kB  4.6 kB/s
     http_req_blocked...............: avg=128.71µs min=0s      med=1µs     max=51.03ms  p(90)=2µs     p(95)=2µs    
     http_req_connecting............: avg=57.99µs  min=0s      med=0s      max=23.2ms   p(90)=0s      p(95)=0s     
     http_req_duration..............: avg=61.73ms  min=44.62ms med=57.22ms max=216.25ms p(90)=78.66ms p(95)=88.53ms
       { expected_response:true }...: avg=61.73ms  min=44.62ms med=57.22ms max=216.25ms p(90)=78.66ms p(95)=88.53ms
     http_req_failed................: 0.00%   0 out of 400
     http_req_receiving.............: avg=444.83µs min=45µs    med=313µs   max=3.54ms   p(90)=918.4µs p(95)=1.3ms  
     http_req_sending...............: avg=308µs    min=50µs    med=303µs   max=1.36ms   p(90)=369.1µs p(95)=427µs  
     http_req_tls_handshaking.......: avg=62.62µs  min=0s      med=0s      max=25.04ms  p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=60.98ms  min=44.24ms med=56.46ms max=215.43ms p(90)=78.08ms p(95)=87.64ms
     http_reqs......................: 400     16.042578/s
     iteration_duration.............: avg=24.93s   min=24.93s  med=24.93s  max=24.93s   p(90)=24.93s  p(95)=24.93s 
     iterations.....................: 1       0.040106/s
     vus............................: 1       min=1          max=1
     vus_max........................: 1       min=1          max=1


running (00m24.9s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m24.9s/10m0s  1/1 iters, 1 per VU
```

Run from Bay Area to 'https://curiouscrow.api.together.ai/v1/chat/completions'. Notice the median latency (`http_req_duration` `med`) is **19.55ms**
```
k6 run main.js                                                                   

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: main.js
        output: -

     scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
              * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


     ✓ status is 200

     checks.........................: 100.00% 400 out of 400
     data_received..................: 297 kB  34 kB/s
     data_sent......................: 115 kB  13 kB/s
     http_req_blocked...............: avg=123.6µs  min=0s      med=1µs     max=49.21ms  p(90)=1µs      p(95)=1µs     
     http_req_connecting............: avg=53.22µs  min=0s      med=0s      max=21.29ms  p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=21.54ms  min=14ms    med=19.55ms max=173.48ms p(90)=26.79ms  p(95)=28.99ms 
       { expected_response:true }...: avg=21.54ms  min=14ms    med=19.55ms max=173.48ms p(90)=26.79ms  p(95)=28.99ms 
     http_req_failed................: 0.00%   0 out of 400
     http_req_receiving.............: avg=311.68µs min=9µs     med=92µs    max=6.32ms   p(90)=631.6µs  p(95)=1.03ms  
     http_req_sending...............: avg=189.61µs min=15µs    med=212µs   max=967µs    p(90)=303.09µs p(95)=339.19µs
     http_req_tls_handshaking.......: avg=60.3µs   min=0s      med=0s      max=24.12ms  p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=21.04ms  min=13.77ms med=19.2ms  max=173.18ms p(90)=26.23ms  p(95)=27.37ms 
     http_reqs......................: 400     45.756104/s
     iteration_duration.............: avg=8.74s    min=8.74s   med=8.74s   max=8.74s    p(90)=8.74s    p(95)=8.74s   
     iterations.....................: 1       0.11439/s
     vus............................: 1       min=1          max=1
     vus_max........................: 1       min=1          max=1


running (00m08.7s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m08.7s/10m0s  1/1 iters, 1 per VU
```
