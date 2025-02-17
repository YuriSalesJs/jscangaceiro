var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
]

console.log(campos)

var tbody = document.querySelector('table tbody')

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault()

    var tr = document.createElement('tr')
    //criando a tr onde serão mostrados os dados 
    campos.forEach(function(campo){
    //criando a td com os dados dos campos 
        var td = document.createElement('td')
        td.textContent = campo.value
        tr.appendChild(td)
    })

    //criando o ultimo dado da td
    var tdVolume = document.createElement('td')
    tdVolume.textContent = campos[1].value * campos[2].value
    tr.appendChild(tdVolume)

    tbody.appendChild(tr)

    //limpando os dados dos campos para que o usuario possa incluir novos dados
    campos[0].value = ''
    campos[1].value = 1
    campos[2].value = 0

    campos[0].focus()
})