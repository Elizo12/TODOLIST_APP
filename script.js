const inputBox = document.getElementById('input-box');
const list = document.getElementById('list-container');

function addTask(){
    if (inputBox.value === ''){
        alert('You must enter a task!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span1 = document.createElement('span')
        span1.innerHTML = '\u270E';
        span1.setAttribute('class', 'edit')
        li.appendChild(span1);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        span.setAttribute('class', 'cancel')
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === 'SPAN' && e.target.className == 'cancel'){
        e.target.parentElement.remove();
        saveData()
    }
    else if(e.target.tagName === 'SPAN' && e.target.className == 'edit'){
        let input = e.target.parentElement.textContent;
        inputBox.value = input
        e.target.parentElement.remove();
        
    }
}, false)

function saveData(){
    localStorage.setItem('data', list.innerHTML);
}
function showData(){
    list.innerHTML = localStorage.getItem('data');
}
showData()