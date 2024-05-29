class sistema{
    //teste
    class Pedidos{
        constructor(ID_unico,ID_cliente,status,data_pedido){

            this.ID_unico=ID_unico;
            this.ID_cliente=ID_cliente;
            this.status=status;
            this.data_pedido=data_pedido
        }
    }
    class Funcionário{
        constructor(ID_unico,nome_usuario,cpf,email,senha){
            this.ID_unico=ID_unico;
            this.nome_usuario=nome_usuario;
            this.cpf=cpf;
            this.email=email;
            this.senha=senha
        }
    }
    class Funcionário_logado extends Funcionário {
        ver_meus_dados() {
            console.log(ID_unico);
            console.log(nome_usuario);
            console.log(cpf);
            console.log(email);
            console.log(senha)
        }
        modificar_meus_dados() {
            var requisição = require("readline-sync");
            var número = requisição.questionInt("Se desejas alterar, \n seu nome de usuário digite 1 \n seu cpf digite 2 \n seu email digite 3 \n sua senha digite 4");
            if (número == 1) {
                var requisição = require("readline-sync");
                var novonome = requisição.question("Insira novo nome de usuário desejado");
                ID_unico.nome_usuario = novonome
            }
            if (número == 2) {
                var requisição = require("readline-sync");
                var novocpf = requisição.questionInt("Insira novo cpf sem traços");
                ID_unico.cpf = novocpf
            }
            if (número == 3) {
                var requisição = require("readline-sync");
                var novoemail = requisição.question("Insira novo email desejado");
                ID_unico.email = novoemail
            }
            if (número == 4) {
                var requisição = require("readline-sync");
                var novasenha = requisição.question("Insira nova senha desejada");
                ID_unico.senha = novasenha
            }
        }
        ver_lista_de_pedidos() {

        }
    }
    class Funcionário_não_logado extends Funcionário {
        Cadastrar() {  
            var requisição = require("readline-sync");
            var nome = requisição.question("Qual nome de usuário você deseja?\n");
            var requisição = require("readline-sync");
            var CPF = requisição.questionInt("Qual seu cpf (insira sem traços)?\n");
            var requisição = require("readline-sync");
            var EMAIL = requisição.question("Qual seu email?\n");
            var requisição = require("readline-sync");
            var SENHA = requisição.question("Qual sua senha desejada?\n");
            function getRandom() {
                return Math.random();
            }

            var MeusDados = new Object();
            MeusDados.ID_unico = getRandom();
            MeusDados.nome_usuario = nome;
            MeusDados.cpf = CPF;
            MeusDados.email = EMAIL;
            MeusDados.senha = SENHA;
        }
        Fazer_Login() {
            var requisição = require("readline-sync")
            var EMAIL = requisição.question("Qual seu email?\n");
            var requisição = require("readline-sync");
            var SENHA = requisição.question("Qual sua senha?\n");
        }
        Sair_do_Programa() {

        }
    }
    class Cliente{
        constructor(ID_unico,nome_cliente,data_de_nascimento,cpf,email,senha){

            this.ID_unico=ID_unico;
            this.nome_cliente=nome_cliente;
            this.data_de_nascimento=data_de_nascimento;
            this.cpf=cpf;
            this.email=email;
            this.senha=senha

        }
    }
    class Cliente_logado extends Cliente {
        ver_meus_dados() {
            console.log(ID_unico);
            console.log(nome_cliente);
            console.log(data_de_nascimento);
            console.log(cpf);
            console.log(email);
            console.log(senha)
        }
        modificar_meus_dados() {
            var requisição = require("readline-sync");
            var número = requisição.questionInt("Se desejas alterar, \n seu nome digite 1, \n sua data de nascimento digite 2 \n seu cpf digite 3 \n seu email digite 4 \n sua senha digite 5");
            if (número == 1) {
                var requisição = require("readline-sync");
                var novonomec = requisição.prompt("Insira seu novo nome");
                ID_unico.nome_cliente = novonomec
            }
            if (número == 2) {
                var requisição = require("readline-sync")
                var novadata = requisição.prompt("Insira nova data de nascimento");
                ID_unico.data_de_nascimento = novadata
            }
            if (número == 3) {
                var requisição = require("readline-sync");
                var novocpf = requisição.questionInt("Insira novo cpf sem traços");
                ID_unico.cpf = novocpf
            }
            if (número == 4) {
                var requisição = require("readline-sync");
                var novoemail = requisição.question("Insira novo email desejado");
                ID_unico.email = novoemail
            }
            if (número == 5) {
                var requisição = require("readline-sync");
                var novasenha = requisição.question("Insira nova senha desejada");
                ID_unico.senha = novasenha
            }
        }
        ver_lista_de_pedidos() {

        }
        fazer_novo_pedido() {
            
            let novopedido = new Pedidos;
            novopedido.ID_unico = Math.random();
            novopedido.ID_cliente = //id do cliente;
            let hoje = Date,getDate(); //dia no momento da operação
            novopedido.data_pedido = hoje
        } 
    }
    class Cliente_não_logado extends Cliente {
        Cadastrar() {  
            var requisição = require("readline-sync");
            var nome = requisição.question("Qual seu nome?");
            var requisição = require("readline-sync");
            var data = requisição.question("Qual sua data de nascimento?\n")
            var requisição = require("readline-sync");
            var CPF = requisição.questionInt("Qual seu cpf (insira sem traços)?\n");
            var requisição = require("readline-sync");
            var EMAIL = requisição.question("Qual seu email?\n");
            var requisição = require("readline-sync");
            var SENHA = requisição.question("Qual sua senha desejada?\n");
            function getRandom() {
                return Math.random();
            }
            var MeusDados = new Object();
            MeusDados.ID_unico = getRandom();
            MeusDados.nome_cliente = nome;
            MeusDados.data_de_nascimento = data
            MeusDados.cpf = CPF;
            MeusDados.email = EMAIL;
            MeusDados.senha = SENHA;
        }
        Fazer_Login() {
            var requisição = require("readline-sync")
            var EMAIL = requisição.question("Qual seu email?\n");
            var requisição = require("readline-sync");
            var SENHA = requisição.question("Qual sua senha?\n");
        }
        Sair_do_Programa() {

        }
    }
    class Produtos{
        constructor(validade,preco,estoque,nome,descricao){

            this.validade=validade;
            this.preco=preco;
            this.estoque=estoque;
            this.nome=nome;
            this.descricao=descricao

        }
    }
}
