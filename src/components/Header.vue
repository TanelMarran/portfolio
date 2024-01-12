<template>
  <header class="header text-large">
    <a href="#about-me">About me</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#showreel">Showreel</a>
    <a href="#contact">Contact</a>
  </header>
</template>

<style>
.header {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  padding: 32px 0;
  justify-content: center;
  gap: 16px;
  z-index: 1;

  a {
    padding: 0 8px;
  }
}
</style>