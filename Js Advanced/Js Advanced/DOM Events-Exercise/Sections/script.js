function create(words) {
   const contentRef = document.getElementById('content');

   for (let section of words) {

      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = section;
      paragraph.style.display = 'none'
      div.appendChild(paragraph);
      contentRef.appendChild(div);

      div.addEventListener('click', showText)

      function showText() {
         paragraph.style.display = '';
      }
   }
}