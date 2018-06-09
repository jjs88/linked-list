(function() {
  let data = {
    count: 0,
    read: 0,
    unread: 0,
    links: 0
  }

  const inputTitle = document.querySelector('.input__title');
  const inputUrl = document.querySelector('.input__url');
  const btnEnter = document.querySelector('.btn-enter');
  const bookmarks = document.querySelector('.bookmarks');
  const bookmarksLink = document.querySelector('.bookmarks__link');
  const errorBox = document.querySelector('.error');

  inputTitle.addEventListener('input', ()=> {
    if(!errorBox.classList.contains('hide')) {
      errorBox.classList.add('hide');
    }
    btnEnter.disabled = false;
  });

  inputUrl.addEventListener('input', ()=> {
    btnEnter.disabled = false;
  })
  
  btnEnter.addEventListener('click', ()=> {

    if(inputUrl.value === '' || inputTitle.value === '') {
      errorBox.classList.remove('hide');
      btnEnter.disabled = true;
      return;
    }

    bookmarks.innerHTML+= bookmarkTemplate();
    data.unread++;
    data.links++
  });


  bookmarks.addEventListener('click', function(e) {
    if(e.target.innerHTML === 'Read') {
      e.target.classList.toggle('read');
      const readCnt = parseInt(document.getElementsByClassName('read').length);
      data.read = readCnt;
      // data.unread = data.unread - readCnt;
      // console.log(data.unread, data.read);
    }

    if(e.target.innerHTML === 'Delete') {
      const item = e.target.parentNode.parentNode;
      bookmarks.removeChild(item);
      data.links--;
    }
  })















  function bookmarkTemplate() {
   return temp = `
      <div class="bookmarks__item">
        <p class="item">${inputTitle.value}</p>
        <p class="item">
          <a class ="item__link"href="${inputUrl.value}">${inputUrl.value}</a>
        </p>
        <div class="bookmarks__links">
          <a class="bookmarks__link" href="#">Read</a>
          <a class="bookmarks__link delete" href="#">Delete</a>
        </div>
      </div>`;
  }






})();