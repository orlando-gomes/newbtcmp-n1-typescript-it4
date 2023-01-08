

<h1 align ="center">
	newbtcmp-n1-typescript-it4
</h1>



## Assuntos cobertos

- Criação de um **service** para mostrar um usuário criado
- Criação de uma função **createUser** com algumas formas de tipagem.

---
</br></br>


## Criação do service

Um service é um conjunto isolado de código (funções) que executam uma regra de negócio e retornam um resultado. Assim, o service deveria exportar uma única função de forma default. O service só deve resolver uma funcionalidade. A partir da createUser2, a chamada do método recebe um objeto que deixa claro O QUE SÃO os campos. Da maneira como o campo **nome** foi definido, se a função receber **undefined** para este campo, o valor DEFAULT será aplicado.

---
</br></br>


## Função createUser1

Recebe argumentos tipados. É o pior método para quem programa, pois quando eu chamo a função no routes, percebemos que os argumentos da função não ficam "nomeados".

---
</br></br>


## Função createUser2

Recebe os mesmos argumentos da função createUser1 tipados por uma Interface.

---
</br></br>


## Função createUser3 e createUser4

Apenas exemplifica como tipar arrays comuns (createUser3) e arrays mistos (createUser4).

---
</br></br>