<template>
    <div>
        <br/>
        <h1>User List</h1>
        <!-- v-for는 항상 key를 넣어줘야함 -->
        <div v-for="user in users" :key="user.id">
            <li>{{ user.name }}</li>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        created() {
            this.getUsers();
        },
        computed: {
            //map helper
            //mapState,mapGetters는 computed에 넣어주고, mapMutations,mapActions는 method에 넣어줘야함
            
            ...mapState('user', ['users']) //모둘명,[state]
            // ...mapState('user', {
            //     users: state => state.users
            // })
            // ...mapState({
            //     users: state => state.user.users
            // })

            // ...mapState(['todos','users'])
            // ...mapState({people: 'users'}) //다른 이름으로 쓰고싶을때
            // users() {
            //     return this.$store.state.users;
            // },
            // todos() {
            //     return this.$store.state.todos;
            // }
        },
        methods: {
            //map helper
            ...mapActions('user', ['getUsers']) //모듈명,[action]
            // getUsers() {
            //     this.$store.dispatch('getUsers');
            // }
        }
    }
</script>