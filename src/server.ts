import express from 'express';

const server = express();
server.use(express.json());

server.get('/', (request, response) => {
  return response.json({ message: 'hello world' });
});

server.listen(3001, () => {
  console.log(`
  🍀️ Server is running on port 3001! Rock on! 🎸️
  💻️ This code is developed by lalves86
  if you want to know more, find me at:
  https://github.com/lalves86
  `);
});
