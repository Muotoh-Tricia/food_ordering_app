import "./css/main.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DishList from './components/DishList.vue'
import DishItem from './components/DishItem.vue'
import CartSummary from './components/CartSummary.vue'
import DishDetails from './components/DishDetails.vue'
// import ModalDishDetails from './components/ModalDishDetails.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('dish-list', DishList)
app.component('dish-item', DishItem);
app.component('cart-summary', CartSummary)
app.component('dish-details', DishDetails)
// app.component('modal-dish-details', ModalDishDetails)

app.mount('#app')
