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

<section id="comandos-basicos-mongodb">
  <h2>💻 Principais Comandos no MongoDB (CRUD e Gerenciamento)</h2>
  <p>
    O <strong>MongoDB</strong> utiliza uma sintaxe simples e expressiva baseada em JavaScript, 
    permitindo que operações sejam executadas diretamente no <em>shell</em> (<code>mongosh</code>) 
    de forma intuitiva.  
    A seguir, estão os principais comandos usados no dia a dia para criar bancos, coleções e 
    manipular documentos — cobrindo todo o ciclo <strong>CRUD</strong> 
    (<em>Create, Read, Update, Delete</em>).
  </p>

  <h3>🏦 Selecionando e criando um banco de dados</h3>
  <p>
    Diferente dos bancos relacionais, no MongoDB o banco de dados é criado automaticamente 
    quando você insere o primeiro dado nele.
  </p>
  <pre><code>use loja</code></pre>
  <p>
    O comando <code>use</code> muda o contexto atual para o banco de dados especificado.
    Se ele ainda não existir, será criado assim que um documento for inserido.
  </p>

  <h3>📁 Criando uma coleção e inserindo documentos</h3>
  <p>
    Uma <strong>coleção</strong> é equivalente a uma "tabela" nos bancos relacionais, 
    mas sem esquema fixo (schema-less).
  </p>

  <h4>➡️ Inserindo um único documento</h4>
  <pre><code>db.produtos.insertOne({
  nome: "Notebook Lenovo",
  preco: 3599.90,
  estoque: 25,
  categoria: "Informática"
})</code></pre>

  <h4>➡️ Inserindo múltiplos documentos</h4>
  <pre><code>db.produtos.insertMany([
  { nome: "Mouse Logitech", preco: 149.90, estoque: 100, categoria: "Periféricos" },
  { nome: "Teclado Mecânico", preco: 299.90, estoque: 50, categoria: "Periféricos" }
])</code></pre>

  <p>
    Cada documento inserido automaticamente recebe um identificador único 
    chamado <code>_id</code>, gerado no formato <em>ObjectId</em>.
  </p>

  <h3>🔎 Consultando dados (Read)</h3>
  <p>
    O MongoDB oferece comandos poderosos para buscar documentos dentro das coleções.
  </p>

  <h4>➡️ Listar todos os documentos</h4>
  <pre><code>db.produtos.find()</code></pre>

  <h4>➡️ Buscar um único documento</h4>
  <pre><code>db.produtos.findOne({ nome: "Mouse Logitech" })</code></pre>

  <h4>➡️ Consultas com filtros e operadores</h4>
  <pre><code>db.produtos.find({ preco: { $gt: 1000 } })</code></pre>
  <p>
    O exemplo acima usa o operador <code>$gt</code> (greater than) para retornar todos 
    os produtos com preço maior que 1000.
  </p>

  <h4>➡️ Consultas com projeção (campos específicos)</h4>
  <pre><code>db.produtos.find({}, { nome: 1, preco: 1, _id: 0 })</code></pre>
  <p>
    A projeção define quais campos serão exibidos.  
    Aqui, apenas <code>nome</code> e <code>preco</code> são retornados, ocultando o <code>_id</code>.
  </p>

  <h4>➡️ Ordenação e limite de resultados</h4>
  <pre><code>db.produtos.find().sort({ preco: -1 }).limit(5)</code></pre>
  <p>
    Retorna os 5 produtos mais caros (ordem decrescente).
  </p>

  <h4>✨ Formatando a saída com <code>pretty()</code></h4>
  <p>
    Por padrão, o comando <code>find()</code> retorna os resultados em uma única linha,
    o que pode dificultar a leitura de documentos mais complexos.  
    Para exibir os dados de forma organizada e indentada, basta usar o método <code>pretty()</code>:
  </p>
  <pre><code>db.produtos.find().pretty()</code></pre>
  <p>
    Esse comando formata a saída no terminal, exibindo cada campo em uma nova linha com recuo, 
    facilitando a visualização de documentos JSON grandes ou aninhados.  
    É especialmente útil durante consultas e depuração.
  </p>
  <p><strong>Dica:</strong> o <code>pretty()</code> funciona apenas no shell do MongoDB 
  (como o <em>mongosh</em>) e não afeta o resultado retornado via driver ou aplicação.</p>

  <h3>🛠️ Atualizando documentos (Update)</h3>
  <p>
    O MongoDB permite atualizar documentos específicos com operadores como <code>$set</code>, 
    <code>$inc</code>, <code>$unset</code> e <code>$push</code>.
  </p>

  <h4>➡️ Atualizar um único documento</h4>
  <pre><code>db.produtos.updateOne(
  { nome: "Mouse Logitech" },
  { $set: { preco: 159.90 } }
)</code></pre>

  <h4>➡️ Atualizar múltiplos documentos</h4>
  <pre><code>db.produtos.updateMany(
  { categoria: "Periféricos" },
  { $inc: { estoque: 10 } }
)</code></pre>
  <p>
    Aqui, o operador <code>$inc</code> aumenta o campo <code>estoque</code> em 10 unidades 
    para todos os produtos da categoria "Periféricos".
  </p>

  <h4>➡️ Removendo um campo de um documento</h4>
  <pre><code>db.produtos.updateOne(
  { nome: "Notebook Lenovo" },
  { $unset: { categoria: "" } }
)</code></pre>
  <p>
    O operador <code>$unset</code> remove o campo <code>categoria</code> do documento.
  </p>

  <h3>🗑️ Deletando documentos (Delete)</h3>
  <p>
    Para excluir dados, use os comandos <code>deleteOne()</code> ou <code>deleteMany()</code>.
  </p>

  <h4>➡️ Deletar um único documento</h4>
  <pre><code>db.produtos.deleteOne({ nome: "Teclado Mecânico" })</code></pre>

  <h4>➡️ Deletar múltiplos documentos</h4>
  <pre><code>db.produtos.deleteMany({ categoria: "Periféricos" })</code></pre>

  <p>
    Cuidado ao usar <code>deleteMany()</code> sem filtro — isso removerá todos os documentos da coleção.
  </p>

  <h3>📚 Gerenciando coleções e bancos</h3>
  <ul>
    <li><code>show dbs</code> — lista todos os bancos de dados existentes.</li>
    <li><code>show collections</code> — lista todas as coleções do banco atual.</li>
    <li><code>db.dropDatabase()</code> — remove completamente o banco de dados atual.</li>
    <li><code>db.minhaColecao.drop()</code> — exclui apenas uma coleção específica.</li>
  </ul>

  <h3>📊 Monitorando o desempenho com <code>mongostat</code></h3>
  <p>
    O comando <code>mongostat</code> é uma ferramenta de monitoramento em tempo real do MongoDB.  
    Ele exibe estatísticas dinâmicas sobre o uso do banco, como número de operações por segundo,  
    uso de memória, conexões ativas e leituras/escritas.  
  </p>

  <h4>➡️ Exemplo de uso</h4>
  <pre><code>mongostat</code></pre>

  <p>
    Ao executar esse comando no terminal (com o serviço <code>mongod</code> em execução), 
    você verá uma tabela atualizada a cada segundo com informações como:
  </p>
  <ul>
    <li><strong>insert</strong> — número de inserções por segundo.</li>
    <li><strong>query</strong> — número de consultas realizadas.</li>
    <li><strong>update</strong> — atualizações por segundo.</li>
    <li><strong>delete</strong> — exclusões realizadas.</li>
    <li><strong>conn</strong> — quantidade de conexões ativas.</li>
    <li><strong>vsize</strong> — memória virtual utilizada.</li>
    <li><strong>netIn / netOut</strong> — tráfego de entrada e saída de rede.</li>
  </ul>

  <h4>📈 Exemplo de saída simplificada:</h4>
  <pre><code>insert query update delete conn    vsize    netIn   netOut
     5     2      1      0    10   1.2G     10kB     8kB</code></pre>

  <p>
    O <code>mongostat</code> é muito útil para diagnosticar gargalos e analisar o comportamento 
    do banco de dados sob carga, sendo amplamente utilizado em ambientes de produção e testes de desempenho.
  </p>

  <h3>💡 Dica avançada</h3>
  <p>
    É possível combinar filtros, projeções e ordenações em uma única consulta:
  </p>
  <pre><code>db.produtos.find(
  { preco: { $gt: 1000 }, estoque: { $lte: 50 } },
  { nome: 1, preco: 1 }
).sort({ preco: 1 }).limit(3)</code></pre>
  <p>
    Esse comando retorna até 3 produtos com preço maior que 1000 e estoque menor ou igual a 50, 
    exibindo apenas <code>nome</code> e <code>preco</code>, ordenados pelo preço em ordem crescente.
  </p>

  <h3>🧾 Resumo rápido</h3>
  <table>
    <thead>
      <tr>
        <th>Comando</th>
        <th>Função</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>use nomeBanco</code></td><td>Seleciona ou cria um banco de dados</td></tr>
      <tr><td><code>db.createCollection("nome")</code></td><td>Cria uma nova coleção</td></tr>
      <tr><td><code>db.colecao.insertOne({...})</code></td><td>Insere um documento</td></tr>
      <tr><td><code>db.colecao.find()</code></td><td>Lista documentos</td></tr>
      <tr><td><code>db.colecao.find().pretty()</code></td><td>Lista documentos com formatação legível</td></tr>
      <tr><td><code>db.colecao.findOne({...})</code></td><td>Busca um único documento</td></tr>
      <tr><td><code>db.colecao.updateOne({...}, {...})</code></td><td>Atualiza um documento</td></tr>
      <tr><td><code>db.colecao.deleteOne({...})</code></td><td>Remove um documento</td></tr>
      <tr><td><code>show dbs</code></td><td>Lista bancos de dados</td></tr>
      <tr><td><code>show collections</code></td><td>Lista coleções</td></tr>
      <tr><td><code>mongostat</code></td><td>Exibe estatísticas em tempo real do servidor MongoDB</td></tr>
    </tbody>
  </table>

  <p>
    Esses são os comandos essenciais para dominar o <strong>MongoDB</strong>.  
    Com eles, você já consegue criar, consultar, atualizar, excluir e monitorar dados em qualquer aplicação.
  </p>
</section>

<section id="mongodb-drivers">
  <h2>🧩 MongoDB e seus Drivers Oficiais</h2>
  <p>
    O <strong>MongoDB</strong> é um banco de dados orientado a documentos projetado para ser
    acessado de maneira simples e performática a partir de diferentes linguagens de programação.  
    Para isso, ele disponibiliza uma ampla gama de <strong>drivers oficiais</strong> — bibliotecas
    que permitem que aplicações interajam diretamente com o banco.
  </p>

  <h3>🚀 O que são drivers?</h3>
  <p>
    Os <strong>drivers</strong> são componentes que fazem a ponte entre a sua aplicação e o 
    servidor MongoDB.  
    Eles implementam o protocolo de comunicação com o banco, permitindo executar comandos como 
    <code>insert</code>, <code>find</code>, <code>update</code> e <code>delete</code> 
    diretamente no código da sua linguagem preferida.
  </p>

  <h3>💡 Principais funções de um driver</h3>
  <ul>
    <li>Gerenciar conexões com o banco (pooling e autenticação).</li>
    <li>Enviar e receber comandos em formato <strong>BSON</strong>.</li>
    <li>Fornecer uma API amigável para operações CRUD e agregações.</li>
    <li>Tratar erros e exceções de forma padronizada.</li>
    <li>Otimizar o desempenho e a compatibilidade entre versões do MongoDB.</li>
  </ul>

  <h3>🌍 Drivers oficiais por linguagem</h3>
  <p>
    O MongoDB mantém drivers oficiais para as principais linguagens do mercado.  
    A tabela abaixo mostra alguns dos mais utilizados:
  </p>

  <table>
    <thead>
      <tr>
        <th>Linguagem / Plataforma</th>
        <th>Pacote / Biblioteca</th>
        <th>Gerenciador</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>JavaScript / Node.js</td><td><code>mongodb</code></td><td>npm / yarn</td></tr>
      <tr><td>Python</td><td><code>pymongo</code></td><td>pip</td></tr>
      <tr><td>Java</td><td><code>mongodb-driver-sync</code></td><td>Maven / Gradle</td></tr>
      <tr><td>Kotlin</td><td><code>KMongo</code> (baseado no driver Java)</td><td>Gradle / Maven</td></tr>
      <tr><td>C# / .NET</td><td><code>MongoDB.Driver</code></td><td>NuGet</td></tr>
      <tr><td>Go</td><td><code>mongo-go-driver</code></td><td>go get</td></tr>
      <tr><td>PHP</td><td><code>mongodb/mongodb</code></td><td>Composer</td></tr>
      <tr><td>Ruby</td><td><code>mongo</code></td><td>gem</td></tr>
    </tbody>
  </table>

  <h3>🧠 Exemplo prático (Node.js + Mongoose)</h3>
  <p>
    Um dos drivers mais populares no ecossistema Node.js é o <strong>Mongoose</strong>, 
    que fornece uma camada de modelagem de dados (ODM - Object Data Modeling) sobre o driver nativo.
  </p>

  <pre><code class="language-javascript">import mongoose from "mongoose";

// Conectando ao MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/loja")
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("❌ Erro na conexão:", err));

// Definindo um modelo (schema)
const Produto = mongoose.model("Produto", {
  nome: String,
  preco: Number,
  estoque: Number
});

// Inserindo um documento
await Produto.create({ nome: "Mouse Gamer", preco: 199.90, estoque: 50 });

// Buscando documentos
const produtos = await Produto.find();
console.log(produtos);
</code></pre>

  <p>
    O Mongoose é ideal para quem deseja trabalhar com o MongoDB em aplicações Node.js 
    usando um modelo de dados estruturado, com validações e middlewares.
  </p>

  <h3>⚙️ Exemplo simples com o driver oficial do Node.js</h3>
  <pre><code class="language-javascript">import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("loja");
    const produtos = db.collection("produtos");

    await produtos.insertOne({ nome: "Teclado", preco: 250 });
    const resultado = await produtos.find().toArray();
    console.log(resultado);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
</code></pre>

  <h3>🧱 Diferença entre ODM, ORM e Driver</h3>
  <ul>
    <li><strong>Driver:</strong> faz a conexão direta e executa comandos brutos no banco.</li>
    <li><strong>ODM (Object Data Modeling):</strong> abstrai o driver e permite definir esquemas e validações (ex: Mongoose).</li>
    <li><strong>ORM (Object Relational Mapping):</strong> usado em bancos relacionais, como Sequelize (SQL), não em NoSQL.</li>
  </ul>

  <h3>💬 Dicas e boas práticas</h3>
  <ul>
    <li>Use drivers oficiais — eles são mantidos pela equipe do MongoDB e têm melhor compatibilidade.</li>
    <li>Evite reconectar o driver a cada requisição; use um pool de conexões global.</li>
    <li>Feche conexões corretamente ao finalizar a aplicação.</li>
    <li>Verifique sempre a versão do driver compatível com seu servidor MongoDB.</li>
  </ul>

  <h3>📎 Referências oficiais</h3>
  <ul>
    <li><a href="https://www.mongodb.com/docs/drivers/" target="_blank">Documentação oficial dos drivers</a></li>
    <li><a href="https://mongoosejs.com/" target="_blank">Documentação do Mongoose (ODM para Node.js)</a></li>
  </ul>

  <p>
    Com os drivers adequados, o <strong>MongoDB</strong> pode ser facilmente integrado 
    a praticamente qualquer linguagem, oferecendo flexibilidade, desempenho e uma API moderna.
  </p>
</section>

<section id="createcollection-mongodb">
  <h2>🧱 Criando Coleções com <code>createCollection()</code></h2>
  <p>
    No <strong>MongoDB</strong>, as coleções são criadas automaticamente quando você insere o primeiro 
    documento com o comando <code>insertOne()</code> ou <code>insertMany()</code>.  
    No entanto, também é possível criar coleções manualmente com o comando 
    <code>db.createCollection()</code>, o que oferece mais controle sobre a estrutura e comportamento da coleção.
  </p>

  <h3>📦 Sintaxe básica</h3>
  <pre><code>db.createCollection("nomeDaColecao")</code></pre>
  <p>
    Esse comando cria uma nova coleção vazia chamada <code>nomeDaColecao</code>.  
    Se a coleção já existir, o MongoDB retornará um erro informando que ela já foi criada.
  </p>

  <h3>⚙️ Criando coleções com opções avançadas</h3>
  <p>
    O <code>createCollection()</code> também permite definir parâmetros opcionais, como limite de tamanho, 
    número máximo de documentos e se será uma <strong>coleção circular (capped)</strong>.
  </p>

  <h4>➡️ Exemplo com opções</h4>
  <pre><code>db.createCollection("logs", {
  capped: true,
  size: 5242880,  // 5 MB
  max: 5000
})</code></pre>
  <p>
    Nesse exemplo:
  </p>
  <ul>
    <li><code>capped: true</code> — cria uma <strong>coleção limitada</strong> em tamanho fixo.</li>
    <li><code>size</code> — define o tamanho máximo da coleção (em bytes).</li>
    <li><code>max</code> — define o número máximo de documentos permitidos.</li>
  </ul>
  <p>
    Quando o limite é atingido, os documentos mais antigos são automaticamente sobrescritos — ideal para logs e monitoramento.
  </p>

  <h3>🔍 Verificando coleções criadas</h3>
  <pre><code>show collections</code></pre>
  <p>
    Exibe todas as coleções existentes no banco de dados atual.
  </p>

  <h3>🧾 Exemplo prático completo</h3>
  <p>
    Abaixo está um exemplo prático que cria uma coleção chamada <code>usuarios</code> 
    e em seguida insere um documento:
  </p>
  <pre><code>use empresa

db.createCollection("usuarios")

db.usuarios.insertOne({
  nome: "Leonardo",
  cargo: "Desenvolvedor",
  ativo: true,
  dataCadastro: new Date()
})</code></pre>
  <p>
    Após isso, a coleção <code>usuarios</code> estará disponível para consultas:
  </p>
  <pre><code>db.usuarios.find().pretty()</code></pre>

  <h3>🚫 Quando <strong>não</strong> usar <code>createCollection()</code></h3>
  <ul>
    <li>Na maioria dos casos, o MongoDB cria coleções automaticamente ao inserir o primeiro documento.</li>
    <li>Use <code>createCollection()</code> apenas quando precisar definir <em>opções específicas</em> (como capped collections).</li>
    <li>Evite criar coleções vazias desnecessárias, pois isso pode aumentar a complexidade do gerenciamento.</li>
  </ul>

  <h3>🧩 Dica</h3>
  <p>
    É possível verificar as informações detalhadas de uma coleção (como tamanho e número de documentos) com:
  </p>
  <pre><code>db.nomeDaColecao.stats()</code></pre>
  <p>
    Isso retorna dados úteis sobre armazenamento, índices e estatísticas internas.
  </p>

  <h3>📚 Resumo rápido</h3>
  <table>
    <thead>
      <tr>
        <th>Comando</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>db.createCollection("nome")</code></td><td>Cria uma nova coleção vazia</td></tr>
      <tr><td><code>db.createCollection("logs", { capped: true, size: 10000 })</code></td><td>Cria uma coleção com tamanho e limite definidos</td></tr>
      <tr><td><code>show collections</code></td><td>Lista coleções existentes</td></tr>
      <tr><td><code>db.nomeDaColecao.stats()</code></td><td>Exibe informações detalhadas da coleção</td></tr>
    </tbody>
  </table>

  <p>
    Assim, o comando <code>createCollection()</code> é uma ferramenta poderosa para 
    criar coleções sob medida, especialmente em cenários de performance e controle de dados.
  </p>
</section>

<section id="import-export-mongodb">
  <h2>📤📥 Importação e Exportação de Dados no MongoDB</h2>

  <p>
    O <strong>MongoDB</strong> oferece ferramentas de linha de comando muito úteis para importar e exportar dados entre bancos e coleções.  
    Essas operações são essenciais para <strong>backup, migração e integração</strong> de dados entre ambientes (como desenvolvimento, teste e produção).
  </p>

  <h3>📚 Principais ferramentas</h3>
  <ul>
    <li><strong><code>mongoimport</code></strong> — importa dados de arquivos JSON, CSV ou TSV para uma coleção.</li>
    <li><strong><code>mongoexport</code></strong> — exporta os dados de uma coleção para um arquivo JSON ou CSV.</li>
    <li><strong><code>mongodump</code></strong> — realiza backup completo de um banco de dados ou de várias coleções (formato binário BSON).</li>
    <li><strong><code>mongorestore</code></strong> — restaura backups criados pelo <code>mongodump</code>.</li>
  </ul>

  <hr>

  <h3>🛠️ 1. Criando dados de exemplo</h3>
  <pre><code>db.salarios.insertOne({nome: "Matheus", salario: 4000})
db.salarios.insertOne({nome: "João", salario: 6500})

db.salarios.find()
show collections
</code></pre>
  <p>
    Esses comandos criam a coleção <code>salarios</code> e inserem dois registros para testes.
  </p>

  <hr>

  <h3>⬆️ 2. Exportando dados com <code>mongoexport</code></h3>
  <p>
    O comando <code>mongoexport</code> exporta os dados de uma coleção para um arquivo externo.  
    Ele é útil para gerar backups em formato JSON ou para migrar dados entre bancos.
  </p>

  <pre><code>mongoexport -c books -d booksData -o booksExample.json</code></pre>

  <p>📄 Explicação:</p>
  <ul>
    <li><code>-c books</code> — define a coleção que será exportada.</li>
    <li><code>-d booksData</code> — nome do banco de dados.</li>
    <li><code>-o booksExample.json</code> — nome do arquivo de saída.</li>
  </ul>

  <p>✅ Resultado: um arquivo <code>booksExample.json</code> contendo todos os documentos da coleção <code>books</code>.</p>

  <hr>

  <h3>⬇️ 3. Importando dados com <code>mongoimport</code></h3>
  <p>
    O comando <code>mongoimport</code> é usado para inserir dados de arquivos JSON, CSV ou TSV em uma coleção do MongoDB.
  </p>

  <pre><code>mongoimport books.json -d booksData -c books</code></pre>

  <p>📄 Explicação:</p>
  <ul>
    <li><code>books.json</code> — arquivo contendo os dados a serem importados.</li>
    <li><code>-d booksData</code> — nome do banco de dados de destino.</li>
    <li><code>-c books</code> — nome da coleção onde os dados serão inseridos.</li>
  </ul>

  <p>💡 Dica: o MongoDB cria a coleção automaticamente se ela não existir.</p>

  <hr>

  <h3>🧱 4. Exportando várias coleções com <code>mongodump</code></h3>
  <p>
    Para exportar **várias coleções** (ou o banco inteiro), usamos o <code>mongodump</code>.  
    Ele gera arquivos binários BSON e metadados JSON dentro de uma pasta.
  </p>

  <pre><code>use meuBanco

db.pessoas.insertOne({nome: "Matheus", idade: 30})
db.enderecos.insertOne({rua: "Rua teste", numero: "123c"})

mongodump -d meuBanco -o meuBanco</code></pre>

  <p>📄 Explicação:</p>
  <ul>
    <li><code>-d meuBanco</code> — define o banco de dados a ser exportado.</li>
    <li><code>-o meuBanco</code> — define o diretório onde os arquivos serão salvos.</li>
  </ul>

  <p>💾 Resultado: será criada uma pasta chamada <code>meuBanco</code> contendo os arquivos BSON de cada coleção.</p>

  <hr>

  <h3>🔁 5. Importando backups com <code>mongorestore</code></h3>
  <p>
    Para restaurar os dados exportados com <code>mongodump</code>, use o comando:
  </p>

  <pre><code>mongorestore meuBanco/</code></pre>
  <p>
    Isso recria o banco e as coleções originais com os mesmos dados.
  </p>

  <hr>

  <h3>🧪 6. Exemplo prático completo</h3>
  <pre><code># Criando banco e dados
use novoBanco

db.dados.insertOne({prova_numero: 1, nota: 10})
db.dados.insertOne({prova_numero: 2, nota: 8})
db.dados.insertOne({prova_numero: 3, nota: 7})

# Exportando para JSON
mongoexport -c dados -d novoBanco -o novoBanco.json

# Importando em outro banco
mongoimport novoBanco.json -d novoBancoDois -c novosdados</code></pre>

  <p>
    Esse exemplo cria um banco chamado <code>novoBanco</code>, exporta os dados da coleção <code>dados</code> e 
    importa para um novo banco chamado <code>novoBancoDois</code> na coleção <code>novosdados</code>.
  </p>

  <hr>

  <h3>⚙️ Parâmetros úteis do <code>mongoimport</code> e <code>mongoexport</code></h3>
  <table>
    <thead>
      <tr>
        <th>Parâmetro</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>--jsonArray</code></td><td>Importa um arquivo contendo um array JSON completo</td></tr>
      <tr><td><code>--type=csv</code></td><td>Define o tipo de arquivo (CSV, TSV, JSON)</td></tr>
      <tr><td><code>--fields "nome,idade"</code></td><td>Define colunas para CSV/TSV</td></tr>
      <tr><td><code>--drop</code></td><td>Apaga a coleção antes de importar novos dados</td></tr>
      <tr><td><code>--out</code></td><td>Define o nome do arquivo de saída no export</td></tr>
    </tbody>
  </table>

  <hr>

  <h3>💡 Dicas importantes</h3>
  <ul>
    <li>Garanta que o serviço do MongoDB esteja ativo antes de rodar os comandos de import/export.</li>
    <li>O <code>mongoexport</code> gera arquivos em texto legível (JSON), enquanto o <code>mongodump</code> cria arquivos binários (BSON).</li>
    <li>Use <code>mongodump</code> e <code>mongorestore</code> para backups grandes ou bancos completos.</li>
    <li>Use <code>mongoimport</code> e <code>mongoexport</code> para trocas rápidas de dados entre coleções específicas.</li>
  </ul>

</section>

<section id="insercao-dados-mongodb">
  <h2>🧩 Inserção de Dados no MongoDB (Create)</h2>
  <p>
    A inserção de dados é a primeira etapa do ciclo <strong>CRUD</strong> — sigla para 
    <em>Create, Read, Update e Delete</em> — e representa o momento em que novos 
    documentos são adicionados ao banco de dados.
    No <strong>MongoDB</strong>, essa operação é extremamente flexível e intuitiva, 
    pois os dados são armazenados em formato <strong>JSON (BSON internamente)</strong>, 
    sem necessidade de esquemas fixos como em bancos relacionais.
  </p>

  <h3>📘 Tudo é documento</h3>
  <p>
    No MongoDB, cada registro armazenado é chamado de <strong>documento</strong>.  
    Ele é composto por pares <code>chave: valor</code> e pertence a uma 
    <strong>coleção</strong> (que equivale a uma tabela em bancos SQL).
  </p>
  <pre><code>{
  "nome": "João Silva",
  "idade": 29,
  "email": "joao.silva@example.com",
  "ativo": true
}</code></pre>
  <p>
    Como o MongoDB é <em>schema-less</em>, os documentos de uma mesma coleção podem 
    ter estruturas diferentes — ou seja, campos opcionais e até tipos variados são aceitos.
  </p>

  <h3>🧠 Inserindo dados no banco</h3>
  <p>
    Antes de inserir, selecione ou crie o banco de dados com o comando:
  </p>
  <pre><code>use loja</code></pre>
  <p>
    Em seguida, você pode inserir um documento de forma simples com o método 
    <code>insertOne()</code>:
  </p>
  <pre><code>db.produtos.insertOne({
  nome: "Notebook Lenovo",
  preco: 3599.90,
  estoque: 25,
  categoria: "Informática"
})</code></pre>
  <p>
    Esse comando cria automaticamente a coleção <code>produtos</code> (caso não exista) 
    e insere o documento.  
    Após a execução, o MongoDB gera um campo especial chamado <code>_id</code>, 
    que funciona como identificador único do documento.
  </p>

  <h3>🔢 Inserindo vários documentos</h3>
  <p>
    Para inserir múltiplos registros de uma só vez, usamos o método 
    <code>insertMany()</code>:
  </p>
  <pre><code>db.produtos.insertMany([
  { nome: "Mouse Logitech", preco: 149.90, estoque: 100, categoria: "Periféricos" },
  { nome: "Teclado Mecânico", preco: 299.90, estoque: 50, categoria: "Periféricos" },
  { nome: "Monitor Samsung", preco: 1299.00, estoque: 20, categoria: "Monitores" }
])</code></pre>
  <p>
    Esse comando é ideal para <strong>importar grandes volumes de dados</strong> 
    ou popular o banco rapidamente durante o desenvolvimento.
  </p>

  <h3>🆔 Alterando o identificador (<code>_id</code>)</h3>
  <p>
    Todo documento no MongoDB possui um campo <code>_id</code> obrigatório e único.  
    Por padrão, ele é gerado automaticamente no formato <em>ObjectId</em>, 
    mas você pode definir manualmente esse valor:
  </p>
  <pre><code>db.produtos.insertOne({
  _id: "notebook-lenovo",
  nome: "Notebook Lenovo",
  preco: 3599.90
})</code></pre>
  <p>
    ⚠️ Caso tente inserir outro documento com o mesmo <code>_id</code>, 
    o MongoDB retornará um erro de chave duplicada.
  </p>

  <h3>⚙️ O método <code>insert()</code> (versão antiga)</h3>
  <p>
    O método <code>insert()</code> foi usado em versões anteriores do MongoDB 
    para inserir um ou vários documentos, mas foi substituído por 
    <code>insertOne()</code> e <code>insertMany()</code> para dar mais clareza e controle.  
    Ainda assim, ele continua funcional em muitos ambientes:
  </p>
  <pre><code>db.usuarios.insert([
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 32 }
])</code></pre>

  <h3>🔐 Write Concern</h3>
  <p>
    O <strong>Write Concern</strong> define o nível de confirmação que o MongoDB 
    deve exigir ao gravar dados.  
    Ele garante integridade e controle sobre como as operações de escrita 
    são reconhecidas pelo servidor.
  </p>
  <p>Os principais níveis são:</p>
  <ul>
    <li><code>w: 0</code> — não aguarda confirmação (melhor desempenho, menos segurança).</li>
    <li><code>w: 1</code> — confirmação após escrita no nó primário (padrão).</li>
    <li><code>w: "majority"</code> — confirmação após gravação na maioria dos nós do cluster.</li>
  </ul>
  <pre><code>db.produtos.insertOne(
  { nome: "Headset HyperX", preco: 499.90 },
  { writeConcern: { w: "majority" } }
)</code></pre>
  <p>
    Essa configuração é essencial em ambientes distribuídos (replicasets), 
    garantindo que os dados estejam realmente persistidos antes da confirmação.
  </p>

  <h3>💡 Boas práticas e dicas</h3>
  <ul>
    <li>Evite inserir documentos muito grandes — o limite é de 16 MB por documento.</li>
    <li>Prefira usar <code>insertMany()</code> para inserções em lote, pois é mais performático.</li>
    <li>Use identificadores personalizados (<code>_id</code>) apenas quando necessário.</li>
    <li>Valide campos importantes na aplicação antes de enviar para o banco.</li>
  </ul>

  <h3>🧾 Resumo dos principais comandos de inserção</h3>
  <table>
    <thead>
      <tr>
        <th>Comando</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>db.colecao.insertOne({...})</code></td><td>Insere um único documento</td></tr>
      <tr><td><code>db.colecao.insertMany([...])</code></td><td>Insere múltiplos documentos</td></tr>
      <tr><td><code>db.colecao.insert([...])</code></td><td>Método legado (insere um ou mais)</td></tr>
      <tr><td><code>_id</code></td><td>Identificador único de cada documento</td></tr>
      <tr><td><code>writeConcern</code></td><td>Define o nível de segurança da escrita</td></tr>
    </tbody>
  </table>

</section>

<section id="consultas-mongodb">
  <h2>🔎 Consultas no MongoDB (Read)</h2>

  <h3>📋 Exibindo todos os documentos</h3>
  <p>
    O comando básico para listar todos os documentos de uma coleção é:
  </p>
  <pre><code>db.books.find()</code></pre>
  <p>
    Isso retornará todos os registros existentes dentro da coleção <code>books</code>.  
    No entanto, o resultado aparece em formato compacto, o que pode dificultar a leitura.
  </p>

  <h4>✨ Formatando a saída com <code>pretty()</code></h4>
  <p>
    Para deixar o resultado legível e estruturado, podemos usar:
  </p>
  <pre><code>db.books.find().pretty()</code></pre>
  <p>
    O método <code>pretty()</code> formata o retorno com identação, exibindo cada campo 
    em uma nova linha — ideal para visualizar documentos longos ou aninhados.  
    Esse método só funciona no shell do MongoDB (<em>mongosh</em>).
  </p>

  <h3>🎯 Encontrando documentos específicos</h3>
  <p>
    Para filtrar resultados, basta passar um objeto de consulta ao <code>find()</code>:
  </p>
  <pre><code>db.books.find({ pageCount: 362 })</code></pre>
  <p>
    O MongoDB retorna todos os livros cujo campo <code>pageCount</code> seja exatamente 362.  
    Também é possível filtrar por texto:
  </p>
  <pre><code>db.books.find({ title: "MongoDB in Action" })
db.books.find({ authors: "Jason R. Weiss" })</code></pre>

  <h3>📚 Buscando múltiplos valores com <code>$in</code></h3>
  <p>
    O operador <code>$in</code> permite buscar documentos cujo campo corresponda 
    a um dos valores em uma lista:
  </p>
  <pre><code>db.books.find({ categories: { $in: ["Java", "Internet"] } }).pretty()</code></pre>
  <p>
    Nesse exemplo, o MongoDB retornará todos os livros que pertençam às categorias 
    <strong>Java</strong> ou <strong>Internet</strong>.
  </p>

  <h3>⚖️ Consultas com múltiplas condições</h3>
  <p>
    É possível combinar múltiplos filtros em uma mesma busca, separando os campos por vírgula:
  </p>
  <pre><code>db.books.find({ pageCount: 592, _id: 63 }).pretty()</code></pre>
  <p>
    Nesse caso, o MongoDB retornará documentos que satisfaçam <strong>ambas</strong> 
    as condições — ou seja, o operador <strong>AND</strong> é aplicado implicitamente.
  </p>

  <h3>📈 Operadores de comparação</h3>
  <p>
    O MongoDB oferece operadores que permitem comparar valores numéricos e de data, 
    tornando as consultas mais poderosas.
  </p>

  <ul>
    <li><code>$gt</code> — maior que</li>
    <li><code>$lt</code> — menor que</li>
    <li><code>$gte</code> — maior ou igual a</li>
    <li><code>$lte</code> — menor ou igual a</li>
    <li><code>$ne</code> — diferente de</li>
  </ul>

  <pre><code>db.books.find({ pageCount: { $gt: 450 } }).pretty()
db.books.find({ pageCount: { $lt: 120 } }).pretty()</code></pre>
  <p>
    O primeiro comando retorna livros com mais de 450 páginas, 
    enquanto o segundo retorna livros com menos de 120 páginas.
  </p>

  <h3>🔀 Operadores lógicos (<code>$or</code> e <code>$and</code>)</h3>
  <p>
    Para combinar diferentes condições de forma flexível, usamos os operadores 
    <code>$or</code> e <code>$and</code>.
  </p>

  <h4>➡️ Usando <code>$or</code></h4>
  <pre><code>db.books.find({
  $or: [
    { pageCount: { $gt: 500 } },
    { _id: { $lt: 5 } }
  ]
}).pretty()</code></pre>
  <p>
    O comando retorna livros com mais de 500 páginas <strong>ou</strong> com 
    <code>_id</code> menor que 5.
  </p>

  <h4>➡️ Combinando <code>AND</code> e <code>OR</code></h4>
  <pre><code>db.books.find({
  status: "PUBLISH",
  $or: [
    { pageCount: 500 },
    { authors: "Robi Sen" }
  ]
}).pretty()</code></pre>
  <p>
    Aqui, o MongoDB retorna livros com status <code>PUBLISH</code> e que atendam a 
    pelo menos uma das condições do <code>$or</code>.
  </p>

  <h3>🔢 Contando resultados</h3>
  <p>
    Para saber quantos documentos correspondem a um filtro, basta usar o método 
    <code>count()</code>:
  </p>
  <pre><code>db.books.find({ pageCount: { $gt: 600 } }).count()</code></pre>
  <p>
    Esse comando retorna o número total de livros com mais de 600 páginas.  
    É muito útil em relatórios e validações automáticas.
  </p>

  <h3>🧠 Exemplos práticos</h3>
  <p>Alguns exemplos de consultas combinadas e práticas de filtragem:</p>
  <pre><code>db.books.find({ categories: "Java" }).pretty()
db.books.find({ pageCount: { $lt: 100 } }).pretty()
db.books.find({ categories: "Microsoft", pageCount: { $gt: 300 } }).pretty()
db.books.find({ categories: "Web Development" }).count()
db.books.find({ 
  $or: [ 
    { authors: "Bret Updegraff" }, 
    { categories: "Mobile" } 
  ] 
}).pretty()</code></pre>

  <h3>💡 Dicas e boas práticas</h3>
  <ul>
    <li>Use <code>pretty()</code> apenas no shell — ele não afeta o resultado em aplicações.</li>
    <li>Combine operadores para criar filtros poderosos e específicos.</li>
    <li>Utilize <code>count()</code> para obter métricas rápidas de dados.</li>
    <li>Prefira usar índices para melhorar a performance de consultas em grandes coleções.</li>
  </ul>

  <h3>🧾 Resumo dos principais comandos de leitura</h3>
  <table>
    <thead>
      <tr>
        <th>Comando</th>
        <th>Função</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>db.colecao.find()</code></td><td>Busca todos os documentos</td></tr>
      <tr><td><code>db.colecao.find().pretty()</code></td><td>Exibe os resultados formatados</td></tr>
      <tr><td><code>db.colecao.find({ campo: valor })</code></td><td>Filtra documentos específicos</td></tr>
      <tr><td><code>$in</code></td><td>Busca documentos que contenham qualquer valor de uma lista</td></tr>
      <tr><td><code>$gt / $lt</code></td><td>Busca por valores maiores ou menores que o definido</td></tr>
      <tr><td><code>$or</code></td><td>Combina condições alternativas</td></tr>
      <tr><td><code>$and</code></td><td>Combina condições obrigatórias</td></tr>
      <tr><td><code>.count()</code></td><td>Conta o número de resultados retornados</td></tr>
    </tbody>
  </table>

</section>

<section id="atualizacao-mongodb">
  <h2>🧩 Atualização de Dados no MongoDB (Update)</h2>
  
  <h3>🛠️ Principais métodos de atualização</h3>
  <p>
    O MongoDB disponibiliza três métodos principais para modificar documentos:
  </p>

  <ul>
    <li><code>updateOne()</code> – Atualiza apenas o primeiro documento que corresponde ao filtro.</li>
    <li><code>updateMany()</code> – Atualiza todos os documentos que atendem ao critério.</li>
    <li><code>replaceOne()</code> – Substitui completamente um documento por outro.</li>
  </ul>

  <h4>➡️ Exemplo com <code>updateOne()</code></h4>
  <pre><code>db.books.updateOne(
  { _id: 314 },
  { $set: { pageCount: 1000 } }
)</code></pre>
  <p>
    Nesse exemplo, o documento com <code>_id: 314</code> terá o campo 
    <code>pageCount</code> atualizado para <code>1000</code>.
  </p>

  <h4>➡️ Exemplo com <code>updateMany()</code></h4>
  <pre><code>db.books.updateMany(
  { categories: "Java" },
  { $set: { status: "UNPUBLISHED" } }
)</code></pre>
  <p>
    Esse comando atualiza todos os livros da categoria <strong>Java</strong>, 
    alterando o campo <code>status</code> para <code>"UNPUBLISHED"</code>.
  </p>

  <h4>➡️ Exemplo com <code>replaceOne()</code></h4>
  <pre><code>db.books.replaceOne(
  { _id: 120 },
  { foi: "substituido" }
)</code></pre>
  <p>
    O comando acima substitui completamente o documento original por um novo objeto.  
    ⚠️ Todos os campos anteriores são removidos.
  </p>

  <h3>🔧 Operadores de atualização</h3>
  <p>
    Para controlar o comportamento das atualizações, o MongoDB utiliza operadores especiais:
  </p>

  <ul>
    <li><code>$set</code> – Define ou altera o valor de um campo.</li>
    <li><code>$push</code> – Adiciona um novo item a um array existente.</li>
    <li><code>$inc</code> – Incrementa ou decrementa valores numéricos.</li>
    <li><code>$unset</code> – Remove um campo do documento.</li>
    <li><code>$addToSet</code> – Adiciona ao array apenas se o valor ainda não existir.</li>
  </ul>

  <h4>💡 Exemplos práticos</h4>
  <pre><code>// Alterando o título de um livro
db.books.updateOne(
  { _id: 20 },
  { $set: { title: "Meu primeiro update" } }
)

// Adicionando um campo numérico
db.books.updateMany(
  { authors: "Vikram Goyal" },
  { $set: { downloads: 1000 } }
)

// Adicionando item em um array
db.books.updateOne(
  { _id: 201 },
  { $push: { categories: "PHP" } }
)
</code></pre>

  <h3>📊 Atualizações condicionais</h3>
  <p>
    Também é possível aplicar filtros com operadores de comparação, como 
    <code>$gt</code> (maior que) e <code>$lt</code> (menor que):
  </p>
  <pre><code>db.books.updateMany(
  { pageCount: { $gt: 500 } },
  { $set: { bestseller: true } }
)</code></pre>
  <p>
    Esse comando marca todos os livros com mais de 500 páginas como <strong>bestseller</strong>.
  </p>

  <h3>🧮 Atualização em massa</h3>
  <p>
    Para modificar todos os documentos de uma coleção:
  </p>
  <pre><code>db.books.updateMany({}, { $set: { atualizado: true } })</code></pre>
  <p>
    Isso adiciona (ou altera) o campo <code>atualizado</code> para <code>true</code> em 
    todos os documentos da collection <code>books</code>.
  </p>

  <h3>📚 Atualizando arrays</h3>
  <p>
    O MongoDB oferece operadores específicos para manipular arrays:
  </p>
  <ul>
    <li><code>$push</code> – Adiciona um novo valor.</li>
    <li><code>$pull</code> – Remove um valor específico.</li>
    <li><code>$addToSet</code> – Adiciona apenas se o valor não existir.</li>
  </ul>
  <pre><code>db.books.updateMany(
  { categories: "Java", pageCount: { $gt: 500 } },
  { $push: { categories: "Many Pages" } }
)</code></pre>
  <p>
    Esse comando adiciona a categoria <code>"Many Pages"</code> a todos os livros de 
    Java com mais de 500 páginas.
  </p>

  <h3>⚙️ Write Concern</h3>
  <p>
    O <strong>Write Concern</strong> define o nível de confirmação exigido pelo servidor 
    após uma operação de gravação.  
    Por exemplo, é possível configurar o MongoDB para confirmar apenas quando os dados 
    forem gravados em múltiplos nós, garantindo maior integridade e segurança das informações.
  </p>

  <h3>🧠 Exemplos completos </h3>
  <pre><code>// Atualizando um único livro
db.books.updateOne(
  { title: "Flex 4 in Action" },
  { $set: { status: "OUT OF STOCK" } }
)

// Atualizando múltiplos livros curtos
db.books.updateMany(
  { pageCount: { $lt: 100 } },
  { $set: { short_book: true } }
)

// Adicionando uma categoria a livros grandes
db.books.updateMany(
  { categories: "Java", pageCount: { $gt: 500 } },
  { $push: { categories: "Many Pages" } }
)</code></pre>

  <h3>💡 Boas práticas</h3>
  <ul>
    <li>Sempre verifique o filtro antes de aplicar <code>updateMany()</code> para evitar alterações globais acidentais.</li>
    <li>Utilize operadores como <code>$set</code> e <code>$push</code> para preservar os campos originais.</li>
    <li>Evite usar <code>replaceOne()</code> sem necessidade — ele substitui todo o documento.</li>
    <li>Combine filtros e operadores para criar atualizações precisas e seguras.</li>
  </ul>

  <h3>🧾 Resumo dos principais comandos de atualização</h3>
  <table>
    <thead>
      <tr>
        <th>Comando</th>
        <th>Função</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>updateOne()</code></td><td>Atualiza o primeiro documento que corresponde ao filtro</td></tr>
      <tr><td><code>updateMany()</code></td><td>Atualiza todos os documentos que correspondem ao filtro</td></tr>
      <tr><td><code>replaceOne()</code></td><td>Substitui completamente um documento</td></tr>
      <tr><td><code>$set</code></td><td>Define ou altera o valor de um campo</td></tr>
      <tr><td><code>$push</code></td><td>Adiciona um item em um array</td></tr>
      <tr><td><code>$inc</code></td><td>Incrementa valores numéricos</td></tr>
      <tr><td><code>$unset</code></td><td>Remove um campo</td></tr>
      <tr><td><code>$addToSet</code></td><td>Adiciona ao array apenas se não existir</td></tr>
    </tbody>
  </table>
</section>

<section id="operadores-de-update">
  <h2>🛠️ Operadores de <code>update</code> no MongoDB</h2>

  <p>
    Abaixo estão os principais operadores de <code>update</code>, com exemplos práticos e explicações detalhadas.
  </p>

  <h3>➕ 1. <code>$inc</code> — Incrementa ou decrementa valores numéricos</h3>
  <p>
    O operador <code>$inc</code> aumenta ou diminui o valor de um campo numérico.  
    É ideal para contadores, pontuações ou métricas acumuladas.
  </p>

  <pre><code>// Inserindo dados
db.blog.insertMany([
  { author: "Matheus Battisti", postCount: 10, likesReceived: 150, categories: ["PHP", "JavaScript", "MongoDB"], active: true, maxPosts: 100 },
  { author: "Jhon Doe", postCount: 219, likesReceived: 12890, categories: ["Java", "C#", "C"], active: false, maxPosts: 100 },
  { author: "Maria Marin", postCount: 8, likesReceived: 12, categories: ["Linux", "DevOps", "Docker"], active: true, maxPosts: 100 }
])

// Incrementando
db.blog.updateOne({ author: "Matheus Battisti" }, { $inc: { postCount: 2 } })

// Decrementando
db.blog.updateOne({ author: "Matheus Battisti" }, { $inc: { postCount: -5 } })</code></pre>

  <p>
    ✅ <strong>Vantagens:</strong> simples e eficiente para contadores.  
    ⚠️ <strong>Atenção:</strong> o campo precisa ser numérico, caso contrário o MongoDB criará o campo com o valor informado.
  </p>

  <h3>📉 2. <code>$min</code> — Define o menor valor</h3>
  <p>
    O operador <code>$min</code> atualiza um campo <strong>somente se o novo valor for menor</strong> que o existente.
  </p>

  <pre><code>db.blog.insertOne({ author: "Maicon Santos", postCount: 50, likesReceived: 50 })

// Atualiza apenas se o novo valor for menor
db.blog.updateOne(
  { author: "Maicon Santos" },
  { $min: { postCount: 0, likesReceived: 0 } }
)</code></pre>

  <p>🧩 Útil para registrar valores mínimos, como pontuações, tempos ou preços.</p>

  <h3>📈 3. <code>$max</code> — Define o maior valor</h3>
  <p>
    O operador <code>$max</code> faz o oposto de <code>$min</code>:  
    ele atualiza o campo apenas se o novo valor for <strong>maior</strong> que o atual.
  </p>

  <pre><code>db.blog.updateOne(
  { author: "Matheus Battisti" },
  { $max: { maxPosts: 250 } }
)</code></pre>

  <p>✅ Excelente para registrar limites máximos, como recordes ou capacidades.</p>

  <h3>✖️ 4. <code>$mul</code> — Multiplica valores numéricos</h3>
  <p>
    O operador <code>$mul</code> multiplica o valor atual de um campo pelo valor informado.
  </p>

  <pre><code>db.blog.updateOne(
  { author: "Matheus Battisti" },
  { $mul: { maxPosts: 2 } }
)</code></pre>

  <p>💡 Útil para reajustar valores em massa (ex.: reajuste de preços ou pontos).</p>

  <h3>🔤 5. <code>$rename</code> — Renomeia campos</h3>
  <p>
    O operador <code>$rename</code> altera o nome de um campo em todos os documentos selecionados.
  </p>

  <pre><code>db.blog.updateMany({}, { $rename: { author: "author_fullname" } })</code></pre>

  <p>📘 Ideal para refatorar nomes de campos sem perder dados.</p>

  <h3>🚫 6. <code>$unset</code> — Remove campos</h3>
  <p>
    O operador <code>$unset</code> exclui um campo de um ou mais documentos.
  </p>

  <pre><code>db.blog.updateMany({}, { $unset: { active: "" } })</code></pre>

  <p>⚠️ Remove permanentemente o campo, portanto use com cautela.</p>

  <h3>🧩 7. <code>$addToSet</code> — Adiciona ao array evitando duplicação</h3>
  <p>
    O operador <code>$addToSet</code> insere um valor em um array <strong>somente se ele ainda não existir</strong>.
  </p>

  <pre><code>db.blog.updateOne(
  { author_fullname: "Matheus Battisti" },
  { $addToSet: { categories: { $each: ["PHP", "Vue"] } } }
)</code></pre>

  <p>✅ Garante que o array mantenha apenas valores únicos.</p>

  <h3>⬅️ 8. <code>$pop</code> — Remove o primeiro ou último item do array</h3>
  <p>
    O operador <code>$pop</code> remove o primeiro (<code>-1</code>) ou o último (<code>1</code>) elemento de um array.
  </p>

  <pre><code>db.blog.updateOne(
  { author_fullname: "Matheus Battisti" },
  { $pop: { categories: -1 } }
)</code></pre>

  <p>💡 Útil para manter o tamanho fixo de um array (ex.: histórico limitado).</p>

  <h3>📥 9. <code>$push</code> — Adiciona um elemento ao array</h3>
  <p>
    O operador <code>$push</code> insere novos valores no final de um array.
  </p>

  <pre><code>db.blog.updateOne(
  { author_fullname: "Matheus Battisti" },
  { $push: { categories: "Linux" } }
)</code></pre>

  <p>🧠 É possível adicionar vários elementos de uma vez usando <code>$each</code>:</p>

  <pre><code>db.blog.updateOne(
  { author_fullname: "Matheus Battisti" },
  { $push: { categories: { $each: ["HTML", "CSS"] } } }
)</code></pre>

  <h3>🧹 10. <code>$pullAll</code> — Remove múltiplos valores de um array</h3>
  <p>
    O operador <code>$pullAll</code> remove todos os valores informados de um array.
  </p>

  <pre><code>db.blog.updateOne(
  { author_fullname: "Maria Marin" },
  { $pullAll: { categories: ["Linux", "Docker"] } }
)</code></pre>

  <p>🧽 Ideal para limpar arrays de valores indesejados de forma rápida.</p>

  <h3>📘 Resumo dos principais operadores</h3>
  <table>
    <thead>
      <tr><th>Operador</th><th>Função</th><th>Exemplo</th></tr>
    </thead>
    <tbody>
      <tr><td><code>$inc</code></td><td>Incrementa ou decrementa valores</td><td><code>{$inc: {likes: 1}}</code></td></tr>
      <tr><td><code>$min</code></td><td>Atualiza se o novo valor for menor</td><td><code>{$min: {score: 10}}</code></td></tr>
      <tr><td><code>$max</code></td><td>Atualiza se o novo valor for maior</td><td><code>{$max: {record: 200}}</code></td></tr>
      <tr><td><code>$mul</code></td><td>Multiplica valores numéricos</td><td><code>{$mul: {price: 1.1}}</code></td></tr>
      <tr><td><code>$rename</code></td><td>Renomeia campos</td><td><code>{$rename: {name: "fullname"}}</code></td></tr>
      <tr><td><code>$unset</code></td><td>Remove campos</td><td><code>{$unset: {temp: ""}}</code></td></tr>
      <tr><td><code>$addToSet</code></td><td>Adiciona ao array sem duplicar</td><td><code>{$addToSet: {tags: "JS"}}</code></td></tr>
      <tr><td><code>$pop</code></td><td>Remove primeiro ou último item</td><td><code>{$pop: {tags: -1}}</code></td></tr>
      <tr><td><code>$push</code></td><td>Adiciona elementos no array</td><td><code>{$push: {tags: "HTML"}}</code></td></tr>
      <tr><td><code>$pullAll</code></td><td>Remove vários valores do array</td><td><code>{$pullAll: {tags: ["A", "B"]}}</code></td></tr>
    </tbody>
  </table>

</section>

<section id="delecao-mongodb">
  <h2>🗑️ Deleção de Dados no MongoDB (Delete)</h2>
  
  <h3>🧩 Principais métodos de deleção</h3>
  <p>
    O MongoDB possui dois métodos principais para exclusão de documentos:
  </p>
  <ul>
    <li><code>deleteOne()</code> – Remove o <strong>primeiro documento</strong> que corresponde ao filtro especificado.</li>
    <li><code>deleteMany()</code> – Remove <strong>todos os documentos</strong> que atendem ao critério de filtragem.</li>
  </ul>

  <h4>➡️ Exemplo com <code>deleteOne()</code></h4>
  <pre><code>db.books.deleteOne({ _id: 20 })</code></pre>
  <p>
    O comando acima remove o documento com o campo <code>_id</code> igual a <code>20</code> 
    da collection <code>books</code>.  
    Mesmo que existam vários documentos com a mesma condição, apenas o primeiro encontrado será deletado.
  </p>

  <h4>➡️ Exemplo com <code>deleteMany()</code></h4>
  <pre><code>db.books.deleteMany({ categories: "Java" })</code></pre>
  <p>
    Nesse exemplo, todos os documentos que possuem o campo 
    <code>categories</code> igual a <code>"Java"</code> serão removidos da coleção.
  </p>

  <h3>🧨 Removendo todos os documentos de uma collection</h3>
  <p>
    Se o objetivo for apagar <strong>todos os registros</strong> de uma coleção, sem excluir a estrutura dela,  
    pode-se utilizar o comando <code>deleteMany()</code> sem filtro:
  </p>
  <pre><code>db.books.deleteMany({})</code></pre>
  <p>
    Isso limpa completamente os documentos da coleção, mantendo-a vazia, pronta para receber novos dados.
    ⚠️ <strong>Atenção:</strong> esse comando não pode ser desfeito. Use com cautela!
  </p>

  <h3>📋 Diferenças entre <code>deleteOne()</code> e <code>deleteMany()</code></h3>
  <table>
    <thead>
      <tr>
        <th>Comando</th>
        <th>Função</th>
        <th>Afeta quantos documentos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>deleteOne()</code></td>
        <td>Remove o primeiro documento que corresponde ao filtro</td>
        <td>1 documento</td>
      </tr>
      <tr>
        <td><code>deleteMany()</code></td>
        <td>Remove todos os documentos que correspondem ao filtro</td>
        <td>Vários documentos</td>
      </tr>
    </tbody>
  </table>

  <h3>💡 Boas práticas ao deletar dados</h3>
  <ul>
    <li>🔍 Sempre utilize o comando <code>find()</code> antes de deletar para visualizar o que será removido.</li>
    <li>🧾 Faça backups antes de operações destrutivas.</li>
    <li>⚙️ Evite usar <code>deleteMany({})</code> em ambientes de produção.</li>
    <li>🎯 Especifique filtros claros para evitar exclusões acidentais.</li>
  </ul>

  <h3>🧠 Exemplos práticos</h3>
  <pre><code>// 1️⃣ Deletando um único documento
db.books.deleteOne({ _id: 20 })

// 2️⃣ Deletando vários documentos da categoria "Java"
db.books.deleteMany({ categories: "Java" })

// 3️⃣ Verificando os dados restantes
db.books.find().pretty()

// 4️⃣ Removendo todos os documentos (com cuidado)
db.books.deleteMany({})
</code></pre>

  <h3>📚 Resumo dos comandos de deleção</h3>
  <table>
    <thead>
      <tr>
        <th>Comando</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>deleteOne()</code></td><td>Remove o primeiro documento que corresponde ao filtro.</td></tr>
      <tr><td><code>deleteMany()</code></td><td>Remove todos os documentos que correspondem ao filtro.</td></tr>
      <tr><td><code>deleteMany({})</code></td><td>Remove todos os documentos da coleção.</td></tr>
    </tbody>
  </table>

</section>

<section id="tipos-de-dados-mongodb">
  <h2>🧮 Tipos de Dados no MongoDB</h2>

  <h3>📝 Strings (Textos)</h3>
  <p>
    O tipo de dado mais comum no MongoDB é o <code>String</code>, utilizado para representar textos.  
    É amplamente usado em campos como nomes, endereços e descrições.
  </p>
  <pre><code>use tipos

db.strings.insertOne({ nome: "Matheus" })
db.strings.insertOne({ rua: "Rua Teste" })</code></pre>
  <p>
    Os valores de texto são delimitados por aspas duplas (<code>" "</code>) ou simples (<code>' '</code>).  
    Esse tipo é tratado internamente como UTF-8, permitindo armazenar caracteres de praticamente qualquer idioma.
  </p>

  <h3>🔍 Verificando o tipo de dado</h3>
  <p>
    É possível inspecionar o tipo de um campo de documento diretamente no <em>Mongo Shell</em> usando o JavaScript:
  </p>
  <pre><code>const dado = db.strings.findOne()
typeof dado.nome</code></pre>
  <p>
    O comando retornará <code>"string"</code>, indicando o tipo do campo <code>nome</code>.
  </p>

  <h3>📚 Arrays</h3>
  <p>
    Arrays são listas ordenadas de valores e são extremamente úteis no MongoDB,  
    permitindo armazenar múltiplos elementos dentro de um único campo — como uma lista de itens, tags ou categorias.
  </p>
  <pre><code>db.arrays.insertOne({ carros: ["BMW", "Ferrari", "Fusca"] })</code></pre>
  <p>
    Nesse exemplo, o campo <code>carros</code> armazena três valores de texto dentro de um array.  
    O MongoDB oferece diversos operadores para manipular arrays, como <code>$push</code>, <code>$pull</code> e <code>$addToSet</code>.
  </p>

  <h3>📅 Datas</h3>
  <p>
    O tipo <code>Date</code> é usado para representar informações de tempo, como criação, atualização ou agendamento.  
    O MongoDB armazena datas em milissegundos desde a época UNIX (1º de janeiro de 1970), permitindo comparações e cálculos de tempo.
  </p>
  <pre><code>db.dates.insertOne({ data: new Date() })</code></pre>
  <p>
    O comando <code>new Date()</code> insere a data e hora atuais do sistema.  
    É possível aplicar operadores como <code>$gt</code> e <code>$lt</code> para comparar datas.
  </p>

  <h3>🧾 Documents (Documentos Aninhados)</h3>
  <p>
    Um dos maiores diferenciais do MongoDB é o suporte a documentos aninhados — ou seja,  
    objetos dentro de objetos, que permitem representar relações hierárquicas de forma natural e sem a necessidade de joins.
  </p>
  <pre><code>db.documents.insertOne({
  nome: "Matheus",
  desc: { profissao: "Programador", hobbies: ["Estudar", "Ler", "Caminhar"] }
})</code></pre>
  <p>
    O campo <code>desc</code> contém um documento embutido com informações detalhadas, e dentro dele há um array chamado <code>hobbies</code>.  
    Esse tipo de estrutura é ideal para representar dados complexos de maneira intuitiva.
  </p>

  <h3>✅ Boolean (Lógico)</h3>
  <p>
    O tipo <code>Boolean</code> armazena apenas dois valores possíveis: <code>true</code> ou <code>false</code>.  
    É amplamente utilizado para representar estados binários, como ativo/inativo ou ligado/desligado.
  </p>
  <pre><code>db.bools.insertOne({ nome: "Matheus", trabalhando: true })</code></pre>
  <p>
    Esse documento indica que <code>Matheus</code> está atualmente trabalhando.  
    O uso de booleanos é fundamental para condições lógicas e filtros.
  </p>

  <h3>🔢 Numbers (Números)</h3>
  <p>
    O MongoDB diferencia números de ponto flutuante e inteiros.  
    Ele utiliza diferentes representações internas, como <code>double</code> e <code>int32</code>, dependendo da precisão e do tamanho do valor.
  </p>
  <pre><code>db.numbers.insertOne({
  double: 12.2,
  outro_double: 50,
  inteiro: NumberInt("5")
})</code></pre>
  <p>
    Nesse exemplo:
  </p>
  <ul>
    <li><code>double</code> e <code>outro_double</code> representam números de ponto flutuante.</li>
    <li><code>NumberInt()</code> converte uma string em número inteiro (<code>int32</code>).</li>
  </ul>
  <p>
    É importante escolher o tipo adequado conforme o contexto, especialmente em operações matemáticas e de agregação.
  </p>

  <h3>📘 Resumo dos principais tipos de dados</h3>
  <table>
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Descrição</th>
        <th>Exemplo</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>String</code></td><td>Texto simples (UTF-8)</td><td><code>{ nome: "Matheus" }</code></td></tr>
      <tr><td><code>Array</code></td><td>Lista ordenada de valores</td><td><code>{ carros: ["BMW", "Ferrari"] }</code></td></tr>
      <tr><td><code>Date</code></td><td>Data e hora</td><td><code>{ data: new Date() }</code></td></tr>
      <tr><td><code>Document</code></td><td>Objeto aninhado dentro de outro</td><td><code>{ desc: { profissao: "Programador" } }</code></td></tr>
      <tr><td><code>Boolean</code></td><td>Verdadeiro ou falso</td><td><code>{ ativo: true }</code></td></tr>
      <tr><td><code>Number</code></td><td>Valores numéricos inteiros ou decimais</td><td><code>{ double: 12.2, inteiro: NumberInt("5") }</code></td></tr>
    </tbody>
  </table>

  <h3>💡 Boas práticas</h3>
  <ul>
    <li>Escolha o tipo de dado mais apropriado para cada campo — evita erros e melhora o desempenho.</li>
    <li>Padronize os tipos entre documentos de uma mesma coleção.</li>
    <li>Use <code>NumberInt()</code> e <code>NumberLong()</code> para garantir precisão numérica.</li>
    <li>Evite armazenar datas como strings — utilize sempre <code>Date()</code>.</li>
    <li>Documentos aninhados devem ser usados com moderação para evitar sobrecarga de leitura.</li>
  </ul>

</section>

<section id="operadores-query-mongodb">
  <h2>🧭 Operadores de Query no MongoDB (Select)</h2>

  <h3>📥 Preparando dados para testes</h3>
  <p>
    Exemplo de importação usada nos comandos a seguir:
  </p>
  <pre><code>mongoimport restaurant.json -d restaurantsData -c restaurants</code></pre>

  <h3>✅ Igualdade (<code>$eq</code>)</h3>
  <p>
    O operador <code>$eq</code> busca documentos cujo campo é igual a um valor.  
    Observação: passar um par <code>{ campo: valor }</code> sem operador é equivalente a usar <code>$eq</code>.
  </p>
  <pre><code>// iguais
db.restaurants.findOne({ rating: { $eq: 5 } })
db.restaurants.findOne({ rating: 5 })  // equivalente</code></pre>

  <h3>📈 Comparações (<code>$gt</code>, <code>$gte</code>, <code>$lt</code>, <code>$lte</code>)</h3>
  <p>
    Operadores de comparação servem para valores numéricos e de data:
  </p>
  <pre><code>// maior que / maior ou igual
db.restaurants.findOne({ rating: { $gt: 4 } })
db.restaurants.findOne({ rating: { $gte: 4 } })

// menor que / menor ou igual
db.restaurants.findOne({ rating: { $lt: 2 } })
db.restaurants.findOne({ rating: { $lte: 2 } })</code></pre>
  <p>
    Use esses operadores para filtros por faixa — por exemplo, restaurantes com nota >= 3:
  </p>
  <pre><code>db.restaurants.find({ type_of_food: "Breakfast", rating: { $gte: 3 } })</code></pre>

  <h3>📚 Membros de conjunto (<code>$in</code> e <code>$nin</code>)</h3>
  <p>
    <code>$in</code> retorna documentos cujo campo tem qualquer valor de uma lista; <code>$nin</code> é o oposto (not in).
  </p>
  <pre><code>// qualquer valor entre Pizza ou Chinese
db.restaurants.find({ type_of_food: { $in: ["Pizza", "Chinese"] } })

// campos que NÃO estão entre a lista (nota: use $nin)
db.restaurants.find({ postcode: { $nin: ["0JH", "0BE", "0HG"] } })</code></pre>

  <h3>≠ Diferente (<code>$ne</code>)</h3>
  <p>
    <code>$ne</code> busca valores diferentes do especificado:
  </p>
  <pre><code>db.restaurants.findOne({ rating: { $ne: 5 } })</code></pre>
  <p>
    Útil para excluir um valor específico, mas lembre-se que <code>$ne</code> também retornará documentos onde o campo não existe — combine com <code>$exists</code> se necessário.
  </p>

  <h3>🔎 Existência de campo (<code>$exists</code>)</h3>
  <p>
    Verifica se um documento possui (ou não) um campo. Muito útil após operações que marcam documentos:
  </p>
  <pre><code>// marcar documentos com high_score
db.restaurants.updateMany({ rating: 5 }, { $set: { high_score: true } })

// buscar documentos que possuem o campo high_score
db.restaurants.find({ high_score: { $exists: true } })</code></pre>
  <p>
    Use <code>{ campo: { $exists: false } }</code> para localizar documentos sem aquele campo e tratá-los.
  </p>

  <h3>📝 Busca textual (<code>$text</code>)</h3>
  <p>
    Para pesquisas por texto livre, crie um índice textual e use <code>$text</code> com <code>$search</code>:
  </p>
  <pre><code>// criar índice textual no campo name
db.restaurants.createIndex({ name: "text" })

// buscar por "pizza" no índice texto
db.restaurants.find({ $text: { $search: "pizza" } }).pretty()</code></pre>
  <p>
    O índice textual suporta buscas por palavras, operadores booleanos e classificação por relevância (score).  
    Exemplo para retornar score de relevância:
  </p>
  <pre><code>db.restaurants.find(
  { $text: { $search: "pizza" } },
  { score: { $meta: "textScore" }, name: 1, rating: 1 }
).sort({ score: { $meta: "textScore" } })</code></pre>

  <h3>🔗 Combinando operadores</h3>
  <p>
    Você pode combinar operadores em um mesmo filtro (AND implícito) ou usar operadores lógicos (<code>$or</code>, <code>$and</code>) para regras mais complexas:
  </p>
  <pre><code>// AND implícito: ambos os critérios devem ser verdadeiros
db.restaurants.find({ type_of_food: "Breakfast", rating: { $gte: 3 } })

// OR explícito
db.restaurants.find({
  $or: [
    { type_of_food: "Pizza" },
    { rating: { $gte: 4 } }
  ]
})</code></pre>

  <h3>⚡ Performance e índices</h3>
  <p>
    - Para consultas rápidas em grandes coleções, crie índices nos campos mais usados em filtros (<code>rating</code>, <code>type_of_food</code>, etc.).  
    - Índices compostos ajudam quando você filtra por vários campos ao mesmo tempo.  
    - Use <code>explain()</code> para ver o plano de execução e confirmar se a consulta usa índices:
  </p>
  <pre><code>db.restaurants.find({ rating: { $gte: 4 } }).explain("executionStats")</code></pre>

  <h3>💡 Dicas práticas</h3>
  <ul>
    <li>Prefira sintaxe simples <code>{ campo: valor }</code> para igualdade (internamente é <code>$eq</code>).</li>
    <li>Use <code>$in</code> para "valor em lista" e <code>$nin</code> para "valor não em lista".</li>
    <li>Combine <code>$exists</code> com outros filtros para evitar resultados inesperados com <code>$ne</code>.</li>
    <li>Crie índices antes de executar buscas textuais ou filtros frequentes.</li>
    <li>Teste consultas com <code>explain()</code> para otimizar performance e evitar scans completos.</li>
  </ul>

  <h3>🧾 Resumo rápido</h3>
  <table>
    <thead>
      <tr><th>Operador</th><th>Função</th></tr>
    </thead>
    <tbody>
      <tr><td><code>$eq</code></td><td>Igualdade (pode omitir e usar { campo: valor })</td></tr>
      <tr><td><code>$gt / $gte</code></td><td>Maior que / maior ou igual</td></tr>
      <tr><td><code>$lt / $lte</code></td><td>Menor que / menor ou igual</td></tr>
      <tr><td><code>$in</code></td><td>Valor está em uma lista</td></tr>
      <tr><td><code>$nin</code></td><td>Valor não está em uma lista</td></tr>
      <tr><td><code>$ne</code></td><td>Diferente de (atenção a campos inexistentes)</td></tr>
      <tr><td><code>$exists</code></td><td>Verifica existência de campo</td></tr>
      <tr><td><code>$text</code></td><td>Busca textual usando índice de texto</td></tr>
    </tbody>
  </table>

</section>

<section id="selecionar-arrays-documents">
  <h2>🧩 Seleção de Arrays e Documents</h2>

  <p>
    A <strong>seleção de arrays e documentos embutidos</strong> é uma das funcionalidades mais poderosas do <strong>MongoDB</strong>.  
    Ela permite consultar, filtrar e manipular dados dentro de <em>subdocumentos</em> e <em>arrays</em> armazenados em cada documento, mantendo a estrutura flexível e hierárquica do banco.
  </p>

  <h3>📄 1. Seleção em Documentos Embutidos</h3>
  <p>
    Documentos podem conter outros documentos dentro deles.  
    Para acessar esses campos internos, utiliza-se o <strong>operador de ponto (<code>.</code>)</strong>:
  </p>

  <pre><code>// Buscar pessoas com olhos castanhos
db.pessoas.find({ "caracteristicas.cor_dos_olhos": "castanhos" }).pretty()
</code></pre>

  <p>
    Também é possível combinar condições com operadores lógicos e de comparação:
  </p>

  <pre><code>// Pessoas com peso entre valores específicos e idade acima de 20
db.pessoas.find({
  "caracteristicas.peso": { $in: ["80kg", "92kg"] },
  "caracteristicas.idade": { $gt: 20 }
})
</code></pre>

  <ul>
    <li><strong>$in</strong> — verifica se o valor está dentro de uma lista.</li>
    <li><strong>$gt</strong> — seleciona valores <em>maiores que</em> o especificado.</li>
  </ul>

  <h3>🧮 2. Seleção em Arrays</h3>
  <p>
    Arrays armazenam múltiplos valores dentro de um mesmo campo, como notas de alunos ou variações de um produto.  
    É possível consultá-los de diferentes formas:
  </p>

  <pre><code>// Alunos que possuem nota 6 em alguma posição do array
db.alunos.find({ matematica: 6 })

// Alunos cujo array é exatamente igual
db.alunos.find({ matematica: [8, 8, 9, 7] })
</code></pre>

  <h3>⚙️ 3. Operadores Específicos de Arrays</h3>

  <h4>🔸 $all — Todos os valores devem estar presentes</h4>
  <pre><code>db.alunos.find({ matematica: { $all: [8, 7] } })</code></pre>
  <p>Retorna alunos que possuem <strong>ambos os valores</strong> 8 e 7 em qualquer posição do array.</p>

  <h4>🔸 $size — Verifica o tamanho do array</h4>
  <pre><code>db.alunos.find({ matematica: { $size: 4 } })</code></pre>
  <p>Retorna documentos cujo array tem exatamente <strong>4 elementos</strong>.</p>

  <h3>📦 4. Arrays de Documentos (Subdocumentos)</h3>
  <p>
    Arrays também podem conter documentos complexos, como as variações de um produto.  
    É possível filtrar por campos dentro desses subdocumentos:
  </p>

  <pre><code>// Produtos com variações acima de 30 unidades
db.produtos.find({ "variacoes.qtd": { $gt: 30 } })
</code></pre>

  <p>
    Isso retorna todos os produtos que possuem pelo menos uma variação com quantidade maior que 30.
  </p>

  <h3>🔍 5. Uso de $elemMatch</h3>
  <p>
    Quando é necessário combinar <strong>várias condições dentro do mesmo elemento do array</strong>, utiliza-se o operador <code>$elemMatch</code>:
  </p>

  <pre><code>// Variações que atendem múltiplas condições no mesmo documento
db.produtos.find({
  variacoes: { $elemMatch: { tamanho: { $gt: 40 }, cor: "Azul" } }
}).pretty()
</code></pre>

  <p>
    Sem o uso de <code>$elemMatch</code>, o MongoDB poderia buscar os valores em <em>diferentes elementos</em> do array, resultando em respostas incorretas.
  </p>

  <h3>📑 6. Seleção de Campos Específicos</h3>
  <p>
    Para mostrar ou ocultar campos específicos nos resultados, utiliza-se a <strong>projeção</strong>:
  </p>

  <pre><code>// Mostrar apenas nome e peso
db.pessoas.find({}, { nome: 1, "caracteristicas.peso": 1 })

// Ocultar cor dos olhos
db.pessoas.find({}, { "caracteristicas.cor_dos_olhos": 0 })
</code></pre>

  <h3>🧱 7. Atualizações com Arrays</h3>
  <p>
    Também é possível atualizar documentos com base em condições de arrays:
  </p>

  <pre><code>// Adicionar campo "falta_provas" para quem tem apenas 2 notas em química
db.alunos.updateOne(
  { quimica: { $size: 2 } },
  { $set: { falta_provas: true } }
)
</code></pre>

  <p>
    Isso adiciona a propriedade <code>falta_provas: true</code> aos alunos que possuem somente duas notas no campo <code>quimica</code>.
  </p>

  <h3>📘 Resumo dos Principais Operadores</h3>

  <table>
    <thead>
      <tr><th>Tipo de Seleção</th><th>Exemplo</th><th>Descrição</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Campo embutido</strong></td><td><code>"caracteristicas.idade": { $gt: 30 }</code></td><td>Busca dentro de subdocumentos</td></tr>
      <tr><td><strong>Valor no array</strong></td><td><code>{ matematica: 6 }</code></td><td>Verifica se o valor está presente</td></tr>
      <tr><td><strong>Array completo</strong></td><td><code>{ matematica: [8,8,9,7] }</code></td><td>Compara o array inteiro</td></tr>
      <tr><td><strong>Todos os valores</strong></td><td><code>{ matematica: { $all: [8,7] } }</code></td><td>Todos os valores devem existir</td></tr>
      <tr><td><strong>Tamanho do array</strong></td><td><code>{ matematica: { $size: 4 } }</code></td><td>Verifica o tamanho exato</td></tr>
      <tr><td><strong>Combinação no mesmo elemento</strong></td><td><code>$elemMatch</code></td><td>Aplica múltiplas condições em um único subdocumento</td></tr>
    </tbody>
  </table>

</section>

<section id="relacionamentos-mongodb">
  <h2>🔗 Relacionamentos no MongoDB</h2>

  <p>
    Embora o <strong>MongoDB</strong> seja um banco de dados <em>não relacional</em>, ele oferece formas flexíveis de representar relacionamentos entre documentos.  
    Em vez de usar <em>joins</em> como em bancos relacionais, o MongoDB trabalha com duas principais abordagens:
  </p>

  <ul>
    <li><strong>Documentos incorporados (Embedded Documents)</strong> — dados aninhados dentro de um mesmo documento.</li>
    <li><strong>Referências (References)</strong> — documentos separados, ligados por identificadores (<code>_id</code>).</li>
  </ul>

  <p>
    A seguir, exploramos os quatro tipos mais comuns de relacionamentos:
    <strong>Embedded Documents</strong>, <strong>One-to-One</strong>, <strong>One-to-Many</strong> e <strong>Many-to-Many</strong>.
  </p>

  <h3>🏠 1. Embedded Documents (Documentos Incorporados)</h3>
  <p>
    O modelo de documentos incorporados é o mais simples e performático.  
    Todos os dados relacionados são armazenados dentro de um único documento — ideal quando as informações são fortemente dependentes e acessadas juntas.
  </p>

  <pre><code>// Exemplo: Pessoa com endereço embutido
use relationships

db.embedded.insertOne({
  nome: "Matheus",
  idade: 30,
  endereco: {
    rua: "Rua das flores",
    numero: "1314",
    complemento: "Casa"
  }
})

// Acessando subcampos
const matheus = db.embedded.findOne()
matheus.endereco.rua  // "Rua das flores"</code></pre>

  <p>
    Também é possível incluir vários subdocumentos dentro de um mesmo documento:
  </p>

  <pre><code>// Pessoa com múltiplos endereços
db.embedded.insertOne({
  nome: "João",
  idade: 40,
  enderecos: {
    casa: {
      rua: "Rua das flores",
      numero: "1314",
      complemento: "Casa"
    },
    trabalho: {
      rua: "Rua das árvores",
      numero: "102 C",
      complemento: "Galpão"
    }
  }
})

const joao = db.embedded.findOne({ nome: "João" })
joao.enderecos.trabalho.numero  // "102 C"</code></pre>

  <p>
    ✅ <strong>Vantagens:</strong> leitura rápida e atomicidade (tudo em um único documento).<br>
    ⚠️ <strong>Desvantagens:</strong> limite de 16MB por documento e risco de duplicação de dados.
  </p>

  <h3>👤 2. One-to-One (Um para Um)</h3>
  <p>
    Um relacionamento <strong>um-para-um</strong> associa um documento a exatamente outro.  
    Esse tipo é comum em casos como “Pessoa” e “Endereço”.
  </p>

  <pre><code>// Criando pessoa
db.pessoas.insertOne({
  nome: "Matheus",
  idade: 30,
  profissao: "Programador"
})

const matheus = db.pessoas.findOne()
const matheusId = matheus._id

// Criando endereço vinculado à pessoa
db.enderecos.insertOne({
  rua: "Rua das flores",
  numero: "1414",
  complemento: "Casa",
  pessoa_id: matheusId
})

// Consultando endereço da pessoa
db.enderecos.find({ pessoa_id: matheusId })</code></pre>

  <p>
    🧠 <strong>Dica:</strong> esse padrão é ideal quando os dados têm tamanhos diferentes ou quando é necessário carregar partes separadas do documento.
  </p>

  <h3>👥 3. One-to-Many (Um para Muitos)</h3>
  <p>
    Representa um documento principal que se relaciona com vários outros.  
    Um exemplo clássico é uma pessoa que possui várias compras.
  </p>

  <pre><code>// Criando pessoa
db.pessoas.insertOne({ nome: "Gustavo", idade: 29, profissao: "Gerente" })

const gustavo = db.pessoas.findOne({ nome: "Gustavo" })
const gustavoId = gustavo._id

// Inserindo várias compras
db.compras.insertMany([
  { produtos: ["Livro", "Celular"], pessoa_id: matheusId },
  { produtos: ["Mouse", "Teclado"], pessoa_id: matheusId },
  { produtos: ["Agenda"], pessoa_id: matheusId },
  { produtos: ["Barbeador", "Suporte monitor"], pessoa_id: gustavoId }
])

// Consultando compras de cada pessoa
db.compras.find({ pessoa_id: matheusId })
db.compras.find({ pessoa_id: gustavoId })</code></pre>

  <p>
    ✅ <strong>Vantagens:</strong> evita duplicação de dados e permite consultas mais específicas.<br>
    ⚠️ <strong>Desvantagem:</strong> é necessário múltiplas consultas para montar o resultado completo.
  </p>

  <h3>🌐 4. Many-to-Many (Muitos para Muitos)</h3>
  <p>
    Em relacionamentos <strong>muitos-para-muitos</strong>, vários documentos de uma coleção estão associados a vários documentos de outra.  
    Exemplo: várias pessoas podem participar de vários cursos.
  </p>

  <pre><code>// Criando cursos
db.cursos.insertMany([
  { nome: "PHP avançado" },
  { nome: "JavaScript básico" },
  { nome: "Banco de dados NoSQL" }
])

// Criando pessoa
db.pessoas.insertOne({ nome: "Pedro", idade: 40 })

const gustavo = db.pessoas.findOne({ nome: "Gustavo" })
const matheus = db.pessoas.findOne({ nome: "Matheus" })

const php = db.cursos.findOne({ nome: "PHP avançado" })
const js = db.cursos.findOne({ nome: "JavaScript básico" })

// Tabela de relação (curso_pessoa)
db.curso_pessoa.insertMany([
  { curso_id: php._id, pessoa_id: matheus._id },
  { curso_id: js._id, pessoa_id: matheus._id },
  { curso_id: js._id, pessoa_id: gustavo._id }
])</code></pre>

  <p>
    Para listar todos os alunos do curso de JavaScript:
  </p>

  <pre><code>// Listando alunos do curso de JS
const idsAlunos = []

db.curso_pessoa.find({ curso_id: js._id }).forEach(function(aluno) {
  idsAlunos.push(aluno.pessoa_id)
})

db.pessoas.find({ _id: { $in: idsAlunos } })</code></pre>

  <p>
    🧩 <strong>Dica:</strong> para relacionamentos complexos, crie uma coleção intermediária (ex.: <code>curso_pessoa</code>) para evitar redundância e facilitar consultas.
  </p>

  <h3>📘 Resumo dos tipos de relacionamento</h3>
  <table>
    <thead>
      <tr><th>Tipo</th><th>Descrição</th><th>Estrutura recomendada</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Embedded Document</strong></td><td>Dados aninhados no mesmo documento</td><td>Ideal para dados pequenos e dependentes</td></tr>
      <tr><td><strong>One-to-One</strong></td><td>Um documento ligado a outro via referência</td><td>Referência por <code>_id</code></td></tr>
      <tr><td><strong>One-to-Many</strong></td><td>Um documento se relaciona com vários</td><td>Campo <code>pessoa_id</code> nas coleções filhas</td></tr>
      <tr><td><strong>Many-to-Many</strong></td><td>Vários documentos se relacionam entre si</td><td>Coleção intermediária (ex.: <code>curso_pessoa</code>)</td></tr>
    </tbody>
  </table>

  <h3>💡 Boas práticas</h3>
  <ul>
    <li>Use <strong>embedded documents</strong> quando os dados forem fortemente relacionados e acessados juntos.</li>
    <li>Prefira <strong>referências</strong> quando os dados forem independentes ou crescerem separadamente.</li>
    <li>Evite duplicar informações — o MongoDB não possui <em>joins</em> nativos, mas é possível usar <code>$lookup</code> para unir coleções.</li>
    <li>Atualize documentos relacionados com <code>updateMany()</code> ou transações (<em>transactions</em>).</li>
    <li>Crie índices em campos de referência (<code>pessoa_id</code>, <code>curso_id</code>) para melhorar o desempenho.</li>
  </ul>

</section>

<section id="indices-mongodb">
  <h2>⚡ Índices no MongoDB</h2>

  <p>
    Os <strong>índices</strong> (<em>indexes</em>) são estruturas especiais que <strong>melhoram o desempenho</strong> das consultas em um banco de dados.  
    Eles funcionam como um “atalho” para encontrar documentos mais rapidamente, sem precisar varrer toda a coleção (<em>full collection scan</em>).
  </p>

  <h3>📗 2. Criando um índice básico</h3>
  <p>
    O comando <code>createIndex()</code> cria um índice em um ou mais campos.  
    O valor <code>1</code> indica ordenação ascendente, e <code>-1</code> descendente.
  </p>

  <pre><code>// Criando índice simples
db.inspections.createIndex({ certificate_number: 1 })

// Consulta utilizando o índice
db.inspections.find({ certificate_number: 3030353 })</code></pre>

  <p>
    ✅ Agora as consultas por <code>certificate_number</code> serão otimizadas, pois o MongoDB usará o índice para localizar o documento rapidamente.
  </p>

  <h3>🏙️ 3. Índice em campos de documentos embutidos (Embedded Documents)</h3>
  <p>
    É possível criar índices em campos dentro de subdocumentos, utilizando a notação com ponto (<code>.</code>).
  </p>

  <pre><code>db.inspections.createIndex({ "address.city": 1 })</code></pre>

  <p>
    🔍 Isso permite que o MongoDB otimize buscas como:
  </p>

  <pre><code>db.inspections.find({ "address.city": "New York" })</code></pre>

  <p>
    Essa abordagem é especialmente útil quando há campos aninhados com alto volume de consultas.
  </p>

  <h3>📋 4. Verificando os índices de uma coleção</h3>
  <p>
    Para listar todos os índices de uma coleção específica, use:
  </p>

  <pre><code>db.inspections.getIndexes()</code></pre>

  <p>
    O MongoDB sempre cria automaticamente o índice <code>_id_</code> para garantir a unicidade dos documentos.
  </p>

  <h3>🗂️ 5. Listando índices de todo o banco</h3>
  <p>
    É possível listar os índices de todas as coleções do banco atual:
  </p>

  <pre><code>db.getCollectionNames().forEach(function(collection) {
  indexes = db[collection].getIndexes();
  print("Índices de " + collection + ":");
  printjson(indexes);
});</code></pre>

  <p>
    📘 Essa abordagem ajuda na auditoria e manutenção de índices em sistemas grandes.
  </p>

  <h3>🧹 6. Removendo índices específicos</h3>
  <p>
    Caso um índice não seja mais necessário, é possível removê-lo com:
  </p>

  <pre><code>db.inspections.dropIndex({ certificate_number: 1 })</code></pre>

  <h3>💣 7. Removendo todos os índices de uma coleção</h3>
  <p>
    Para remover todos os índices (exceto o <code>_id</code>), use:
  </p>

  <pre><code>db.inspections.dropIndexes()</code></pre>

  <h3>🔍 8. Verificando o uso do índice com <code>explain()</code></h3>
  <p>
    O método <code>explain()</code> mostra como o MongoDB executa uma consulta, indicando se um índice foi utilizado.
  </p>

  <pre><code>// Sem índice
db.inspections.find({ certificate_number: 3030353 }).explain()

// Criando índice
db.inspections.createIndex({ certificate_number: 1 })

// Com índice
db.inspections.find({ certificate_number: 3030353 }).explain()</code></pre>

  <p>
    No campo <code>executionStats</code> do resultado, é possível observar a diferença no número de documentos analisados — um forte indicativo de ganho de performance.
  </p>

  <h3>🧩 9. Índices compostos (Compound Indexes)</h3>
  <p>
    Os <strong>índices compostos</strong> cobrem múltiplos campos e são úteis para consultas que filtram ou ordenam por mais de um campo.
  </p>

  <pre><code>db.inspections.createIndex({ certificate_number: 1, date: 1 })</code></pre>

  <p>
    🔸 A ordem dos campos é importante — consultas devem seguir a <em>ordem de prefixo</em> para aproveitar o índice.
  </p>

  <p><strong>Exemplo:</strong> este índice otimiza consultas por:</p>
  <ul>
    <li><code>{ certificate_number: X }</code></li>
    <li><code>{ certificate_number: X, date: Y }</code></li>
  </ul>

  <p>Mas <em>não</em> ajuda em consultas apenas por <code>date</code>.</p>

  <h3>💬 10. Índices de texto (Text Indexes)</h3>
  <p>
    Índices de texto permitem buscas avançadas por palavras ou frases dentro de campos textuais.
  </p>

  <pre><code>// Criando índice de texto
db.inspections.createIndex({ business_name: "text" })

// Buscando por texto
db.inspections.find({ $text: { $search: "HOT DOG" } })

// Verificando plano de execução
db.inspections.find({ $text: { $search: "HOT DOG" } }).explain()</code></pre>

  <p>
    🧠 É possível combinar operadores como <code>$search</code>, <code>$text</code> e <code>$meta</code> para classificar resultados por relevância.
  </p>

  <h3>⚠️ 11. Por que não criar muitos índices?</h3>
  <p>
    Embora os índices acelerem consultas, eles <strong>aumentam o consumo de memória e armazenamento</strong>, e <strong>podem reduzir a performance de escrita</strong>, pois cada atualização precisa manter os índices sincronizados.
  </p>

  <p><strong>Boas práticas:</strong></p>
  <ul>
    <li>Crie índices apenas em campos realmente usados em consultas frequentes.</li>
    <li>Evite índices redundantes (que cobrem os mesmos campos em diferentes ordens).</li>
    <li>Use <code>explain()</code> para validar o impacto real de cada índice.</li>
    <li>Monitore o tamanho e a eficiência dos índices com <code>db.collection.stats()</code>.</li>
  </ul>

  <h3>📘 Resumo dos principais comandos de índices</h3>
  <table>
    <thead>
      <tr><th>Comando</th><th>Função</th><th>Exemplo</th></tr>
    </thead>
    <tbody>
      <tr><td><code>createIndex()</code></td><td>Cria um índice</td><td><code>db.coll.createIndex({ campo: 1 })</code></td></tr>
      <tr><td><code>getIndexes()</code></td><td>Lista índices da coleção</td><td><code>db.coll.getIndexes()</code></td></tr>
      <tr><td><code>dropIndex()</code></td><td>Remove índice específico</td><td><code>db.coll.dropIndex({ campo: 1 })</code></td></tr>
      <tr><td><code>dropIndexes()</code></td><td>Remove todos os índices</td><td><code>db.coll.dropIndexes()</code></td></tr>
      <tr><td><code>explain()</code></td><td>Mostra como a query é executada</td><td><code>db.coll.find(...).explain()</code></td></tr>
      <tr><td><code>text</code></td><td>Cria índice textual</td><td><code>db.coll.createIndex({ nome: "text" })</code></td></tr>
    </tbody>
  </table>

</section>

<section id="aggregation-mongodb">
  <h2>🔬 Framework de Aggregation no MongoDB</h2>
  <p>
    O <strong>Aggregation Framework</strong> do MongoDB é uma poderosa coleção de operadores e estágios
    que permitem transformar, agrupar e analisar documentos por meio de um <em>pipeline</em>.
    Em vez de executar várias consultas e pós-processar resultados na aplicação, você monta uma
    sequência de estágios (um array) que processam os documentos passo a passo — filtros, projeções,
    agrupamentos, amostragens e muito mais.
  </p>

  <h3>🧩 O que é um <em>pipeline</em>?</h3>
  <p>
    Um pipeline é um array de estágios (<code>[ {...}, {...} ]</code>). Cada estágio recebe
    documentos do estágio anterior e emite documentos para o próximo. A ordem dos estágios importa
    — filtros e projeções feitos cedo reduzem o volume de dados e melhoram a performance.
  </p>

  <pre><code>db.books.aggregate([
  { $match: { categories: "Java" } },
  { $sort: { pageCount: -1 } },
  { $limit: 10 },
  { $project: { title: 1, pageCount: 1 } }
])</code></pre>

  <h3>📦 Agrupamentos e "buckets"</h3>
  <p>
    <code>$bucket</code> e <code>$bucketAuto</code> são ótimos para criar faixas (bins) e entender
    distribuições de dados (ex.: distribuição de número de páginas).
  </p>

  <pre><code>// Exemplo: bucket por pageCount, contando documentos por faixa
db.books.aggregate([
  {
    $bucket: {
      groupBy: "$pageCount",
      boundaries: [100,200,300,400,500,600,700],
      default: "OTHERS",
      output: { "count": { $sum: 1 } }
    }
  }
])
</code></pre>

  <pre><code>// bucketAuto: cria 'buckets' automaticamente com base na distribuição
db.books.aggregate([
  { $bucketAuto: { groupBy: "$pageCount", buckets: 5 } }
])</code></pre>

  <h3>⚙️ Estatísticas da collection</h3>
  <p>
    <code>$collStats</code> retorna estatísticas internas da coleção (tamanho, operações, execuções de queries etc.).
  </p>
  <pre><code>db.books.aggregate([
  { $collStats: { queryExecStats: {}, count: {} } }
]).pretty()</code></pre>

  <h3>⬇️ Ordenação, limite, skip e sample</h3>
  <p>
    Use <code>$sort</code>, <code>$limit</code>, <code>$skip</code> e <code>$sample</code> para controlar
    quais e quantos documentos serão retornados — essenciais em relatórios e URIs com paginação.
  </p>

  <pre><code>// pegar top 3 por pageCount
db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $limit: 3 }
]).pretty()

// pular primeiros 5 resultados (paginação)
db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $skip: 5 },
  { $limit: 5 }
]).pretty()

// amostragem aleatória (size = 10)
db.books.aggregate([
  { $match: { categories: "Java" } },
  { $project: { title: 1 } },
  { $sample: { size: 10 } }
]).pretty()</code></pre>

  <h3>🔎 Filtragem e projeção dentro do pipeline</h3>
  <p>
    Use <code>$match</code> para filtrar documentos (equivalente a WHERE) e <code>$project</code>
    para selecionar/transformar campos (equivalente a SELECT).
  </p>

  <pre><code>// ordenar, filtrar por autor, limitar e projetar apenas o título
db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $match: { authors: "Gavin King" } },
  { $limit: 3 },
  { $project: { title: 1 } }
]).pretty()</code></pre>

  <h3>📤 Criando uma nova collection com <code>$out</code></h3>
  <p>
    O estágio <code>$out</code> grava o resultado do pipeline em outra collection (substitui a coleção de destino).
    Útil para materializar resultados pesados e reutilizáveis.
  </p>

  <pre><code>db.books.aggregate([
  { $match: { categories: "Java", pageCount: { $gt: 800 } } },
  { $limit: 5 },
  { $out: "bigjavabooks" }
])

// consultar a collection criada
db.bigjavabooks.find().pretty()</code></pre>

  <h3>🧰 Trabalhando com arrays: <code>$unwind</code> e <code>$sortByCount</code></h3>
  <p>
    <code>$unwind</code> "desconstrói" arrays em documentos individuais — essencial para agrupar por itens de arrays.
    Combine com <code>$sortByCount</code> para obter contagens por categoria.
  </p>

  <pre><code>// desconstruir categories e contar ocorrências
db.books.aggregate([
  { $unwind: "$categories" },
  { $sortByCount: "$categories" }
])</code></pre>

  <h3>🧾 Removendo campos do retorno: <code>$unset</code></h3>
  <p>
    Use <code>$unset</code> para excluir campos do documento final retornado pelo pipeline.
  </p>

  <pre><code>db.books.aggregate([
  { $match: { categories: "PowerBuilder" } },
  { $sort: { pageCount: -1 } },
  { $unset: ["_id", "status"] }
]).pretty()</code></pre>

  <h3>🔢 Contando com <code>$count</code></h3>
  <p>
    O estágio <code>$count</code> retorna o número de documentos que passaram pelos estágios anteriores.
  </p>

  <pre><code>db.books.aggregate([
  { $match: { categories: "Java" } },
  { $project: { title: 1 } },
  { $count: "Contagem" }
]).pretty()</code></pre>

  <h3>📌 Dicas de performance e boas práticas</h3>
  <ul>
    <li><strong>Filtre cedo:</strong> coloque <code>$match</code> o mais cedo possível para reduzir dados processados.</li>
    <li><strong>Projete cedo:</strong> <code>$project</code> para manter apenas campos necessários.</li>
    <li><strong>Use índices:</strong> índices sobre campos usados em <code>$match</code> aceleram o pipeline.</li>
    <li><strong>Evite $out desnecessário:</strong> <code>$out</code> substitui coleções; faça backup se for crítico.</li>
    <li><strong>$sample</strong> é eficiente para amostragem, mas sua semântica muda com tamanho e índice.</li>
    <li><strong>Memória:</strong> pipelines complexos podem precisar de <code>allowDiskUse: true</code> em operações que ultrapassem limites de memória.</li>
    <li><strong>Examine o plano:</strong> use <code>.explain()</code> para entender custo e uso de índices.</li>
  </ul>

  <h3>🧾 Resumo dos principais estágios</h3>
  <table>
    <thead>
      <tr><th>Estágio</th><th>Função</th></tr>
    </thead>
    <tbody>
      <tr><td><code>$match</code></td><td>Filtra documentos (equivalente a WHERE)</td></tr>
      <tr><td><code>$project</code></td><td>Seleciona/transforma campos (equivalente a SELECT)</td></tr>
      <tr><td><code>$sort</code></td><td>Ordena documentos</td></tr>
      <tr><td><code>$limit</code></td><td>Limita número de documentos</td></tr>
      <tr><td><code>$skip</code></td><td>Pula N documentos (paginação)</td></tr>
      <tr><td><code>$sample</code></td><td>Amostragem aleatória</td></tr>
      <tr><td><code>$unwind</code></td><td>Desconstrói arrays</td></tr>
      <tr><td><code>$bucket / $bucketAuto</code></td><td>Cria faixas (bins) para agrupamento</td></tr>
      <tr><td><code>$out</code></td><td>Escreve resultado em outra collection</td></tr>
      <tr><td><code>$collStats</code></td><td>Estatísticas da collection</td></tr>
      <tr><td><code>$count</code></td><td>Conta documentos do pipeline</td></tr>
      <tr><td><code>$unset</code></td><td>Remove campos do resultado</td></tr>
    </tbody>
  </table>

  <p>
    O Aggregation Framework é essencial para análises e transformações avançadas no MongoDB.
    Comece com pipelines simples (<code>$match</code> + <code>$project</code>) e vá evoluindo para
    estágios mais sofisticados (<code>$bucket</code>, <code>$unwind</code>, <code>$out</code>) conforme
    suas necessidades de negócio.
  </p>
</section>
<section id="mongoose">
  <h2>🧬 Trabalhando com Mongoose no MongoDB</h2>
  <p>
    O <strong>Mongoose</strong> é uma biblioteca ODM (<em>Object Data Modeling</em>) para Node.js que facilita 
    a interação com o MongoDB. Ele adiciona uma camada de estrutura ao banco NoSQL, permitindo definir 
    <strong>schemas</strong>, <strong>models</strong>, validações, middlewares e métodos personalizados — tudo 
    isso mantendo a flexibilidade do MongoDB.
  </p>

  <h3>📘 Por que usar Mongoose?</h3>
  <ul>
    <li><strong>Define schemas</strong>: você estrutura seus documentos, mesmo em um banco NoSQL.</li>
    <li><strong>Valida dados automaticamente</strong>: antes de salvar no banco.</li>
    <li><strong>Abstrai a complexidade</strong> das operações do driver nativo do MongoDB.</li>
    <li><strong>Models reutilizáveis</strong>: encapsula comportamento da coleção.</li>
    <li><strong>Middlewares</strong>: executa lógica antes e depois de salvar, atualizar etc.</li>
    <li><strong>Consultas encadeáveis</strong> e API mais amigável que o driver nativo.</li>
  </ul>

  <h3>🔗 Conectando ao MongoDB com Mongoose</h3>
  <p>
    A conexão é simples e retorna uma <code>Promise</code>. Em versões recentes, não é necessário passar 
    opções adicionais:
  </p>

  <pre><code>const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test')
  .then(() => console.log("Connected to MongoDB with Mongoose!"))
  .catch(err => console.error("Connection error:", err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB with Mongoose!'));
</code></pre>

  <h3>🏗️ Criando um Schema</h3>
  <p>
    Um <strong>Schema</strong> define a estrutura dos documentos dentro de uma collection. 
    É onde você especifica os campos e seus tipos:
  </p>

  <pre><code>const pessoaSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  profissao: String
});
</code></pre>

  <h3>📦 Criando um Model</h3>
  <p>
    O <strong>Model</strong> é a representação da collection no código. 
    Com ele você cria, lê, atualiza e deleta documentos.
  </p>

  <pre><code>const pessoaModel = mongoose.model('Pessoa', pessoaSchema);
</code></pre>

  <h3>➕ Inserindo documentos</h3>

  <pre><code>// Criando um documento individual
const leo = new pessoaModel({
  nome: 'Leonardo',
  idade: 22,
  profissao: 'Desenvolvedor'
});

leo.save()
  .then(() => console.log('Pessoa salva no banco de dados!'))
  .catch(err => console.error('Erro ao salvar pessoa:', err));

// Inserindo vários documentos de uma vez
pessoaModel.insertMany([
  { nome: 'Ana', idade: 28, profissao: 'Designer' },
  { nome: 'Carlos', idade: 35, profissao: 'Gerente' },
  { nome: 'Mariana', idade: 30, profissao: 'Engenheira' }
]);
</code></pre>

  <h3>🔍 Consultando documentos</h3>

  <pre><code>// Encontrar várias pessoas
pessoaModel.find({ nome: 'Leonardo' })
  .then(pessoas => console.log('Pessoas encontradas:', pessoas));

// Encontrar apenas uma pessoa
async function getPessoa(nome) {
  return await pessoaModel.findOne({ nome });
}

getPessoa("Leonardo")
  .then(pessoa => console.log('Pessoa encontrada:', pessoa));
</code></pre>

  <h3>🗑️ Deletando documentos</h3>

  <pre><code>pessoaModel.deleteOne({ nome: 'Leonardo' })
  .then(() => console.log('Pessoa deletada!'));
</code></pre>

  <h3>✏️ Atualizando documentos</h3>

  <pre><code>pessoaModel.updateOne(
  { nome: 'Ana' },
  { idade: 29 }
).then(() => console.log('Pessoa atualizada!'));
</code></pre>

  <h3>⚙️ Consultas avançadas com <code>where</code></h3>
  <p>
    Mongoose permite escrever queries encadeáveis mais legíveis:
  </p>

  <pre><code>async function getPessoaNomeIdade(nome, idade) {
  return await pessoaModel
    .where('nome').equals(nome)
    .where('idade').equals(idade)
    .exec();
}
</code></pre>

  <h3>🧾 Resumo do que o Mongoose oferece</h3>
  <ul>
    <li><strong>Schemas</strong> para organizar os dados.</li>
    <li><strong>Models</strong> que representam collections.</li>
    <li><strong>Métodos de CRUD</strong> intuitivos (<code>.find()</code>, <code>.save()</code>, <code>.updateOne()</code>…).</li>
    <li><strong>Validações automáticas</strong> antes de persistir dados.</li>
    <li><strong>Middlewares</strong> para lógica automática.</li>
    <li><strong>Consultas encadeáveis</strong> e expressivas.</li>
    <li><strong>Integração perfeita com Node.js + JavaScript moderno</strong>.</li>
  </ul>

  <p>
    O Mongoose é ideal para projetos que precisam do poder e flexibilidade do MongoDB, 
    mas com a segurança e organização de schemas e models. Ele facilita muito o 
    desenvolvimento de APIs, sistemas de cadastro, dashboards e qualquer aplicação 
    que requer persistência estruturada.
  </p>
</section>

<section id="mongodb-atlas">
  <h2>☁️ MongoDB Atlas – Banco de Dados na Nuvem</h2>
  <p>
    O <strong>MongoDB Atlas</strong> é o serviço oficial de <strong>Database as a Service (DBaaS)</strong> 
    oferecido pela própria MongoDB Inc. Ele permite criar, gerenciar e escalar bancos de dados MongoDB 
    diretamente na nuvem, sem a necessidade de instalar, configurar ou manter servidores manualmente.
  </p>

  <p>
    Com o Atlas, o desenvolvedor pode focar totalmente no desenvolvimento da aplicação, enquanto 
    a infraestrutura do banco de dados — como disponibilidade, segurança, backups e escalabilidade —
    é gerenciada automaticamente pela plataforma.
  </p>

  <h3>🌍 Banco de dados MongoDB na nuvem</h3>
  <p>
    O MongoDB Atlas funciona sobre grandes provedores de nuvem como 
    <strong>AWS</strong>, <strong>Google Cloud</strong> e <strong>Microsoft Azure</strong>, 
    permitindo que o banco de dados fique hospedado próximo dos usuários finais, 
    reduzindo latência e melhorando o desempenho da aplicação.
  </p>

  <h3>🚀 Principais vantagens do MongoDB Atlas</h3>
  <ul>
    <li><strong>Gerenciamento totalmente automatizado</strong>: não é necessário configurar servidores ou clusters.</li>
    <li><strong>Alta disponibilidade</strong>: replicação automática de dados.</li>
    <li><strong>Escalabilidade</strong>: aumenta ou reduz recursos conforme a demanda.</li>
    <li><strong>Backups automáticos</strong>: proteção contra perda de dados.</li>
    <li><strong>Monitoramento em tempo real</strong>: métricas de desempenho e uso.</li>
    <li><strong>Segurança integrada</strong>: autenticação, criptografia e controle de acesso.</li>
  </ul>

  <h3>🔐 Segurança no MongoDB Atlas</h3>
  <p>
    A segurança é um dos pontos fortes do Atlas. Ele oferece diversas camadas de proteção,
    garantindo que os dados estejam seguros tanto em repouso quanto em trânsito.
  </p>

  <ul>
    <li>🔑 Autenticação com usuário e senha</li>
    <li>🧾 Controle de acesso baseado em papéis (RBAC)</li>
    <li>🔒 Criptografia dos dados em trânsito (TLS/SSL)</li>
    <li>🔐 Criptografia dos dados em repouso</li>
    <li>🌐 Whitelist de IPs para acesso ao cluster</li>
  </ul>

  <h3>🔗 Conectando uma aplicação ao MongoDB Atlas</h3>
  <p>
    O Atlas fornece uma <strong>string de conexão</strong> pronta, que pode ser usada
    diretamente no backend da aplicação. No Party Time, essa conexão é feita utilizando
    <strong>Node.js</strong> em conjunto com o <strong>Mongoose</strong>.
  </p>

  <pre><code>mongodb+srv://usuario:senha@cluster0.mongodb.net/party_time?retryWrites=true&w=majority
</code></pre>

  <p>
    Essa abordagem facilita o deploy da aplicação, pois o banco de dados fica acessível
    de qualquer ambiente autorizado, como máquinas locais, servidores de produção ou
    plataformas de hospedagem.
  </p>

  <h3>🧪 Plano gratuito para estudos</h3>
  <p>
    O MongoDB Atlas oferece um plano gratuito (<strong>Free Tier</strong>) que é ideal
    para projetos educacionais e de aprendizado. Esse plano permite criar clusters com
    recursos limitados, mas suficientes para desenvolvimento, testes e estudos de NoSQL.
  </p>

  <ul>
    <li>💸 Sem custo financeiro</li>
    <li>📦 Ideal para projetos acadêmicos</li>
    <li>⚙️ Recursos suficientes para CRUD e testes</li>
    <li>🌱 Ótimo para aprender MongoDB na prática</li>
  </ul>

  <h3>📌 Uso do MongoDB Atlas no projeto Party Time</h3>
  <p>
    No projeto <strong>Party Time</strong>, o MongoDB Atlas é utilizado como banco de dados
    principal da aplicação, armazenando usuários, eventos e imagens de forma flexível.
    Essa escolha permite simular um ambiente real de produção, aproximando o projeto
    acadêmico das práticas utilizadas no mercado.
  </p>

  <p>
    A combinação do <strong>MongoDB Atlas</strong> com <strong>Node.js</strong>, 
    <strong>Express</strong> e <strong>Mongoose</strong> torna o sistema escalável,
    seguro e adequado para aplicações web modernas baseadas em arquitetura REST.
  </p>
</section>

<section id="configuracao-mongodb-atlas">
  <h2>⚙️ Configuração de um Projeto no MongoDB Atlas</h2>
  <p>
    Para utilizar o <strong>MongoDB Atlas</strong> em uma aplicação, é necessário criar
    um projeto e um cluster na plataforma. Esse processo é simples, guiado e pode ser
    realizado totalmente pela interface web do Atlas.
  </p>

  <h3>📝 Criando uma conta no MongoDB Atlas</h3>
  <ol>
    <li>Acesse o site oficial do MongoDB Atlas.</li>
    <li>Crie uma conta gratuita utilizando e-mail ou autenticação via Google/GitHub.</li>
    <li>Após o login, você será direcionado ao painel principal (Dashboard).</li>
  </ol>

  <h3>📁 Criando um novo projeto</h3>
  <p>
    Um <strong>projeto</strong> no MongoDB Atlas funciona como um contêiner lógico
    que agrupa clusters, usuários e configurações de segurança.
  </p>

  <ol>
    <li>No Dashboard, clique em <strong>New Project</strong>.</li>
    <li>Defina um nome para o projeto (ex: <em>Party Time</em>).</li>
    <li>Opcionalmente, adicione membros ao projeto.</li>
    <li>Finalize a criação do projeto.</li>
  </ol>

  <h3>🧩 Criando um cluster MongoDB</h3>
  <p>
    O <strong>cluster</strong> é o ambiente onde os dados serão armazenados.
    Para projetos educacionais, o plano gratuito é suficiente.
  </p>

  <ol>
    <li>Clique em <strong>Build a Database</strong>.</li>
    <li>Selecione o plano <strong>Free (M0)</strong>.</li>
    <li>Escolha o provedor de nuvem (AWS, Google Cloud ou Azure).</li>
    <li>Selecione a região mais próxima para melhor desempenho.</li>
    <li>Defina um nome para o cluster.</li>
    <li>Confirme a criação e aguarde o provisionamento.</li>
  </ol>

  <h3>👤 Criando um usuário de acesso ao banco</h3>
  <p>
    Para que a aplicação possa se conectar ao banco de dados, é necessário
    criar um usuário com permissão de leitura e escrita.
  </p>

  <ol>
    <li>Acesse a seção <strong>Database Access</strong>.</li>
    <li>Clique em <strong>Add New Database User</strong>.</li>
    <li>Defina um nome de usuário e senha.</li>
    <li>Selecione a permissão <strong>Read and write to any database</strong>.</li>
    <li>Salve o usuário.</li>
  </ol>

  <h3>🌐 Configurando acesso por IP</h3>
  <p>
    O MongoDB Atlas exige a liberação de IPs autorizados a acessar o cluster,
    aumentando a segurança da aplicação.
  </p>

  <ol>
    <li>Acesse a seção <strong>Network Access</strong>.</li>
    <li>Clique em <strong>Add IP Address</strong>.</li>
    <li>Para ambiente de desenvolvimento, utilize <code>0.0.0.0/0</code> (acesso global).</li>
    <li>Confirme a configuração.</li>
  </ol>

  <p>
    ⚠️ Em ambientes de produção, recomenda-se liberar apenas IPs específicos
    para evitar acessos indevidos.
  </p>

  <h3>🔗 Obtendo a string de conexão</h3>
  <p>
    Após configurar o cluster, o usuário e o acesso por IP, o Atlas disponibiliza
    uma <strong>string de conexão</strong> que será usada no backend da aplicação.
  </p>

  <ol>
    <li>Acesse o cluster criado.</li>
    <li>Clique em <strong>Connect</strong>.</li>
    <li>Selecione <strong>Connect your application</strong>.</li>
    <li>Copie a string de conexão gerada.</li>
  </ol>

  <pre><code>mongodb+srv://usuario:senha@cluster0.mongodb.net/party_time?retryWrites=true&w=majority
</code></pre>

  <h3>🧪 Integração com o backend</h3>
  <p>
    No backend, a string de conexão deve ser armazenada em uma variável de ambiente,
    garantindo maior segurança e flexibilidade.
  </p>

  <pre><code>MONGODB_URI=mongodb+srv://usuario:senha@cluster0.mongodb.net/party_time
</code></pre>

  <p>
    Essa variável é então utilizada pelo Mongoose para estabelecer a conexão com o banco:
  </p>

  <pre><code>mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado ao MongoDB Atlas!"))
  .catch(err => console.error("Erro na conexão:", err));
</code></pre>

  <h3>✅ Resultado final</h3>
  <p>
    Após esses passos, o projeto estará corretamente configurado no MongoDB Atlas,
    permitindo que a aplicação utilize um banco de dados NoSQL na nuvem de forma
    segura, escalável e alinhada com práticas modernas de desenvolvimento.
  </p>
</section>
