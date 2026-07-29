import Section from "../ui/Section";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";

import GrowthProblemCard from "../ui/GrowthProblemCard";
import BrowserProblem from "../ui/problems/BrowserProblem";
import MobileProblem from "../ui/problems/MobileProblem";
import TicketProblem from "../ui/problems/TicketProblem";
import SpeedProblem from "../ui/problems/SpeedProblem";
import FunnelProblem from "../ui/problems/FunnelProblem";
import TrustProblem from "../ui/problems/TrustProblem";
import { problems } from "@/app/data/problems";

export default function GrowthSection() {
  return (
    <Section className="pt-10 pb-32">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <Title
  className="
    text-[1.8rem]
    sm:text-4xl
    lg:text-[2.8rem]
    xl:text-[2.4rem]
  "
>
            Tu tienda está{" "}
            <span className="text-[#C24641]">
              perdiendo ventas
            </span>{" "}
            sin que lo sepas.
          </Title>

          <Subtitle className="mx-auto mt-6 text-lg">
            Y estas son algunas de las razones.
          </Subtitle>

        </div>

        <div
  className="
    mx-auto
    mt-12
    grid
    max-w-[68rem]
    gap-4
    lg:grid-cols-2
    xl:grid-cols-3
  "
>

<GrowthProblemCard
  title={problems[0].title}
  description={problems[0].description}
  delay={0}
>
  <BrowserProblem />
</GrowthProblemCard>

<GrowthProblemCard
  title={problems[1].title}
  description={problems[1].description}
  delay={0.08}
>
  <MobileProblem />
</GrowthProblemCard>

<GrowthProblemCard
  title={problems[2].title}
  description={problems[2].description}
  delay={0.16}
>
  <TicketProblem />
</GrowthProblemCard>

<GrowthProblemCard
  title={problems[3].title}
  description={problems[3].description}
  delay={0.24}
>
  <SpeedProblem />
</GrowthProblemCard>

<GrowthProblemCard
  title={problems[4].title}
  description={problems[4].description}
  delay={0.32}
>
  <FunnelProblem />
</GrowthProblemCard>

<GrowthProblemCard
  title={problems[5].title}
  description={problems[5].description}
  delay={0.40}
>
  <TrustProblem />
</GrowthProblemCard>

        </div>

        <div className="mt-16 flex justify-center">

          <Button
            className="
              h-11
              px-6
              text-2lg
            "
          >
            Quiero aplicar las soluciones →
          </Button>

        </div>

      </Container>

    </Section>
  );
}