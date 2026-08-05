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
    <>
      {/* ================= MOBILE ================= */}

      <div className="mb-32 flex flex-col items-center lg:hidden">

        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-purple/40 bg-white/[0.03] backdrop-blur">
          <Icon className="h-7 w-7 text-purple" />
        </div>

      </div>

      {/* ================= DESKTOP ================= */}

      <div className="
hidden
lg:grid
lg:grid-cols-[1fr_100px_1fr]
gap-16
items-center
mb-32
">

        {/* Texto */}

        <div>

          <span className="text-4xl font-bold text-purple">
            {step.number}
          </span>

          <h3 className="mt-4 text-5xl font-bold leading-tight text-white">
            {step.title}
          </h3>

          <p className="mt-6 text-xl leading-9 text-white/60">
            {step.text}
          </p>

        </div>

        {/* Línea */}

        <div className="relative flex justify-center">
  <div
    className="
      relative
      z-10
      flex
      h-20
      w-20
      items-center
      justify-center
      rounded-full
      border
      border-purple/40
      bg-[#111]
      backdrop-blur
    "
  >
    <Icon className="h-8 w-8 text-purple" />
  </div>

</div>

        {/* Vídeo */}

        <div>

          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#121212]">

            <video
              src={step.animation}
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />

          </div>

        </div>

      </div>
    </>
  );
}