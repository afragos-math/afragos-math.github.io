function copy(copytxt) {
    
    var range = document.createRange();
    var inp = copytxt.previousElementSibling;
    const content = copytxt.nextElementSibling;
    
    range.selectNode(content)
    window.getSelection().removeAllRanges();    // clear selection
    window.getSelection().addRange(range);      // select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();    // deselect
    
    copytxt.innerHTML = 'Copied!';
    
    setTimeout( () => {copytxt.innerHTML = 'Copy';}, 1500);     // WAIT
    
}
