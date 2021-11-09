//Ivy
function countingSort(arr) {

    let numberAndCount = {}
    let frequencyArray = []

    for(let i = 0; i < arr.length; i++) {
        let number = arr[i]
        if(numberAndCount[number] === undefined) {
            numberAndCount[number] = 1;
        } else {
            numberAndCount[number] += 1
        }
    }

    for (let j = 0; j < 100; j++) {
        frequencyArray.push(numberAndCount[j] || 0)
    }

    return frequencyArray;
}
