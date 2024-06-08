import {api} from "~/api";

export const useCountriesStore = defineStore('Countries', () => {

    const countries=ref([]);
    async function fetchCountries(){
        const res = await api.get('/countries');
        countries.value = res.data.countries;


    }
    fetchCountries();
    return {
        countries,
    }
});