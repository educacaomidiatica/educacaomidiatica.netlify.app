function submit(){

    let name = document.getElementById('name').value
    let main = document.getElementById('main')

    main.innerHTML = ""
    main.innerText = ""

    if (name.length == 0){
        alert('Nome invalido!')
    }

    name.split("")
    var vogais = 0
    var consoantes = 0

    for (var i = 0; i < name.length; i++){
        
       if(/A|a/.test(name[i])){
            vogais += 1
        }
        else if(/J|j|S|s/.test(name[i])){
            consoantes += 1
        }
        else if(/B|b|K|k|T|t/.test(name[i])){
            consoantes += 2
        }
        else if(/U|u/.test(name[i])){
            vogais += 3
        }
        else if(/C|c|L|l/.test(name[i])){
            consoantes += 3
        }
        else if(/D|d|M|m|V|v/.test(name[i])){
            consoantes += 4
        }
        else if(/E|e/.test(name[i])){
            vogais += 5
        }
        else if(/N|n|W|w/.test(name[i])){
            consoantes += 5
        }
        else if(/O|o/.test(name[i])){
            vogais += 6
        }
        else if(/F|f|X|x/.test(name[i])){
            consoantes += 6
        }
        else if(/G|g|P|p|Y|y/.test(name[i])){
            consoantes += 7
        }
        else if(/H|h|Q|q|Z|z/.test(name[i])){
            consoantes += 8
        }
        else if(/R|r/.test(name[i])){
            consoantes += 9
        }
        else if(/I|i/.test(name[i])){
            vogais += 9
        }

    }


    consoantes = consoantes.toString()
    while (consoantes.length != 1 && consoantes != '11' && consoantes != '22'){

        consoantes = consoantes.split("")
        consoantes = parseInt(consoantes[0]) + parseInt(consoantes[1])
        consoantes = consoantes.toString()
        if (consoantes.length == 1 || consoantes == '11' || consoantes == '22'){
            break
        }
    }
    consoantes = parseInt(consoantes)

    
    vogais = vogais.toString()
    while (vogais.length != 1 && vogais != '11' && vogais != '22'){
    
        vogais = vogais.split("")
        vogais = parseInt(vogais[0]) + parseInt(vogais[1])
        vogais = vogais.toString()
        if (vogais.length == 1 || vogais == '11' || vogais == '22'){
            break
        }
    }
    vogais = parseInt(vogais)


    var sintese = vogais + consoantes
    sintese = sintese.toString()
    while (sintese.length != 1 && sintese != '11' && sintese != '22'){
    
        sintese = sintese.split("")
        sintese = parseInt(sintese[0]) + parseInt(sintese[1])
        sintese = sintese.toString()
        if (sintese.length == 1 || sintese == '11' || sintese == '22'){
            break
        }
    }
    sintese = parseInt(sintese)

    console.log(vogais, consoantes, sintese)

    if(vogais == 1){
        main.innerText += "\n\nInterior: Preza pela sua individualidade e independência, é um líder nato e tende a querer comandar as suas relações."
    }
    else if(vogais == 2){
        main.innerText += "\n\nInterior: É uma pessoa muito sensível, prefere ser comandado a comandar, é dependente emocionalmente das pessoas que ama."
    }
    else if(vogais == 3){
        main.innerText += "\n\nInterior: Tem o temperamento leve e alegre. Muito criativo, tem características infantis, o que pode ser positivo e também negativo."
    }
    else if(vogais == 4){
        main.innerText += "\n\nInterior: São pessoas que gostam de confiança, de tradição, de coisas previsíveis que estejam em seu controle. Busca relacionamentos sérios e estáveis."
    }
    else if(vogais == 5){
        main.innerText += "\n\nInterior: Adora novidades, aventuras, situações imprevisíveis. É sensual por natureza e não gosta de seguir tradições."
    }
    else if(vogais == 6){
        main.innerText += "\n\nInterior: São pessoas muito emotivas, apaixonadas e também ciumentas. Valoriza muito a família."
    }
    else if(vogais == 7){
        main.innerText += "\n\nInterior: São pessoas racionais que valorizam o conhecimento e a sabedoria. Ao mesmo tempo, tem lado espiritual elevado. Gosta de estar sozinho."        
    }
    else if(vogais == 8){
        main.innerText += "\n\nInterior: Pragmático, justo, objetivo, parece dominar, mas é ultra-sensível"
    }
    else if(vogais == 9){
        main.innerText += "\n\nInterior: Pragmático, justo, objetivo, parece dominar, mas é ultra-sensível"
    }
    else if(vogais == 11){
        main.innerText += "\n\nInterior: São pessoas transcendentais, é difícil conseguir compreendê-los por completo pois como são pessoas dotadas de muitas sabedorias diferentes, tem comportamento diverso, é uma caixinha de surpresas"        
    }
    else if(vogais == 22){
        main.innerText += "\n\nInterior: São pessoas emocionalmente delicadas que se voltam à realização de ações em benefício do próximo e do mundo, mesmo que pareça impossível."
    }


    if(consoantes == 1){
        main.innerText += "\n\nExterior: Como gostam de liderar, parecem muito arrogantes e autoritários, mas na verdade ele só gosta de direcionar, aceita as opiniões alheias, por mais que lhe custe."
    }
    else if(consoantes == 2){
        main.innerText += "\n\nExterior: Reflete o ambiente em que se encontra{ se o ambiente é tenso, torna-se uma pessoa tensa, estressada. Se o ambiente é cheio de energia positiva, consegue multiplicá-la, etc."
    }
    else if(consoantes == 3){
        main.innerText += "\n\nExterior: É uma pessoa muito simpática, se dá bem com todos, muito comunicativo. Até demais, as vezes fala tanto que parece um exibido."
    }
    else if(consoantes == 4){
        main.innerText += "\n\nExterior: São pessoas que transmitem confiança no primeiro olhar. São sérios, determinados e respeitadores."
    }    
    else if(consoantes == 5){
        main.innerText += "\n\nExterior: É rebelde, provocativo e irônico. São muito sensuais e atraentes de forma peculiar."
    }
    else if(consoantes == 6){
        main.innerText += "\n\nExterior: São pessoas que parecem ser da família, muito amorosos, próximos, transmitem hospitalidade."
    }
    else if(consoantes == 7){
        main.innerText += "\n\nExterior: São inteligentes e peculiares, passa a ideia de ser “cheio de mania”, uma pessoa fria"        
    }
    else if(consoantes == 8){
        main.innerText += "\n\nExterior: Pessoas justas e objetivas em suas metas. Não tem rodeios."
    }        
    else if(consoantes == 9){
        main.innerText += "\n\nExterior: Se dá bem com todos ao redor apesar de ser impaciente e ansioso."
    }
    else if(consoantes == 11){
        main.innerText += "\n\nExterior: Transmite um ar de mistério e parece inatingível ou incompreensível."
    }        
    else if(consoantes == 22){
        main.innerText += "\n\nExterior: São pessoas que parecem estar prontos para enfrentar qualquer situação na vida, tamanha sabedoria para lidar com as questões complicadas."
    }
        

    if(sintese == 1){
        main.innerText += "\n\nSíntese: Uma pessoa que guia os outros e os representa."
    }
    else if(sintese == 2){
        main.innerText += "\n\nSíntese: Uma pessoa que facilita e colabora."
    }
    else if(sintese == 3){
        main.innerText += "\n\nSíntese: Uma pessoa que alegre, diverte,torna o ambiente leve."
    }
    else if(sintese == 4){
        main.innerText += "\n\nSíntese: Uma pessoa que se responsabiliza e cumpre os objetivos."
    }    
    else if(sintese == 5){
        main.innerText += "\n\nSíntese: Uma pessoa que rompe as regras, questiona, se rebela."
    }
    else if(sintese == 6){
        main.innerText += "\n\nSíntese: Uma pessoa que mantém as tradições e a família em primeiro lugar."
    }
    else if(sintese == 7){
        main.innerText += "\n\nSíntese: Uma pessoa que analisa de maneira científica e busca os detalhes."
    }        
    else if(sintese == 8){
        main.innerText += "\n\nSíntese: Uma pessoa  que promove a justiça e a prosperidade."
    }        
    else if(sintese == 9){
        main.innerText += "\n\nSíntese: Uma pessoa que busca expandir e ultrapassar todos os seus limites."
    }
    else if(sintese == 11){
        main.innerText += "\n\nSíntese: Uma pessoa que não se encaixa em nenhum grupo específico."
    }        
    else if(sintese == 22){
        main.innerText += "\n\nSíntese: Uma pessoa que quer realizar o impossível, custe o que custar."
    }
    

    event.preventDefault();
}
