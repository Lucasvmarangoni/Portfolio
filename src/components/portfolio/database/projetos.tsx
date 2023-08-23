import { PortDica } from "../components/port-components/PortDica";
import { NotaTaskList } from "../components/task-list-components/Nota-TaskList";


export const projectsDB = [
    {
        name: 'ESports',
        year: '2022',
        picture: '/Hnlw.jpg',
        github: 'https://github.com/Lucasvmarangoni/NLW-Ignite-2022',
        version: undefined,
        type: 'guiado',
        description: `
        <p className="P">
            O projeto tem a finalidade de ajudar jogadores de jogos online a
            encontrarem uma dupla, assim possibilita que criem anúncios para
            que outros jogadores possam entrar em contato.
        </p>
        <p className="P">
         Nos anúncios é possível informar várias características sobre o
         jogador e suas preferências de jogabilidade.
        </p>
        <p className="P mt-2">
            --> Desenvolvido durante o evento NLW Esports Ignite da
            Rocketseat.
        </p>
        `,
        technologies: [
            "Typescript",
            "Node",
            "Express",
            "SQLite",
            "Prisma Studio",
            "React",
            "Vite",
            "Axios",
            "Tailwind",
        ]
    },
    {
        name: ' Website Portfolio',
        year: '2022',
        picture: '/portfolio.png',
        github: 'https://github.com/Lucasvmarangoni/Portfolio',
        version: '1.11.20',
        type: 'pessoal',
        description: `
        <p className="P">
        Projeto Web desenvolvido para minha apresentação pessoal e exposição de meus projetos pessoais como desenvolvedor de software.         
        </p>

        <p> É minha fonte de aprendizado de React.js, pois aprendi e aprendo enquanto 
        desenvolvi e ainda desenvolvo funcionalidades para esse projeto. </p>

        <p>  Busquei por meio desse meu website pessoal transmitir o máximo
        da minha personalidade, pois entendo que isso compõem parte de
        sua finalidade. </p>
        `,
        extra: <PortDica />,
        technologies: [
            "TypeScript",
            "Vite",
            "React",
            "TailWind",
            "Radix ui",
            "Framer Motion"
        ]
    },
    {
        name: 'Notifications Service',
        year: '2022',
        picture: '/igniteLab04.png',
        github: 'https://github.com/Lucasvmarangoni/notifications-service',
        version: undefined,
        type: 'guiado',
        description: `
        <p className="P mt-2">
            --> Desenvolvido durante o evento Ignite Lab 04 da
            RocketSeat.
        </p>

        <p className="P">
        Sistema microsserviço de notificações utilizando Node.js com Nest.js e Typescript. 
        </p>        

        <p> Aprendi sobre arquitetura de
        microservices, utilizei DDD, TDD, testes unitários, validações, factory pattern, in memory database e inversão de dependência.
        </p>
        `,
        technologies: [
            "TypeScript",
            "Node",
            "Nest",
            "Jest",
            "Prisma Studio",
            "SQLite"
        ]
    },
    {
        name: 'TaskList',
        year: 'Jan 2023 - Jul 2023',
        picture: '/tasklist.png',
        demo: "/tasklist-demo.mp4",
        github: 'https://github.com/Lucasvmarangoni/TaskList',
        version: '2.1.0',
        type: 'pessoal',
        description: `
        <p className="P mb-8 mt-4">
        --> O vídeo consiste em uma breve apresentação de alguns arquivos do código e a demonstração das requests e responses no insomnia.      
        </p>       

        <p className="P mt-4">
        O projeto é uma API REST para servir aplicação de lista de tarefas, possui as funções criar, consultar (de várias formas), alterar e deletar as tarefas, também conta com sistema de notificação e lixeira. 
        Foi desenvolvido com <strong>Node.js</strong>, <strong>Express </strong> e <strong>Typescript</strong>, de banco de dados a ORM <strong>Prisma Studio</strong> com  
        <strong>mongoDB</strong> (Atlas) e nos testes o framework  <strong>Vitest</strong>.             
        </p>        

        <p className="P mt-4">
         - A lixeira foi feita criando uma nova collection para armazenar as tarefas deletadas.        
        </p>

        <p className="P mt-4">
        Foi desenvolvida seguindo DDD e TDD, possui testes unitários e e2e, além de validações. Também foi realizado o tratamento de exceções, 
        status code, logging, rate limit, caching, graceful shutdown, documentação openAPI, workflow e autenticação (local).      
        </p>

        <p className="P mt-4">
         Utilizei padrões de projeto in memory database, factory pattern, singleton, inversão de dependência e princípios SOLID.  
        </p>
        `,
        extra: <NotaTaskList />,
        technologies: [
            "TypeScript",
            "Node",
            "Express",
            "Vitest",
            "Supertest",
            "Prisma Studio",
            "Class-validator",
            "MongoDB",
            "Swagger ui",
            "Express openapi validator",
            "Bcrypt",
            "Json Web Token",
            "OvernightJS",
            "Node Config",
            "Pino",
            "Express rate limit",
            "Github actions",
            "Node cache",
            "Http status codes",
        ]
    },
    {
        name: 'Best Surf',
        year: '2023',
        picture: '/bestsurf.png',
        github: 'https://github.com/Lucasvmarangoni/Best-Surf',
        version: undefined,
        type: 'guiado',
        description: `        
        <p className="P">
          --> Projeto guiado <a href="https://www.nodejs-typescript-api.com/curso-gratis/">
            DO ZERO A PRODUÇÃO</a> disponibilizado pelo Engenheiro de software Waldemar Neto.
        </p>

        <p className="P mt-2">
        O projeto é uma API REST que calcula as melhores condições de surf para praias, consumindo a API StormGlass, utilizando
        Node.js com Express e TypeScript e seguindo as melhores práticas de desenvolvimento.
        </p>        

        <p>  Ao longo do projeto, adquiri experiência sobre generic, tratamento de erros, logging, testes unitários e de ponta a ponta, mocks, 
            criptografia e graceful shutdown.
        </p>
           
        `,
        technologies: [
            "TypeScript",
            "Node.js",
            "Express",
            "OvernightJS",
            "Lodash",
            "Pino",
            "Express pino",
            "Json Web Token",
            "Bcrypt",
            "BodyParser",
            "Node Config",
            "MongoDB",
            "Mongoose",
            "Jest",
            "Nock",
            "Supertest",
            "Docker",
            "Docker Compose",
            "Github Actions",
            "Heroku",
            "OpenAPI",
            "Express rate limit",
        ]
    },
    {
        name: 'Paiva Moto Peças',
        year: 'Mar 2023 - Jun 2023',
        picture: '/paiva.png',
        github: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-equipe-2-paiva-moto-pecas',
        version: undefined,
        type: 'equipe',
        description: `
            <p> --> Desenvolvido em função da graduação de analise e desenvolvimento de sistemas na PUC Minas. </p>

            <p> --> Desenvolvido por equipe de seis pessoas. </p>

            <p>O projeto se trata de uma aplicação web responsável pela divulgação de produtos
             e serviços da oficina Paiva Moto Peças.</p>           

            <p>
            Foi minha responsabilidade pessoal a página "Itens da loja", a estrutura do
            banco de dados e o deploy. Criei um filtro integrado com a barra de busca, e a alternância de entre 
            setor de produtos ou serviços.
            </p>

             <strong>Integrantes:</strong>
             <p>
             Alessandra Santos, Enzo Moura, Ingrid Barros, Karina Barbosa, Lucas Vazzoller Marangoni, Paloma Rizzon.  </p>  
             
             <strong>Orientador:</strong>
             <p>Joyce Carvalho</p>
            
        `,
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Github Actions",
        ]
    },
    {
        name: 'Currency converter',
        year: 'Jul 2023 - ',
        picture: '/currency-converter.png',
        github: 'https://github.com/Lucasvmarangoni/currency-converter',
        version: '1.0.0',
        type: 'pessoal',
        situation: 'EM DESENVOLVIMENTO!',
        description: `           
            <p>API Rest para conversão de moedas consumindo a API Exchangerates desenvolvida com Node.js Typescript e 
            Nest.js utilizando DDD, TDD. Possui testes unitários e e2e, exceções, logs, cache, doc. OpenAPI, autenticação.
            </p>           

            <p>
            Teve o objetivo de consolidar minhas habilidades com Nest.js.             
            </p>    
            
            
        `,
        technologies: [
            "Node",
            "Typescript",
            "Nest",
            "MongoDB",
            "Mongoose",
            "Jest",
            "Supertest",
            "Docker",
            "Docker Compose",
            "Github Actions",
            "OpenAPI",
        ]
    },
]

