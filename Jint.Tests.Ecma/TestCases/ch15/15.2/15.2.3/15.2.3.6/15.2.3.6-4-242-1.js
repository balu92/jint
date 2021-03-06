/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-242-1.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property,  'name' is data property and 'desc' is data descriptor, and the [[Configurable]] attribute value of 'name' is true, test 'name' is updated successfully (15.4.5.1 step 4.c)
 */


function testcase() {

        var arrObj = [3];

        Object.defineProperty(arrObj, "0", {
            value: 1001,
            writable: false,
            enumerable: false
        });

        return dataPropertyAttributesAreCorrect(arrObj, "0", 1001, false, false, true);
    }
runTestCase(testcase);
