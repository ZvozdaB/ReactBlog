export function sliceText(text,num){
    let lastWord = text.indexOf(" ",num)
    let prevText = text.slice(0, lastWord) + "..."
    return prevText
}