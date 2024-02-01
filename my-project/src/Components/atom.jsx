
// I have used recoil to manage my states in form
import { atom } from "recoil"

 export const firstname=atom({
    key:"Fisrt",
    default:""

})



export const lastname=atom({
    key:"last",
    default:""

})

export const email=atom({
    key:"email",
    default:""

})

export const password=atom({
    key:"password",
    default:""

})