/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 */
export async function GET(_request: Request) {
    // Do whatever you want
    return new Response('hello', {
      status: 200,
    });
  }