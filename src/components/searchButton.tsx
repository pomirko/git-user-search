import React, {useMemo} from "react";

import {Button} from "@mui/material";

import {useSearchUser} from "../hooks";

const SearchButton: React.FC = () => {
    const { handleClickSearchButton, isLoading } = useSearchUser();

    return useMemo(() =>
        <Button
            variant='outlined'
            sx={{ width: 105, height: 32 }}
            onClick={handleClickSearchButton}
            disabled={isLoading}
        >
            Search
        </Button>,
        [handleClickSearchButton, isLoading]
    )
}

export default SearchButton
