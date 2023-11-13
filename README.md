# RabbitMQ-sendData

This JavaScript script connects to a RabbitMQ server, creates a queue named 'QueName' with specific attributes, 
receives messages from the queue, parses the messages as JSON, and acknowledges them.

## Requirements

- Node.js (https://nodejs.org/)
- RabbitMQ server (https://www.rabbitmq.com/)

## Installation

1. Clone the repository:
  git clone https://github.com/your-username/your-repo.git
  cd your-repo
2. Install dependencies:
  npm install
3. Configure RabbitMQ:
  Make sure you have a RabbitMQ server running. Update the rabbitmqUrl and queueName variables in the script according to your RabbitMQ server and desired queue name.

## Usage
Run the script to start receiving messages:
  npm start
The script will connect to the RabbitMQ server, create the 'QueName' queue if it doesn't exist, and begin receiving and processing messages.

## Configuration
  The RabbitMQ server connection URL (rabbitmqUrl) is set to 'amqp://localhost' by default. Modify it in the script if your RabbitMQ server is running on a different host.
The queue name (queueName) is set to 'testQ' by default. Change it to your desired queue name.

## Important Note
  Ensure that the messages published to the 'QueName' queue are valid JSON objects, as the script attempts to parse each received message as JSON.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
