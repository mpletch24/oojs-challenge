/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */

function Rectangle(left, top, width, height, stylesMap) {
    //call shape constructor bding createRectangle
    Shape.call(this, left, top, width, height, stylesMap);
}

Rectangle.prototype.render = function(canvasCtx) {
    canvasCtx.fillRect(this.left, this.top, this.width, this.height); 
}

function Circle(x, y, radius) {
    //call shape constructor bding createRectangle
    Shape.call(this, x, y, radius);
    this.radius = radius;
}

Circle.prototype.render = function(canvasCtx) {
    canvasCtx.beginPath();
    canvasCtx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    canvasCtx.fill();
}

function AddText(text, x, y, fontSize) {
    //call shape constructor bding createRectangle
    Shape.call(this, text, x, y, fontSize);
}

AddText.prototype.render = function(canvasCtx) {
    canvasCtx.font = (this.fontSize + 'px' + 'Georgia');
    canvasCtx.fillText(this.text, this.x, this.y);
}



//register new shape with the system
registerClassicalShape('Rectangle', Rectangle);   
registerClassicalShape('Circle', Circle);
registerClassicalShape('AddText', AddText);

//var circle = new Circle(30,30, 80);
//var newText = new AddText()


