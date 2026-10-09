// Small celebratory burst in the portfolio colors.
export async function fireConfetti() {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const confetti = (await import("canvas-confetti")).default;
    const colors = ["#5b6bff", "#1f2a8a", "#ff8a6b", "#ffd84d"];

    confetti({ particleCount: 90, spread: 75, origin: { y: 0.7 }, colors });
    setTimeout(
        () => confetti({ particleCount: 50, angle: 60, spread: 60, origin: { x: 0 }, colors }),
        180
    );
    setTimeout(
        () => confetti({ particleCount: 50, angle: 120, spread: 60, origin: { x: 1 }, colors }),
        320
    );
}