function addimg(inid, sid){
    let inp = document.getElementById(inid).files;
    let chgel = document.getElementById(sid);
    chgel.style.backgroundImage = "url(" + URL.createObjectURL(inp[0]) + ")";
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
    "<br>----------------<br>" +
    "Size " + size + "<br>" +
    shape;
    document.getElementById('des').innerHTML = text;
}

function takeshot() {
    let div = document.getElementById("photo");
    const renderpage = window.open('Rendered.html')

    html2canvas(div, {allowTaint: true,useCORS: true,width: 750, height: 1000}).then(function (canvas) {
        let img = canvas.toDataURL();
        renderpage.document.getElementById('candownload').src = img;
        
        // location.href = 'Rendered.html';
        // var link = document.createElement('a');
        // link.href = img;
        // link.download = 'cardeiei.png';
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    });
}