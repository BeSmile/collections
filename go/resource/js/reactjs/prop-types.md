# 类型检测库
[官方文档](https://reactjs.org/docs/typechecking-with-proptypes.html)

prop-types就是对react组件中props对象中的变量进行类型检测
<pre>
    Component.propTypes = {
        属性1：属性1的变量类型，
        属性2：属性2的变量类型
        //...
    }
</pre>

##### 数据类型限制
<pre>
    import PropTypes from 'prop-types';
    Component.propTypes = {
        number:PropTypes.number,
        array:PropTypes.array,
        boolean:PropTypes.bool
    }
</pre>
包含的类型有string，boolean,number,以及引用类型的object,array,function,ES6新增的symbol类型
<strong>undefined, null 无法检测</strong>

##### 多类型检测 oneOfType
可规定多个检测通过的数据类型
<pre>
    Component.propTypes = {
       number:PropTypes.oneOfType(
           [PropTypes.string,PropTypes.number]
         )
    }
</pre>
##### oneOf实现多选择检测
可规定多个检测通过的变量的值
<pre>
    Component.propTypes = {
        number:PropTypes.oneOf(
            [12,13]
          )
    }
</pre>
<em>number的值只可能会在12,13之间通过，其他数值或者其他类型都会报错</em>
##### arrayOf,objectOf实现多重嵌套检测
<pre>
    Component.propTypes = {
        array:PropTypes.arrayOf(PropTypes.number)
    }
</pre>
array值里的变量只能为number类型， [1,2,3,4]不报错，['1','2']报错

##### shape
目标对象不同属性的不同数据类型
<pre>
    Component.propTypes = {
        object:PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number
        })
    }
</pre>

##### isRequired 
设置变量为必须
<pre>
    Component.propTypes = {
        number:PropTypes.number.isRequired,
        array:PropTypes.array.isRequired,
    }
</pre>

##### 使用函数检测
判断是否成年
<pre>
    Component.propTypes = {
        age: (props, propName,componentName) => {
            if(!(props[propName] >= 18)) {
                return new Error('未成年');
            }
        }
    }
</pre>
> props  props对象
> propName prop的属性名
> componentName 组件名称

使用方法<Component age={this.age}/>