import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 50 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// blue cube
const cubeGeometry = new THREE.BoxGeometry( 10, 10, 10 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x1F51FF } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

// yellow lines
const linesMaterial = new THREE.LineBasicMaterial( { color: 0xFFEA00 } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, -10, 0 ) );
points.push( new THREE.Vector3( - 10, 0, 0 ) );

const linesGeometry = new THREE.BufferGeometry().setFromPoints( points );

const lines = new THREE.Line( linesGeometry, linesMaterial );

scene.add( lines );

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	lines.rotation.x -= 0.01;
	lines.rotation.y -= 0.01;

	renderer.render( scene, camera );

}