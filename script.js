const Score = document.getElementbyId("score");
const Target = document.getElementbyId("target");
let count = 0;
Target.addEventListner("click", () => {
  count++;
  Score.textContent = count;
  
})
