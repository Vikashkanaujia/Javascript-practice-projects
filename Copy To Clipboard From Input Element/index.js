let copy = (textId) =>{
    //Select the text in the <input> element
    document.getElementById(textId).select();
    //Copies the selected text to clipboard
    document.execCommand("copy");
}