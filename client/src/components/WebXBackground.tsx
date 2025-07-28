// components/WebXDynamicBackground.tsx
import { useEffect, useRef, useState } from "react";

export default function WebXDynamicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [contentTheme, setContentTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Observe content theme changes (you can replace this with actual theme detection)
        const observer = new MutationObserver(() => {
            const isDark = document.documentElement.classList.contains('dark');
            setContentTheme(isDark ? 'dark' : 'light');
        });
        observer.observe(document.documentElement, { attributes: true });

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // WebX-inspired elements with more variety
        const elements: Array<{
            x: number;
            y: number;
            size: number;
            rotation: number;
            speed: number;
            opacity: number;
            targetX: number;
            targetY: number;
            type: 'circle' | 'rect' | 'triangle' | 'hexagon' | 'wave' | 'particle';
            colorIndex: number;
            life: number;
            maxLife: number;
            velocity: { x: number; y: number };
            data: any;
        }> = [];

        // Dynamic color palettes based on content theme
        const getColors = () => {
            return contentTheme === 'dark'
                ? [
                    'rgba(99, 102, 241, 0.15)',    // indigo-500
                    'rgba(139, 92, 246, 0.15)',    // purple-500
                    'rgba(6, 182, 212, 0.15)',     // cyan-500
                    'rgba(236, 72, 153, 0.15)',    // pink-500
                    'rgba(245, 158, 11, 0.15)',    // amber-500
                    'rgba(22, 163, 74, 0.15)',     // green-500
                ]
                : [
                    'rgba(99, 102, 241, 0.1)',     // indigo-500
                    'rgba(139, 92, 246, 0.1)',     // purple-500
                    'rgba(6, 182, 212, 0.1)',      // cyan-500
                    'rgba(236, 72, 153, 0.1)',     // pink-500
                    'rgba(245, 158, 11, 0.1)',     // amber-500
                    'rgba(22, 163, 74, 0.1)',      // green-500
                ];
        };

        // Initialize elements with more sophisticated behaviors
        const initElements = () => {
            elements.length = 0;
            const count = Math.floor(window.innerWidth * window.innerHeight / 15000);

            for (let i = 0; i < count; i++) {
                const type = Math.random() > 0.7
                    ? ['wave', 'particle'][Math.floor(Math.random() * 2)]
                    : ['circle', 'rect', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)];

                const element = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 100 + 30,
                    rotation: Math.random() * Math.PI * 2,
                    speed: Math.random() * 0.5 + 0.1,
                    opacity: Math.random() * 0.3 + 0.05,
                    targetX: Math.random() * canvas.width,
                    targetY: Math.random() * canvas.height,
                    type: type as any,
                    colorIndex: Math.floor(Math.random() * getColors().length),
                    life: Math.random() * 1000,
                    maxLife: 1000 + Math.random() * 2000,
                    velocity: {
                        x: (Math.random() - 0.5) * 2,
                        y: (Math.random() - 0.5) * 2
                    },
                    data: {}
                };

                // Special initialization for certain types
                if (type === 'wave') {
                    element.data = {
                        frequency: Math.random() * 0.02 + 0.01,
                        amplitude: Math.random() * 30 + 10,
                        points: []
                    };
                } else if (type === 'particle') {
                    element.size = Math.random() * 10 + 2;
                    element.opacity = Math.random() * 0.5 + 0.1;
                }

                elements.push(element);
            }
        };

        // Draw element based on type with more sophisticated rendering
        const drawElement = (el: typeof elements[0], colors: string[]) => {
            ctx.save();
            ctx.translate(el.x, el.y);
            ctx.rotate(el.rotation);
            ctx.globalAlpha = el.opacity;

            // Dynamic glow effect based on theme
            ctx.shadowColor = colors[el.colorIndex].replace('0.1)', '0.3)').replace('0.15)', '0.4)');
            ctx.shadowBlur = contentTheme === 'dark' ? 20 : 10;

            ctx.fillStyle = colors[el.colorIndex];

            switch (el.type) {
                case 'circle':
                    ctx.beginPath();
                    ctx.arc(0, 0, el.size / 2, 0, Math.PI * 2);
                    ctx.fill();
                    break;

                case 'rect':
                    ctx.beginPath();
                    const cornerRadius = el.size / (Math.random() * 5 + 5);
                    ctx.roundRect(-el.size / 2, -el.size / 2, el.size, el.size, cornerRadius);
                    ctx.fill();
                    break;

                case 'triangle':
                    ctx.beginPath();
                    ctx.moveTo(0, -el.size / 2);
                    ctx.lineTo(el.size / 2, el.size / 2);
                    ctx.lineTo(-el.size / 2, el.size / 2);
                    ctx.closePath();
                    ctx.fill();
                    break;

                case 'hexagon':
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const angle = (i * 2 * Math.PI / 6) - Math.PI / 2;
                        const x = Math.cos(angle) * el.size / 2;
                        const y = Math.sin(angle) * el.size / 2;
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    ctx.fill();
                    break;

                case 'wave':
                    const waveLength = el.size * 3;
                    const segments = 20;
                    ctx.beginPath();

                    for (let i = 0; i <= segments; i++) {
                        const x = (i / segments) * waveLength - waveLength / 2;
                        const y = Math.sin(i * el.data.frequency + el.life * 0.01) * el.data.amplitude;

                        if (i === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    }

                    ctx.strokeStyle = colors[el.colorIndex];
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    break;

                case 'particle':
                    ctx.beginPath();
                    ctx.arc(0, 0, el.size, 0, Math.PI * 2);
                    ctx.fill();

                    // Particle trail
                    if (el.life % 10 < 5) {
                        ctx.beginPath();
                        ctx.arc(-el.velocity.x * 5, -el.velocity.y * 5, el.size * 0.7, 0, Math.PI * 2);
                        ctx.globalAlpha = el.opacity * 0.6;
                        ctx.fill();
                    }
                    break;
            }

            ctx.restore();
        };

        // Mouse interaction variables
        const mouse = { x: -1000, y: -1000, radius: 150 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId: number;
        const animate = () => {
            const colors = getColors();
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw subtle connection lines between close elements with dynamic opacity
            ctx.strokeStyle = contentTheme === 'dark'
                ? 'rgba(200, 200, 255, 0.05)'
                : 'rgba(99, 102, 241, 0.03)';
            ctx.lineWidth = contentTheme === 'dark' ? 1.5 : 1;

            for (let i = 0; i < elements.length; i++) {
                for (let j = i + 1; j < elements.length; j++) {
                    const dx = elements[i].x - elements[j].x;
                    const dy = elements[i].y - elements[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 300) {
                        const alpha = 0.15 - (distance / 300) * 0.15;
                        ctx.globalAlpha = alpha;
                        ctx.beginPath();
                        ctx.moveTo(elements[i].x, elements[i].y);
                        ctx.lineTo(elements[j].x, elements[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw elements with more sophisticated behaviors
            elements.forEach((el, index) => {
                // Life cycle management
                el.life += 1;
                if (el.life > el.maxLife) {
                    // Reinitialize element
                    el.x = Math.random() * canvas.width;
                    el.y = Math.random() * canvas.height;
                    el.life = 0;
                    el.maxLife = 1000 + Math.random() * 2000;
                    el.colorIndex = Math.floor(Math.random() * colors.length);

                    if (Math.random() > 0.8) {
                        el.type = ['circle', 'rect', 'triangle', 'hexagon', 'wave', 'particle'][Math.floor(Math.random() * 6)] as typeof el.type;
                    }
                }

                // Mouse interaction
                const dx = mouse.x - el.x;
                const dy = mouse.y - el.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = mouse.radius / distance;
                    const angle = Math.atan2(dy, dx);
                    el.velocity.x -= Math.cos(angle) * force * 0.1;
                    el.velocity.y -= Math.sin(angle) * force * 0.1;
                }

                // Move with physics
                if (el.type === 'particle') {
                    // Particles have more physics
                    el.x += el.velocity.x * el.speed;
                    el.y += el.velocity.y * el.speed;

                    // Bounce off walls
                    if (el.x < 0 || el.x > canvas.width) el.velocity.x *= -1;
                    if (el.y < 0 || el.y > canvas.height) el.velocity.y *= -1;

                    // Friction
                    el.velocity.x *= 0.99;
                    el.velocity.y *= 0.99;
                } else {
                    // Other elements move toward target with mouse influence
                    el.x += (el.targetX - el.x) * 0.01 * el.speed + el.velocity.x;
                    el.y += (el.targetY - el.y) * 0.01 * el.speed + el.velocity.y;

                    // Dampen velocity
                    el.velocity.x *= 0.95;
                    el.velocity.y *= 0.95;
                }

                // Change target if close
                if (Math.abs(el.x - el.targetX) < 50 && Math.abs(el.y - el.targetY) < 50) {
                    el.targetX = Math.random() * canvas.width;
                    el.targetY = Math.random() * canvas.height;
                }

                // Rotate based on velocity for dynamic feel
                if (el.type !== 'wave' && el.type !== 'particle') {
                    el.rotation += Math.atan2(el.velocity.y, el.velocity.x) * 0.01;
                }

                drawElement(el, colors);
            });

            // Occasionally add new elements
            if (Math.random() > 0.98 && elements.length < 50) {
                const type = ['wave', 'particle'][Math.floor(Math.random() * 2)];
                elements.push({
                    x: Math.random() > 0.5 ? -50 : canvas.width + 50,
                    y: Math.random() * canvas.height,
                    size: type === 'particle' ? Math.random() * 8 + 2 : 30,
                    rotation: 0,
                    speed: Math.random() * 0.8 + 0.2,
                    opacity: type === 'particle' ? Math.random() * 0.7 + 0.1 : 0.2,
                    targetX: Math.random() * canvas.width,
                    targetY: Math.random() * canvas.height,
                    type: type as any,
                    colorIndex: Math.floor(Math.random() * colors.length),
                    life: 0,
                    maxLife: 2000 + Math.random() * 3000,
                    velocity: {
                        x: type === 'particle' ? (Math.random() - 0.5) * 4 : 0,
                        y: type === 'particle' ? (Math.random() - 0.5) * 4 : 0
                    },
                    data: type === 'wave' ? {
                        frequency: Math.random() * 0.03 + 0.01,
                        amplitude: Math.random() * 40 + 10,
                        points: []
                    } : {}
                });
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        initElements();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
        };
    }, [contentTheme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none -z-10"
        />
    );
}