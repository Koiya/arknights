import axios, {AxiosError} from 'axios';

export default async function fetchData<T>(url: string): Promise<T>{
    if (url){
        try {
            const response = await axios.get<T>(url);
            // console.log(response.data);
            return response.data;
        } catch(error: any){
            if(axios.isAxiosError(error)){
                throw new Error(error.message || 'Failed to fetch data');
            }
            throw new Error('An unexpected error occurred');
        }
    } else {
        throw new Error('URL is required');
    }
}