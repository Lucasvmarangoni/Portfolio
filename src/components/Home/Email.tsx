import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { MOver, MOut, SpanTag, SendRequiredButton } from "./capa/functions/Required-itens";
import { Motion } from "../functions/Motion";

export function Email() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <Dialog.Description className="mt-0 grid gap-4 justify-center    
        " >
            <form
                id="form"
                method="POST"
                action="https://formsubmit.co/lucasvm.ti@gmail.com"
                target="_blank"
                className="grid row-span-3 gap-3
                "
            >
                {Motion(1.0, 0.5,
                    <div className="text-T2 grid gap-2">
                        <label htmlFor="inputName">Nome:</label>
                        <input
                            className="bg-BGH border-[#ffffff0e] border-[0.5px] "
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
                )}

                {Motion(1.0, 0.6,
                    <div className="text-T2 grid gap-2 ">
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
                )}


                {Motion(1.0, 0.7,
                    <div className="text-T2 grid gap-2">
                        <label className="text-T2" htmlFor="inputMessage">
                            Mensagem:
                        </label>
                        <textarea
                            className="bg-BGH border-[#ffffff0e] border-[0.5px] h-40"
                            id="inputMessage"
                            name="message"
                            required
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            value={message}
                        />
                    </div>
                )}
            </form>

            {Motion(1.0, 0.8,
                <button
                    onMouseOver={() => {
                        MOver(email && message);
                    }}
                    onMouseOut={() => {
                        MOut(email && message);
                    }}
                    form="form"
                    type="submit"
                    className=" grid justify-center items-center"
                    disabled={!email || !message}
                >
                    <span className={`${SendRequiredButton}`}>Enviar</span>
                    {SpanTag("Email e mensagem obrigatórios!")}
                </button>
            )}
        </Dialog.Description>


    )
}