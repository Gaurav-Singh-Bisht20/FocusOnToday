const input_feilds = document.querySelectorAll('.goal_input');
const custom_checkboxlist = document.querySelectorAll('.custom_checkbox');
const appContainer = document.querySelector('.app_container');
const error_label = document.querySelector('.error_label');
const progress_value = document.querySelector('.progress_value');

custom_checkboxlist.forEach(element => {
    element.addEventListener('click',(e)=>{
        const allinputFeilds = [...input_feilds].every((input)=>{
            return input.value;
        })
        if(allinputFeilds){
            element.parentElement.classList.toggle('completed');
            progress_value.style.width = '33.33%'
        }
        else{
            appContainer.classList.add('showError')
        }
    })
});

input_feilds.forEach((input)=>{
    input.addEventListener('focus',()=>{
        appContainer.classList.remove('showError')
    })
})