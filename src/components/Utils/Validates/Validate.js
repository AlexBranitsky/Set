export const required =(value)=>{
    if (value) return undefined
    return `It is required form`
};
export const maxLength = (length)=>(value)=>{
    if (value && value.length>length) return `Must be ${length}`
    return undefined
}