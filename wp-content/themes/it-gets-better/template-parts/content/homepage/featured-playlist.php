<!-- Note: Temporary template file only. It will be removed once we utilized the custom blocks. -->
<?php
    $featuredPlaylist = get_terms(
      array(
        'taxonomy' => 'playlist',
        'meta_key' => 'show_as_featured',
        'meta_value' => true
      )
    );
?>

<?php if($featuredPlaylist): ?>
  <?php foreach(array_slice($featuredPlaylist, 0, 1) as $item): ?>
  <div class="wp-block-media-text alignfull has-media-on-the-right is-stacked-on-mobile is-vertically-aligned-center featured-playlist">
    <div class="wp-block-media-text__content">
      <h4>FEATURED PLAYLIST</h4>
      <h2><?php echo $item->name; ?></h2>
      <?php echo term_description($item->term_id) ? term_description($item->term_id) : ""; ?>
      <div class="wp-block-buttons is-layout-flex">
        <div class="wp-block-button">
          <a class="wp-block-button__link wp-element-button" href="<?php echo get_term_link($item); ?>">
            Go to the Playlist
          </a>
        </div>
      </div>
    </div>
    <figure class="masked_image_container_double"><img src="<?php echo get_template_directory_uri() . '/_assets/images/placeholder-image-2.png' ?>" alt="" class="wp-image-4503 size-full"></figure>

	<svg height="0" width="0" class="svg-clip">

	<defs>

        <clipPath id="image_mask_double_slash" clipPathUnits="objectBoundingBox">
           <!-- points are relative values, keeping the angle ~62deg -->

			<polygon fill="none" points="0.265,0.1
										.61,0.1
										0.345,1
										0,1"/>
			<polygon fill="none" points="0.67,0
										1.015,0
										0.75,0.9
										0.405,0.9"/>

        </clipPath>
    </defs>
</svg>
  </div>
  <?php endforeach; ?>
<?php endif; ?>
