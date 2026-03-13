fetch('data/latest.json')
  .then(res => res.json())
  .then(items => {
    const list = document.getElementById('recent-list');
    list.innerHTML = '';

    items.slice(0, 5).forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${item.url}">${item.name}</a>
        <span class="recent-cat">${item.category}</span>
        <span class="recent-date">${item.date}</span>
      `;
      list.appendChild(li);
    });
  })
  .catch(() => {
    document.getElementById('recent-list').innerHTML =
      '<li class="recent-loading">nothing yet</li>';
  });
