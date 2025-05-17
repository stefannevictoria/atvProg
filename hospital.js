// Classe Fila 
class Fila {
    constructor() {
        this.itens = []; // Array que representa a fila
    }

    // Adiciona um elemento ao final da fila
    enfileirar(elemento) {
        this.itens.push(elemento);
    }

    // Remove e retorna o primeiro elemento da fila
    desenfileirar() {
        return this.itens.shift();
    }

    // Retorna o primeiro elemento da fila, sem removê-lo
    frente() {
        return this.itens[0];
    }

    // Verifica se a fila está vazia
    estaVazia() {
        return this.itens.length === 0;
    }

    // Retorna a fila como string para visualização
    imprimir() {
        return this.itens.join(', ');
    }
}

// Classe Pilha 
class Pilha {
    constructor() {
        this.itens = []; // Array que representa a pilha
    }

    // Adiciona um elemento ao topo da pilha
    empilhar(elemento) {
        this.itens.push(elemento);
    }

    // Remove e retorna o topo da pilha
    desempilhar() {
        return this.itens.pop();
    }

    // Retorna o topo da pilha, sem removê-lo
    topo() {
        return this.itens[this.itens.length - 1];
    }

    // Verifica se a pilha está vazia
    estaVazia() {
        return this.itens.length === 0;
    }

    // Retorna a pilha como string para visualização
    imprimir() {
        return this.itens.join(', ');
    }
}

// Cria uma nova fila para organizar o atendimento dos pacientes
const filaAtendimento = new Fila();

// Cria uma nova pilha para armazenar os prontuários dos pacientes atendidos
const pilhaProntuarios = new Pilha();

// Adiciona 5 pacientes à fila de atendimento
filaAtendimento.enfileirar('Ana');
filaAtendimento.enfileirar('Bruno');
filaAtendimento.enfileirar('Carla');
filaAtendimento.enfileirar('Daniel');
filaAtendimento.enfileirar('Eduarda');

// Mostra quem será o próximo a ser atendido (o primeiro da fila)
console.log('Próximo paciente a ser atendido:', filaAtendimento.frente());

// Simula o atendimento de 2 pacientes
for (let i = 0; i < 2; i++) {
    // Remove o paciente da fila (atendido)
    const pacienteAtendido = filaAtendimento.desenfileirar();
    
    // Exibe o nome do paciente atendido
    console.log(`Paciente atendido: ${pacienteAtendido}`);
    
    // Adiciona o paciente à pilha de prontuários
    pilhaProntuarios.empilhar(pacienteAtendido);
}

// Exibe os pacientes que ainda estão na fila após os dois atendimentos
console.log('\nFila restante:', filaAtendimento.imprimir());

// Exibe os prontuários dos pacientes atendidos, empilhados
console.log('Prontuários empilhados:', pilhaProntuarios.imprimir());
