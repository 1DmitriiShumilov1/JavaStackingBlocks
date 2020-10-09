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


    // one of the first blocks is picked //
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
    var pickedBlock_1 = "lightblue"
    var pickedAmount_1 = document.getElementsByClassName('js-selector-1')[0].value
    alert('you picked the first block')
    addBlock(pickedBlock_1, pickedAmount_1)
}

function block2Picked(event){
    var pickedBlock_1 = "purple"
    var pickedAmount_1 = document.getElementsByClassName('js-selector-2')[0].value
    alert('you picked the second block')
    addBlock(pickedBlock_1, pickedAmount_1)
}

function block3Picked(event){
    var pickedBlock_1 = "darkblue"
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
    removeBlocks()
    pickTheSecondBlock()
}

function addBlock2(pickedBlock_2, pickedAmount_2){
    pickedBlocksList.push(pickedBlock_2)
    pickedAmountList.push(parseInt(pickedAmount_2))
    console.log(pickedBlocksList, pickedAmountList)
    removeBlocks()
    pickTheThirdBlock()
}

function removeBlocks(){
    var firstBlocks = document.getElementsByClassName('first-blocks')[0]
    firstBlocks.parentElement.remove()
}

function pickTheSecondBlock() {
    var gradient = "linear-gradient(to right, #DCE35B, #45B649)"
    document.body.style.backgroundImage = gradient
    var blockSelector = document.createElement('section')
    blockSelector.classList.add('sub-section')
    var mainContainer = document.getElementsByClassName('main-section')[0]
    var newBlocks = `
        <p class="first-blocks-text">Pick Your Second Block</p>
        <div class="first-blocks">
            <span class="first-block-selector">
                <div class="block block-4"></div>
                <div class="selector">
                    <input class="selector-number js-selector-1" type="number" value="1">
                    <button class="selector-button js-button-4">Pick</button>
                </div>
            </span>

            <span class="first-block-selector">
                <div class="block block-5"></div>
                <div class="selector">
                    <input class="selector-number js-selector-2" type="number" value="1">
                    <button class="selector-button js-button-5">Pick</button>
                </div>
            </span>

            <span class="first-block-selector">
                <div class="block block-6"></div>
                <div class="selector">
                    <input class="selector-number js-selector-3" type="number" value="1">
                    <button class="selector-button js-button-6">Pick</button>
                </div>
            </span>
        </div>`
    blockSelector.innerHTML = newBlocks
    mainContainer.append(blockSelector)
    // input change check //
    document.getElementsByClassName('js-selector-1')[0].addEventListener('click', valueChanged)
    document.getElementsByClassName('js-selector-2')[0].addEventListener('click', valueChanged)
    document.getElementsByClassName('js-selector-3')[0].addEventListener('click', valueChanged)

    // one of the second blocks is picked //
    document.getElementsByClassName('js-button-4')[0].addEventListener('click', block4Picked)
    document.getElementsByClassName('js-button-5')[0].addEventListener('click', block5Picked)
    document.getElementsByClassName('js-button-6')[0].addEventListener('click', block6Picked)    
}

function pickTheThirdBlock() {
    var gradient = "linear-gradient(to right, #FDC830, #F37335)"
    document.body.style.backgroundImage = gradient
    var blockSelector = document.createElement('section')
    blockSelector.classList.add('sub-section')
    var mainContainer = document.getElementsByClassName('main-section')[0]
    var newBlocks = `
        <p class="first-blocks-text">Pick Your Third Block</p>
        <div class="first-blocks">
            <span class="first-block-selector">
                <div class="block block-7"></div>
                <div class="selector">
                    <input class="selector-number js-selector-1" type="number" value="1">
                    <button class="selector-button js-button-7">Pick</button>
                </div>
            </span>

            <span class="first-block-selector">
                <div class="block block-8"></div>
                <div class="selector">
                    <input class="selector-number js-selector-2" type="number" value="1">
                    <button class="selector-button js-button-8">Pick</button>
                </div>
            </span>

            <span class="first-block-selector">
                <div class="block block-9"></div>
                <div class="selector">
                    <input class="selector-number js-selector-3" type="number" value="1">
                    <button class="selector-button js-button-9">Pick</button>
                </div>
            </span>
        </div>`
    blockSelector.innerHTML = newBlocks
    mainContainer.append(blockSelector)
    // input change check //
    document.getElementsByClassName('js-selector-1')[0].addEventListener('click', valueChanged)
    document.getElementsByClassName('js-selector-2')[0].addEventListener('click', valueChanged)
    document.getElementsByClassName('js-selector-3')[0].addEventListener('click', valueChanged)

    // one of the second blocks is picked //
    document.getElementsByClassName('js-button-7')[0].addEventListener('click', block7Picked)
    document.getElementsByClassName('js-button-8')[0].addEventListener('click', block8Picked)
    document.getElementsByClassName('js-button-9')[0].addEventListener('click', block9Picked)    
}



function block4Picked(event){
    var pickedBlock_2 = "darkgreen"
    var pickedAmount_2 = document.getElementsByClassName('js-selector-1')[0].value
    alert('you picked the first block')
    addBlock2(pickedBlock_2, pickedAmount_2)
}

function block5Picked(event){
    var pickedBlock_2 = "brightgreen"
    var pickedAmount_2 = document.getElementsByClassName('js-selector-2')[0].value
    alert('you picked the second block')
    addBlock2(pickedBlock_2, pickedAmount_2)
}

function block6Picked(event){
    var pickedBlock_2 = "lime"
    var pickedAmount_2 = document.getElementsByClassName('js-selector-3')[0].value
    alert('you picked the third block')
    addBlock2(pickedBlock_2, pickedAmount_2)
}

function block7Picked(event){
    var pickedBlock_3 = "darkgreen"
    var pickedAmount_3 = document.getElementsByClassName('js-selector-1')[0].value
    alert('you picked the first block')
    addBlock2(pickedBlock_3, pickedAmount_3)
}

function block8Picked(event){
    var pickedBlock_3 = "brightgreen"
    var pickedAmount_3 = document.getElementsByClassName('js-selector-2')[0].value
    alert('you picked the second block')
    addBlock2(pickedBlock_3, pickedAmount_3)
}

function block9Picked(event){
    var pickedBlock_3 = "lime"
    var pickedAmount_3 = document.getElementsByClassName('js-selector-3')[0].value
    alert('you picked the third block')
    addBlock2(pickedBlock_3, pickedAmount_3)
}