const todoList = [{
    name: 'washing clothes',
    date: '21-09-2023'
},{name: 'going movie',
    date: '09-11-2023'
    }
];


renderAddedItems();

function addItems(){
    const inputElement = document.querySelector('.input-field');
    const name = inputElement.value;

    const delInputElement = document.querySelector('.date-field');
    const date = delInputElement.value;

   /* todoList.push({
    name: name,
    date: date
   }); */

   todoList.push({   // shortcut for object same name and value 
    name,
    date
   });

   //console.log(todoList);

   inputElement.value='';
   delInputElement.value='';

   renderAddedItems();
}

function renderAddedItems(){   
    
    let combinedItems = '';

// Using for each loop and Regular function

    // todoList.forEach(function(todoObject, index){
    //     const { name, date } = todoObject;
    //     const items = `
    //     <div> ${name} </div>
    //     <div> ${date} </div>
    //     <button class="del-btn" onclick="todoList.splice(${index}, 1);
    //         renderAddedItems();">Delete</button>`;
    //     combinedItems += items;

    //     index = i;

    //     document.getElementById('list-of-items').innerHTML= combinedItems;
    // });

// Using for each loop and Arrow function

    // todoList.forEach((todoObject, index) => {  
    //     const { name, date } = todoObject;
    //     const items = `
    //     <div> ${name} </div>
    //     <div> ${date} </div>
    //     <button class="del-btn" onclick="todoList.splice(${index}, 1);
    //         renderAddedItems();">Delete</button>`;
    //     combinedItems += items;

    //     index = i;

    //     document.getElementById('list-of-items').innerHTML= combinedItems;
    // });

// Using for loop 

    for(let i = 0; i < todoList.length; i++){

        //const name = todoList[i].name;
        //const date = todoList[i].date;  // shortcut Destructuring

        // const { name } = todoList[i];
        // const { date } = todoList[i];

        const { name, date } = todoList[i];

        const items = `
        <div> ${name} </div>
        <div> ${date} </div>
        <button class="del-btn" onclick="todoList.splice(${i}, 1);
            renderAddedItems();">Delete</button>`;
        combinedItems += items;

        index = i;

        document.getElementById('list-of-items').innerHTML= combinedItems;
       }

}
