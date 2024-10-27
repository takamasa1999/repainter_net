import kafka from "@/lib/kafka"

export async function GET(_request: Request) {
    const consumer = kafka.consumer({ groupId: 'test-group' })
    
    
    
    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
    
    await consumer.run({
      eachMessage: async ({ topic, partition, message }:any) => {
        console.log({
          value: message.value.toString(),
        })
      },
    })

    return new Response('consumer', {
        status: 200,
      });
}

