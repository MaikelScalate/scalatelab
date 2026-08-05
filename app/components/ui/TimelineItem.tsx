type Props = {
  step: {
    number: string;
    icon: any;
    title: string;
    text: string;
    animation: string;
  };
  isLast: boolean;
};

export default function TimelineItem({
  step,
  isLast,
}: Props) {
  const Icon = step.icon;

  return (
    <div className="mb-32 flex flex-col items-center">

      {/* Icono */}

      <div className="flex h-20
w-20 items-center justify-center rounded-full
border
border-purple/40
bg-white/[0.03]
backdrop-blur bg-[#111]">
        <Icon className="h-7 w-7 text-purple" />
      </div>

      {/* Línea superior */}

      <div className="h-12 w-px bg-purple/30" />

      {/* Número */}

      <span className="text-6xl font-bold text-purple/20">
        {step.number}
      </span>

      {/* Título */}

      <h3 className="mt-3 text-3xl font-bold text-white">
        {step.title}
      </h3>

      {/* Texto */}

      <p className="mt-4 max-w-2xl text-center text-white/60">
        {step.text}
      </p>

      {/* Imagen */}

      <div className="mt-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
        <video
  src={step.animation}
  autoPlay
  loop
  muted
  playsInline
  className="w-full"
></video>
      </div>

      {/* Línea inferior */}

      {!isLast && (
        <div className="h-24 w-px bg-purple/30" />
      )}

    </div>
  );
}