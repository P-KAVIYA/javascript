//for loop

sum=0
for(var i=0;i<10;i++)
{
    sum+=i;
}
console.log(sum)

//while

var sum=0
var i=0
while(i<10)
{
    sum+=i;
    i++;
}
console.log(sum)

//do..while

var sum=0;
var i=0;
do{
    sum+=i;
    i++;
    console.log(sum)
}while(i<10);
console.log(sum)



//------------->ex1

arr=[20,30,40]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

// -------------------->ex2
arr=[20,30,40.5]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//---------------------->ex3
arr=[20,30,false,true]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}


// ---------------------->ex4
arr=[20,30,"string",true]
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}


//for in loop:   if arr lenght unknown
arr=[10,"string","kec",10,true]
    for(const index in arr)
    {
        console.log("The value present in",index,"is",arr[index])
    }

// for of: 
arr=[10,"string","kec",10,true]
    for(const element of arr)  ///element or value or index
    {
        console.log("The value present in",element)
    }


// for each:--------->EX1
arr=[10,"string","kec",10,true]
arr.forEach (value=>{
        console.log(value)
});

// ---------------------->EX2
//for in
var kec=new Object()
kec["fees"]="100000"
kec["accomodation"]="good"
kec["food"]="pretty decent"
console.log(kec)
for(key in kec )
{
    console.log(key,kec[key])
}

//for of
// for each