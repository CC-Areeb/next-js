import countryApi from '@/api/endpoints/country';
import React, { useEffect, useState } from 'react';

export default function Select() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await countryApi.getCountries();
            if (response.error === false) {
                const countriesData = response.data;
                console.log(countriesData);
                setCountries(countriesData);
            } else {
                console.error('Error fetching countries:', response.msg);
            }
        };

        fetchCountries();
    }, []);

    return (
        <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option value="" disabled defaultValue>
                Choose a country
            </option>
            {countries.map((country, index) => (
                <optgroup key={index} label={country.country}>
                    {country.cities.map((city, cityIndex) => (
                        <option key={cityIndex} value={city}>
                            {city}
                        </option>
                    ))}
                </optgroup>
            ))}
        </select>
    );
}
