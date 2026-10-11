"use client";

import { useEffect, useState } from "react";

// Starts with a fixed year so nothing time-based runs during prerender,
// then switches to the real current year in the browser.
export default function CurrentYear() {
    const [year, setYear] = useState(2026);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return <span>{year}</span>;
}