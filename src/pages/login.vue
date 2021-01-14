<template>
    <div class="columns is-centered">
        <div class="column is-6">
            <form @submit.prevent="submit" method="post">
                <div class="field">
                    <div class="control">
                        <input v-model="name" type="text" class="input" placeholder="masukan nama...">
                    </div>
                </div>
                <div class="field">
                    <button type="submit" class="button is-primary">Masuk</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },

    methods: {
        submit() {
            localStorage.setItem('name', this.name);
            this.$router.push({
                name: 'chat'
            })
        }
    },

    mounted() {
        if (localStorage.getItem('name')) {
            this.$router.push({
                name: 'chat'
            })
        }
    }
}
</script>