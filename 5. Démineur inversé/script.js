let bombRow = Math.floor(4*Math.random()); // random row 0,1,2,3
let bombColumn = Math.floor(4*Math.random()); // random row 0,1,2,3

console.log("The bomb is in tile #" + bombRow+"-"+bombColumn);
function doClick(id){
    let bomb = 'tile-'+bombRow+'-'+bombColumn;
    if(bomb == id.id){
        id.style.backgroundImage = "url('https://us.123rf.com/450wm/cammep/cammep1209/cammep120900081/15311235-black-bomb-isol%C3%A9-sur-fond-blanc-vector-illustration.jpg?ver=6')";
        id.style.backgroundSize = 'cover';
    } else{
        id.style.backgroundImage = "URL('https://m.media-amazon.com/images/I/41+1cfukRlL.jpg')";
        id.style.backgroundSize = 'cover';
    }
}