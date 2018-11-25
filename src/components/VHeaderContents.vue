<template>
  <header class="VHeaderContents">
    <nav class="VHeaderContents_Nav">
      <ul class="VHeaderContents_NavList">
        <li class="VHeaderContents_NavListItem">
          <g-link 
            :to="{ name: 'home' }" 
            class="VHeaderContents_NavListItemLink">Home</g-link>
        </li>
        <li class="VHeaderContents_NavListItem">
          <g-link 
            :to="{ name: 'about' }" 
            class="VHeaderContents_NavListItemLink">About</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
