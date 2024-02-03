import { useContext, useRef } from "react";
import InputLogoCircle from "../../../components/AddAccount/InputLogoCircle";
import CircularTopWithLogo from "../../../components/shared/CircularTopWithLogo";
import { AuthContext } from "../../../providers/AuthProvider";
import AddAccountForm from "../../../components/AddAccount/AddAccountForm";

const AddAccount = () => {
    const { logo } = useContext(AuthContext);
    const uploadingPhotoRef = useRef();
    
    return (
        <div className="space-y-12">
            <CircularTopWithLogo color={'#28C2A0'} height={21} zIndex={9990} isSticky >
                <InputLogoCircle logo={logo} width={`w-[135px] md:w-[157px] lg:w-[195px]`} height={`h-[135px] md:h-[157px] lg:h-[195px]`} padding={1} borderWidth={5} borderColor={'#28C2A0'} photoRef={uploadingPhotoRef} logoUp logoUpMarginTop={`-mt-[67.5px] md:-mt-[77.5px] lg:-mt-[97.5px]`} />
            </CircularTopWithLogo>

            {/* add new account form */}
            <AddAccountForm studentPhotoRef={uploadingPhotoRef} />
        </div>
    );
};

export default AddAccount;