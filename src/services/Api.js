const URL = "https://ekreative-json-server.herokuapp.com"

export async function fetchPostPages(page,limit=10){
    let resp = await fetch(URL + `/posts?_page=${page}&_limit=${limit}`)
    let lastPage = getLastPage(resp.headers.get("Link"))
    let lastPost = resp.headers.get("X-Total-Count")
    let data = await resp.json();
    return {data, lastPage, lastPost};
}

export async function fetchPostComments(postId) {
    let resp = await fetch(URL + `/comments?postId=${postId}&_sort=createdAt&_order=asc`)
    let date = await resp.json();
    return date;
}

export async function fetchPostById(postId) {
    let resp = await fetch(URL + `/posts/${postId}`)
    let date = await resp.json();
    return date;
}

export async function fetchLogIN(email,
    password){
    let option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ email, password }) 
    }
    let resp = await fetch(URL + "/login", option)
    let data = await resp.json()
}

function getLastPage(Link){
    let linkArr = Link.split(",")
    let link = linkArr[linkArr.length - 1]
    let index = link.indexOf("_page=");
    let last = parseInt(link.slice(index + 6))
    console.log(last);
    return last
}