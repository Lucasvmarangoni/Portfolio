import { pageWidth } from "../../../pages/util/page-width";
import { PerfilTesting } from "./components/Perfil-testing";

export function Third() {
    return (
        <div className={"flex flex-wrap justify-center items-center py-16" + pageWidth
         }>
            <PerfilTesting />
        </div>
    )
}