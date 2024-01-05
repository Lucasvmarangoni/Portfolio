import { ProjectImagesCarousel } from "../../Home/info/components/images-carrosel";
import { NotaCurrency } from "../components/currency-converter-components/NotaCurrency";
import { ProblemasSuperados } from "../components/currency-converter-components/Problens";
import { PortDica } from "../components/port-components/PortDica";
import { NotaTaskList } from "../components/task-list-components/Nota-TaskList";
import { cc, pmp, tl } from "./image-folder";
import Maintenance from "./util/Maintenance";

interface ProjectProps {
    name: string;
    year: string;
    picture: string,
    github: string,
    version?: string,
    type: string,
    situation?: string | JSX.Element,
    description: string
    technologies: string[]
    extra?: JSX.Element | JSX.Element[]
    video?: string
    demo?: string
    carousel?: JSX.Element
}

export const projectsDB: ProjectProps[] = [
    {
        name: 'ESports',
        year: '2022',
        picture: '/Hnlw.jpg',
        github: 'https://github.com/Lucasvmarangoni/NLW-Ignite-2022',
        version: undefined,
        type: 'inativo',
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

        <p> O design do projeto é inspirado na obra de solo levelling, que me motivou e me inspirou no momento em que decidi mudar de profissão e começar na área de TI. </p>   

        <p> Eu gostaria de criar o tema claro, utilizando branco como cor principal e verde para os detalhes (substituindo o roxo), também demonstrando outro aspecto da minha personalidade. 
        Contudo não posso dedicar tempo para isso agora.</p>   
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
        type: 'inativo',
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
        name: 'Paiva Moto Peças',
        year: 'Mar 2023 - Jun 2023',
        picture: '/paiva.png',
        github: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-equipe-2-paiva-moto-pecas',
        version: undefined,
        type: 'equipe',
        description: `
            <p>Desenvolvido em função da graduação de analise e desenvolvimento de sistemas na PUC Minas. </p>  

            <p> --> &#x1F3C6; Projeto destaque, escolhido para mostra de projetos. 
            (<a href="https://drive.google.com/file/d/1u7hjS-7rjUqSV7P5de0BMzox_XZPA2SJ/view?usp=sharing" target="_blank"> <u>Certificado</u> </a> -
            <a href="https://youtu.be/vE4thVxtfiE?t=1283" target="_blank"><u>Mostra</u></a> ) 
            </p>                

            <p>
            O projeto foi desenvolvido por uma equipe de 6 pessoas. Se trata de uma aplicação web responsável pela divulgação de produtos
             e serviços da oficina Paiva Moto Peças.
            </p>           

            <p>
            Foi minha responsabilidade pessoal a página "Itens da loja", a estrutura do
            banco de dados e o deploy. Criei um filtro integrado com a barra de busca, e a alternância entre 
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
        ],
        demo: 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas/home/index.html',
        carousel: <ProjectImagesCarousel images={pmp} />
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
        name: 'TaskList',
        year: 'Jan 2023 - Jul 2023',
        picture: '/tasklist.png',
        video: "/tasklist-demo.mp4",
        github: 'https://github.com/Lucasvmarangoni/TaskList',
        version: '2.1.0',
        type: 'pessoal',
        description: `
        <p style="font-size:16px">
        - O vídeo é uma demonstração das requests e responses no insomnia e da documentação. <br> 
        
        - As imagens são prints de partes relevantes do código. <br>

        - Os testes podem ser verificados pelo workflow, no repositório do projeto no meu github.       
        </p>      
        <p className="P mt-4">
        O projeto é uma API REST para servir aplicação de lista de tarefas, possui as funções criar, consultar (de várias formas), alterar e deletar as tarefas, também conta com sistema de notificação e lixeira. 
        Foi desenvolvido com <strong>Node.js</strong>, <strong>Express </strong> e <strong>Typescript</strong>, de banco de dados o ORM <strong>Prisma Studio</strong> com  
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
            "Regex",
        ],
        carousel: <ProjectImagesCarousel images={tl} />
    },
    {
        name: 'Currency converter',
        year: 'Jul 2023 - Nov 2023',
        picture: '/currency-converter.png',
        video: 'currency-converter-demo.mp4',
        github: 'https://github.com/Lucasvmarangoni/currency-converter',
        version: '1.1.0',
        // situation: 'PROJETO EM MANUTENÇÃO',
        type: 'pessoal',
        // situation: <Maintenance title="PROJETO EM MANUTENÇÃO" content="    

        // <strong>Manutenção</strong> <br><br>        

        // O objetivo principal: implementar a persistência dos dados de usuário por filas, utilizando a biblioteca Bull.<br>
        // <u>Outras:</u> <br>
        //  - Cluster de replicas mongodb para redundância dos dados e disponibilidade; <br>  
        //  - Conteinerização da aplicação; <br>
        //  - Reestruturação da arquitetura com enfase em DDD; <br>
        //  - Config estrita do typescript; <br>
        //  - Refatorar para adequar configuração estrita com práticas utilizadas pelo mercado. 
        // <br><br>    
        // Acompanhe no trello: <a href='https://trello.com/invite/b/LtPCRU0V/ATTI8ed1d7db6259cc3009736a67b0bea2340E9D2648/manutencao-currency-converter' target='_blank'>
        //  <u >Changelog</u></a>
        // "
        // />,
        extra: <NotaCurrency />,
        description: `   
            <p style="font-size:16px">
            - O vídeo é uma demonstração das requests e responses no postman e da documentação. (vídeo da versão 1.0.0) <br>

            - As imagens são prints de partes relevantes do código. <br>

            - Os testes podem ser verificados pelo workflow, no repositório do projeto no meu github. <br>       
            </p>  
                 
            <p>O projeto é uma API Rest para conversão de moedas consumindo a API Exchangerates desenvolvida com 
            <strong>Nest.js</strong>, utilizando arquitetura de <strong>monólito modular</strong>. Possui testes unitários, de integração e e2e, tratamento de exceções, logs, caching, doc. OpenAPI, sistema de autenticação local e OAuth (google).
            </p>              
            <p>
            - A comunicação entre módulos e a persistência dos dados é por filas de mesageria com Bull. <br>
            - Para o banco de dados foi feito um cluster de replicas, nó primário, com uma cópia secundária e um arbiter. <br>
            - A request pode ser feita utilizando qualquer moeda válida como base (from). <br>
            - Em uma mesma request, é possível solicitar a conversão para quantas moedas desejar. <br>
            - O usuário pode se autenticar (local), pela mesma rota (url), utilizando username ou email.  <br>
            </p>      
        `,
        technologies: [
            "Node",
            "Typescript",
            "Nest",
            "MongoDB",
            "Mongoose",
            "Redis",
            "Redis Cloud",
            "Jest",
            "Supertest",
            "Docker",
            "Docker Compose",
            "Github Actions",
            "OpenAPI",
            "Json Web Token",
            "Bcrypt",
            "Passport",
            "Pino",
            "Bull",
            "GCP",

        ],
        carousel: <ProjectImagesCarousel images={cc} />
    },
    {
        name: 'Gopportunities',
        year: 'Ago 2023',
        picture: '/gopportunities.png',
        github: 'https://github.com/Lucasvmarangoni/Gopportunities',
        type: 'guiado',
        description: `
        <p>
        --> Projeto oferecido pelo canal @Arthur404dev.
        </p>

        <p>
        É uma API para divulgação de oportunidades de emprego, que utiliza uma estrutura moderna de packages.
        Foi feito sistema de log básico e documentação swagger.
        </p>
        `,
        technologies: ['Golang', 'Go',
            'Gin-gonic',
            'Gorm',
            'SQLite',
            'Swaggo',
            'swag'
        ]
    },
    {
        name: 'Ordering',
        year: 'Set 2023',
        picture: '/ordering.png',
        github: 'https://github.com/Lucasvmarangoni/ordering-app',
        type: 'guiado',
        description: `
        <p>
        --> Projeto oferecido pelo canal @Michael Guay.
        </p>

        <p>
        É uma aplicação baseada em arquitetura de microservices com RabbitMQ. Utilizando 2 
        bancos de dados (primary  and secondary) e um arbiter. 

        Cada um dos microservices é empacotado dentro de um container docker.
        </p>
        `,
        technologies: ['Nest', 'Mongoose',
            'Docker',
            'DockerFile',
            'Docker Compose',
            'RabbitMQ',
            'TypeScript',
            'Node'
        ]
    },
    {
        name: 'Video Encoder',
        year: 'Set 2023',
        picture: '/encoder.png',
        github: 'https://github.com/Lucasvmarangoni/video-encoder',
        type: 'guiado',
        description: `
        <p>
        --> Projeto do curso full cycle.
        </p>

        <p>
        Microservice de encoder de vídeo com Golang, utilizando arquitetura hexagonal. 
        </p>
        `,
        technologies: ['Go', 'Golang', 'Gorm', 'RabbitMQ',
            'Docker',
            'DockerFile',
            'Docker Compose',
            'Google Cloud',
            'GCP',
            'Postgres'
        ]
    },
    {
        name: 'Financial file manager',
        year: 'Nov 2023 - ...',
        picture: '/doc-financeiros.png',
        // video: 'currency-converter-demo.mp4',
        github: 'https://github.com/Lucasvmarangoni/financial-file-manager',
        version: '1.0.0',
        type: 'pessoal',
        situation: <Maintenance title="PROJETO EM DESENVOLVIMENTO" content="    
        
        <strong>Fase de desenvolvimento</strong> <br><br>        
        
        Estou trabalhando nesse projeto atualmente. Sendo possível acompanhar seu desenvolvimento desde o inicio pelo repositório. 

        <br><br>          
        
         <a href='https://github.com/users/Lucasvmarangoni/projects/11/views/1' target='_blank'> ⇝ <u>Project Board</u>.</a>   
        <br>
        
        "
        />,
        description: `                                
            <p>
            Este projeto tem como objetivo desenvolver um sistema robusto para o armazenamento e controle de 
            documentos financeiros. Ele oferece aos clientes e administradores de instituições financeiras a 
            capacidade de fazer upload, gerenciar e recuperar documentos financeiros de forma eficiente.
            </p>           
            <br>     
            <strong>PRINCIPAIS RECURSOS:</strong> 
            <p>
                <strong>- Documentos</strong>: Os documentos são inicialmente armazenados localmente no servidor e, 
                posteriormente transferidos para um serviço de armazenamento em nuvem. Sendo requisito manter versões do documento para visualizar seu histórico.
                <br>  
                <strong>- Consultas</strong>: Cada documento é acompanhado de metadados, incluindo nome, data, tipo 
                de documento e informações relacionadas a transações financeiras.
                <br>  
                <strong>- Segurança</strong>: O sistema mantém nível de segurança e controle de acesso rigoroso, 
                além de observabilidade e registro de atividades para fins de auditoria.
                <br>   
                <strong>- Resiliência</strong>: O sistema deve ser projetado para minimizar o impacto de falhas e garantir 
                que as operações possam ser retomadas o mais rápido possível após uma falha.  
            </p>                 
            
             <a href='https://github.com/Lucasvmarangoni/financial-file-manager/tree/main/docs' target='_blank'>
             ⇝ <u >Documentação de completa</u>.</a>       
        `,
        technologies: [
            "Go",
            "Docker",
            "Docker Compose",
            "Github Actions",
            "OpenAPI",
            "Json Web Token",
            "Bcrypt",
            "GCP",
            "Google Cloud Storage",
            "Zerolog",
            "Prometheus",
            "AES",
            "gRPC",
            "99designs/gqlgen",
            "GraphQL",
            "RabbitMQ",
            "CockroachDB",
            "Pgx",
            "Memcached",
        ],
        // carousel: <ProjectImagesCarousel images={cc} />
    },
]

