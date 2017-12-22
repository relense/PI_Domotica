/**
 * @file Classes para implementar o sistema domótico.
 * @author Miguel Furtado - 120221006
 * @author Pedro Fonseca  - 120221026
 * @version 0.1.0
 */
"use strict";

/**
 * Posições possíveis para os estores.
 * @readonly
 * @enum {number} - posição do estor
 */
var estadoEstore = {

    ABERTO: 1,
    DOIS_TERCOS: 2,
    MEIO_ABERTO: 3,
    UM_TERCO: 4,
    FECHADO: 5,
    prop: {
        1: {
            value: "Aberto",
            imgLink: "/images/aberto.png",
            id: "ABERTO"
        },
        2: {
            value: "A dois terços",
            imgLink: "/images/doisTercos.png",
            id: "DOIS_TERCOS"
        },
        3: {
            value: "Meio aberto",
            imgLink: "/images/meioAberto.png",
            id: "MEIO_ABERTO"
        },
        4: {
            value: "A um terço",
            imgLink: "/images/umTerco.png",
            id: "UM_TERCO"
        },
        5: {
            value: "Fechado",
            imgLink: "/images/fechado.png",
            id: "FECHADO"
        },
    }
};
Object.defineProperty(estadoEstore, "prop", {
    enumerable: false
});

/**
 * Posições possíveis para o trinco da porta.
 * @readonly
 * @enum {number} - estado do trinco da porta
 */
var estadoTrinco = {

    ABERTO: 1,
    FECHADO: 2,
    prop: {
        1: {
            value: "Aberto",
            imgLinkFecho: "/images/fechoAberto.png",
            imgLinkPorta: "/images/portaAberta.png",
            id: "ABERTO"
        },
        2: {
            value: "Fechado",
            imgLinkFecho: "/images/fechoFechado.png",
            imgLinkPorta: "/images/portaFechada.png",
            id: "FECHADO"
        },
    }
};
Object.defineProperty(estadoTrinco, "prop", {
    enumerable: false
});

/**
 * Posições possíveis para o gerado de movimento / lampada.
 * @readonly
 * @enum {number} - estado se há movimento ou não
 */
var estadoMovimento = {

    SEM_MOVIMENTO: 1,
    COM_MOVIMENTO: 2,
    prop: {
        1: {
            value: "Sem Movimento",
            imgLinkMov: "/images/semMovimento.png",
            imgLinkLamp: "/images/movimentoOff.png",
            isLigado: false,
            id: "SEM_MOVIMENTO"
        },
        2: {
            value: "Com Movimento",
            imgLinkMov: "/images/comMovimento.png",
            imgLinkLamp: "/images/movimentoOn.png",
            isLigado: true,
            id: "COM_MOVIMENTO"
        },
    }
};
Object.defineProperty(estadoMovimento, "prop", {
    enumerable: false
});


/**
 * Tipos de equipamentos e os seus valores correspondentes.
 * @readonly
 * @enum {string} - posição do estor
 */
var tipoEquipamento = {
    TERMOMETRO: 1,
    DETETOR_MOVIMENTO: 2,
    DETETOR_FECHO_PORTA: 3,
    ESTORE_ELETRICO: 4,
    AR_CONDICIONADO: 5,
    GERADOR_MOVIMENTO: 6,
    TRINCO_ELETRICO: 7,
    MOTOR_ELETRICO: 8,

    prop: {
        1: {
            value: "Termómetro",
            id: "TERMOMETRO"
        },
        2: {
            value: "Detetor de Movimento",
            id: "DETETOR_MOVIMENTO"
        },
        3: {
            value: "Detetor de Fecho de Porta",
            id: "DETETOR_FECHO_PORTA"
        },
        4: {
            value: "Estore Elétrico",
            id: "ESTORE_ELETRICO"
        },
        5: {
            value: "Ar Condicionado",
            id: "AR_CONDICIONADO"
        },
        6: {
            value: "Gerador de Movimento",
            id: "GERADOR_MOVIMENTO"
        },
        7: {
            value: "Trinco Elétrico",
            id: "TRINCO_ELETRICO"
        },
        8: {
            value: "Motor Elétrico",
            id: "MOTOR_ELETRICO"
        },
    }
};
Object.defineProperty(tipoEquipamento, "prop", {
    enumerable: false
});


/**
 * Valores por omissão do estado dos equipamentos
 */
var omissao = {

    valorTemperatura: 25.0,
    valorMaximoTemperatura: 50.0,
    valorMinimoTemperatura: -50.0,

    estadoMovimento: estadoMovimento.SEM_MOVIMENTO,
    
    estadoPorta: estadoTrinco.ABERTO,

    estadoEstore: estadoEstore.ABERTO,

};

/**
 * Valores por omissão das consolas
 */
var valoresOmissao = function() {
    var piso1 = sistemaDomotico.criarConsola("Piso 1");
    sistemaDomotico.criarConsola("Piso 2");
    sistemaDomotico.criarConsola("Piso 3");

    var compartimento1 = piso1.criarCompartimento("Compartimento 1");
    var compartimento2 = piso1.criarCompartimento("Compartimento 2");
    var compartimento3 = piso1.criarCompartimento("Compartimento 3");

    compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.AR_CONDICIONADO].id);
    compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.TERMOMETRO].id);
    compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.TRINCO_ELETRICO].id);
    compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.GERADOR_MOVIMENTO].id);
    compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.GERADOR_MOVIMENTO].id);
    var DF = compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.DETETOR_FECHO_PORTA].id);
    var TE = compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.TRINCO_ELETRICO].id);
    var ME = compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.MOTOR_ELETRICO].id);
    var EE = compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.ESTORE_ELETRICO].id);
    compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.ESTORE_ELETRICO].id);
    compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.TERMOMETRO].id);
    compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.DETETOR_MOVIMENTO].id);
    compartimento1.criaEquipamento(tipoEquipamento.prop[tipoEquipamento.DETETOR_MOVIMENTO].id);

    ME.associar(EE.nome);
    TE.associar(DF.nome);

};

/**
 * sistemaDomotico
 */

/**
 * @object Objecto principal com a base do sistema domótico.
 * 
 * @property {string} nome - identificação do sistema domótico.
 * @property {Consola[]} consolas - consolas do sistema domótico.
 * @property {string[]} compartimentoNomes - lista de todos os nomes dos compartimentos existentes.
 * @property {string[]} equipamentoNomes - lista de todos os nomes dos equipamentos existentes.
 */
var sistemaDomotico = {
    consolas: [],
    compartimentoNomes: [],
    equipamentoNomes: []
};

/**
 * Método para alterar o nome de uma consola
 * @param {Object} objecto - Referência do objecto com a propriedade nome
 * @param {string} newNome - Novo nome da consola
 * 
 * @returns {boolean} - Indica se foi possível alterar ou não o nome.
 */
sistemaDomotico.alterarNome = function(objecto, newNome) {

    //Verifica se o novo nome existe e não é vazio
    if (newNome === void 0 || newNome === "") {
        alert("Nome da consola inválido (não pode ser vazio).");
        return false;
    }

    var oldNome = objecto.nome;
    
    //Se for uma consola verificar se já existe uma consola com o novo nome escolhido
    if (objecto instanceof Consola) {
        if (existsInArray(newNome, oldNome, objecto.parent.consolas, "nome")) {
            alert("Já existe uma consola com esse nome.");
            return false;
        }
        objecto.nome = newNome;
        objecto.parent.consolas.naturalSort();

    //Se for um Comparimento verificar se já existe um compartimento com novo o nome escolhido
    } else if (objecto instanceof Compartimento) {
        for (var i = 0, quantos = this.compartimentoNomes.length; i < quantos; i++) {
            if (this.compartimentoNomes[i] === oldNome) {
                if (existsInArray(newNome, oldNome, objecto.parent.compartimentos, "nome")) {
                    alert("Já existe um compartimento com esse nome.");
                    return false;
                }
                objecto.nome = newNome;
                this.compartimentoNomes[i] = newNome;
                objecto.parent.compartimentos.naturalSort();
                break;
            }
        }

    //Se for um Equipamento verificar se já existe um equipamento com novo o nome escolhido
    } else if (objecto instanceof Equipamento) {
        for (var j = 0, tamanho = this.equipamentoNomes.length; j < tamanho; j++) {
            if (this.equipamentoNomes[j] === oldNome) {
                if (existsInArray(newNome, oldNome, objecto.parent.equipamentos, "nome")) {
                    alert("Já existe um compartimento com esse nome.");
                    return false;
                }
                objecto.nome = newNome;
                this.equipamentoNomes[j] = newNome;
                objecto.parent.equipamentos.naturalSort();
                break;
            }
        }
    }

    return true;
};


/**
 * Método para criar consolas
 * @param {string} nome - nome da consola a ser criada
 */
sistemaDomotico.criarConsola = function(nome) {

    nome = nome || prompt("Insira o nome de um piso", "1-R/C 2-Piso1 3-Piso2");

    //Se carregarmos no botão Cancelar do prompt sair da função
    if (nome === null) {
        return;
    }

    try {
        if (nome === void 0 || nome === "") {
            throw "Nome da consola inválido (não pode ser vazio).";

        } else {
            
            //Verficar se já existe uma consola com o nome escolhido
            for (var i = 0, quantos = this.consolas.length; i < quantos; i++) {
                if (this.consolas[i].nome === nome) {
                    throw "Já existe uma consola com esse nome.";
                }
            }
            var novaConsola = new Consola(nome, this);
            adicionarOrganizar(novaConsola, this.consolas);
            this.apresentar();
            return novaConsola;

        }
    } catch (err) {
        alert(err);
    }

};

/**
 * Método para apagar consolas
 * @param {HTMLElement[]} array - array de elementos html com o atributo nome="consola"
 */
sistemaDomotico.apagarConsola = function(array) {

    array = array || document.getElementsByName("consola");
    
    //Verificar quais os elementos com a checkbox selecionada e apaga-los
    for (var i = array.length - 1, tamanho = 0; i >= tamanho; i--) {
        for (var j = this.consolas.length - 1, quantos = 0; j >= quantos; j--) {
            if (array[i].checked && array[i].value === this.consolas[j].nome) {
                this.consolas.splice(j, 1);
            }
        }
    }
    sistemaDomotico.apresentar();
};

/**
 * Método para apresentar o sistema domótico com as consolas
 */
sistemaDomotico.apresentar = function() {
    var sistema = document.getElementById("sistema");

    //Remover elementos que estejam dentro do elemento HTML com id sistema
    while (sistema.hasChildNodes()) {
        sistema.removeChild(sistema.lastChild);
    }

    //Criar o titulo e sub-titulo
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Sistema Domótico"));
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Consolas:"));

    //Criar a lista das consolas
    var ul = document.createElement("ul");
    ul.setAttribute("class", "ulConsolas");

    //Percorrer o array das consolas e adicioná-las à lista
    for (var d = 0, quantos = this.consolas.length; d < quantos; d++) {
        var consola = document.createElement("li");

        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("value", this.consolas[d].nome);
        checkbox.setAttribute("name", "consola");
        consola.appendChild(checkbox);

        var consolaNameSpan = document.createElement("span");
        var consolaNome = document.createTextNode(this.consolas[d].nome);
        consolaNameSpan.setAttribute("class", "link_consola");

        //Adicionar o listener caso se carregue no nome da consola
        (function(consolas) {
            var consolaAux = consolas[d];
            consolaNameSpan.addEventListener("click", function() {
                consolaAux.apresentar();
            });

            consolaNameSpan.appendChild(consolaNome);
            consola.appendChild(consolaNameSpan);
        }(this.consolas));

        ul.appendChild(consola);
    }

    var butoes1 = document.getElementById("butoes");

    //Remover elementos que estejam dentro do elemento HTML com id butoes
    while (butoes1.hasChildNodes()) {
        butoes1.removeChild(butoes1.lastChild);
    }

    butoes1.setAttribute("class", "butoes1");

    //Criar o butão criar consola e associar o listener respectivo
    var criar = document.createElement("button");
    var criarTexto = document.createTextNode("Criar");
    criar.setAttribute("class", "botao");
    criar.appendChild(criarTexto);
    criar.addEventListener("click", function() {
        sistemaDomotico.criarConsola();
    });
    criar.addEventListener("mouseover", function() {
        criar.style.cursor = "pointer";
    });

    //Criar o butão apagar consola e associar o listener respectivo
    var apagar = document.createElement("button");
    var apagarTexto = document.createTextNode("Apagar");
    apagar.setAttribute("class", "botao");
    apagar.appendChild(apagarTexto);
    apagar.addEventListener("click", function() {
        sistemaDomotico.apagarConsola();
    });
    apagar.addEventListener("mouseover", function() {
        apagar.style.cursor = "pointer";
    });

    //Adicionar os elementos criados ao sistema
    sistema.appendChild(h1);
    sistema.appendChild(h2);
    sistema.appendChild(ul);

    //Adicionar os butões criados à div dos butões
    butoes1.appendChild(criar);
    butoes1.appendChild(apagar);

};


/**
 * Classe Consola
 */

/**
 * @class Agrupa os compartimentos
 * @constructs Consola
 * @param {String} - nome para indentificar a consola
 * @param {Object} sistemaDomotico - objecto que criou a consola
 * 
 * @property {String} nome - nome da consola
 * @property {Comparimento[]} compartimentos - conjunto de compartimentos associados a uma consola
 * @property {Object} parent - objecto que criou a consola
 * @returns {Compartimento} - compartimento criado
 */
function Consola(nome, sistemaDomotico) {
    this.nome = nome;
    this.compartimentos = [];
    this.parent = sistemaDomotico;
}

/**
 * Método para criar compartimentos
 * @param {string} nome - nome do compartimento
 */
Consola.prototype.criarCompartimento = function(nome) {


    nome = nome || prompt("Insira o nome de um compartimento", "1-Sala 2-Casa de Banho 3-Cozinha");

    if (nome === null) {
        return;
    }

    try {
        //Verificar se o nome escolhido não está definido, não é vazio e não foi carregado no cancelar
        if (nome === void 0 || nome === "" || nome === null) {
            throw "Nome do compartimento inválido (não pode ser vazio)";

        } else {
            //Verificar a existência de um compartimento com o nome escolhido
            for (var i = 0, quantos = sistemaDomotico.compartimentoNomes.length; i < quantos; i++) {
                if (sistemaDomotico.compartimentoNomes[i].nome === nome) {
                    throw "Já existe uma compartimento com esse nome.";

                }
            }
            //Criar o compartimento com o nome escolhido e retorna-lo.
            var novoCompartimento = new Compartimento(nome, this);
            adicionarOrganizar(novoCompartimento, this.compartimentos);
            sistemaDomotico.compartimentoNomes.push(nome);
            //Atualizar o HTML da página
            this.apresentar();
            return novoCompartimento;
        }
    } catch (err) {
        alert(err);
    }
};

/**
 * Método para apagar compartimentos
 * Primeiro vai pesquisar se no compartimento associado a uma consola existe o compartimento. 
 * Se existe apaga do array de compartimentos da consola e de seguida apaga do array de nomes de
 * compartimentos do sistema de domotica.
 * @param {HTMLElement[]} array - array com os elementos html dos compartimentos
 */
Consola.prototype.apagarCompartimento = function(array) {

    array = array || document.getElementsByName("compartimento");

    //Eliminar do array dos compartimentos os comparimentos com o atributo checked da checkbox ativo
    for (var i = array.length - 1, tamanho = 0; i >= tamanho; i--) {
        for (var j = this.compartimentos.length - 1, quantos = 0; j >= quantos; j--) {
            if (array[i].checked && array[i].value === this.compartimentos[j].nome) {
                this.compartimentos.splice(j, 1);
            }
        }
    }
    //Eliminar do array dos nomes dos compartimentes em utilização os comparimentos com o atributo checked da checkbox ativo
    for (var i = array.length - 1, tamanho1 = 0; i >= tamanho1; i--) {
        for (var j = this.compartimentos.length - 1, quantos1 = 0; j >= quantos1; j--) {
            if (array[i].checked && array[i].value === sistemaDomotico.compartimentoNomes[j].nome) {
                sistemaDomotico.compartimentoNomes.splice(j, 1);
            }
        }
    }
    //Atualizar o HTML da página
    this.apresentar();
};

/**
 * Método para apresentar o os compartimentos da consola na página HTML
 */
Consola.prototype.apresentar = function() {
    //Guardar a a referencia da consola a chamar esta método para uso dentro das funções dos listeners
    var consola = this;
    
    var sistema = document.getElementById("sistema");

    //Remover os elementos dentro do elemento HTML com o id sistema
    while (sistema.hasChildNodes()) {
        sistema.removeChild(sistema.lastChild);
    }

    //Criar o elemento HTML com o título da consola e os seus listeners
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "nome");
    h1.appendChild(document.createTextNode(this.nome));

    h1.onclick = function() {
        editHtmlLabel("nome", consola);
    };
    h1.addEventListener("mouseover", function() {
        h1.style.cursor = "pointer";
    });

    //Criar elementos HTML que contém o sub-título da consola
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Compartimentos"));

    //Criar o elemento HTML da lista de consolas
    var ul = document.createElement("ul");
    ul.setAttribute("class", "ulCompartimentos");
    
    //Precorrer a lista de compartimentos dentro desta consola e adicioná-los à lista
    for (var i = 0, quantos = this.compartimentos.length; i < quantos; i++) {

        var compartimento = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("value", this.compartimentos[i].nome);
        checkbox.setAttribute("name", "compartimento");
        compartimento.appendChild(checkbox);

        var compartimentoNameSpan = document.createElement("span");
        var compartimentoNome = document.createTextNode(this.compartimentos[i].nome);
        compartimentoNameSpan.setAttribute("class", "link_compartimentos");

        //Definir o listener para quando se carregar em cima do nome do compartimento
        (function(compartimentos) {
            var compartimentoAux = compartimentos[i];
            compartimentoNameSpan.addEventListener("click", function() {
                compartimentoAux.apresentar();
            });
            compartimentoNameSpan.appendChild(compartimentoNome);
            compartimento.appendChild(compartimentoNameSpan);
        }(this.compartimentos));

        ul.appendChild(compartimento);
    }

    var butoes2 = document.getElementById("butoes");
    butoes2.setAttribute("class", "butoes2");
    
    //Eliminar os elementos HTML dentro da div dos butoes
    while (butoes2.hasChildNodes()) {
        butoes2.removeChild(butoes2.lastChild);
    }
    
    //Criar o elemento HTML do butão criar compartimento e definir o seu listener
    var criar = document.createElement("button");
    var criarTexto = document.createTextNode("Criar");
    criar.setAttribute("class", "botao");
    criar.appendChild(criarTexto);
    criar.addEventListener("click", function() {
        consola.criarCompartimento();
    });
    criar.addEventListener("mouseover", function() {
        criar.style.cursor = "pointer";
    });

    //Criar o elemento HTML do butão apagar compartimento e definir o seu listener
    var apagar = document.createElement("button");
    var apagarTexto = document.createTextNode("Apagar");
    apagar.setAttribute("class", "botao");
    apagar.appendChild(apagarTexto);
    apagar.addEventListener("click", function() {
        consola.apagarCompartimento();
    });
    apagar.addEventListener("mouseover", function() {
        apagar.style.cursor = "pointer";
    });

    //Criar o elemento HTML do butão Back e definir o seu listener
    var back = document.createElement("button");
    var backTexto = document.createTextNode("Back");
    back.setAttribute("class", "botao");

    back.appendChild(backTexto);
    back.addEventListener("click", function() {
        sistemaDomotico.apresentar();
    });
    back.addEventListener("mouseover", function() {
        back.style.cursor = "pointer";
    });

    //Associar os elementos HTML da consola ao elemento HTML com o id sistema
    sistema.appendChild(h1);
    sistema.appendChild(h2);
    sistema.appendChild(ul);

    //Associar os butões HTML ao elemento HTML à div dos butões
    butoes2.appendChild(criar);
    butoes2.appendChild(apagar);
    butoes2.appendChild(back);

};


/**
 * Class Compartimento
 */

/**
 * @class Serve para agrupar equipamentos
 * @constructs Compartimento
 * @param {string} nome - nome para identificação do Compartimento
 * @param {Consola} consola - referência para a consola que criou este compartimento
 * 
 * @property {string} nome - nome para indentificar o compartimento
 * @property {Equipamento[]} equipamentos - conjunto de equipamentos associados ao Compartimento
 * @param {Consola} parent - referência para a consola que criou este compartimento
 */
function Compartimento(nome, consola) {
    this.nome = nome;
    this.equipamentos = [];
    this.parent = consola;
}

/**
 * Método para criar equipamentos
 * @param {string} nome - nome do tipo equipamento a criar;
 */
Compartimento.prototype.criaEquipamento = function(nome) {

    //Verificar se o butão cancelar do prompt foi primido
    if (nome === null) {
        return;
    }

    //Verificar se o nome está definido e não vazio
    if (nome === void 0 || nome === "") {
        throw new Error("Nome equipamento inválido(não pode ser vazio)");

    } else {
        //Verificar a existência do nome escolhido
        for (var i = 0, quantos = sistemaDomotico.equipamentoNomes.length; i < quantos; i++) {
            if (sistemaDomotico.equipamentoNomes[i].nome === nome) {
                throw new Error("Já existe uma equipamento com esse nome.");
            }
        }

        //Conforme o tipo de equipamento escolhido instancia-lo e organiza-lo
        var novoEquipamento;
        switch (nome) {
            case tipoEquipamento.prop[tipoEquipamento.TERMOMETRO].id:
                novoEquipamento = new Termometro(this);
                adicionarOrganizar(novoEquipamento, this.equipamentos);
                break;
            case tipoEquipamento.prop[tipoEquipamento.DETETOR_MOVIMENTO].id:
                novoEquipamento = new DetetorMovimento(this);
                adicionarOrganizar(novoEquipamento, this.equipamentos);
                break;
            case tipoEquipamento.prop[tipoEquipamento.DETETOR_FECHO_PORTA].id:
                novoEquipamento = new DetetorFechoPorta(this);
                adicionarOrganizar(novoEquipamento, this.equipamentos);
                break;
            case tipoEquipamento.prop[tipoEquipamento.ESTORE_ELETRICO].id:
                novoEquipamento = new EstoreEletrico(this);
                adicionarOrganizar(novoEquipamento, this.equipamentos);
                break;
            case tipoEquipamento.prop[tipoEquipamento.AR_CONDICIONADO].id:
                novoEquipamento = new ArCondicionado(this);
                adicionarOrganizar(novoEquipamento, this.equipamentos);
                break;
            case tipoEquipamento.prop[tipoEquipamento.GERADOR_MOVIMENTO].id:
                novoEquipamento = new GeradorMovimento(this);
                adicionarOrganizar(novoEquipamento, this.equipamentos);
                break;
            case tipoEquipamento.prop[tipoEquipamento.TRINCO_ELETRICO].id:
                novoEquipamento = new TrincoEletrico(this);
                adicionarOrganizar(novoEquipamento, this.equipamentos);
                break;
            case tipoEquipamento.prop[tipoEquipamento.MOTOR_ELETRICO].id:
                novoEquipamento = new MotorEletrico(this);
                adicionarOrganizar(novoEquipamento, this.equipamentos);
                break;

            default:
                throw new Error("Equipamento Inválido");
        }
        
        //Adicionar o novo equipamento à lista global de nomes e atualizar a página com a lista de equipamentos
        sistemaDomotico.equipamentoNomes.push(novoEquipamento.nome);
        this.apresentar();
        return novoEquipamento;
    }
};

/**
 * Método para apagar equipamentos
 * @param {string} nome - nome do equipamento a apagar;
 */
Compartimento.prototype.apagarEquipamento = function(array) {

    array = array || document.getElementsByName("equipamento");

    //percorrer todos os equipamentos e selecionar os com a checkbox selecionada
    for (var i = array.length - 1, tamanho = 0; i >= tamanho; i--) {
        for (var j = this.equipamentos.length - 1, quantos = 0; j >= quantos; j--) {
            if (array[i].checked && array[i].value === this.equipamentos[j].nome) {
                
                //Se o equipamento a apagar for um Detetor de Fecho de Porta, eliminar as associações que este terá
                if (this.equipamentos[j] instanceof DetetorFechoPorta) {
                    var TEs = this.getEquipamentosTipo(TrincoEletrico);
                    for (var m = 0; m < TEs.length; m++) {
                        if (TEs[m].conectadoA && TEs[m].conectadoA.nome === this.equipamentos[j].nome) {
                            TEs[m].conectadoA = void 0;
                        }
                    }
                //Se o equipamento a apagar for um Estore Eletrico, eliminar as associações que este terá
                } else if (this.equipamentos[j] instanceof EstoreEletrico) {
                    var MEs = this.getEquipamentosTipo(MotorEletrico);
                    for (var h = 0; h < TEs.length; h++) {
                        if (MEs[h].conectadoA && MEs[h].conectadoA.nome === this.equipamentos[j].nome) {
                            MEs[h].conectadoA = void 0;
                        }
                    }
                }
                
                //Apagar equipamento do array de equipamentos do compartimento
                this.equipamentos.splice(j, 1);
                
            }
        }
    }
    //Apagar o equipamento da lista global de nomes
    for (var i = array.length - 1, tamanho1 = 0; i >= tamanho1; i--) {
        for (var j = this.equipamentos.length - 1, quantos1 = 0; j >= quantos1; j--) {
            if (array[i].checked && array[i].value === sistemaDomotico.equipamentoNomes[j].nome) {
                sistemaDomotico.equipamentoNomes.splice(j, 1);
            }
        }
    }
    
    //Atualizar a página com a lista de equipamentos
    this.apresentar();
};

/**
 * Retorna todos os equipamentos do compartimento do tipo enviado
 * @param {Object} tipo - definição do objecto
 * 
 * @returns {Equipamento[]} - equipamentos da instância enviada como parâmetro
 */
Compartimento.prototype.getEquipamentosTipo = function(tipo) {
    var equipamentosDoTipo = [];
    
    //Percorrer todos os equipamentos do compartimento e retornar os que são instancias do tipo escolhido
    for (var i = 0; i < this.equipamentos.length; i++) {
        if (this.equipamentos[i] instanceof tipo) {
            equipamentosDoTipo.push(this.equipamentos[i]);
        }
    }
    return equipamentosDoTipo;
}

/**
 * Método para apresentar o os equipamentos do compartimento na página HTML
 */
Compartimento.prototype.apresentar = function() {
    
    var sistema = document.getElementById("sistema");
    var compartimento = this;

    //Verificar a existência de elementos dentro do elemento HTML com id sistema apaga-los
    while (sistema.hasChildNodes()) {
        sistema.removeChild(sistema.lastChild);
    }

    //Criar o elemento HTML do titulo do compartimento e associar o listener respetivo
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "nome");
    h1.appendChild(document.createTextNode(this.nome));
    h1.onclick = function() {
        editHtmlLabel("nome", compartimento);
    };

    //Criar o elemento HTML para o subtitulo do compartimento
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Equipamentos"));

    //Criar o elemento HTML para a lista de equipamentos
    var ul = document.createElement("ul");
    ul.setAttribute("class", "ulEquipamentos");
    
    //Percorrer os equipamentos, criar os elementos HTML e adicionar-los à lista HTML
    for (var i = 0, quantos = this.equipamentos.length; i < quantos; i++) {
        var equipamento = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("value", this.equipamentos[i].nome);
        checkbox.setAttribute("name", "equipamento");
        equipamento.appendChild(checkbox);
        var equipamentoNome = document.createTextNode(this.equipamentos[i].nome);
        equipamento.appendChild(equipamentoNome);
        ul.appendChild(equipamento);
    }

    var butoes3 = document.getElementById("butoes");
    
    //Verificar a existência de elementos dentro do element HTML com id butoes e remove-los
    while (butoes3.hasChildNodes()) {
        butoes3.removeChild(butoes3.lastChild);
    }

    butoes3.setAttribute("class", "butoes3");

    //Criar o butão criar e associar os seus listeners
    var criar = document.createElement("button");
    var criarTexto = document.createTextNode("Criar");
    criar.setAttribute("class", "botao");
    criar.appendChild(criarTexto);
    criar.addEventListener("click", function() {
        selectModal("Criar equipamento do tipo: ", function(nome) {
            compartimento.criaEquipamento(nome);
        });
    });
    criar.addEventListener("mouseover", function() {
        criar.style.cursor = "pointer";
    });

    //Criar o butão apagar e associar os seus listeners
    var apagar = document.createElement("button");
    var apagarTexto = document.createTextNode("Apagar");
    apagar.setAttribute("class", "botao");
    apagar.appendChild(apagarTexto);
    apagar.addEventListener("click", function() {
        compartimento.apagarEquipamento();
    });
    apagar.addEventListener("mouseover", function() {
        apagar.style.cursor = "pointer";
    });

    //Criar o botão para ir para a janela anterior e ps seus listeners
    var back = document.createElement("button");
    var backTexto = document.createTextNode("Back");
    back.setAttribute("class", "botao");
    back.appendChild(backTexto);
    back.addEventListener("click", function() {
        compartimento.parent.apresentar();
    });
    back.addEventListener("mouseover", function() {
        back.style.cursor = "pointer";
    });

    //Criar o botão Monitorizar e associar os repetivos listeners
    var monotorizar = document.createElement("button");
    var monotorizarTexto = document.createTextNode("Monitorizar");
    monotorizar.setAttribute("class", "botao");
    monotorizar.appendChild(monotorizarTexto);
    monotorizar.addEventListener("click", function() {
        compartimento.monotorizar();
    });
    monotorizar.addEventListener("mouseover", function() {
        monotorizar.style.cursor = "pointer";
    });

    //Associar os elementos HTML criados no elemento sistema
    sistema.appendChild(h1);
    sistema.appendChild(h2);
    sistema.appendChild(ul);

    //Associar os botões criados à div dos botões
    butoes3.appendChild(criar);
    butoes3.appendChild(apagar);
    butoes3.appendChild(back);
    butoes3.appendChild(monotorizar);

};


/**
 * Método para apresentar os equipamentos do compartimento na página HTML de modo que possam ser monitorizados
 */
Compartimento.prototype.monotorizar = function() {
    
    var sistema = document.getElementById("sistema");
    
    //Guardar uma referencia para este compartimento para utilizar nos listeners
    var compartimento = this;
    
    //Verificar a existência de elementos dentro do element HTML com id butoes e remove-los
    while (sistema.hasChildNodes()) {
        sistema.removeChild(sistema.lastChild);
    }

    //Criar o título do elemento HTML do monitorizar do compartimento e o seu listener
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "nome");
    h1.appendChild(document.createTextNode(this.nome));

    h1.onclick = function() {
        editHtmlLabel("nome", compartimento);
    };


    //Criar o sub-titulo do monitorizar do compartimento
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Monitorizar"));

    //Criar a div para colocar os equipamentos
    var div = document.createElement("div");
    div.setAttribute("class", "tabuleiro");
    div.setAttribute("width", "900");
    div.setAttribute("height", "500");

    //Precorrer os equipamentos e agrupa-los por tipo
    compartimento.desenharEquipamento(div);

    var butoes4 = document.getElementById("butoes");
    
    //Limpar a div dos botões
    while (butoes4.hasChildNodes()) {
        butoes4.removeChild(butoes4.lastChild);
    }

    butoes4.setAttribute("class", "butoes4");

    //Criar o botao para voltar para o menu anterior
    var back = document.createElement("button");
    var backTexto = document.createTextNode("Back");
    back.setAttribute("class", "botao");
    back.appendChild(backTexto);
    back.addEventListener("click", function() {
        compartimento.apresentar();
    });
    back.addEventListener("mouseover", function() {
        back.style.cursor = "pointer";
    });

    //Associar os elementos criados ao elemento HTML sistema
    sistema.appendChild(h1);
    sistema.appendChild(h2);
    sistema.appendChild(div);

    //Associar o botão criado ao div dos botões
    butoes4.appendChild(back);


};

/**
 * Método que vai pegar em todos os equipamentos e chamar o método apresentar para que estes possam ser vistos no menu monotorizar
 */
Compartimento.prototype.desenharEquipamento = function(div) {

    var quantos = this.equipamentos.length;

    //Categoria relacionada com a temperatura
    for (var i = 0; i < quantos; i++) {
        if (this.equipamentos[i].apresentar && this.equipamentos[i] instanceof ArCondicionado)
            div.appendChild(this.equipamentos[i].apresentar());
    }

    for (var i = 0; i < quantos; i++) {
        if (this.equipamentos[i].apresentar && this.equipamentos[i] instanceof Termometro)
            div.appendChild(this.equipamentos[i].apresentar());
    }

    //Categoria relacionada com o movimento
    for (var i = 0; i < quantos; i++) {
        if (this.equipamentos[i].apresentar && this.equipamentos[i] instanceof GeradorMovimento)
            div.appendChild(this.equipamentos[i].apresentar());
    }
    
    for (var i = 0; i < quantos; i++) {
        if (this.equipamentos[i].apresentar && this.equipamentos[i] instanceof DetetorMovimento)
            div.appendChild(this.equipamentos[i].apresentar());
    }

    //Categoria relacionada com as portas
    for (var i = 0; i < quantos; i++) {
        if (this.equipamentos[i].apresentar && this.equipamentos[i] instanceof TrincoEletrico)
            div.appendChild(this.equipamentos[i].apresentar());
    }
    
    for (var i = 0; i < quantos; i++) {
        if (this.equipamentos[i].apresentar && this.equipamentos[i] instanceof DetetorFechoPorta)
            div.appendChild(this.equipamentos[i].apresentar());
    }
    
    //Categoria relacionada com os estores
    for (var i = 0; i < quantos; i++) {
        if (this.equipamentos[i].apresentar && this.equipamentos[i] instanceof MotorEletrico)
            div.appendChild(this.equipamentos[i].apresentar());
    }
    
    for (var i = 0; i < quantos; i++) {
        if (this.equipamentos[i].apresentar && this.equipamentos[i] instanceof EstoreEletrico)
            div.appendChild(this.equipamentos[i].apresentar());
    }
};

/**
 * Classe Equipamento
 */

/**
 * @class Objetos que simulam equipamentos elétricos.
 * @constructs Equipamento
 * @param {Compartimento} compartimento - compartimento onde está contido o equipamento
 */
function Equipamento(compartimento) {
    this.parent = compartimento;
}


/**
 * Class Sensor
 */

/**
 * @class objectos que simulam equipamentos do tipo sensor.
 * @constructs Sensor
 * @extends {Equipamento}
 * @param {Compartimento} compartimento - compartimento onde está contido o equipamento
 */
function Sensor(compartimento) {
    Equipamento.call(this, compartimento);
}
Sensor.prototype = Object.create(Equipamento.prototype);
Sensor.prototype.construtor = Sensor;


/**
 * Class Termometro
 */

/**
 * @class objectos que simulam equipamentos do tipo termometro.
 * @constructs Termometro
 * @extends {Sensor}
 * @param {Compartimento} compartimento - compartimento onde está contido o equipamento
 * 
 * @property {string} nome - identificador do termometro.
 * @property {number} valor - temperatura do termometro em graus ºC.
 */
function Termometro(compartimento) {
    Sensor.call(this, compartimento);
    //Criação do contador para os Termometros
    Termometro.count = (Termometro.count || 0) + 1;

    this.nome = "TM" + Termometro.count;
    this.valor = omissao.valorTemperatura;
}
Termometro.prototype = Object.create(Sensor.prototype);
Termometro.prototype.constructor = Termometro;

/**
 * Método para criar o elemento HTML para representar o Termómetro
 * 
 * @returns {HTMLElement} - elemento HTML que representa o Termómetro
 */
Termometro.prototype.apresentar = function() {
    
    //Criar a div do Termómetro
    var div = document.createElement("div");
    div.setAttribute("class", "equipamento");
    div.setAttribute("id", this.nome);

    //Criar o elemento com o nome do termómetro
    var nome = document.createElement("h3");
    nome.appendChild(document.createTextNode(this.nome));

    //Criar o valor da temperatura do termómetro
    var valor = document.createElement("h4");
    valor.appendChild(document.createTextNode(this.valor + "ºC"));

    //Criar a imagem do termómtro
    var imagem = document.createElement("img");
    imagem.src = "images/termometro.png";

    //Associar os elementos criados à div do termómetro
    div.appendChild(nome);
    div.appendChild(valor);
    div.appendChild(imagem);

    return div;
};


/**
 * Class DetetorMovimento
 */

/**
 * @class objectos que simulam equipamentos do tipo Detetor de Movimento.
 * @constructs DetetorMovimento
 * @extends {Sensor}
 * @param {Compartimento} compartimento - compartimento onde está contido o equipamento
 * 
 * @property {string} nome - identificador do detetor de movimento.
 * @property {boolean} valor - true: existem movimento, false: não existe movimento.
 */
function DetetorMovimento(compartimento) {
    Sensor.call(this, compartimento);
    //Criação do contador para os Detetores de Movimento
    DetetorMovimento.counter = (DetetorMovimento.counter || 0) + 1;
    
    this.nome = "DM" + DetetorMovimento.counter;
    this.estado = omissao.estadoMovimento;
}
DetetorMovimento.prototype = Object.create(Sensor.prototype);
DetetorMovimento.prototype.constructor = DetetorMovimento;

/**
 * Método que cria a representação HTML do Detetor de Movimento
 *
 * @returns {HTMLElement} - Elemento que representa o Detetor de Movimento
 */
DetetorMovimento.prototype.apresentar = function() {
    
    //Criar a div do Detetor de Movimento
    var div = document.createElement("div");
    div.setAttribute("class", "equipamento");
    div.setAttribute("id", this.nome);
    
    //Criar o nome do Detetor de Movimento
    var header = document.createElement("h3");
    var headerContent = document.createTextNode(this.nome);
    header.appendChild(headerContent);

    //Criar a imagem do detetor de Movimento
    var img = document.createElement("img");
    img.setAttribute("src", estadoMovimento.prop[this.estado].imgLinkLamp);

    //Associar os elementos criados à div do detetor de movimento
    div.appendChild(header);
    div.appendChild(img);

    return div;
};


/**
 * Class DetetorFechoPorta
 */

/**
 * @class objectos que simulam equipamentos do tipo Detetor de Fecho de Porta.
 * @constructs DetetorFechoPorta
 * @extends {Sensor}
 * @param {Compartimento} compartimento - compartimento onde está contido o equipamento
 * 
 * @property {string} nome - identificador do Detetor de Fecho de Porta.
 * @property {estadoTrinco} estado - enumerado com o estado correspondente
 * @property {TrincoEletrico[]} conectadoA - trincos eletricos que estão associados a esta porta.
 */
function DetetorFechoPorta(compartimento) {
    Sensor.call(this, compartimento);
    //Criar o contador para o fetetor de fecho de porta
    DetetorFechoPorta.counter = (DetetorFechoPorta.counter || 0) + 1;
    
    this.nome = "DF" + DetetorFechoPorta.counter;
    this.estado = omissao.estadoPorta;
    
    //Criar array de equipamentos que estão associados
    this.conectadoA = [];
}
DetetorFechoPorta.prototype = Object.create(Sensor.prototype);
DetetorFechoPorta.prototype.constructor = DetetorFechoPorta;

/**
 * Método que retorna a representação em HTML do Detetor de Fecho de Porta
 * 
 * @returns {HTMLElement} - representação em HTML do detetor de fecho de porta
 */
DetetorFechoPorta.prototype.apresentar = function() {
    
    //Criação da div do detetor de fecho de porta
    var div = document.createElement("div");
    div.setAttribute("class", "equipamento");
    div.setAttribute("id", this.nome);

    //Criação do nome do detetor de fecho de porta
    var header = document.createElement("h3");
    var headerContent = document.createTextNode(this.nome);
    header.appendChild(headerContent);

    //Criação da imagem do detetor de fecho de porta
    var img = document.createElement("img");
    img.setAttribute("src", estadoTrinco.prop[this.estado].imgLinkPorta);

    //Associar os elementoes criados à div de fecho de porta
    div.appendChild(header);
    div.appendChild(img);

    return div;
};


/**
 * Class EstoreEletrico
 */

/**
 * @class objectos que simulam equipamentos do tipo Estore Eletrico.
 * @constructs EstoreEletrico
 * @extends {Sensor}
 * @param {Compartimento} compartimento - compartimento onde está contido o equipamento
 * 
 * @property {string} nome - identificador do Detetor de Estore Eletrico.
 * @property {estadoEstore} estado - enum com a posição correspondente do estore.
 */
function EstoreEletrico(compartimento) {
    Sensor.call(this, compartimento);
    //Criação do contador dos estores eletricos
    EstoreEletrico.counter = (EstoreEletrico.counter || 0) + 1;
    
    this.nome = "EE" + EstoreEletrico.counter;
    this.estado = omissao.estadoEstore;
}
EstoreEletrico.prototype = Object.create(Sensor.prototype);
EstoreEletrico.prototype.constructor = EstoreEletrico;

/**
 * Método que devolve a representação em HTML do Estore
 * 
 * @returns {HTMLElement} - div com a informação do estore
 */
EstoreEletrico.prototype.apresentar = function() {

    //Criação do div do estore eletrico
    var div = document.createElement("div");
    div.setAttribute("class", "equipamento");
    div.setAttribute("id", this.nome);
    
    //Criação do nome do estore eletrico
    var header = document.createElement("h3");
    var headerContent = document.createTextNode(this.nome);
    header.appendChild(headerContent);

    //Criação da imagem do estore eletrico que vai variar conforme o estado
    var img = document.createElement("img");
    img.setAttribute("src", estadoEstore.prop[this.estado].imgLink);

    //Associar os elementos criados à div do estore eletrico
    div.appendChild(header);
    div.appendChild(img);

    return div;
};


/**
 * Class Atuador
 */

/**
 * @class objectos que simulam equipamentos do tipo Atuador.
 * @constructs Atuador
 * @extends {Equipamento}
 * @param {Compartimento} compartimento - compartimento onde está contido o equipamento.
 */
function Atuador(compartimento) {
    Equipamento.call(this, compartimento);
}
Atuador.prototype = Object.create(Equipamento.prototype);
Atuador.prototype.construct = Atuador;


/**
 * ImpactoGeral
 */

/**
 * @class objectos que simulam equipamentos do tipo Impacto Geral.
 * @constructs ImpactoGeral
 * @extends {Atuador}
 * @param {Compartimento} compartimento - compartimento onde está contido o equipamento.
 */
function ImpactoGeral(compartimento) {
    Atuador.call(this, compartimento);
}
ImpactoGeral.prototype = Object.create(Atuador.prototype);
ImpactoGeral.prototype.constructor = ImpactoGeral;


/**
 * Class ArCondicionado
 */

/**
 * @class objectos que simulam equipamentos do tipo Ar Condicionado.
 * @constructs ArCondicionado
 * @extends {ImpactoGeral}
 * @param {Compartimento} compartimento - referência para o compartimento que contém o equipmaneto.
 * 
 * @property {string} nome - identificador do Ar Condicionado.
 * @property {numeric} valor - valor da temperatura para definir no Ar Condicionado.
 */
function ArCondicionado(compartimento) {
    ImpactoGeral.call(this, compartimento);
    //Criar o contador de ar condicionados
    ArCondicionado.counter = (ArCondicionado.counter || 0) + 1;
    
    this.nome = "AC" + ArCondicionado.counter;
    this.valor = omissao.valorTemperatura;
}
ArCondicionado.prototype = Object.create(ImpactoGeral.prototype);
ArCondicionado.prototype.constructor = ArCondicionado;

/**
 * Método para alterar a temperatura do ar condicionado em display
 * @param {number} temperatura - valor a alterar
 */
ArCondicionado.prototype.alterarTemperatura = function(temperatura) {
    if (temperatura === "" || isNaN(temperatura) || temperatura < omissao.valorMinimoTemperatura || temperatura > omissao.valorMaximoTemperatura) {
        alert("Temperatura inválida! Tem de ser um número e estar entre: " + omissao.valorMinimoTemperatura + " e " + omissao.valorMaximoTemperatura);
        throw new Error("Temperatura Inválida");
    } else {
        this.valor = temperatura;
    }
};

/**
 * Método para acionar o ar condicionado e mudar a temperatura no compartimento
 * @param {number} temperatura - valor a alterar
 */
ArCondicionado.prototype.acionar = function(temperatura) {
    
    var termometros = this.parent.getEquipamentosTipo(Termometro);
    
    //Precorrer todos os termometros do compartimento e alterar os seus valores para o valor escolhido
    for (var i = 0; i < termometros.length; i++) {
        termometros[i].valor = temperatura;
    }
    
    //Atualizar a a pagina que mostra os equipamentos
    this.parent.monotorizar();
};

/**
 * Método para apresentar um equipamento do tipo ar condicionado
 * 
 * @returns {HTMLElement} - div com a informação do ar condicionado
 */
ArCondicionado.prototype.apresentar = function() {

    //Guardar referência deste objecto para utilização dentro das funções dos listeners
    var arCondicionado = this;

    //Criação da div do ar condicionado
    var div = document.createElement("div");
    div.setAttribute("class", "equipamento");
    div.setAttribute("id", this.nome);

    //Criar o nome do arcondicionado
    var header = document.createElement("h3");
    var headerContent = document.createTextNode(arCondicionado.nome);
    header.appendChild(headerContent);

    //Criar a temperatura alvo do arcondicionado e os respetivos listeners para alterar a mesma
    var state = document.createElement("h4");
    var stateText = document.createTextNode(arCondicionado.valor + "ºC");
    state.appendChild(stateText);
    state.addEventListener("click", function() {
        arCondicionado.editHtmlLabel(state, arCondicionado);
    });
    state.addEventListener("mouseover", function() {
        state.style.cursor = "pointer";
    });

    //Criar a imagem do ar condicionado e o respetivo listener para acionar ao clicar na imagem
    var img = document.createElement("img");
    img.setAttribute("src", "/images/arCondicionado.png");
    img.addEventListener("click", function() {
        arCondicionado.acionar(arCondicionado.valor);
    });
    img.addEventListener("mouseover", function() {
        img.style.cursor = "pointer";
    });

    //Associar os elementos criados à div do ar condicionado
    div.appendChild(header);
    div.appendChild(state);
    div.appendChild(img);

    return div;
};

/**
 * Alterar o texto de um node, e se for válido redefinir no objecto de origem
 * Recorre à tecla ENTER (key code = 13) para validação.
 * @param {HTMLElement} elem - elemento HTML que se vai alterar.
 * @param {object} src - Objecto que representa o tal elemento.
 */
ArCondicionado.prototype.editHtmlLabel = function(elem, src) {
    
    //Definir a função para ser executada quando o utilizador primir enter
    var editBoxToLabel = function(e, elem, src) {
        
        //Verifica se a tecla primida foi o enter - keycode = 13
        if (e.which === 13) {

            //Obter o texto inserido
            var text = elem.childNodes[0].value;

            //Alterar a temperatura dos sensores e ar condicionado
            src.alterarTemperatura(text);
            
            //Criar um elemento HTML a conter o novo valor do ar condicionado
            var textnode = document.createTextNode(src.valor + "ºC");

            //Remover o textbox e adicionar o elemento HTML de texto com o novo valor do ar condicionado
            elem.removeChild(elem.childNodes[0]);
            elem.appendChild(textnode);

            //Associar novamente o listener para quando se clicar permitir alterar de novo
            elem.onkeypress = void 0;
            elem.onclick = function() {
                src.editHtmlLabel(elem, src);
            };
        }
    };
    
    //Criar a caixa de texto para se inserir o novo valor da temperatura
    var textbox = document.createElement("input");
    textbox.setAttribute("type", "input");
    textbox.setAttribute("size", "4em");
    textbox.setAttribute("value", src.valor);
    
    //Remover o elemento de texto com o valor da temperatura e substituir pela caixa de texto criada
    elem.removeChild(elem.childNodes[0]);
    elem.appendChild(textbox);

    //Associar o listener para quando se clicar numa tecla validar a nova temperatura
    elem.onclick = void 0;
    elem.onkeypress = function(e) {
        editBoxToLabel(e, elem, src);
    };
    
    //Focar a caixa de texto e selecionar o texto que está la dentro
    textbox.focus();
    textbox.select();
};


/**
 * GeradorMovimento
 */

/**
 * @class objectos que simulam equipamentos do tipo Gerador Movimento.
 * @constructs GeradorMovimento
 * @extends {ImpactoGeral}
 * @param {Compartimento} compartimento - referência para o compartimento que contém o equipmaneto.
 * 
 * @property {string} nome - identificador do Gerador de Movimento.
 * @property {boolean} estado - true: está a gerar movimento, false: não está a gerar movimento.
 */
function GeradorMovimento(compartimento) {
    ImpactoGeral.call(this, compartimento);
    //Criar o contador para o gerador de movimento
    GeradorMovimento.counter = (GeradorMovimento.counter || 0) + 1;
    
    this.nome = "GM" + GeradorMovimento.counter;
    this.estado = omissao.estadoMovimento;
}
GeradorMovimento.prototype = Object.create(ImpactoGeral.prototype);
GeradorMovimento.prototype.constructor = GeradorMovimento;

/**
 * Método para activar/desactivar o gerador de movimento 
 */
GeradorMovimento.prototype.geraMovimento = function() {

    var ligados = 0;

    //Alterar o estado do gerador para o oposto
    this.estado = estadoMovimento.prop[this.estado].isLigado ? estadoMovimento.SEM_MOVIMENTO : estadoMovimento.COM_MOVIMENTO;

    //Precorre os geradores de movimento e contar o número de geradores que estão ligados
    var GMs = this.parent.getEquipamentosTipo(GeradorMovimento);
    for (var i = 0; i < GMs.length; i++) {
        if (estadoMovimento.prop[GMs[i].estado].isLigado) {
            ligados++;
        }
    }
    
    //Vai precorrer os detetores de movimento e alterar o estado se:
        //Não houver nenhum gerador ligado
        //OU SE
        //Se houver apenas 1 gerador ligado e seja o gerador que acabamos de alterar 
    var DMs = this.parent.getEquipamentosTipo(DetetorMovimento);
    if (ligados === 0 || (ligados === 1 && estadoMovimento.prop[this.estado].isLigado)) {
        for (var i = 0; i < DMs.length; i++) {
            DMs[i].estado = this.estado;
        }
    }

    //Atualizar a apresentação dos equipamentos no painel monitorizar
    this.parent.monotorizar();

};

/**
 * Método para apresentar um equipamento do tipo gerador de movimento
 * 
 * @returns {HTMLElement} - div com a informação do gerador de movimento
 */
GeradorMovimento.prototype.apresentar = function() {

    //Guardar referência para este gerador para se utilizar dentro das funções dos listeners
    var geradorMovimento = this;

    //Criar a div do gerador de movimento
    var div = document.createElement("div");
    div.setAttribute("class", "equipamento");
    div.setAttribute("id", this.nome);

    //Criar o nome do gerador de movimento
    var header = document.createElement("h3");
    var headerContent = document.createTextNode(this.nome);
    header.appendChild(headerContent);

    //Criar a imagem do gerador de movimento e associar os listeners respetivos para alterar o estado
    var img = document.createElement("img");
    img.setAttribute("src", estadoMovimento.prop[this.estado].imgLinkMov);
    img.addEventListener("click", function() {
        geradorMovimento.geraMovimento();
    });
    img.addEventListener("mouseover", function() {
        img.style.cursor = "pointer";
    });

    //Associar os elementos criados à div do gerador de movimento
    div.appendChild(header);
    div.appendChild(img);

    return div;
};


/**
 * ImpactoLocal
 */

/**
 * @class objectos que simulam equipamentos do tipo Impacto Local.
 * @constructs ImpactoLocal
 * @extends {Atuador}
 * @param {Compartimento} compartimento - referência para o compartimento que contém o equipmaneto.
 */
function ImpactoLocal(compartimento) {
    Atuador.call(this, compartimento);
}
ImpactoLocal.prototype = Object.create(Atuador.prototype);
ImpactoLocal.prototype.constructor = ImpactoLocal;


/**
 * TrincoElectrico
 */

/**
 * @class objectos que simulam equipamentos do tipo Trinco Electrico.
 * @constructs TrincoElectrico
 * @extends {ImpactoLocal}
 * @param {Compartimento} compartimento - referência para o compartimento que contém o equipmaneto.
 * 
 * @property {string} nome - identificador do Trinco Electrico.
 * @property {estadoTrinco} estado - enum do estado correspondente.
 */
function TrincoEletrico(compartimento) {
    ImpactoLocal.call(this, compartimento);
    //Criar o contador para trincos eletricos
    TrincoEletrico.counter = (TrincoEletrico.counter || 0) + 1;
    
    this.nome = "TE" + TrincoEletrico.counter;
    this.estado = omissao.estadoPorta;
    this.conectadoA;
}
TrincoEletrico.prototype = Object.create(ImpactoLocal.prototype);
TrincoEletrico.prototype.constructor = TrincoEletrico;

/**
 * Método para associar uma porta a um trinco.
 */
TrincoEletrico.prototype.associar = function(nome) {
    
    var DFs = this.parent.getEquipamentosTipo(DetetorFechoPorta);
    
    //Precorrer os detetores de fecho de porta e se houver um com o nome recebido adicionar ao
    //this.conectadoA e também associar este trinco ao array do detetor de fecho de porta
    for (var i = 0; i < DFs.length; i++) {
        if (DFs[i].nome === nome) {
            this.conectadoA = DFs[i];
            this.conectadoA.conectadoA.push(this);
            this.atualizarAssociado();
            break;
        }
    }
};

/**
 * Método para alterar o estado do trinco subconsequentemente a porta.
 */
TrincoEletrico.prototype.alterarEstado = function(estado) {
    
    this.estado = estado;
    
    //Atualizar a representação do HTML do trinco
    var trincoElem = document.getElementById(this.nome);
    trincoElem.parentNode.replaceChild(this.apresentar(), trincoElem);
    
    //Atualizar a represetação da porta associada e dos outros trincos associados a essa mesma porta
    this.atualizarAssociado();
};

/**
 * Método para atualizar o estado da porta e de outros trincos associados a esta porta para corresponder ao do trinco
 */
TrincoEletrico.prototype.atualizarAssociado = function() {
    
    //Se o estado da porta for diferente do estado do trinco
    if (this.conectadoA && this.estado !== this.conectadoA.estado) {
        this.conectadoA.estado = this.estado;
    
        //Atualizar a representação da porta para corresponde ao novo estado
        var portaElem = document.getElementById(this.conectadoA.nome);
        portaElem.parentNode.replaceChild(this.conectadoA.apresentar(), portaElem);
        
        var trincosAssociados = this.conectadoA.conectadoA;
        //Precorrer os trincos associados à nossa porta associada e altera-los para respeitar o novo estado da porta
        for (var i = 0; i < trincosAssociados.length; i++) {
            if (trincosAssociados[i].nome !== this.nome) {
                trincosAssociados[i].estado = this.estado;
                var trincoElem = document.getElementById(trincosAssociados[i].nome);
                trincoElem.parentNode.replaceChild(trincosAssociados[i].apresentar(), trincoElem);
            }
        }
    }  
};

/** 
 * Método para apresentar um equipamento do tipo trinco eletrico
 * 
 * @returns {HTMLElement} - div com a informação do trinco eletrico
 */
TrincoEletrico.prototype.apresentar = function() {

    //Guardar uma referência para o trinco da porta para utilizar dentro das funções dos listeners
    var TE = this;
    
    //Criar a div do trinco eletrico
    var div = document.createElement("div");
    div.setAttribute("class", "equipamento");
    div.setAttribute("id", TE.nome);

    //Criar o nome do trinco eletrico, usando o próprio nome e o nome da porta associada se existente
    var header = document.createElement("h3");
    header.setAttribute("class", "associar-"+TE.nome);
    var headerContent;
    if (this.conectadoA) {
        headerContent = document.createTextNode(this.nome + " - " + this.conectadoA.nome);
    } else {
        headerContent = document.createTextNode(this.nome);
    }
    header.appendChild(headerContent);
    //Definir o listener para se esse nome for clicado o trinco poder ser associado a outra porta
    header.onclick = function() {
        editHtmlLabelArrays(header,TE.parent.getEquipamentosTipo(DetetorFechoPorta) , TE);
    };
    header.addEventListener("mouseover", function() {
        header.style.cursor = "pointer";
    });

    //Criar a imagem do trinco eletrico correspondente ao estado e associar o listener para atuar sobre o trinco
    var img = document.createElement("img");
    img.setAttribute("src", estadoTrinco.prop[this.estado].imgLinkFecho);
    img.onclick = function() {
        TE.alterarEstado(TE.estado === estadoTrinco.ABERTO ? estadoTrinco.FECHADO : estadoTrinco.ABERTO);
    };
    img.addEventListener("mouseover", function() {
        img.style.cursor = "pointer";
    });

    //Associar os elementos criados à div do trinco eletrico
    div.appendChild(header);
    div.appendChild(img);

    return div;
};


/**
 * MotorElectrico
 */

/**
 * @class objectos que simulam equipamentos do tipo Motor Electrico.
 * @constructs MotorElectrico
 * @extends {ImpactoLocal}
 * @param {Compartimento} compartimento - referência para o compartimento que contém o equipmaneto.
 * 
 * @property {string} nome - identificador do Motor Electrico.
 * @property {estadoEstore} estado - valores da posição do estor: 
 */
function MotorEletrico(compartimento) {
    ImpactoLocal.call(this, compartimento);
    //Criar o contador de motores eletricos
    MotorEletrico.counter = (MotorEletrico.counter || 0) + 1;
    
    this.nome = "ME" + MotorEletrico.counter;
    this.estado = omissao.estadoEstore;
    this.conectadoA;
}
MotorEletrico.prototype = Object.create(ImpactoLocal.prototype);
MotorEletrico.prototype.constructor = MotorEletrico;

/**
 * Método para associar um estore a um motor.
 */
MotorEletrico.prototype.associar = function(nome) {
    
    var estores = this.parent.getEquipamentosTipo(EstoreEletrico);
    
    //Precorrer os estores e se o nome corresponder ao nome pretendido associa-lo ao motor
    for (var i = 0, quantos = estores.length; i < quantos; i++) {
        if (estores[i] instanceof EstoreEletrico &&
            estores[i].nome === nome) {
            this.conectadoA = estores[i];
            break;
        }
    }
};

/**
 * Método para alterar o estado do motor e do estore se associado
 */
MotorEletrico.prototype.alterarEstado = function(estado) {
    
    this.estado = estado;
    
    //Se houver um estore associado também alterar o mesmo
    if (this.conectadoA) {
        this.conectadoA.estado = estado;
        
        //Atualizar a representação do estore associado
        var estoreElem = document.getElementById(this.conectadoA.nome);
        estoreElem.parentNode.replaceChild(this.conectadoA.apresentar(), estoreElem);
    }
};

/**
 * Método para criação da representação HTML do Motor Elétrico
 * @returns {HTMLElement} - div com a informação referente ao motor elétrico
 */
MotorEletrico.prototype.apresentar = function() {
    
    //Giardar a referência deste objecto para ser utilizado dentro das funções dos listeners
    var ME = this;
    
    //Criar a div do motor eletrico
    var div = document.createElement("div");
    div.setAttribute("class", "equipamento");
    div.setAttribute("id", this.nome);

    //Criar o nome do motor eletrico e se existir um estore associado incluir o mesmo
    var header = document.createElement("h3");
    header.setAttribute("class", "associar-" + this.nome);
    var headerContent;
    if (this.conectadoA) {
        headerContent = document.createTextNode(this.nome + " - " + this.conectadoA.nome);
    } else {
        headerContent = document.createTextNode(this.nome);
    }
    header.appendChild(headerContent);
    //Associar o listener para se o nome for clicado ser possível associar este motor a um estore diferente
    header.onclick = function() {
        editHtmlLabelArrays(header,ME.parent.getEquipamentosTipo(EstoreEletrico) , ME);
    };
    header.addEventListener("mouseover", function() {
        header.style.cursor = "pointer";
    });

    //Criar um texto com o nome do estado atual associando a uma listener para se possível alterar o estado
    var state = document.createElement("h4");
    state.setAttribute("id", "state-" + ME.nome);
    state.setAttribute("value", estadoEstore.prop[this.estado].id);
    var stateText = document.createTextNode(estadoEstore.prop[this.estado].value);
    state.appendChild(stateText);
    state.onclick = function() {
        editHTMLTextNodeWithSelection(state, estadoEstore);
    };
    state.addEventListener("mouseover", function() {
        state.style.cursor = "pointer";
    });

    //Cria a imagem que permite alterar o estore associado para o estado pendente do motor
    var img = document.createElement("img");
    img.setAttribute("src", "/images/start.png");
    img.onclick = function() {
        var selectedElem = document.getElementById("state-"+ME.nome);
        var stateElem = selectedElem.getAttribute("value");
        ME.alterarEstado(estadoEstore[stateElem]);
        
    };
    img.addEventListener("mouseover", function() {
        img.style.cursor = "pointer";
    });

    //Associa os elementos criados à div do motor eletrico
    div.appendChild(header);
    div.appendChild(state);
    div.appendChild(img);

    return div;
};


/**
 * Adiciona a o objecto recebido no array recebido por ordem da propriedade nome crescente.
 * @param {Object} objeto - objeto a inserir no array.
 * @param {Object[]} array - array onde irá ser inserido o objeto.
 */
function adicionarOrganizar(objeto, array) {

    if (objeto instanceof Consola ||
        objeto instanceof Compartimento ||
        objeto instanceof Equipamento) {

        //Se o Array estiver vazio
        if (array.length === 0) {
            array.push(objeto);
            
        } else {
            array.push(objeto);
            //Ordenar o array por ordem alfa numérica
            array.naturalSort();
        }
    }
}

/**
 * Alterar o texto de um node com o id enviado no parametero e também alt era a probriedade
 * nome do objecto enviado. Recorrer à tecla ENTER (key code = 13) para validar o nome.
 * @param {string} elemId - atributo id do elemento que se quer alterar.
 * @param {object} src - Objecto com a propriedade nome que irá também ser modificada.
 */
var editHtmlLabel = function(elemId, src) {

    //Função para validar e retornar a caixa de texto em texto
    var editBoxToLabel = function(e, elemId, src) {
        
        //Se a tecla Enter for primida
        if (e.which === 13) {

            var elem = document.getElementById(elemId);

            var text = elem.childNodes[0].value;

            sistemaDomotico.alterarNome(src, text);
            var textnode = document.createTextNode(src.nome);

            elem.removeChild(elem.childNodes[0]);
            elem.appendChild(textnode);

            elem.onkeypress = void 0;
            elem.onclick = function() {
                editHtmlLabel(elemId, src);
            };
        }
    };

    var elem = document.getElementById(elemId);

    var textbox = document.createElement("input");
    textbox.setAttribute("type", "input");
    textbox.setAttribute("value", src.nome);

    elem.removeChild(elem.childNodes[0]);

    elem.onclick = void 0;
    elem.onkeypress = function(e) {
        editBoxToLabel(e, elemId, src);
    };

    elem.appendChild(textbox);
    textbox.focus();
    textbox.select();

};

/**
 * Alterar o texto de um node, e se for válido redefinir no objecto de origem
 * Recorre à tecla ENTER (key code = 13) para validação.
 * @param {HTMLElement} elem - elemento HTML que se vai alterar.
 * @param {object} obj - Objecto que representa o tal elemento.
 * @param {string} propId - Nome da propriedade que se pretende alterar do objecto
 * @param {function} validate - função para validar o novo nome inserido (opcional)
 */
var editHTMLTextNode = function(elem, obj, propId, validate) {

    var editBoxToLabel = function(e, elem, obj, propId, validate) {
        if (e.which === 13) {

            var text = elem.childNodes[0].value;

            if (!validate || validate(text)) {
                obj[propId] = text;
            }

            var textnode = document.createTextNode(obj[propId]);

            elem.removeChild(elem.childNodes[0]);
            elem.appendChild(textnode);

            elem.onkeypress = void 0;
            elem.onclick = function() {
                editHTMLTextNode(elem, obj, propId, validate);
            };
        }
    };


    var textbox = document.createElement("input");
    textbox.setAttribute("type", "input");
    textbox.setAttribute("value", obj[process]);

    elem.removeChild(elem.childNodes[0]);

    elem.onclick = void 0;
    elem.onkeypress = function(e) {
        editBoxToLabel(e, elem, obj, propId, validate);
    };

    elem.appendChild(textbox);
    textbox.focus();
    textbox.select();

};

/**
 * Alterar o texto de um node, e se for válido redefinir no objecto de origem
 * Recorre à tecla ENTER (key code = 13) para validação.
 * @param {HTMLElement} elem - elemento HTML que se vai alterar.
 * @param {string} propId - Nome da propriedade que se pretende alterar do objecto
 * @param {enum} enumerado - enumerado para mostrar as opções possíveis
 */
var editHTMLTextNodeWithSelection = function(elem, enumerado) {

    var editBoxToLabel = function(e, elem, enumerado, selectBox) {

        var selectedElem = selectBox.options[selectBox.selectedIndex].textContent;

        var textnode = document.createTextNode(selectedElem);
        elem.setAttribute("value", selectBox.options[selectBox.selectedIndex].value);

        elem.removeChild(elem.childNodes[0]);
        elem.appendChild(textnode);

        elem.onchang = void 0;
        elem.onclick = function() {
            editHTMLTextNodeWithSelection(elem, enumerado);
        };
        
    };

    var selectBox = document.createElement("select");
    var option;
    var optionText;

    option = document.createElement("option");
    option.setAttribute("value", "invalid");
    option.setAttribute("disabled", "disabled");
    option.setAttribute("selected", "selected");
    optionText = document.createTextNode(" --- ");
    option.appendChild(optionText);
    selectBox.appendChild(option);

    for (var property in enumerado) {
        option = document.createElement("option");
        option.setAttribute("value", property);
        optionText = document.createTextNode(enumerado.prop[enumerado[property]].value);
        option.appendChild(optionText);

        selectBox.appendChild(option);
    }

    elem.removeChild(elem.childNodes[0]);

    elem.onclick = void 0;
    elem.onchange = function(e) {
        editBoxToLabel(e, elem, enumerado, selectBox);
    };

    elem.appendChild(selectBox);


};

/**
 * Alterar o texto de um node, e se for válido redefinir no objecto de origem
 * Recorre à tecla ENTER (key code = 13) para validação.
 * @param {HTMLElement} elem - elemento HTML que se vai alterar.
 * @param {array} array - array para mostrar as opções possíveis
 * @param {object} obj - Objecto que representa o tal elemento.
 */
var editHtmlLabelArrays = function(elem, array, obj) {
    
    if (array.length < 1) {
        return;
    }
    
    var editBoxToLabel = function(elem, array, obj, selectBox) {

        var selectedElem = selectBox.options[selectBox.selectedIndex].value;

        if (selectedElem != "invalid") {
            obj.associar(selectedElem);
        }
        
        var textnode = document.createTextNode(obj.conectadoA.nome);

        elem.removeChild(elem.childNodes[0]);

        elem.appendChild(textnode);

        elem.onchange = void 0;
        elem.onclick = function() {
            editHtmlLabelArrays(elem, array, obj);
        };

        elem.parentNode.parentNode.replaceChild(obj.apresentar(), elem.parentNode);

        
    };

    var selectBox = document.createElement("select");
    var option;
    var optionText;
    
    option = document.createElement("option");
    option.setAttribute("value", "invalid");
    option.setAttribute("disabled", "disabled");
    option.setAttribute("selected", "selected");
    optionText = document.createTextNode(" --- ");
    option.appendChild(optionText);
    selectBox.appendChild(option);
    
    for (var i = 0, quantos = array.length; i < quantos; i++) {
        option = document.createElement("option");
        option.setAttribute("value", array[i].nome);
        optionText = document.createTextNode(array[i].nome);
        option.appendChild(optionText);
        selectBox.appendChild(option);
    }

    elem.removeChild(elem.childNodes[0]);

    elem.onclick = void 0;
    elem.onchange = function() {
        editBoxToLabel(elem, array, obj, selectBox);
    };

    elem.appendChild(selectBox);

};

/**
 * Método para verificar se existe uma certa propriedade num objecto num array.
 * Server para verificar se já existe uma consola, compartimento, etc com o novo nome-
 * @param {string} newNome - valor da propiedade a verificar se existe
 * @param {string} oldNome - valor da propiedade a verificar se existe
 * @param {Object[]} array - array para procurar
 * @oaram {string} propertyName - Nomde da propriedade que se quer procurar
 */
var existsInArray = function(newNome, oldNome, array, propertyName) {
    
    //Se o novo nome for igual ao antigo
    if (newNome === oldNome) {
        return false;
    }
    
    //Precorrer o array recebido e procurar se o array tem a propriedada recebida e se é igual ao novo nome
    for (var i = 0, size = array.length; i < size; i++) {
        if (array[i][propertyName] === newNome) {
            return true;
        }
    }
    
    return false;
};

/**
 * Método para ordernar o array com numero por ordem alfa numérica
 */
Array.prototype.naturalSort = function() {
    
    //Definir a regular expression
    var a, b, a1, b1, rx = /(\d+)|(\D+)/g,
        rd = /\d+/;
        
    //Definir a função de comparação para alfa numérico
    return this.sort(function(as, bs) {
        a = String(as.nome).toLowerCase().match(rx);
        b = String(bs.nome).toLowerCase().match(rx);
        while (a.length && b.length) {
            a1 = a.shift();
            b1 = b.shift();
            if (rd.test(a1) || rd.test(b1)) {
                if (!rd.test(a1)) return 1;
                if (!rd.test(b1)) return -1;
                if (a1 != b1) return a1 - b1;
            } else if (a1 != b1) return a1 > b1 ? 1 : -1;
        }
        return a.length - b.length;
    });
};


/**
 * Definição do comportamento do evento onload da janela
 */
window.onload = function() {
    
    //Carregar alguns valors por omissão para testes
    valoresOmissao();
    
    //Gerar o HTML da primeira página e apresenta-lo
    sistemaDomotico.apresentar();
};

/**
 * Mostra uma modal para escolher o tipo de equipamentos.
 * @param {string} text - texto a mostrar na caixa.
 * @returns {tipoEquipamento|null} - tipo de equipamento quando fui selecionado e clicado no butão OK, ou
 * null se tiver carregado no butão Cancel ou no X
 */
var selectModal = function(text, callback, compartimento) {
    
    var modal = document.getElementById("modal");
    var modalContent = document.getElementById("modal-content");

    //remover os filhos da janela modal caso existam
    while (modalContent.hasChildNodes()) {
        modalContent.removeChild(modalContent.lastChild);
    }

    //Criar o butão X e atribuit o listener para devolver null caso seja pressionado
    var close = document.createElement("span");
    close.setAttribute("id", "close");
    var closeCharacter = document.createTextNode("x");
    close.appendChild(closeCharacter);
    close.onclick = function() {
        modal.style.display = "none";
        return callback(null, compartimento);
    };
    modalContent.appendChild(close);

    //Criar o conteudo e a mensagem para aparecer na janela
    var p = document.createElement("p");
    var pBr1 = document.createElement("br");
    var pBr2 = document.createElement("br");
    var pContent = document.createTextNode(text);
    p.appendChild(pBr1);
    p.appendChild(pContent);
    p.appendChild(pBr2);
    modalContent.appendChild(p);

    var select = document.createElement("select");
    select.setAttribute("id", "select-modal");

    //Criar uma select box e adicionar as opções possíveis
    var option;
    var optionText;
    for (var tipo in tipoEquipamento) {
        if (!isNaN(tipoEquipamento[tipo])) {
            option = document.createElement("option");
            option.setAttribute("value", tipoEquipamento.prop[tipoEquipamento[tipo]].id);
            optionText = document.createTextNode(tipoEquipamento.prop[tipoEquipamento[tipo]].value);
            option.appendChild(optionText);

            select.appendChild(option);
        }
    }

    modalContent.appendChild(select);

    //Criar o botão cancel e associar o listener para devolver null caso seja cancelado
    var buttonCancel = document.createElement("button");
    buttonCancel.setAttribute("class", "botao");
    var buttonCancelContent = document.createTextNode("Cancelar");
    buttonCancel.appendChild(buttonCancelContent);
    buttonCancel.onclick = function() {
        modal.style.display = "none";
        return callback(null, compartimento);
    };

    //Criar o botão aceitar e devolver o valor da opção escolhida
    var buttonAccept = document.createElement("button");
    buttonAccept.setAttribute("class", "botao");
    var buttonAcceptContent = document.createTextNode("OK");
    buttonAccept.appendChild(buttonAcceptContent);
    buttonAccept.onclick = function() {
        modal.style.display = "none";
        var selection = document.getElementById("select-modal");
        return callback(selection.options[selection.selectedIndex].value, compartimento);
    };

    //Associar os botões à janela modal
    modalContent.appendChild(buttonCancel);
    modalContent.appendChild(buttonAccept);

    //Definir o display para aparecer
    modal.style.display = "block";

};

/**
 * Obter o nome da funcao construtora (adiciona ao Objecto, ou seja todos os objectos o podem chamar)
 */
Object.prototype.getConstructorName = function() {
    
    //Definir a função regex para obter o nome
    var funcNameRegex = /function (.{1,})\(/;
    
    //Executar o regex e obter os resultados
    var results = (funcNameRegex).exec((this).constructor.toString());
    
    return (results && results.length > 1) ? results[1] : "";
};
//Adicionar a propriedade não enumerável para não aparecer nos for in
Object.defineProperty(Object.prototype, "getConstructorName", {
    enumerable: false
});



/*
 ******* TODO *******
 O método de apresentar os equipamentos pode ser otimizado com um sort por categoria - 2 fase
 
 
 
 ******* DONE ******
 O ar condicionado aceita string vazia como temperatura. DONE
 Quando se apaga um equipamento que está assiciado a outro, fazer a desassociação - DONE
 NAO CHAMAR O METODO MONOTORIZAR SEM SER A INICIALIZAR O MONITORIZAR!!!! USAR O .replaceChild(newChild, oldChild); (lampadas por ex) - DONE
 Criar um método nos comparitmentos um método para devolver os equipamentos de um certo tipo - DONE
 Associar detetorFecho a um Trinco eletrico - DONE
 
 Associar estore a um Motor Eletrico - Não é preciso é só preciso associar um motor electrico a um estore, por isso tá done --DONE 
 GeradorMovimento alterar estado  - CORRIGIDO
 Adicionar imagens aos objetos. - CORRIGIDO
 Os equipamentos não tá a incrementar no criar. (ver o counter); - CORRIGIDO
 Quando se muda o nome do h1 dentro do apresentar do compartimentos, quando se sai o nome não mudou. - CORRIGIDO
 Piso 16 < Piso 2  - CORRIGIDO
 Como são os equipamentos adicionados? com o switch? se eu alterar o nome no switch não - CORRIGIDO
 Butao back da vista de um compartimento nao funciona - CORRIGIDO
 Quando se altera o nome das coisas ele n verifica se já existe - CORRIGIDO
 Quando se muda o nome nao ordena a lista - CORRIGIDO
 Tem se se mduar no array de equipamentos e compartimentos quando alteramos o nome - CORRIGIDO
 Quando estamos no prompt, se carregarmos cancel ele dá erro em vez de cancelar a operação - CORRIGIDO



*/
//Comando para gerar o JSDoc: jsdoc scripts/domotica.js -d JSDoc
