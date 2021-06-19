<template>
    <div class="card">
        <div class="card-container">
            <p>tulisan ini dari component card</p>
            <!-- default slot -->
            <slot></slot>
            <div class="actions">
                <!-- get template from root component by slot name -->
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
}
</script>

<style>
   .card {
        margin: 0 auto; 
        float: none; 
        margin-bottom: 40px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 40%;
        padding-bottom: 20px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .card-container {
        padding: 2px 16px;
    }
</style>