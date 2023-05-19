import { PortDica } from "../components/port-components/PortDica";
import { NotaTaskList } from "../components/task-list-components/Nota-TaskList";


export const projectsDB = [
    {
        name: 'Paiva Moto Peças',
        year: '2023',
        picture: '/paiva.png',
        github: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas',
        version: undefined,
        type: 'grupo',
        situation: 'EM DESENVOLVIMENTO!',
        description: `
            <p> --> Desenvolvido em função da graduação de analise e desenvolvimento de sistemas na PUC Minas. </p>

            <p>O projeto se trata de uma aplicação web responsável pela divulgação de produtos
             e serviços da oficina Paiva Moto Peças.</p>

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
        O projeto é uma aplicação que monitora o clima nas praias e permite ao usuário 
        cadastrar suas praias de interesse e monitorá-las, além de receber informações 
        úteis para aproveitar ao máximo seu esporte.
        </p>

        <p className="P mt-2">
          O projeto ensina construir e rodar micro-serviços na cloud
          utilizando Node.js com Typescript seguindo as melhores práticas
          de desenvolvimento em um curso que vai do desenvolvimento a
          produção.
        </p>

        <p className="P  mt-2">
        Durante o curso, é criada uma API para calcular a melhor condição de surf entre 
        várias praias. Essa API tem como objetivo servir a aplicação web.
        </p>   

        <p className="P  mt-2">
        A aplicação web não é construída durante o curso, pois ela não é o foco do conteúdo. 
        Ela é disponibilizada pronta. Optei por não adicionar o código front-end ao meu repositório, 
        pois não foi feito por mim e pode ser consultado no repositório original do projeto do curso.
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
                O projeto é uma API REST para servir uma aplicação de Lista de tarefas.
                Permite criar, editar, deletar, consultar e receber notificações.
              </p>

              <p className="P mb-8 mt-4">
                Inicialmente teve o objetivo de consolidar meus conhecimentos de Back-end e Engenharia de Software,
                além de praticar a utilização de Node.js com Express e Prisma Studio. O objetivo agora é continuar utilizando esse projeto para praticar,
                aprimorando-o com as novas habilidades, tecnologias e ferramentas que adquiro desenvolvendo outros projetos de eventos ou cursos.
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
        <p className="P">
            O projeto é um sistema de microservice de notificações. Possui as seguintes
            funcionalidades e rotas: Send, Cancel, Count Recipient, Get
            Recipient, Read, Unread.
        </p>
        <p className="P mt-2">
            --> Desenvolvido durante o evento Ignite Lab 04 da
            RocketSeat.
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
        name: ' Website Portfólio',
        year: '2022',
        picture: '/portfolio.png',
        github: 'https://github.com/Lucasvmarangoni/Portfolio',
        version: '1.11.20',
        type: 'pessoal',
        situation: 'REFACTORING!',
        description: `
        <p className="P">
        Projeto Web desenvolvido para minha apresentação pessoal e
        exposição de meus projetos pessoais como Software Engineer.
        <br />
        Busquei por meio desse meu website pessoal transmitir o máximo
        da minha personalidade, pois entendo que isso compõem parte de
        sua finalidade.
        <br />
        </p>
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

