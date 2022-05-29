/**
 * Formats a timestamp into a date
 * @param {*} timestamp 
 * @returns date string in the format of dd/mm/yyyy
 */
export const useDateFormatter = (timestamp) => {
    const date = new Date(timestamp);
    if (!isNaN(date.getTime())) {
        const month = date.getMonth() + 1; // Starts at 0 for January
        const dateString = date.getDate() + '/' + month + '/' + date.getFullYear();
        return dateString;
    } else {
        return "";
    }
}