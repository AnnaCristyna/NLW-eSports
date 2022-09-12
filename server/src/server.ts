import express from 'express'

console.log('Hello Word!');
const app = express();

app.get('/ads', (request, response) => {
  console.log('Acessou!');
  
  return response.json([
    {id: 1, name: 'Anúncio 1'},
    {id: 2, name: 'Anúncio 2'},
    {id: 3, name: 'Anúncio 3'},
  ])
})

app.listen(3333);