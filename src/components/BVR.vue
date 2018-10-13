<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3> {{subtitle }}</h3>
    <h2>about</h2>
    <p>{{ about }}</p>
    <h2>team</h2>
    <ul></ul>
    <h2>gallery</h2>
    <ul></ul>
    <h2>projects</h2>
    <ul></ul>
    <h2>connect</h2>
    <ul>
      <li v-for="link in links" :key="link">
        <a
          :href="link.link"
          target="_blank"
          >{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BVR',
  data () {
    return {
      msg: 'BVR Club',
      subtitle: 'Ballard Virtual Reality',
      links: [
        {'name': 'Instagram', 'link': 'https://instagram.com/bvrclub'},
        {'name': 'Twitter', 'link': 'https://twitter.com/bvrclub'},
        {'name': 'E-Mail', 'link': 'mailto:info@bvrclub.com'},
        {'name': 'Github', 'link': 'https://github.com/BVRClub'},
        {'name': 'Twitch', 'link': 'https://twitch.tv/BVRClub'}
      ],
      about: 'The BVR Club is the immersive technology club at Ballard High School.  Club members will experience high fidelity, standalone, and mobile VR and have opportunities to develop their own xR applications.  Other club activities will include attending xR-related events and hosting guest speakers and demonstrations from the xR community. '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  margin: 0;
  font-size: 15.3vh;
}

h2 {
  font-size: 9.3vh;
}

h3 {
  margin: 0;
  font-size: 5.3vh;
}

h1, h2, h3 {
  font-weight: normal;
  font-family: "Bauhaus";
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}
</style>
