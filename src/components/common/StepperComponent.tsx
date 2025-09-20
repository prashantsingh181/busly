import React from "react";
import { PiCheckBold, PiCircleFill } from "react-icons/pi";

interface Step {
  position: number;
  title: string;
  path: string;
}

interface StepperComponentProps {
  steps: Step[];
  currentStep: number;
}

function StepperComponent({
  steps,
  currentStep,
}: Readonly<StepperComponentProps>) {
  const isVisitedStep = (position: number) => position <= currentStep;
  const isCurrentStep = (position: number) => position === currentStep;
  const isFirstStep = (position: number) => position === 1;

  return (
    <div className="mx-auto mb-12 flex w-[280px] items-center sm:w-[400px] lg:w-[700px]">
      {steps.map((step) => (
        <React.Fragment key={step.position}>
          {isFirstStep(step.position) ? null : (
            <div className="h-0.5 flex-1 overflow-hidden bg-neutral-300">
              <div
                className={`bg-theme-500 ease h-full w-full -translate-x-full transition-transform duration-300 ${
                  isVisitedStep(step.position) ? "translate-x-0" : ""
                }`}
              />
            </div>
          )}
          <div
            className={`ease relative z-[1] flex h-5 w-5 items-center justify-center rounded-full transition-colors delay-300 duration-300 ${
              isVisitedStep(step.position)
                ? "bg-theme-500"
                : "border-2 border-neutral-300 bg-transparent"
            } ${
              isCurrentStep(step.position)
                ? "after:bg-theme-500 after:absolute after:z-[-1] after:h-full after:w-full after:scale-125 after:rounded-full after:opacity-30 after:transition-transform after:duration-300"
                : ""
            }`}
          >
            {isVisitedStep(step.position) && !isCurrentStep(step.position) ? (
              <PiCheckBold size="0.8rem" className="text-white" />
            ) : (
              <PiCircleFill
                size="0.6em"
                className={`${
                  isCurrentStep(step.position)
                    ? "text-white"
                    : "text-neutral-400"
                }`}
              />
            )}
            <div
              className={`absolute top-10 left-1/2 -translate-x-1/2 transform text-center text-sm font-medium whitespace-nowrap sm:text-base ${
                isCurrentStep(step.position) ? "text-theme-500" : ""
              }`}
            >
              {step.title}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default StepperComponent;
