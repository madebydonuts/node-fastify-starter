// require fastify framework and instantiate it
const fastify = require('fastify')({ logger: true })
const axios = require('axios')




// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// start the server
const start = async () => {
  try {
    await fastify.listen(3000)
  } 
  catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()