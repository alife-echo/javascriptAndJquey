let number = 5.33454
isNaN(number) // Verifica se o valor não é um numero

number.toFixed(2) // Arredonda para o numero especificado(no parametro) de casas decimais retorna uma string

number.toPrecision() // Arredonda para o numero total de casas decimais especificadas no parametro (retorna uma stirng)

number.toExponential() // Retorna uma string que representa o número em notação exponecial

//OBJETOS GLOBAIS:OBJETO MATH

//PROPRIEDADE
Math.PI // Retorna o PI

// METODOS
Math.round() // Arredonda o numero para o inteiro mais proximo

Math.sqrt(9) // Retorna  a raiz quadrada de um número especificado no parametro

Math.ceil() // Arredonda o número para cima até o número inteiro mais proximo

Math.floor() // Arredonda o número para baixi até o número inteiro mais proximo

Math.random() // Gera um número aleatorio entre 0 (incluido) e 1 (não incluido)

Math.floor((Math.random() * 10)+1) // Gera um numero entre 1 e 9, quando o +1 é adicionado ele gera uma número entre 1 e 10