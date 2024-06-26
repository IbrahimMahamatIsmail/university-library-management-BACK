const sanitizer = require('sanitizer');

const bodySanitizer = (request, _, next) => {
    if (request.body) {
        for (let propName in request.body) {
            request.body[propName] = sanitizer.escape(request.body[propName]);
        }
    }
    next();
};

module.exports = bodySanitizer;