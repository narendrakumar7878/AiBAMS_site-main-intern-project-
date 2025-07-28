// components/DocsBackground.tsx
import { useEffect, useRef } from "react";

export default function DocsBackground() {
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

        // Document page particles
        const pages: Array<{
            x: number;
            y: number;
            width: number;
            height: number;
            rotation: number;
            speed: number;
            opacity: number;
            targetX: number;
            targetY: number;
            cornerRadius: number;
            lineCount: number;
        }> = [];

        // Colors inspired by document UI (blue/green theme)
        const colors = [
            'rgba(59, 130, 246, 0.08)',    // blue-500
            'rgba(16, 185, 129, 0.08)',    // emerald-500
            'rgba(255, 255, 255, 0.05)',   // subtle white
            'rgba(139, 92, 246, 0.06)',    // purple-500 (accent)
        ];

        // Initialize pages
        for (let i = 0; i < 15; i++) {
            const size = Math.random() * 120 + 80;
            pages.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                width: size,
                height: size * 1.4,
                rotation: Math.random() * Math.PI / 8 - Math.PI / 16,
                speed: Math.random() * 0.2 + 0.05,
                opacity: Math.random() * 0.3 + 0.1,
                targetX: Math.random() * canvas.width,
                targetY: Math.random() * canvas.height,
                cornerRadius: 4 + Math.random() * 4,
                lineCount: 3 + Math.floor(Math.random() * 5)
            });
        }

        // Draw document page with lines
        const drawPage = (page: typeof pages[0], color: string) => {
            ctx.save();
            ctx.translate(page.x, page.y);
            ctx.rotate(page.rotation);

            // Page shadow
            ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;

            // Page body
            ctx.beginPath();
            ctx.moveTo(page.cornerRadius, 0);
            ctx.lineTo(page.width - page.cornerRadius, 0);
            ctx.quadraticCurveTo(page.width, 0, page.width, page.cornerRadius);
            ctx.lineTo(page.width, page.height - page.cornerRadius);
            ctx.quadraticCurveTo(page.width, page.height, page.width - page.cornerRadius, page.height);
            ctx.lineTo(page.cornerRadius, page.height);
            ctx.quadraticCurveTo(0, page.height, 0, page.height - page.cornerRadius);
            ctx.lineTo(0, page.cornerRadius);
            ctx.quadraticCurveTo(0, 0, page.cornerRadius, 0);
            ctx.closePath();

            ctx.fillStyle = color;
            ctx.fill();

            // Reset shadow
            ctx.shadowColor = 'transparent';

            // Page lines (text simulation)
            ctx.fillStyle = `rgba(255, 255, 255, ${page.opacity * 0.3})`;
            const lineHeight = page.height / (page.lineCount + 2);
            const margin = lineHeight * 0.8;

            for (let i = 0; i < page.lineCount; i++) {
                const lineWidth = margin + Math.random() * (page.width - margin * 2);
                ctx.fillRect(
                    margin,
                    margin + (i * lineHeight),
                    lineWidth,
                    lineHeight * 0.4
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

            for (let i = 0; i < pages.length; i++) {
                for (let j = i + 1; j < pages.length; j++) {
                    const dx = pages[i].x - pages[j].x;
                    const dy = pages[i].y - pages[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 300) {
                        ctx.beginPath();
                        ctx.moveTo(pages[i].x, pages[i].y);
                        ctx.lineTo(pages[j].x, pages[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw pages
            pages.forEach(page => {
                // Move towards target
                page.x += (page.targetX - page.x) * 0.01 * page.speed;
                page.y += (page.targetY - page.y) * 0.01 * page.speed;

                // Change target if close
                if (Math.abs(page.x - page.targetX) < 30 && Math.abs(page.y - page.targetY) < 30) {
                    page.targetX = Math.random() * canvas.width;
                    page.targetY = Math.random() * canvas.height;
                }

                // Draw page with random color
                drawPage(page, colors[Math.floor(Math.random() * colors.length)]);
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
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        />
    );
}