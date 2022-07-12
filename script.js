console.log("script is running...")
document.querySelector('.cross').style.display='none';
document.querySelector('.facebook').style.display='none';
document.querySelector('.insta').style.display='none';
document.querySelector('.github').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
        document.querySelector('.facebook').style.display='none';
        document.querySelector('.insta').style.display='none';
        document.querySelector('.github').style.display='none';
    }
    else{
        document.querySelector('.ham').style.display='none'
        setTimeout(() => {
             document.querySelector('.cross').style.display='inline'
            },300);
        setTimeout(() => {
                document.querySelector('.facebook').style.display='inline'
               },300);
        setTimeout(() => {
                document.querySelector('.insta').style.display='inline'
               },300);
        setTimeout(() => {
                document.querySelector('.github').style.display='inline'
               },300);
    }
})