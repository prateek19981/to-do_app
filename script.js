

const addbutton = document.querySelector('.addbtn');

var input = document.querySelector('#input1');

var container = document.querySelector('.container');
var count=0;

class Item 
{
    
    constructor(task)
    {
        this.createItem(task);
        
    }

    createItem(task)
    {
     
        let contain = document.createElement('div');
        contain.classList.add('item');
        let input = document.createElement('input');
        input.value = task;
        input.disabled = true;
        input.type = 'text';
        input.classList.add('it_ip');
        let removebutton=document.createElement('button');
        removebutton.classList.add('removebtn');
        let icon=document.createElement('i');
        icon.classList.add('far');
        icon.classList.add('fa-times-circle');
        let check=document.createElement('i');
        check.classList.add('far');
        check.classList.add('fa-check-circle');
        check.classList.add('check');
        removebutton.appendChild(icon);
        contain.appendChild(check);
        contain.appendChild(input);
        contain.appendChild(removebutton);
        container.appendChild(contain);
        removebutton.addEventListener("click",() => this.remove(contain));
        check.addEventListener("click",() => this.done(input));
        count++;
        let itc=document.querySelector('#itc');
        itc.innerHTML=count;





    }

    remove(item)
    {
        container.removeChild(item);
        count--;
        let itc=document.querySelector('#itc');
        itc.innerHTML=count;
    }

    done(input)
    {
       input.style.textDecoration = "line-through";

       return;
    }

  

  
}


function funcItem()
{
    var todocontent=input.value;
    if(todocontent=="")
    {
        alert('please enter a task first');
        return;
    }
    item=new Item(todocontent);
   
    
    
}


addbutton.addEventListener("click",funcItem);

var removebutton = document.querySelector('.removebtn');

