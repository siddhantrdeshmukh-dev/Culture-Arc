// js/three-hero.js
// Three.js-powered Digital Talent Network for CultureArc hero

(() => {
  const canvas = document.getElementById('three-canvas') || document.getElementById('hero-network');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050509);

  const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 100);
  camera.position.set(0, 0, 20);

  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);

  const pointLight = new THREE.PointLight(0xff5555, 1.2);
  pointLight.position.set(5, 5, 10);
  scene.add(pointLight);

  const nodeCount = 140;
  const nodeGeometry = new THREE.SphereGeometry(0.12, 12, 12);
  const baseMaterial = new THREE.MeshBasicMaterial({ color: 0xff3344 });

  const nodes = [];
  for (let i = 0; i < nodeCount; i++) {
    const mesh = new THREE.Mesh(nodeGeometry, baseMaterial.clone());
    const angle = Math.random() * Math.PI * 2;
    const radius = 6 + Math.random() * 3;
    const y = (Math.random() - 0.5) * 5;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    mesh.position.set(x, y, z);
    mesh.userData.basePosition = mesh.position.clone();
    mesh.material.opacity = 0.7 + Math.random() * 0.3;
    mesh.material.transparent = true;
    scene.add(mesh);
    nodes.push(mesh);
  }

  // Connections
  const linkPositions = [];
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      if (Math.random() < 0.035) {
        const a = nodes[i].position;
        const b = nodes[j].position;
        linkPositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }
  }

  const linksGeometry = new THREE.BufferGeometry();
  linksGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(linkPositions, 3)
  );
  const linksMaterial = new THREE.LineBasicMaterial({
    color: 0xffd080,
    transparent: true,
    opacity: 0.32,
  });
  const links = new THREE.LineSegments(linksGeometry, linksMaterial);
  scene.add(links);

  let mouse = new THREE.Vector2(0, 0);
  const repelRadius = 3;

  function onPointerMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }
  window.addEventListener('pointermove', onPointerMove);

  const raycaster = new THREE.Raycaster();

  function resizeRenderer() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (width === 0 || height === 0) return;
    if (canvas.width !== width || canvas.height !== height) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
  }

  let lastTime = 0;
  function animate(time) {
    requestAnimationFrame(animate);
    const t = time * 0.00035;
    const delta = (time - lastTime) || 16;
    lastTime = time;

    resizeRenderer();

    // Camera parallax
    camera.position.x += ((mouse.x * 2) - camera.position.x) * 0.05;
    camera.position.y += ((mouse.y * 1.5) - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    // Mouse repel in 3D space
    raycaster.setFromCamera(mouse, camera);
    const mousePoint = raycaster.ray.origin.clone().add(
      raycaster.ray.direction.clone().multiplyScalar(10)
    );

    nodes.forEach((node, i) => {
      const base = node.userData.basePosition;
      const freq = 0.4 + (i % 7) * 0.05;
      const floatX = base.x + Math.sin(t * freq + i) * 0.25;
      const floatY = base.y + Math.cos(t * freq * 0.8 + i) * 0.2;
      const floatZ = base.z;

      const toMouse = new THREE.Vector3().subVectors(
        new THREE.Vector3(floatX, floatY, floatZ),
        mousePoint
      );
      const dist = toMouse.length();
      if (dist < repelRadius) {
        const strength = (repelRadius - dist) / repelRadius;
        toMouse.normalize().multiplyScalar(strength * 0.9);
        node.position.set(
          floatX + toMouse.x,
          floatY + toMouse.y,
          floatZ + toMouse.z
        );
      } else {
        node.position.set(floatX, floatY, floatZ);
      }
    });

    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);
})();

