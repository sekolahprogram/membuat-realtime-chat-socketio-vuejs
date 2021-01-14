<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-brand">
                <router-link :to="{name:'home'}" class="navbar-item">Realtime Chat</router-link>
                <a
                    @click="isNavbar = !isNavbar"
                    :class="[`navbar-burger`, {
                        'is-active': isNavbar
                    }]"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <div
                :class="[`navbar-menu`, {
                    'is-active': isNavbar
                }]"
            >
                <div class="navbar-end">
                    <router-link :to="{name:'chat'}" class="navbar-item">Chat</router-link>
                </div>
            </div>
        </div>
    </nav>
    <section class="section">
        <div class="container">
            <router-view />
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isNavbar: false
        }
    }
}
</script>