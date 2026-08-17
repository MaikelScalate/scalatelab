"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Onboarding() {
  const router = useRouter();

  const [videoCompleted, setVideoCompleted] = useState(false);
  const [questionnaireCompleted, setQuestionnaireCompleted] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  const [platformVideoCompleted, setPlatformVideoCompleted] = useState(false);
  const [platformVideoStarted, setPlatformVideoStarted] = useState(false);
  const [platformAccessCompleted, setPlatformAccessCompleted] = useState(false);

  const [adsVideoCompleted, setAdsVideoCompleted] = useState(false);
  const [adsVideoStarted, setAdsVideoStarted] = useState(false);
  const [adsInstructionsCompleted, setAdsInstructionsCompleted] = useState(false);

  const [emailVideoCompleted, setEmailVideoCompleted] = useState(false);
  const [emailVideoStarted, setEmailVideoStarted] = useState(false);
  const [emailInstructionsCompleted, setEmailInstructionsCompleted] = useState(false);

  const [activeStep, setActiveStep] = useState(1);

  const step1Completed = videoCompleted && questionnaireCompleted;
  const step2Completed = platformVideoCompleted && platformAccessCompleted;
  const step3Completed = adsVideoCompleted && adsInstructionsCompleted;
  const step4Completed = emailVideoCompleted && emailInstructionsCompleted;

  // Redirección global:
  // cuando las 8 tareas están completadas, se accede a la página final
  // independientemente del orden o de dónde se haya marcado cada tarea.
  useEffect(() => {
    const allTasksCompleted =
      videoCompleted &&
      questionnaireCompleted &&
      platformVideoCompleted &&
      platformAccessCompleted &&
      adsVideoCompleted &&
      adsInstructionsCompleted &&
      emailVideoCompleted &&
      emailInstructionsCompleted;

    if (allTasksCompleted) {
      router.push("/onboarding-completado");
    }
  }, [
    videoCompleted,
    questionnaireCompleted,
    platformVideoCompleted,
    platformAccessCompleted,
    adsVideoCompleted,
    adsInstructionsCompleted,
    emailVideoCompleted,
    emailInstructionsCompleted,
    router,
  ]);

  const completeEmailInstructions = () => {
    setEmailInstructionsCompleted(true);
  };

  const completeEmailVideo = () => {
    setEmailVideoStarted(true);
    setEmailVideoCompleted(true);
  };

  const progressPercent = step4Completed
    ? "100%"
    : step3Completed
      ? "75%"
      : step2Completed
      ? "50%"
      : step1Completed
        ? "25%"
        : "0%";

  const openStep = (step: number) => {
    if (step === 1) setActiveStep(1);
    if (step === 2 && step1Completed) setActiveStep(2);
    if (step === 3 && step2Completed) setActiveStep(3);
    if (step === 4 && step3Completed) setActiveStep(4);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05060b] text-white">
      <Background />

      <div className="relative z-10 mx-auto w-full max-w-[1340px] px-4 pb-10 sm:px-6 lg:px-0">
        <header className="flex justify-center pt-6 sm:pt-7 lg:pt-8">
          <Link href="/" aria-label="Volver a Scalate" className="transition-transform duration-300 hover:scale-105">
            <img src="/icon.png" alt="Scalate" className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]" />
          </Link>
        </header>

        <section className="mx-auto mt-6 max-w-4xl text-center sm:mt-7 lg:mt-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.10] bg-[#05060b]/80 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 shadow-[0_0_30px_rgba(124,58,237,0.08)] backdrop-blur-sm sm:px-6 sm:py-3 sm:text-xs">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-purple-400/40" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#D946EF] shadow-[0_0_12px_rgba(217,70,239,0.9)]" />
              </span>
              <span>ONBOARDING</span>
            </div>
          </div>

          <h1 className="mt-7 text-[2rem] font-semibold leading-[1.03] tracking-[-0.055em] sm:mt-8 sm:text-[3rem] lg:text-[3.4rem]">
            Completa tu onboarding
          </h1>
          <p className="mx-auto mt-2 text-sm leading-6 text-white/45 sm:mt-3 sm:text-base sm:leading-7 lg:whitespace-nowrap">
            Sigue los pasos para que podamos conocer tu marca a fondo y ayudarte a escalar.
          </p>
        </section>

        <div className="mt-8 grid items-stretch gap-5 lg:mt-9 lg:grid-cols-[300px_minmax(0,700px)] lg:justify-center lg:gap-6">
          <aside className="hidden self-stretch rounded-[20px] border border-white/[0.09] bg-black p-5 shadow-[0_20px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl lg:block">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/40">Tu progreso</p>
            <div className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{progressPercent}</div>
            <p className="mt-1 text-[11px] text-white/40">
              {step4Completed
                ? "4 de 4 pasos completados"
                : step3Completed
                  ? "3 de 4 pasos completados"
                  : step2Completed
                    ? "2 de 4 pasos completados"
                    : step1Completed
                      ? "1 de 4 pasos completados"
                      : "0 de 4 pasos completados"}
            </p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
              <div className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] transition-all duration-700" style={{ width: progressPercent }} />
            </div>

            <div className="my-5 h-px bg-white/[0.08]" />

            <div className="relative space-y-6">
              <ProgressConnector
                step1Completed={step1Completed}
                step2Completed={step2Completed}
                step3Completed={step3Completed}
                step4Completed={step4Completed}
              />

              <div className="relative z-10">
                <ProgressStep number="01" label="Tu marca" active={activeStep === 1 && !step1Completed} completed={step1Completed} onClick={() => openStep(1)} />
                {(!step1Completed || activeStep === 1) && (
                  <div className="ml-12 mt-3 space-y-2.5">
                    <OnboardingTask
                      label="Ver vídeo de onboarding"
                      completed={videoCompleted}
                      onClick={() => {
                        const next = !videoCompleted;
                        setVideoCompleted(next);
                        if (next && questionnaireCompleted) setActiveStep(2);
                      }}
                    />
                    <OnboardingTask
                      label="Completar cuestionario"
                      completed={questionnaireCompleted}
                      onClick={() => {
                        const next = !questionnaireCompleted;
                        setQuestionnaireCompleted(next);
                        if (next && videoCompleted) setActiveStep(2);
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="relative z-10">
                <ProgressStep number="02" label="Plataformas" active={activeStep === 2 && step1Completed && !step2Completed} completed={step2Completed} onClick={() => openStep(2)} />
                {step1Completed && (!step2Completed || activeStep === 2) && (
                  <div className="ml-12 mt-3 space-y-2.5">
                    <OnboardingTask
                      label="Ver vídeo de plataformas"
                      completed={platformVideoCompleted}
                      onClick={() => {
                        const next = !platformVideoCompleted;
                        setPlatformVideoCompleted(next);
                        if (next && platformAccessCompleted) setActiveStep(3);
                      }}
                    />
                    <OnboardingTask
                      label="Dar accesos a Shopify, GA4 y GSC"
                      completed={platformAccessCompleted}
                      onClick={() => {
                        const next = !platformAccessCompleted;
                        setPlatformAccessCompleted(next);
                        if (next && platformVideoCompleted) setActiveStep(3);
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="relative z-10">
                <ProgressStep
                  number="03"
                  label="Publicidad"
                  active={activeStep === 3 && step2Completed && !step3Completed}
                  completed={step3Completed}
                  onClick={() => openStep(3)}
                />
                {step2Completed && (!step3Completed || activeStep === 3) && (
                  <div className="ml-12 mt-3 space-y-2.5">
                    <OnboardingTask
                      label="Ver vídeo de publicidad"
                      completed={adsVideoCompleted}
                      onClick={() => {
                        const next = !adsVideoCompleted;
                        setAdsVideoCompleted(next);
                        if (next && adsInstructionsCompleted) setActiveStep(4);
                      }}
                    />
                    <OnboardingTask
                      label="Completar instrucciones de publicidad"
                      completed={adsInstructionsCompleted}
                      onClick={() => {
                        const next = !adsInstructionsCompleted;
                        setAdsInstructionsCompleted(next);
                        if (next && adsVideoCompleted) setActiveStep(4);
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="relative z-10">
                <ProgressStep
                  number="04"
                  label="Email marketing"
                  active={activeStep === 4 && step3Completed && !step4Completed}
                  completed={step4Completed}
                  onClick={() => openStep(4)}
                />
                {step3Completed && (!step4Completed || activeStep === 4) && (
                  <div className="ml-12 mt-3 space-y-2.5">
                    <OnboardingTask
                      label="Ver vídeo de email marketing"
                      completed={emailVideoCompleted}
                      onClick={() => {
                        const next = !emailVideoCompleted;
                        setEmailVideoCompleted(next);
                        if (next && emailInstructionsCompleted) {
                          setActiveStep(4);
                        }
                      }}
                    />
                    <OnboardingTask
  label="Completar instrucciones de Klaviyo"
  completed={emailInstructionsCompleted}
  onClick={() => {
    if (!emailInstructionsCompleted) {
      completeEmailInstructions();
    }
  }}
/>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-7 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
              <div className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-500/[0.08] text-sm text-purple-300">✦</div>
                <p className="text-xs leading-5 text-white/45">Completa todos los pasos para que podamos analizar tu marca y crear el mejor plan de acción posible.</p>
              </div>
            </div>
          </aside>

          <section className="min-w-0">
            {/* =================================================
                PROGRESO MOBILE
                Igual que el lateral de ordenador, pero horizontal.
                Solo se muestra el paso activo y sus tareas.
                ================================================= */}
            <div className="mb-5 lg:hidden">
              <div className="rounded-[20px] border border-white/[0.09] bg-black p-4 shadow-[0_20px_70px_rgba(0,0,0,0.26)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/40">
                    Tu progreso
                  </span>
                  <span className="text-xs font-semibold text-white/60">
                    {progressPercent}
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] transition-all duration-700"
                    style={{ width: progressPercent }}
                  />
                </div>

                {/* Selector horizontal 01 / 02 / 03 / 04 */}
                <div className="mt-5 grid grid-cols-4 gap-2">
                  <MobileStepButton
                    number="01"
                    label="Tu marca"
                    active={activeStep === 1}
                    completed={step1Completed}
                    onClick={() => openStep(1)}
                  />
                  <MobileStepButton
                    number="02"
                    label="Plataformas"
                    active={activeStep === 2}
                    completed={step2Completed}
                    onClick={() => openStep(2)}
                  />
                  <MobileStepButton
                    number="03"
                    label="Publicidad"
                    active={activeStep === 3}
                    completed={step3Completed}
                    onClick={() => openStep(3)}
                  />
                  <MobileStepButton
                    number="04"
                    label="Email"
                    active={activeStep === 4}
                    completed={step4Completed}
                    onClick={() => openStep(4)}
                  />
                </div>

                {/* Solo las tareas del paso seleccionado */}
                <div className="mt-4 border-t border-white/[0.07] pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-400/40 bg-gradient-to-br from-[#7C3AED] to-[#D946EF] text-[11px] font-semibold text-white shadow-[0_0_18px_rgba(217,70,239,0.22)]">
                      {activeStep === 1 ? "01" : activeStep === 2 ? "02" : activeStep === 3 ? "03" : "04"}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {activeStep === 1
                          ? "Tu marca"
                          : activeStep === 2
                            ? "Plataformas"
                            : activeStep === 3
                              ? "Publicidad"
                              : "Email marketing"}
                      </p>
                      <p className="mt-0.5 text-xs text-purple-400">
                        {activeStep === 1
                          ? step1Completed ? "Completado" : "En progreso"
                          : activeStep === 2
                            ? step2Completed ? "Completado" : "En progreso"
                            : activeStep === 3
                              ? step3Completed ? "Completado" : "En progreso"
                              : step4Completed ? "Completado" : "En progreso"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 space-y-2">
                    {activeStep === 1 && (
                      <>
                        <MobileTaskRow
                          label="Ver vídeo de onboarding"
                          completed={videoCompleted}
                          onClick={() => {
                            const next = !videoCompleted;
                            setVideoCompleted(next);
                            if (next) setVideoStarted(true);
                            if (next && questionnaireCompleted) setActiveStep(2);
                          }}
                        />
                        <MobileTaskRow
                          label="Completar cuestionario"
                          completed={questionnaireCompleted}
                          onClick={() => {
                            const next = !questionnaireCompleted;
                            setQuestionnaireCompleted(next);
                            if (next && videoCompleted) setActiveStep(2);
                          }}
                        />
                      </>
                    )}

                    {activeStep === 2 && (
                      <>
                        <MobileTaskRow
                          label="Ver vídeo de plataformas"
                          completed={platformVideoCompleted}
                          onClick={() => {
                            const next = !platformVideoCompleted;
                            setPlatformVideoCompleted(next);
                            if (next) setPlatformVideoStarted(true);
                            if (next && platformAccessCompleted) setActiveStep(3);
                          }}
                        />
                        <MobileTaskRow
                          label="Dar accesos a Shopify, GA4 y GSC"
                          completed={platformAccessCompleted}
                          onClick={() => {
                            const next = !platformAccessCompleted;
                            setPlatformAccessCompleted(next);
                            if (next && platformVideoCompleted) setActiveStep(3);
                          }}
                        />
                      </>
                    )}

                    {activeStep === 3 && (
                      <>
                        <MobileTaskRow
                          label="Ver vídeo de publicidad"
                          completed={adsVideoCompleted}
                          onClick={() => {
                            const next = !adsVideoCompleted;
                            setAdsVideoCompleted(next);
                            if (next) setAdsVideoStarted(true);
                            if (next && adsInstructionsCompleted) setActiveStep(4);
                          }}
                        />
                        <MobileTaskRow
                          label="Completar instrucciones de publicidad"
                          completed={adsInstructionsCompleted}
                          onClick={() => {
                            const next = !adsInstructionsCompleted;
                            setAdsInstructionsCompleted(next);
                            if (next && adsVideoCompleted) setActiveStep(4);
                          }}
                        />
                      </>
                    )}

                    {activeStep === 4 && (
                      <>
                        <MobileTaskRow
                          label="Ver vídeo de email marketing"
                          completed={emailVideoCompleted}
                          onClick={() => {
                            const next = !emailVideoCompleted;
                            setEmailVideoCompleted(next);
                            if (next) setEmailVideoStarted(true);
                          }}
                        />
                        <MobileTaskRow
                          label="Completar instrucciones de Klaviyo"
                          completed={emailInstructionsCompleted}
                          onClick={() => {
                            const next = !emailInstructionsCompleted;
                            setEmailInstructionsCompleted(next);
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[20px] border border-white/[0.09] bg-black shadow-[0_25px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:rounded-[22px]">
              <div className="p-4 sm:p-6 lg:p-6">
                {activeStep === 1 && (
                  <StepOneContent
                    videoStarted={videoStarted}
                    videoCompleted={videoCompleted}
                    questionnaireCompleted={questionnaireCompleted}
                    onPlayVideo={() => {
                      setVideoStarted(true);
                      setVideoCompleted(true);
                    }}
                    onQuestionnaire={() => setQuestionnaireCompleted(true)}
                    completed={step1Completed}
                    onContinue={() => setActiveStep(2)}
                  />
                )}

                {activeStep === 2 && (
                  <StepTwoContent
                    enabled={step1Completed}
                    videoStarted={platformVideoStarted}
                    videoCompleted={platformVideoCompleted}
                    accessCompleted={platformAccessCompleted}
                    onPlayVideo={() => {
                      setPlatformVideoStarted(true);
                      setPlatformVideoCompleted(true);
                    }}
                    onAccess={() => setPlatformAccessCompleted(true)}
                    completed={step2Completed}
                    onContinue={() => setActiveStep(3)}
                  />
                )}

                {activeStep === 3 && (
                  <StepThreeContent
                    enabled={step2Completed}
                    videoStarted={adsVideoStarted}
                    videoCompleted={adsVideoCompleted}
                    instructionsCompleted={adsInstructionsCompleted}
                    onPlayVideo={() => {
                      setAdsVideoStarted(true);
                      setAdsVideoCompleted(true);
                    }}
                    onInstructions={() => setAdsInstructionsCompleted(true)}
                    completed={step3Completed}
                    onContinue={() => setActiveStep(4)}
                  />
                )}

                {activeStep === 4 && (
                  <StepFourContent
                    enabled={step3Completed}
                    videoStarted={emailVideoStarted}
                    videoCompleted={emailVideoCompleted}
                    instructionsCompleted={emailInstructionsCompleted}
                    onPlayVideo={completeEmailVideo}
                    onInstructions={completeEmailInstructions}
                    completed={step4Completed}
                  />
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function StepOneContent({ videoStarted, questionnaireCompleted, onPlayVideo, onQuestionnaire, completed, onContinue }: { videoStarted: boolean; videoCompleted: boolean; questionnaireCompleted: boolean; onPlayVideo: () => void; onQuestionnaire: () => void; completed: boolean; onContinue: () => void }) {
  return (
    <div>
      <div>
        <StepHeader icon="▶" eyebrow="01. Antes de continuar" title="Vídeo de onboarding" description="Visualiza este vídeo antes de continuar. Te ayudará a entender cómo funciona el proceso y qué esperamos de esta primera fase." />
        <VideoBox started={videoStarted} cover="/onboarding-video-cover.png" src="/video-onboarding.mp4" title="Vídeo de onboarding Scalate" onPlay={onPlayVideo} />
      </div>

      <div className="mt-6 border-t border-white/[0.07] pt-6">
        <StepHeader icon="▣" eyebrow="1.1 Primer paso" title="Cuestionario inicial" description="Responde el siguiente cuestionario con la mayor cantidad de información posible. Cuanto mejor conozcamos tu marca, mejor podremos trabajar sobre ella." />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScQ8awNtuz400Ni4NpLB7bmHq1ac5aayLH2Z5AIC4uU4TRasA/viewform?usp=send_form" target="_blank" rel="noopener noreferrer" onClick={onQuestionnaire} className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(217,70,239,0.18)] transition-all hover:-translate-y-0.5 sm:w-auto">
          {questionnaireCompleted ? "✓ CUESTIONARIO COMPLETADO" : "COMPLETAR CUESTIONARIO"}<span className="ml-2">↗</span>
        </a>
        <p className="mt-2 text-xs text-white/25">Se abrirá en una nueva pestaña</p>
      </div>

      <CompletionBox completed={completed} step="01" onContinue={onContinue} />
      <InfoBox text="Tómate tu tiempo y responde con detalle. Esta información será la base de nuestra estrategia." />
    </div>
  );
}

function StepTwoContent({ enabled, videoStarted, onPlayVideo, accessCompleted, onAccess, completed, onContinue }: { enabled: boolean; videoStarted: boolean; videoCompleted: boolean; accessCompleted: boolean; onPlayVideo: () => void; onAccess: () => void; completed: boolean; onContinue: () => void }) {
  if (!enabled) return <LockedStep />;
  return (
    <div>
      <StepHeader icon="02" eyebrow="2.1 Vídeo accesos a plataformas" title="Acceso a tu Shopify, GA4 y GSC" description="Así analizaremos a detalle tu marca y podremos crear el mejor plan de acción posible." />
      <div className="mt-6">
        <VideoBox started={videoStarted} cover="/onboarding-video-web-cover.png" src="/video-web-onboarding.mp4" title="Vídeo de acceso a Shopify, GA4 y GSC" onPlay={onPlayVideo} />
      </div>
      <div className="mt-6 border-t border-white/[0.07] pt-6">
        <StepHeader icon="✓" eyebrow="2.2. Accesos" title="Concede los accesos necesarios" description="Completa las instrucciones de Shopify, GA4 y Google Search Console. Si no tienes alguna de estas plataformas, crea tu cuenta en ella para ir nutriendo la plataforma de datos y apórtanos acceso para hacer los análisis correspondientes." small />
        <div className="mt-5 space-y-4">
          <PlatformInstruction title="Descargar Clarity" description="Entra en tu Tienda Shopify → Apps → Configuración de apps → Busca Clarity by Microsoft para instalarla." />
          <PlatformInstruction title="Shopify" description="Entra en tu Shopify → Configuración → Usuarios → Seguridad. Localiza tu código de colaborador de 4 dígitos y facilítanoslo en tu ecosistema Notion. Cuando enviemos la solicitud, ve a Usuarios → Solicitudes → Revisar solicitud y acepta los accesos necesarios." />
          <PlatformInstruction title="Google Analytics 4 (GA4)" description="Entra en Google Analytics → selecciona tu propiedad GA4 → Administrar → Gestión de accesos a la cuenta/propiedad → Añadir usuarios. Añade scalatelab@gmail.com con permiso Editor y envía la invitación." href="https://analytics.google.com/" />
          <PlatformInstruction title="Google Search Console (GSC)" description="Entra en Google Search Console → selecciona tu propiedad → Ajustes → Usuarios y permisos → Añadir usuario. Añade scalatelab@gmail.com con acceso completo, sin convertirlo en propietario." href="https://search.google.com/search-console/" />
        </div>
        <button type="button" onClick={onAccess} className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all ${accessCompleted ? "border border-purple-400/30 bg-purple-500/[0.06] text-purple-300" : "bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white shadow-[0_0_25px_rgba(217,70,239,0.18)] hover:-translate-y-0.5"}`}>
          {accessCompleted ? "✓ ACCESOS COMPLETADOS" : "HE DADO LOS ACCESOS NECESARIOS"}
        </button>
        <CompletionBox completed={completed} step="02" onContinue={onContinue} />
      </div>
    </div>
  );
}

function StepThreeContent({
  enabled,
  videoStarted,
  videoCompleted,
  instructionsCompleted,
  onPlayVideo,
  onInstructions,
  completed,
  onContinue,
}: {
  enabled: boolean;
  videoStarted: boolean;
  videoCompleted: boolean;
  instructionsCompleted: boolean;
  onPlayVideo: () => void;
  onInstructions: () => void;
  completed: boolean;
  onContinue: () => void;
}) {
  if (!enabled) return <LockedStep />;

  return (
    <div>
      <StepHeader
        icon="03"
        eyebrow="3.1 Vídeo"
        title="Acceso a tus plataforas publicitarias"
        description="Visualiza el vídeo antes de continuar. Después, sigue las instrucciones para darnos acceso a las plataformas publicitarias necesarias."
      />

      <div className="mt-6">
        <VideoBox
          started={videoStarted}
          cover="/onboarding-video-publi-cover.png"
          src="/video-publi-onboarding.mp4"
          title="Vídeo de publicidad"
          onPlay={onPlayVideo}
        />
      </div>

      <div className="mt-6 border-t border-white/[0.07] pt-6">
        <StepHeader
          icon="✓"
          eyebrow="3.2 Instrucciones"
          title="Da acceso a tus plataformas publicitarias"
          description="Sigue las instrucciones de Meta, Google y TikTok Ads para darnos accesos. Habitualmente tendrás creada Meta Ads pero si tiene alguna más danos acceso para hacer un análisis más exhaustivo. Cuando hayas terminado, marca la casilla completada."
          small
        />

        <div className="mt-5 space-y-4">
          <PlatformInstruction
            title="META ADS"
            description={'Accede a tu Business Manager en business.facebook.com. En Configuración del Negocio → Socios → Añadir → Proporcionar acceso a un socio a tus activos, introduce nuestro identificador del portfolio empresarial Scalate "9364566843664298". Asigna los activos necesarios de Facebook e Instagram, la cuenta publicitaria, el píxel y el catálogo con los permisos indicados. Después, marca la casilla “Scalate actúa como agencia para mi empresa” y asigna los activos.'}
            href="https://business.facebook.com/"
          />

          <PlatformInstruction
            title="GOOGLE ADS"
            description={'Accede a tu cuenta de Google Ads en ads.google.com. Ve a Administrador → Acceso y Seguridad → Usuarios → +. Añade scalatelab@gmail.com con acceso estándar y pulsa “Enviar invitación”.'}
            href="https://ads.google.com/"
          />

          <PlatformInstruction
            title="TIKTOK ADS"
            description={'Entra en TikTok Ads Manager en business.tiktok.com. Accede a Business Center → Partners/Socios → add partner/Añadir socio. Introduce nuestro ID de Business Center 7547426523280982033, selecciona la cuenta TikTok, cuenta publicitaria, píxel/eventos y catálogo de productos, y asigna acceso de administrador sin control total.'}
            href="https://business.tiktok.com/"
          />
        </div>

        <button
          type="button"
          onClick={onInstructions}
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all ${
            instructionsCompleted
              ? "border border-purple-400/30 bg-purple-500/[0.06] text-purple-300"
              : "bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white shadow-[0_0_25px_rgba(217,70,239,0.18)] hover:-translate-y-0.5"
          }`}
        >
          {instructionsCompleted ? "✓ INSTRUCCIONES COMPLETADAS" : "HE COMPLETADO LAS INSTRUCCIONES"}
        </button>

        <CompletionBox completed={completed} step="03" onContinue={onContinue} />
      </div>
    </div>
  );
}

function StepFourContent({
  enabled,
  videoStarted,
  videoCompleted,
  instructionsCompleted,
  onPlayVideo,
  onInstructions,
  completed,
}: {
  enabled: boolean;
  videoStarted: boolean;
  videoCompleted: boolean;
  instructionsCompleted: boolean;
  onPlayVideo: () => void;
  onInstructions: () => void;
  completed: boolean;
}) {
  if (!enabled) return <LockedStep />;

  return (
    <div>
      <StepHeader
        icon="04"
        eyebrow="4.1 Vídeo"
        title="Acceso a tu email marketing"
        description="Visualiza el vídeo antes de continuar. Después, sigue las instrucciones para darnos acceso a Klaviyo y poder analizar y mejorar tu estrategia de email marketing."
      />

      <div className="mt-6">
        <VideoBox
          started={videoStarted}
          cover="/onboarding-video-email-cover.png"
          src="/video-email-onboarding.mp4"
          title="Vídeo de email marketing"
          onPlay={onPlayVideo}
        />
      </div>

      <div className="mt-6 border-t border-white/[0.07] pt-6">
        <StepHeader
          icon="✓"
          eyebrow="4.2 Instrucciones"
          title="Da acceso a Klaviyo"
          description="Sigue las instrucciones para añadir a Scalate como usuario administrador de tu cuenta de Klaviyo. Cuando hayas terminado, marca la tarea como completada."
          small
        />

        <div className="mt-5 space-y-4">
          <PlatformInstruction
  title="Klaviyo"
  description={'Inicia sesión en Klaviyo y ve a Settings → Users. Pulsa Add New User. Añade scalatelab@gmail.com y selecciona el rol ADMIN. Pulsa Send Invitation. Con el acceso de administrador podremos gestionar flujos, emails, campañas, segmentaciones e informes.'}
  href="https://www.klaviyo.com/login"
/>
        </div>

        <button
          type="button"
          onClick={onInstructions}
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all ${
            instructionsCompleted
              ? "border border-purple-400/30 bg-purple-500/[0.06] text-purple-300"
              : "bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white shadow-[0_0_25px_rgba(217,70,239,0.18)] hover:-translate-y-0.5"
          }`}
        >
          {instructionsCompleted
            ? "✓ INSTRUCCIONES COMPLETADAS"
            : "HE COMPLETADO LAS INSTRUCCIONES"}
        </button>

        <div className="mt-8 rounded-2xl border border-purple-400/20 bg-purple-500/[0.035] p-5 sm:p-6">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-400/50 bg-purple-500/[0.05] text-lg text-purple-300">
              ✓
            </div>
            <div>
              <h3 className="text-lg font-semibold">¿Has completado este paso?</h3>
              <p className="mt-1 text-sm leading-6 text-white/40">
                {completed
                  ? "Has completado todas las tareas del onboarding."
                  : "Completa el vídeo y las instrucciones de Klaviyo para finalizar el onboarding."}
              </p>
            </div>
          </div>

          <div
            className={`mt-5 rounded-xl border px-4 py-3 text-center text-sm font-semibold ${
              completed
                ? "border-purple-400/20 bg-purple-500/[0.04] text-purple-300"
                : "border-white/[0.07] bg-white/[0.02] text-white/35"
            }`}
          >
            {completed
              ? "✓ ONBOARDING COMPLETADO — 4 DE 4 PASOS"
              : "Completa las tareas de este paso para finalizar."}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepHeader({ icon, eyebrow, title, description, small = false }: { icon: string; eyebrow: string; title: string; description: string; small?: boolean }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`${small ? "h-10 w-10" : "h-11 w-11"} flex shrink-0 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/[0.06] ${small ? "text-sm" : "text-lg"} text-purple-300`}>{icon}</div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-purple-400">{eyebrow}</p>
        <h3 className="mt-1 text-lg font-semibold tracking-[-0.025em] sm:text-xl">{title}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/45">{description}</p>
      </div>
    </div>
  );
}

function VideoBox({
  started,
  cover,
  src,
  title,
  onPlay,
}: {
  started: boolean;
  cover: string;
  src: string;
  title: string;
  onPlay: () => void;
}) {
  return (
    <div
      className="
        relative
        mt-4
        w-full
        overflow-hidden
        rounded-xl
        border
        border-white/[0.10]
        bg-black
        shadow-[0_15px_60px_rgba(0,0,0,0.4)]
        aspect-video
        sm:rounded-2xl
      "
    >
      {started ? (
        <iframe
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={title}
        />
      ) : (
        <button
          type="button"
          onClick={onPlay}
          aria-label={`Reproducir ${title}`}
          className="absolute inset-0 h-full w-full cursor-pointer border-0 bg-black p-0"
        >
          <img
            src={cover}
            alt={title}
            className="h-full w-full object-contain"
          />

          <span
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-12
              w-12
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/80
              text-white
              shadow-[0_0_25px_rgba(0,0,0,0.5)]
              backdrop-blur-sm
              transition-transform
              hover:scale-105
              sm:h-20
              sm:w-20
            "
          >
            <span className="ml-0.5 text-lg sm:ml-1 sm:text-3xl">▶</span>
          </span>
        </button>
      )}
    </div>
  );
}

function CompletionBox({ completed, step, onContinue }: { completed: boolean; step: string; onContinue: () => void }) {
  return (
    <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5 sm:p-6">
      <div className="flex gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-400/50 bg-purple-500/[0.05] text-lg text-purple-300">✓</div>
        <div><h3 className="text-lg font-semibold">¿Has completado este paso?</h3><p className="mt-1 text-sm leading-6 text-white/40">Completa todas las tareas de este paso para continuar con el siguiente.</p></div>
      </div>
      {completed ? (
        <div className="mt-5">
          <div className="rounded-xl border border-purple-400/20 bg-purple-500/[0.04] px-4 py-3 text-center text-sm font-semibold text-purple-300">✓ PASO {step} COMPLETADO</div>
          <button type="button" onClick={onContinue} className="mt-3 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(217,70,239,0.18)] transition-all hover:-translate-y-0.5">CONTINUAR <span className="ml-2">→</span></button>
        </div>
      ) : <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-center text-sm text-white/35">Completa las tareas de este paso para continuar.</div>}
    </div>
  );
}

function LockedStep() {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 text-center text-sm text-white/40">
      Completa los pasos anteriores para desbloquear este apartado.
    </div>
  );
}
function InfoBox({ text }: { text: string }) { return <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-3"><p className="text-xs leading-5 text-white/35"><span className="mr-2 text-purple-300">ⓘ</span>{text}</p></div>; }
function StepPlaceholder({ number, title, description }: { number: string; title: string; description: string }) { return <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-purple-400">{number}. Próximamente</p><h2 className="mt-2 text-2xl font-semibold">{title}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">{description}</p></div>; }

function OnboardingTask({ label, completed, onClick }: { label: string; completed: boolean; onClick: () => void }) { return <button type="button" onClick={onClick} className="group flex w-full items-center gap-2.5 text-left transition-all"><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[11px] font-bold transition-all ${completed ? "border-purple-400 bg-gradient-to-br from-[#7C3AED] to-[#D946EF] text-white shadow-[0_0_14px_rgba(217,70,239,0.35)]" : "border-white/[0.20] bg-white/[0.025] text-transparent group-hover:border-purple-400/50"}`}>✓</span><span className={`text-[11px] leading-4 transition-colors ${completed ? "text-purple-300/80 line-through" : "text-white/40 group-hover:text-white/65"}`}>{label}</span></button>; }

function ProgressStep({ number, label, active, completed, onClick }: { number: string; label: string; active: boolean; completed: boolean; onClick: () => void }) { return <button type="button" onClick={onClick} className="relative flex w-full items-center gap-4 text-left"><div className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all ${completed || active ? "border-purple-400 bg-gradient-to-br from-[#7C3AED] to-[#D946EF] text-white shadow-[0_0_20px_rgba(217,70,239,0.25)]" : "border-white/[0.18] bg-white/[0.02] text-white/45"}`}>{completed ? "✓" : number}</div><div><p className={`text-sm font-medium ${active || completed ? "text-white" : "text-white/55"}`}>{label}</p><p className={`mt-0.5 text-xs ${completed ? "text-purple-300" : active ? "text-purple-400" : "text-white/30"}`}>{completed ? "Completado" : active ? "En progreso" : "Pendiente"}</p></div></button>; }

function MobileStepButton({
  number,
  label,
  active,
  completed,
  onClick,
}: {
  number: string;
  label: string;
  active: boolean;
  completed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-w-0 flex-col items-center gap-1.5"
      aria-label={`Abrir paso ${number}: ${label}`}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-semibold transition-all ${
          completed || active
            ? "border-purple-400 bg-gradient-to-br from-[#7C3AED] to-[#D946EF] text-white shadow-[0_0_18px_rgba(217,70,239,0.22)]"
            : "border-white/[0.18] bg-white/[0.02] text-white/40"
        }`}
      >
        {completed ? "✓" : number}
      </span>
      <span
        className={`max-w-full truncate text-[8px] font-semibold uppercase tracking-[0.05em] ${
          active || completed ? "text-white/70" : "text-white/25"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function MobileTaskRow({
  label,
  completed,
  onClick,
}: {
  label: string;
  completed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        flex
        w-full
        items-center
        gap-2.5
        rounded-lg
        bg-white/[0.02]
        px-2.5
        py-2.5
        text-left
        transition-all
        active:scale-[0.99]
        hover:bg-white/[0.04]
      "
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold transition-all ${
          completed
            ? "border-purple-400 bg-gradient-to-br from-[#7C3AED] to-[#D946EF] text-white shadow-[0_0_12px_rgba(217,70,239,0.25)]"
            : "border-white/[0.20] bg-white/[0.025] text-transparent group-hover:border-purple-400/50"
        }`}
      >
        ✓
      </span>

      <span
        className={`min-w-0 text-[11px] leading-4 transition-colors ${
          completed
            ? "text-purple-300/80 line-through"
            : "text-white/45 group-hover:text-white/70"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function ProgressStepMobile({ number, label, active, completed, onClick }: { number: string; label: string; active: boolean; completed: boolean; onClick: () => void }) { return <button type="button" onClick={onClick} className="text-center"><div className={`text-[10px] font-semibold ${completed ? "text-purple-300" : active ? "text-white" : "text-white/25"}`}>{completed ? "✓" : number}</div><div className={`mt-1 truncate text-[9px] uppercase tracking-[0.06em] ${completed ? "text-purple-300/70" : active ? "text-white/65" : "text-white/20"}`}>{label}</div></button>; }

function ProgressConnector({
  step1Completed,
  step2Completed,
  step3Completed,
  step4Completed,
}: {
  step1Completed: boolean;
  step2Completed: boolean;
  step3Completed: boolean;
  step4Completed: boolean;
}) {
  const segmentClass =
    "absolute left-[-1px] w-px border-l border-dashed transition-all duration-500";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[15px] top-4 bottom-4 z-0 w-px border-l border-dashed border-white/[0.18]"
    >
      <div
        className={`${segmentClass} top-0 ${step1Completed ? "border-purple-400/80" : "border-white/[0.18]"}`}
        style={{ height: "25%" }}
      />
      <div
        className={`${segmentClass} top-1/4 ${step2Completed ? "border-purple-400/80" : "border-white/[0.18]"}`}
        style={{ height: "25%" }}
      />
      <div
        className={`${segmentClass} top-1/2 ${step3Completed ? "border-purple-400/80" : "border-white/[0.18]"}`}
        style={{ height: "25%" }}
      />
      <div
        className={`${segmentClass} top-3/4 ${step4Completed ? "border-purple-400/80" : "border-white/[0.18]"}`}
        style={{ height: "25%" }}
      />
    </div>
  );
}

function PlatformInstruction({ title, description, href }: { title: string; description: string; href?: string }) { return <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-4 sm:p-5"><div className="flex items-start justify-between gap-4"><div className="min-w-0"><h5 className="text-sm font-semibold text-white sm:text-base">{title}</h5><p className="mt-2 text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">{description}</p></div>{href && <a href={href} target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-semibold text-purple-300 hover:text-white">ABRIR ↗</a>}</div></div>; }

function Background() { return <><div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[#05060b]" /><div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-35" style={{ backgroundImage: "url('/backgrounds/hex-grid.svg')", backgroundRepeat: "repeat", backgroundSize: "100px" }} /><div aria-hidden="true" className="pointer-events-none fixed left-[-420px] top-[20px] z-0 h-[700px] w-[700px] rounded-full bg-blue-600/30 blur-[180px] sm:left-[-580px] sm:top-[-20px] sm:h-[800px] sm:w-[800px] lg:left-[-800px] lg:top-[-80px] lg:h-[900px] lg:w-[900px] lg:bg-blue-600/25 lg:blur-[210px]" /><div aria-hidden="true" className="pointer-events-none fixed right-[-420px] top-[80px] z-0 h-[700px] w-[700px] rounded-full bg-purple-600/35 blur-[180px] sm:right-[-580px] sm:top-[20px] sm:h-[800px] sm:w-[800px] lg:right-[-850px] lg:top-[-60px] lg:h-[900px] lg:w-[900px] lg:bg-purple-600/28 lg:blur-[210px]" /><div aria-hidden="true" className="pointer-events-none fixed left-1/2 top-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.04] blur-[140px]" /></>; }