import axios from "axios";

const url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

export const fetchData = async () => {
    const {data} = await axios(url)
    return data;
}