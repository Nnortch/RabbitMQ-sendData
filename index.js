const amqp = require('amqplib');

// RabbitMQ server connection URL
const rabbitmqUrl = 'amqp://user:password@host:port/virtualhost'; // Change this URL as needed

// Queue name to receive data from
const queueName = 'QueName'; // Change to your queue name
// Maximum number of messages in the queue
const maxLength = 100000;

async function receiveData() {
  try {
    // Create a connection to RabbitMQ server
    const connection = await amqp.connect(rabbitmqUrl);

    // Create a channel
    const channel = await connection.createChannel();

    // await channel.assertQueue(queueName);
    const queueOptions = {
      durable: true, // Set to 'true' if you want the queue to be durable
      arguments: {
        'x-max-length': maxLength // Maximum number of messages in the queue
      },
    };

    // Declare the queue with the specified options
    await channel.assertQueue(queueName, queueOptions);

    console.log(`Waiting for messages in ${queueName}. To exit, press CTRL+C`);

    // Consume messages from the queue
    channel.consume(queueName, (msg) => {
      if (msg !== null) {
        // Process the received message
        const messageContent = msg.content.toString();
        console.log(`Received message: ${messageContent}`);

        // Acknowledge the message
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Start receiving data from the queue
receiveData();
