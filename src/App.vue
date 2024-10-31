<script>

// registering modal locally
import ModalDishDetails from './components/ModalDishDetails.vue';

export default {

  components: {

    ModalDishDetails

  },


  data() {

    return {

      foodLists: [

        {
          name: "Pizza",
          price: 5000,
          description: "pizza is a perfect meal",
          modalDescription: "Pizza is made with a flat round base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
          url: "/src/assets/images/pizza.png"
        },


        {
          name: "Banga-Stew",
          price: 3000,
          description: "it is a meal made from palm kernel seed which tastes yummy and delious especially when served with white hot rice.",
          modalDescription: "Banga stew is a rich and flavorful Nigerian dish made from palm nuts, usually served with rice or pounded yam.",
          url: "/src/assets/images/banga-stew.avif"
        },


        {
          name: "Egg-Roll",
          price: 1500,
          description: "A taste of egg-roll is nourishing",
          modalDescription: "Egg-rolls are a delicious snack made with a filling of egg, vegetables, and sometimes meat, wrapped in a crispy shell.",
          url: "/src/assets/images/egg-roll.jpg"
        },


        {
          name: "Fried-Rice",
          price: 5000,
          description: "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs,vegetables, seafood, or meat.",
          modalDescription: "Fried rice is a popular dish in many cuisines, often made with leftover rice, mixed with vegetables, eggs, and sometimes meat.",
          url: "/src/assets/images/fried-rice.avif"
        },


        {
          name: "Jollof-Rice",
          price: 1000,
          description: "jollof is a yummy food that tastes good",
          modalDescription: "Jollof rice is a beloved West African dish made with rice, tomatoes, and spices, often served at parties and celebrations.",
          url: "/src/assets/images/jollof-rice.jpeg"
        },


        {
          name: "Banga-Stew",
          price: 3000,
          description: "it is a meal made from palm kernel seed which tastes yummy and delious especially when served with white hot rice.", modalDescription: "Banga stew is a rich and flavorful Nigerian dish made from palm nuts, usually served with rice or pounded yam.",
          url: "/src/assets/images/banga-stew.avif"
        },

      ],

      selectedFood: null,
      isModalVisible: false,
    };
  },

  methods: {

    showModal(food) {
      this.selectedFood = food;
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
      this.selectedFood = null;
    },

    addToCart(food, event) {
      event.stopPropagation(); // Prevents modal from opening
      food.addedToCart = true; // Mark the item as added to cart
      food.quantity = 1; // Set initial quantity to 1
    },
    incrementQuantity(food, event) {
      event.stopPropagation(); // Prevents the modal from opening
      food.quantity++;
    },
    decrementQuantity(food, event) {
      event.stopPropagation(); // Prevents the modal from opening
      if (food.quantity > 1) {
        food.quantity--;
      }
    },
    calculateTotal(food) {
      return food.price * food.quantity;
    },
  },

};



</script>

<template>
  <div class="foodOrderingAppMain">

    <h1 id="mainHeading">COME 'N' CHOW FOOD ORDERING APPLICATION</h1>
    <input type="text" placeholder="search food" class="search-input">

    <div class="food-container">
      <ul>
        <li v-for="food in foodLists" @click="showModal(food)" :key="food.name">
          <h3>{{ food.name }}</h3><br>
          <img :src="food.url"> <br>
          <h4> {{ food.price }} </h4> <br>
          <h4> {{ food.description }} </h4>

          <!-- <button @click="addToCart(food, $event)">Add to Cart</button> -->
          <button v-if="!food.addedToCart" @click="addToCart(food, $event)">Add to Cart</button>


          <div v-else>
            <!-- Increment and Decrement buttons with stop Propagation to prevent modal opening -->
            <button @click="decrementQuantity(food, $event)">-</button>
            <span>{{ food.quantity }}</span>
            <button @click="incrementQuantity(food, $event)">+</button>
            <!-- Calculate and display the total price -->
            <p>Total: {{ calculateTotal(food) }}</p>
          </div>
        </li>
      </ul>
    </div> 

    <ModalDishDetails v-if="isModalVisible" :food="selectedFood" :visible="isModalVisible" @close="closeModal" />

    <cart-summary />

  </div>

</template>




<style>
.food-container ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 50px;
}

img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

li {
  width: 30%;
  list-style: none;
  background-color: #FFF4D4;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

li:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.foodOrderingAppMain {
  text-align: center;
}

h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

h4 {
  font-size: 1.2em;
  color: #666;
}

#mainHeading {
  background-color: #ffe598;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 50px;
}

button {
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e65c00;
}

/* Quantity controls */
div {
  margin-top: 10px;
}

.cart-item {
  margin-bottom: 20px;
}

.order-container {
  text-align: center;
  margin-top: 20px;
}

.place-order-btn {
  background-color: #ff6600;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.place-order-btn:hover {
  background-color: #e65c00;
}

.search-input {
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 20%;
  margin: 0;
}


</style>
