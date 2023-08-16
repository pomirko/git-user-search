import { useContext } from 'react';

import { SearchUserContext } from '../Context';

const useSearchUser = () => useContext(SearchUserContext);

export default useSearchUser
