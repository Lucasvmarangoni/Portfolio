import { ImagesProps } from "../../Home/info/components/images-carrosel";

export const cc: ImagesProps[] = [
    {
        src: '/currency-converter-images/cc-bootstrap.png',
        title: 'Bootstrap - main',
        description: 'O arquivo main do projeto, responsável pela inicialização.',
    },
    {
        src: '/currency-converter-images/cc-config.png',
        title: 'ConfigModule',
        description: 'Modulo responsável pelo gerenciamento das variáveis de ambiente.',
    },
    {
        src: '/currency-converter-images/cc-controller-converter.png',
        title: 'Controller - converter',
        description: 'Print da rota converter. Rota responsável em realizar a conversão.',
    },
    {
        src: '/currency-converter-images/cc-converter-service.png',
        title: 'Service - Converter',
        description: 'Classe do service responsável pela conversão das moedas.',
    },
    {
        src: '/currency-converter-images/cc-cache.png',
        title: 'CacheModule',
        description: 'Modulo responsável pela configuração do cache, utilizando redis com redis cloud.',
    },    
    {
        src: '/currency-converter-images/cc-update-service.png',
        title: 'Service - update user',
        description: 'Class do service responsável por realizar o update das informações do usuário.',
    },
    {
        src: '/currency-converter-images/cc-middleware.png',
        title: 'Middleware - IdentifyFieldMiddleware',
        description: 'Middleware responsável por permitir a authenticação utilizando username ou email, pela mesma rota.',
    },
    {
        src: '/currency-converter-images/cc-login-validation.png',
        title: 'Middleware - LoginValidationMiddleware',
        description: 'Middleware responsável por validar os dados do usuário, na autenticação, antes da consulta ao banco de dados.',
    },
    {
        src: '/currency-converter-images/cc-swagger.png',
        title: 'Swagger',
        description: 'Function responsável pela configuração do swagger.',
    },
    {
        src: '/currency-converter-images/cc-folders.png',
        title: 'Estrutura de pastas',
        description: 'Um exemplo da estrutura de organização das pastas, no caso, do domínio do modulo user.',
    },     
    {
        src: '/currency-converter-images/cc-tsconfig.png',
        title: 'Tsconfig',
        description: 'Configurações do TypeScript no projeto.',
    },
    {
        src: '/currency-converter-images/cc-script.png',
        title: 'Script de config do banco de dados',
        description: 'Esse script configura o cluster de replicas e cria as regras de usuário e o usuário para acesso ao banco de forma autenticada.',
    },
];

export const tl: ImagesProps[] = [
    {
        src: '/tasklist/tl-index.png',
        title: 'Bootstrap - (index - main)',
        description: 'Arquivo index (main) da aplicação, responsável pelo gerenciamento da inicialização e encerramento.',
    },
    {
        src: '/tasklist/tl-setup.png',
        title: 'SetupServer',
        description: 'Class responsável pelo gerenciamento de toda a aplicação.',
    },
    {
        src: '/tasklist/tl-base-1.png',
        title: 'BaseController (exceptions manager)',
        description: 'Class responsável pela centralização e gerenciamento das exceções.',
    },
    {
        src: '/tasklist/tl-base-2.png',
        title: 'BaseController (exceptions manager)',
        description: 'Class responsável pela centralização e gerenciamento das exceções.',
    },
    {
        src: '/tasklist/tl-cache.png',
        title: 'Cache',
        description: 'Class responsável pela abstração e configuração do cache.',
    },
    {
        src: '/tasklist/tl-swagger.png',
        title: 'Swagger',
        description: 'Configuração central da documentação com swagger.',
    },
    {
        src: '/tasklist/tl-controller.png',
        title: 'Controller - Manage Tasks',
        description: 'Controller responsável pelas rotas de criação e update das tasks.',
    },
    {
        src: '/tasklist/tl-ratelimiter.png',
        title: 'Rate Limiter',
        description: 'Class responsável pela configuração do rater limiter.',
    },
    {
        src: '/tasklist/tl-service-delete-task.png',
        title: 'Service - Delete task',
        description: 'Service responsável por deletar uma única task.',
    },
    {
        src: '/tasklist/tl-service-update-user.png',
        title: 'Service - update task',
        description: 'Service responsável pelo update de uma task.',
    },
];

export const pmp: ImagesProps[] = [
    {
        src: '/pmp/pmp-main.png',
        title: 'Main',
        description: 'Arquivo onde é centralizado todas as funções da pagina "itens da loja".',
    },
    {
        src: '/pmp/pmp-options.png',
        title: 'Get Options',
        description: 'Arquivo onde é feita a coleta dos dados para servir a função de listar os filtros e outras.',
    },
    {
        src: '/pmp/pmp-list-options.png',
        title: 'List Options',
        description: 'Função responsável por listar as opções do filtro de forma dinâmica.',
    },
    {
        src: '/pmp/pmp-responsive-position.png',
        title: 'Responsive filter',
        description: 'Trecho do código responsável pela responsividade do filter em telas menores. Especificamente regula ele o posicionamento quando o filter está aberto.',
    },
    {
        src: '/pmp/pmp-page.png',
        title: 'Pagina "Itens da loja"',
        description: 'Print da página "Itens da loja". Acesse o site clicando no icon "Demo".',
    },

];