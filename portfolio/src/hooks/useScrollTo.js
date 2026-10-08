"use client";

import { useCallback } from "react";
import { useLenis } from "lenis/react";

export default function useScrollTo() {
    const lenis = useLenis();

    return useCallback(
        (id) => {
            const el = document.getElementById(id);
            if (!el) return;

            if (lenis) {
                lenis.scrollTo(el, {
                    offset: 0,
                    duration: 1.3,
                    easing: (t) => 1 - Math.pow(1 - t, 4),
                });
            } else {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        },
        [lenis]
    );
}