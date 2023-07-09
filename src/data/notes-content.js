const notes = [
  {
    id: 0,
    content: `
      
    `
  },
  {
    id: 1,
    content: `
<h1>Iniciando um projeto React com Vite e adicionando Tailwind CSS</h1>

<article>
  <h2>Passo 1: Instalação</h2>
  <p>Para começar, certifique-se de ter o Node.js instalado em seu sistema.</p>
  <pre><code class="language-bash">$ npm install -g create-vite
$ create-vite my-react-project --template react
$ cd my-react-project</code></pre>

  <h2>Passo 2: Instalando o Tailwind CSS</h2>
  <p>No diretório do projeto, instale o Tailwind CSS:</p>
  <pre><code class="language-bash">$ npm install tailwindcss
$ npx tailwindcss init</code></pre>

  <h2>Passo 3: Configuração</h2>
  <p>Crie um arquivo chamado <code>tailwind.config.js</code> na raiz do projeto e adicione o seguinte conteúdo:</p>
  <pre><code class="language-js">module.exports = {
  purge: [],
  darkMode: false, // ou 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};</code></pre>

  <h2>Passo 4: Importando o Tailwind CSS</h2>
  <p>No arquivo <code>src/index.css</code>, adicione a seguinte linha para importar o Tailwind CSS:</p>
  <pre><code class="language-css">@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';</code></pre>

  <h2>Passo 5: Utilizando o Tailwind CSS</h2>
  <p>No arquivo <code>src/App.js</code>, você pode começar a usar as classes do Tailwind CSS. Por exemplo:</p>
  <pre><code class="language-js">import React from 'react';
import './index.css';

function App() {
  return (
    &lt;div className="container mx-auto">
      &lt;h1 className="text-2xl font-bold">Meu Projeto React&lt;/h1>
      &lt;p className="text-gray-600">Bem-vindo ao meu projeto!&lt;/p>
    &lt;/div>
  );
}

export default App;</code></pre>

  <h2>Passo 6: Executando o projeto</h2>
  <p>Para executar o projeto, execute os seguintes comandos:</p>
  <pre><code class="language-bash">$ npm install
$ npm run dev</code></pre>

  <h2>Passo 7: Visualizando o resultado</h2>
  <p>Abra seu navegador e acesse <code>http://localhost:3000</code> para ver o resultado do projeto React com o Tailwind CSS.</p>
</article>

    `
  },
  {
    id: 2,
    content: `

    `
  }
];

export default notes;