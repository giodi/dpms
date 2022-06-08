import data from "./data.js";
    let studentId = 1231;
    let studentData = data.find(id => id = studentId)


    let schlussel = Object.keys(data[0]);
    schlussel.shift()
    schlussel = schlussel.map(x => `e.${x}`)
    console.log(schlussel)

    
function result(key) {
    let arr = [];
    data.forEach( e => (e.id != 0)? arr.push(window[key]):"")
    
    let sum= 0;
    arr.forEach(e => 
        sum+=e)
    console.log(sum/arr.length)

    let min= Math.min(...arr)
    let max= Math.max(...arr)

    console.log(min,max)
}

result(schlussel[4])




const container = document.getElementById("auswertung_inhalt")

