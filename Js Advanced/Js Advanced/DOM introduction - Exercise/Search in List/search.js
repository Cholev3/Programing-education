function search() {
   let townsRef = document.getElementById("towns");
   let searchTextRef = document.getElementById("searchText");
   let resultRef = document.getElementById("result");
   let towns = Array.from(townsRef.children);

   for (let city of towns) {
      city.style.fontWeight = ''
      city.style.textDecoration = ''
   }

   let matches = 0;

   for (let city of towns) {
      if (city.textContent.includes(searchTextRef.value)) {
         city.style.fontWeight = 'bold'
         city.style.textDecoration = 'underline'
         matches++;
      }

   }

   resultRef.textContent = `${matches} matches found`;
}

