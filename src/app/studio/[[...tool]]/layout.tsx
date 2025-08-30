// /app/studio/layout.tsx
import React from 'react';

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Shared layout UI like nav/sidebar can go here */}
      {children}
    </div>
  );
}
