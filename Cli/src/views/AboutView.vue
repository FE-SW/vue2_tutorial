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