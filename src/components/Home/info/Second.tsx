import { pageWidth } from "../../../pages/util/page-width";
import CertificateCarousel from "./components/Certificate-carousel";
import { Community } from "./components/Community";

export function Second() {
    return (
        <div className={"flex flex-wrap justify-center items-center py-8 n2:gap-20 n7:gap-14" + pageWidth}>
            <CertificateCarousel />  
            <Community />          
        </div>
    )
}