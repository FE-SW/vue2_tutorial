<template>
  <div>
    <h1>This is Home page</h1>
    <form action="">
      <!-- v-model: 태그-데이터 양방향 바인딩 -->
      <!-- v-model로 양방향 바인딩 설정을 안했다면 @update-name="updateName" 을 바인딩시켜 name값을 변경함 !-->
      <!-- 컴포넌트에 v-model="값" 설정은 값이 해당 하위컴포넌트 props로 전달됨 -->
      <!-- 여기서 @update-name는 자식컴포넌트에서 정의한 이벤트명 -->
      <!-- <InputField :value="name" @update-name="updateName"/> -->
      <InputField v-model="name"/>
      <br><button @click="updateName(123)">Submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
export default {
  components: {
    InputField
  },
  data() {
    return {
      name: 'name'
    }
  },
  //라이프 사이클 메서드 훅
  beforeCreate() {
    console.log('beforeCreate', this.name); //undefined
  },

  created() {
    console.log('created', this.name); //name
  },
  beforeMount() {
    alert('beforeMount')
  },
  mounted() {
    alert('mounted')
  },
  beforeUpdate() {
    alert('beforeUpdate')
  },
  updated() {
    alert('updated')
  },
  beforeDestroy() {
    alert('beforeDestroy')
  },
  destroyed() {
    alert('destroyed')
  },
  methods: {
    updateName(name) {
      this.name = name;
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>

// Vue 2의 라이프사이클 훅:

// 1.beforeCreate: 인스턴스가 생성되었지만 데이터와 이벤트가 설정되기 전에 호출됩니다.

// 2.created: 인스턴스가 생성되고 데이터와 이벤트가 설정된 후 호출됩니다. 
// 이 시점에서 this를 사용하여 데이터 속성에 접근할 수 있습니다. 
// 하지만, 템플릿과 가상 DOM은 아직 마운트 및 렌더링되지 않았습니다.

// 3.beforeMount: 마운트 시작 직전, 즉 render 함수가 첫 번째로 실행되기 전에 호출됩니다.

// 4.mounted: Vue 인스턴스가 DOM에 마운트된 직후 호출됩니다. 모든 자식 컴포넌트도 마운트된 상태입니다. 
//이 시점에서 DOM 관련 처리를 안전하게 수행할 수 있습니다.

// 5.beforeUpdate: 데이터 변경에 따라 가상 DOM이 다시 렌더링 및 패치되기 전에 호출됩니다.

// 6.updated: 가상 DOM이 다시 렌더링 및 패치된 후 호출됩니다. 이 시점에서 DOM이 변경된 상태입니다. 
// 그러나 이 훅이 호출될 때 추가적인 상태 변경을 피해야 합니다.

// 7.beforeDestroy: Vue 인스턴스가 파괴되기 직전에 호출됩니다. 이 시점에서 인스턴스는 여전히 완전히 기능합니다.

// 8.destroyed: Vue 인스턴스가 파괴된 후에 호출됩니다. 모든 자식 인스턴스와 이벤트 리스너가 제거된 상태입니다

//참고:https://v2.ko.vuejs.org/v2/guide/instance.html#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%ED%9B%85