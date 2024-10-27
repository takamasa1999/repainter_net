import kafka from "@/lib/kafka"

export async function GET(_request: Request) {

    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
    topic: 'test-topic',
    messages: [
        { value: 'Hello KafkaJS user!' },
    ],
    })

    await producer.disconnect()
    return new Response('connector', {
      status: 200,
    });
  }