(function () { 
  const shuffleButton = document.querySelector("#shuffle")
  const sortButton = document.querySelector("#sort")
  const mainContent = document.querySelector("main")
  const nodeList = document.querySelectorAll("main > div")
  let rows = Array.from(nodeList)

  shuffleButton.addEventListener('click', function (e) {
    e.preventDefault()
    shuffle(rows)
    renderUI(rows)
  })

  sortButton.addEventListener('click', function (e) {
    e.preventDefault()
    sortCards(rows)
    renderUI(rows)
  })

  function renderUI(array) {
    array.forEach(element => {
      mainContent.appendChild(element)
    });
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function sortCards(array) {
    array.sort(function (a, b) {
      const compareA = a.getAttribute("id").split("_")[1]     
      const compareB = b.getAttribute("id").split("_")[1]     
      return compareA - compareB
    })
  }

})()