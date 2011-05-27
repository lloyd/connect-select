## YOU'RE SENDING LOTS OF DATA THAT PEOPLE DON'T CARE ABOUT.

Stop it.

connect-select is [connect](https://github.com/senchalabs/connect)
middleware that allows the *API client* to provide a selector which
will filter JSON on the server.  Usage looks like this:

Request before connect-select:

    $ curl http://localhost/getjson
    {
      "somethingicarefor": "beer",
      "somethingidont": "war"
    }

Request after connect-select:

    $ curl http://localhost/getjson?select=.somethingicarefor
    ["beer"]

## How To Use It

1. npm install connect-select
2. add connect-select to your middleware stack, before your code that
   outputs JSON: `server.use(require('connect-select')());`
3. write JSON with `resp.writeJSON()`
4. Tell your api clients that they can provide a `select` GET parameter to any of your APIs.

If any of that is unclear, check out the example.

## License (ISC)

    Copyright (c) 2011, Lloyd Hilaiel <lloyd@hilaiel.com>
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
