/**
 * Created by jyn on 15/9/25.
 */
var arr = [3,5,12,55,12,321,41,0,999];
    Array.prototype.toFunction  = function() {
        for(var i = 0;i<this.length;i++){
            this[i] = (function(a){
                return function() {
                    return a;
                }
            })(this[i]);
        };
        return this;
    };
arr.toFunction();
console.log((arr[0])());