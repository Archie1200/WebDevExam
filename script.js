const themeColors=document.querySelectorAll('[name="theme"]');

//store themes
const storeTheme= function(theme){
    localStorage.setItem('theme',theme);
}
themeColors.forEach((themOption)=>{
     themOption.addEventListener('click',()=>{
        storeTheme(themOption.id);
     })
})

const applytheme = function(){
    const activeTheme= localStorage.getItem('theme');
    themeColors.forEach((themOption)=>{
        if(activeTheme===themOption.id){
            themOption.checked=true;
        }
    })
}
 themeColors.forEach((themOption)=>{
   themOption.addEventListener('click',()=>{
    storeTheme(themOption.id);
   })
 })

document.onload=applytheme();


const xhr= new XMLHttpRequest;
var movie="";
xhr.onload=function(){ 
      let data=this.response; 
      let newdata=JSON.parse(data);
      for(var i=0;i<newdata.length;i++){
          let parent= document.getElementById('part');
          let img=document.createElement('img');
          img.src=newdata[i].show.image.medium;
          parent.appendChild(img);
      }
    
}
xhr.onerror=function(){ 
       
}
// document.getElementById("black").addEventListener("click",function(){
//         let p=document.getElementsByClassName("head");
//         p.backgroundColor="white";
// });
document.querySelector(".btn").addEventListener("click",function(){
    document.getElementById('part').innerHTML="";
    movie=document.getElementById("movie").value;
    url="https://api.tvmaze.com/search/shows?q="+movie;
    xhr.open("GET",url);
    xhr.send();
});






