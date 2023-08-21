<template>
  <div id="app">
    <!-- router-link 태그로 route이동 -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <!-- 경로에따른 뷰 랜더링 -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
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