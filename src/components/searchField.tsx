import React, {useMemo} from 'react'

import {Input} from "@mui/material";

import {useSearchUser} from "../hooks";

const SearchField: React.FC = () => {
    const { handleInputChange } = useSearchUser();

    return useMemo(() => <Input className='search__field' onChange={handleInputChange} sx={{ mr: 2 }} />, [handleInputChange])
}

export default SearchField
