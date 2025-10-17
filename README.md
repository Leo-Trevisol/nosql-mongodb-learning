<h1 align="center">🍃 NoSQL MongoDB Learning</h1>

<p align="center">
  Repositório com aprendizado prático de bancos de dados <strong>NoSQL</strong> com foco em <strong>MongoDB</strong> e <strong>Mongoose</strong>.  
  Inclui teoria, exercícios e projetos reais utilizando <strong>Node.js</strong>, <strong>Express</strong>, <strong>Handebars</strong> e <strong>Vue.js</strong> — do básico ao avançado.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-NoSQL-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/Mongoose-ODM-red?logo=mongoose" />
  <img src="https://img.shields.io/badge/Node.js-Backend-brightgreen?logo=node.js" />
  <img src="https://img.shields.io/badge/Express-Framework-black?logo=express" />
  <img src="https://img.shields.io/badge/Handlebars-Templates-orange?logo=handlebars.js" />
  <img src="https://img.shields.io/badge/Vue.js-Frontend-41b883?logo=vue.js" />
  <img src="https://img.shields.io/badge/Aggregation-Framework-blueviolet" />
  <img src="https://img.shields.io/badge/CRUD-Operations-yellow" />
  <img src="https://img.shields.io/badge/Data%20Modeling-Design-lightgrey" />
</p>

<hr/>

<section id="relacional-vs-nao-relacional">
  <h2>🧩 Banco de Dados Relacional x Não Relacional</h2>

  <p>
    Os <strong>bancos de dados relacionais</strong> utilizam uma estrutura baseada em
    <strong>tabelas, colunas e relações</strong> entre essas tabelas. Eles seguem um
    esquema rígido e bem definido, garantindo <strong>consistência</strong> e
    <strong>integridade dos dados</strong>. Exemplos populares incluem
    <em>MySQL</em>, <em>PostgreSQL</em> e <em>SQL Server</em>.
  </p>

  <p>
    Já os <strong>bancos de dados não relacionais (NoSQL)</strong> são mais
    <strong>flexíveis</strong> quanto à estrutura dos dados. Em vez de tabelas, eles utilizam
    <strong>coleções e documentos</strong> (no caso do MongoDB), permitindo armazenar informações
    com diferentes formatos e tamanhos sem necessidade de um esquema fixo.
  </p>

  <h2>⚖️ Principais Diferenças</h2>
  <ul>
    <li>
      <strong>Estrutura:</strong> Relacionais usam tabelas e colunas fixas;
      NoSQL usa documentos, coleções ou pares chave-valor.
    </li>
    <li>
      <strong>Flexibilidade:</strong> NoSQL permite adicionar novos campos facilmente;
      em bancos relacionais, isso exige alterações no esquema.
    </li>
    <li>
      <strong>Relacionamentos:</strong> Relacionais têm chaves primárias e estrangeiras;
      NoSQL permite <em>referências</em> ou <em>incorporação</em> entre documentos.
    </li>
    <li>
      <strong>Escalabilidade:</strong> Relacionais escalam verticalmente (melhor hardware);
      NoSQL escala horizontalmente (mais servidores).
    </li>
    <li>
      <strong>Organização:</strong> A flexibilidade do NoSQL pode trazer agilidade,
      mas também risco de <strong>desorganização</strong> se a modelagem não for bem planejada.
    </li>
    <li>
      <strong>Relações entre collections:</strong> Mesmo sendo “não relacional”,
      o MongoDB e outros bancos NoSQL podem <strong>ter relações entre collections</strong>.
    </li>
  </ul>

  <p>
    Em resumo, bancos <strong>relacionais</strong> são ideais quando consistência e relações complexas são prioridade,
    enquanto os <strong>não relacionais</strong> brilham em aplicações que exigem
    <strong>flexibilidade, escalabilidade e velocidade</strong> no desenvolvimento.
  </p>
</section>
