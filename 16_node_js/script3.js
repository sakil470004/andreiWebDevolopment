import fs from 'fs';

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('errorrrr')
    }
    console.log('Async', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString())
//add few more line to code
// fs.appendFile('./hello.txt', ' This is so cool! ',err => {
//     if (err) {
//         console.log(err)
//     }
// })

//Write in file
// fs.writeFile('bye.txt', 'sad to see you go', err => {
//     if (err) {
//         console.log(err)
//     }
// })


//DELETE file
fs.unlink('./bye.txt', err => {
    if (err)
        console.log(err);
    console.log('Delete done');
})