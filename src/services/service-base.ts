export abstract class ServiceBase{
    static API_URL = 'https://fakestoreapi.com';

    static getURL(path:string){
        return `${this.API_URL}${path}`
    }
}