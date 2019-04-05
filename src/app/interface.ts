export interface IUser {
  "updatedAt": string,
  "createdAt": string,
  "name": string,
  "email": string,
  "token": string,
}


export interface ILoginFormData{
  email:string,
  password: string,
}

export interface IHeaderData {
  'auth-token'?: string;
  'content-length'?: string;
  'content-type'?: string;
  'cookie'?: string;
  'origin'?: string;
  'referer'?: string;
  'user-agent'?: string;
  'user-access-token'?: string;
  'api-key'?: string;
  'bot-access-token'?: string;
  'token'?: string;
  'x-access-token'?:string,
}



