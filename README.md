YOU'RE SENDING DATA THAT PEOPLE DON'T CARE ABOUT.

Stop it.  With **connect-select**.

Connect select is [connect](https://github.com/senchalabs/connect)
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

    "beer"



