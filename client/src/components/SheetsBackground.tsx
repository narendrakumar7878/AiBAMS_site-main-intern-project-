// components/SheetsBackground.tsx
import { useEffect, useRef } from "react";

export default function SheetsBackground() {
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

        // Grid cell particles
        const cells: Array<{
            x: number;
            y: number;
            size: number;
            speed: number;
            opacity: number;
            targetX: number;
            targetY: number;
            color: string;
            value: string;
        }> = [];

        // Spreadsheet-themed colors
        const colors = [
            'rgba(59, 130, 246, 0.1)',   // Blue
            'rgba(139, 92, 246, 0.1)',   // Purple
            'rgba(236, 72, 153, 0.1)',   // Pink
            'rgba(16, 185, 129, 0.1)',   // Green
        ];

        const values = ['SUM', 'AVG', 'MAX', 'MIN', 'IF', 'VLOOKUP', 'GDP', 'ROI', 'KPI', '2024', 'Q1', 'Q2'];

        // Initialize cells
        for (let i = 0; i < 40; i++) {
            cells.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 30 + 20,
                speed: Math.random() * 0.1 + 0.05,
                opacity: Math.random() * 0.2 + 0.1,
                targetX: Math.random() * canvas.width,
                targetY: Math.random() * canvas.height,
                color: colors[Math.floor(Math.random() * colors.length)],
                value: values[Math.floor(Math.random() * values.length)]
            });
        }

        // Draw spreadsheet cell
        const drawCell = (cell: typeof cells[0]) => {
            ctx.save();
            ctx.translate(cell.x, cell.y);

            // Cell background
            ctx.fillStyle = cell.color;
            ctx.fillRect(0, 0, cell.size, cell.size);

            // Cell border
            ctx.strokeStyle = `rgba(255, 255, 255, ${cell.opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.strokeRect(0, 0, cell.size, cell.size);

            // Cell text
            ctx.fillStyle = `rgba(255, 255, 255, ${cell.opacity * 0.7})`;
            ctx.font = `${Math.max(8, cell.size / 4)}px Inter, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(cell.value, cell.size / 2, cell.size / 2);

            ctx.restore();
        };

        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw animated grid lines
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.03)';
            ctx.lineWidth = 1;

            for (let i = 0; i < cells.length; i++) {
                for (let j = i + 1; j < cells.length; j++) {
                    const dx = cells[i].x - cells[j].x;
                    const dy = cells[i].y - cells[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) {
                        ctx.beginPath();
                        ctx.moveTo(cells[i].x + cells[i].size / 2, cells[i].y + cells[i].size / 2);
                        ctx.lineTo(cells[j].x + cells[j].size / 2, cells[j].y + cells[j].size / 2);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw cells
            cells.forEach(cell => {
                // Move towards target
                cell.x += (cell.targetX - cell.x) * 0.01 * cell.speed;
                cell.y += (cell.targetY - cell.y) * 0.01 * cell.speed;

                // Change target if close
                if (Math.abs(cell.x - cell.targetX) < 20 && Math.abs(cell.y - cell.targetY) < 20) {
                    cell.targetX = Math.random() * canvas.width;
                    cell.targetY = Math.random() * canvas.height;
                }

                drawCell(cell);
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
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        />
    );
}