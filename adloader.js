const ADLIST = ["steph"]
var ad = ADLIST[Math.floor(Math.random()*ADLIST.length)];
var convertedJsonUrl = "ads/"+ad+".json"
var convertedJson = null

fetch(convertedJsonUrl)
.then(res => res.json())
.then(out => {
    convertedJson = out
    afterConverted()
})

function afterConverted(){
    document.querySelector(".adimg").src = convertedJson.img
    document.querySelector(".adurl").onclick = function(){
        window.open(convertedJson.url);
    }
    document.querySelector(".adreminder").style.display = "block"
}
