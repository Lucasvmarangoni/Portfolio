import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Link } from "react-router-dom";

export const ProblemasSuperados = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Collapsible.Root
            className="CollapsibleRoot"
            open={open}
            onOpenChange={setOpen}
        >
            <div>
                <Collapsible.Trigger className="CollapsibleTrigger">
                    <button className="    
         hTec cursor-pointer"
                    >
                        <h2 className="text-lg">Problemas superados</h2>
                    </button>
                </Collapsible.Trigger>

                <Collapsible.Content className="CollapsibleContent border-b-2 border-[#3b27535b] pb-4">
                    <p className="P">
                        Comecei a anotar a partir desse problemas, por isso, outros que ocorreram antes não estão aqui,
                        mas serão incluídos gradativamente caso eu me recorde.
                    </p>

                    <div className="grid gap-3 mt-2">
                        <div>
                            <h2 className="H2 brightness-200">Réplicas mongodb</h2>
                            <p className="P mt-2">
                                Quando eu criei as réplicas do MongoDB, eu não estava conseguindo conectar a aplicação ao banco.
                                Então tive que colocar a aplicação em um container para ficar na mesma rede que as réplicas.
                                <u>Isso gerou um outro problema</u>.<br></br>

                                A request não concluir dava o máximo de tentativas no erro do mongoose.E aí o problema era simples.
                                O problema era simplesmente que o host do redis, que é usado nas filas do bull, passou a ser o container
                                do redis e não mais a porta 0.0.0.0, como era localmente.
                            </p>
                        </div>


                        <div>
                            <h2 className="H2 brightness-200">Configuração do banco de dados</h2>
                            <p className="P mt-2">
                                O problema foi com as variáveis de ambiente no container do nó primário.
                                Como eu estava usando um arquivo .js para executar os comandos do mongo, direcionando o .sh, não estava conseguindo
                                ter acesso às variáveis de ambiente, acredito que pela falta do dotenv no container, tentei instalar, contudo também resolveu. <br></br>

                                Testei com “echo” para ver se tinha acesso às variáveis no shell, e sim, elas estavam lá. Então tentei de alguma forma enviar
                                essas variáveis para o arquivo .js, mas não consegui. Depois de um bom tempo tentando dessa forma, decidi fazer pelo script
                                do shell. <br></br>

                                Logo em seguida já comecei a ver a sintaxe para fazer o que queria e da forma que queria. Não demorou para conseguir. <br></br>

                                <u>Daí um novo desafio.</u> Criar um banco de dados e atribuir a ele as regras de usuário e fazer isso ser válido para todo o cluster. <br></br>

                                O chatGPT estava só me estressando com respostas inúteis e repetitivas. Então parti para a 
                                <Link className="text-T1 brightness-[3.0]" to="https://www.mongodb.com/docs/manual/reference/method/db.createRole/">- <u>documentação do mongoDB </u></Link>
                                e encontrei a solução. <br></br>

                                Testando e tentando logo percebi que, o único usuário que poderia executar aquele script, atribuindo novas regras a outros usuários,
                                era o “admin”. Então consegui fazer o que queria, criar o usuário, a regra de permissão e atribuir a ele, sendo aplicado a todo o
                                cluster de réplicas. <u>Funcionou</u>! <br></br>
                            </p>                            
                        </div>
                    </div>




                </Collapsible.Content>
            </div>
        </Collapsible.Root>
    );
};
