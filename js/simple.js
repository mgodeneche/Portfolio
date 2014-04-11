/**
 * Created by User on 06/04/14.
 */
function changeVisibility(id){
    var elem = document.getElementById(id);
    var status = elem.getAttribute("style","display");
    if(status=="display: inline;"){
        elem.setAttribute("style","display: none;");
    }else{
        elem.setAttribute("style","display: inline;");
    }
}
/*
document.getElementById('#cw').onclick(changeVisibility('descCW'));
*/


$(document).on('click', '#cw', function() { changeVisibility('descCW') });
$(document).on('click', '#descCW', function() { changeVisibility('descCW') });
$(document).on('click', '#lsp', function() { changeVisibility('descLSP') });
$(document).on('click', '#descLSP', function() { changeVisibility('descLSP') });