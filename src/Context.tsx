import React, {useCallback, useMemo, useState} from 'react';

import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {fetchSearchUser} from "./api";
import {User} from "./types";

type SearchUserContextType = {
    searchValue: string;
    user: User | undefined;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClickSearchButton: () => void;
};

type SearchUserProviderProps = {
    children: React.ReactNode;
}

export const SearchUserContext = React.createContext<SearchUserContextType>(null as any);

const SearchUserProvider: React.FC<SearchUserProviderProps> = ({ children }) => {

    const [searchValue, setSearchValue] = useState('');
    const [user, setUser] = useState<User | undefined>(undefined);

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue((event.target as HTMLInputElement).value);
    }, [])

    const handleClickSearchButton = useCallback(() => {
        if (searchValue === '') return toast.info("You should write nickname")
        fetchSearchUser(searchValue)
            .then(res => setUser(res.data))
            .catch(() => {
                setUser(undefined);
                toast.info("We can't find user...")
            })
    }, [searchValue])

    const contextValue = useMemo(() => ({
        searchValue,
        user,
        setSearchValue,
        handleInputChange,
        handleClickSearchButton,
    }), [
        searchValue,
        user,
        setSearchValue,
        handleInputChange,
        handleClickSearchButton
    ])

    return (
        <SearchUserContext.Provider value={contextValue}>
            {children}
        </SearchUserContext.Provider>
    );
};

export default SearchUserProvider;
