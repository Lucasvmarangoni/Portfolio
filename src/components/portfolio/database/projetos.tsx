import { ProjectImagesCarousel } from "../../Home/info/components/images-carrosel";
import { NotaCurrency } from "../components/currency-converter-components/NotaCurrency";
import { ProblemasSuperados } from "../components/currency-converter-components/Problens";
import { PortDica } from "../components/port-components/PortDica";
import { NotaTaskList } from "../components/task-list-components/Nota-TaskList";
import { cc, pmp, tl } from "./image-folder";
import Maintenance from "./util/Maintenance";
import Resume from "./util/resume";

interface ProjectProps {
    name: string;
    year: string;
    picture: string,
    github: string,
    version?: string,
    type: string,
    situation?: string | JSX.Element,
    resume?: string | JSX.Element,
    description: string
    technologies: string[]
    extra?: JSX.Element | JSX.Element[]
    video?: string
    demo?: string
    carousel?: JSX.Element
}

export const projectsDB: ProjectProps[] = [
    {
        name: 'Portfolio',
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
        name: 'Paiva Moto Peças',
        year: 'Mar 2023 - Jun 2023',
        picture: '/paiva.png',
        github: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-equipe-2-paiva-moto-pecas',
        version: undefined,
        type: 'equipe',
        resume: <Resume content="
        <ul style=list-style-type:square>
        <li style=margin-bottom:5px>Aplicação web para e-comerce de oficina. Desenvolvido em <strong>equipe de seis pessoas</strong> com Javascript, HTML e CSS.</li>       
        <li style=margin-bottom:5px>Foi minha responsabilidade a página 'Itens da loja', a estrutura do banco de dados e o deploy com Github Actions no Github Pages.</li>
        <li style=margin-bottom:5px>Foi utilizado metodologias ágeis, sendo escolhido o Scrum como base para definição do processo de desenvolvimento.</li>
        </ul> 

        " />,
        description: `
            <p>Desenvolvido em função da graduação de analise e desenvolvimento de sistemas na PUC Minas. </p>  

            <p> --> Projeto destaque, escolhido para mostra de projetos. 
            (<a href="https://drive.google.com/file/d/1u7hjS-7rjUqSV7P5de0BMzox_XZPA2SJ/view?usp=sharing" target="_blank"><u>Certificado</u> </a> -
            <a href="https://youtu.be/vE4thVxtfiE?t=1283" target="_blank"><u>Mostra</u></a>) 
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
        name: 'TaskList',
        year: 'Jan 2023 - Jul 2023',
        picture: '/tasklist.png',
        video: "/tasklist-demo.mp4",
        github: 'https://github.com/Lucasvmarangoni/TaskList',
        version: '2.1.0',
        type: 'pessoal',
        resume: <Resume content="
        <ul style=list-style-type:square>
        <li style=margin-bottom:5px>API Rest para aplicação de lista de tarefas, desenvolvida com <strong>Express</strong>, <strong>Typescript</strong> e <strong>Prisma</strong>, aplicando <strong>TDD</strong> e princípios de <strong>DDD</strong>.</li>
        <li style=margin-bottom:5px>Utilizei a lib <strong>Overnight.js</strong> nos controllers com authn <strong>JWT</strong> com <strong>Bcrypt</strong> e <strong>Express rate limit</strong>. Possui doc.<strong>OpenAPI</strong> com swagger.</li>
        <li style=margin-bottom:5px>Para persistência <strong>MongoDB</strong> e <strong>Node cache</strong>. Apliquei validações, tratei exceções e logs com <strong>Pino</strong>. Implementei <strong>Graceful shutdown</strong>.</li>
        <li style=margin-bottom:5px>Testes automatizados com <strong>Vitest</strong> e <strong>Supertest</strong> utilizando <strong>in memory database</strong> e <strong>mocks</strong>. Utilizei para workflow o <strong>Github Actions</strong>. </li>
        </ul> 

        " />,
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
        type: 'pessoal',
        resume: <Resume content="
        <ul style=list-style-type:square>
        <li style=margin-bottom:5px> API para cambio consumindo <strong>API Exchangerates</strong>. Desenvolvido com <strong>Nest</strong>, <strong>Mongoose</strong>, <strong>Docker</strong> e <strong>arquitetura modular</strong>.</li>
        <li style=margin-bottom:5px>Utilizei config estrita do typescript e gestão com Nest ConfigModule. Swagger para <strong>doc.OpenAPI</strong> e testes com <strong>Jest</strong> e <strong>Supertest</strong>.</li>
        <li style=margin-bottom:5px> Utilizei <strong>Bull</strong> para filas na criação de usuários e authn local e <strong>OAuth</strong> com <strong>Passport</strong>. Criei um <strong>cluster de replicas e arbiter mongodb</strong>.</li>
        <li style=margin-bottom:5px>Implementei  Logs com <strong>Pino</strong> além exceções e rate limit dos módulos Nest. Para o sistema de cache utilizei <strong>Redis</strong> e <strong>Redis Cloud</strong>.</li>
        </ul> 

        "
        />,
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

        Se você é um recrutador e deseja propor que eu realize alguma alteração ou implementação, por favor, envie por email para <u>lucasvm.ti@gmail.com</u>.

        <br>
        
        "
        />,
        resume: <Resume content="    

        <ul style=list-style-type:square>

            <li style=margin-bottom:5px>
            Sistema robusto para controle de documentos financeiros, desenvolvido com <strong>Go</strong>, <strong>CockRoachDB</strong>, <strong>GCP Storage</strong>, <strong>Docker</strong> e <strong>DDD</strong>. 
            </li>     

            <li style=margin-bottom:5px>            
            API Rest com <strong>Go-chi</strong> para authn JWT e <strong>Casbin</strong> no controle de acesso. API <strong>gRPC</strong> para arquivos e <strong>GraphQL</strong> para consultas.
            </li>
           
            <li style=margin-bottom:5px> 
            Utilizei <strong>RabbitMQ</strong> para criação de usuário, arquivos, metadados e comunicação. <strong>Goroutine</strong> para executar workers em paralelo. 
            
            </li>
            
            <li style=margin-bottom:5px> 
            Para solução de cache utilizei <strong>Memcached</strong>. Implementei testes com stretchr e <strong>postman/newman</strong> e Github Actions para workflow.  
            </li>   
            
            <li style=margin-bottom:5px> 
            Utilizei na segurança de dados sensíveis Bcrypt para password e <strong>AES</strong> nos demais dados, com <strong>SHA-256</strong> para criar hash de consultas.
            </li>   
            
            <li style=margin-bottom:5px> 
            Para observabilidade utilizei <strong>Prometheus</strong>, <strong>ElasticSearch</strong>, Zerolog e <strong>Logella</strong>. Para gestão das configurações utilizei <strong>Viper</strong>.
            </li>  
       
        
        </ul>  
      
        "
        />,
        description: `     
                                   
            <p>
            Este projeto tem como objetivo desenvolver um sistema robusto para o armazenamento e controle de 
            documentos financeiros. Ele oferece aos clientes e administradores de instituições financeiras a 
            capacidade de fazer upload, gerenciar e recuperar documentos financeiros de forma eficiente.
            </p>           
            <br>     
            <strong>Principais recursos:</strong> 
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
                
                <br> <br>  
                ⇝ <a href="https://github.com/Lucasvmarangoni/financial-file-manager/blob/main/docs/doc-funcional.md" target='_blank'> <u>Documentação funcional</u>.</a>
                <br>  
                ⇝ <a href="https://github.com/Lucasvmarangoni/financial-file-manager/blob/main/docs/registros-de-engenharia-de-software.md" target='_blank'> <u>Resgistros de engenharia de softare</u>.</a>      
                <br> 
                ⇝ <a href="https://github.com/Lucasvmarangoni/financial-file-manager/blob/main/docs/bug-log.md" target='_blank'> <u>Bug Log</u>.</a> Registro de bugs/problemas e suas soluções.
    
                <br>  <br>  
                <strong>Artigos e conteúdo</strong>
                <br>   
                Tenho o hábito de criar meu próprio material durante o estudo. A partir deste projeto, decidi publicá-los.
                <br>   <br> 
                ⇝ <a href="https://medium.com/@lucasvm.ti/desenvolvimento-voltado-para-a-auditoria-em-software-0d15c56bf99c" target='_blank'> <u>Desenvolvimento voltado para a auditoria em Software</u>.</a>
                <br>  
                ⇝ <a href="https://medium.com/@lucasvm.ti/erros-e-logs-4e1fcd79a937" target='_blank'> <u>Como configurar erros e logs corretamente</u>.</a>
    
                <br>  <br>  
                <strong>Bibliotecas </strong>
                <br>  
    
                Bibliotecas e pacotes que criei em razão desse projeto.
                <br>   <br> 
                ⇝ <a href="https://github.com/Lucasvmarangoni/logella" target='_blank'> <u>Logella</u>.</a>
    
                <br>      <br> 
            </p>         
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
    {
        name: 'Logella',
        year: '2024',
        picture: 'logella.png',
        github: 'https://github.com/Lucasvmarangoni/logella',
        version: "1.0.0",
        type: 'lib',
        description: `
        <p className="P">
            Uma biblioteca desenvolvida em Golang para loggers para rotas com Go-Chi e erros customizados. 
            <br>
            Ainda estou aprimorando e acrescentando novos packages e funcionalidades. 
            <br><br>
            <strong>Packages </strong> 
            <br><br>
            <strong>Errors package</strong> <br>
            O pacote Errors é uma package/lib de tratamento de erros personalizada. Sua característica principal é anexar informações de contexto aos erros, permitindo que sejam propagados pela pilha de chamadas. <br>
            Além disso, também possui erros customizados e prontos, como por exemplo 'IsRequiredError' e 'IsInvalidError'.
            <br><br>
            <strong>Router Package</strong> <br>
            O pacote Router é uma package de logs para inicializar rotas que utiliza go-chi.
        </p>        
        `,
        technologies: [
            "Go",
            "Golang",
            "Go-chi",
            "Zerolog",
        ]
    },
]

