const URL = "https://ekreative-json-server.herokuapp.com"

export async function getPostPages(page,limit=10){
    let resp = await fetch(URL + `/posts?_page=${page}&_limit=${limit}`)
    let linkArr = resp.headers.get("Link").split(",")
    let link = linkArr[linkArr.length - 1]
    let index = link.indexOf("_page=");
    let last = parseInt( link.slice(index + 6))

    console.log(last);
    let date = await resp.json();
    return date;
}

export async function getPostComments(postId) {
    let resp = await fetch(URL + `/comments?postId=${postId}&_sort=createdAt&_order=asc`)
    let date = await resp.json();
    return date;
}

export async function getPostById(postId) {
    let resp = await fetch(URL + `/posts/${postId}`)
    let date = await resp.json();
    return date;
}