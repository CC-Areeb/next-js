const countryApi = {
    getCountries: async () => {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        const data = await response.json();
        return data;
    },
};

export default countryApi;