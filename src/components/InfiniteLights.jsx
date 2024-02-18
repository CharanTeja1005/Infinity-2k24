import React from 'react'
// import index from './infinite-lights-main/index.html'
import './infinite-lights-main/css/base.css'
import './infinite-lights-main/js/Distortions.js'
import './infinite-lights-main/js/InfiniteLights.js'
import './infinite-lights-main/js/three.min.js'
import './infinite-lights-main/js/postprocessing.min.js'

function InfiniteLights() {
  return (
    <div className="demo">
		<main>
			<div className="content">
				<div id="app"></div>
				<div className="content__title-wrap">
					<span className="content__pretitle">Meet</span>
					<h2 className="content__title">AWESOME STAR</h2>
					<h2 className="content__title">Charan Teja</h2>
				</div>
			</div>
		</main>
		{/* 
		<script>
		()()
		</script> */}
	</div>
  )
}

export default InfiniteLights
