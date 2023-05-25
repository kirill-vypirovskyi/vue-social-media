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
    FooterBlock,
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <Container>
      <PageTabs />
      <router-view></router-view>
    </Container>
    <FooterBlock />
  </div>
</template>
