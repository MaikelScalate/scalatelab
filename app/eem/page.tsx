
"use client";

import { useState, type FormEvent } from "react";
type ProductInput = {
  id: number;
  name: string;
  cpu: string;
  inboundTransport: string;
  pickPack: string;
  outboundTransport: string;
  netPrice: string;
  units30: string;
  units90: string;
  units6m: string;
  units12m: string;
};

type MarketingPeriodInput = {
  period: string;
  revenue: string;
  adSpend: string;
  newCustomersAds: string;
  attributedRevenue: string;
  newCustomerAttributedRevenue: string;
  marketingSpend: string;
  acquisitionCosts: string;
  newCustomersAll: string;
  firstOrderGP: string;
};

type ConversionPeriodInput = {
  period: string;
  sessions: string;
  orders: string;
  addToCartSessions: string;
  reachedCheckoutSessions: string;
  completedCheckoutSessions: string;
};

type RetentionPeriodInput = {
  period: string;
  returningCustomers: string;
  totalPurchasingCustomers: string;
  cohortInitialCustomers: string;
  cohortRepeatCustomers: string;
};
type OpexPeriodInput = {
  period: string;
  rent: string;
  payroll: string;
  software: string;
  professionalServices: string;
  marketingAdvertising: string;
  administrative: string;
  other: string;
};
export default function EEMPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [brandName, setBrandName] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
const [platform, setPlatform] = useState("");
const [country, setCountry] = useState("España");
const [currency, setCurrency] = useState("EUR (€)");
const [analysisPeriod, setAnalysisPeriod] = useState("30D / 90D / 6M / 12M");
const [products, setProducts] = useState<ProductInput[]>([
  {
    id: 1,
    name: "",
    cpu: "",
    inboundTransport: "",
    pickPack: "",
    outboundTransport: "",
    netPrice: "",
    units30: "",
    units90: "",
    units6m: "",
    units12m: "",
  },
]);

const [nextProductId, setNextProductId] = useState(2);

const [marketingData, setMarketingData] = useState<MarketingPeriodInput[]>([
  {
    period: "30D",
    revenue: "",
    adSpend: "",
    newCustomersAds: "",
    attributedRevenue: "",
    newCustomerAttributedRevenue: "",
    marketingSpend: "",
    acquisitionCosts: "",
    newCustomersAll: "",
    firstOrderGP: "",
  },
  {
    period: "90D",
    revenue: "",
    adSpend: "",
    newCustomersAds: "",
    attributedRevenue: "",
    newCustomerAttributedRevenue: "",
    marketingSpend: "",
    acquisitionCosts: "",
    newCustomersAll: "",
    firstOrderGP: "",
  },
  {
    period: "6M",
    revenue: "",
    adSpend: "",
    newCustomersAds: "",
    attributedRevenue: "",
    newCustomerAttributedRevenue: "",
    marketingSpend: "",
    acquisitionCosts: "",
    newCustomersAll: "",
    firstOrderGP: "",
  },
  {
    period: "12M",
    revenue: "",
    adSpend: "",
    newCustomersAds: "",
    attributedRevenue: "",
    newCustomerAttributedRevenue: "",
    marketingSpend: "",
    acquisitionCosts: "",
    newCustomersAll: "",
    firstOrderGP: "",
  },
]);

const [conversionData, setConversionData] = useState<ConversionPeriodInput[]>([
  {
    period: "30D",
    sessions: "",
    orders: "",
    addToCartSessions: "",
    reachedCheckoutSessions: "",
    completedCheckoutSessions: "",
  },
  {
    period: "90D",
    sessions: "",
    orders: "",
    addToCartSessions: "",
    reachedCheckoutSessions: "",
    completedCheckoutSessions: "",
  },
  {
    period: "6M",
    sessions: "",
    orders: "",
    addToCartSessions: "",
    reachedCheckoutSessions: "",
    completedCheckoutSessions: "",
  },
  {
    period: "12M",
    sessions: "",
    orders: "",
    addToCartSessions: "",
    reachedCheckoutSessions: "",
    completedCheckoutSessions: "",
  },
]);

const [retentionData, setRetentionData] = useState<RetentionPeriodInput[]>([
  {
    period: "30D",
    returningCustomers: "",
    totalPurchasingCustomers: "",
    cohortInitialCustomers: "",
    cohortRepeatCustomers: "",
  },
  {
    period: "90D",
    returningCustomers: "",
    totalPurchasingCustomers: "",
    cohortInitialCustomers: "",
    cohortRepeatCustomers: "",
  },
  {
    period: "6M",
    returningCustomers: "",
    totalPurchasingCustomers: "",
    cohortInitialCustomers: "",
    cohortRepeatCustomers: "",
  },
  {
    period: "12M",
    returningCustomers: "",
    totalPurchasingCustomers: "",
    cohortInitialCustomers: "",
    cohortRepeatCustomers: "",
  },
]);

const updateProduct = (
  id: number,
  field: Exclude<keyof ProductInput, "id">,
  value: string
) => {
  setProducts((current) =>
    current.map((product) =>
      product.id === id
        ? { ...product, [field]: value }
        : product
    )
  );
};

const addProduct = () => {
  if (products.length >= 25) return;

  setProducts((current) => [
    ...current,
    {
      id: nextProductId,
      name: "",
      cpu: "",
      inboundTransport: "",
      pickPack: "",
      outboundTransport: "",
      netPrice: "",
      units30: "",
      units90: "",
      units6m: "",
      units12m: "",
    },
  ]);

  setNextProductId((current) => current + 1);
};

const removeProduct = (id: number) => {
  setProducts((current) =>
    current.length > 1
      ? current.filter((product) => product.id !== id)
      : current
  );
};

const updateMarketing = (
  period: string,
  field: Exclude<keyof MarketingPeriodInput, "period">,
  value: string
) => {
  setMarketingData((current) =>
    current.map((item) =>
      item.period === period
        ? { ...item, [field]: value }
        : item
    )
  );
};
const updateConversion = (
  period: string,
  field: Exclude<keyof ConversionPeriodInput, "period">,
  value: string
) => {
  setConversionData((current) =>
    current.map((item) =>
      item.period === period
        ? { ...item, [field]: value }
        : item
    )
  );
};
const updateRetention = (
  period: string,
  field: Exclude<keyof RetentionPeriodInput, "period">,
  value: string
) => {
  setRetentionData((current) =>
    current.map((item) =>
      item.period === period
        ? { ...item, [field]: value }
        : item
    )
  );
};
const [opexOpen, setOpexOpen] = useState(false);
const [openProductIds, setOpenProductIds] = useState<number[]>([]);
const [openMarketingPeriods, setOpenMarketingPeriods] = useState<string[]>([]);
const [openConversionPeriods, setOpenConversionPeriods] = useState<string[]>([]);
const [openRetentionPeriods, setOpenRetentionPeriods] = useState<string[]>([]);
const [openOpexPeriods, setOpenOpexPeriods] = useState<string[]>([]);
const [opexData, setOpexData] = useState<OpexPeriodInput[]>([
  {
    period: "30D",
    rent: "",
    payroll: "",
    software: "",
    professionalServices: "",
    marketingAdvertising: "",
    administrative: "",
    other: "",
  },
  {
    period: "90D",
    rent: "",
    payroll: "",
    software: "",
    professionalServices: "",
    marketingAdvertising: "",
    administrative: "",
    other: "",
  },
  {
    period: "6M",
    rent: "",
    payroll: "",
    software: "",
    professionalServices: "",
    marketingAdvertising: "",
    administrative: "",
    other: "",
  },
  {
    period: "12M",
    rent: "",
    payroll: "",
    software: "",
    professionalServices: "",
    marketingAdvertising: "",
    administrative: "",
    other: "",
  },
]);

const updateOpex = (
  period: string,
  field: Exclude<keyof OpexPeriodInput, "period">,
  value: string
) => {
  setOpexData((current) =>
    current.map((item) =>
      item.period === period
        ? { ...item, [field]: value }
        : item
    )
  );
};

const handleFinishAnalysis = async () => {
  if (isSending || analysisSent) return;

  setIsSending(true);
  setSubmitError("");

  const toNumber = (value: string) =>
    value.trim() === "" ? null : Number(value);

  const calculatedMetrics = {
    productEconomics: products.map((product) => {
      const cpu = toNumber(product.cpu);
      const inbound = toNumber(product.inboundTransport);
      const pickPack = toNumber(product.pickPack);
      const outbound = toNumber(product.outboundTransport);
      const price = toNumber(product.netPrice);

      const hasCosts =
        cpu !== null &&
        inbound !== null &&
        pickPack !== null &&
        outbound !== null;

      const cogs = hasCosts ? cpu + inbound : null;
      const cvu = hasCosts ? cogs! + pickPack + outbound : null;
      const contributionMargin =
        price !== null && cvu !== null ? price - cvu : null;

      return {
        product: product.name || `Producto ${product.id}`,
        cogsUnitario: cogs,
        cvu,
        contributionMargin,
        contributionMarginRatio:
          price !== null && price > 0 && contributionMargin !== null
            ? (contributionMargin / price) * 100
            : null,
        roasBreakEven:
          price !== null && price > 0 && contributionMargin !== null &&
          contributionMargin > 0
            ? price / contributionMargin
            : null,
      };
    }),

    conversion: conversionData.map((item) => {
      const marketing = marketingData.find(
        (period) => period.period === item.period
      );

      const sessions = toNumber(item.sessions);
      const orders = toNumber(item.orders);
      const reachedCheckout = toNumber(item.reachedCheckoutSessions);
      const addToCart = toNumber(item.addToCartSessions);
      const completedCheckout = toNumber(item.completedCheckoutSessions);
      const revenue = marketing ? toNumber(marketing.revenue) : null;

      return {
        period: item.period,
        conversionRate:
          sessions !== null && sessions > 0 && orders !== null
            ? (orders / sessions) * 100
            : null,
        aov:
          orders !== null && orders > 0 && revenue !== null
            ? revenue / orders
            : null,
        addToCartRate:
          sessions !== null && sessions > 0 && addToCart !== null
            ? (addToCart / sessions) * 100
            : null,
        reachedCheckoutRate:
          sessions !== null && sessions > 0 && reachedCheckout !== null
            ? (reachedCheckout / sessions) * 100
            : null,
        checkoutCompletionRate:
          reachedCheckout !== null &&
          reachedCheckout > 0 &&
          completedCheckout !== null
            ? (completedCheckout / reachedCheckout) * 100
            : null,
      };
    }),

    retention: retentionData.map((item) => {
  const returning = toNumber(item.returningCustomers);
  const total = toNumber(item.totalPurchasingCustomers);
  const cohortInitial = toNumber(item.cohortInitialCustomers);
  const cohortRepeat = toNumber(item.cohortRepeatCustomers);

  const conversionPeriod = conversionData.find(
    (period) => period.period === item.period
  );

  const orders = conversionPeriod
    ? toNumber(conversionPeriod.orders)
    : null;

  return {
    period: item.period,

    returningCustomerRate:
      total !== null && total > 0 && returning !== null
        ? (returning / total) * 100
        : null,

    repeatPurchaseRate:
      cohortInitial !== null &&
      cohortInitial > 0 &&
      cohortRepeat !== null
        ? (cohortRepeat / cohortInitial) * 100
        : null,

    purchaseFrequency:
      total !== null &&
      total > 0 &&
      orders !== null
        ? orders / total
        : null,
  };
}),
  };

  const payload = {
    brandName,
    generalData: {
      storeUrl,
      platform,
      country,
      currency,
      analysisPeriod,
    },
    products,
    marketingData,
    conversionData,
    retentionData,
    opexData,
    calculatedMetrics,
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch("/api/eem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.error || "No se ha podido enviar el análisis."
      );
    }

    setAnalysisSent(true);
  } catch (error) {
    setSubmitError(
      error instanceof Error
        ? error.message
        : "Ha ocurrido un error al enviar el análisis."
    );
  } finally {
    setIsSending(false);
  }
};

const [brandConfirmed, setBrandConfirmed] = useState(false);

const [isSending, setIsSending] = useState(false);
const [submitError, setSubmitError] = useState("");
const [analysisSent, setAnalysisSent] = useState(false);

const [activeSection, setActiveSection] = useState(0);
const [sectionValidationError, setSectionValidationError] = useState("");
const sections = [
  "Datos generales",
  "Economía del producto",
  "Adquisición y marketing",
  "Conversión y funnel",
  "Retención y recurrencia",
  "Costes operativos",
];

const validateSection = (section: number): string | null => {
  if (section === 0) {
    if (!storeUrl.trim()) return "Completa la URL de tu tienda.";
    if (!platform.trim()) return "Selecciona tu plataforma e-commerce.";
    if (!country.trim()) return "Completa el país de operación.";
    if (!currency.trim()) return "Selecciona la moneda.";
    if (!analysisPeriod.trim()) return "Selecciona el periodo del análisis.";
  }

  if (section === 1) {
    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      const missing = Object.entries(product).some(
        ([key, value]) =>
          key !== "id" &&
          (typeof value !== "string" || !value.trim())
      );

      if (missing) {
        return `Completa todos los campos del Producto ${i + 1}.`;
      }
    }
  }

  const requiredPeriods = ["30D", "90D"];

  if (section === 2) {
    for (const period of marketingData.filter((item) =>
      requiredPeriods.includes(item.period)
    )) {
      const missing = Object.entries(period).some(
        ([key, value]) =>
          key !== "period" &&
          (typeof value !== "string" || !value.trim())
      );

      if (missing) {
        return `Completa todos los campos del periodo ${period.period} en Adquisición y marketing.`;
      }
    }
  }

  if (section === 3) {
    for (const period of conversionData.filter((item) =>
      requiredPeriods.includes(item.period)
    )) {
      const missing = Object.entries(period).some(
        ([key, value]) =>
          key !== "period" &&
          (typeof value !== "string" || !value.trim())
      );

      if (missing) {
        return `Completa todos los campos del periodo ${period.period} en Conversión y funnel.`;
      }
    }
  }

  if (section === 4) {
    for (const period of retentionData.filter((item) =>
      requiredPeriods.includes(item.period)
    )) {
      const missing = Object.entries(period).some(
        ([key, value]) =>
          key !== "period" &&
          (typeof value !== "string" || !value.trim())
      );

      if (missing) {
        return `Completa todos los campos del periodo ${period.period} en Retención y recurrencia.`;
      }
    }
  }

  // El bloque OPEX (sección 5) es opcional.
  return null;
};

const currentSectionComplete = validateSection(activeSection) === null;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const correctPassword = "ANALISISCALATE";

  if (password === correctPassword) {
    setAccessGranted(true);
    setPassword("");
    setError("");
    return;
  }

  setError("La contraseña no es correcta. Inténtalo de nuevo.");
};
  

if (accessGranted) {

  if (analysisSent) {
    const toMetricNumber = (value: string) =>
      value.trim() === "" ? null : Number(value);

    const formatMetric = (
      value: number | null,
      suffix = "",
      decimals = 2
    ) =>
      value === null || !Number.isFinite(value)
        ? "Sin datos"
        : `${value.toFixed(decimals)}${suffix}`;

    const period30 = conversionData.find(
      (item) => item.period === "30D"
    );
    const marketing30 = marketingData.find(
      (item) => item.period === "30D"
    );
    const retention30 = retentionData.find(
      (item) => item.period === "30D"
    );
    const firstProduct = products[0];

    const sessions = period30
      ? toMetricNumber(period30.sessions)
      : null;
    const orders = period30
      ? toMetricNumber(period30.orders)
      : null;
    const revenue = marketing30
      ? toMetricNumber(marketing30.revenue)
      : null;

    const conversionRate =
      sessions !== null && sessions > 0 && orders !== null
        ? (orders / sessions) * 100
        : null;

    const aov =
      orders !== null && orders > 0 && revenue !== null
        ? revenue / orders
        : null;

    const productPrice = firstProduct
      ? toMetricNumber(firstProduct.netPrice)
      : null;
    const cpu = firstProduct
      ? toMetricNumber(firstProduct.cpu)
      : null;
    const inbound = firstProduct
      ? toMetricNumber(firstProduct.inboundTransport)
      : null;
    const pickPack = firstProduct
      ? toMetricNumber(firstProduct.pickPack)
      : null;
    const outbound = firstProduct
      ? toMetricNumber(firstProduct.outboundTransport)
      : null;

    const contributionMargin =
      productPrice !== null &&
      cpu !== null &&
      inbound !== null &&
      pickPack !== null &&
      outbound !== null
        ? productPrice - cpu - inbound - pickPack - outbound
        : null;

    const returning = retention30
      ? toMetricNumber(retention30.returningCustomers)
      : null;
    const totalCustomers = retention30
      ? toMetricNumber(retention30.totalPurchasingCustomers)
      : null;

    const returningRate =
      returning !== null &&
      totalCustomers !== null &&
      totalCustomers > 0
        ? (returning / totalCustomers) * 100
        : null;

    return (
  <main className="relative min-h-screen bg-[#05060b] text-white">
    <Background />

    <div className="relative z-10 mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-3xl text-purple-300">
              ✓
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
              SCALATE · Economic Metrics
            </p>

            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Análisis completado
            </h1>

            <p className="mt-4 text-sm text-white/50">
              Hemos recibido correctamente la información económica de{" "}
              <span className="font-semibold text-white">
                {brandName}
              </span>
              .
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-[#090a11]/90 p-6 sm:p-9">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider text-white/35">
                Resumen económico
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Indicadores principales
              </h2>
              <p className="mt-2 text-xs text-white/40">
                Datos del periodo de 30 días, salvo el margen del primer producto.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Tasa de conversión",
                  value: formatMetric(conversionRate, "%"),
                },
                {
                  label: "Valor medio del pedido (AOV)",
                  value: formatMetric(aov, " €"),
                },
                {
                  label: "Margen de contribución unitario",
                  value: formatMetric(contributionMargin, " €"),
                },
                {
                  label: "Returning Customer Rate",
                  value: formatMetric(returningRate, "%"),
                },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5"
                >
                  <p className="text-xs text-white/45">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-purple-400/15 bg-purple-500/[0.06] p-5">
              <p className="text-sm font-medium text-purple-200">
                Siguiente paso
              </p>
              <p className="mt-2 text-sm leading-6 text-white/55">
                El equipo de SCALATE ya ha recibido las respuestas completas
                del cuestionario y los indicadores calculados para realizar
                el análisis económico de la marca.
              </p>
            </div>

            <p className="mt-8 text-center text-xs text-white/30">
              SCALATE · E-commerce Economics Metrics
            </p>
          </div>
        </div>
      </main>
    );
  }

  const sectionDescriptions = [
  "Identificaremos el negocio, el modelo de venta y el periodo que vamos a analizar.",
  "Recopilaremos precios, descuentos, COGS y costes variables para conocer la rentabilidad de los productos.",
  "Analizaremos la inversión en marketing, los canales de adquisición y el coste de captar clientes.",
  "Recopilaremos sesiones, pedidos, conversión y valor medio del pedido para entender el rendimiento del funnel.",
  "Analizaremos la recompra, los clientes recurrentes y el valor económico que generan las cohortes.",
  "Identificaremos los gastos operativos necesarios para entender la rentabilidad real del negocio."
];

  return (
    <main className="relative min-h-screen bg-[#05060b] text-white">
      <Background />

      {!brandConfirmed ? (
        /* PANTALLA DE IDENTIFICACIÓN */
        <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-12">
          <div className="w-full max-w-xl rounded-[28px] border border-white/[0.10] bg-[#08090f]/95 p-8 shadow-[0_0_100px_rgba(124,58,237,0.12)] backdrop-blur-xl sm:p-12">
            <div className="flex justify-center">
              <img
                src="/icon.png"
                alt="Scalate"
                className="h-16 w-16 object-contain"
              />
            </div>

            <div className="mt-8 text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                SCALATE · EEM
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Identifica tu marca
              </h1>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/45">
                Antes de comenzar el análisis económico, necesitamos
                identificar la marca sobre la que recopilaremos la información.
              </p>
            </div>

            <div className="mt-9">
              <label className="mb-3 block text-sm font-medium text-white/70">
                Nombre de la marca
              </label>

              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && brandName.trim()) {
                    setBrandConfirmed(true);
                    setActiveSection(0);
                  }
                }}
                placeholder="Ej. Scalate"
                className="h-14 w-full rounded-2xl border border-white/[0.12] bg-white/[0.04] px-5 text-white outline-none transition-all placeholder:text-white/25 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/10"
              />

              <button
                type="button"
                disabled={!brandName.trim()}
                onClick={() => {
                  setBrandName(brandName.trim());
                  setActiveSection(0);
                  setBrandConfirmed(true);
                }}
                className="mt-5 flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-sm font-semibold text-white shadow-[0_0_25px_rgba(217,70,239,0.20)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(217,70,239,0.35)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                COMENZAR ANÁLISIS →
              </button>
            </div>

            <p className="mt-8 text-center text-xs text-white/25">
              SCALATE · E-COMMERCE GROWTH COMPANY
            </p>
          </div>
        </div>
      ) : (
        /* INTERFAZ PRINCIPAL DEL CUESTIONARIO */
        <div className="relative z-10 min-h-screen">

          {/* BARRA SUPERIOR */}
          <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#07080e]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8">
              <div className="flex items-center gap-3">
                <img
                  src="/icon.png"
                  alt="Scalate"
                  className="h-10 w-10 object-contain"
                />

                <div>
                  <div className="text-sm font-semibold tracking-wide">
                    SCALATE <span className="text-purple-300">· EEM</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                    Economic Metrics
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-white/35">
                  Marca en análisis
                </div>
                <div className="mt-1 text-sm font-medium text-white/85">
                  {brandName}
                </div>
              </div>
            </div>
          </header>

          {/* CONTENIDO */}
          <div className="mx-auto w-full min-w-0 max-w-[1600px] px-5 py-8 sm:px-8 lg:py-10">

            {/* INTRODUCCIÓN */}
            <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
                  E-commerce Economics Metrics
                </div>

                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Análisis económico
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
                  Completa la información de tu negocio para construir
                  una visión precisa de su rendimiento económico,
                  rentabilidad y sostenibilidad.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-5 5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/40">
                    Cuestionario EEM
                  </div>
                  <div className="text-sm font-medium">
                    {sections.length} bloques de análisis
                  </div>
                </div>
              </div>
            </div>

            {/* PROGRESO */}
            <div className="mb-8 rounded-2xl border border-white/[0.08] bg-[#090a11]/90 p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-sm font-medium text-white/80">
                    Progreso del cuestionario
                  </span>
                  <span className="ml-2 text-xs text-white/35">
                    Sección {activeSection + 1} de {sections.length}
                  </span>
                </div>

                <span className="text-sm font-semibold text-purple-300">
                  {Math.round(((activeSection + 1) / sections.length) * 100)}%
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] transition-all duration-500"
                  style={{
                    width: `${((activeSection + 1) / sections.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* CUERPO: MENÚ + CONTENIDO */}
            <div className="grid grid-cols-1 w-full min-w-0 items-start gap-6 lg:grid-cols-[290px_minmax(0,1fr)]">

              {/* NAVEGACIÓN LATERAL */}
              <aside className="rounded-2xl border border-white/[0.08] bg-[#090a11]/95 p-4 lg:sticky lg:top-[100px]">
                <div className="mb-4 px-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                    Navegación
                  </div>
                  <div className="mt-1 text-xs text-white/25">
                    Bloques de información
                  </div>
                </div>

                <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                  {sections.map((section, index) => (
                    <button
                      key={section}
                      type="button"
                      onClick={() => {
  if (index <= activeSection) {
    setSectionValidationError("");
    setActiveSection(index);
    return;
  }

  for (
    let sectionToCheck = activeSection;
    sectionToCheck < index;
    sectionToCheck++
  ) {
    const validationError = validateSection(sectionToCheck);

    if (validationError) {
      setSectionValidationError(validationError);
      return;
    }
  }

  setSectionValidationError("");
  setActiveSection(index);
}}
                      className={`flex min-w-[210px] items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all lg:min-w-0 ${
                        activeSection === index
                          ? "border-purple-400/25 bg-purple-500/[0.12] text-white"
                          : "border-transparent text-white/45 hover:border-white/[0.06] hover:bg-white/[0.035] hover:text-white/80"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                          activeSection === index
                            ? "bg-purple-500/20 text-purple-200"
                            : "bg-white/[0.05] text-white/35"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-medium">
                        {section}
                      </span>

                      {activeSection === index && (
                        <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                      )}
                    </button>
                  ))}
                </nav>

                <div className="mt-5 border-t border-white/[0.07] px-3 pt-4">
                  <div className="text-xs text-white/30">
                    Información de la auditoría
                  </div>
                  <div className="mt-2 text-sm font-medium text-white/70">
                    {brandName}
                  </div>
                  <div className="mt-1 text-xs text-white/30">
                    E-commerce Economics Metrics
                  </div>
                </div>
              </aside>

              {/* PANEL PRINCIPAL */}
              <section className="w-full min-w-0 min-h-[560px] rounded-2xl border border-white/[0.08] bg-[#090a11]/95 p-4 sm:p-9">

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-purple-400/20 bg-purple-500/[0.09] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-purple-300">
                    Bloque {String(activeSection + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs text-white/30">
                    {activeSection + 1} / {sections.length}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {sections[activeSection]}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">
                  {sectionDescriptions[activeSection]}
                </p>

                <div className="my-8 h-px bg-white/[0.07]" />

                {/* ZONA DE PREGUNTAS */}
                
{/* ZONA DE PREGUNTAS */}
{activeSection === 0 ? (
  <div className="space-y-6">

    <div>
      <h3 className="text-lg font-semibold">
        Identificación del negocio
      </h3>
      <p className="mt-1 text-sm text-white/40">
        Necesitamos estos datos para contextualizar el análisis económico.
      </p>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-white/70">
        URL de la tienda online
      </label>
      <input
        type="url"
        value={storeUrl}
        onChange={(e) => setStoreUrl(e.target.value)}
        placeholder="https://www.tumarca.com"
        className="h-12 w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-purple-400/50"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-white/70">
        Plataforma e-commerce
      </label>
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        className="h-12 w-full rounded-xl border border-white/[0.12] bg-[#10111a] px-4 text-sm text-white outline-none focus:border-purple-400/50"
      >
        <option value="">Selecciona una plataforma</option>
        <option value="Shopify">Shopify</option>
        <option value="WooCommerce">WooCommerce</option>
        <option value="Magento">Magento</option>
        <option value="Prestashop">PrestaShop</option>
        <option value="Otra">Otra</option>
      </select>
    </div>

    <div className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-white/70">
          País principal de operación
        </label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="España"
          className="h-12 w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 text-sm text-white outline-none focus:border-purple-400/50"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white/70">
          Moneda de referencia
        </label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="h-12 w-full rounded-xl border border-white/[0.12] bg-[#10111a] px-4 text-sm text-white outline-none focus:border-purple-400/50"
        >
          <option value="EUR (€)">EUR (€)</option>
          <option value="USD ($)">USD ($)</option>
          <option value="GBP (£)">GBP (£)</option>
          <option value="MXN ($)">MXN ($)</option>
          <option value="COP ($)">COP ($)</option>
        </select>
      </div>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-white/70">
        Horizontes temporales del análisis
      </label>
      <select
        value={analysisPeriod}
        onChange={(e) => setAnalysisPeriod(e.target.value)}
        className="h-12 w-full rounded-xl border border-white/[0.12] bg-[#10111a] px-4 text-sm text-white outline-none focus:border-purple-400/50"
      >
        <option value="30D / 90D / 6M / 12M">
          30 días · 90 días · 6 meses · 12 meses
        </option>
      </select>
      <p className="mt-2 text-xs text-white/30">
        Utilizaremos estos horizontes temporales para analizar la evolución económica.
      </p>
    </div>

  </div>

) : activeSection === 1 ? (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold">
        Economía de cada producto
      </h3>
      <p className="mt-1 text-sm text-white/40">
        Introduce los costes unitarios, el precio neto y las unidades vendidas de cada producto.
      </p>
    </div>

    {products.map((product, index) => {
      const cpu = Number(product.cpu) || 0;
      const inbound = Number(product.inboundTransport) || 0;
      const pickPack = Number(product.pickPack) || 0;
      const outbound = Number(product.outboundTransport) || 0;
      const price = Number(product.netPrice) || 0;

      const cogs = cpu + inbound;
      const cvu = cogs + pickPack + outbound;
      const margin = price - cvu;
      const marginRatio = price > 0 ? (margin / price) * 100 : 0;
      const roasBE = margin > 0 ? price / margin : 0;

      const fields = [
        { key: "cpu", label: "CPU (Coste de Producción Unitario)" },
        { key: "inboundTransport", label: "Transporte de entrada unitario" },
        { key: "pickPack", label: "Pick & Pack unitario" },
        { key: "outboundTransport", label: "Transporte de salida unitario" },
        { key: "netPrice", label: "Precio de venta neto" },
      ] as const;

      return (
        <div
          key={product.id}
          className="rounded-2xl border border-white/[0.10] bg-white/[0.025] p-5 sm:p-6"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
  <h4 className="font-semibold">
    Producto {index + 1}
  </h4>

  <div className="flex items-center gap-3">
    {products.length > 1 && (
      <button
        type="button"
        onClick={() => removeProduct(product.id)}
        className="text-xs text-red-400 hover:text-red-300"
      >
        Eliminar
      </button>
    )}

    <button
      type="button"
      onClick={() =>
        setOpenProductIds((current) =>
          current.includes(product.id)
            ? current.filter((id) => id !== product.id)
            : [...current, product.id]
        )
      }
      className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
    >
      {openProductIds.includes(product.id) ? "Cerrar" : "Realizar"}
    </button>
  </div>
</div>

          {openProductIds.includes(product.id) && (
            <div className="space-y-5">
              <label className="mb-2 block text-sm text-white/70">
                Nombre del producto / SKU
              </label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => updateProduct(product.id, "name", e.target.value)}
            placeholder="Ej. Legging negro"
            className="mb-5 h-11 w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 text-sm text-white outline-none focus:border-purple-400/50"
          />


  <div className="grid gap-4 sm:grid-cols-2">
    {fields.map((field) => (
              <div key={field.key}>
                <label className="mb-2 block text-sm text-white/60">
                  {field.label} ({currency})
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={product[field.key]}
                  onChange={(e) =>
                    updateProduct(product.id, field.key, e.target.value)
                  }
                  placeholder="0.00"
                  className="h-11 w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 text-sm text-white outline-none focus:border-purple-400/50"
                />
              </div>
            ))}
          </div>

          <div className="my-6 border-t border-white/[0.08]" />

          <h5 className="mb-4 text-sm font-semibold text-white/80">
            Unidades vendidas
          </h5>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { key: "units30", label: "Últimos 30 días" },
              { key: "units90", label: "Últimos 90 días" },
              { key: "units6m", label: "Últimos 6 meses" },
              { key: "units12m", label: "Últimos 12 meses" },
            ].map((field) => (
              <div key={field.key}>
                <label className="mb-2 block text-xs text-white/50">
                  {field.label}
                </label>
                <input
                  type="number"
                  min="0"
                  value={product[field.key as keyof ProductInput] as string}
                  onChange={(e) =>
                    updateProduct(
                      product.id,
                      field.key as Exclude<keyof ProductInput, "id">,
                      e.target.value
                    )
                  }
                  placeholder="0"
                  className="h-11 w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 text-sm text-white outline-none focus:border-purple-400/50"
                />
              </div>
            ))}
          </div>

          <div className="my-6 border-t border-white/[0.08]" />

          <h5 className="mb-4 text-sm font-semibold text-white/80">
            Resultados económicos calculados
          </h5>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "COGS unitario", value: cogs.toFixed(2) + " " + currency },
              { label: "CVU", value: cvu.toFixed(2) + " " + currency },
              { label: "Margen de contribución", value: margin.toFixed(2) + " " + currency },
              { label: "Ratio de margen", value: marginRatio.toFixed(2) + "%" },
              { label: "ROAS BE MC", value: margin > 0 ? roasBE.toFixed(2) + "x" : "—" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/[0.07] bg-black/20 p-4"
              >
                <p className="text-xs text-white/40">{metric.label}</p>
                <p className="mt-2 text-lg font-semibold text-purple-200">
                  {metric.value}
                </p>
              </div>
                                  ))}
                </div>
      </div>
          )}
        </div>
      );
    })}

    <button
      type="button"
      onClick={addProduct}
      disabled={products.length >= 25}
      className="w-full rounded-xl border border-dashed border-purple-400/30 bg-purple-500/[0.05] px-5 py-4 text-sm font-medium text-purple-200 transition hover:bg-purple-500/[0.10] disabled:opacity-30"
    >
      + Añadir otro producto
    </button>

    <p className="text-xs leading-5 text-white/35">
      Puedes introducir hasta 25 productos. Los resultados se calculan automáticamente
      a partir de los valores introducidos. Por ahora, la información todavía no se guarda.
    </p>
  </div>

) : activeSection === 2 ? (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold">
        Adquisición y marketing
      </h3>
      <p className="mt-1 text-sm text-white/40">
        Introduce los datos económicos de adquisición y marketing para cada periodo.
      </p>
    </div>

    {marketingData.map((periodData) => {
      const fields = [
        { key: "revenue", label: "Ingresos netos totales", unit: currency },
        { key: "adSpend", label: "Inversión en publicidad (Ad Spend)", unit: currency },
        { key: "newCustomersAds", label: "Nuevos clientes procedentes de anuncios", unit: "clientes" },
        { key: "attributedRevenue", label: "Ingresos atribuidos a anuncios", unit: currency },
        { key: "newCustomerAttributedRevenue", label: "Ingresos atribuidos a nuevos clientes", unit: currency },
        { key: "marketingSpend", label: "Inversión total en marketing (todos los canales)", unit: currency },
        { key: "acquisitionCosts", label: "Costes totales de adquisición", unit: currency },
        { key: "newCustomersAll", label: "Nuevos clientes de todos los canales", unit: "clientes" },
        { key: "firstOrderGP", label: "Gross Profit de primeras compras de nuevos clientes", unit: currency },
      ] as const;

      return (
        <div
          key={periodData.period}
          className="rounded-2xl border border-white/[0.10] bg-white/[0.025] p-5 sm:p-6"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
  <h4 className="text-lg font-semibold text-purple-200">
    Periodo: {periodData.period}
  </h4>

  <button
    type="button"
    onClick={() =>
      setOpenMarketingPeriods((current) =>
        current.includes(periodData.period)
          ? current.filter((period) => period !== periodData.period)
          : [...current, periodData.period]
      )
    }
    className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
  >
    {openMarketingPeriods.includes(periodData.period) ? "Cerrar" : "Realizar"}
  </button>
</div>

                    {openMarketingPeriods.includes(periodData.period) && (
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
              <div key={field.key}>
                <label className="mb-2 block text-sm text-white/60">
                  {field.label}
                  <span className="ml-1 text-white/30">({field.unit})</span>
                </label>

                <input
                  type="text"
                  min="0"
                  step="0.01"
                  value={periodData[field.key]}
                  onChange={(e) =>
                    updateMarketing(
                      periodData.period,
                      field.key,
                      e.target.value
                    )
                  }
                  placeholder="0"
                  className="h-11 w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 text-sm text-white outline-none focus:border-purple-400/50"
                />
              </div>
                          ))}
            </div>
          )}
        </div>
      );
    })}

    <p className="text-xs leading-5 text-white/35">
      Introduce los datos de los últimos 30 días, 90 días, 6 meses y 12 meses.
      Por ahora, la información se mantiene en esta pantalla y todavía no se guarda.
    </p>
  </div>

) : activeSection === 3 ? (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold">
        Conversión y funnel
      </h3>
      <p className="mt-1 text-sm text-white/40">
        Introduce los datos de tráfico, pedidos y comportamiento de los usuarios
        para analizar el rendimiento del funnel de conversión.
      </p>
    </div>

    {conversionData.map((periodData) => {
      const marketingPeriod = marketingData.find(
        (item) => item.period === periodData.period
      );

      const sessions = Number(periodData.sessions) || 0;
      const orders = Number(periodData.orders) || 0;
      const addToCart = Number(periodData.addToCartSessions) || 0;
      const reachedCheckout =
        Number(periodData.reachedCheckoutSessions) || 0;
      const completedCheckout =
        Number(periodData.completedCheckoutSessions) || 0;
      const revenue = Number(marketingPeriod?.revenue) || 0;

      const conversionRate =
        sessions > 0 ? (orders / sessions) * 100 : 0;

      const aov = orders > 0 ? revenue / orders : 0;

      const addToCartRate =
        sessions > 0 ? (addToCart / sessions) * 100 : 0;

      const reachedCheckoutRate =
        sessions > 0 ? (reachedCheckout / sessions) * 100 : 0;

      const checkoutCompletionRate =
        reachedCheckout > 0
          ? (completedCheckout / reachedCheckout) * 100
          : 0;

      const fields = [
        {
          key: "sessions",
          label: "Sesiones de la tienda",
          unit: "sesiones",
        },
        {
          key: "orders",
          label: "Pedidos realizados",
          unit: "pedidos",
        },
        {
          key: "addToCartSessions",
          label: "Sesiones que añadieron al carrito",
          unit: "sesiones",
        },
        {
          key: "reachedCheckoutSessions",
          label: "Sesiones que llegaron al checkout",
          unit: "sesiones",
        },
        {
          key: "completedCheckoutSessions",
          label: "Sesiones que completaron el checkout",
          unit: "sesiones",
        },
      ] as const;

      return (
        <div
          key={periodData.period}
          className="rounded-2xl border border-white/[0.10] bg-white/[0.025] p-5 sm:p-6"
        >
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h4 className="text-lg font-semibold text-purple-200">
              Periodo: {periodData.period}
            </h4>

            <button
              type="button"
              onClick={() =>
                setOpenConversionPeriods((current) =>
                  current.includes(periodData.period)
                    ? current.filter((period) => period !== periodData.period)
                    : [...current, periodData.period]
                )
              }
              className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              {openConversionPeriods.includes(periodData.period) ? "Cerrar" : "Realizar"}
            </button>
          </div>

                    {openConversionPeriods.includes(periodData.period) && (
  <>
    <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
              <div key={field.key}>
                <label className="mb-2 block text-sm text-white/60">
                  {field.label}
                  <span className="ml-1 text-white/30">
                    ({field.unit})
                  </span>
                </label>

                <input
                  type="number"
                  min="0"
                  step="1"
                  value={periodData[field.key]}
                  onChange={(e) =>
                    updateConversion(
                      periodData.period,
                      field.key,
                      e.target.value
                    )
                  }
                  placeholder="0"
                  className="h-11 w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 text-sm text-white outline-none focus:border-purple-400/50"
                />
              </div>
            ))}
          </div>

          <div className="my-6 border-t border-white/[0.08]" />

          <h5 className="mb-4 text-sm font-semibold text-white/80">
            Métricas de conversión calculadas
          </h5>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Conversion Rate",
                value: conversionRate.toFixed(2) + "%",
              },
              {
                label: "AOV",
                value: aov.toFixed(2) + " " + currency,
              },
              {
                label: "Add to Cart Rate",
                value: addToCartRate.toFixed(2) + "%",
              },
              {
                label: "Reached Checkout Rate",
                value: reachedCheckoutRate.toFixed(2) + "%",
              },
              {
                label: "Checkout Completion Rate",
                value: checkoutCompletionRate.toFixed(2) + "%",
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/[0.07] bg-black/20 p-4"
              >
                <p className="text-xs text-white/40">
                  {metric.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-purple-200">
                  {metric.value}
                </p>
              </div>
                        ))}
          </div>
          </>

          )}
        </div>
      );
    })}

    <p className="text-xs leading-5 text-white/35">
      El AOV utiliza los ingresos netos introducidos en el bloque de
      Adquisición y Marketing. Las métricas se calculan automáticamente.
      Por ahora, la información todavía no se guarda.
    </p>
  </div>


) : activeSection === 4 ? (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold">
        Retención y recurrencia
      </h3>
      <p className="mt-1 text-sm text-white/40">
        Recopilaremos los datos de clientes recurrentes y recompra por cohortes
para analizar el comportamiento de retención de la marca.
      </p>
    </div>

    {retentionData.map((periodData) => {
      const returningCustomers =
        Number(periodData.returningCustomers) || 0;

      const totalPurchasingCustomers =
        Number(periodData.totalPurchasingCustomers) || 0;
const conversionPeriod = conversionData.find(
  (item) => item.period === periodData.period
);

const totalOrders = Number(conversionPeriod?.orders) || 0;

const purchaseFrequency =
  totalPurchasingCustomers > 0
    ? totalOrders / totalPurchasingCustomers
    : 0;
      const cohortInitialCustomers =
        Number(periodData.cohortInitialCustomers) || 0;

      const cohortRepeatCustomers =
        Number(periodData.cohortRepeatCustomers) || 0;

      const returningCustomerRate =
        totalPurchasingCustomers > 0
          ? (returningCustomers / totalPurchasingCustomers) * 100
          : 0;

      const repeatPurchaseRate =
        cohortInitialCustomers > 0
          ? (cohortRepeatCustomers / cohortInitialCustomers) * 100
          : 0;

      const fields = [
        {
          key: "returningCustomers",
          label: "Returning Customers",
          unit: "clientes",
        },
        {
          key: "totalPurchasingCustomers",
          label: "Total unique purchasing customers",
          unit: "clientes",
        },
        {
          key: "cohortInitialCustomers",
          label: "Cohort Customers (initial)",
          unit: "clientes",
        },
        {
          key: "cohortRepeatCustomers",
          label: "Cohort Customers with repeat purchase",
          unit: "clientes",
        },
      ] as const;

      return (
        <div
          key={periodData.period}
          className="rounded-2xl border border-white/[0.10] bg-white/[0.025] p-5 sm:p-6"
        >
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h4 className="text-lg font-semibold text-purple-200">
              Periodo: {periodData.period}
            </h4>

            <button
              type="button"
              onClick={() =>
                setOpenRetentionPeriods((current) =>
                  current.includes(periodData.period)
                    ? current.filter((period) => period !== periodData.period)
                    : [...current, periodData.period]
                )
              }
              className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              {openRetentionPeriods.includes(periodData.period) ? "Cerrar" : "Realizar"}
            </button>
          </div>

                    {openRetentionPeriods.includes(periodData.period) && (
                        <>
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
              <div key={field.key}>
                <label className="mb-2 block text-sm text-white/60">
                  {field.label}
                  <span className="ml-1 text-white/30">
                    ({field.unit})
                  </span>
                </label>

                <input
                  type="text"
                  min="0"
                  step="1"
                  value={periodData[field.key]}
                  onChange={(e) =>
                    updateRetention(
                      periodData.period,
                      field.key,
                      e.target.value
                    )
                  }
                  placeholder="0"
                  className="h-11 w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 text-sm text-white outline-none focus:border-purple-400/50"
                />
              </div>
            ))}
          </div>

          <div className="my-6 border-t border-white/[0.08]" />

          <h5 className="mb-4 text-sm font-semibold text-white/80">
            Métricas de retención calculadas
          </h5>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/[0.07] bg-black/20 p-4">
              <p className="text-xs text-white/40">
                Returning Customer Rate
              </p>
              <p className="mt-2 text-lg font-semibold text-purple-200">
                {returningCustomerRate.toFixed(2)}%
              </p>
              <p className="mt-2 text-xs text-white/30">
                Returning Customers / Total unique purchasing customers
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-black/20 p-4">
              <p className="text-xs text-white/40">
                Repeat Purchase Rate
              </p>
              <p className="mt-2 text-lg font-semibold text-purple-200">
                {repeatPurchaseRate.toFixed(2)}%
              </p>
              <p className="mt-2 text-xs text-white/30">
                Cohort Customers with repeat purchase / Cohort Customers (initial)
              </p>
                        </div>
                        <div className="rounded-xl border border-white/[0.07] bg-black/20 p-4">
  <p className="text-xs text-white/40">
    Purchase Frequency
  </p>
  <p className="mt-2 text-lg font-semibold text-purple-200">
    {purchaseFrequency.toFixed(2)}x
  </p>
  <p className="mt-2 text-xs text-white/30">
    Total Orders / Total Unique Purchasing Customers
  </p>
</div>
                    </div>
                    
          </>
          )}
        </div>
      );
    })}

    <div className="rounded-xl border border-purple-400/10 bg-purple-500/[0.04] p-4">
      <p className="text-xs leading-6 text-white/45">
        <strong className="text-white/70">Importante:</strong> el Repeat
        Purchase Rate es una métrica basada en cohortes. Los clientes iniciales
        y los clientes que repiten deben pertenecer al mismo grupo de adquisición.
        Solo deben compararse cohortes que hayan completado la ventana de
        observación correspondiente. El Returning Customer Rate, en cambio,
        utiliza los clientes compradores del periodo analizado.
      </p>
    </div>

    <p className="text-xs leading-5 text-white/35">
      Introduce los datos de los últimos 30 días, 90 días, 6 meses y 12 meses.
      Por ahora, la información todavía no se guarda.
    </p>
  </div>



) : activeSection === 5 ? (
  <div className="space-y-6">
    <div>

    </div>

    <div className="rounded-2xl border border-white/[0.10] bg-white/[0.025] p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-2">
            <h4 className="text-base font-semibold text-purple-200">
              Información de costes operativos
            </h4>
            <span className="rounded-full border border-purple-400/20 bg-purple-500/[0.10] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-300">
              Opcional
            </span>
          </div>

          <p className="mt-2 text-sm leading-6 text-white/45">
            Puedes introducir los gastos operativos de tu marca para
            ampliar el análisis de rentabilidad. Este apartado no es
            obligatorio y puedes dejarlo sin completar.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpexOpen((current) => !current)}
          className="shrink-0 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
        >
          {opexOpen ? "Cerrar" : "Realizar"}
        </button>
      </div>
    </div>

    {opexOpen && (
      <div className="space-y-5">
        {opexData.map((periodData) => {
          const fields = [
            { key: "rent", label: "Alquileres" },
            { key: "payroll", label: "Salarios y personal" },
            { key: "software", label: "Software y herramientas" },
            { key: "professionalServices", label: "Asesorías y servicios profesionales" },
            { key: "marketingAdvertising", label: "Marketing y publicidad" },
            { key: "administrative", label: "Gastos administrativos" },
            { key: "other", label: "Otros gastos operativos" },
          ] as const;

          return (
            <div
              key={periodData.period}
              className="rounded-2xl border border-white/[0.10] bg-white/[0.025] p-5 sm:p-6"
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
  <h4 className="text-lg font-semibold text-purple-200">
    Periodo: {periodData.period}
  </h4>

  <button
    type="button"
    onClick={() =>
      setOpenOpexPeriods((current) =>
        current.includes(periodData.period)
          ? current.filter((period) => period !== periodData.period)
          : [...current, periodData.period]
      )
    }
    className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
  >
    {openOpexPeriods.includes(periodData.period) ? "Cerrar" : "Realizar"}
  </button>
</div>

                            {openOpexPeriods.includes(periodData.period) && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {fields.map((field) => (
                  <div key={field.key}>
                    <label className="mb-2 block text-sm text-white/60">
                      {field.label}
                      <span className="ml-1 text-white/30">
                        ({currency})
                      </span>
                    </label>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={periodData[field.key]}
                      onChange={(e) =>
                        updateOpex(
                          periodData.period,
                          field.key,
                          e.target.value
                        )
                      }
                      placeholder="0.00"
                      className="h-11 w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 text-sm text-white outline-none focus:border-purple-400/50"
                    />
                  </div>
                                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="rounded-xl border border-purple-400/10 bg-purple-500/[0.04] p-4">
          <p className="text-xs leading-6 text-white/45">
            <strong className="text-white/70">Importante:</strong>{" "}
            evita contabilizar dos veces un mismo coste. Si un gasto
            ya está incluido en COGS o CVU, no debe volver a
            contabilizarse como OPEX.
          </p>
        </div>
      </div>
    )}
  </div>

) : (
  <div className="rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.02] p-8 text-center">
    <p className="text-sm text-white/40">
      Estamos preparando los campos de recopilación de esta sección.
    </p>
  </div>
)}


    
                {/* BOTONES DE NAVEGACIÓN */}
                <div className="mt-9 flex items-center justify-between border-t border-white/[0.07] pt-6">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSection((current) => Math.max(0, current - 1))
                    }
                    disabled={activeSection === 0}
                    className="rounded-full border border-white/[0.12] px-5 py-3 text-sm font-medium text-white/65 transition-all hover:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-25"
                  >
                    ← Anterior
                  </button>

                  {activeSection < sections.length - 1 ? (
                    <button
                      type="button"
                      disabled={!currentSectionComplete}
                      onClick={() => {
  const validationError = validateSection(activeSection);

  if (validationError) {
    setSectionValidationError(validationError);
    return;
  }

  setSectionValidationError("");
  setActiveSection((current) =>
    Math.min(sections.length - 1, current + 1)
  );
}}
                      className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
  currentSectionComplete
    ? "bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white shadow-[0_0_25px_rgba(217,70,239,0.18)] hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(217,70,239,0.3)]"
    : "cursor-not-allowed bg-white/10 text-white/30"
}`}
                    >
                      Siguiente sección →
                    </button>
                  ) : (
                    
<div className="flex flex-col items-end gap-3">
  {submitError && (
    <p className="max-w-sm text-right text-sm text-red-400" role="alert">
      {submitError}
    </p>
  )}

  <button
    type="button"
    onClick={handleFinishAnalysis}
    disabled={isSending || analysisSent}
    className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(217,70,239,0.18)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {isSending
      ? "Enviando análisis..."
      : analysisSent
        ? "Análisis enviado ✓"
        : "Finalizar análisis →"}
  </button>
</div>

                  )}
                </div>
              </section>
            </div>

            {/* PIE */}
            <footer className="mt-8 border-t border-white/[0.06] py-6 text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/20">
                SCALATE · E-COMMERCE GROWTH COMPANY
              </p>
            </footer>
          </div>
        </div>
      )}
    </main>
  );
}


  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060b] text-white">
      <Background />

      {/* LOGO */}
<header className="absolute left-0 right-0 top-4 z-10 flex justify-center px-5">        <img
          src="/icon.png"
          alt="Scalate"
          className="h-11 w-11 object-contain sm:h-12 sm:w-12"
        />
      </header>

      {/* CONTENIDO */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 pt-10 pb-4">
        <div className="mx-auto w-full max-w-lg lg:scale-90 lg:origin-center">

          {/* ETIQUETA */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.10] bg-[#05060b]/80 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-purple-400/40" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#D946EF] shadow-[0_0_12px_rgba(217,70,239,0.9)]" />
              </span>
              <span>SCALATE · EEM</span>
            </div>
          </div>

          {/* TÍTULO */}
          <div className="mt-5 lg:mt-4 text-center">
            <h1 className="text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl">
              E-commerce
              <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                Economics Metrics
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
              Recopilaremos la información económica de tu marca
              para construir una visión clara de su rendimiento.
            </p>
          </div>

          {/* TARJETA DE ACCESO */}
          <div className="relative mt-6 overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#08090f]/90 p-6 shadow-[0_0_80px_rgba(124,58,237,0.10)] backdrop-blur-xl sm:p-8">

            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[70px]" />

            <div className="relative">

              {/* ICONO */}
              <div className="mb-4 lg:mb-3 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/[0.08] text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.12)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                  Accede al cuestionario
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Introduce tu contraseña para comenzar el proceso.
                </p>
              </div>

              {/* FORMULARIO */}
              <form onSubmit={handleSubmit} className="mt-5 lg:mt-4">

                <label
                  htmlFor="eem-password"
                  className="mb-2 block text-sm font-medium text-white/70"
                >
                  Contraseña de acceso
                </label>

                <div className="relative">
                  <input
                    id="eem-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Introduce tu contraseña"
                    autoComplete="off"
                    className="h-14 w-full rounded-2xl border border-white/[0.12] bg-white/[0.04] px-5 pr-14 text-base text-white outline-none placeholder:text-white/25 transition-all duration-200 focus:border-purple-400/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-purple-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/35 transition-colors hover:text-white/70"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m3 3 18 18" />
                        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                        <path d="M9.9 4.2A10.5 10.5 0 0 1 12 4c6.5 0 10 8 10 8a18.5 18.5 0 0 1-3.2 4.5" />
                        <path d="M6.6 6.6C3.7 8.5 2 12 2 12s3.5 8 10 8a10.6 10.6 0 0 0 4-.8" />
                      </svg>
                    )}
                  </button>
                </div>

                {error && (
                  <p className="mt-3 text-sm text-amber-300" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!password.trim()}
                  className="mt-5 flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] px-6 text-sm font-semibold text-white shadow-[0_0_25px_rgba(217,70,239,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(217,70,239,0.45)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
                >
                  ACCEDER AL CUESTIONARIO
                  <span className="ml-2">→</span>
                </button>

              </form>

              <p className="mt-6 text-center text-xs leading-5 text-white/30">
                ¿No tienes tu contraseña? Contacta con el equipo de SCALATE.
              </p>

            </div>
          </div>

          {/* PIE */}
          <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/20">
            SCALATE · E-COMMERCE GROWTH COMPANY
          </p>

        </div>
      </section>
    </main>
  );
}

function Background() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#05060b]" />

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-35"
        style={{
          backgroundImage: "url('/backgrounds/hex-grid.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "100px",
        }}
      />

      <div className="pointer-events-none fixed left-[-420px] top-[20px] z-0 h-[700px] w-[700px] rounded-full bg-blue-600/30 blur-[180px] sm:left-[-580px] sm:top-[-20px] sm:h-[800px] sm:w-[800px] lg:left-[-800px] lg:top-[-80px] lg:h-[900px] lg:w-[900px] lg:bg-blue-600/25 lg:blur-[210px]" />

      <div className="pointer-events-none fixed right-[-420px] top-[80px] z-0 h-[700px] w-[700px] rounded-full bg-purple-600/35 blur-[180px] sm:right-[-580px] sm:top-[20px] sm:h-[800px] sm:w-[800px] lg:right-[-850px] lg:top-[-60px] lg:h-[900px] lg:w-[900px] lg:bg-purple-600/28 lg:blur-[210px]" />

      <div className="pointer-events-none fixed left-1/2 top-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.04] blur-[140px]" />
    </>
  );
}
