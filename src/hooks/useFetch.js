import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                setData(data);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
            })
    }, [url])

    return { data, isLoading, error };
}