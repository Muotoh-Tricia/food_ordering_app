<template>
    <teleport to="body">
        <div class="modal" v-if="visible" @click.self="closeModal">
            <div class="modal-content">
                <p> {{ food.modalDescription }} </p>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    props: {
        food: {
            type: Object,
            required: true,
        },
        visible: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
};
</script>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;    
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Ensure it's above other content */
}

.modal-content {
    background: white;
    padding: 30px;
    border-radius: 8px;
    font-weight: 600;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-align: center;
    font-size: 15px;
    margin: 10px;
    line-height: 1.5rem;
    width: 20%;
}
</style>