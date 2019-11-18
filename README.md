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


FAQ
---

1. How to use defined build name?
```sh
BUILD_NAME=huge_build SAUCE_USER={username} npm test
```

2. How to run couple small builds?
```sh
for i in {1..10}; do BUILD_NAME=huge_build SAUCE_USER={username} npm test; done
```

3. How to run test for all accounts?
```sh
for name in $(cat accounts.json | grep {some-prefix} | cut -d \" -f2); do SAUCE_USER=$name npm test; done
```

4. How to generate auth param for the private job?
```sh
JOB_ID={job_id} SAUCE_USER={username} node ./generate_auth.js
```

