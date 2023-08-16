import axios from "axios";

import {SEARCH_USER_LINK} from "../config";
import { FetchSearchUserResponseType } from '../types';

// -------------------------------------
// Fetch Search User
// -------------------------------------

export function fetchSearchUser (user: string): Promise<FetchSearchUserResponseType> {
    return axios.get(`${SEARCH_USER_LINK}${user}`)
}

// -------------------------------------
