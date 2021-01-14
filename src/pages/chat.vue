<template>
    <div class="columns is-centered">
        <div class="column is-6">
            <form @submit.prevent="submit" method="post">
                <div class="field">
                    <div class="control">
                        <input v-model="content" type="text" class="input" placeholder="tulis pesan...">
                    </div>
                </div>
            </form>
            <div class="content mt-5">
                <div class="columns is-multiline is-mobile">
                    <template
                        v-for="(item, index) in data"
                        :key="index"
                    >
                        <div class="column is-6">
                            <article v-if="item.name != name" class="message">
                                <div class="message-header">
                                    <strong>{{ item.name }}</strong>
                                </div>
                                <div class="message-body">
                                    {{ item.content }}
                                </div>
                            </article>
                        </div>
                        <div class="column is-6">
                            <article v-if="item.name == name" class="message">
                                <div class="message-body">
                                    {{ item.content }}
                                </div>
                            </article>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'

export default {
    data() {
        return {
            socket: io('http://localhost:3000'),
            name: '',
            content: '',
            data: []
        }
    },

    created() {
        this.socket.on('get-content', (data) => {
            this.data.unshift(data)
        })
    },

    methods: {
        submit() {
            let obj = {
                name: this.name,
                content: this.content
            }

            this.data.unshift(obj)
            this.socket.emit('send-content', obj)

            this.content = ''
        }
    },

    mounted() {
        if (localStorage.getItem('name')) {
            this.name = localStorage.getItem('name')
        } else {
            this.$router.push({
                name: 'login'
            })
        }
    }
}
</script>