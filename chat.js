var bot ='Assistente Virtual: ';
var user = 'Usuário: ';
// script para funcionar ao apertar o enter
var input = document.getElementById("pergunta");
input.addEventListener("keyup", function(event) {             //falta add um evento de click ao o usuário clikar em enviar e limpar
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btn").click();
        erase_sent();                                      
        }
});
//função pra limpar o input ao usuário depois de enviar
function erase_sent()
{
  var limpo = null;
  document.getElementById('pergunta').value = limpo;
}



// Falas para o bot
var resp_padrao = ['Para agendamento de dia e hora envie (1), Se deseja saber qual dia o seu serviço estará pronto envie (2), Se deseja remarcar o dia do seu serviço tecle (3), Se deseja fazer o pagamento e gerar um boleto tecle (4), Se deseja falar com um de nossos atendentes tecle (5)'];
var resp_oi = ['Olá? Como posso te ajudar', 'Sou uma assistente virtual pronta para lhe ajudar'];
var resp_ale = ['humm... não entendi', 'Você pode ser mais específico por favor?', 'Desculpa mas não entendi'];
var resp_formal = ['Por favor, digite uma das opções acima', 'Só consigo te direcionar se vc digitar umas das opções acima', 'Estou me esforçando mas não consigo te entender']

  // temperatura por window prompt
  function temperatura()
    {
      document.getElementById('resposta').value = bot + 'Você quer saber a temperatura de onde ?';
      var winprom = window.prompt (bot + 'Qual cidade deseja a informação de temperatura ?');
      window.open('https://www.google.com.br/search?q=temperatura+' + winprom );
  }
/*
  // Falas Geradas por um loop
  function fala_sozinho()
  {
    
    for(i = 0 ; i < 10; i++)
    {
      var falas = resp_ale[Math.floor(Math.random() * resp_ale.length)];          //Math.floor(Math.random(); retorna um número aleatório entre os valores especificados, ex.: Math.floor((Math.random() * 100) + 1);
      document.getElementById('resposta').value += falas;                        //retornará um número aleatório entre 1 e 100, nesse caso se tratando de strings eu fiz com que retornasse a variável resp_ale.length
                                                                                //então dessa forma irá retornar frases aleatórias
    }
  }
  */

  // Gera data e hora atual
  function data_atual()
  {
    var today = new Date();
    var data_final = today.getDate() + '/' + today.getMonth()+1 + '/' + today.getFullYear(); // data
    var hour_final = today.getHours() + ":" + today.getMinutes() ; // hora
    document.getElementById('resposta').value += bot + 'São ' +  hour_final + ' do dia ' + data_final + '. de nada lek' ;
  }

  // func principal
  function enviar()
  {
    var padrao = resp_padrao[Math.floor(Math.random() * resp_padrao.length)]; 
    var formal = resp_formal[Math.floor(Math.random() * resp_formal.length)];
    var input = document.getElementById("pergunta").value;
    var rand = resp_oi[Math.floor(Math.random() * resp_oi.length)];
   
    
     /**document.getElementById('resposta').value -> este .value é valor que estou atribuindo ao html para que o usuário 
       * veja, estou pegando a id resposta que é o textarea do html e atribuindo valores para que estes sejam repassados
       * ao usuário.
       */
  

    if (input.indexOf('oi') != -1 || input.indexOf('olá') != -1 || input.indexOf('preciso de ajuda') != -1 || input.indexOf('ei') != -1 ) // != -> O operador de desigualdade retorna true (verdade) se os operandos não são iguais
      {
        document.getElementById('resposta').value = user + document.getElementById('pergunta').value +'\n' + bot + rand ; // O caractere ->   \ n   <-  é usado para encontrar um caractere de nova linha. percebi q ele faz com que apareça as duas linhas ao usuário, a linha de pergunta do user e resposta do bot
      } 

    else if (input.indexOf('/cmd') != -1)
      {
        document.getElementById('resposta').value = 'Comandos :  \n /temp pega uma cidade e mostrar sua temperatura  \n /falas fica falando sozinho por um tempo \n /date mostra a data e a hora atual \n /encomenda redireciona para o meu site de pesquisa de encomenda \n /calc redireciona para a calculadora *Alguns estão em teste e outros ainda estão sendo desenvolvidos*';
      }

    else if (input.indexOf('quero remarcar o dia') != -1 || input.indexOf('quero fazer o pagamento') != -1 || input.indexOf('quero agendar o dia do meu serviço') != -1 || input.indexOf('quero gerar um boleto') != -1 || input.indexOf('quero saber qunado meu serviço vai estar pronto') != -1 || input.indexOf('quero falar com um atendente') != -1)
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + padrao;
      }

    else if (input.indexOf('não quero falar por aqui') != -1 || input.indexOf('quero falar com uma pessoa') != -1|| input.indexOf('to ok') != -1)
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + resp_padrao ;
      }

      else if (input.indexOf('tudo bem') != -1 || input.indexOf('tudo certo') != -1|| input.indexOf('eai') != -1|| input.indexOf('eai') != -1)
        {
          document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + formal;
        }

        else if (input.indexOf('te fez') != -1 || input.indexOf('te criou') != -1|| input.indexOf('te programou') != -1|| input.indexOf('eai') != -1)
          {
            document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'Foi o Desenvolvedor Wilhams';
          }

    else if (input.indexOf('qual seu nome?') != -1 || input.indexOf('se chama') != -1 )
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'Sou uma assitente virtal e me chamo Natália';
      }

      else if (input.indexOf('1') != -1) 
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'Seu serviço foi agendado para o dia 30/05/2022.';
      }

      else if (input.indexOf('2') != -1) 
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'Seu serviço estará pronto no dia 30/05/2022.';
      }

      else if (input.indexOf('3') != -1) 
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'Seu serviço foi marcado para o dia 30/05/2022.';
      }

      else if (input.indexOf('4') != -1) 
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'Seu boleto foi gerado para o dia 30/05/2022.';
      }

      else if (input.indexOf('5') != -1) 
      {
        document.getElementById('resposta').value +='\n'+ user + document.getElementById('pergunta').value +'\n'+ bot + 'Em alguns instantes um de nossos atendentes falará com você';
      }

    else if (input.indexOf('/temp') != -1)
      {
        temperatura();
      }
    else if (input.indexOf('/falas') != -1)
      {
        fala_sozinho();
      }

    else if (input.indexOf('/date') != -1)
      {
        data_atual();
      }

    else if (input.indexOf('/encomenda') != -1) //redireciona
        {
          window.open('https://hix3nn.000webhostapp.com/correios.html')
        }

    else if (input.indexOf('/calc') != -1) //redireciona
          {
            window.open('https://hix3nn.000webhostapp.com/calculadora.html')
          }

    else if (input.indexOf('/clear') !=-1)// apagar
    {
      document.getElementById('resposta').value = null;
    }

    else
      {
        document.getElementById('resposta').value += '\n' + user + document.getElementById('pergunta').value +'\n'+bot+ resp_padrao;
      }

  }
