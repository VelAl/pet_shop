


export const getDateFromStamp = (date)=> {
    const day = new Date(date).getDate()
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();

    return `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`
}