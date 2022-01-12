//#つぶやきProcessing
t=0;draw=_=>{t++||createCanvas(w=800,w),randomSeed(9),background(0,99)
  stroke(w),translate(j=w/2,j),f(sin(t/j)*j/2,w),f(w,j)}
  function f(r,d){for(i=d;i--;){a=random((t+w)/200)*TAU,b=r*sqrt(random()),
  strokeWeight(a*.3),point(b*tan(a),b*cos(a))}}