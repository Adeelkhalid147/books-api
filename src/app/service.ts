

// Dynamic function
/* 
 jb ye function chle ga us ko url k zrort ho gey jis k data type string ho gey
 parametr jha url:string likha h waha pe api ka link ae ga jo k hm dn gy jha pe
 as ko call kren gy
*/
export const getData =async (url:string)=>{
    const fetchData = await fetch(url)
    const res = await fetchData.json()
    return res

}