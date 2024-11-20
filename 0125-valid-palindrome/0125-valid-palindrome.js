/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//         if(s === " "){
//       return true;
//     }
//    let str=s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();  
//  let a=true;
//     for(let i = 0; i<str.length/2;i++){
//         if(str[i] != str[str.length-i-1]){
//             a=false
            
            
//         }
//         else{
//             a=true;
//         }
        
//     }

//      if (a && str.length>=1 ){
//         return true;
//     }
//     else {
//       return false;
        
//     }
    
// };
var isPalindrome = function(s) {
     s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let m= s.length;
    let j = s.length-1;
    for (let i =0;i <= m/2;i++){
        if(s[i]!=s[j]){
            return false;
        }
        j--;
    }
    return true;
    
};