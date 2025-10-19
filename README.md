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

<section id="mongodb">
  <h2>🍃 O que é o MongoDB?</h2>
  <p>
    O <strong>MongoDB</strong> é um <strong>banco de dados NoSQL orientado a documentos</strong>,
    que utiliza o formato <strong>BSON</strong> (uma variação binária do JSON) para armazenar dados.
    Diferente dos bancos relacionais tradicionais, ele não trabalha com tabelas e colunas, mas sim com
    <em>collections</em> (coleções) e <em>documents</em> (documentos), oferecendo alta flexibilidade na modelagem.
  </p>

  <h3>⚙️ Como o MongoDB funciona</h3>
  <p>
    Em vez de um esquema rígido, cada documento pode ter sua própria estrutura, o que torna o MongoDB ideal
    para aplicações que precisam escalar rapidamente ou lidar com dados dinâmicos.  
    Ele armazena informações de forma hierárquica, com suporte nativo a arrays e objetos aninhados.
  </p>
  <ul>
    <li><strong>Database:</strong> o conjunto principal que contém coleções.</li>
    <li><strong>Collection:</strong> similar a uma tabela, mas sem esquema fixo.</li>
    <li><strong>Document:</strong> estrutura de dados no formato JSON que representa um registro.</li>
  </ul>

  <h3>🚀 Vantagens do MongoDB</h3>
  <ul>
    <li><strong>Alta flexibilidade:</strong> os documentos não precisam seguir o mesmo formato.</li>
    <li><strong>Escalabilidade horizontal:</strong> suporta <em>sharding</em> e replicação para lidar com grandes volumes de dados.</li>
    <li><strong>Consultas poderosas:</strong> permite filtros, agregações e buscas com operadores complexos.</li>
    <li><strong>Alto desempenho:</strong> otimizado para leitura e escrita em tempo real.</li>
    <li><strong>Integração com Node.js:</strong> com o <code>Mongoose</code>, a modelagem de dados se torna simples e segura.</li>
  </ul>

  <h3>📦 Quando usar MongoDB</h3>
  <ul>
    <li>Projetos com <strong>dados dinâmicos</strong> e estruturas variáveis.</li>
    <li>Aplicações que exigem <strong>alta escalabilidade</strong> e disponibilidade.</li>
    <li>Plataformas com grande volume de usuários ou <strong>dados não estruturados</strong>.</li>
    <li>APIs modernas com <strong>Node.js</strong>, <strong>Express</strong> e <strong>Vue.js</strong>.</li>
  </ul>

  <h3>🧠 Exemplo de documento</h3>
  <pre>
{
  "_id": "507f1f77bcf86cd799439011",
  "nome": "Leonardo",
  "email": "leonardo@example.com",
  "interesses": ["Kotlin", "Node.js", "MongoDB"],
  "ativo": true,
  "dataCadastro": "2025-10-16T00:00:00Z"
}
  </pre>

  <h3>📎 Resumo</h3>
  <p>
    O <strong>MongoDB</strong> é uma excelente escolha para quem busca <em>velocidade, flexibilidade e escalabilidade</em>.
    Ele se adapta facilmente a diferentes tipos de dados e é amplamente utilizado em aplicações modernas e distribuídas,
    principalmente no ecossistema JavaScript.
  </p>
</section>

<section id="instalacao-mongodb">
  <h2>⚙️ Instalação do MongoDB no Windows e Linux</h2>
  <p>
    O <strong>MongoDB</strong> pode ser instalado facilmente em diferentes sistemas operacionais. 
    A seguir, você encontra o passo a passo para configurar o ambiente tanto no 
    <strong>Windows</strong> quanto no <strong>Linux</strong>, garantindo que o 
    <em>servidor</em> (<code>mongod</code>) e o <em>shell</em> (<code>mongosh</code>) funcionem corretamente.
  </p>

  <h3>🪟 Instalação no Windows</h3>
  <ol>
    <li>
      Acesse o site oficial do MongoDB e baixe o <strong>MongoDB Community Server</strong>:  
      <a href="https://www.mongodb.com/try/download/community" target="_blank">mongodb.com/try/download/community</a>.
    </li>
    <li>
      Escolha o instalador <strong>MSI</strong> e siga as instruções padrão, marcando a opção 
      <em>"Install MongoDB as a Service"</em> (para inicializar automaticamente com o Windows).
    </li>
    <li>
      Após a instalação, adicione os caminhos abaixo à variável de ambiente <code>PATH</code>:
      <ul>
        <li><code>C:\Program Files\MongoDB\Server\8.2\bin</code></li>
        <li><code>C:\Program Files\MongoDB\Tools\100\bin</code></li>
        <li>Caso tenha instalado o <code>mongosh</code> separadamente, adicione também:
          <code>C:\mongosh</code>
        </li>
      </ul>
    </li>
    <li>
      Verifique a instalação abrindo o <strong>Prompt de Comando</strong> e digitando:
      <pre><code>mongosh</code></pre>
      Se tudo estiver correto, você verá a versão do MongoDB e uma conexão com <code>mongodb://127.0.0.1:27017</code>.
    </li>
  </ol>

  <h3>🐧 Instalação no Linux (Ubuntu/Debian)</h3>
  <ol>
    <li>Abra o terminal e adicione a chave GPG oficial do MongoDB:</li>
    <pre><code>curl -fsSL https://pgp.mongodb.com/server-8.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor</code></pre>
    <li>Adicione o repositório oficial ao seu sistema:</li>
    <pre><code>echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list</code></pre>
    <li>Atualize os pacotes e instale o MongoDB:</li>
    <pre><code>sudo apt update
sudo apt install -y mongodb-org</code></pre>
    <li>Inicie o serviço e verifique o status:</li>
    <pre><code>sudo systemctl start mongod
sudo systemctl status mongod</code></pre>
    <li>Para garantir que o MongoDB inicie junto com o sistema:</li>
    <pre><code>sudo systemctl enable mongod</code></pre>
    <li>Teste a instalação:</li>
    <pre><code>mongosh</code></pre>
  </ol>

  <h3>🧩 Dicas importantes</h3>
  <ul>
    <li>O comando <code>mongod</code> inicia o servidor do banco de dados.</li>
    <li>O comando <code>mongosh</code> abre o shell interativo para executar consultas e comandos.</li>
    <li>Em ambientes locais de estudo, não é necessário configurar autenticação.</li>
    <li>Para projetos em produção, é recomendado ativar usuários e permissões com <code>mongod --auth</code>.</li>
  </ul>

  <h3>✅ Testando a instalação</h3>
  <p>
    Após instalar, abra o terminal e execute:
  </p>
  <pre><code>show dbs</code></pre>
  <p>
    Isso exibirá as bases de dados padrão do MongoDB, confirmando que a instalação está funcional.
  </p>
</section>
<section id="entidades-mongodb">
  <h2>🏗️ Principais Entidades de um Banco de Dados Não Relacional</h2>
  <p>
    Diferente dos bancos relacionais que utilizam tabelas, colunas e linhas, os bancos 
    <strong>não relacionais</strong> (como o <strong>MongoDB</strong>) são orientados a 
    <em>documentos</em> e oferecem uma estrutura mais flexível e escalável.  
    Abaixo estão as principais entidades que compõem esse tipo de banco.
  </p>

  <h3>🗃️ Database (Banco de Dados)</h3>
  <p>
    É o conjunto principal que armazena todas as informações de um sistema ou aplicação.  
    Cada <strong>database</strong> contém diversas <em>collections</em> e funciona de forma 
    independente.  
    Exemplo: <code>loja_virtual</code>, <code>usuarios</code>, <code>estoque</code>.
  </p>

  <h3>📂 Collection (Coleção)</h3>
  <p>
    Uma <strong>collection</strong> é equivalente a uma <em>tabela</em> em bancos relacionais, 
    mas com uma diferença importante: ela não impõe um esquema fixo para os dados.  
    Cada documento dentro de uma collection pode conter campos diferentes, o que garante 
    flexibilidade ao modelo de dados.
  </p>
  <p><strong>Exemplo:</strong> Uma collection <code>clientes</code> pode conter documentos com diferentes estruturas de campos.</p>

  <h3>📄 Document (Documento)</h3>
  <p>
    O <strong>documento</strong> é a unidade básica de armazenamento no MongoDB, representado em 
    formato <em>JSON</em> (ou <em>BSON</em> — Binary JSON).  
    Ele armazena dados em pares <code>chave: valor</code> e é identificado por um campo 
    <code>_id</code> único.
  </p>

  <pre><code>{
  "_id": "507f1f77bcf86cd799439011",
  "nome": "Maria Silva",
  "idade": 28,
  "email": "maria.silva@email.com",
  "endereco": {
    "rua": "Rua das Flores, 123",
    "cidade": "São Paulo"
  }
}</code></pre>

  <p>
    O campo <code>_id</code> é gerado automaticamente e garante que cada documento seja 
    identificado de forma única dentro da coleção.
  </p>

  <h3>🔑 Field (Campo)</h3>
  <p>
    Os <strong>fields</strong> são os pares <code>chave: valor</code> dentro de um documento.  
    Eles representam as informações específicas de cada item armazenado, como 
    <code>nome</code>, <code>idade</code> e <code>email</code>.  
    Um documento pode conter campos de diversos tipos: texto, número, objeto, array, booleano, etc.
  </p>

  <h3>⚡ Index (Índice)</h3>
  <p>
    Os <strong>índices</strong> melhoram o desempenho de buscas e consultas em grandes coleções.  
    É possível criar índices em um ou mais campos:
  </p>
  <pre><code>db.clientes.createIndex({ "email": 1 })</code></pre>
  <p>
    Isso permite localizar documentos rapidamente com base no campo <code>email</code>.
  </p>

  <h3>📊 Comparativo com Bancos Relacionais</h3>
  <table>
    <thead>
      <tr>
        <th>Conceito SQL (Relacional)</th>
        <th>Conceito MongoDB (Não Relacional)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Database</td>
        <td>Database</td>
      </tr>
      <tr>
        <td>Table</td>
        <td>Collection</td>
      </tr>
      <tr>
        <td>Row</td>
        <td>Document</td>
      </tr>
      <tr>
        <td>Column</td>
        <td>Field</td>
      </tr>
      <tr>
        <td>Primary Key</td>
        <td>_id</td>
      </tr>
    </tbody>
  </table>

  <h3>💡 Resumo</h3>
  <ul>
    <li><strong>Database</strong>: Armazena várias coleções.</li>
    <li><strong>Collection</strong>: Agrupa documentos relacionados.</li>
    <li><strong>Document</strong>: Unidade de dados em formato JSON/BSON.</li>
    <li><strong>Field</strong>: Par chave-valor dentro de um documento.</li>
    <li><strong>Index</strong>: Otimiza consultas e buscas.</li>
  </ul>

  <p>
    Essa estrutura flexível é o que torna o <strong>MongoDB</strong> ideal para aplicações 
    modernas, que precisam lidar com grandes volumes de dados e modelos que evoluem 
    rapidamente sem depender de esquemas rígidos.
  </p>
</section>

<section id="bson-mongodb">
  <h2>📦 Estrutura de Dados BSON no MongoDB</h2>
  <p>
    O <strong>BSON</strong> (Binary JSON) é o formato utilizado internamente pelo 
    <strong>MongoDB</strong> para armazenar e transmitir documentos.  
    Ele é uma representação binária do formato <em>JSON</em> tradicional, projetado para ser 
    <strong>mais eficiente em armazenamento, velocidade e tipagem</strong>.
  </p>

  <h3>🧠 O que é o BSON?</h3>
  <p>
    O BSON (abreviação de <em>Binary JSON</em>) é uma forma binária de codificar documentos 
    semelhantes ao JSON.  
    Enquanto o JSON é ótimo para leitura humana, o BSON foi criado para ser processado 
    rapidamente por máquinas, permitindo que o MongoDB leia e grave dados de forma 
    muito mais eficiente.
  </p>
  <p>
    Ele suporta todos os tipos de dados do JSON, como <code>string</code>, <code>boolean</code>, 
    <code>number</code> e <code>array</code>, mas também adiciona outros tipos que o JSON 
    puro não possui, como <code>Date</code>, <code>ObjectId</code>, <code>Decimal128</code>, 
    <code>Binary</code>, entre outros.
  </p>

  <h3>🧩 Estrutura básica de um documento BSON</h3>
  <pre><code>{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "nome": "João Pereira",
  "idade": 30,
  "ativo": true,
  "data_cadastro": ISODate("2025-10-19T15:30:00Z"),
  "compras": [ "notebook", "mouse", "teclado" ],
  "saldo": NumberDecimal("2599.99")
}</code></pre>

  <p>
    Nesse exemplo, é possível observar tipos de dados que não existem no JSON padrão, 
    como <code>ObjectId</code>, <code>ISODate</code> e <code>NumberDecimal</code>.
  </p>

  <h3>🔍 Principais Tipos de Dados do BSON</h3>
  <table>
    <thead>
      <tr>
        <th>Tipo BSON</th>
        <th>Descrição</th>
        <th>Exemplo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>String</code></td>
        <td>Texto padrão.</td>
        <td><code>"nome": "Maria"</code></td>
      </tr>
      <tr>
        <td><code>Int32 / Int64</code></td>
        <td>Números inteiros de 32 ou 64 bits.</td>
        <td><code>"idade": 25</code></td>
      </tr>
      <tr>
        <td><code>Double</code></td>
        <td>Números decimais com precisão dupla.</td>
        <td><code>"preco": 49.99</code></td>
      </tr>
      <tr>
        <td><code>Boolean</code></td>
        <td>Valores lógicos <code>true</code> ou <code>false</code>.</td>
        <td><code>"ativo": true</code></td>
      </tr>
      <tr>
        <td><code>Date</code></td>
        <td>Data/hora no formato ISO.</td>
        <td><code>"data": ISODate("2025-10-19T00:00:00Z")</code></td>
      </tr>
      <tr>
        <td><code>ObjectId</code></td>
        <td>Identificador único de 12 bytes gerado automaticamente.</td>
        <td><code>"_id": ObjectId("507f1f77bcf86cd799439011")</code></td>
      </tr>
      <tr>
        <td><code>Array</code></td>
        <td>Lista de valores ou objetos.</td>
        <td><code>"itens": [ "teclado", "mouse" ]</code></td>
      </tr>
      <tr>
        <td><code>Document</code></td>
        <td>Documento aninhado dentro de outro documento.</td>
        <td><code>"endereco": { "cidade": "Curitiba", "uf": "PR" }</code></td>
      </tr>
      <tr>
        <td><code>Binary</code></td>
        <td>Armazena dados binários (como imagens, arquivos ou hashes).</td>
        <td><code>"arquivo": BinData(0, "4f5a...")</code></td>
      </tr>
      <tr>
        <td><code>Decimal128</code></td>
        <td>Tipo decimal de alta precisão (usado em valores financeiros).</td>
        <td><code>"saldo": NumberDecimal("10234.56")</code></td>
      </tr>
      <tr>
        <td><code>Null</code></td>
        <td>Representa um valor nulo.</td>
        <td><code>"telefone": null</code></td>
      </tr>
    </tbody>
  </table>

  <h3>⚡ Vantagens do BSON</h3>
  <ul>
    <li><strong>Maior eficiência</strong>: leitura e escrita binária são mais rápidas que JSON puro.</li>
    <li><strong>Mais tipos de dados</strong>: suporte a tipos avançados como <code>Date</code> e <code>ObjectId</code>.</li>
    <li><strong>Compactação binária</strong>: ocupa menos espaço em disco.</li>
    <li><strong>Integração direta com o MongoDB</strong>: o servidor armazena e envia dados diretamente nesse formato.</li>
  </ul>

  <h3>🧾 Comparação JSON x BSON</h3>
  <table>
    <thead>
      <tr>
        <th>Aspecto</th>
        <th>JSON</th>
        <th>BSON</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Formato</td>
        <td>Texto legível por humanos</td>
        <td>Binário legível por máquina</td>
      </tr>
      <tr>
        <td>Tipos de dados</td>
        <td>Limitados (string, number, boolean, array, object)</td>
        <td>Ricos (ObjectId, Date, Binary, Decimal128...)</td>
      </tr>
      <tr>
        <td>Velocidade de leitura/gravação</td>
        <td>Mais lenta</td>
        <td>Mais rápida</td>
      </tr>
      <tr>
        <td>Uso principal</td>
        <td>APIs e transferência de dados</td>
        <td>Armazenamento e consulta em MongoDB</td>
      </tr>
    </tbody>
  </table>

  <p>
    Em resumo, o <strong>BSON</strong> é o que torna o <strong>MongoDB</strong> tão eficiente, 
    pois combina a simplicidade do <em>JSON</em> com o desempenho e a riqueza de tipos 
    necessários para bancos de dados modernos e escaláveis.
  </p>
</section>



