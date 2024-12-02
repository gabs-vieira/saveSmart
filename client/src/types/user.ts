export interface userData{
    username: string;
    email: string;
    password: string;
}
export interface loginData{
    username: string;
    password: string;
}

export interface TransactionData {
    id: number;
    data: string;
    value: number;
    desc: string;
    type: boolean;
    method: string;
  }