/**
 * Created by 乔雷 on 2016/10/1.
 */
var arr=[1, 2, 3, 4, 5];

_.each(arr,function (index , obj) {
    // console.log(index)            1.2.3.4.5.值
    // console.log(obj)              0.1.2.3.4.索引
});

console.log(_.random(arr.length-1))


//
// var r = _.shuffle(arr);
//     取随机数，每次不同
// console.log(r);



// var w = _.sample(arr ,2)
//    取随机数取一个值 ，2代表数组里面取两个随机数，对象也同样使用
//    console.log(w)







// var arrow = _.filter(arr,function (mun) {
//     return mun % 2 ==0
// });        /*求偶.           reject与filter相反求奇*/
//
// console.log(arrow)


// var r = _.every(arr , function (mum) {
//     return mum >0
// })
// console.log(r)

// contains包含

// var r=_.contains(arr , 3);
// 数组里面是否包括3，包括为true，3必须是===,"3"字符串，不能进行隐士转换
// console.log(r)





var arr2={
    name:'abc',
    age:20,
    gender:'男'
};
_.each(arr2,function (val ,key ) {

    // console.log(val)          abc 20 男，值

    // console.log(key)          name , age , gender 属性名
});

var student=[{
    name:'abc',
    age:20,
    gender:'男'
   },
    {
        name:'efg',
        age:20,
        gender:'女'
    },
    {
        name:'hij',
        age:22,
        gender:'女'
    },
    {
        name:'opq',
        age:25,
        gender:'男'
    }

 ];

// var stu = _.keys(arr2)
//  console.log(stu)   ["name", "age", "gender"] 必须为对象




// var stu=_.find(student , function (key ,val ) {
//     return key.name ='hij'
// });
// console.log(stu);


// var stu =_.filter(student,function (i , obj) {
//     return i.age>=21
// });
// console.log(stu);


// var stu = _.pluck(student, 'name');
//
// console.log(stu)  ["abc", "efg", "hij", "opq"] 所有名字都在数组里



// var students , age =0 ;
//
//  for (var i = 0 ; i<student.length ;i++ ){
//      if(student[i].age > age){
//          age =student[i].age;
//          students=student[i];
//      }
// }
// console.log(students)



 // var maxStu = _.max(student , function (i) {
 //      return i.age;
 //
 //  })                              返回年龄里最大的一个
 //                              {name: "opq", age: 25, gender: "男"}
 // console.log (maxStu)


// var stu = _.sortBy(su=student , 'age')
//        按年龄从大到小排序
//  console.log(stu)




// var r =student.sort(function (a,b) {
//
//
//      return a-b;
//     return a.age - b.age;
// });
//           对象...按年龄从大到小排序
//
// console.log(r);



// (function () {
//     // console.log(arguments)   [1, 2, 3, 4]是一个对象。可以点开
//     console.log(_.toArray(arguments))  [1, 2, 3, 4]     对象转换为数组
//
//     return _.toArray(arguments).slice(1)         [2, 3, 4] 从第0个开始截取不包括第0个
//
// })(1, 2, 3, 4)




var stu = _.partition(student , function (obj) {

    return obj.gender=='女';
});

console.log(stu);



////////////////////////////////////////数组/////////////////////////////////////////////////////////
arr = [1, 2, 3, 4, 5, 6];

// var arrow = _.first(arr ,3);   [1, 2, 3]
//     console.log(arrow)


 // var   arrow=_.last(arr ,3);   [4, 5, 6]
 //       console.log(arrow)


// var arrow = _.rest(arr)
//     console.log(arrow)   [2, 3, 4, 5, 6] 返回除数组第一个元素以外的



// var arrow = _.initial(arr)
//      console.log(arrow)              [1, 2, 3, 4, 5] 返回除数组最后一个元素以外的




// arr = [1, 2, 3, 4, 5, 6 , 11 , 20 , 2 , 11];
//
// var arrow = _.union(arr);
// console.log(arrow)        可以数组去重



    ////////////////////////////////下面是对象的方法////////////////////////////////////////////////////////////

    //
    // _.delay(function (t) {
    //
    //     console.log(t)      text定时器
    //
    // } , 2000 , 'text')


// var r = _.extend({name: 'aaa'} , {name:'bbb' , age:20})
// console.log(r)     {name: "bbb", age: 20} 相当于合并。后面的覆盖前面的，前面有的放到后面