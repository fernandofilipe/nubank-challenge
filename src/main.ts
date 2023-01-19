import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

import MainController from './controllers/mainController'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

//Account => é a conta do cliente
//TransactionOperation => define as modificações em uma determinada conta
//AccountOperation => define as operações na conta (criar, deletar, atualizar, etc)
//Response => a cada transação retorna uma resposta no formato desejado para a saída do programa
//Violation => mapa de todas as violações possíveis da aplicação

let mainController: MainController = new MainController();
mainController.run();

