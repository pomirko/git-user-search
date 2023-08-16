import React, {useMemo} from "react";

import {Button} from "@mui/material";

import {useSearchUser} from "../hooks";

const SearchButton: React.FC = () => {
    const { handleClickSearchButton } = useSearchUser();

    return useMemo(() =>
        <Button variant='outlined' sx={{ width: 105, height: 32 }} onClick={handleClickSearchButton}>
            Search
        </Button>,
        [handleClickSearchButton]
    )
}

export default SearchButton
