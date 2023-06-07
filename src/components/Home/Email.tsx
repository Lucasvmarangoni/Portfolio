import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { MOver, MOut, SpanTag, SendObligatoryButton } from "./capa/functions/Obligatory-itens";

export function Email() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    return (
        <Dialog.Description className="mt-0">
            <div className="grid gap-4 justify-center">
                <form
                    id="form"
                    method="POST"
                    action="https://formsubmit.co/lucasvm.ti@gmail.com"
                    target="_blank"
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
                        <label className="text-T2" htmlFor="inputDescription">
                            Mensagem:
                        </label>
                        <textarea
                            className="bg-BGH border-[#ffffff0e] border-[0.5px]"
                            id="inputDescription"
                            name="description"
                            required
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            value={description}
                        />
                    </div>
                </form>
                <button
                    onMouseOver={() => {
                        MOver(email && description);
                    }}
                    onMouseOut={() => {
                        MOut(email && description);
                    }}
                    form="form"
                    type="submit"
                    className="w-64 brightness-150 grid justify-center items-center"
                    disabled={!email || !description}

                    onClick={(event) => {
                        alert("Email enviada com sucesso!")
                        const inputName = document.querySelector("#inputName") as HTMLInputElement
                        const inputEmail = document.querySelector("#inputEmail") as HTMLInputElement
                        const inputDescription = document.querySelector("#inputDescription") as HTMLInputElement
                        if (inputName) {
                            inputName.value = "";
                        }

                        if (inputEmail) {
                            inputEmail.value = "";                                                
                        }

                        if (inputDescription) {
                            inputDescription.value = "";
                        }
                        event.preventDefault()

                    }
                    }
                >
                    <span className={`${SendObligatoryButton}`}>Enviar</span>
                    {SpanTag("Email e mensagem obrigatórios!")}
                </button>
            </div>
        </Dialog.Description>


    )
}