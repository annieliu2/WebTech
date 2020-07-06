// Consider one click
// before the click:
// 1. create a random shape
//    1. random color
//    2. random position
//    3. random size
// 2. get the start time


// onclick
// 1. get end time
// 2. get duration = end - start
// 3. display the duration
// 4. make the shape disappear


// let start = new Date().getTime()



// let end = new Date().getTime()
// let duration = (end - start)/1000 // how many secondes in between


// How to get started

// document.querySelector('body').onload = 
document.addEventListener('DOCContentLoaded', game());

let start;

function game(){
makeShape();
}

function makeShape( {
    const shape = document.getElementById('shape');
    //1. create a random shape
    /////    1. random color
    ////       2. random position
    //      3. random size
    shape.style.display = 'block';
    // 2. get the start time
    start = new Date().getTime();
    console.log(start);
})