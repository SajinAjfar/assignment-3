function feetToMile(feet){
    if(feet < 0){
        var mile = 'ERROR![NB:Length or distance cannot be negative]'
    }
    else{
        mile = feet*0.000189394;
    }
    return mile;
}

function woodCalculator(chair, table, bed) {
    if(chair < 0 || table < 0 || bed < 0){
        var wood = 'ERROR![NB:Quantity cannot be negative]'
    }
    else{
        var wood = (chair * 1) + (table * 3) + (bed * 5);
    }
    return wood;
}

function brickCalculator(storey) {
    var brick = 0;
    if (storey <= 10 ) {
         brick = storey * 15000;
    }
    else if(storey <= 20 ) {
        brick = (15000 * 10) + ((storey - 10) * 12000);
    }
    else (storey > 20)
        brick = (15000 * 10) + (10 * 12000) + ((storey - 20) * 10000);
    
    return brick;
}

function tinyFriend(names){
    var tiny = names[0];
    for (let i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length < tiny.length) {
            tiny = element;
        }
    }
    return tiny;
}
