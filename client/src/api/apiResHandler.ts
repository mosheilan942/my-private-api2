import { log } from "console";

const handleApiRes = async (res: Response) => {
    const data = await res.json();
    console.log('this data',data);
    if (!res.ok)
        throw new Error(data.message);
    return data;
}

export default handleApiRes;