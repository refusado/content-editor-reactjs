export const note = `
  <h1>Iniciando um projeto React com Vite e adicionando Tailwind CSS</h1>

  <article>
    <h2>Introdução</h2>
    <p>
      Neste artigo, vamos explorar como iniciar um projeto React
      usando o Vite, um bundler rápido e moderno, e como implementar o
      Tailwind CSS, uma biblioteca de utilitários CSS.
    </p>

    <h2>Passo 1: Configurando o projeto</h2>
    <p>
      Para começar, certifique-se de ter o Node.js instalado em seu
      sistema. Você pode baixá-lo e instalá-lo a partir do{" "}
      <a href="https://nodejs.org">site oficial do Node.js</a>.
    </p>

    <h2>Passo 2: Criando um novo projeto React com Vite</h2>
    <p>
      No terminal, navegue até a pasta onde deseja criar o projeto e
      execute o seguinte comando:
    </p>

    <pre class="w-0 min-w-full shadow-sm">
      <code>
        npx create-vite@latest nome-do-projeto --template react
      </code>
    </pre>

    <p>
      Substitua "nome-do-projeto" pelo nome que você deseja dar ao seu
      projeto. Isso criará uma nova pasta com o nome do projeto e
      configurará um projeto React básico com o Vite.
    </p>

    <h2>Passo 3: Configurando o Tailwind CSS</h2>
    <p>
      Após criar o projeto, navegue para a pasta do projeto e execute
      o seguinte comando para instalar o Tailwind CSS:
    </p>

    <pre class="w-0 min-w-full shadow-sm">
      <code>npm install tailwindcss</code>
    </pre>

    <p>
      Em seguida, gere o arquivo de configuração do Tailwind CSS
      executando o seguinte comando:
    </p>

    <pre class="w-0 min-w-full shadow-sm">
      <code>npx tailwindcss init</code>
    </pre>

    <p>
      Isso criará o arquivo "tailwind.config.js" na raiz do seu
      projeto. Abra o arquivo e personalize as configurações conforme
      suas preferências.
    </p>

    <h2>Passo 4: Importando o Tailwind CSS no projeto</h2>
    <p>
      Abra o arquivo <code>src/index.css</code> e substitua todo o seu
      conteúdo por:
    </p>

    <pre class="w-0 min-w-full shadow-sm">
      <code>
        @import 'tailwindcss/base'; @import 'tailwindcss/components';
        @import 'tailwindcss/utilities';
      </code>
    </pre>

    <p>
      Agora, o Tailwind CSS está configurado e pronto para ser usado
      em seu projeto React.
    </p>

    <h2>Passo 5: Iniciando o servidor de desenvolvimento</h2>
    <p>
      Para iniciar o servidor de desenvolvimento, execute o seguinte
      comando:
    </p>

    <pre class="w-0 min-w-full shadow-sm">
      <code>npm run dev</code>
    </pre>

    <p>
      Isso iniciará o servidor de desenvolvimento do Vite e seu
      aplicativo React com o Tailwind CSS estará sendo executado.
      Acesse a URL fornecida no terminal em seu navegador para
      visualizar seu projeto.
    </p>

    <h2>Conclusão</h2>
    <p>
      Neste artigo, você aprendeu como iniciar um projeto React com o
      Vite e como implementar o Tailwind CSS. Agora você está pronto
      para desenvolver seu aplicativo React de forma rápida e
      eficiente, aproveitando ao máximo as capacidades do Vite e os
      utilitários do Tailwind CSS.
    </p>
  </article>`;