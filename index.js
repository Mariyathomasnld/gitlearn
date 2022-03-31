const teller ={

    guess :()=>{


    const million= Math.random()
    const message = `you have earned ${million} dollar`
    return message
        
    }
}
 


const money =teller.guess()

console.log(money)