//: no arquivo "client.js", após recuperar todos os livros, faça requisições 
//um-a-um para cada livro usando seu ID em /books/<ID>
const axios = require('axios').default;


axios.post('http://localhost:3000/books', {
    ID: 3,
    name: 'My Boook',
    author: 'Me and only me'
})
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.response.data);
    });

axios.post('http://localhost:3000/books',{
    ID: 4,
    name: 'Novo Book',
    author: 'HELOISA'
}).then(resposta => {
    console.log(resposta.data)
}).catch(erro => {
    console.log(erro.response.data);
});

axios.post('http://localhost:3000/books',{
    ID: 1,
    name: 'Novo Book',
    author: 'Me and only mee'
}).then(resposta => {
    console.log(resposta.data)
}).catch(erro => {
    console.log(erro.response.data);
});



axios.get('http://localhost:3000/books')
    .then((response) => {
        console.log(response.data);
        buscarBook(response.data);
    });


const buscarBook =  (lista) => {
    lista.forEach(book => {
        axios.get('http://localhost:3000/books/' + book.ID)
        .then((response) => {
            console.log(response.data);
    
        });
    });

}


