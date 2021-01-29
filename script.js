// First Class Calculating

document.getElementById("ticket-increase").addEventListener("click", function(){
    handleTicketChange(true);
});

document.getElementById("ticket-decrease").addEventListener("click", function(){
    handleTicketChange(false);
});

function handleTicketChange(isIncrease) {
    const ticketInput = document.getElementById("ticket-count");
    const ticketCount = parseInt(ticketInput.value);

   let ticketNewCount = ticketCount;
   if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
   };
   if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
   };
   ticketInput.value = ticketNewCount;
   const ticketTotal = ticketNewCount * 150;
   calculateTotal();
};

// Economy Class Calculating

document.getElementById("economy-ticket-increase").addEventListener("click", function(){
    economyTicketChange(true);
});

document.getElementById("economy-ticket-decrease").addEventListener("click", function(){
    economyTicketChange(false);
});

function economyTicketChange(isIncrease) {
    const ticketInput = document.getElementById("economy-ticket-count");
    const ticketCount = parseInt(ticketInput.value);

   let ticketNewCount = ticketCount;
   if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
   };
   if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
   };
   ticketInput.value = ticketNewCount;
   const ticketTotal = ticketNewCount * 100;
   calculateTotal();
};

// Grandtotal Calculating

function calculateTotal() {
    const ticketInput = document.getElementById("ticket-count");
    const ticketCount = parseInt(ticketInput.value);

    const economyTicketInput = document.getElementById("economy-ticket-count");
    const economyTicketCount = parseInt(economyTicketInput.value);

    const totalPrice = ticketCount * 150 + economyTicketCount * 100;
    document.getElementById("ticket-total").innerText = "$" + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = "$" + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("total-amount").innerText = "$" + grandTotal;
};
