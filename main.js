const input_feilds = document.querySelectorAll('.goal_input');
const custom_checkboxlist = document.querySelectorAll('.custom_checkbox');
const appContainer = document.querySelector('.app_container');
const error_label = document.querySelector('.error_label');
const progress_value = document.querySelector('.progress_value');
const completed_Text = document.querySelector('#completed_Text');


const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
    first_input:{
        name: "",
        completed:false
    },
    second_input:{
        name: "",
        completed:false
    },
    third_input:{
        name: "",
        completed:false
    }
}
let completdGoals = Object.values(allGoals).filter((goal)=> goal.completed).length
progress_value.style.width = `${completdGoals/3 *100}`
 completed_Text.innerHTML = `${completdGoals} /3 goals completed`

custom_checkboxlist.forEach(element => {
    element.addEventListener('click',(e)=>{
        const allinputFeilds = [...input_feilds].every((input)=>{
            return input.value;
        })
        if(allinputFeilds){
            element.parentElement.classList.toggle('completed');
            const inputId = element.nextElementSibling.id;
            allGoals[inputId].completed = ! allGoals[inputId].completed
            completdGoals = Object.values(allGoals).filter((goal)=> goal.completed).length
            localStorage.setItem('allGoals', JSON.stringify(allGoals))
            progress_value.style.width = `${completdGoals/3 *100}%`
            completed_Text.innerHTML = `${completdGoals} /3 goals completed`

        }
        else{
            appContainer.classList.add('showError')
        }
    })
});




input_feilds.forEach((input)=>{

    input.value =  allGoals[input.id]?.name;

    if(allGoals[input.id].completed){
        input.parentElement.classList.add('completed');
    }

    input.addEventListener('focus',()=>{
        appContainer.classList.remove('showError')
    })

    input.addEventListener('input',(e)=>{
        if(allGoals[input.id].completed){
            e.target.value = allGoals[input.id].name
            return
        }
        allGoals[input.id]= {
            name: input.value,
        }
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
        console.log(allGoals)
    })
})



