function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
     var minutos = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas e <strong>${minutos}</strong> minutos`
    
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotomanha01.png'
        document.body.style.background = 'wheat'

    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'fototarde.jpg'

    } else {
        //Boa noite!
        img.src = 'fotonoite01.png'
        document.body.style.background = 'rgb(148, 136, 120)'
        
    }
}