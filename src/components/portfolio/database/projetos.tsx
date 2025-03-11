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
        picture: '/portfolio.svg',
        github: 'https://github.com/Lucasvmarangoni/Portfolio',
        version: '1.11.20',
        type: 'personal',
        description: `
        <p className="P">
        Web project developed for my personal presentation and showcasing of my personal projects as a software developer.      
        </p>        
        `,
        // extra: <PortDica />,
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
        picture: '/paiva.svg',
        github: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t2-grupo-2-paiva-moto-pecas',
        version: undefined,
        type: 'team',
        resume: <Resume content="
       
        <p style=margin-bottom:5px>Web application for an auto shop e-commerce. Developed by a <strong>team of six people.</p>       
        <li style=margin-bottom:5px>I was responsible for the 'Store Items' page, the database structure, and the deployment using GitHub Actions on GitHub Pages.</li>
        <li style=margin-bottom:5px>Agile methodologies were used, with Scrum chosen as the basis for defining the development process.</li>
       

        " />,
        description: `
            <p>Developed as part of the Systems Analysis and Development degree at PUC Minas.</p>  

            <p> --> Highlight project, selected for project showcase.
            (<a href="https://drive.google.com/file/d/1u7hjS-7rjUqSV7P5de0BMzox_XZPA2SJ/view?usp=sharing" target="_blank"><u>Certificado</u> </a> -
            <a href="https://youtu.be/vE4thVxtfiE?t=1283" target="_blank"><u>Showcase</u></a>) 
            </p>                

            <p>
            The project was developed by a team of six people. It is a web application responsible for promoting the products and services of Paiva Moto Peças.
            </p>           

            <p>
            I was personally responsible for the "Store Items" page, the database structure, and the deployment. 
            I created a filter integrated with the search bar and the toggle between the products and services sections.
            </p>

            <strong>Team Members:</strong>  
            <p>  
            Alessandra Santos, Enzo Moura, Ingrid Barros, Karina Barbosa, Lucas Vazzoller Marangoni, Paloma Rizzon.  
            </p>
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
        picture: '/tasklist.svg',
        video: "/tasklist-demo.mp4",
        github: 'https://github.com/Lucasvmarangoni/TaskList',
        version: '2.1.0',
        type: 'personal',
        resume: <Resume content="

    <p style=margin-bottom:5px>REST API for a task list application, developed with <strong>Express</strong>, <strong>TypeScript</strong>, and <strong>Prisma</strong>, applying <strong>TDD</strong> and <strong>DDD</strong> principles.</p>
    <li style=margin-bottom:5px>I used the <strong>Overnight.js</strong> library in the controllers with authn <strong>JWT</strong> with <strong>Bcrypt</strong> and <strong>Express rate limit</strong>. It has <strong>OpenAPI</strong> documentation with Swagger.</li>
    <li style=margin-bottom:5px>For persistence, I used <strong>MongoDB</strong> and <strong>Node cache</strong>. I applied validations, handled exceptions, and logs with <strong>Pino</strong>. I implemented <strong>Graceful shutdown</strong>.</li>
    <li style=margin-bottom:5px>Automated tests with <strong>Vitest</strong> and <strong>Supertest</strong> using <strong>in memory database</strong> and <strong>mocks</strong>. I used <strong>GitHub Actions</strong> for the workflow.</li>


        " />,
        description: `
       <p style="font-size:16px">
    - The video is a demonstration of requests and responses in Insomnia and the documentation. <br> 
    - The images are screenshots of relevant parts of the code. <br>
    - The tests can be checked through the workflow in the project's repository on my GitHub.       
    </p>      
    <p className="P mt-4">
        The project is a REST API to serve a task list application, with the functions to create, query (in various ways), update, and delete tasks. It also includes a notification system and trash bin. 
        It was developed with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>TypeScript</strong>, using the ORM <strong>Prisma Studio</strong> with <strong>mongoDB</strong> (Atlas), and for testing, the <strong>Vitest</strong> framework.             
    </p> 
    <p className="P mt-4">
        - The trash bin was created by creating a new collection to store deleted tasks.        
    </p>
    <p className="P mt-4">
        It was developed following DDD and TDD principles, with unit and e2e tests, as well as validations. Exception handling, status codes, logging, rate limiting, caching, graceful shutdown, OpenAPI documentation, workflow, and authentication (local) were also implemented.      
    </p>
    <p className="P mt-4">
        I used in-memory database design patterns, factory pattern, singleton, dependency inversion, and SOLID principles.  
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
        picture: '/currency-converter.svg',
        video: 'currency-converter-demo.mp4',
        github: 'https://github.com/Lucasvmarangoni/currency-converter',
        version: '1.1.0',
        type: 'personal',
        resume: <Resume content="
       
        <p style=margin-bottom:5px> API for currency exchange consuming <strong>Exchangerates API</strong>. Developed with <strong>Nest</strong>, <strong>Mongoose</strong>, <strong>Docker</strong>, and <strong>modular architecture</strong>.</p>
        <li style=margin-bottom:5px>I used strict TypeScript configuration and management with Nest ConfigModule. Swagger for <strong>doc.OpenAPI</strong> and tests with <strong>Jest</strong> and <strong>Supertest</strong>.</li>
        <li style=margin-bottom:5px> I used <strong>Bull</strong> for queues in user creation and local authn, and <strong>OAuth</strong> with <strong>Passport</strong>. I created a <strong>replica set cluster and mongodb arbiter</strong>.</li>
        <li style=margin-bottom:5px>I implemented logs with <strong>Pino</strong> as well as exceptions and rate limit for Nest modules. For the caching system, I used <strong>Redis</strong> and <strong>Redis Cloud</strong>.</li>

        "
        />,
        extra: <NotaCurrency />,
        description: `   
            <p style="font-size:16px">
            - The video is a demonstration of the requests and responses in Postman and the documentation. (Video version 1.0.0) <br>

            - The images are screenshots of relevant parts of the code. <br>

            - The tests can be verified through the workflow in the project's repository on my GitHub. <br>       
            </p>  

            <p>The project is a REST API for currency conversion consuming the Exchangerates API, developed with <strong>Nest.js</strong>, using <strong>monolithic modular</strong> architecture. It includes unit, integration, and e2e tests, exception handling, logs, caching, OpenAPI documentation, local authentication system, and OAuth (Google).</p>              

            <p>
            - The communication between modules and data persistence is done through messaging queues with Bull. <br>
            - For the database, a replica set was created with a primary node, a secondary copy, and an arbiter. <br>
            - The request can be made using any valid currency as the base (from). <br>
            - In the same request, you can request conversion to as many currencies as desired. <br>
            - The user can authenticate (locally) through the same route (URL), using username or email. <br>
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
        year: 'Nov 2023 - Interrompido',
        picture: '/doc-financeiros.svg',
        // video: 'currency-converter-demo.mp4',
        github: 'https://github.com/Lucasvmarangoni/financial-file-manager',
        version: '1.0.0',
        type: 'personal',
        situation: <Maintenance title="PROJECT INTERRUPTED" content="    
        
        <strong>Interrupted</strong> <br><br>        

        The development of the project was interrupted as I am dedicating myself to another project, 
        developed with closed source code. 
        
        At this moment, I have no intention of making changes to the code of this project; 
        however, I can make updates to the Software Engineering Records, pointing out corrections and changes 
        to decisions I made in the project's engineering.

        <br>
        
        "
        />,
        resume: <Resume content="      
        <p style=margin-bottom:5px>
            System for controlling financial documents, developed with <strong>Golang</strong>, <strong>CockRoachDB</strong>, <strong>Docker</strong>. Before interruption:
        </p>     

        <li style=margin-bottom:5px>            
            I created requirement documentation, software engineering documentation, bug log, and project board, and <strong>I still update them</strong>.
        </li>
        <li style=margin-bottom:5px>            
            API Rest with <strong>Go-chi</strong> for JWT authn, with <strong>2FA</strong> and access control using <strong>Casbin</strong>, and configuration management with <strong>Viper</strong>.
        </li>
        <li style=margin-bottom:5px> 
            I implemented a <strong>rate-limiter</strong> by IP and user. I used <strong>nginx</strong> for <strong>reverse proxy</strong> and <strong>load balancing</strong> and Coraza as <strong>WAF</strong>.
        </li>

        <li style=margin-bottom:5px> 
            <strong>RabbitMQ</strong> as a queue in user creation with multiple <strong>Goroutines</strong>. For observability, I used <strong>Prometheus</strong>, Zerolog, and <strong>Logella</strong>.
        </li>   

        <li style=margin-bottom:5px> 
            For caching, I used <strong>Memcached</strong>. I implemented unit tests with stretchr and e2e with <strong>postman/newman</strong>.
        </li>
        "
        />,
        description: `     
                                   
          <p>
            This project aims to develop a robust system for storing and managing financial documents. It provides financial institution clients and administrators the ability to upload, manage, and retrieve financial documents efficiently.
        </p>           
        <br>     
        <strong>Main features:</strong> 
        <p>
            <strong>- Documents</strong>: Documents are initially stored locally on the server and later transferred to a cloud storage service. A requirement is to keep document versions to view its history.
            <br>  
            <strong>- Queries</strong>: Each document is accompanied by metadata, including name, date, document type, and information related to financial transactions.
            <br>  
            <strong>- Security</strong>: The system maintains a high level of security and access control, in addition to observability and activity logging for auditing purposes.
            <br>   
            <strong>- Resilience</strong>: The system should be designed to minimize the impact of failures and ensure that operations can resume as quickly as possible after a failure.  
            <br> <br>  
            ⇝ <a href="https://github.com/Lucasvmarangoni/financial-file-manager/blob/main/docs/doc-funcional.md" target='_blank'> <u>Functional Documentation</u>.</a>
            <br>  
            ⇝ <a href="https://github.com/Lucasvmarangoni/financial-file-manager/blob/main/docs/registros-de-engenharia-de-software.md" target='_blank'> <u>Software Engineering Documentation</u>.</a>      
            <br> 
            ⇝ <a href="https://github.com/Lucasvmarangoni/financial-file-manager/blob/main/docs/bug-log.md" target='_blank'> <u>Bug Log</u>.</a> Bug/problems log and their solutions.
            <br>  <br>  
            <strong>Libraries </strong>
            <br>  
            Libraries and packages I created for this project.
            <br>   <br> 
            ⇝ <a href="https://github.com/Lucasvmarangoni/logella" target='_blank'> <u>Logella</u>.</a>
            <br>      <br> 
        </p> 
     
        `,
        technologies: [
            "Go",
            "Golang",
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
        picture: 'logella.svg',
        github: 'https://github.com/Lucasvmarangoni/logella',
        version: "1.5.9",
        type: 'library',
        resume: <Resume content=" 
       <p>
            A simple and minimalist <strong>Golang</strong> library for observability and security with logs and exception handling.
        </p>        

        <li>
            <strong>Logger</strong>, log configurations using <strong>Zerolog</strong>; <strong>Router</strong>, logs with the initialization of routes using <strong>Go-chi</strong>.
        </li>   

        <li>
            <strong>Errs</strong>, call trace separated from the error, propagates the HTTP status, client response features, and more.
        </li>  
        "
        />,
        description: `
        <p className="P">
            A library developed in Golang with the main objective of loggers for routes with Go-Chi and error handling.
            
            <br><br>
            <strong>Packages </strong> 
            <br><br>
            <strong>Logger package</strong> <br>
            This package defines log configurations (zerolog). It allows the use of default or custom color configurations.
            <br><br>
            <strong>Errors package</strong> <br>
            The Errs package is an error handling library. Its main feature is attaching trace information to errors, allowing them to propagate through the call stack. <br>
            In addition, it also has ready-made custom errors, such as 'IsRequiredError' and 'IsInvalidError'.
            <br><br>
            <strong>Router Package</strong> <br>
            The Router package is a logging package for initializing routes using go-chi.
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

