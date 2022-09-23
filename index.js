document.getElementById('add').onclick = addHealth
document.getElementById('subtract').onclick = subHealth

function addHealth (){
    let boxTwo = parseInt(eHealth.value)
    let boxThree = parseInt(healthChunk.value)
    boxTwo += boxThree
    console.log(boxTwo)
}

function subHealth (){
    let boxTwo = parseInt(eHealth.value)
    let boxThree = parseInt(healthChunk.value)
    boxTwo -= boxThree
    console.log(boxTwo)
}

