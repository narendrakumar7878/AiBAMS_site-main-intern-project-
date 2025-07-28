// components/DriveBackground.tsx
import { useEffect, useRef } from "react";

export default function DriveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Cloud/file particles
        const particles: Array<{
            x: number;
            y: number;
            size: number;
            speed: number;
            opacity: number;
            targetX: number;
            targetY: number;
            type: 'file' | 'folder' | 'cloud';
        }> = [];

        // Initialize particles
        for (let i = 0; i < 25; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 40 + 20,
                speed: Math.random() * 0.1 + 0.05,
                opacity: Math.random() * 0.2 + 0.1,
                targetX: Math.random() * canvas.width,
                targetY: Math.random() * canvas.height,
                type: ['file', 'folder', 'cloud'][Math.floor(Math.random() * 3)] as any
            });
        }

        // Draw cloud
        const drawCloud = (x: number, y: number, size: number, opacity: number) => {
            ctx.save();
            ctx.translate(x, y);

            ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
            ctx.arc(size * 0.3, -size * 0.1, size * 0.25, 0, Math.PI * 2);
            ctx.arc(size * 0.2, size * 0.2, size * 0.35, 0, Math.PI * 2);
            ctx.arc(-size * 0.2, size * 0.1, size * 0.3, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        };

        // Draw folder
        const drawFolder = (x: number, y: number, size: number, opacity: number) => {
            ctx.save();
            ctx.translate(x, y);

            ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(0, size * 0.2);
            ctx.lineTo(size * 0.3, 0);
            ctx.lineTo(size, 0);
            ctx.lineTo(size, size);
            ctx.lineTo(0, size);
            ctx.closePath();
            ctx.fill();

            // Folder tab
            ctx.fillStyle = `rgba(139, 92, 246, ${opacity * 1.2})`;
            ctx.beginPath();
            ctx.moveTo(0, size * 0.2);
            ctx.lineTo(size * 0.3, 0);
            ctx.lineTo(size * 0.7, 0);
            ctx.lineTo(size * 0.4, size * 0.2);
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        };

        // Draw file
        const drawFile = (x: number, y: number, size: number, opacity: number) => {
            ctx.save();
            ctx.translate(x, y);

            ctx.fillStyle = `rgba(236, 72, 153, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(size, 0);
            ctx.lineTo(size, size);
            ctx.lineTo(0, size);
            ctx.closePath();
            ctx.fill();

            // File corner fold
            ctx.fillStyle = `rgba(236, 72, 153, ${opacity * 0.7})`;
            ctx.beginPath();
            ctx.moveTo(size * 0.7, 0);
            ctx.lineTo(size, 0);
            ctx.lineTo(size, size * 0.3);
            ctx.closePath();
            ctx.fill();

            // File lines
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
            const lineCount = 5;
            const lineHeight = size / (lineCount + 2);
            for (let i = 0; i < lineCount; i++) {
                ctx.fillRect(
                    size * 0.1,
                    lineHeight * (i + 1),
                    size * 0.7,
                    lineHeight * 0.3
                );
            }

            ctx.restore();
        };

        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw animated connection lines
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.03)';
            ctx.lineWidth = 1;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 250) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw particles
            particles.forEach(particle => {
                // Move towards target
                particle.x += (particle.targetX - particle.x) * 0.01 * particle.speed;
                particle.y += (particle.targetY - particle.y) * 0.01 * particle.speed;

                // Change target if close
                if (Math.abs(particle.x - particle.targetX) < 30 && Math.abs(particle.y - particle.targetY) < 30) {
                    particle.targetX = Math.random() * canvas.width;
                    particle.targetY = Math.random() * canvas.height;
                }

                // Draw based on type
                switch (particle.type) {
                    case 'cloud':
                        drawCloud(particle.x, particle.y, particle.size, particle.opacity);
                        break;
                    case 'folder':
                        drawFolder(particle.x, particle.y, particle.size, particle.opacity);
                        break;
                    case 'file':
                        drawFile(particle.x, particle.y, particle.size, particle.opacity);
                        break;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        />
    );
}