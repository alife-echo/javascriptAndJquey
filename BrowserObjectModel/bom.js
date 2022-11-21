
console.log('--------------PROPRIEDADES DO OBJETO WINDOW----------------')


console.log("Altura da Janela:"+window.innerHeight)

console.log("Largura da Janela:"+window.innerWidth)

console.log("Distancia em que o documento foi rolado horizontalmente:"+window.scrollX)

console.log("Distancia em que o documento foi rolado verticalmente:"+window.scrollY)

console.log('Coordenada X do ponteiro, em relação ao canto superior esquerdo da tela(em pixels):'+window.screenX)

console.log('Coordenada Y do ponteiro, em relação ao canto superior esquerdo da tela(em pixels):'+window.screenY)

console.log('Url atual:'+window.location)

console.log('Referencia ao Objeto History,mostra os detalhes na janela ou guia:'+window.history)

console.log('Numero de itens no Objeto history para janela ou guia do Navegador:'+window.history.length)

console.log('Referencia ao objeto screen:'+window.screen)

console.log('Mostra a largua da tela:'+window.screen.width)

console.log('Mostra a Altura da tela:'+window.screen.height)


console.log('--------------METODOS DO OBJETO WINDOW----------------')

console.log('window.alert() = Caixa de dialogo com uma mensagem(Clicar com botão ok a fecha)')
window.alert()

console.log('window.open("https://www.google.com.br/") = Abre uma nova janela do navegador com a URL especificada no parametro')
window.open('https://www.google.com.br/')

console.log('window.print() = Diz ao navegador se o usuario deseja imprimir o conteudo da pagina atual')
window.print()

