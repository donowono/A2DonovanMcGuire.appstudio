
let state = prompt ("Please enter your state's initials")

let weather  = prompt ("Please enter the weather outside in Fahrenheit")

let messages = ['wear a warm coat, scraft, and gloves.', 'wear a warm coat but you won\'t need a hat, scarf or gloves.' , 'wear your warmest coat, a warm hat, a scarf, and warm gloves.' , '	wear a warm coat, hat and gloves. Maybe a scarf too.']

switch (true) {
    case ((state == NE) && (weather < 32)): 
        console.log(`Mary, based on the weather, ${messages[0]}`)
        break
    case ((state == NE) && (weather >= 32 && weather <= 50 ):
        console.log(`Mary, based on the weather, ${messages[1]}`)
        break
    case ((state == FL) && (weather >= 32 && weather <= 50 ):
        console.log((`Mary, based on the weather, ${messages[2]}`)
        break
    case ((state == FL) && (weather >50 && weather <= 70 ):
        console.log((`Mary, based on the weather, ${messages[3]}`)
        break
}

