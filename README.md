# Vue, Vuex 정리

## Instance
Vue 인스턴스는 Vue.js에서 생성된 객체이다.<br/>
인스턴스는 사용자 정의 데이터, 메소드, 라이프사이클 훅 등 다양한 기능을 갖는다.<br/>
이 인스턴스를 통해 DOM과 데이터를 반응적으로 연결하며, Vue 애플리케이션의 기본 구성 단위를 형성한다.

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue2 basic</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        {{ name }}
    </div>
    <script>
        //뷰 전역 인스턴스
        new Vue({
            el: '#app',
            data: {
                name: 'name'
            }
        })
    </script>
</body>
</html>
```

## Methods
methods 속성을 통해 인스턴스에 함수를 추가할 수 있다.<br/> 
이 메소드들은 인스턴스의 다른 속성과 상호 작용하거나, html 태그의 이벤트 리스너로 사용될 수 있다

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue2 basic</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <!-- 중괄호 두개 -->
        {{ nextYear('안녕') }}
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                person: {
                    name: 'name',
                    age: 20
                }
            },
            methods: {
                nextYear(greeting) {
                    return greeting + '! ' +this.person.name + ' 는 내년에 ' + (this.person.age + 1) + '살 입니다';
                },
                otherMethod: function() {
                    this.nextYear();
                }
            }
        })
    </script>
</body>
</html>
```

## V-Bind
v-bind는 Vue의 디렉티브 중 하나로, HTML 속성을 Vue 인스턴스의 데이터와 바인딩하기 위해 사용된다.<br/> 
이를 통해 동적으로 HTML 요소의 속성값을 지정할 수 있다

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue2 baisc</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <!-- v-bind 생략 -->
        <!-- 태그와 데이터 바인딩작업 -->
        <input :type="type" :value="inputData">
        <a :href="getYouTubeLink('youtube_link')">유투브 링크/a>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                inputData: 'hello',
                type: 'text',
                link: 'https://www.youtube.com/'
            },
            methods: {
                getYouTubeLink(channel) {
                    return this.link + channel;
                },
            }
        })
    </script>
</body>
</html>
```

## V-Model
v-model는 Vue의 양방향 데이터 바인딩 디렉티브이다.<br/> 
주로 입력 양식 요소에 사용되며, 사용자의 입력과 Vue 인스턴스의 데이터를 자동으로 서로 연결하고 동기화한다.<br/> 
즉, 사용자의 입력으로 값이 변경되면 Vue 인스턴스의 데이터도 자동으로 업데이트되고, 반대로 데이터의 변경이 입력 필드에도 반영된다.

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue2 basic</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <form v-on:submit.prevent="submit">
            <!-- v-model:양방향 데이터 바인딩 -->
            <!-- <input type="text" :value="text" @keyup="updateText"><br> -->
            <input type="text" v-model="text">
            {{ text }}
            <button type="submit">Submit</button>
        </form>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
               text: 'text'
            },
            methods: {
                // updateText(event) {
                //     this.text = event.target.value;
                // },
                submit() {
                    alert('submitted');
                    console.log('hello');
                },
            }
        })
    </script>
</body>
</html>
```

## Computed
computed는 Vue의 반응형 연산 속성이다.<br> 
기본 데이터를 기반으로 어떤 계산된 결과를 반환하며, 의존하는 상태가 변경될 때만 재계산된다.<br> 
이를 통해 효율적으로 상태 변화에 따른 연산을 처리하고, 그 결과를 캐시하여 성능을 최적화할 수 있다.

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue2 basic</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <button @click="changeMessage">Clcik</button>
        {{ reversedMessage }}
        {{ reversedMessage }}
        {{ reversedMessage }}
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
               message: 'msg'
            },
            methods: {
                changeMessage() {
                    this.message = 'msgChanged';
                }
            },
            //템플릿 내 간단한 연산을 넣는것은 괜찮지만 복잡한 연산을 넣는것은 코드가 비대해지고 유지보수가 어려움
            //이떄 사용되는것이 computed 속성 , 만약 methods로 사용하고싶으면 ()괄호만 넣어주면 됨
            //차이점: computed 속성은 캐싱되며 매번 계산하는것이 아니라 한번계산후 재사용함 (메세지가 바뀌면 다시 계산하고 랜덩링됨)
            computed: {
                reversedMessage() {
                    return this.message.split('').reverse().join('')
                }
            }
        })
    </script>
</body>
</html>
```

## Watched
watch는 Vue에서 특정 데이터의 변화를 감시하는 속성다.<br/>
데이터의 변화를 감지할 때마다 정의된 함수가 호출되어 복잡한 연산, 비동기 요청 또는 수행이 필요한 다른 작업들을 수행할 수 있다.

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue2 basic</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        {{ message }}<br>
        <button @click="changeMessage">Click</button><br>
        {{ updated }}
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
               message: 'msg',
               updated: '1'
            },
            methods: {
                changeMessage() {
                    this.message = 'msgChanged';
                }
            },
            computed: {
                reversedMessage() {
                    return this.message.split('').reverse().join('')
                }
            },
            
            // 대부분의 경우 computed 속성이 더 적합하지만 사용자가 만든 감시자가 필요한 경우가 있다. 
            // 그래서 Vue는 watch 옵션을 통해 데이터 변경에 반응하는 보다 일반적인 방법을 제공한다. 
            // 이는 데이터 변경에 대한 응답으로 비동기식 또는 시간이 많이 소요되는 조작을 수행하려는 경우에 가장 유용하다.

            watch: {
                //message라는 데이터를 감시 //message가 변경이 되면 실행됨
                message(newVal, oldVal) {
                    console.log(newVal, oldVal);
                    this.updated = 'updated';
                }
            }
        })
    </script>
</body>
</html>
```

## V-If
조건에 따라 요소를 렌더링 해주는 기능을 제공한다. 
조건이 true일 경우 요소는 DOM에 나타내고, 조건이 false일 경우 해당는 DOM에서 완전히 제거된다.

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue2 baisc</title>
    <style>
        .red {
            color: red;
        }

        .font-bold {
            font-weight: bold;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <!-- v-if: 조건에 따라 태그가 랜더링됨 -->
        <template v-if="number === 1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </template>
        <div v-else-if="number === 2">Hi</div>
        <div v-else>No</div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                number: 1,
            },
            methods: {
                increaseNumber() {
                    this.number++;
                },
            },
        })
    </script>
</body>
</html>
```

## V-Show
조건에 따라 요소의 표시를 제어한다.<br/>
조건이 true일 경우 요소는 DOM에 나타내고, 조건이 false일 경우 "display: none" 스타일이 적용되어 요소가 숨겨지지만 DOM에는 여전히 존재한다.

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue2 baisc</title>
    <style>
        .red {
            color: red;
        }

        .font-bold {
            font-weight: bold;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">        
        <!-- v-show:  data값에 따라(true,false)에 따라 랜더링-->
        <!-- 차이점은 v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있음 . 
        v-show는 단순히 엘리먼트에 display CSS 속성을 토글한다.
        데이터가 자주바뀌면 v-show, 런타임시 잘 바뀌지 않으면 v-if사용이 권장됨 -->
        <div v-show="show">Yes</div>
        <br>
        <button @click="toggle">Toggle</button>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                show: false
            },
            methods: {
                toggle() {
                    this.show = !this.show;
                }
            },
        })
    </script>
</body>
</html>
```

## V-For
리스트나 객체의 항목을 기반으로 요소나 컴포넌트를 반복적으로 렌더링한다.

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue2 basic</title>
    <style>
        .red {
            color: red;
        }

        .font-bold {
            font-weight: bold;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <div>
            {{ people[0].name }} {{ people[0].age }}
        </div>
        <div>
            {{ people[1].name }} {{ people[1].age }}
        </div>
        <div>
            {{ people[2].name }} {{ people[2].age }}
        </div>
        <div>
            {{ people[3].name }} {{ people[3].age }}
        </div>

        <hr>

        <!-- v-for:반복문 -->
        <!-- Vue에서 개별 DOM 노드들을 추적하고 기존 엘리먼트를 재사용, 재정렬하기 위해서
                 v-for의 각 항목들에 고유한 key 속성을 제공해야 한다. 
                 key에 대한 이상적인 값은 각 항목을 식별할 수 있는 고유한 ID여야함.  -->
        <div v-for="(person, index) in people" :key="person.id">
            {{ person.name }} {{ person.age }} {{ index }}
        </div>
        
        <!-- 객체 사용시 -->
        <div v-for="(value, name, index) in object">
            {{ index }}. {{ name }}: {{ value }}
        </div>
        
        </div>
        <script>
        new Vue({
            el: '#app',
            data: {
                people: [
                    { id: 1, name: 'a', age: 20 }, 
                    { id: 2, name: 'b', age: 21 }, 
                    { id: 3, name: 'c', age: 22 }, 
                    { id: 4, name: 'd', age: 23 }, 
                    { id: 5, name: 'e', age: 24 }, 
                    { id: 6, name: 'e', age: 25 },
                ]
            },
            methods: {
               
            },
        })
    </script>
</body>
</html>
```

## Component
리스트나 객체의 항목을 기반으로 요소나 컴포넌트를 반복적으로 렌더링한다.

```java
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue2 baisc</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        <!-- {{ name }}
        button click 핸드러바인딩 같은경우 @click="메서드" 형식을 따름
       <button @click="changeText">Click</button>
        -->
        <custom-button></custom-button>
    </div>

    
    <div id="app-1">
        <!-- {{ name }}<br>
       <button @click="changeText">Click</button>
        -->
        <!-- app-1 인스턴스에 컴포넌트 등록을 안했으니 화면에 나타나지않음 -->
        <custom-button></custom-button>
    </div>
    <script>

        // 전역컴포넌트 (어떤 뷰인스턴스든지 사용할 수 있음)
        // Vue.component('hello-world', {
        //     template: '<div>hello world</div>'
        // });
        // Vue.component('custom-button', {
        //     template: `
        //     <div>
        //         {{ name }}<br>
        //         <hello-world></hello-world>
        //         <button @click="changeText">Click</button>
        //     </div>
        //     `,
        //  데이터는 객체로 넘길시 레퍼런스로 넘기기떄문에 함수로 변경해줌
        //     data() {
        //         return {
        //             name: 'name'
        //         }
        //     },
        //     methods: {
        //         changeText() {
        //             this.name = 'name updated';
        //         }
        //     },
        // });

        //지역컴포넌트
        const HelloWorld = {
            template: '<div>hello world</div>'
        };

        const CustomButton = {
            components: {
                'hello-world': HelloWorld
            },
            template: `
            <div>
                {{ name }}<br>
                <hello-world></hello-world>
                <button @click="changeText">Click</button>
            </div>
            `,
            data() {
                return {
                    name: 'name'
                }
            },
            methods: {
                changeText() {
                    this.name = 'name updated';
                }
            },
        };

        const app = new Vue({
            el: '#app',
            components: {
                'custom-button': CustomButton
            }
        })

        const app1 = new Vue({
            el: '#app-1',
        })
    </script>
</body>
</html>
```

## Props
props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방식이다.<br/>
props는 읽기 전용이므로 자식 컴포넌트에서는 수정할 수 없다.

```java
<!-- 부모 컴포넌트 -->
<template>
  <ChildComponent :msg="parentMessage"/>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: "Hello from Parent!"
    }
  }
}
</script>
```

```java
<!-- 자식 컴포넌트 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    msg: {
      //props의 타입,필수여부,기본텍스트 설정
      type:String,
      required:false,
      default: 'default title'
    }
  }
}
</script>
```

```java
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      //props의 타입,필수여부,기본텍스트 설정
      type:String,
      required:false,
      default: 'default title'
    }
  }
}
</script>
```

## Life Cycle Hook
뷰의 라이프사이클 훅은 컴포넌트의 다양한 단계에서 실행되는 사용자 정의 로직을 추가하기 위한 메소드들이다.<br/> 
이 훅들은 컴포넌트의 생성부터 소멸까지의 단계에서 특정 타이밍에 코드를 실행할 수 있게 해준다.

1.beforeCreate: 
* 인스턴스가 생성되었지만 데이터와 이벤트가 설정되기 전에 호출

2.created: 
* 인스턴스가 생성되고 데이터와 이벤트가 설정된 후 호출
* 이 시점에서 this를 사용하여 데이터 속성에 접근할 수 있음 
* 템플릿과 가상 DOM은 아직 마운트 및 렌더링되지 않음

3.beforeMount: 
* 마운트 시작 직전, 즉 render 함수가 첫 번째로 실행되기 전에 호출

4.mounted: 
* Vue 인스턴스가 DOM에 마운트된 직후 호출
* 모든 자식 컴포넌트도 마운트된 상태 
* 이 시점에서 DOM 관련 처리를 안전하게 수행할 수 있음

5.beforeUpdate: 
* 데이터 변경에 따라 가상 DOM이 다시 렌더링 및 패치되기 전에 호출

6.updated: 
* 가상 DOM이 다시 렌더링 및 패치된 후 호출
* 이 시점에서 DOM이 변경된 상태 

7.beforeDestroy:
* Vue 인스턴스가 생명주기가 종료되기 직전에 호출된다. 이 시점에서 인스턴스는 여전히 완전히 기능함

8.destroyed: 
* Vue 인스턴스가 생명주기가 종료된 후에 호출됩니다. 모든 자식 인스턴스와 이벤트 리스너가 제거된 상태

<br/>

생명주기가 종료된다는것은 몇가지 주요사항이 포함되는데,<br/>
* DOM에서의 제거: 해당 Vue 컴포넌트에 연결된 DOM 요소들은 실제 DOM에서 제거됨
* 이벤트 리스너 제거: Vue 컴포넌트 내에서 등록된 모든 이벤트 리스너들은 제거됨. 이로 인해 메모리 누수의 위험이 줄어듬
* 하위 컴포넌트 생명주기 종료: 해당 컴포넌트의 모든 하위 컴포넌트들도 생명주기가 종료됨
* 리액티브 디펜던시 제거: Vue의 반응성 시스템에 의해 관찰되고 있는 데이터의 디펜던시들도 제거됨

<br/>

```java
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
```

참고:<br/>
https://v2.ko.vuejs.org/v2/guide/instance.html#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%ED%9B%85

## Vue Router
Vue.js의 공식 라우팅 라이브러리로,<br/>
싱글 페이지 애플리케이션(SPA)의 페이지 전환 및 로직을 관리합니다.<br/> 
URL에 따라 다른 컴포넌트를 클라이언트에서 동적으로 렌더링하며, 브라우저의 히스토리와의 통합을 제공한다.

```java
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```

```java
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
```

## Slot
 slot은 컴포넌트의 재사용성을 높이기 위한 중요한 기능이.<br/>
 slot을 사용하면 부모 컴포넌트에서 자식 컴포넌트의 템플릿 내로 사용자 정의 컨텐츠를 삽입할 수 있다.
<br/>

슬롯은 사용방법에 따라 몇가지로 나눌 수가 있는데,

1.기본 슬롯: 
* 자식 컴포넌트 내에 <slot></slot> 태그를 넣으면 부모 컴포넌트에서 해당 자식 컴포넌트 태그 내부에 넣은 내용이 해당 위치에 삽입다.

```java
<!-- 부모 컴포넌트에서의 사용 -->
<child-component>부모에서 전달한 내용</child-component>

!-- 자식 컴포넌트 -->
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

2.슬롯의 기본 컨텐츠: 
* 슬롯에 기본 컨텐츠를 제공할 수 있다. 부모 컴포넌트에서 해당 슬롯에 컨텐츠를 제공하지 않았을 때만 기본 컨텐츠가 표시다.

```java
<!-- 부모 컴포넌트에서의 사용 -->
<child-component/>

!-- 자식 컴포넌트 -->
<template>
  <div>
    <slot>컨텐츠</slot>
  </div>
</template>
```

3.명명된 슬롯: 
* 여러 개의 슬롯을 자식 컴포넌트에 지정할 수 있다. 각각의 슬롯에는 name 속성을 사용하여 고유한 이름을 부여다

```java
<!-- 부모 컴포넌트에서의 사용 -->
<child-component>
  <template v-slot:header>헤더 내용</template>
  본문 내용
  <template v-slot:footer>푸터 내용</template>
</child-component>


<!-- 자식 컴포넌트 -->
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```

4.명명된 슬롯 + 슬롯 속성 (또는 슬롯 props)을 사용하여 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방식

```java
동작과정을 설명하면,

1.명명된 슬롯: <slot name="header" :SampleData="SampleData"></slot>에서 name="header" 부분은 명명된 슬롯을 나타냄
이 슬롯은 부모 컴포넌트에서 <template #header="{ SampleData }">와 같은 방식으로 참조됨

2.슬롯 속성 (슬롯 props): <slot name="header" :SampleData="SampleData"></slot>에서 :SampleData="SampleData" 부분은 슬롯 속성을 정의함
이 속성은 부모 컴포넌트의 슬롯 내용에 전달될 수 있으며, 여기서는 SampleData라는 값이 전달됨 
부모 컴포넌트에서는 <template #header="{ SampleData }">와 같은 방식으로 해당 데이터를 받아올 수 있

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Sample>
       <!-- Slot: 하위컴포넌트에 html template을 넣고싶을떄 사용 -->
       <!-- #header="{데이터}" 대신 <template  v-slot:header>식으로도 사용 가능 -->
       <!-- <template #header="props">
        <p>header111 {{ props.SampleData }}</p>
       </template> -->
      <template  #header="{ SampleData }">
        <p>header111 {{ SampleData }}</p>
      </template>
       <!-- #default 대신 <template v-slot:default>식으로도 사용 가능 -->
      <template #default>
        hello22
      </template>
    </Sample>
  </div>
</template>

<script>
import Sample from '@/components/Sample.vue';

export default {
  components: {
    Sample
  },
}
</script>
```

```java

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
```

## Emit
$emit은 Vue 인스턴스에서 사용자 정의 이벤트를 발생시키는 메서드이다. <br/>
주로 자식 컴포넌트에서 부모 컴포넌트에게 통보하기 위해 사용된다.(Props를 자식 컴포넌트에서 수정할 수 없으므로) <br/>
이를 통해 부모 컴포넌트에게 데이터 변경 요청이나 특정 액션의 필요성을 알릴 수 있다.
<br/>

```java
<template>
  <child-component :message="parentMessage" @updateMessage="updateParentMessage"></child-component>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: "Hello from Parent!"
    }
  },
  methods: {
    updateParentMessage(newMessage) {
      this.parentMessage = newMessage;
    }
  }
}
</script>
```

```java
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script>
export default {
  props: ['message'],
  methods: {
    changeMessage() {
      // 새로운 메시지를 정의
      const newMessage = "Hello from Child!";
      // 부모에게 변경을 알림
      this.$emit('updateMessage', newMessage);
    }
  }
}
</script>
```

## Vuex
Vuex는 Vue.js 애플리케이션의 상태 관리 패턴과 라이브러리이다. <br/>
중앙 집중식 저장소 역할을 하며, 컴포넌트 간의 공유된 상태 정보를 관리하는 데 사용된다.<br/>
컴포넌트간 과도한 Props Drilling을 방지해주고, 상태값을 관리하기에 용이하게 해준다.

Vuex의 구성성요소는 크게 4가지로 나뉘는데, 
<br/>
1. state:
* 애플리케이션의 중앙 집중식 저장소로, 컴포넌트 간 공유하는 데이터를 뜻한다.

2. actions:
* 비동기 연산을 포함한 메서드로, 컴포넌트에서 dispatch 될 수 있다.
* 주로 외부 API 호출 또는 복잡한 연산 후 mutations를 호출(commit)하여 state를 변경한다.

3. mutations:
* state를 변경하는 메서드로, 동기적으로 동작한다. state를 직접적으로 변경할 때 사용된다.

4. getters:
* state에서 파생된 값을 반환하는 메서드로, 계산된 속성 같은 역할을 한다.
* 여러 컴포넌트에서 동일한 데이터 변환 로직을 사용할 때 유용하다.

```java
<!-- todo stroe -->

export default {
    namespaced: true, //true로 설정해야 vuex mapState,mapActions를 사용할때 모듈 namespace를 활용할수 있음음
    state: {
        todos: [
            { id: 1, text: 'todo1', checked: false},
            { id: 2, text: 'todo2', checked: false},
        ],

    },
    mutations: {
        //state, payload 가 인자
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    },
    actions: {
        //(context,value)
        //context안에는 commit,dispatch등이 들어있음
        addTodo({ commit }, value) {
            //비동기 작업이 끝나는시점에 commit을 수행(실제론 api 통신코드가 적힘)
            setTimeout(function () {
                commit('ADD_TODO', value);
            }, 500);
        },
        toggleTodo({ commit }, payload) {
            setTimeout(function () {
                commit('TOGGLE_TODO', payload);
            }, 500);
        },
        deleteTodo({ commit }, todoId) {
            setTimeout(function () {
                commit('DELETE_TODO', todoId);
            }, 500);
        },
    },
    //getters: 컴포넌트의 computed와 비슷함
    getters: {
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}
```

```java

<template>
    <input
        v-model="todoText"
        type="text"
        class="w-100 p-2"
        placeholder="Type todo"
        @keyup.enter="addTodo"
    >
</template>

<script>
export default {
    data() {
        return {
            todoText: '',
        }
    },
    methods: {
        addTodo(e) {
            // this.$store.commit('ADD_TODO', e.target.value) -> 바로 commit -> mutation
            // 보통 비동기작업을 수행할때 dispatch를 통해 action을 일으킴
            // distpatch(type,payload)
            this.$store.dispatch('todo/addTodo', e.target.value); //distpatch를 통해 action -> commit-> mutation
            this.todoText = '';
            // this.$emit('add-todo', e.target.value);
        }
    }
}
</script>
```
```java
<template>
    <div>
        Completed Todo: {{ numberOfCompletedTodo }}
    </div>
</template>

<script>
export default {
    computed: {
        numberOfCompletedTodo() {
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    }
}
</script>
```

```java

<template>
    <div>
        <Todo
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
        />
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';
export default {
    components: {
        Todo
    },
    computed: {
        todos() {
            return this.$store.state.todo.todos;
        }
    },
}
</script>
```

## Vuex Helper
helper는 Vuex 저장소의 여러 기능을 컴포넌트에서 쉽게 바인딩하거나 사용할 수 있게 도와주는 유틸리티 함수이다.<br/> 
이러한 helper를 사용하면 코드의 중복을 줄이고 가독성을 향상시킬 수 있다.

helper의 종료 4가지로 나뉘는데, 
<br/>
1. mapState:
* 저장소의 state를 컴포넌트의 computed 속성으로 매핑한다.

2. mapMutations:
* 저장소의 mutations를 컴포넌트의 methods로 매핑한다.

3. mapActions:
* 저장소의 actions를 컴포넌트의 methods로 매핑한다.

4. mapGetters:
*  저장소의 getters를 컴포넌트의 computed 속성으로 매핑한.

```java
<!-- 예시 1번 -->
<template>
  <div>
    <p>{{ count }}</p> <!-- from mapState -->
    <button @click="increment">Increment</button> <!-- from mapMutations -->
    <button @click="incrementAsync">Increment After 1s</button> <!-- from mapActions -->
    <p>{{ doubleCount }}</p> <!-- from mapGetters -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAsync'])
  }
}
</script>
```

```java
<!-- 예시 2번 -->
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

import axios from "axios";

export default {
    namespaced: true,
    state: {
        users: []
    },

    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
    },

    actions: {
        getUsers({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS', res.data);
            });
        },
    }
}
```
