import axios from "axios";
import { title } from "process";
interface FullAlbum {
    userId:number;
    id: number;
    title:string;
    photos: photos[]
}
interface albums {
    userId:number;
    id: number;
    title:string;
}
interface photos{
    albumId:number;
    id:number;
    title:string;
    url: string;
    thumbnailUrl :string;
}
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

export async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>{
    try{
        if(userIds===undefined){
            return [];
        }
        const resal = await axios.get<albums[]>(ALBUMS_URL);
        const respho = await axios.get<photos[]>(PHOTOS_URL);
        const album = resal.data;
        const photo = respho.data;
        const result = album.map((album)=>({
            userId: album.userId,
            id: album.id,
            title: album.title,
            photos: photo.map((photo)=>({
                
            }))
        }));
        return result;
    }catch(error){
        return [];
    }
}