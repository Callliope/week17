var numPool = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10 ];

function randomize(arr) {
  for (let i = 0; i < 10; i++){
    a=numPool.sort(()=>Math.random()-0.5)
    return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1]);
    randomize(numPool);
  }  
};
