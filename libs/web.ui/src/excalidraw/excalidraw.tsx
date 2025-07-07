"use client"

import dynamic from 'next/dynamic';

// Dynamically import Excalidraw with SSR disabled
const ExcalidrawComponent = dynamic(
    async () => {
        const { Excalidraw } = await import('@excalidraw/excalidraw');
        return ({ ...props }) => (
            <div style={{ width: "500px", height: "500px" }}>
                <Excalidraw
                    {...props}
                />
            </div>
        );
    },
    { ssr: false }
);

export { ExcalidrawComponent };