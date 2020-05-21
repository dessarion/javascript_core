$(() => {
    $.validator.addMethod('checkISO',(value)=>{
        return value.length <= 10
    },'Please enter date in dd-mm-yyyy format')
    
    $.validator.addMethod('reverseISO',(value)=>{
        let valueToArr = value.split('-');        
            if(valueToArr === undefined){
                return true
            }  else if (valueToArr[0].length === 2 && valueToArr[1].length === 2 && valueToArr[2].length === 4) {
                return true
            }    
    },'Please enter date in dd-mm-yyyy format');

    $.validator.addMethod('isDigits',(val)=>{
        let valueToArr = val.split('-');
        if(!isNaN(valueToArr[0]) && !isNaN(valueToArr[1]) && !isNaN(valueToArr[2])){
            return true;
        };
    },'Please enter digits in your Date of Birth field')

    $('#myForm').validate({
        rules: {
            age: {
                required: true,
                digits: true,                
            },
            name: {
                required: true,
                minlength: 3
            },
            date: {
                checkISO: true,
                required: true,
                //dateISO: true,
                reverseISO: true,
                isDigits: true,
                date:true
                
            }
        },
        messages: {
            age:{
                required: 'Please Enter your Age.' 
            },
            name:{
                required: 'Please Enter a Name.' ,
                minlength: 'Lenght must be at least 3 characters long.'                
            },
            date: {
                required: 'Please enter your Date of Birth.'
            }  
        },
        submitHandler: () => {            
            $('#myForm').effect('blind')
        },
        invalidHandler:()=>{
            $('#myForm').effect('shake')
        }
        
        
    })   
    
})

// documentation at https://jqueryvalidation.org/
// also good documentation about this topic https://www.hostcms.ru/documentation/step-by-step/templates/jquery.validate/