YOU'RE SENDING LOTS OF DATA THAT PEOPLE DON'T CARE ABOUT.

Stop it.

connect-select is [connect](https://github.com/senchalabs/connect)
middleware that allows the *API client* to provide a selector which
will filter JSON on the server.  Usage looks like this:

Request before connect-select:

    curl http://localhost/getjson

    {
      "somethingicarefor": "beer",
      "somethingidont": "war"
    }

Request after connect-select:

    curl http://localhost/getjson?select=.somethingicarefor

    ["beer"]

## How To Use It

1. npm install connect-select
2. add connect-select to your middleware stack, before your code that
   outputs JSON.

     server.use(require('connect-select')());

3. write JSON with `resp.writeJSON()`
4. Tell your api clients that they can provide a `select` get parameter to any of your APIs. 

If any of that is unclear, check out the example.
