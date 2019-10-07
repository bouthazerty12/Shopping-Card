const inputplus = document.getElementsByClassName("plus")
const inputmoins = document.getElementsByClassName("moins")
var inputqte = document.getElementsByClassName("qte")
const inputprix = document.getElementsByClassName("prix")
var inputtotal = document.querySelector(".total")


for (let  i=0; i<inputplus.length; i++){
    let plus = inputplus[i]
    plus.addEventListener('click', () => increment(i))
}
for (let  i=0; i<inputmoins.length; i++){
    let moins = inputmoins[i]
    moins.addEventListener('click', () => decrement(i))
}

function increment(i){
    let quantity = inputqte[i]
    var number = parseFloat(++quantity.innerText) // quantity
    let prix = parseFloat(inputprix[i].innerText.replace('DNT', '')) // prix unitaire
    updatetotalCart(prix)
}
function decrement(i){
    let quantity = inputqte[i]
    var number = parseFloat(--quantity.innerText) // quantity
    if(number < 0){
        inputqte[i].innerText = 0
    }else{
        let prix = parseFloat(inputprix[i].innerText.replace('DNT', '')) // prix unitaire
        totmoins(prix)
    }
}
function updatetotalCart(prix){
    var total = parseFloat(inputtotal.innerText.replace('DNT', ''))
    var total = prix + total
    inputtotal.innerText = total + 'TND' // affichage total
}
function totmoins(prix){
    var total = parseFloat(inputtotal.innerText.replace('DNT', ''))
    var total = total - prix
    inputtotal.innerText = total + 'TND' // affichage total
}
const inputdelete = document.getElementsByClassName("shoping-item-delete")
for(let i=0; i<inputdelete.length;i++){
    let deleteBtn = inputdelete[i]
    deleteBtn.addEventListener('click', (e) => {e.target.parentNode.parentNode.remove()})
}

// const inputplus1 = document.querySelector('#plus1')
// const inputqte1 = document.querySelector('#qte1')


// console.log(inputplus1)
// console.log(inputqte1)
// inputplus1.addEventListener('click', add)

//     inputqte[0].innerText;
//       ++inputqte ; 

// });

// function add(e){
//     e.preventDefault()
//     for (var i=0; i<inputqte.length; i++){
        
//         inputqte=parseInt(inputqte+1).innerText
//        parseInt(inputtotal) =inputtotal+parseInt(inputprix)
//     }
// }
// function addtoall(){
//     for (i = 0; i < inputplus.length; i++) {
//         inputplus[i].addEventListener('click', add)
//     }
// }
// function add() {
//     s=e.taget
//     for (i = 0; i < inputqte.length; i++) {
//        s.value =++inputqte[i].innerText

//     }
// }
// var tab=document.querySelectorAll('.shoping-item-delete')
// for(i=0;i<=3;i++)
// { if( tab[i]){
//    tab[i].addEventListener('click',
//    function(event){
//     // event.Target.parentNode.parentNode.remove()
//    event.target.parentNode.parentNode.remove()
  
  
//   })
// }
//   }