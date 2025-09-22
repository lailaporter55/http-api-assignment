const respondXML = (request, response, status, xml) => {
    response.writeHead(status, { 'Content-Type': 'text/xml' });
    response.write(xml);
    response.end();
}
const respondJSON = (request, response, status, object) => {
    const content = JSON.stringify(object);
    response.writeHead(status, { 
        'Content-Type': 'application/json', 
        'Content-Length': Buffer.byteLength(content),
    });
}
const success = (request, response) => {
    const responseJSON = {
        message: 'This is a succes