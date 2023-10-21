let input = document.querySelector('.createInput').value
let btnInput = document.querySelector('.createBtn')
let removeCard = document.querySelector('.removeProduct')
let card = document.querySelector('.product')
let listDiv = document.querySelector('.listTextDiv')
let deleteAll = document.querySelector('.deleteAllBtn')
let sm;
// create card
btnInput.addEventListener('click', createCards)
function createCards(){
        if(document.getElementsByName( "inputCard" )[0].value != ''){
            sm = document.getElementsByName( "inputCard" )[0].value  
        //  создаем блок
            let div = document.createElement('div')
            let title = document.createElement('h5')
            let btn = document.createElement('button')
            div.className = 'product'
            title.className = 'productTitle'
            btn.className = 'removeProduct'
            btn.innerHTML = 'X'
            btn.addEventListener('click', function(){
            listDiv.removeChild(div)
            if(listDiv.childElementCount == 0){
                deleteAll.style.display = 'none'
            }
            })
            title.innerHTML = `${sm}`
            listDiv.appendChild(div)
            div.appendChild(title)
            div.appendChild(btn)
            localStorage.setItem('product', sm)
            document.getElementsByName( "inputCard" )[0].value = ''
            if(listDiv.childElementCount > 0){
                deleteAll.style.display = 'flex'
            }
}
        if(document.getElementsByName( "inputCard" )[0].value == ''){
               console.log('Введите что-нибудь')
          } 
        }
deleteAll.addEventListener('click', function(){
        listDiv.textContent = ''
        deleteAll.style.display = 'none'
        
}) 
