
export function getDate(updatedAt){
    let monthsArr = ["Jan.","Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]
    let date = new Date(updatedAt)
    let mounth = date.getMonth()
    let year = date.getFullYear()
    let day = date.getDate()
    return `${monthsArr[mounth]}${day}.${year}`
}