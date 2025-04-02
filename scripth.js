<script>
  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2 // Adjust this based on your preference
        },
        1000: {
          items: 3 // Adjust this based on your preference
        }
      }
    });
  });
</script>
