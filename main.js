var theme = sessionStorage.getItem('theme');
var btn = document.querySelector('.r');
if(theme == null){
    document.body.classList.remove('darkmode')
    btn.innerHTML="Dark Mode";
}else{
    document.body.classList.add('darkmode');
    btn.innerHTML="Light Mode";

}

btn.addEventListener('click', () => {
    var thme = sessionStorage.getItem('theme');
    if( thme == null){
        sessionStorage.setItem('theme', 'darkmode');
        document.body.classList.add('darkmode');
        btn.innerHTML="Light Mode";
    }else{
        sessionStorage.removeItem('theme');
        document.body.classList.remove('darkmode');
        btn.innerHTML="Dark Mode";
    }
});