<template>
    <div>
        <label for="">Name</label>
        <!-- 자식컴포넌트에서 props인 value값을 직접수정하는것이 아닌 부모컴포넌트로 emit통해 이벤트가 발생했다고 알림 -->
        <!-- :value는 v-bind:value의 축약 -->
        <!-- 하위 컴포넌트는 props에 해당하는값에 양방향 바인딩인 v-model을 사용하지않음 -->
        <!-- @input="updateName" 으로 바인딩 해줘도 됨 -->
        <input 
            type="text" 
            :value="value"
            style="padding: 30px; border: 2px solid green;"
            @input="$emit('input', $event.target.value)" 
        >
    </div> 
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true,
            default:"dafault text"
        }
    },
    // methods: {
    //     updateName(e) {
    //         console.log(e.target.value);
    //         this.$emit('update-name', e.target.value); (이벤트명,값)
    //     }
    // }
}
</script>