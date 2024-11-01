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

2. Run the script
```
k6 run main.js
```
