import data from "./data.js";

let fragebogen = [
    {
        id : "obj",
        titel :"Objektivität",
        intro :"Die Inhalte möglichst unverfälscht, ohne Manipulationsversuch...",
        frage :"Wie schätzt du die Objektivität der Sender ein?",
        skala : ["gar nicht objektiv","sehr objektiv"]
    },
    {
        id : "sym",
        titel : "Sympathie",
        intro : "Menschen entscheiden, oft unterbewusst, ob sie jemanden sympathisch finden oder eben nicht.",
        frage : "Wie sympathisch fandest du die Sender?",
        skala : ["gar nicht objektiv","sehr objektiv"]
    },
    {
        id : "tru",
        titel : "Vertrauen",
        intro : "Wir konsumieren täglich Medien aus verschiendsten Quellen.",
        frage : "Würdest du in dieser Welt leben, wieviel Vertrauen würdest den Sendern schenken?",
        skala : ["gar nicht vertrauenswürdig","sehr vertrauenswürdig"]
    },
    {
        id : "inf",
        titel : "Informationsgehalt",
        intro : "",
        frage : "Wie hoch schätzt du den Informationsgehalt ein?",
        skala : ["niedriger Informationsgehalt","hoher Informationsgehalt"]
    },
    {
        id : "fun",
        titel :"Unterhaltungswert",
        intro :'Was gute Unterhaltung ist, ist jedem selbst überlassen. Unter dem Motto "Everyone is a critic" kannst du an dieser Stelle dein persönliches Urteil fällen',
        frage :"Wie unterhalsenswert fandest du die verschiedenen Sender?",
        skala : ["gar nicht unterhaltungswert","sehr unterhaltungswert"]
    }      
]

    let studentId = 1231;
    let studentData = data.find(id => id = studentId)
    let index = 0;

    //Fügt den Inhalt in den Fragebogen, je nach Index
    function insertContent(index) {
        document.getElementById("titel").innerText = fragebogen[index].titel;
        document.getElementById("intro").innerText = fragebogen[index].intro;
        document.getElementById("frage").innerText = fragebogen[index].frage;
        //document.getElementById("skala0").innerText = fragebogen[index].skala[0];
        //document.getElementById("skala1").innerText = fragebogen[index].skala[1];
        document.getElementById(fragebogen[index].id).style.display = "inline";
    }
    
    //Je nach Index, wird der Zurück Button ausgeblendet und der Weiter Button zum Absenden Button.
    function checkIndex() {
    (index==0)? document.getElementById("zuruck").style.display ="none" : document.getElementById("zuruck").style.display ="inline";
    (index==4)? document.getElementById("weiter").style.display ="none" : document.getElementById("weiter").style.display ="inline";
    (index==4)? document.getElementById("absenden").style.display ="inline" : document.getElementById("absenden").style.display ="none";
    }

    // function checkIndex() {
    //     (index==0)? document.getElementById("zuruck").style.display ="none" : document.getElementById("zuruck").style.display ="inline";
    //     (index==4)? document.getElementById("weiter").innerText = "Absenden" : document.getElementById("weiter").innerText = "weiter";
    //     }

    //Alle Slider ausblenden
    function hideSlider() {
        let data = document.querySelectorAll(".slider");
        for (let i = 0; i < data.length; i++) {
            data[i].style.display="none"
        }
    }

    //bei initialisierung
    checkIndex();


    document.getElementById("zuruck").addEventListener("click", function () {
            index--;
            (index < 0) ? index = 0 : "";
            hideSlider();
            insertContent(index);
            checkIndex();
        })

    document.getElementById("weiter").addEventListener("click", function () {
            index++;
            (index > 4) ? index = 4 : "";
            hideSlider();
            insertContent(index);
            checkIndex();
        })
     

//Eventlistener um die Slider Daten ins Array der studentData zu übertragen.
document.getElementById("obj1").addEventListener("change", function () { studentData.obj1 =  parseInt(this.value); console.log(studentData)})
document.getElementById("obj2").addEventListener("change", function () { studentData.obj2 =  parseInt(this.value); console.log(studentData)})
document.getElementById("obj3").addEventListener("change", function () { studentData.obj3 =  parseInt(this.value); console.log(studentData)})
document.getElementById("sym1").addEventListener("change", function () { studentData.sym1 =  parseInt(this.value); console.log(studentData)})
document.getElementById("sym2").addEventListener("change", function () { studentData.sym2 =  parseInt(this.value); console.log(studentData)})
document.getElementById("sym3").addEventListener("change", function () { studentData.sum3 =  parseInt(this.value); console.log(studentData)})
document.getElementById("tru1").addEventListener("change", function () { studentData.tru1 =  parseInt(this.value); console.log(studentData)})
document.getElementById("tru2").addEventListener("change", function () { studentData.tru2 =  parseInt(this.value); console.log(studentData)})
document.getElementById("tru3").addEventListener("change", function () { studentData.tru3 =  parseInt(this.value); console.log(studentData)})
document.getElementById("inf1").addEventListener("change", function () { studentData.inf1 =  parseInt(this.value); console.log(studentData)})
document.getElementById("inf2").addEventListener("change", function () { studentData.inf2 =  parseInt(this.value); console.log(studentData)})
document.getElementById("inf3").addEventListener("change", function () { studentData.inf3 =  parseInt(this.value); console.log(studentData)})
document.getElementById("fun1").addEventListener("change", function () { studentData.fun1 =  parseInt(this.value); console.log(studentData)})
document.getElementById("fun2").addEventListener("change", function () { studentData.fun2 =  parseInt(this.value); console.log(studentData)})
document.getElementById("fun3").addEventListener("change", function () { studentData.fun3 =  parseInt(this.value); console.log(studentData)})


document.getElementById("absenden").addEventListener("click", function() {
    document.getElementById("fragebogen").style.display ="none";
    document.getElementById("auswertung").style.display ="inline";
})