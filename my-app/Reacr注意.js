/* 
    1. constructor 在组件创建的第一个时刻自动被执行
        在组件中创建了两个数据，数据一定定义在state中

    2. className htmlFor

    3. dangerouslySetInnerHTML可以让input的输入不用转义

    4. 父组件通过属性的方式和子组件通信(传值)
        子组件通过this.props的属性，从父组件接受传递过来的值

    5.！！！！！！！！！！！
        父组件通过属性的形式和子组件通信
        而子组件想要和父组件通信，它要调用父组件传递过来的方法

    6.  1.React是一个声明式的开发方式
        2.React可以和其他框架并存
            React挂载的只与id为root的相关
        3.组件化
        4.单向数据流
            指的是：父组件可以改变子组件的数据
                    但是子组件不能直接改变父组件的数据（通过调用父组件的方法）
        5.函数式编程
            React是一种函数式编程，每一个组件都是由一个个函数组成的，维护性高，
            根据函数名就知道里面在做一些什么样的事情(方便自动化测试)

*/