import { PortDica } from "../components/port-components/PortDica";
import { NotaTaskList } from "../components/task-list-components/Nota-TaskList";


export const projectsDB = [
    {
        name: 'Paiva Moto Peças',
        year: '2023',
        picture: '/paiva.png',
        github: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-equipe-2-paiva-moto-pecas',
        version: undefined,
        type: 'equipe',
        situation: 'EM DESENVOLVIMENTO!',
        description: `
            <p> --> Desenvolvido em função da graduação de analise e desenvolvimento de sistemas na PUC Minas. </p>

            <p> --> Desenvolvido por equipe de seis pessoas. </p>

            <p>O projeto se trata de uma aplicação web responsável pela divulgação de produtos
             e serviços da oficina Paiva Moto Peças.</p>           

            <p>
            Foi minha responsabilidade pessoal a página "Itens da loja" e a estrutura do
            banco de dados. Criei um filtro integrado com a barra de busca, e a alternância de entre 
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
        ]
    },
    {
        name: 'Best Surf',
        year: '2023',
        picture: '/bestsurf.png',
        github: 'https://github.com/Lucasvmarangoni/Best-Surf',
        version: undefined,
        type: 'curso',
        description: `        
        <p className="P">
          --> Projeto curso <a href="https://www.nodejs-typescript-api.com/curso-gratis/">
            DO ZERO A PRODUÇÃO</a> disponibilizado pelo Engenheiro de software Waldemar Neto.
        </p>

        <p className="P mt-2">
        O projeto é uma API REST que calcula as melhores condições de surf para praias, consumindo a API StormGlass, utilizando
        Node.js com Express e TypeScript e seguindo as melhores práticas de desenvolvimento.
        </p>        

        <p>  Ao longo do projeto, adquiri experiência no tratamento de erros, logging, testes unitários e de ponta a ponta, mocks, 
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
        name: 'TaskList',
        year: '2022',
        picture: '/tasklist.png',
        github: 'https://github.com/Lucasvmarangoni/TaskList',
        version: '2.0.0',
        type: 'pessoal',
        situation: 'VERSÃO 2.1.0 EM DESENVOLVIMENTO!',
        description: `
        <p className="P mt-4">
        É uma API REST, CRUD, com sistema de notificação, desenvolvida com Node.js, Express e Typescript, aplicando testes
        unitários, validações, DDD, TDD, in memory database, factory pattern, singleton, inversão de dependência e princípios SOLID.
              </p>

        <p className="P mb-8 mt-4">
            Inicialmente teve o objetivo de consolidar meus conhecimentos de Back-end e Engenharia de Software,
            além de praticar a utilização de Node.js com Express e Prisma Studio. O objetivo agora é continuar utilizando esse projeto para praticar,
            aprimorando-o com as novas habilidades e tecnologias que adquiro, aplicando arquitetura de microsserviços para me possibilitar utilizar 
            outros frameworks e linguagens e assim tirar o máximo desse projeto.
        </p>
        `,
        extra: <NotaTaskList />,
        technologies: [
            "TypeScript",
            "Node",
            "Express",
            "Vitest",
            "Prisma Studio",
            "Class-validator",
            "SQLite"
        ]
    },
    {
        name: 'Notifications Service',
        year: '2022',
        picture: '/igniteLab04.png',
        github: 'https://github.com/Lucasvmarangoni/notifications-service',
        version: undefined,
        type: 'curso',
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
        name: ' Website Portfolio',
        year: '2022',
        picture: '/portfolio.png',
        github: 'https://github.com/Lucasvmarangoni/Portfolio',
        version: '1.11.20',
        type: 'pessoal',
        situation: 'REFACTORING!',
        description: `
        <p className="P">
        Projeto Web desenvolvido para minha apresentação pessoal e exposição de meus projetos pessoais como Software Engineer.         
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
        name: 'ESports',
        year: '2022',
        picture: '/Hnlw.jpg',
        github: 'https://github.com/Lucasvmarangoni/NLW-Ignite-2022',
        version: undefined,
        type: 'curso',
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
    }
]

