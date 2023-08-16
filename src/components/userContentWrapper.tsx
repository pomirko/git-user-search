import React, {useMemo} from "react";

import { Image }  from 'mui-image';
import {Box, Typography} from "@mui/material";

import {useSearchUser} from "../hooks";

const UserContentWrapper: React.FC = () => {
    const { user } = useSearchUser();

    return useMemo(() =>
        user !== undefined ?
                <Box display='flex' justifyContent='space-between' alignItems='center' py={2} px={3} bgcolor={'aliceblue'}>
                    <Image src={user.avatar_url} duration={0} width={36} height={36} style={{ borderRadius: 24 }} alt='avatar'/>
                    <Typography ml={1}>login: {user.login}</Typography>
                    <Typography>{user.bio ? user.bio : 'bio is empty'}</Typography>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        <Typography color='black'>
                            {user.html_url}
                        </Typography>
                    </a>
                </Box>
            : <Typography mt={2} fontSize={18} textAlign='center'> User data is empty </Typography>,
        [user]
    )
}

export default UserContentWrapper
