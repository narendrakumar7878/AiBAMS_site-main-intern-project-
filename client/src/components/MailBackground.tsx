// components/MailBackground.tsx
import { useEffect, useRef } from "react";

export default function MailBackground() {
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

        // Email envelope particles
        const envelopes: Array<{
            x: number;
            y: number;
            size: number;
            rotation: number;
            speed: number;
            opacity: number;
            targetX: number;
            targetY: number;
            color: string;
        }> = [];

        // Email-themed colors
        const colors = [
            'rgba(59, 130, 246, 0.08)',   // blue-500
            'rgba(139, 92, 246, 0.08)',   // purple-500
            'rgba(236, 72, 153, 0.08)',   // pink-500
            'rgba(255, 255, 255, 0.05)',  // subtle white
        ];

        // Initialize envelopes
        for (let i = 0; i < 20; i++) {
            envelopes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 40 + 30,
                rotation: Math.random() * Math.PI / 8 - Math.PI / 16,
                speed: Math.random() * 0.1 + 0.05,
                opacity: Math.random() * 0.2 + 0.1,
                targetX: Math.random() * canvas.width,
                targetY: Math.random() * canvas.height,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        // Draw email envelope
        const drawEnvelope = (env: typeof envelopes[0]) => {
            ctx.save();
            ctx.translate(env.x, env.y);
            ctx.rotate(env.rotation);

            // Envelope body
            ctx.beginPath();
            ctx.moveTo(0, env.size * 0.3);
            ctx.lineTo(env.size * 0.5, 0);
            ctx.lineTo(env.size, env.size * 0.3);
            ctx.lineTo(env.size, env.size);
            ctx.lineTo(0, env.size);
            ctx.closePath();
            ctx.fillStyle = env.color;
            ctx.fill();

            // Envelope flap
            ctx.beginPath();
            ctx.moveTo(0, env.size * 0.3);
            ctx.lineTo(env.size * 0.5, env.size * 0.15);
            ctx.lineTo(env.size, env.size * 0.3);
            ctx.fillStyle = `rgba(255, 255, 255, ${env.opacity * 0.5})`;
            ctx.fill();

            // Envelope lines (detail)
            ctx.strokeStyle = `rgba(255, 255, 255, ${env.opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(env.size * 0.1, env.size * 0.7);
            ctx.lineTo(env.size * 0.9, env.size * 0.7);
            ctx.moveTo(env.size * 0.1, env.size * 0.5);
            ctx.lineTo(env.size * 0.5, env.size * 0.5);
            ctx.stroke();

            ctx.restore();
        };

        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw animated connection lines
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.03)';
            ctx.lineWidth = 1;

            for (let i = 0; i < envelopes.length; i++) {
                for (let j = i + 1; j < envelopes.length; j++) {
                    const dx = envelopes[i].x - envelopes[j].x;
                    const dy = envelopes[i].y - envelopes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 250) {
                        ctx.beginPath();
                        ctx.moveTo(envelopes[i].x, envelopes[i].y);
                        ctx.lineTo(envelopes[j].x, envelopes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw envelopes
            envelopes.forEach(env => {
                // Move towards target
                env.x += (env.targetX - env.x) * 0.01 * env.speed;
                env.y += (env.targetY - env.y) * 0.01 * env.speed;

                // Change target if close
                if (Math.abs(env.x - env.targetX) < 30 && Math.abs(env.y - env.targetY) < 30) {
                    env.targetX = Math.random() * canvas.width;
                    env.targetY = Math.random() * canvas.height;
                }

                drawEnvelope(env);
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