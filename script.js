console.log(document.all);

var hd=document.getElementById('head');
console.log(hd);
hd.style.color='red';
hd.innerText='JAVASCRIPT IS FUN!!!';

var bl=document.getElementById('tag1');
bl.innerHTML='<p>Adding an inner html</p>'

var ls =document.getElementsByClassName('list');
ls[0].style.color='blue';

var nn=document.getElementById('blank');
nn.style.color='purple';
nn.innerText='para is changed';

var kk=document.getElementsByTagName('h1');
kk[1].style.color='yellow';
kk[2].style.color='yellow';
