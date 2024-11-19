function fetchRandomUsers() {
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const userList = document.getElementById('userList');
  
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    userList.innerHTML = '';
  
    fetch('https://randomuser.me/api/?results=10')
      .then(response => {
        if (!response.ok) throw new Error('Ошибка сети');
        return response.json();
      })
      .then(data => {
        loadingElement.style.display = 'none';
        data.results.forEach(user => {
          const userItem = document.createElement('li');
          userItem.classList.add('user-item');
  
          userItem.innerHTML = `
            <img src="${user.picture.medium}" alt="Фото ${user.name.first}">
            <div>
              <strong>${user.name.first} ${user.name.last}</strong><br>
              ${user.email}
            </div>
          `;
  
          userList.appendChild(userItem);
        });
      })
      .catch(error => {
        loadingElement.style.display = 'none';
        errorElement.style.display = 'block';
        console.error('Ошибка:', error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', fetchRandomUsers);
  