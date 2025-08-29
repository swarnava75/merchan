document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("orderForm");
  const orderMessage = document.getElementById("orderMessage");

  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault(); 

     
      orderMessage.innerText = "🎉 We have received your order successfully!";
      orderMessage.style.display = "block";
      orderMessage.style.color = "#00ffcc";
      orderMessage.style.fontSize = "1.3rem";
      orderMessage.style.fontWeight = "bold";
      orderMessage.style.marginTop = "20px";
      orderMessage.style.textShadow = "0 0 10px rgba(0,255,200,0.8)";

      
      orderForm.reset();

      
      setTimeout(() => {
        orderMessage.style.display = "none";
      }, 5000);
    });
  }
});

