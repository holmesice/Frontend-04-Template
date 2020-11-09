学习笔记

问题：为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？


first-letter:作用于第一行的首字符；

first-line：作用于第一行的所有字符；

first-line表示第一行，其与first-letter实则表兄弟关系，都是针对文字的。注意这里，“针对文字”，也就是说，first-line是无法匹配任何真实的HTML元素的！

对于inline水平的元素，其本身就是line box, 就是一行流，因此，不存在所谓的first-line的说法。因此，first-line伪类/伪元素要想起作用，必须应用在block水平的元素上，例如display为如下值的些元素block, inline-block, table-cell或table-caption.

再由于first-line伪类/伪元素是处理文字字符的，因此，只有部分的CSS声明可以使用，类似float，position:absolute这些破坏性属性显然是不支持的。

引用：http://www.zhangxinxu.com/wordpress/?p=3458