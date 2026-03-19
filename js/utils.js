export function salvarLocalStorageArray(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}


export function salvarVariavelLS(key, value){
    localStorage.setItem(key, value);
}