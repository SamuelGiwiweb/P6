const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => res.send('hello, yep yop mec')) 

// points de terminaison
app.get('/api/sauces', (req, res) => res.send('les sauces'))
app.get('/api/sauces/:id', (req, res) =>{
  res.send(`La sauce ${req.params.id}`)
} )

module.exports = app
// gestion des erreurs 404
// app.use(({res}) => {
//   const message = 'Impossible de trouver la ressource demandée ! Essayer une autre URL'
//   res.status(404).json({message})
// })
