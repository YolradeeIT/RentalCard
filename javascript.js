function addimg(inid, sid){
    let inp = document.getElementById(inid).files;
    let chgel = document.getElementById(sid);
    chgel.src = URL.createObjectURL(inp[0]);
    console.log("hehe");
}

function chgcolor(){
    let inp = document.getElementById('color').value;
    console.log(inp)
    let chgel = document.getElementsByClassName('rantalcard');
    chgel[0].style.backgroundColor = inp;
    console.log("hehe")
}

function tagname(va){
    let tag = document.getElementById('nametag');
    console.log(va);
    if (va === "Ai"){
        tag.src = "static/Ai.png";
    }
    else if (va === "Pear"){
        tag.src = "static/Pear.png";
    }
    else if (va === "PMyow"){
        tag.src = "static/PMyow.png";
    }
    else if (va === "PAroon"){
        tag.src = "static/PAroon.png";
    }
}

let testp = "300";
let prip = "400";
let addition = "";
let deposit = "300";
let size = "S";
let shape = "";

function chgdes(where) {
    console.log(document.getElementById(where).value)
    eval(where + "=document.getElementById(where).value")

    let text = "เช่าเทส " + testp +
    "<br>เช่าไพร " + prip + "<br>" + 
    addition + "มัดจำ " + deposit +
    "<br>ค่าส่งหักจากมัดจำ" + 
    "<br>----------------" +
    "Size " + size + "<br>" +
    shape;
    document.getElementById('des').innerHTML = text;
}
