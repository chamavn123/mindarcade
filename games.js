/* Pure puzzle rules, shared by the interface and checks. */
const Rules = (()=>{
 const faces={U:{n:[0,1,0],r:[1,0,0],d:[0,0,1],color:'#f5f2dd'},D:{n:[0,-1,0],r:[1,0,0],d:[0,0,-1],color:'#f4d35e'},F:{n:[0,0,1],r:[1,0,0],d:[0,-1,0],color:'#6fc988'},B:{n:[0,0,-1],r:[-1,0,0],d:[0,-1,0],color:'#6ca6ed'},R:{n:[1,0,0],r:[0,0,-1],d:[0,-1,0],color:'#f07774'},L:{n:[-1,0,0],r:[0,0,1],d:[0,-1,0],color:'#f5a75d'}};
 const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
 function newCube(){return Object.entries(faces).flatMap(([f,v])=>Array.from({length:9},(_,i)=>({p:v.n.map((x,k)=>x+v.r[k]*(i%3-1)+v.d[k]*(Math.floor(i/3)-1)),n:[...v.n],color:v.color,home:f})));}
 function turn(cube,f,dir=1){let axis=faces[f].n;const rot=v=>{let cross=[axis[1]*v[2]-axis[2]*v[1],axis[2]*v[0]-axis[0]*v[2],axis[0]*v[1]-axis[1]*v[0]],d=dot(axis,v);return v.map((_,i)=>(Math.round(axis[i]*d-cross[i]*dir)||0))};return cube.map(s=>dot(s.p,axis)===1?{...s,p:rot(s.p),n:rot(s.n)}:s)}
 function face(cube,f){let v=faces[f];return cube.filter(s=>dot(s.n,v.n)===1).sort((a,b)=>(dot(a.p,v.d)-dot(b.p,v.d))*3+dot(a.p,v.r)-dot(b.p,v.r));}
 const solved=c=>Object.keys(faces).every(f=>new Set(face(c,f).map(s=>s.color)).size===1);
 function slide(b,i){let z=b.indexOf(0);if(Math.abs(Math.floor(z/4)-Math.floor(i/4))+Math.abs(z%4-i%4)!==1)return b;let a=[...b];[a[z],a[i]]=[a[i],a[z]];return a}
 const winner=b=>{for(let [a,c,d] of [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]])if(b[a]&&b[a]===b[c]&&b[a]===b[d])return b[a];return b.every(Boolean)?'draw':null};
 function slice(cube,axis,layer,dir){const n=[0,0,0];n[axis]=1;const rot=v=>{const cross=[n[1]*v[2]-n[2]*v[1],n[2]*v[0]-n[0]*v[2],n[0]*v[1]-n[1]*v[0]];return v.map((_,i)=>(Math.round(n[i]*v[axis]+cross[i]*dir)||0))};return cube.map(s=>s.p[axis]===layer?{...s,p:rot(s.p),n:rot(s.n)}:s)}
 return {faces,newCube,turn,face,solved,slide,winner,slice};
})();
if(typeof module!=='undefined')module.exports=Rules;
