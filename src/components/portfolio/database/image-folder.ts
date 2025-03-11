import { ImagesProps } from "../../Home/info/components/images-carrosel";
export const cc: ImagesProps[] = [
    {
        src: '/currency-converter-images/cc-bootstrap.png',
        title: 'Bootstrap - main',
        description: 'The main file of the project, responsible for initialization.',
    },
    {
        src: '/currency-converter-images/cc-config.png',
        title: 'ConfigModule',
        description: 'Module responsible for managing environment variables.',
    },
    {
        src: '/currency-converter-images/cc-controller-converter.png',
        title: 'Controller - converter',
        description: 'Screenshot of the converter route. The route responsible for performing the conversion.',
    },
    {
        src: '/currency-converter-images/cc-converter-service.png',
        title: 'Service - Converter',
        description: 'Service class responsible for converting currencies.',
    },
    {
        src: '/currency-converter-images/cc-cache.png',
        title: 'CacheModule',
        description: 'Module responsible for configuring the cache, using Redis with Redis Cloud.',
    },    
    {
        src: '/currency-converter-images/cc-update-service.png',
        title: 'Service - update user',
        description: 'Service class responsible for updating the user information.',
    },
    {
        src: '/currency-converter-images/cc-middleware.png',
        title: 'Middleware - IdentifyFieldMiddleware',
        description: 'Middleware responsible for allowing authentication using either username or email, via the same route.',
    },
    {
        src: '/currency-converter-images/cc-login-validation.png',
        title: 'Middleware - LoginValidationMiddleware',
        description: 'Middleware responsible for validating the user data during authentication, before querying the database.',
    },
    {
        src: '/currency-converter-images/cc-swagger.png',
        title: 'Swagger',
        description: 'Function responsible for configuring Swagger.',
    },
    {
        src: '/currency-converter-images/cc-folders.png',
        title: 'Folder structure',
        description: 'An example of the folder organization structure, in this case, the user module domain.',
    },     
    {
        src: '/currency-converter-images/cc-tsconfig.png',
        title: 'Tsconfig',
        description: 'TypeScript configurations for the project.',
    },
    {
        src: '/currency-converter-images/cc-script.png',
        title: 'Database config script',
        description: 'This script configures the replica cluster and creates user rules and the user for authenticated database access.',
    },
];

export const tl: ImagesProps[] = [
    {
        src: '/tasklist/tl-index.png',
        title: 'Bootstrap - (index - main)',
        description: 'Index (main) file of the application, responsible for managing initialization and shutdown.',
    },
    {
        src: '/tasklist/tl-setup.png',
        title: 'SetupServer',
        description: 'Class responsible for managing the entire application.',
    },
    {
        src: '/tasklist/tl-base-1.png',
        title: 'BaseController (exceptions manager)',
        description: 'Class responsible for centralizing and managing exceptions.',
    },
    {
        src: '/tasklist/tl-base-2.png',
        title: 'BaseController (exceptions manager)',
        description: 'Class responsible for centralizing and managing exceptions.',
    },
    {
        src: '/tasklist/tl-cache.png',
        title: 'Cache',
        description: 'Class responsible for abstraction and configuration of the cache.',
    },
    {
        src: '/tasklist/tl-swagger.png',
        title: 'Swagger',
        description: 'Central configuration for the documentation with Swagger.',
    },
    {
        src: '/tasklist/tl-controller.png',
        title: 'Controller - Manage Tasks',
        description: 'Controller responsible for routes to create and update tasks.',
    },
    {
        src: '/tasklist/tl-ratelimiter.png',
        title: 'Rate Limiter',
        description: 'Class responsible for configuring the rate limiter.',
    },
    {
        src: '/tasklist/tl-service-delete-task.png',
        title: 'Service - Delete task',
        description: 'Service responsible for deleting a single task.',
    },
    {
        src: '/tasklist/tl-service-update-user.png',
        title: 'Service - update task',
        description: 'Service responsible for updating a task.',
    },
];
export const pmp: ImagesProps[] = [
    {
        src: '/pmp/pmp-main.png',
        title: 'Main',
        description: 'File where all functions of the "store items" page are centralized.',
    },
    {
        src: '/pmp/pmp-options.png',
        title: 'Get Options',
        description: 'File where data is collected to serve the function of listing filters and others.',
    },
    {
        src: '/pmp/pmp-list-options.png',
        title: 'List Options',
        description: 'Function responsible for dynamically listing the filter options.',
    },
    {
        src: '/pmp/pmp-responsive-position.png',
        title: 'Responsive filter',
        description: 'Code snippet responsible for the responsiveness of the filter on smaller screens. Specifically, it regulates the positioning when the filter is open.',
    },
    {
        src: '/pmp/pmp-page.png',
        title: 'Page "Store Items"',
        description: 'Screenshot of the "Store Items" page. Access the site by clicking on the "Demo" icon.',
    },

];
