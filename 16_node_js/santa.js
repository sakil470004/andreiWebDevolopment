import fs from 'fs';
//1---what floor does santa end up on
// ( --> santa should go up 1 floor
// ) --> santa should go down 1 floor





function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        //checking time
        console.time('q1-santa-time')

        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((accumalator, currentValue) => {
            if (currentValue === '(') {
                return accumalator += 1;
            } else if (currentValue === ')') {
                return accumalator -= 1;
            }
        }, 0)
        console.log('floor:', answer);
        //checking time
        console.timeEnd('q1-santa-time')
    })

}

question1();


//-1 floor is basement
//2 ---when does santa first enter the basement

function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('q2-santa-time')
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumalator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumalator += 1;
            } else if (currentItem === ')') {
                accumalator -= 1;
            }
            counter++;
            return accumalator < 0;
        })
        console.log('basement enterd at :', counter);
        console.timeEnd('q2-santa-time')
   
    })
}

question2();
