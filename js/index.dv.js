!function(){
  function f(v,f){return Function(v,f)}
  i={
  d:document,
  nw:f('e,a,l',
   'e=i.d.createElement(e);'+
   'for(l in a)e[l]=a[l];'+
   'a.id&&主.appendChild(e);'+
   'return e'),
  s:'body{background-image:radial-gradient(#000,#a9a9a9);min-height:768px;overflow:hidden_div{position:absolute;transition:1s_#主{height:1px;left:25%;top:35%;width:683px;perspective:1000000px;transform:rotate3D(-1,0,0,27deg);transform-style:preserve-3D_#一{background:#f00;height:700px;top:-100px;width:100%;transform:rotateX(90deg)_#一~*{background-image:radial-gradient(#f00,#006400,#00008b);border:3px solid #0ff;border-radius:50% 50% 0 0;color:#fff;height:250px;font-size:15em;text-align:center;top:50%;width:100%_#一~*:nth-child(odd){transform:rotate3D(0,1,0,90deg)_#二{transform:translateZ(-350px)_#三{left:50%_#四{transform:translateZ(350px)_#五{left:-50%',
  sty:f('s,l',
   's=s.split("_");'+
   'for(l in s)i.e.insertRule(s[l]+"}",i.e.cssRules.length)')}

  onload=function(){
   i.e=i.d.styleSheets[0]
   d='transform:rotate3D(-1,',b=',0,27deg)'
   w=/webkit/i.test(navigator.userAgent)?'-webkit-':''
   x='@'+w+'keyframes Ani{\n'
   中='一二三四五'.split('')
   for(l in 中){
    i.nw('DIV',{id:中[l],innerHTML:中[l]})
    /*console.log(*/x+=25*l+'%{'+d+(l%2?l>2?-3:3:0)+b+'}\n'/*)*/}
    i.nw('audio',{src:'回音哥-居家男人.mp3',autoplay:1})
    setTimeout(f('',
     "i.sty(x+'_'+i.s+'_'+'#主{'+w+'animation:Ani 3s 1')"+
     'i.d.scripts[0].remove()'+
     'console.clear()')},500)}}()