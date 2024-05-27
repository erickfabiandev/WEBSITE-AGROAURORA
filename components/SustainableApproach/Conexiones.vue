<template>
  <section class="conexion">
    <div class="conexion_container">
      <div class="title">
        <div class="separator"></div>
        <label>CONEXIÓN SOCIAL</label>
      </div>
      <div class="content_service">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAgroAurora%2Fposts%2Fpfbid0osVdTVYQGxv1DSio4dNNdJPG2GmJDZvaLQyxhAwuskoZq31PeMLBsyzDfzMyJtPJl&show_text=true&width=500&is_preview=true"
          width="500"
          height="250"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe
        ><iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAgroAurora%2Fposts%2Fpfbid02ixg34ww7VjpWUrZo3cUGxHEsxGetRUwfVpvNu2scekUD6ig7NLYE5PEcVDYFao8ul&show_text=true&width=500&is_preview=true"
          width="500"
          height="250"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAgroAurora%2Fposts%2Fpfbid0xob1Ux1EToAGc3uri7mnZgfsDXUeKfDdnGDiTB3g8SEZnQDPnKxAAUzBUuo1DNSSl&show_text=true&width=500&is_preview=true"
          width="500"
          height="250"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAgroAurora%2Fposts%2Fpfbid0CweUS1D52Bi3JEfFaXFS9c7yRbzEUchA3fC6JU18RXgjhV3EJZKt48aMuEHpz8DLl&show_text=true&width=500&is_preview=true"
          width="500"
          height="250"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAgroAurora%2Fposts%2Fpfbid02ecci7xNAymCMpv1Yf7qLq415ioxmnnBvenn8HKyg55b5kT3pE1VFjxNFVd1LeJUSl&show_text=true&width=500&is_preview=true"
          width="500"
          height="250"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAgroAurora%2Fposts%2Fpfbid038K6bBCWwJ2jNhES1vaDu3Js1WG38eqX7VDV27xR34LHGv1h8aRwTe6mXuMwQKx15l&show_text=true&width=500&is_preview=true"
          width="500"
          height="250"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.conexion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
}
.conexion_container {
  display: grid;
}
.content_service {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 25px;
  gap: 1rem;
  color: var(--agroaurora-color-1);
  font-weight: 600;
  margin-bottom: 2rem;
  .separator {
    height: 100%;
    width: 10px;
    background-color: var(--agroaurora-color-11);
  }
}

@include set-container-width(".conexion");
</style>
