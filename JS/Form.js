class Form {
constructor() {

}
display(){
    var title = createElement ("h2")
    title.html("Car Racing")
    title.position(130,10)
    var input = createInput ("Your good name")
    input.position(130,160)
    var button = createButton ("Ready")
    button.position(250,200)
    var greeting = createElement ("h2")
    button.mousePressed (function(){
     input.hide()
     button.hide()
     var name = input.value()
     playercount+=1
     player.update(name)
     player.updatecount(playercount)
     greeting.html("Bonjour"+name)
     greeting.position (130,160)
    })
}
}