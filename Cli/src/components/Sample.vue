<template>
    <div>
        <p>header</p>
        <!-- :key="value 식으로 부모컴포넌트에 data전달 가능 -->
        <slot name="header" :SampleData="SampleData"></slot>
        <p>Body</p>
        <slot></slot>
        <p>footer
        </p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'default title'
        },
        name: {
            type: String,
            default: 'default name'
        },

    },
  data(){
    return{
      SampleData:'SampleData'
    }
  }

    // props를 자식컴포넌트에서 수정하면 안됨
    // methods: {
    //     updateName() {
    //         this.name = 'name Updated';
    //     }
    // }
}
</script>

<style scoped>

</style>