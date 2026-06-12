import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import { AdditiveBlending } from 'three'
import type { Group } from 'three'

const VOLT = '#FFD60A'
const STEEL = '#3A465C'

/** One gyroscope ring with electrons orbiting along its circumference. */
function Ring({
  radius,
  tilt,
  speed,
  electrons,
  animate,
}: {
  radius: number
  tilt: [number, number, number]
  speed: number
  electrons: number
  animate: boolean
}) {
  const group = useRef<Group>(null)
  const orbiters = useRef<(Group | null)[]>([])

  useFrame((state, delta) => {
    if (!animate || !group.current) return
    group.current.rotation.x += delta * speed * 0.4
    group.current.rotation.z += delta * speed * 0.25
    const t = state.clock.elapsedTime
    orbiters.current.forEach((g, i) => {
      if (!g) return
      const angle = t * speed * 1.6 + (i * Math.PI * 2) / electrons
      g.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0)
    })
  })

  return (
    <group rotation={tilt}>
      <group ref={group}>
        <mesh>
          <torusGeometry args={[radius, 0.035, 16, 96]} />
          <meshStandardMaterial color={STEEL} metalness={0.7} roughness={0.35} />
        </mesh>
        {Array.from({ length: electrons }).map((_, i) => (
          <group
            key={i}
            ref={(el) => {
              orbiters.current[i] = el
            }}
            position={[radius, 0, 0]}
          >
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color={VOLT} />
            </mesh>
            <mesh scale={2.2}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial
                color={VOLT}
                transparent
                opacity={0.18}
                blending={AdditiveBlending}
                depthWrite={false}
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  )
}

/** Glowing nucleus: solid volt sphere wrapped in additive halo shells. */
function Core({ animate }: { animate: boolean }) {
  const group = useRef<Group>(null)

  useFrame((state) => {
    if (!animate || !group.current) return
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.2) * 0.07
    group.current.scale.setScalar(pulse)
  })

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color={VOLT} />
      </mesh>
      <mesh scale={1.45}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial
          color={VOLT}
          transparent
          opacity={0.16}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh scale={2.2}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial
          color={VOLT}
          transparent
          opacity={0.06}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

/** Whole assembly slowly spins and follows the pointer for parallax. */
function Assembly({ animate }: { animate: boolean }) {
  const outer = useRef<Group>(null)
  const drift = useRef(0)

  useFrame((state, delta) => {
    if (!animate || !outer.current) return
    drift.current += delta * 0.08
    const targetY = state.pointer.x * 0.55 + drift.current
    const targetX = -state.pointer.y * 0.35
    outer.current.rotation.y += (targetY - outer.current.rotation.y) * 0.05
    outer.current.rotation.x += (targetX - outer.current.rotation.x) * 0.05
  })

  return (
    <group ref={outer}>
      <Core animate={animate} />
      <Ring radius={1.5} tilt={[0.5, 0.2, 0]} speed={0.5} electrons={2} animate={animate} />
      <Ring radius={2.05} tilt={[-0.4, 0.5, 0.8]} speed={0.34} electrons={3} animate={animate} />
      <Ring radius={2.6} tilt={[1.1, -0.3, 0.3]} speed={0.22} electrons={2} animate={animate} />
      <Sparkles count={50} scale={[8, 8, 4]} size={1.4} speed={animate ? 0.3 : 0} opacity={0.5} color={VOLT} />
    </group>
  )
}

/** Energy-core gyroscope: glowing nucleus, steel rings, orbiting electrons. */
export default function EnergyCore({ animate }: { animate: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[0, 0, 0]} intensity={8} color={VOLT} distance={10} />
      <directionalLight position={[5, 6, 4]} intensity={1.6} color="#9fb4d8" />
      <Assembly animate={animate} />
    </Canvas>
  )
}
