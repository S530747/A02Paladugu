function areacalculator(){
    var radius,angle;
    
    radius = document.getElementById("radius").value;
    angle = document.getElementById("angle").value;
    
    
    let result = calculate(radius,angle);
    $("#resultMessage").html("Area of the sector in degrees: "+result);
    }
    function calculate(radius,angle) {
    let resultMessage = document.getElementById("resultMessage");
    if (radius == "" && angle =="") {
        alert("Please enter values. It shouldn't be blank!")
        throw Error("Please enter values. It shouldn't be blank!");
    }
    if (isNaN(radius) || isNaN(angle)) {
        alert("Value should be a number!")
        throw Error("Value should be a number!");
    }
    if (radius <=0 || angle <=0) {
        alert("Value shouldn't be 0 or negative value!")
        throw Error("Value shouldn't be 0 or negative value!");
    }
    radius = parseInt(radius);
    angle = parseInt(angle);
    let total = ((3.14*radius*radius)*(angle/360));
    return total;
}