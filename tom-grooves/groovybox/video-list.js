function createList() {
    const ul = document.getElementById('video-list');
    ul.innerHTML = '';
    for (let i = 0; i < videoUrls.length; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = videoUrls[i].url;
      a.textContent = videoUrls[i].title;
      li.appendChild(a);
      ul.appendChild(li);
    }
  }
  
  function toggleList() {
    const button = document.getElementById('toggle-list-button');
    const list = document.getElementById('video-list');
    if (list.style.display === 'none') {
      list.style.display = 'block';
      button.textContent = 'Hide Track List';
    } else {
      list.style.display = 'none';
      button.textContent = 'Show Track List';
    }
  }
  
  createList();
  
  const button = document.getElementById('toggle-list-button');
  button.addEventListener('click', toggleList);