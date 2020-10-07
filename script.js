if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    // input change check //
    var inputNumber1 = document.getElementsByClassName('js-selector-1')[0]
    inputNumber1.addEventListener('change', valueChanged)

    var inputNumber2 = document.getElementsByClassName('js-selector-2')[0]
    inputNumber2.addEventListener('change', valueChanged)

    var inputNumber3 = document.getElementsByClassName('js-selector-3')[0]
    inputNumber3.addEventListener('change', valueChanged)


    // one of the blocks is picked //
    var pickedBlock1 = document.getElementsByClassName('js-button-1')[0]
    pickedBlock1.addEventListener('click', block1Picked)

    var pickedBlock2 = document.getElementsByClassName('js-button-2')[0]
    pickedBlock2.addEventListener('click', block2Picked)

    var pickedBlock3 = document.getElementsByClassName('js-button-3')[0]
    pickedBlock3.addEventListener('click', block3Picked)
    
}

function valueChanged(event){
    var input = event.target
    if (input.value <= 0){
        input.value = 1
    }
    if (input.value >= 3){
        input.value = 3
    }
}


function block1Picked(event){
    var pickedBlock_1 = 1
    var pickedAmount_1 = document.getElementsByClassName('js-selector-1')[0].value
    alert('you picked the first block')
    addBlock(pickedBlock_1, pickedAmount_1)
}

function block2Picked(event){
    var pickedBlock_1 = 2
    var pickedAmount_1 = document.getElementsByClassName('js-selector-2')[0].value
    alert('you picked the second block')
    addBlock(pickedBlock_1, pickedAmount_1)
}

function block3Picked(event){
    var pickedBlock_1 = 3
    var pickedAmount_1 = document.getElementsByClassName('js-selector-3')[0].value
    alert('you picked the third block')
    addBlock(pickedBlock_1, pickedAmount_1)
}

var pickedBlocksList = []
var pickedAmountList = []

function addBlock(pickedBlock_1, pickedAmount_1){
    pickedBlocksList.push(pickedBlock_1)
    pickedAmountList.push(parseInt(pickedAmount_1))
    console.log(pickedBlocksList, pickedAmountList)
}