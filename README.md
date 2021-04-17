# echo-server

An example expressjs server that will respond to
all requests with a body containing:

1. The method
2. The url
3. The request headers
4. The request query
5. The request body

Built to test a proxy, but could be useful diagnostic tool.

Example usage with curl:

```
% curl  -H 'your_header:here' http://localhost:3000/foo/bar
{"method":"GET","url":"/foo/bar","headers":{"host":"localhost:3000","user-agent":"curl/7.64.1","accept":"*/*","your_header":"here"},"query":{},"body":{}}

% curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/data
{"method":"POST","url":"/data","headers":{"host":"localhost:3000","user-agent":"curl/7.64.1","accept":"*/*","content-type":"application/json","content-length":"34"},"query":{},"body":{"key1":"value1","key2":"value2"}}
```

## Usage

Clone the repository then run:

```
npm install
npm start
```

The server will now launch on port 3000. You can override the port with the `PORT` environment variable - e.g.

```
PORT=12345 npm start
```
