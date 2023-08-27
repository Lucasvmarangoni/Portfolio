import { pageWidth } from "../../../pages/util/page-width";
import { Motion } from "../../functions/Motion";
import CertificateCarousel from "./components/Certificate-carousel";
import { Community } from "./components/Community";

export function Second() {
    return (
        <div className={"flex flex-wrap justify-center items-center py-8 n2:gap-20 n7:gap-14" + pageWidth}>
            {Motion(1.0, 1.2, <CertificateCarousel />)}
            {Motion(1.0, 1.2, <Community />)}
        </div>
    )
}