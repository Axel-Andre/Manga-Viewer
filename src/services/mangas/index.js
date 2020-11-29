import { axiosInstance as axios } from '../../config';
import { paths } from './constants.json'

export class MangaService {

    async getSome(pageNumber = 1, numberOfItems = 15) {
        
        try {
            const params = new URLSearchParams();
            params.set("page[limit]", numberOfItems)
            params.set("page[offset]", ((numberOfItems * pageNumber) - numberOfItems));
            
            const { data } = await axios.get( paths.GET_SOME + params.toString());
            return data.data;
        } catch (err) {
            console.error(err);
        }
    }
    async getOne(id){
        try {
            const { data } = await axios.get(paths.GET_ONE + id);
            return data.data;
        } catch (err) {
            console.error(err);
        }
    }
    async searchSome(text, maxResults = 5){
        try {
            const { data } = await axios.get(paths.SEACH_SOME + `?filter[text]=${text}&page[limit]=${maxResults}`);
            return data.data;
        } catch (err) {
            console.error(err);
        }
    }

}