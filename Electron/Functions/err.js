function err(r,o){if(console.log("caught: ",r),o){new Error(`Error: ${r}, Info: ${o}`)}else new Error(r)}module.exports=err;