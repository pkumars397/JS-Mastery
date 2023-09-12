let headline = document.querySelector(".headline");;
console.log(headline.innerHTML);//innerHTML will be all tags and content inside this headline class
headline.innerHTML = "<h2>InnerHTML changed</h2>"
console.log(headline.innerHTML);
headline.innerHTML = "<p class=\"btn\">paragraph hogaya</p>"//backslace escape 
console.log(headline.innerHTML)