<script>
import Container from './components/Container.vue'
import NavBar from './components/NavBar.vue'
import PageTabs from './components/PageTabs.vue'
import FooterBlock from './components/FooterBlock.vue'

export default {
  components: {
    NavBar,
    PageTabs,
    Container,
    FooterBlock
  }
}
</script>

<script setup>
const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log('Handle the response', response)
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <Container>
      <GoogleLogin prompt :callback="callback"/>
      <PageTabs />
      <router-view></router-view>
    </Container>
    <FooterBlock />
  </div>
</template>
