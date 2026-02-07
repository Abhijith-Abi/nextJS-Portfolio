"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function CursorFollower() {
    const dotRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<HTMLDivElement | null>(null);
    const [cursorState, setCursorState] = useState<
        "default" | "pointer" | "text" | "card"
    >("default");
    const [isClicked, setIsClicked] = useState(false);

    // Velocity tracking
    const pos = useRef({ x: 0, y: 0 });
    const vel = useRef({ x: 0, y: 0 });
    const setX = useRef<any>(null);
    const setY = useRef<any>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        // Initial state
        gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

        // GSAP quickSetters for high performance
        setX.current = gsap.quickSetter(ring, "x", "px");
        setY.current = gsap.quickSetter(ring, "y", "px");
        const setDotX = gsap.quickSetter(dot, "x", "px");
        const setDotY = gsap.quickSetter(dot, "y", "px");

        // Animation Loop for Fluid Physics
        const loop = () => {
            // Calculate velocity (current mouse pos - last ring pos)
            // Note: checking actual DOM values or tracking ref values
            // For simplicity in React/GSAP, we'll let the mouse event update 'target' and loop update 'current'
            // But here we'll use a simpler velocity estimation from mouse events directly for the stretch
        };

        const handleMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;

            // Auto-show
            if (gsap.getProperty(dot, "opacity") === 0) {
                gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
            }

            // Dot follows instantly
            setDotX(clientX);
            setDotY(clientY);

            // Ring follows with slight lerp for position (handled by GSAP tween usually, but we want velocity data)
            // To get velocity for the "Jelly" effect, we need to compare current frame to previous frame
            // Let's use a GSAP ticker for the ring motion to calculate velocity accurately
        };

        window.addEventListener("pointermove", handleMove);

        // Ticker for Physics (Jelly Effect)
        gsap.ticker.add(() => {
            if (!ring) return;

            // Use a persistent targetRef for mouse pos if we want lerp,
            // but let's stick to the previous 'quickTo' logic for motion and add rotation/scale on top.
            // Actually, mixing quickTo and manual rotation/scale can be tricky.
            // Let's stick to a simpler "velocity based scale" on every mouse move if possible, or use the ticker to lerp.
        });

        return () => {
            window.removeEventListener("pointermove", handleMove);
            gsap.ticker.remove(loop);
        };
    }, []);

    // RE-IMPLEMENTATION WITH PROPER JELLY LOGIC
    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        // Mouse position target
        const mouse = { x: 0, y: 0 };
        // Current ring position
        const current = { x: 0, y: 0 };

        gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

        const xToDot = gsap.quickTo(dot, "x", {
            duration: 0.1,
            ease: "power3.out",
        });
        const yToDot = gsap.quickTo(dot, "y", {
            duration: 0.1,
            ease: "power3.out",
        });

        const handleMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Dot moves instantly
            xToDot(mouse.x);
            yToDot(mouse.y);

            // Show if hidden
            if (gsap.getProperty(dot, "opacity") === 0) {
                gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
            }
        };

        // Physics Loop
        const ticker = gsap.ticker.add(() => {
            // Linear interpolation (Lerp) for ring movement to create drag
            const runingSpeed = 0.15; // 0.15 easing

            // Calculate distance to travel
            const dx = mouse.x - current.x;
            const dy = mouse.y - current.y;

            // Update current position
            current.x += dx * runingSpeed;
            current.y += dy * runingSpeed;

            // Apply position
            gsap.set(ring, { x: current.x, y: current.y });

            // Calculate Velocity for deformation
            const velX = dx * runingSpeed;
            const velY = dy * runingSpeed;
            const velocity = Math.sqrt(velX * velX + velY * velY);
            const angle = Math.atan2(velY, velX) * (180 / Math.PI);

            // Stretch based on velocity (capped)
            const scaleFactor = Math.min(velocity * 0.05, 0.5); // Max stretch 0.5
            const scaleX = 1 + scaleFactor;
            const scaleY = 1 - scaleFactor * 0.5; // Squash less than stretch

            // Apply transformation only if moving significantly
            if (velocity > 0.1) {
                gsap.set(ring, {
                    rotation: angle,
                    scaleX: scaleX,
                    scaleY: scaleY,
                    overwrite: "auto",
                });
            } else {
                // Return to circle when stopped
                gsap.to(ring, {
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    duration: 0.2,
                    overwrite: "auto",
                });
            }
        });

        window.addEventListener("pointermove", handleMove);

        // ... (Hover listeners same as before)
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isLink = target.closest("a, button, [role='button']");
            const isText = target.closest(
                "p, span, h1, h2, h3, h4, h5, h6, input",
            );
            const customCursor = target
                .closest("[data-cursor]")
                ?.getAttribute("data-cursor");

            if (customCursor) setCursorState(customCursor as any);
            else if (isLink) setCursorState("pointer");
            else if (isText)
                setCursorState("default"); // Keep default for text to let jelly effect shine
            else setCursorState("default");
        };

        const handleMouseOut = () => setCursorState("default");
        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("pointermove", handleMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            gsap.ticker.remove(ticker);
        };
    }, []);

    // State Styles
    useEffect(() => {
        const ring = ringRef.current;
        if (!ring) return;

        // We only animate properties that NOT handled by the ticker (width, height, color)
        // Transformation (scale/rotation) is handled by ticker for physics,
        // BUT we need to override/mix them for states like 'pointer'

        const ringBase = {
            backgroundColor: "transparent",
            borderColor: "rgba(34, 197, 94, 0.4)",
            mixBlendMode: "normal",
        };

        switch (cursorState) {
            case "pointer":
                // For pointer, we might want to stop the jelly effect or separate it
                // Simple fix: Make the ring larger and maybe disable physics temporarily?
                // Or just let it be a jelly bubble around the link

                gsap.to(ring, {
                    width: 60,
                    height: 60,
                    ...ringBase,
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                    mixBlendMode: "difference",
                    duration: 0.3,
                });
                break;

            case "card":
                gsap.to(ring, {
                    width: 80,
                    height: 80,
                    borderRadius: "20%", // Rounded square
                    ...ringBase,
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    mixBlendMode: "difference",
                    duration: 0.4,
                });
                break;

            default:
                gsap.to(ring, {
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    ...ringBase,
                    duration: 0.3,
                });
                break;
        }
    }, [cursorState]);

    // Click
    useEffect(() => {
        const ring = ringRef.current;
        if (isClicked && ring) {
            gsap.to(ring, { opacity: 0.5, duration: 0.1 });
        } else if (ring) {
            gsap.to(ring, { opacity: 1, duration: 0.1 });
        }
    }, [isClicked]);

    return (
        <>
            <div
                ref={ringRef}
                className="pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 border rounded-full will-change-transform md:block"
            />
            <div
                ref={dotRef}
                className="pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block"
                style={{ width: 8, height: 8 }}
            />
        </>
    );
}
