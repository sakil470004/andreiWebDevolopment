// import { createServer } from 'http';

// const server = createServer((request, response) => {
//     console.log('headers', request.headers)
//     console.log('method', request.method)
//     console.log('url', request.url)


//     const user = {
//         name: 'Jhon',
//         hobb: 'Skating'
//     }

//     response.setHeader('Content-Type', 'application/json')
//     response.end(JSON.stringify(user));

// })

// server.listen(3000);


import express from 'express';
// import bodyParser from 'body-parser';
const app =express();



app.use(express.urlencoded({extended: false}));
app.use(express.json());



// app.use(express.static(__dirname + 'public'))
app.use(express.static('public'))


// app.get('/:id',(req,res)=>{

//     // console.log(req.query)
//     // req.body
// //    console.log( req.header)
// // console.log(req.params)
// // res.status(404).send("not found")
 
// })

// app.post('/profile',(req,res)=>{
//     console.log("posting profile")
// console.log(req.body)
// const user={
//     name: 'Sally',
//     hobby:'soccer'
// }

//  res.send('success')
// })

app.listen(3000)