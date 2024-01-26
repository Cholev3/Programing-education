function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let trowsRef = document.querySelectorAll("tbody tr");
   let searchRef = document.getElementById("searchField");
   let rowsArr = Array.from(trowsRef);


   function onClick() {

      for (let row of rowsArr) {
         let currentArr = Array.from(row.children);
         let bufferArr = [];

         for (let currentRow of currentArr) {
            if (currentRow.textContent.includes(searchRef.value)) {
               row.classList.add("select");
               break;
            } else {
               row.classList.remove("select");
            }
         }


      }
      searchRef.value = '';
   }
}