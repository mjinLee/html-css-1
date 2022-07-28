// 배열함수 7가지
// forEach() / map() / filter() / some() / every() / find() / findIndex()
let names = [
    "Bill Gates","Elon Musk","Tim Cook", "Steven Paul Jobs",
    "Jeff Bezos","Warren Edward Buffett","Larry Page",
    "Larry Ellison", "Lloyd Blankfein"
]

// 일반 for문
for(let i=0;i<names.length;i++){
    console.log(names[i])
}

function printName(item){
    console.log(item)
    // item : forEach가 알아서 준다
    // 매개변수 이름이 꼭 item일 필요는 없다
}

//
// forEach()
names.forEach(printName)
//function의 이름을 꼭 줄 필요없이 함수자리에 바로 넣을 수 있
//익명함수는 불필요한 메모리 차지X. 일회성 함수
names.forEach(function (item){
    console.log(item)
})

//es6문법 사용
// ()=>{} 함수를 대신하는
names.forEach((item)=>{console.log(item)})
//index도 같이 print
names.forEach((item,index)=>{console.log(item,index)})
// forEach()는 반환값이 없음

let ceoList = [
    {name:"Larry Page", age:23, ceo:true},
    {name:"Tim Cook", age:40, ceo:true},
    {name:"Elon Musk", age:55, ceo:false}
]

//
// map()
let data = names.map((item)=>{
    return item +"haha"
})
console.log("map: ",data)
// map()은 배열을 반환 (결과값 : 배열)
// return item '+ "haha" -> ['Bill Gateshaha']
// map() 활용
// 원하는 데이터만 가져오고 싶을 때
// ceoList에서 name만 return
let data2 = ceoList.map((item)=>{
    return item.name
})
console.log("map: ",data2)

//
// filter()
// 조건 넣고, 조건에 대해 참(true)인 경우에만 반환
// 조건에 속하는 거 다 반환_data filtering
// 결과값 : 배열
// return 조건
let data3 = ceoList.filter((item)=>{
    return item.age==23
})
console.log("filter: ",data3)
// filter() 활용
// 이름이 'L'로 시작하는 사람
let data4 = names.filter((item)=>{
    return item.startsWith("L")
})
console.log("filter: ",data4)

//
// some()
// 조건식에서 참인게 하나라도 있으면 'true' 반환
// 아니면 'false' 반환
// 결과값 : true / false
let data5 = names.some((item)=>{
    return item.startsWith("L")
})
console.log("some: ",data5)

//
// every()
// 모두가 그 값이냐? ->하나라도 아니면 false
// 결과값 : true / false
let data6 = names.every((item)=>{
    return item.startsWith("L")
})
console.log("every: ",data6)
// every() 활용
let data7 = names.every((item)=>{
    return item.length>0
})
console.log("every: ",data7)

//
// find()
// 결과값 : string type
// 첫 번째로 찾은 하나만 반환
let data8 = names.find((item)=>{
    return item=="Larry Page"
})
console.log("find: ",data8)

//
// findIndex()
// 결과값 : 인덱스 번호
let data9 = names.findIndex((item)=>{
    return item=="Larry Page"
})
console.log("findIndex: ",data9)