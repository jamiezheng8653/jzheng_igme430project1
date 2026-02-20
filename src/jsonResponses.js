const books = require('./data/books.json');

//json response

// 4 GET requests w. Support for HEAD requests
// One GET request must support query parameters for filtering/limiting 
// the data returned by the API. If query parameters are applicable for 
// more than one endpoint, they should also be used there.
// - Data filtering should be done by the API, not by the client webpage

//Must have at least 2 POST endpoints for adding and editing data
// a) POST request endpoints should accept incoming boby data in both 
// JSON and x-www-form-urlencoded formats, and parse them based on the 
// Content-Type of the POST request
// b) Note that GET/HEAD requests should never add, modify, or remove 
// data from the server
// c) You are not required to persist data permanently, but it should
// stick around between requests until the server restarts.

//Endpoints should have proper error handling for invalid/bad requests, ect.

//Must set the following response headers for all responses:
// Content-Type
// Content-Length

//All data endpoints must support and default to JSON responses. 
// Support for other response types is options, but should be controlled 
// by the Accept header.

//Any static files needed for the client facing website (HTML, CSS, 
// Client JS, images, videos, ect) must be served by your server