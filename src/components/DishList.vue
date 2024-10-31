<template>
    <div>
        <h1> {{ food.name }} </h1>
        <h4> {{ food.price }} </h4>
        <p> {{ food.description }} </p>

    </div>
</template>

<script>

export default {

    props: {
        food: {
            type: Object,
            required: true,
        }
    }
}
</script>



<style>

</style>

