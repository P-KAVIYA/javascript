// how to declare  object
//key:value pair


// ------>1
var customerDetails={
    "Name":"Tamil",
    "Age":"20",
    "Phone":"1234567890"
}
console.log(customerDetails)
// customerDetails["id"]="20" 
customerDetails.id="20"
console.log(customerDetails)


//--------->2

var details={}
details["id"]="2134094"
details["name"]="xxxx"
details["age"]=20
console.log(details)

//----------->3

var kongu=new Object()
kongu["fees"]=100000
kongu["hostel_accomodation"]="poor"
kongu["hostel_food"]="very poor"
kongu["hostel_count"]=10
console.log(kongu.fees)
console.log(kongu["fees"])