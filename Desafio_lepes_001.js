
var retornoExec;

var alunos = [
    {
    nome: 'João',
    nota: 5.0,
    idade: 45
    },
    {
    nome: 'Alfredo',
    nota: 8.0,
    idade: 17
    }
    ,
    {
    nome: 'Rafael',
    nota: 6.0,
    idade: 20
    },
    {nome: 'Leonardo',
    nota: 9.9,
    idade: 22}
    ,
    {
    nome: 'Jean',
    nota: 4.0,
    idade: 26
    },
    {
    nome: 'Beto',
    nota: 7.0,
    idade: 55
    },
    {
    nome: 'Luciana',
    nota: 9.0,
    idade: 56
    },
    {
    nome: 'Victor',
    nota: 2.0,
    idade: 33
    },
    {
    nome: 'Maria',
    nota: 4.0,
    idade: 18
    },
    {
    nome: 'Otávio',
    nota: 9.6,
    idade: 47
    },
    {
    nome: 'Priscila', 
    nota: 2.0,
    idade: 23
    },
    {
    nome: 'Steves',
    nota: 6.9,
    idade: 89
    },
    {
    nome: 'Victorina',
    nota: 8.1,
    idade: 37
    },
    {
    nome: 'Gumerlinda',
    nota: 1.9,
    idade: 10
    },
    {
    nome: 'Samuel',
    nota: 7.1,
    idade: 56
    }]
    

    // INICIO parte 1 calculando e adicionando a média______________________________________________________
    function exerc_01(arrayalunos){

        var somanota = 0, aux = 0;

        for(var i = 0; i<arrayalunos.length; i++){ // Acumulando as notas na variavel somanota
                                                    // Contabilizando número de notas na variavel auxiliar
            somanota += arrayalunos[i].nota;
            aux++;
        }

        somanota = somanota / aux;

        for (let i = 0; i<arrayalunos.length;i++){ // adicionando a mesma média pra geral e retirando casas decimais
        
            arrayalunos[i].media = parseFloat(somanota.toFixed(0));
            
        }
        
        return arrayalunos;
    
    }
       
    // FIM parte 1 calculando e adicionando a média______________________________________________________
    
    // INICIO parte 2 calculando e adicionando a mediana______________________________________________________
    function exerc_01_pt2(arrayalunos){
        var auxAlunos = []; //Array criado para encontrar a mediana
        var medianaPos = 0.0;
        var i = 0, j = 0;
        
        
        //encontrando posição da mediana e arredondando para baixo // caso impar
        medianaPos = Math.trunc((arrayalunos.length / 2));

        for (i = 0; i<arrayalunos.length;i++){
            auxAlunos[i] = arrayalunos[i].nota; //adicionando nota em um array auxiliar
            
        }

        auxAlunos = auxAlunos.sort();

        //Adicionando Mediana em alunos
        for (i = 0; i<arrayalunos.length;i++){

            arrayalunos[i].mediana = auxAlunos[medianaPos];
        }

        return arrayalunos;
    }
    // FIM parte 2 calculando e adicionando a mediana______________________________________________________
    
    // Inicio exercício 2 calculando a moda______________________________________________________

    function exerc_02(arrayalunos){

        var v2= [];
        var chave = 0,maior = 0;

        //definindo vetor secundário em 0;
        for(var i = 0; i<arrayalunos.length;i++){
            v2[i] = 0;
        }

        //verifica se dois números são igaus, se sim, soma +1 na posição correspondente
        for(i = 0; i<arrayalunos.length;i++){
            for(var j = 1;j<arrayalunos.length;j++){
                if(arrayalunos[i].nota == arrayalunos[j].nota){
                    v2[i] = v2[i] +1;
                }
            }
        }

        // Determina qual é o maior número de repetições
        for(i = 0; i<arrayalunos.length;i++){
            if(v2[i] > maior){
                maior = v2[i];
            }
        }
        
        // Verifico o índice mais repetido e armazeno em chave
        for(i = 0; i<arrayalunos.length;i++){
                if(v2[i] == maior){
                    chave = i;
                }
            }
            // Atribuindo a nota mais repetida para todos os alunos em moda
            for(i = 0; i < arrayalunos.length;i++){
                arrayalunos[i].moda = arrayalunos[chave].nota;
            }

        return arrayalunos;
    }
    // FIM exercício 2 calculando a moda______________________________________________________

    //estudando  promises e assync/await;
    /*
    async function exerc_03() {
        const resultado = await exercicio1(arrayalunos);
        console.log(resultado)
    }
    */
   // INICIO exercício 3 _____________________________________________________________________
   // Exercício 3.1
   function exerc_03(arrayalunos){
        var somanota = 0, aux = 0;

        for(var i = 0; i<arrayalunos.length; i++){ // Acumulando as notas na variavel somanota
                                                    // Contabilizando número de notas na variavel auxiliar
            somanota += arrayalunos[i].nota;
            aux++;
        }
    
        somanota = somanota / aux;
        //adicionando reprovado ou aprovado com base na nota de cada aluno
        for(i = 0; i<arrayalunos.length;i++){
            if(arrayalunos[i].nota >= somanota.toFixed(0)){ 
                arrayalunos[i].status = 'Aprovado';
            }else{
                arrayalunos[i].status = 'Reprovado';
            }
        }
    
        // Exercício 3.2
    
        for(i = 0; i<arrayalunos.length;i++){
            if(arrayalunos[i].nota <= arrayalunos[i].moda){ 
                arrayalunos[i].comentario = 'preciso melhorar';
            }else{
                arrayalunos[i].comentario = 'sua nota está acima da moda!';
            }
        }
    
        //Exercício 3.3
    
        for(i = 0; i<arrayalunos.length;i++){
            if(arrayalunos[i].nota >= arrayalunos[i].mediana && arrayalunos[i].nota < arrayalunos[i].media){ 
                arrayalunos[i].mensagem = 'quase lá, tenta mais um pouco!';
            }else{
                arrayalunos[i].mensagem = '...';
            }
        }

        return arrayalunos;
   }
   // FIM exercício 3 _____________________________________________________________________
    retornoExec = exerc_01(alunos);
    retornoExec = exerc_01_pt2(alunos);
    retornoExec = exerc_02(alunos);
    returnoExec = exerc_03(alunos);
    console.log(retornoExec );
   
   


