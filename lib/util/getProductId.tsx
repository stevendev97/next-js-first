export default function getProductId(str: string|string[]|undefined){
    if(typeof str === "string"){
     return parseInt(str);
    }
};