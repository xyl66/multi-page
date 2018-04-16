import "bootcss";
import "jquery";
import 'bootjs';
import '../css/pageA.css'
var avalon = require('avalon');
avalon.define({
    $id: "filterBy",
    array: ['aaaa', 'aabb', 'acb', 'ccc', 'dddd'],
    object: {a: 'aaaa', b: 'aab', c: 'acb', d: 'ccc', e: 'dddd'},
    searchs: "a",
    search:'a',
    searchFn: function (el, i) {
        return i > 2
    },
    searchFn2: function (el, i) {
        return el.length === 4
    },
    searchFn3: function (el, i) {
        return i === 'b' || i === 1
    },
    loopClick: function(a, e) {
        this.search=a;
    },
})
//jquery 测试
$("<div>这是jquery生成的</div>").appendTo("body")