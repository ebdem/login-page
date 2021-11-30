import ReactDOM from 'react-dom'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import range from 'lodash-es/range'
import './styles.css'

const items = range(7)
const loading = ['L', 'O', 'A', 'D', 'I', 'N', 'G']
const interp = (i) => (r) => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function App() {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 2500 },
    reset: true,
  })
  return items.map((i) => (
    <animated.div
      key={i}
      className="script-bf-box"
      style={{
        transform: radians.interpolate(interp(i)),
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}>
      <h1>{loading[i]}</h1>
    </animated.div>
  ))
}

ReactDOM.render(<App />, document.getElementById('root'))
