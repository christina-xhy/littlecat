const string =`
html,body{
   margin: 0;padding:0;
}
.cat *{
    box-sizing:border-box;margin:0;padding:0;
}
.cat *::before{box-sizing:border-box;}
.cat *::after{box-sizing:border-box;}
.cat{
    position:relative;
    min-height:100vh;
    background:black;
}
.ear{
    width:46px;
    height:100px;
    position:absolute;
    top:90px;
    left:50%;
    margin-left: -23px;
    background:#fff;
}
.ear.right {
    border-radius: 30% 70% 0 0 / 100% 100% 0 0;
    transform: translateX(80px) rotate(15deg);
}
.ear.right::after{
    content:'';
    position:absolute;
    width:3px;
    height:25px;
    border-radius:50% 60% 0 0 / 60% 50% 0 0 ;
    top:80%;
    left:50%;
    background:black;
    margin-left:-5px;
    transform:rotate(-5deg);
}
.ear.right::before{
    content:'';
    position:absolute;
    border:1px solid green;
    width:3px;
    height:14px;
    border-radius:50% 60% 0 0 / 60% 50% 0 0 ;
    top:80%;
    left:70%;
    background:black;
    margin-left:-5px;
    transform:rotate(35deg);
}
.ear.left::after{
    content:'';
    position:absolute;
    width:3px;
    height:20px;
    border-radius:50% 60% 0 0 / 60% 50% 0 0 ;
    top:80%;
    left:50%;
    background:black;
    margin-left:-5px;
    transform:rotate(-30deg);
}
.ear.left::before{
    content:'';
    position:absolute;
    border:1px solid green;
    width:3px;
    height:14px;
    border-radius:50% 60% 0 0 / 60% 50% 0 0 ;
    top:80%;
    left:70%;
    background:black;
    margin-left:-5px;
    transform:rotate(10deg);
}





.ear.left{
    border-radius:70% 30% 0 0 / 100% 100% 0 0;
    transform:translateX(-80px) rotate(-15deg);

}

.face{
    border:1px solid black;
    position: absolute;
    height: 200px;
    width: 200px;
    top :150px;
    left:50%;
    margin-left:-100px;
    background: black;
    border-radius: 50%;
}

.muzzle{
    border:1px solid green;
    width:10px;
    height:6px;
    position:absolute;
    top:65px;
    left:50%;
    background:#fff;
    margin-left:-3px;
    border-radius:50% 50% 50% 50% / 30% 30% 70% 70%;
}
.eye{
    border:1px solid black;
    top:40px;
    left:50%;
    margin-left:-23px;
    width:46px;
    height:42px;
    position:absolute;
    background:#fff;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
.eye.left{
    transform:translateX(-45px);
}
.eye.right{
    transform:translateX(45px);
}

.eye.left::after{
    content: '';
    position: absolute;
    top: 70%;
    right: -1%;
    height: 20%;
    width: 50%;
    border-radius: 70%;
    background: #ffffff;
}
.eye.right::after {
    content: '';
    position: absolute;
    top: 70%;
    right:61%;
    height: 20%;
    width: 40%;
    border-radius: 70%;
    background: #fff;
}
@keyframes blink{
    0%{height:0;}
    90%{height: 0;}
    92.5%{height:100%}
    95%{height: 0;}
    97.5%{height: 100%}
    100%{height:0;}
}
.eye::before{
    content:'';
    position:absolute;
    top:0;
    left:50%;
    margin-left:-50%;
    width:100%;
    border-radius: 0 0 50% 50% / 0 0 40% 40%;
    background:black;
    animation:blink infinite 5s ease-in;
}
.eye>.pupil{
    position:absolute;
    top:25%;
    left:30%;
    height:55%;
    width:28%;
    background:black;
    border-radius: 50%;
    animation:look-ground 4s infinite;
}
@keyframes look-ground {
    0% { transform: translate(0) }
    5% { transform: translate(100%, -20%) }
    10% { transform: translate(100%, -20%) }
    15% { transform: translate(-15%, -20%) }
    20% { transform: translate(-5%, -20%) }
    25% { transform: translate(0, 0) }
    100% { transform: translate(0, 0) }
}
.pupil::after {
    content: '';
    position: absolute;
    top:20%;
    right:20%;
    height: 30%;
    width: 30%;
    background: #fff;
    border-radius: 50%;
}



`

let n=1
demo.innerText = string.substring(0,n)
demo2.innerHTML = string.substring(0,n)

let id = setInterval(()=>{
 n += 1
 if(n>string.lenth){
  window.clearInterval(id)
  return
 }
 demo.innerText = string.substring(0,n)
 demo2.innerHTML = string.substring(0,n)
 demo.scrollTop = 999999
},0)


