import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

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
                    form="form"
                    type="submit"
                    className="bg-BGB w-64 font-semibold py-2 text-base setinha hover:after:right-[103px] hover:opacity-70 brightness-150"
                    disabled={!email || !description}

                >
                    Enviar
                </button>
            </div>
        </Dialog.Description>


    )
}