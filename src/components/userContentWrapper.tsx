import React, {useMemo} from "react";

import {Typography} from "@mui/material";

import {useSearchUser} from "../hooks";
import UserBlock from "./userBlock";

const UserContentWrapper: React.FC = () => {
    const { isLoading } = useSearchUser();

    return useMemo(() => !isLoading
                ? <UserBlock/>
                : <Typography mt={2} fontSize={18} textAlign='center'>Loading...</Typography>,
        [isLoading]
    )
}

export default UserContentWrapper
