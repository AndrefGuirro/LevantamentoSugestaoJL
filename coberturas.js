document.addEventListener('DOMContentLoaded', () => {
  function carregarHeader() {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) headerContainer.innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
  }

  function carregarFooter() {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) footerContainer.innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar o rodapé:', error));
  }

  const storageKey = 'coberturasLists';
  const selectedKey = 'coberturasSelectedListId';

  let lists = JSON.parse(localStorage.getItem(storageKey)) || [];
  let selectedListId = localStorage.getItem(selectedKey) || null;

  const toggleBtn = document.getElementById('toggleListsBtn');
  const listsContent = document.getElementById('listsContent');
  const listsContainer = document.getElementById('listsContainer');
  const newListForm = document.getElementById('newListForm');
  const newListTitle = document.getElementById('newListTitle');
  const newItemForm = document.getElementById('newItemForm');
  const newItemText = document.getElementById('newItemText');
  const selectedListTitle = document.getElementById('selectedListTitle');
  const editTitleInput = document.getElementById('editTitleInput');
  const renameListBtn = document.getElementById('renameListBtn');
  const deleteListBtn = document.getElementById('deleteListBtn');
  const clearCompletedBtn = document.getElementById('clearCompletedBtn');
  const itemsList = document.getElementById('itemsList');
  const completedList = document.getElementById('completedList');
  const noListSelected = document.getElementById('noListSelected');
  const itemsArea = document.getElementById('itemsArea');
  const contador = document.getElementById('contador');

  function saveData() {
    localStorage.setItem(storageKey, JSON.stringify(lists));
    localStorage.setItem(selectedKey, selectedListId);
  }

  function getSelectedList() {
    return lists.find((list) => list.id === selectedListId) || null;
  }

  function renderLists() {
    if (!listsContainer) return;
    listsContainer.innerHTML = '';

    lists.forEach((list) => {
      const li = document.createElement('li');
      li.className = `list-group-item d-flex justify-content-between align-items-center ${list.id === selectedListId ? 'active' : ''}`;

      li.innerHTML = `
        <span>${list.title}</span>
        <div class="btn-group">
          <button class="btn btn-sm btn-light select-btn" type="button"><i class="bi bi-arrow-right"></i></button>
          <button class="btn btn-sm btn-danger delete-btn" type="button"><i class="bi bi-trash"></i></button>
        </div>
      `;

      li.querySelector('.select-btn').addEventListener('click', () => {
        selectedListId = list.id;
        saveData();
        render();
      });

      li.querySelector('.delete-btn').addEventListener('click', () => {
        if (confirm('Excluir esta lista?')) {
          lists = lists.filter((item) => item.id !== list.id);
          if (selectedListId === list.id) {
            selectedListId = lists[0]?.id || null;
          }
          saveData();
          render();
        }
      });

      listsContainer.appendChild(li);
    });
  }

  function renderItems() {
    const selectedList = getSelectedList();

    if (!selectedList) {
      if (noListSelected) noListSelected.style.display = 'block';
      if (itemsArea) itemsArea.style.display = 'none';
      if (selectedListTitle) selectedListTitle.textContent = 'Selecione ou crie uma lista';
      if (contador) contador.textContent = 'Concluídos: 0 | Restantes: 0';
      return;
    }

    if (noListSelected) noListSelected.style.display = 'none';
    if (itemsArea) itemsArea.style.display = 'block';
    if (selectedListTitle) selectedListTitle.textContent = selectedList.title;

    if (itemsList) itemsList.innerHTML = '';
    if (completedList) completedList.innerHTML = '';

    let completedCount = 0;
    let remainingCount = 0;

    selectedList.items.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = `list-group-item d-flex justify-content-between align-items-center ${item.done ? 'list-group-item-secondary text-decoration-line-through' : ''}`;

      li.innerHTML = `
        <span>${item.text}</span>
        <div class="btn-group">
          <button class="btn btn-sm ${item.done ? 'btn-warning' : 'btn-success'} toggle-btn" type="button">
            ${item.done ? '↩️' : '✅'}
          </button>
          <button class="btn btn-sm btn-danger delete-item-btn" type="button"><i class="bi bi-trash"></i></button>
        </div>
      `;

      li.querySelector('.toggle-btn').addEventListener('click', () => {
        item.done = !item.done;
        saveData();
        render();
      });

      li.querySelector('.delete-item-btn').addEventListener('click', () => {
        selectedList.items.splice(index, 1);
        saveData();
        render();
      });

      if (item.done) {
        completedList.appendChild(li);
        completedCount++;
      } else {
        itemsList.appendChild(li);
        remainingCount++;
      }
    });

    if (contador) {
      contador.textContent = `Concluídos: ${completedCount} | Restantes: ${remainingCount}`;
    }
  }

  function render() {
    renderLists();
    renderItems();
  }

  if (toggleBtn && listsContent) {
    toggleBtn.addEventListener('click', () => {
      const isCollapsed = listsContent.classList.toggle('collapsed');
      toggleBtn.innerHTML = isCollapsed ? '<i class="bi bi-chevron-down"></i>' : '<i class="bi bi-chevron-up"></i>';
    });
  }

  if (newListForm) {
    newListForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = newListTitle.value.trim();
      if (!title) return;

      const newList = {
        id: Date.now().toString(),
        title,
        items: []
      };

      lists.push(newList);
      selectedListId = newList.id;
      saveData();
      newListTitle.value = '';
      render();
    });
  }

  if (newItemForm) {
    newItemForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const text = newItemText.value.trim();
      const selectedList = getSelectedList();

      if (!text || !selectedList) return;

      selectedList.items.push({ text, done: false });
      saveData();
      newItemText.value = '';
      render();
    });
  }

  if (renameListBtn) {
    renameListBtn.addEventListener('click', () => {
      const selectedList = getSelectedList();
      if (!selectedList) return;

      editTitleInput.value = selectedList.title;
      editTitleInput.classList.remove('d-none');
      editTitleInput.focus();
      editTitleInput.select();

      const applyRename = () => {
        const newTitle = editTitleInput.value.trim();
        if (newTitle) {
          selectedList.title = newTitle;
          saveData();
          render();
        }
        editTitleInput.classList.add('d-none');
      };

      editTitleInput.onkeydown = (event) => {
        if (event.key === 'Enter') {
          applyRename();
        }
        if (event.key === 'Escape') {
          editTitleInput.classList.add('d-none');
        }
      };

      editTitleInput.onblur = applyRename;
    });
  }

  if (deleteListBtn) {
    deleteListBtn.addEventListener('click', () => {
      if (!selectedListId) return;
      const selectedList = getSelectedList();
      if (!selectedList) return;

      if (confirm(`Excluir a lista "${selectedList.title}"?`)) {
        lists = lists.filter((list) => list.id !== selectedListId);
        selectedListId = lists[0]?.id || null;
        saveData();
        render();
      }
    });
  }

  if (clearCompletedBtn) {
    clearCompletedBtn.addEventListener('click', () => {
      const selectedList = getSelectedList();
      if (!selectedList) return;

      selectedList.items = selectedList.items.filter((item) => !item.done);
      saveData();
      render();
    });
  }

  carregarHeader();
  carregarFooter();
  render();
});
