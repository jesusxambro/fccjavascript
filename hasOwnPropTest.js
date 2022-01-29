var myObj = {
    gift : 'night vision',
    background:'monk',
    wisdom:'7'
};

function checkObj (checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else{
        return 'Not Found'
    }
}
console.log(checkObj('gift'));
