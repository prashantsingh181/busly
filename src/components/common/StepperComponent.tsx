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
    <div className="flex items-center w-[280px] sm:w-[400px] lg:w-[700px] mb-12 mx-auto">
      {steps.map((step) => (
        <React.Fragment key={step.position}>
          {isFirstStep(step.position) ? null : (
            <div className="h-0.5 flex-1 overflow-hidden bg-neutral-300">
              <div
                className={`w-full h-full bg-theme-500 -translate-x-full transition-transform duration-300 ease ${
                  isVisitedStep(step.position) ? "translate-x-0" : ""
                }`}
              />
            </div>
          )}
          <div
            className={`w-5 h-5 relative z-[1] rounded-full flex justify-center items-center transition-colors delay-300 duration-300 ease ${
              isVisitedStep(step.position)
                ? "bg-theme-500"
                : "bg-transparent border-2 border-neutral-300"
            } ${
              isCurrentStep(step.position)
                ? "after:absolute after:z-[-1] after:w-full after:h-full after:rounded-full after:bg-theme-500 after:opacity-30 after:scale-125 after:transition-transform after:duration-300"
                : ""
            }`}
          >
            {isVisitedStep(step.position) && !isCurrentStep(step.position) ? (
              <PiCheckBold size="0.8rem" className="text-white" />
            ) : (
              <PiCircleFill
                size="0.6em"
                className={`${
                  isCurrentStep(step.position) ? "text-white" : "text-neutral-400"
                }`}
              />
            )}
            <div
              className={`absolute top-10 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap font-medium text-sm sm:text-base ${
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
