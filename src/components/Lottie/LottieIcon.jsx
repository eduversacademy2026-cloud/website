import './LottieIcon.css'

/**
 * Animated section icon. Renders an autoplaying, looping GIF.
 * GIFs loop natively and need no player library.
 */
function LottieIcon({ src, className = '', ariaLabel }) {
  return (
    <img
      src={src}
      className={`lottie-icon ${className}`}
      alt={ariaLabel || ''}
      loading="lazy"
      decoding="async"
      draggable="false"
    />
  )
}

export default LottieIcon
