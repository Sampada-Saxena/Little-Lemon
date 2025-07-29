document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const guests = parseInt(document.getElementById("guests").value);

  if (!name || !email || guests <= 0) {
    alert("Please fill all required fields correctly.");
    return;
  }

  document.getElementById("formMessage").innerText = "Thank you! Your table has been reserved.";
  this.reset();
});
