

    - há uma distinção entre objetos String e valores de string primitivas.
    - Strings literais (definidas por aspas duplas ou aspas simples) e strings retornadas da chamada da função String fora do contexto de uma função construtora (sem o uso da palavra chave new) são strings primitiva
    - O JavaScript converte automaticamente strings primitivas para objetos do tipo String

Metódos
temos muitos metodos de string, falarei de alguns que gosto como, uppercase, lowercase,
    Trim()
        - O método trim() retorna o texto sem os espaços em branco no início e fim do texto. 
        - O trim() não afeta o valor do texto em si.
    Concat()
        - A função concat() combina o texto de duas ou mais strings e retorna uma nova string. As alterações de texto de uma string, não afetam a outra string.
        - Por questões de perfomance é altamente recomendável que operadores de atribuição (+, +=) sejam usados ao invés do método concat()
    IndexOf()
        - O método indexOf() retorna o índice da primeira ocorrência do valor especificado no primeiro paramentro dentro do objeto String para o qual foi chamado, começando a busca a partir do index passado
        - O índice do primeiro caractere é 0, e o índice do último caractere de uma string chamada foo é foo.length - 1
    Includes()
        - O método includes() determina se uma string pode ser encontrada dentro de outra string, retornando true ou false, conforme apropriado.
        - O método includes() é case sensitive