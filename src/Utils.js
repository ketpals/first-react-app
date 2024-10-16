export const IsArray = (arr) => {
    if (arr !== undefined && arr != null && arr.Length > 0) {
        return true;
    }
    return false;
}

export const showsmess = (message) => {
    console.log(message);
}