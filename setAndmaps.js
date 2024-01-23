//SET

setExample1=new Set("aiadmk","bjp","congress")
console.log(setExample1)

setExample2=new Set(["aiadmk","bjp","congress"])
console.log(setExample2)

setExample3=new Set(["aiadmk","bjp","congress"])
setExample3.add("dmk")
setExample3.add("aiadmk")
console.log(setExample3)

//for of -->we have output
setExample3=new Set(["aiadmk","bjp","congress"]) 
for(x of  setExample3)
{
    console.log(x)
}

//for in -->no output
setExample3=new Set(["aiadmk","bjp","congress"]) 
for(x in setExample3)
{
    console.log(x)
}

//MAP

mapExample1=new Map([
    ["id","123478"],
    ["Name","XXXX"],
    ["Phone","1232498574"]
])
console.log(mapExample1)

//for in

mapExample2=new Map([
        ["id","123478"],
        ["Name","XXXX"],
        ["Phone","1232498574"]
    ])
console.log(mapExample2)
for(const index in mapExample2)
{
    console.log(index)
}

//for of
mapExample2=new Map([
    ["id","123478"],
    ["Name","XXXX"],
    ["Phone","1232498574"]
])
for ( const value of mapExample2)
{
console.log(value)
}


//MAP
mapExample = new Map([["ID","21ECR103"],["Name","Kaviya"]])
console.log(mapExample)
for(element of mapExample)
{
    console.log("The element is ",element)
}
console.log("\n")
console.log(mapExample.has("Kaviya"))