<?php

add_action('acf/init', 'igb_initialize_acf_blocks');

function igb_initialize_acf_blocks() {
  // Check function exists.

  if( function_exists('acf_register_block_type') ) {
    // Register a Guid block block.
	acf_register_block_type(array(
		'name'              => 'guides-block',
		'title'             => __('Guide - Block'),
		'description'       => __('Home page Guide block'),
		'render_template'   => 'template-parts/blocks/guide.php',
		'category'          => 'igb acf blocks',
		'example'           => array(
			'attributes' => array(
				'mode' => 'preview',
				'data' => array(
					'is_preview'    => true
					)
				)
			)
		)
	);

    // Register a Color block.
    acf_register_block_type(array(
		'name'              => 'color-block',
		'title'             => __('Color - Block'),
		'description'       => __('Color block'),
		'render_template'   => 'template-parts/blocks/color.php',
		'category'          => 'igb acf blocks',
		'example'           => array(
			'attributes' => array(
				'mode' => 'preview',
				'data' => array(
					'is_preview'    => true
					)
				)
			)
		)
	);

    // Register a Color block.
    acf_register_block_type(array(
      'name'              => 'featured-block',
      'title'             => __('Featured - Block'),
      'description'       => __('Featured block'),
      'render_template'   => 'template-parts/blocks/featured-blog.php',
      'category'          => 'igb acf blocks',
      'example'           => array(
        'attributes' => array(
          'mode' => 'preview',
          'data' => array(
            'is_preview'    => true
          )
        )
      )
    ));
  }
}