export function capitalizeFirstWord(str) {
    if (typeof str !== 'string') {
        return str
    }

    if (str.length === 0) {
        return ''; // Return an empty string if the input is empty
    }

    // Capitalize the first letter and make the rest lowercase
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}