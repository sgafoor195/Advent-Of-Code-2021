const fetch = require("node-fetch")
let partOneAnswer = 0
let partTwoAnswer = 0

fetch('http://localhost:8080/data/day_1_input.txt')
 .then(response => response.text())
 .then(data => {
    let puzzleData = data.split('\n').map(Number)
    findTotalIncreases(puzzleData)
    findTotalSlidingWindowSumIncreases(puzzleData)

    console.log(`Part 1 answer: ${partOneAnswer}`)
    console.log(`Part 2 answer: ${partTwoAnswer}`)
 })

//Part one
const findTotalIncreases = (x) => {
    for(let i = 1; i < x.length; i++){
        let prev = x[i - 1]
        let curr = x[i]
        if(curr > prev){
            partOneAnswer ++
        }
    }
}

//Part two
const findTotalSlidingWindowSumIncreases = (x) => {

    for(let i = 4; i < x.length; i++) {
        let prev = (x[i-1] +
                    x[i-2] +
                    x[i-3])

        let curr = (x[i] +
                    x[i-1] +
                    x[i-2])

        if(curr > prev){
            partTwoAnswer ++
        }
    }
}
