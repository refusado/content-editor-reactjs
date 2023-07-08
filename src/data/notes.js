const notes = [
  {
    id: 0,
    content: `
      <h1>Reflexões Oceânicas: Encontrando Serenidade nas Ondas do Mar</h1>
      <p>
        Na imensidão do oceano, onde o horizonte se confunde com o céu, eu me encontrava envolto em uma profunda contemplação. O brilho do sol refletia-se nas águas tranquilas, criando um espetáculo de luzes que dançava diante dos meus olhos. O som suave das ondas quebrando na praia embalava meus pensamentos, transportando-me para um estado de paz e serenidade. Naquele momento, eu me sentia conectado com a imensidão do universo, percebendo a grandiosidade da natureza e a insignificância dos meus problemas cotidianos. O mar, com sua força e calmaria, me ensinava valiosas lições sobre fluidez e resiliência. Ali, eu encontrava a liberdade para sonhar, para deixar a minha mente vagar pelos recantos mais profundos da imaginação. E, à medida que as horas passavam, eu me deixava levar por essa imersão marítima, sentindo uma profunda gratidão por estar vivo e por poder testemunhar a magnificência da criação.
      </p>
    `
  },
  {
    id: 1,
    content: `<h1>Iniciando um projeto React com Vite e adicionando Tailwind CSS</h1>

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

        <pre><code class="language-bash">npx create-vite@latest nome-do-projeto --template react</code></pre>

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

        <pre><code class="language-bash">npm install tailwindcss</code></pre>

        <p>
          Em seguida, gere o arquivo de configuração do Tailwind CSS
          executando o seguinte comando:
        </p>

        <pre><code class="language-bash">npx tailwindcss init</code></pre>

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

        <pre><code class="language-css">@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';</code></pre>

        <p>
          Agora, o Tailwind CSS está configurado e pronto para ser usado
          em seu projeto React.
        </p>

        <h2>Passo 5: Iniciando o servidor de desenvolvimento</h2>
        <p>
          Para iniciar o servidor de desenvolvimento, execute o seguinte
          comando:
        </p>

        <pre><code class="language-bash">npm run dev</code></pre>

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
      </article>`
  },
  {
    id: 2,
    content: `
      <h1>Pulsante Caos Urbano: Encontrando Serenidade nas Entrelinhas da Cidade</h1>
      <p>
        Caminhando pelas ruas agitadas da cidade, pude sentir a energia pulsante que emanava de cada esquina. As pessoas passavam apressadas, mergulhadas em suas próprias vidas, enquanto eu me deixava levar pelo ritmo frenético do ambiente. As luzes brilhantes dos letreiros piscavam incessantemente, seduzindo os transeuntes com promessas de produtos e serviços. O som dos carros se misturava aos passos apressados dos pedestres, criando uma sinfonia urbana única. Entre o caos, encontrei pequenos momentos de serenidade: um jardim escondido, uma criança sorrindo, o aroma irresistível do café recém-passado. Era nessa harmonia improvável que eu encontrava paz, um refúgio em meio à agitação cotidiana. Assim, continuava a minha jornada, absorvendo cada instante e alimentando minha alma com as histórias que o mundo tinha a oferecer.
      </p>
    `
  }
];

export default notes;