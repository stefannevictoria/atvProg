// Classe Pilha (LIFO - Último a entrar, primeiro a sair)
class Pilha {
  constructor() {
    this.itens = []; // Array que representa a pilha
  }

  // Adiciona um item ao topo da pilha
  empilhar(item) {
    this.itens.push(item);
    console.log(`Elemento '${item}' empilhado.`);
  }

  // Remove e retorna o item do topo da pilha
  desempilhar() {
    if (this.estaVazia()) {
      console.log('A pilha está vazia. Nada a desempilhar.');
      return null;
    }
    const removido = this.itens.pop();
    console.log(`Elemento '${removido}' desempilhado.`);
    return removido;
  }

  // Retorna o item no topo da pilha sem removê-lo
  topo() {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens[this.itens.length - 1];
  }

  // Verifica se a pilha está vazia
  estaVazia() {
    return this.itens.length === 0;
  }

  // Retorna o número de elementos na pilha
  tamanho() {
    return this.itens.length;
  }

  // Esvazia a pilha
  limpar() {
    this.itens = [];
    console.log('Pilha esvaziada.');
  }

  // Imprime os itens da pilha do topo para a base
  imprimir() {
    console.log('Pilha atual:', this.itens.slice().reverse().join(' <- topo'));
  }
}

// Classe Fila (FIFO - Primeiro a entrar, primeiro a sair)
class Fila {
  constructor() {
    this.itens = []; // Array que representa a fila
  }

  // Adiciona um item ao final da fila
  enfileirar(item) {
    this.itens.push(item);
    console.log(`'${item}' entrou na fila.`);
  }

  // Remove e retorna o item do início da fila
  desenfileirar() {
    if (this.estaVazia()) {
      console.log('A fila está vazia. Nenhum item para remover.');
      return null;
    }
    const removido = this.itens.shift();
    console.log(`'${removido}' saiu da fila.`);
    return removido;
  }

  // Retorna o primeiro item da fila sem removê-lo
  frente() {
    return this.itens[0];
  }

  // Verifica se a fila está vazia
  estaVazia() {
    return this.itens.length === 0;
  }

  // Retorna o número de elementos na fila
  tamanho() {
    return this.itens.length;
  }

  // Esvazia a fila
  limpar() {
    this.itens = [];
    console.log('Fila esvaziada.');
  }

  // Imprime os itens da fila na ordem atual
  imprimir() {
    console.log('Fila atual:', this.itens.join(' -> ') || 'vazia');
  }
}

// ------------------------
// Simulação da rotina do hospital
// ------------------------

// Criando a fila de atendimento e a pilha de prontuários
const filaAtendimento = new Fila();
const pilhaProntuarios = new Pilha();

// Adiciona 5 pacientes fictícios à fila
filaAtendimento.enfileirar('Ana');
filaAtendimento.enfileirar('Bruno');
filaAtendimento.enfileirar('Carla');
filaAtendimento.enfileirar('Daniel');
filaAtendimento.enfileirar('Eduarda');

// Mostra quem será o próximo paciente a ser atendido
console.log(`Próximo paciente a ser atendido: ${filaAtendimento.frente()}`);

// Atende dois pacientes e empilha seus nomes na pilha de prontuários
for (let i = 0; i < 2; i++) {
  const paciente = filaAtendimento.desenfileirar(); // Remove da fila
  if (paciente) {
    pilhaProntuarios.empilhar(paciente); // Empilha o prontuário
  }
}

// Imprime o estado final da fila e da pilha
console.log('\nSituação final:');
filaAtendimento.imprimir();      // Fila restante
pilhaProntuarios.imprimir();     // Pilha de prontuários
