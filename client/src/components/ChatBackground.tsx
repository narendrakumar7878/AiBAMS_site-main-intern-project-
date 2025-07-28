// components/FusionChatBackground.tsx
import { useEffect, useRef } from "react";

export default function FusionChatBackground() {
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

        // Floating code blocks
        const blocks: Array<{
            x: number;
            y: number;
            size: number;
            speed: number;
            opacity: number;
            targetX: number;
            targetY: number;
            color: string;
            code: string;
            rotation: number;
            rotationSpeed: number;
        }> = [];

        const colors = [
            'rgba(101, 163, 255, 0.15)',   // Blue
            'rgba(168, 85, 247, 0.15)',    // Purple
            'rgba(16, 185, 129, 0.15)',    // Green
        ];

        const codeSnippets = [
            `function analyze() {\n  return insights;`,
            `AI.train(data);`,
            `chat.send(message);`,
            `const response = await fetch();`,
            `if (success) {\n  return true;\n}`
        ];

        // Initialize blocks
        for (let i = 0; i < 15; i++) {
            blocks.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 80 + 60,
                speed: Math.random() * 0.1 + 0.05,
                opacity: Math.random() * 0.2 + 0.1,
                targetX: Math.random() * canvas.width,
                targetY: Math.random() * canvas.height,
                color: colors[Math.floor(Math.random() * colors.length)],
                code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.005
            });
        }

        // Draw code block
        const drawBlock = (block: typeof blocks[0]) => {
            ctx.save();
            ctx.translate(block.x, block.y);
            ctx.rotate(block.rotation);

            // Block background
            ctx.fillStyle = block.color;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.roundRect(-block.size / 2, -block.size / 2, block.size, block.size, 8);
            ctx.fill();
            ctx.stroke();

            // Code text
            ctx.fillStyle = `rgba(255, 255, 255, ${block.opacity * 2})`;
            ctx.font = `${Math.max(10, block.size / 10)}px 'Fira Code', monospace`;
            ctx.textAlign = 'left';

            const lines = block.code.split('\n');
            lines.forEach((line, i) => {
                ctx.fillText(line, -block.size / 2 + 10, -block.size / 2 + 20 + (i * 20));
            });

            // Corner accent
            ctx.strokeStyle = `rgba(255, 255, 255, ${block.opacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(block.size / 2 - 15, -block.size / 2);
            ctx.lineTo(block.size / 2, -block.size / 2);
            ctx.lineTo(block.size / 2, -block.size / 2 + 15);
            ctx.stroke();

            ctx.restore();
        };

        // Grid lines
        const drawGrid = () => {
            ctx.strokeStyle = 'rgba(100, 100, 255, 0.03)';
            ctx.lineWidth = 1;

            const spacing = 60;
            const offsetX = (Date.now() * 0.01) % spacing;
            const offsetY = (Date.now() * 0.01) % spacing;

            for (let x = -offsetX; x < canvas.width; x += spacing) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for (let y = -offsetY; y < canvas.height; y += spacing) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        };

        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw subtle grid
            drawGrid();

            // Update and draw blocks
            blocks.forEach(block => {
                // Move towards target
                block.x += (block.targetX - block.x) * 0.01 * block.speed;
                block.y += (block.targetY - block.y) * 0.01 * block.speed;
                block.rotation += block.rotationSpeed;

                // Change target if close
                if (Math.abs(block.x - block.targetX) < 30 && Math.abs(block.y - block.targetY) < 30) {
                    block.targetX = Math.random() * canvas.width;
                    block.targetY = Math.random() * canvas.height;
                }

                // Draw block
                drawBlock(block);
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
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
}