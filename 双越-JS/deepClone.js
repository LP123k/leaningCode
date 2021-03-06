const obj1 = {
    age:20,
    name:'xxxx',
    address:{
        city:"shanghai"
    },
    arr:[2,3,4]
}

const obj2 = deepClone(obj1)
// const obj2 = obj1


obj2.address.city="beijing"
console.log(obj1.address.city);

/**
 * 深拷贝
 * @param {*} obj 要拷贝的对象
 */

function deepClone(obj){
    if(typeof obj !== 'object' || typeof obj == null){
        // obj 是 null ，或者不是对象和数组，直接返回
        return obj
    }
    //初始化返回结果
    let result
    if(obj instanceof Array){
        result = []
    } else {
        result = {}
    }

    for(let key in obj) {
        //保证 key 不是原型的属性
        if(obj.hasOwnProperty(key)) {
            //递归调用 ！！
            result[key] = deepClone(obj[key])
        }
    }

    return result
}