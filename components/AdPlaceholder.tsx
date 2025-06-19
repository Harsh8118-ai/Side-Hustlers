interface AdPlaceholderProps {
  width: string
  height: string
  label: string
  className?: string
}

export default function AdPlaceholder({ width, height, label, className = "" }: AdPlaceholderProps) {
  return (
    <div
      className={`ad-placeholder ${className}`}
      style={{
        width: width === "100%" ? "100%" : `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* Ad Slot - {label} */}
      <div className="text-center">
        <p className="font-medium">{label}</p>
        <p className="text-xs mt-1">
          {width} × {height}
        </p>
      </div>
    </div>
  )
}
