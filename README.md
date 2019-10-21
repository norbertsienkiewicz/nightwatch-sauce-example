# nightwatch-sauce-example

1. create accounts.json file:
```json
{
  "settings": {
    "failing": "guineaFailing.js",
    "short": "guineaPig.js",
    "normal": "guineaPigLong.js",
    "long": "guineaPigVeryLong.js"
  },
  "data": {
    "SOME UNIQUE IDENTIFIER USER IN CLI COMMAND": {
      "disabled": false,
      "username": "SAUCE_USERNAME",
      "accessKey": "SAUCE_ACCESSKEY",
      "url": "ONDEMAND_URL"
    },
  }
}
```

2. run ginue pig tests: `SAUCE_USER=UNIQUE_IDENTIFIER npm test`
