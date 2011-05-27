/**
 * An example connect based webserver that uses the connect-select module.
 *
 * See LICENSE file for licensing information.
 */

// you can remove this if you've installed connect-select
require.paths.unshift("../src");

const   connect = require('connect'),
  CSEL = require('connect-select');

var server = connect.createServer()
    .use(connect.logger())
    .use(CSEL())
    .use(function(req, resp, next) {
        // when you include connect-select, there is a new writeJSON method added to
        // the response object.  Use it.
        resp.writeJSON({
            name: {
                first: "Lloyd",
                last: "Hilaiel"
            },
            favoriteColor: "yellow",
            languagesSpoken: [
                {
                    language: "Bulgarian",
                    level: "advanced"
                },
                {
                    language: "English",
                    level: "native"
                },
                {
                    language: "Spanish",
                    level: "beginner"
                }
            ],
            seatingPreference: [
                "window",
                "aisle"
            ],
            drinkPreference: [
                "whiskey",
                "beer",
                "wine"
            ],
            weight: 172
        });
        resp.end();
    });

server.listen(60000, "127.0.0.1");
var a = server.address();
console.log("Server started on: http://" + a.address + ":" + a.port);
