import { useState } from 'react';
import { useDarkMode } from './useDarkMode';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // Check if user has values already in localStorage
        const item = localStorage.getItem(key, initialValue);

        // If user has value in localStorage, parse it. If not, use initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }
   
    return [storedValue, setValue];
}