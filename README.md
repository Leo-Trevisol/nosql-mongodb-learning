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
  <h2>🧩 Banco de Dados Relacional x Não Relacional (NoSQL)</h2>
  <p>
    Bancos de dados são a base de praticamente qualquer sistema moderno. 
    Eles armazenam, organizam e permitem o acesso a informações de forma eficiente. 
    Ao longo do tempo, duas abordagens principais se destacaram: os 
    <strong>bancos de dados relacionais</strong> e os <strong>bancos de dados não relacionais (NoSQL)</strong>.
  </p>

  <h3>🏛️ Bancos de Dados Relacionais</h3>
  <p>
    Os <strong>bancos de dados relacionais</strong> foram introduzidos na década de 1970, 
    baseados no modelo proposto por <em>Edgar F. Codd</em>. Eles organizam as informações em 
    <strong>tabelas</strong> compostas por <strong>linhas (registros)</strong> e 
    <strong>colunas (campos)</strong>, com um esquema rígido que define os tipos de dados e as relações entre as tabelas.
  </p>
  <p>
    Essa abordagem garante <strong>consistência</strong>, <strong>integridade referencial</strong> 
    e facilidade para realizar consultas complexas utilizando <em>SQL (Structured Query Language)</em>.
  </p>

  <h4>🔹 Exemplos de bancos relacionais</h4>
  <ul>
    <li>MySQL</li>
    <li>PostgreSQL</li>
    <li>Oracle Database</li>
    <li>Microsoft SQL Server</li>
    <li>SQLite</li>
  </ul>

  <h4>✅ Vantagens dos bancos relacionais</h4>
  <ul>
    <li>Garantem <strong>integridade e consistência</strong> dos dados.</li>
    <li>Uso de <strong>SQL</strong>, uma linguagem padronizada e poderosa para consultas.</li>
    <li>Facilidade em representar <strong>relacionamentos complexos</strong> entre entidades.</li>
    <li>Suporte a <strong>transações ACID</strong> (Atomicidade, Consistência, Isolamento e Durabilidade).</li>
  </ul>

  <h4>⚠️ Limitações dos bancos relacionais</h4>
  <ul>
    <li><strong>Escalabilidade limitada</strong>: geralmente escalam verticalmente (melhorando o hardware de um único servidor).</li>
    <li><strong>Baixa flexibilidade</strong>: mudanças de estrutura (como adicionar colunas) exigem alterações no esquema e migrações.</li>
    <li>Menor desempenho em aplicações com <strong>grandes volumes de dados não estruturados</strong>.</li>
  </ul>

  <h3>🌿 Bancos de Dados Não Relacionais (NoSQL)</h3>
  <p>
    Os <strong>bancos de dados não relacionais</strong>, também chamados de <strong>NoSQL</strong>, 
    surgiram para atender às demandas de escalabilidade e flexibilidade dos sistemas modernos, 
    principalmente em aplicações web, mobile e de big data.
  </p>
  <p>
    Diferente dos bancos relacionais, eles <strong>não dependem de tabelas fixas</strong>. 
    Os dados podem ser armazenados em diferentes formatos, como <strong>documentos JSON</strong>, 
    <strong>pares chave-valor</strong>, <strong>colunas</strong> ou <strong>grafos</strong>.
  </p>

  <h4>🔹 Principais tipos de bancos NoSQL</h4>
  <ul>
    <li><strong>Documentos:</strong> como o MongoDB e o CouchDB (armazenam dados em formato JSON/BSON).</li>
    <li><strong>Chave-valor:</strong> como o Redis e o DynamoDB.</li>
    <li><strong>Coluna larga:</strong> como o Cassandra e o HBase.</li>
    <li><strong>Grafos:</strong> como o Neo4j e o ArangoDB.</li>
  </ul>

  <h4>✅ Vantagens dos bancos NoSQL</h4>
  <ul>
    <li><strong>Flexibilidade:</strong> não exigem esquemas fixos; é possível adicionar novos campos livremente.</li>
    <li><strong>Alta escalabilidade horizontal:</strong> é fácil distribuir dados em vários servidores (sharding).</li>
    <li><strong>Alta disponibilidade:</strong> suporte nativo a replicação e tolerância a falhas.</li>
    <li><strong>Desempenho otimizado</strong> para leitura e escrita em grandes volumes de dados.</li>
  </ul>

  <h4>⚠️ Desvantagens dos bancos NoSQL</h4>
  <ul>
    <li>Não seguem rigidamente o modelo <strong>ACID</strong> — muitos utilizam <strong>eventual consistency</strong>.</li>
    <li>Consultas complexas podem ser mais difíceis de implementar sem SQL.</li>
    <li>A <strong>flexibilidade excessiva</strong> pode levar à <strong>desorganização</strong> se não houver padronização na modelagem.</li>
  </ul>

  <h3>🔄 Comparativo Direto</h3>
  <table border="1" cellspacing="0" cellpadding="8">
    <thead>
      <tr>
        <th>Aspecto</th>
        <th>Relacional</th>
        <th>Não Relacional (NoSQL)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Estrutura</td>
        <td>Tabelas com esquema fixo</td>
        <td>Documentos, chave-valor, colunas ou grafos</td>
      </tr>
      <tr>
        <td>Escalabilidade</td>
        <td>Vertical</td>
        <td>Horizontal</td>
      </tr>
      <tr>
        <td>Transações</td>
        <td>ACID</td>
        <td>Eventual Consistency (em muitos casos)</td>
      </tr>
      <tr>
        <td>Relações</td>
        <td>Chaves primárias e estrangeiras</td>
        <td>Referências ou documentos embutidos</td>
      </tr>
      <tr>
        <td>Flexibilidade</td>
        <td>Baixa (esquema fixo)</td>
        <td>Alta (esquema dinâmico)</td>
      </tr>
      <tr>
        <td>Consulta</td>
        <td>SQL</td>
        <td>MQL / Linguagem específica</td>
      </tr>
    </tbody>
  </table>

  <h3>📎 Resumo</h3>
  <p>
    Em resumo, os <strong>bancos relacionais</strong> são ideais quando a consistência e a integridade
    dos dados são essenciais — como em sistemas financeiros, ERPs e CRMs.  
    Já os <strong>bancos NoSQL</strong> brilham em aplicações que exigem
    <strong>escalabilidade, flexibilidade e alta performance</strong>, como redes sociais, sistemas de streaming e análises em tempo real.
  </p>

  <p>
    Nenhum modelo é “melhor” de forma absoluta — cada um é mais adequado para determinados contextos.
    É comum inclusive combinar ambos, em arquiteturas <em>polyglot persistence</em>,
    onde cada tipo de banco é usado conforme suas forças.
  </p>
</section>
