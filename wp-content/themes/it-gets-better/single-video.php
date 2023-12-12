<?php
/**
 * The template for displaying all single video pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package It_Gets_Better
 */

get_header();
?>

	<section id="primary" class="single_video_page">
		<main id="main">

			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				echo igb_display_video_embed( get_the_ID(),  'upload_video', 'youtube_link' );

				the_title( '<h2 class="video_title">', '</h2>');

				if( the_field( 'featured_description' ) ) :
					echo '<div class="video_description_container">' . wp_kses_post( get_field( 'featured_description' ) ) . '</div>';
				endif;

				// End the loop.
			endwhile;
			?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_footer();
