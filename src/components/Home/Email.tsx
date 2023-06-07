import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { MOver, MOut, SpanTag, SendObligatoryButton } from "./capa/functions/Obligatory-itens";
import axios from "axios";

export function Email() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event: any) {
        event.preventDefault()
        axios.get("https://lucasvmarangoni.vercel.app/send-mail")
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    throw new Error("Erro na requisição");
                }
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <Dialog.Description className="mt-0 grid gap-4 justify-center">
            <form
                id="form"
                // method="POST"
                // action="https://formsubmit.co/lucasvm.ti@gmail.com"
                target="_blank"
                onSubmit={handleSubmit}
                className="grid row-span-3 gap-3"
            >
                <div className="text-T2 grid gap-2 w-5 ">
                    <label htmlFor="inputName">Nome:</label>
                    <input
                        className="bg-BGH border-[#ffffff0e] border-[0.5px]"
                        id="inputName"
                        name="name"
                        type="text"
                        required
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                    />
                </div>

                <div className="text-T2 grid gap-2 w-5 ">
                    <label className="" htmlFor="inputEmail">
                        Email:
                    </label>
                    <input
                        className="bg-BGH border-[#ffffff0e] border-[0.5px]"
                        id="inputEmail"
                        name="email"
                        type="email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                    />
                </div>

                <div className="text-T2 grid gap-2 w-64">
                    <label className="text-T2" htmlFor="inputMessage">
                        Mensagem:
                    </label>
                    <textarea
                        className="bg-BGH border-[#ffffff0e] border-[0.5px]"
                        id="inputMessage"
                        name="message"
                        required
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        value={message}
                    />
                </div>
            </form>
            <button
                onMouseOver={() => {
                    MOver(email && message);
                }}
                onMouseOut={() => {
                    MOut(email && message);
                }}
                form="form"
                type="submit"
                className="w-64 brightness-150 grid justify-center items-center"
                disabled={!email || !message}

                onClick={() => {
                    alert("Email enviada com sucesso!")
                    const inputName = document.querySelector("#inputName") as HTMLInputElement
                    const inputEmail = document.querySelector("#inputEmail") as HTMLInputElement
                    const inputMessage = document.querySelector("#inputMessage") as HTMLInputElement
                    if (inputName) {
                        inputName.value = "";
                    }

                    if (inputEmail) {
                        inputEmail.value = "";
                    }

                    if (inputMessage) {
                        inputMessage.value = "";
                    }

                }
                }
            >
                <span className={`${SendObligatoryButton}`}>Enviar</span>
                {SpanTag("Email e mensagem obrigatórios!")}
            </button>
        </Dialog.Description>


    )
}