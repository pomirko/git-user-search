export type FetchSearchUserResponseType = {
    config: any;
    data: User;
    headers: any;
    request: any;
    status: number;
    statusText: string;
}

export type User = {
    avatar_url:string;
    bio: string | null;
    id: number;
    login: string;
    html_url: string;
}
