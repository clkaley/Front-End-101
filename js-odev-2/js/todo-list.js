/*JS TODO-LİST
Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
Yazacağınız javascript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artisliği. Öncelikli amacını sağlıyor olması lazım.
Yazdığınız js dosyasını projenize eklemeyi unutmayın.
Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın. 
*/


//Selectors
const TodoInput = document.querySelector('#task'); //input elementi 
const TodoList = document.querySelector('#list'); //ul elementi
const TodoButton = document.querySelector('#liveToastBtn'); //span elementi






//Events
TodoButton.addEventListener('onclick', newElement); //li ye eleman ekleme fonksiyonu
TodoList.addEventListener('click', remove);
TodoList.addEventListener('click', check);
TodoButton.addEventListener('onclick', addItem);


//Functions
function addItem(e) {
    //e.preventDefault();
    const liDOM = document.createElement('li'); //ul nin içine li ekleme
    liDOM.innerText = TodoInput.value;


    saveLocalTodos(TodoInput.value); //fonksiyonun içine lidom daki değerleri yazma

    //kontrol etme butonu
    const checkButton = document.createElement('button');
    checkButton.classList.add('check'); //check adlı class eklendi
    checkButton.innerHTML = 'yapıldı';
    liDOM.appendChild(checkButton);

    //silme butonu
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove'); //remove adlı class eklendi
    removeButton.innerHTML = 'sil';
    liDOM.appendChild(removeButton);


    TodoList.appendChild(liDOM); //listeye li elementleri eklendi
}



function newElement() {
    //liste boş veya boşluk içeriyorsa eleman eklenmez.
    if (TodoInput.value === "" || TodoInput.value.replace(/\s+/g, '').length === 0) {
        $('#errorliveToast').toast('show');
    } else {
        $('#successliveToast').toast('show');
        addItem(TodoInput.value);
        TodoInput.value = ''; //değer girildikten sonra input sıfırlanır.

    }

}




//eleman silme
function remove(event) {
    const item = event.target; //tetiklemeyi başlatma
    if (item.classList[0] === 'remove') {
        const todo = item.parentElement;
        todo.remove();
    }
}

//eleman kontrol etme
function check(event) {
    const item = event.target; //tetiklemeyi başlatma
    if (item.classList[0] === 'check') {
        const todo = item.parentElement;
        todo.classList.toggle("checked"); //classı checked olana geçiş yaptı 
    }
}


//local storage a kaydetme
function saveLocalTodos(todo) {
    let todos;
    //array oluşturduk
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    //eleman eklendikçe arraya'e eklenir
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}