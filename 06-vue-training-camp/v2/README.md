> preview http://124.223.71.181:3003/

# Vue2

## base

### data

在 template 中用 {{}} 的语法就可以渲染 data 中的变量 无需 this

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

```vue
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

```vue
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

```vue
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

![生命周期图谱](https://cn.vuejs.org/images/lifecycle.png)
