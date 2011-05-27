const jsel = require('JSONSelect'),
       url = require('url');

module.exports = function(options) {
    return function(req, resp, next) {
        var called = false;
        var filter = undefined;
        var getArgs = url.parse(req.url, true).query;
        if (getArgs.hasOwnProperty('select')) {
            try {
                filter = jsel.compile(getArgs['select']);
            } catch(e) {
                resp.writeHead(400, {"Content-Type": "text/plain"});
                resp.write("Bogus selector (" + getArgs['select'] + "): " + e);
                resp.end();
                return;
            }
        }

        resp.writeJSON = function(x) {
            if (!called) resp.writeHead(200, {"Content-Type": "application/json"});
            if (filter) x = filter.match(x);
            resp.write(JSON.stringify(x));
        };
        next();
    }
};
