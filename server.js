const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Altere o arquivo "server.js" e armazene quantas requisições GET e 
//POST foram realizadas. Em seguida, adicione um método GET
// para "/log" que retorna os dados da quatidade de requisições.


let contget = 0
let contPost = 0


const books = [
    {
        ID: 1,
        name: 'Codigo Da Vinci',
        author: 'Dan Brown'
    },
    {
        ID: 2,
        name: 'Os Lusiadas',
        author: 'Luis de Camoes'
    }
];

app.get('/books', (req, res) => {
    contget++
    res.send(books);    
});

app.get('/log', (req, res) => {
    
    res.send({
        get: contget,
        post: contPost
    });    
});

app.post('/books', (req, res) => {
    contPost++
    const newBook = req.body;
    if (books.findIndex(b => b.ID === newBook.ID) !== -1) {
        res.status(500).send('Existing book ID');
        return;
    }

    books.push(newBook);
    res.send('Book added');
});

app.get('/books/:bookId', (req, res) => {
    contget++
    const bookId = parseInt(req.params.bookId);
    if (isNaN(bookId)) {
        res.status(500).send('Non integer');
        return;
    }

    const book = books.find(b => b.ID === bookId);
    if (!book) {
        res.status(500).send('Invalid book ID');
        return;
    }

    res.send(book);
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
})