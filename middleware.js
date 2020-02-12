'use strict';

/////// handling errors//////////
function notfoundHandler(request, response) {
  response.status(404).render('./pages/404');
}

function errorHandler (error, request, response) {
  response.status(500).send(error.message);
}

module.exports = {
  notfoundHandler: notfoundHandler,
  errorHandler: errorHandler
};