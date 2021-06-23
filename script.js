
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 4 //Para testar 
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >=0 && hora <12){
        //Bom Dia!

        img.src = 'manha-menor.png'
        document.body.style.background = '#ac961dce'

    } else if (hora >=12 && hora <=18){
        //Boa Tarde!

        img.src = 'tarde-menor.png'
        document.body.style.background = '#efb765'

    } else{
        //Boa Noite!

        img.src = 'noite-menor.png'
        document.body.style.background = '#162645'
    }

}
    
