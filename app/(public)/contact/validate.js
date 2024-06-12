


export const validate = (form) =>{

    if(form.name.trim() === ''){
        return 'Please enter a Name'
    }

    if(form.email.trim() === ''){
        return 'Please enter a email'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      return 'Please enter a valid Email';
    }

    if(form.message.length <= 5){
        return 'The message field must be at least 5 characters long.'
    }
       
return ''

}