let numbersCount;
let isNumbersCountPrime;
let fiboNums = [0, 1]
let fiboCurrentIndex;
let isInFibo;

// getting the first 100 numbers of Fibonacci
for (let l = 1; l < 100; l++) {
    fiboCurrentIndex = fiboNums.length
    if (l === 1) {
        fiboNums.push(l)
    } else {
        fiboNums.push(fiboNums[fiboCurrentIndex - 1] + fiboNums[fiboCurrentIndex - 2])
    }
}

// check numbers less than 100 if they are special number or not
for (let i = 0; i < 100; i++) {
    numbersCount = 0
    for (let j = i; j !== 0;) {
        j = Math.floor(j / 10)
        numbersCount++
    }
    if (i === 0) {
        numbersCount = 1
    }

    isNumbersCountPrime = true
    for (let k = 2; k < numbersCount; k++) {
        if (isNumbersCountPrime) {
            isNumbersCountPrime = numbersCount % k !== 0;
        }
    }
    if (numbersCount === 1) {
        isNumbersCountPrime = false
    }

    isInFibo = fiboNums.some(number => number === i)

    if (isNumbersCountPrime && isInFibo) {
        console.log(i)
    }
}

alert('check console :)')
