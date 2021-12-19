const URL = "https://ekreative-json-server.herokuapp.com"

export async function getPostPages(page,limit=10){
    let resp = await fetch(URL + `/posts?_page=${page}&_limit=${limit}`)
    let date = await resp.json();
    return date;
}

// export async function getPostPages(page, limit = 10) {
//     let resp = await fetch(URL + `/posts?_page=${page}&_limit=${limit}`)
//     let date = await resp.json();
//     return date;
// }