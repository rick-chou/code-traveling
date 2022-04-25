# Vue2

> preview http://124.223.71.181:3003/

> vue https://cn.vuejs.org/

> vue-router https://v3.router.vuejs.org/zh/installation.html

> vuex https://v3.vuex.vuejs.org/zh/

鉴于上面的几个文档都已经写的很详细了 这里就列举一些 Vue2 全家桶最基础的用法

## 基础

### data

1. 在 template 中用 {{}} 的语法就可以渲染 data 中的变量 无需 this
2. data 必须是一个函数 返回一个对象 确保每个组件有属于自己的那份

```vue
<template>
  <div class="app">
    <p>username: {{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'chou',
    };
  },
};
</script>
```

### 组件通信

#### 父传子

1. 在子组件内的 props 属性内定义需要的属性
2. 在父组件内注册子组件
3. 在子组件的标签上直接传递对应的属性就好了

```html
// 父组件
<template>
  <div class="app">
    <child-component
      msg="这是父组件传递来的消息"
      @handleChange="changeName"
    />
    </div>
  </div>
</template>

<script>
  import childComponent from './child-component.vue';
  export default {
    components: { childComponent },
  };
</script>

// 子组件
<template>
  <div class="app">
    <p>{{ this.msg }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String,
    },
  };
</script>
```

#### 子传父

1. 在父组件内自定义事件 绑定一个方法
2. 在子组件内用 this.$emit 触发这个事件 并传递对应的参数给父组件

```html
// 父组件
<template>
  <div class="app">
    <p>{{ username }}</p>
    <child-component
      msg="这是父组件传递来的消息"
      @handleChange="changeName"
    />
     <sibling-component />
    </div>
  </div>
</template>

<script>
  import childComponent from './child-component.vue';
  import siblingComponent from './sibling-component.vue';
  export default {
    components: { childComponent, siblingComponent },
    data() {
      return {
        username: 'chou',
      };
    },
    methods: {
      changeName(name) {
        this.username = name;
      },
    },
  };
</script>

// 子组件
<template>
  <div class="app">
    <p>{{ this.msg }}</p>
    <el-button type="primary" @click="toParent">通知父组件</el-button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  methods: {
    toParent() {
      this.$emit('handleChange', 'nanshu');
    },
  },
};
</script>
```

#### 兄弟组件通信

1. 注册事件总线 EventBus
2. 注册事件用 EventBus.$emit
3. 监听事件用 EventBus.$on

event-bus.ts

```ts
import Vue from 'vue';
export const EventBus = new Vue();
```

```html
// 子组件A
<template>
  <div class="app">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  import { EventBus } from './event-bus';
  export default {
    data() {
      return {
        msg: '等兄弟来消息',
      };
    },
    mounted() {
      EventBus.$on('siblingMsg', (msg) => {
        this.msg = msg;
      });
    },
  };
</script>

// 子组件B
<template>
  <div class="app">
    <el-button type="primary" @click="toSibling">通知兄弟组件</el-button>
  </div>
</template>

<script>
  import { EventBus } from './event-bus';
  export default {
    methods: {
      toSibling() {
        EventBus.$emit('siblingMsg', 'hello brother');
      },
    },
  };
</script>
```

#### 生命周期

这是官方的生命周期图谱

![生命周期图谱](https://cn.vuejs.org/images/lifecycle.png)

你也可以打开如下链接 来观察不同生命周期的调用时机

> http://124.223.71.181:3003/base/lifecycle

#### 指令集

> http://124.223.71.181:3003/v

## vuex

vuex 用来集中统一管理状态

下面是最简单的一份关于 vuex store 的描述

其中

- state 用来存储状态
- getters 用来处理一些 state 的派生状态
- mutations 改变 state 的唯一方式 是同步的
- actions 用来派发 mutations 可以是异步的

```ts
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 存储state
  state: {
    count: 0,
  },
  // 更改 state 的唯一方法 必须是同步的
  mutations: {
    increment(state, n) {
      state.count += n;
    },
    decrement(state, n) {
      state.count -= n;
    },
  },
  // 处理state的派生状态
  getters: {
    countX2: (state) => {
      return state.count * 2;
    },
  },
  // 提交的是 mutation
  // 可以包含异步操作
  actions: {
    incrementAsync(context, payload) {
      setTimeout(() => context.commit('increment', payload), 1000);
    },
    decrementAsync({ commit }, payload) {
      setTimeout(() => commit('decrement', payload), 1000);
    },
  },
});

export default store;
```

然后在页面中我们就可以这样使用

```html
<template>
  <div class="app">
    <div>mapState: {{ count }}</div>
    <div>$store.state.count: {{ $store.state.count }}</div>
    <div>mapGetters: {{ countX2 }}</div>
    <div>$store.getters.countX2: {{ $store.getters.countX2 }}</div>
    <el-button icon="el-icon-minus" @click="sub(1)">同步减少1</el-button>
    <el-button icon="el-icon-plus" @click="add(2)">同步增加2</el-button>
    <el-button icon="el-icon-minus" @click="subAsync(3)">异步减少3</el-button>
    <el-button icon="el-icon-plus" @click="addAsync(4)">异步增加4</el-button>
  </div>
</template>

<script>
  import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapState({
        count: (state) => state.count,
      }),
      ...mapGetters({
        countX2: 'countX2',
      }),
    },
    methods: {
      ...mapMutations({
        add: 'increment',
        sub: 'decrement',
      }),
      ...mapActions({
        addAsync: 'incrementAsync',
        subAsync: 'decrementAsync',
      }),
    },
  };
</script>
```

## vue-router

### router

```ts
import V from '@/views/v/index.vue';

const routes = [
  {
    path: '/v',
    name: 'v',
    component: V,
    children: [
      {
        path: '/v/v-for',
        name: 'v-for',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "v" */ '@/views/v/v-for.vue'),
      },
    ],
  },
];

export default routes;
```

### view component

```html
<template>
  <div>
    <div id="nav">
      <router-link to="/v/v-for">v-for</router-link>
    </div>
    <router-view />
  </div>
</template>
```

### main

```ts
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
```
