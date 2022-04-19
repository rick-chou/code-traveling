### event-bus.ts

```ts
import Vue from 'vue';
export const EventBus = new Vue();
```

### 父组件

```html
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
```

### 子组件 A

```html
<template>
  <div class="app">
    <p>{{ this.msg }}</p>
    <el-button type="primary" @click="toParent">通知父组件</el-button>
    <el-button type="primary" @click="toSibling">通知兄弟组件</el-button>
  </div>
</template>

<script>
  import { EventBus } from './event-bus';
  export default {
    props: {
      msg: String,
    },
    methods: {
      toParent() {
        this.$emit('handleChange', 'nanshu');
      },
      toSibling() {
        EventBus.$emit('siblingMsg', 'hello brother');
      },
    },
  };
</script>
```

### 子组件 B

```html
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
```
