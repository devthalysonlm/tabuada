function calcular(){
    let num = window.document.querySelector('input#txtnum')
    let tab = window.document.getElementById('seltab')
    let limp = window.document.getElementById('clean')
    limp.addEventListener('click', limpar)
    if(num.value == 0){
        alert('[ERRO!] Informe um número!')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n}x${i}=${n*i}`
            item.value = `${n}`
            tab.appendChild(item)
        }
   }
   function limpar(){
    tab.innerHTML = ``
    
    
}
}

