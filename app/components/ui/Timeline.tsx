import TimelineItem from "./TimelineItem";
import { timeline } from "./TimelineData";

export default function Timeline() {
  return (
    <div className="mx-auto mt-24 max-w-5xl">

      {timeline.map((step, index) => (

        <TimelineItem
          key={step.number}
          step={step}
          isLast={index === timeline.length - 1}
        />

      ))}

    </div>
  );
}