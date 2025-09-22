const http = require("http");
const handler = require("./response.js");
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    '/': handler.getIndex,
    'success': handler.getSuccess,
    'badRequest': handler.getBadRequest,
    'unauthorized': handler.getUnauthorized,
    'forbidden': handler.getForbidden,
    'internal': handler.getInternal,
    'notImplemented': handler.getNotImplemented,
    'notFound': handler.getNotFound,
};
const onRequest = (req, res) => {
    const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);

  if (urlStruct[parsedUrl.pathname]) {
    urlStruct[parsedUrl.pathname](request, response);
  } else {
    urlStruct.notFound(request, response);
  }

    }

    //ask if they ask for xml or json
    return handler.respondJSON(request, response, 200, responseString);

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
    });