// Effect 3: tepi section bergelombang, 60px, selebar layar
type WaveProps = {
  fill: string;
  flip?: boolean;
};

export default function Wave({ fill, flip = false }: WaveProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="block h-[40px] w-full md:h-[60px]"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path d="M0 30 C 360 70, 1080 -10, 1440 30 L1440 60 L0 60 Z" fill={fill} />
    </svg>
  );
}
