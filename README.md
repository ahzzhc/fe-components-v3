# components vue3 publish npm

## 安装

```text
npm i @houchenz/fe-components-v3 --save
```

## 全局使用

```text
// 引入所有组件
import VElement from '@houchenz/fe-components-v3'
// 引入样式
import '@houchenz/fe-components-v3/dist/style.css'

import App from './App.vue'
createApp(App).use(VElement).mount('#app')
```

## 单独使用

```text
<template>
    <Button>我是 VkButton</Button>
</template>

<script>
import { Button } from ' @houchenz/fe-components-v3'
export default {
    components: { Button },
}
</script>
```
