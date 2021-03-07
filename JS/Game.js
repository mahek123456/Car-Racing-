class Game {
constructor (){



}
getstate() {
 var gamestateref = database.ref("gamestate")
 gamestateref.on ("value",function(data){
     gamestate = data.val()
 })

}
update(state) {
    database.ref('/').update({
       gamestate:state 
    })
}
start() {
if (gamestate === 0){
    player = new Player ()
    form = new Form ()
    player.getcount ()
    form.display()
}
}
}