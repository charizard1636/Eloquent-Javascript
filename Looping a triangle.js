/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function loopingTriangle() {
    let s = "";
    for (var i = 0; i < 7; i++) {
    s += "#";
    console.log(s);
}
}
loopingTriangle();
