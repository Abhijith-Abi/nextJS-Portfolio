import { AnimatedBeamDemo } from "@/components/animated-beam-demo";

export default function AnimatedBeamPage() {
    return (
        <main className="min-h-screen bg-black p-20 flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl space-y-16">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-white tracking-tighter sm:text-6xl">
                        Animated Beam
                    </h1>
                    <p className="text-slate-400 text-lg">
                        SVG-based connection lines with smooth gradients and pulse effects.
                    </p>
                </div>
                
                <AnimatedBeamDemo />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-sm">
                        <h3 className="text-white font-semibold mb-2">Dynamic Curvature</h3>
                        <p className="text-slate-400 text-sm">
                            Paths automatically adapt as elements change position or the window is resized.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-sm">
                        <h3 className="text-white font-semibold mb-2">Gradient Flow</h3>
                        <p className="text-slate-400 text-sm">
                            Customizable start and end colors with CSS-driven dash animations.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
