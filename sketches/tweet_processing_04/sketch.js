//#つぶやきProcessing
t=0
draw=_=>{t++||createCanvas(w=750,w),background(0)
for(j=0;j<50;j++){f(24,j*10,10,t/300+j*10)}}
function f(p,b,s,o){beginShape(QUADS)
for (i=p;i--;){vertex(map(i,0,p-1,0,w),
map(noise(o+i/s),0,1,w/2-b,w/2+b))
}endShape()}