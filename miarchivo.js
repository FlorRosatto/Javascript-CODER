document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    // Obtener referencia al formulario
    const form = document.getElementById('signup-form');

    // Agregar evento de envío al formulario
    form.addEventListener('submit', function(event) {
        // Prevenir el envío predeterminado del formulario
        event.preventDefault();

        // Capturar valores de los campos del formulario
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const age = document.getElementById('age').value;
        const motivation = document.getElementById('motivation').value;

        // Mostrar los valores capturados en la consola
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Age:', age);
        console.log('Motivation:', motivation);

      document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});


document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const countrySelect = document.getElementById('country-select');
    const greetingMessage = document.getElementById('greeting-message');

   if (submitBtn && countrySelect && greetingMessage) {
    submitBtn.addEventListener('click', function() {
        const selectedCountry = countrySelect.value;
        if (selectedCountry) {
            greetingMessage.textContent = `Hello! You are from ${selectedCountry}.`;
        } else {
            greetingMessage.textContent = 'Sorry we do not teach other countries.';
        }
    });
}

const startBtn = document.getElementById('start-btn');
if (startBtn && greetingMessage) {
    startBtn.addEventListener('click', function() {
        const country = prompt("Please tell us where you are from (options: Argentina, Uruguay, Chile, Colombia, Ecuador, Mexico, Spain):");
        if (country) {
            const validCountries = ['Argentina', 'Uruguay', 'Chile', 'Colombia', 'Ecuador', 'Mexico', 'Spain'];
            if (validCountries.includes(country)) {
                greetingMessage.textContent = `Hello! You are from ${country}.`;
            } else {
                greetingMessage.textContent = 'Please enter a valid country from the options provided.';
            }
        } else {
            greetingMessage.textContent = 'No country entered.';
        }
    });
}

     });function applyDiscount(plan) {
          let originalPrice;
          let discountedPrice;
          switch(plan) {
              case 1:
                  originalPrice = 100;
                  break;
              case 2:
                  originalPrice = 200;
                  break;
              case 3:
                  originalPrice = 300;
                  break;
              default:
                  return;
          }
          discountedPrice = originalPrice * 0.9; // 10% discount
          document.getElementById(`discounted-price-${plan}`).textContent = `Discounted Price: $${discountedPrice.toFixed(2)}`;
      }

      document.addEventListener("DOMContentLoaded", function() {
        const plans = [
            { 
                id: 1, 
                name: "Plan 1", 
                description: "Basic English Language Plan: 'Starter'", 
                targetAudience: "Beginners and those looking to build a strong foundation in English.",
                price: 100 
            },
            { 
                id: 2, 
                name: "Plan 2", 
                description: "Intermediate English Language Plan: 'Progressive'", 
                targetAudience: "Learners with some prior English knowledge aiming to improve their skills.",
                price: 200 
            },
            { 
                id: 3, 
                name: "Plan 3", 
                description: "Advanced English Language Plan: 'Fluency Mastery'", 
                targetAudience: "Advanced learners striving for fluency and advanced proficiency.",
                price: 300 
            }
        ];
    
        const plansContainer = document.getElementById("plans-container");
        if (plansContainer) {
        plans.forEach(plan => {
            const card = document.createElement("div");
            card.className = "cardsContainerPlans";
    
            card.innerHTML = `
                <div class="titleCard">
                    <h3>${plan.name}</h3>
                    <span>${plan.description}</span>
                </div>
                <ul>
                    <li>Target Audience: ${plan.targetAudience}</li>
                </ul>
                <div class="containerBtn"><button class="buttonCards"><a href="./pages/plans.html">View More</a></button></div>
                <div class="card">
                    <p>Price: $${plan.price}</p>
                    <button class="discount-button" data-plan-id="${plan.id}">Apply 10% Discount</button>
                    <p id="discounted-price-${plan.id}"></p>
                </div>
            `;
    
            plansContainer.appendChild(card);
        });
    
        function applyDiscount(planId) {
            const plan = plans.find(p => p.id === planId);
            const discountedPrice = plan.price * 0.9;
            document.getElementById(`discounted-price-${planId}`).textContent = `Discounted Price: $${discountedPrice.toFixed(2)}`;
        }
    
        const buttons = document.querySelectorAll(".discount-button");
    
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const planId = parseInt(this.getAttribute("data-plan-id"));
                applyDiscount(planId);
            });
        });
    } else {
        console.error("Element with ID 'plans-container' not found.");
    }
});})})