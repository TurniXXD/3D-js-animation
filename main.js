//setup vars

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
	container = document.querySelector('.scene');

	//Create scene
	scene = new THREE.Scene();

	const fov = 35;
	const aspect = container.clientWidth/container.clientHeight;
	const near = 0.1;
	const far = 500;

	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(-50,40,350);

	renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	container.appendChild(renderer.domElement);

	//Load model
	let loader = new THREE.GLTFLoader();
	loader.load('./3D/gltf/Wolf-Blender-2.82a.gltf', function(gltf) {
		scene.add(gltf.scene);
		renderer.render(scene, camera);
	});
}

init()