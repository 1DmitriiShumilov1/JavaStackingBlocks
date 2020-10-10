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

// limit to the value //

function valueChanged(event){
    var input = event.target
    if (input.value <= 0){
        input.value = 1
    }
    if (input.value >= 3){
        input.value = 3
    }
}

// main lists //

var pickedBlocksList = []
var pickedAmountList = []

// adding blocks to the list //

function addBlock(pickedBlock_1, pickedAmount_1){
    pickedBlocksList.push(pickedBlock_1)
    pickedAmountList.push(parseInt(pickedAmount_1))
    removeBlocks()
    pickTheSecondBlock()
}

function addBlock2(pickedBlock_2, pickedAmount_2){
    pickedBlocksList.push(pickedBlock_2)
    pickedAmountList.push(parseInt(pickedAmount_2))
    removeBlocks()
    pickTheThirdBlock()
}

function addBlock3(pickedBlock_3, pickedAmount_3){
    pickedBlocksList.push(pickedBlock_3)
    pickedAmountList.push(parseInt(pickedAmount_3))
    removeBlocks()
    stackTheBlocks()
}

// remove all blocks from the screen //

function removeBlocks(){
    document.getElementsByClassName('first-blocks')[0].parentElement.remove()
}

// picking the second and the third blocks //

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

// button "pick" is pressed //

function block1Picked(){
    var pickedBlock_1 = "#a1fcfc"
    var pickedAmount_1 = document.getElementsByClassName('js-selector-1')[0].value
    alert('you picked the first block')
    addBlock(pickedBlock_1, pickedAmount_1)
}

function block2Picked(){
    var pickedBlock_1 = "#b569fc"
    var pickedAmount_1 = document.getElementsByClassName('js-selector-2')[0].value
    alert('you picked the second block')
    addBlock(pickedBlock_1, pickedAmount_1)
}

function block3Picked(){
    var pickedBlock_1 = "#6090e9"
    var pickedAmount_1 = document.getElementsByClassName('js-selector-3')[0].value
    alert('you picked the third block')
    addBlock(pickedBlock_1, pickedAmount_1)
}

function block4Picked(){
    var pickedBlock_2 = "#83df80"
    var pickedAmount_2 = document.getElementsByClassName('js-selector-1')[0].value
    alert('you picked the first block')
    addBlock2(pickedBlock_2, pickedAmount_2)
}

function block5Picked(){
    var pickedBlock_2 = "#69fc8e"
    var pickedAmount_2 = document.getElementsByClassName('js-selector-2')[0].value
    alert('you picked the second block')
    addBlock2(pickedBlock_2, pickedAmount_2)
}

function block6Picked(){
    var pickedBlock_2 = "#beee71"
    var pickedAmount_2 = document.getElementsByClassName('js-selector-3')[0].value
    alert('you picked the third block')
    addBlock2(pickedBlock_2, pickedAmount_2)
}

function block7Picked(){
    var pickedBlock_3 = "#eeca69"
    var pickedAmount_3 = document.getElementsByClassName('js-selector-1')[0].value
    alert('you picked the first block')
    addBlock3(pickedBlock_3, pickedAmount_3)
}

function block8Picked(){
    var pickedBlock_3 = "#e47d76"
    var pickedAmount_3 = document.getElementsByClassName('js-selector-2')[0].value
    alert('you picked the second block')
    addBlock3(pickedBlock_3, pickedAmount_3)
}

function block9Picked(){
    var pickedBlock_3 = "#e97f55"
    var pickedAmount_3 = document.getElementsByClassName('js-selector-3')[0].value
    alert('you picked the third block')
    addBlock3(pickedBlock_3, pickedAmount_3)
}

// final function //

function stackTheBlocks(){
    var gradient = "linear-gradient(to right, #03001e, #7303c0, #fdeff9)"
    document.body.style.backgroundImage = gradient
    document.body.style.minHeight = "1000px"
        var finalBlocksContainer = document.createElement('p')
        finalBlocksContainer.classList.add('first-blocks-text')
        var mainContainer = document.getElementsByClassName('main-section')[0]
        var newBlocks = `This is your tower of blocks, thank you for playing!`
        finalBlocksContainer.innerHTML = newBlocks
        mainContainer.append(finalBlocksContainer)
    stack1()
    stack2()
    stack3()
}

function stack1(){
    if (pickedAmountList[0] == 1){
        var finalBlocksContainer = document.createElement('div')
        finalBlocksContainer.classList.add('main-section-vertical')
        var mainContainer = document.getElementsByClassName('main-section')[0]
        var newBlocks = `
            <div class="final-block-1"></div>`
        finalBlocksContainer.innerHTML = newBlocks
        mainContainer.append(finalBlocksContainer)
    }
    if (pickedAmountList[0] == 2){
        var finalBlocksContainer = document.createElement('div')
        finalBlocksContainer.classList.add('main-section-vertical')
        var mainContainer = document.getElementsByClassName('main-section')[0]
        var newBlocks = `
            <div class="final-block-1"></div>
            <div class="final-block-1"></div>`
        finalBlocksContainer.innerHTML = newBlocks
        mainContainer.append(finalBlocksContainer)
    }
    if (pickedAmountList[0] == 3){
        var finalBlocksContainer = document.createElement('div')
        finalBlocksContainer.classList.add('main-section-vertical')
        var mainContainer = document.getElementsByClassName('main-section')[0]
        var newBlocks = `
            <div class="final-block-1"></div>
            <div class="final-block-1"></div>
            <div class="final-block-1"></div>`
        finalBlocksContainer.innerHTML = newBlocks
        mainContainer.append(finalBlocksContainer)
    }
    for (i = 0; i < document.getElementsByClassName('final-block-1').length; i++){
        document.getElementsByClassName('final-block-1')[i].style.backgroundColor = pickedBlocksList[0]
    }
}

function stack2(){
    if (pickedAmountList[1] == 1){
        var finalBlocksContainer = document.createElement('div')
        finalBlocksContainer.classList.add('main-section-vertical')
        var mainContainer = document.getElementsByClassName('main-section')[0]
        var newBlocks = `
            <div class="final-block-2"></div>`
        finalBlocksContainer.innerHTML = newBlocks
        mainContainer.append(finalBlocksContainer)
    }
    if (pickedAmountList[1] == 2){
        var finalBlocksContainer = document.createElement('div')
        finalBlocksContainer.classList.add('main-section-vertical')
        var mainContainer = document.getElementsByClassName('main-section')[0]
        var newBlocks = `
            <div class="final-block-2"></div>
            <div class="final-block-2"></div>`
        finalBlocksContainer.innerHTML = newBlocks
        mainContainer.append(finalBlocksContainer)
    }
    if (pickedAmountList[1] == 3){
        var finalBlocksContainer = document.createElement('div')
        finalBlocksContainer.classList.add('main-section-vertical')
        var mainContainer = document.getElementsByClassName('main-section')[0]
        var newBlocks = `
            <div class="final-block-2"></div>
            <div class="final-block-2"></div>
            <div class="final-block-2"></div>`
        finalBlocksContainer.innerHTML = newBlocks
        mainContainer.append(finalBlocksContainer)
    }
    for (i = 0; i < document.getElementsByClassName('final-block-2').length; i++){
        document.getElementsByClassName('final-block-2')[i].style.backgroundColor = pickedBlocksList[1]
    }
}

function stack3(){
    if (pickedAmountList[2] == 1){
        var finalBlocksContainer = document.createElement('div')
        finalBlocksContainer.classList.add('main-section-vertical')
        var mainContainer = document.getElementsByClassName('main-section')[0]
        var newBlocks = `
            <div class="final-block-3"></div>`
        finalBlocksContainer.innerHTML = newBlocks
        mainContainer.append(finalBlocksContainer)
    }
    if (pickedAmountList[2] == 2){
        var finalBlocksContainer = document.createElement('div')
        finalBlocksContainer.classList.add('main-section-vertical')
        var mainContainer = document.getElementsByClassName('main-section')[0]
        var newBlocks = `
            <div class="final-block-3"></div>
            <div class="final-block-3"></div>`
        finalBlocksContainer.innerHTML = newBlocks
        mainContainer.append(finalBlocksContainer)
    }
    if (pickedAmountList[2] == 3){
        var finalBlocksContainer = document.createElement('div')
        finalBlocksContainer.classList.add('main-section-vertical')
        var mainContainer = document.getElementsByClassName('main-section')[0]
        var newBlocks = `
            <div class="final-block-3"></div>
            <div class="final-block-3"></div>
            <div class="final-block-3"></div>`
        finalBlocksContainer.innerHTML = newBlocks
        mainContainer.append(finalBlocksContainer)
    }
    for (i = 0; i < document.getElementsByClassName('final-block-3').length; i++){
        document.getElementsByClassName('final-block-3')[i].style.backgroundColor = pickedBlocksList[2]
    }
}