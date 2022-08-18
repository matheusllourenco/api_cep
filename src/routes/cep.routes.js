const {Router} = require('express');

const cepRouter = Router();

cepRouter.get('/', (request, response) => {
    response.send('ok')
});

module.exports = cepRouter;