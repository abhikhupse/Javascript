var fun1 = function ({student : sn , email : em , datebirth ,...others}){
    console.log("Fun1",sn,em)
    console.log(others,others.phone,others.city)
    console.log(datebirth)
}
var student = {student : "Scoutt", email : "scoutt@gmail.com", phone : "1234567890",city : "Surat"}
fun1(student)
