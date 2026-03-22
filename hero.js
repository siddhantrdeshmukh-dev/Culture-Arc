/* ========================================================
   CultureArc — Three.js Hero Background
   Animated particle network with mouse interaction
   ======================================================== */

(function () {
    'use strict';

    function initHero() {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas || typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0xF8F9FC, 0.0008);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.set(200, 0, 600);

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Particles
        const count = 120;
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const velocities = [];

        const colRed = new THREE.Color(0xC00000);
        const colGold = new THREE.Color(0xF7B32D);
        const colDark = new THREE.Color(0x111827);
        const colGray = new THREE.Color(0x9CA3AF);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.3) * 1600;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 800;

            velocities.push({
                x: (Math.random() - 0.5) * 0.35,
                y: (Math.random() - 0.5) * 0.35,
                z: (Math.random() - 0.5) * 0.35
            });

            const r = Math.random();
            let c = colGray;
            if (r > 0.88) c = colRed;
            else if (r > 0.78) c = colGold;
            else if (r > 0.5) c = colDark;

            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }

        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Create dot texture
        const texCanvas = document.createElement('canvas');
        texCanvas.width = 32;
        texCanvas.height = 32;
        const ctx = texCanvas.getContext('2d');
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.5, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
        const tex = new THREE.CanvasTexture(texCanvas);

        const mat = new THREE.PointsMaterial({
            size: 7,
            map: tex,
            transparent: true,
            opacity: 0.75,
            vertexColors: true,
            depthWrite: false
        });

        const points = new THREE.Points(geo, mat);
        scene.add(points);

        // Connection lines
        const lineMat = new THREE.LineBasicMaterial({
            color: 0x111827,
            transparent: true,
            opacity: 0.04
        });
        const linesMesh = new THREE.LineSegments(new THREE.BufferGeometry(), lineMat);
        scene.add(linesMesh);

        // Mouse tracking
        let mouseX = 0, mouseY = 0;
        let targetX = 0, targetY = 0;
        const halfW = window.innerWidth / 2;
        const halfH = window.innerHeight / 2;

        document.addEventListener('mousemove', (e) => {
            targetX = e.clientX - halfW;
            targetY = e.clientY - halfH;
        }, { passive: true });

        // Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Scroll parallax
        let scrollProgress = 0;
        window.addEventListener('scroll', () => {
            scrollProgress = window.scrollY / window.innerHeight;
        }, { passive: true });

        // Animate
        function animate() {
            requestAnimationFrame(animate);

            // Only render when near top
            if (scrollProgress > 2) return;

            mouseX += (targetX - mouseX) * 0.04;
            mouseY += (targetY - mouseY) * 0.04;

            camera.position.x = 200 + mouseX * 0.08;
            camera.position.y = -mouseY * 0.08;
            camera.lookAt(scene.position);

            const pos = points.geometry.attributes.position.array;
            const linePositions = [];

            for (let i = 0; i < count; i++) {
                pos[i * 3] += velocities[i].x;
                pos[i * 3 + 1] += velocities[i].y;
                pos[i * 3 + 2] += velocities[i].z;

                // Bounds
                if (pos[i * 3] > 800 || pos[i * 3] < -800) velocities[i].x *= -1;
                if (pos[i * 3 + 1] > 500 || pos[i * 3 + 1] < -500) velocities[i].y *= -1;
                if (pos[i * 3 + 2] > 400 || pos[i * 3 + 2] < -400) velocities[i].z *= -1;

                // Connect nearby particles
                for (let j = i + 1; j < count; j++) {
                    const dx = pos[i * 3] - pos[j * 3];
                    const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
                    const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    if (dist < 160) {
                        linePositions.push(
                            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
                            pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
                        );
                    }
                }
            }

            points.geometry.attributes.position.needsUpdate = true;
            linesMesh.geometry.dispose();
            linesMesh.geometry = new THREE.BufferGeometry();
            if (linePositions.length > 0) {
                linesMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
            }

            // Subtle rotation
            points.rotation.y += 0.0003;

            renderer.render(scene, camera);
        }

        animate();
    }

    document.addEventListener('DOMContentLoaded', initHero);
})();
