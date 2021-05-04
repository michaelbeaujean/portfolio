import { Override, motionValue, useTransform } from "framer-motion"

const contentOffsetY = motionValue(0)

// Apply this override to your scroll component
export function TrackScroll() {
    return { contentOffsetY: contentOffsetY }
}

// Apply this override to your parallax layer
export function ParallaxLayer() {
    const y = useTransform(contentOffsetY, [0, -100], [0, 50], {
        clamp: false,
    })
    return {
        y: y,
    }
}