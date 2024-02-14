const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function () {

    const li = document.createElement('li');

    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    li.textContent = input.value;

    deleteButton.textContent = '❌';
    editButton.textContent = '✏️';

    li.append(deleteButton, editButton);

    list.append(li);


    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();

        input.value = '';
    });

    editButton.addEventListener('click', function () {
        li.removeChild(deleteButton);
        li.removeChild(editButton);
        const editedValue = prompt('Edit the item:', li.textContent);
        if (editedValue !== null) {
            li.textContent = editedValue;

            li.append(deleteButton, editButton);
        }
    });
});