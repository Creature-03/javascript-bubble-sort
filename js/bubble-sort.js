function bubbleSort(list){
    let len = list.length;
    for (let x = 0; x < len; x++) {
        for (let i = 0; i < len; i++) {
            if (list[i] > list[i + 1]) {
                let temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
            }
        }
    }
    return list;
};

// test list
let list = [1, 3, 5, 2, 67, 21, 13, 12.5, 12.7, 84, 1.3, 0, -3, -27, -13];
document.getElementById('test').innerText = bubbleSort(list);
