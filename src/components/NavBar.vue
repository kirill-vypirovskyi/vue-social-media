<script>
import HeaderLink from './HeaderLink.vue'
import Container from './Container.vue'

export default {
  components: {
    HeaderLink,
    Container
  }
}
</script>

<template>
  <header class="navbar bg-base-100 shadow-sm">
    <Container>
      <div class="navbar">
        <div class="flex-1">
          <HeaderLink title="Home" path="/" />
          <HeaderLink title="About" path="/about" />
          <HeaderLink title="Login" path="/login" />
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            <input type="text" placeholder="Search" class="input input-bordered" />
          </div>
          <div class="dropdown dropdown-end">
            <label tabIndex="{0}" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"
                />
              </div>
            </label>
            <ul
              tabIndex="{0}"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>
