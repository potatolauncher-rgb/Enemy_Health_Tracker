document.getElementById('add').onclick = addHealth
document.getElementById('subtract').onclick = subHealth

function addHealth (){
    let boxTwo = parseInt(eHealth.value)
    let boxThree = parseInt(healthChunk.value)
    boxTwo += boxThree
    console.log(boxTwo)
    document.getElementById('eHealth').value = boxTwo
}

function subHealth (){
    let boxTwo = parseInt(eHealth.value)
    let boxThree = parseInt(healthChunk.value)
    boxTwo -= boxThree
    console.log(boxTwo)   
    document.getElementById('eHealth').value = boxTwo 
}

