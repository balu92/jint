/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-32.js
 * @description Object.create - 'Properties' is a Number object that uses Object's [[Get]] method to access own enumerable property (15.2.3.7 step 5.a)
 */


function testcase() {

        var props = new Number(-9);
        props.prop = {
            value: 12,
            enumerable: true
        };
        var newObj = Object.create({}, props);
        return newObj.hasOwnProperty("prop");
    }
runTestCase(testcase);
