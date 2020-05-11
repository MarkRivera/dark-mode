import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = value => {
    const [isDarkModeOn, setDarkModeOn] = useLocalStorage("isDarkModeOn", value);

    useEffect(() => {
        const appNode = document.querySelector('.App');
        isDarkModeOn ? (
            appNode.classList.add('dark-mode')
        )   :   (
            appNode.classList.remove('dark-mode'))
    }, [isDarkModeOn]);



    return [isDarkModeOn, setDarkModeOn];
}