//PROPRIEDADES STRING
length // retorna o número de caracteres de uma string
let saying = 'Home sweet home'
saying.toUpperCase() // deixa a string toda maiuscula
saying.toLowerCase() // deixa a string toda minuscula
saying.charAt(12) // = 'o' Recebe um numero como paramento e retorna a posição letra correspondente ao numero
saying.indexOf('ee') // = 7 , retorna o numero de indice da primeira ocorrencia de um caractere ou conjunto de caracteres
saying.lastIndexOf('e') // = 14 retorna o numero de indice da ultima ocorrencia de um caractere ou conjunto de caracteres
saying.substring(8,14)// = 'et hom' Retorna o caractere entre dois numeros, no qual o primeiro número do indice é incluido, é o segundo numero do indice não é incluido
saying.split(' ') // = ['home','sweet','home'] transforma a string em um array, no qual divide a string com base no parametro especificado
saying.trim() // = 'home sweet home' remove os espaços no começo e final da string
saying.replace('me','w') // = 'hom sweet home'  localiza e substitui, recebe um valor para ser localizado é outro para substituir, por padrão ele substitui a primeiro correspondencia encontrada 
saying.replace(/home/g,'CASA') // troca todos as instancias de 'HOME' por 'CASA'
saying.includes('home') // = true verifica se o array ou string possui o que foi especificado no parametro
saying.match(/[a-z]/g) // busca e mostra todas as letras minusculas
saying.match(/[A-Z]/g) // busca e mostra todas as letras maiuscula
saying.match(/[0-9]/g) // busca e mostra todos os numeros 
saying.match(/\W|_/g) // busca e mosrtra todos os caracteres especiais

