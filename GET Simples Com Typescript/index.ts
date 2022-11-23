interface IUser {
    avatar: string 
    email: string
    first_name: string
    id: number 
    last_name: string
}
enum StatusCaixa {
    Open = "true",
    Closed = "false"
 }

type Shield = "Roupas" | "Cordas"
type Roda = "Pneu"|"Latão"
interface IApiResponse<T> {
    data: T[]
    page: number
    per_page:number
    support: {
        url: string
        text:string
    }
    total:number
    total_pages: number
    status: IUser | Roda
}
interface INoobUser extends IUser{
    level:number
}
async function GetUsers() {
    const response: Response = await fetch("https://reqres.in/api/users")
    const responseObject: IApiResponse<IUser> = await response.json()
    console.log(responseObject.data[0].first_name)
    const testeObj: IUser = {
        id: 1,
        avatar: "asdadsd",
        email: "thud@thos.com",
        first_name: "Tho",
        last_name: "tud"
    }
}