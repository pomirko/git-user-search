import React from 'react'

import {Box, Typography} from "@mui/material";

import SearchButton from "./searchButton";
import SearchField from "./searchField";
import UserContentWrapper from "./userContentWrapper";

const ContentWrapper: React.FC = () => {
    return (
        <Box display='flex' alignItems='center' flexDirection='column'>
            <Typography fontSize={24} lineHeight={2} >
                Search Git User by Nickname
            </Typography>
            <Box maxWidth={400} display='flex' justifyContent='space-between' alignItems='center'>
                <SearchField/>
                <SearchButton/>
            </Box>

            <Box mt={4} borderTop={1} width={1}>
                <UserContentWrapper/>
            </Box>
        </Box>
    )
}

export default ContentWrapper
