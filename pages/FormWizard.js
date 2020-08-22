import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'


import BusinessLocation from './step/BusinessLocation'
import Structure from './step/Structure'

const stepPath = 'components/step/[[...id]]';


const steps = {
    businessLocation: BusinessLocation,
    structure: Structure,
  };

  const stepKeys = Object.keys(steps);

  const getAdjacentSteps = step => {
    const currentStep = stepKeys.findIndex(s => s === step);
    return {
      previousStep: currentStep > 0 ? `components/step/${stepKeys[currentStep - 1]}` : null,
      nextStep:
        currentStep < stepKeys.length
          ? `components/step/${stepKeys[currentStep + 1]}`
          : null
    };
  };

  const FormWizard = ({ stepId }) => {
    Router.events.on('routeChangeComplete', () => {
      window.scrollTo(0, 0);
    });
    const [formData, setFormData] = useState();
    const Step = steps[stepId];
    const { previousStep, nextStep } = getAdjacentSteps(stepId);
    return (
      <div className="width-container">
        {previousStep && (
          <Link href={stepPath} as={previousStep}>
            <a className="back-link">Back</a>
          </Link>
        )}
        <main className="main-wrapper">
          <Step
            formData={formData}
            saveData={data => setFormData({ ...formData, ...data })}
            nextStep={nextStep}
            stepPath={stepPath}
          />
        </main>
      </div>
    );
  };
  FormWizard.getInitialProps = async ({ query, res }) => {
    const firstStep = stepKeys[0];
    const stepId = query['[...id]'];
    if (res && stepId !== firstStep) {
      res.writeHead(301, { Location: `components/step/${firstStep}` });
      res.end();
    }
    return { stepId };
  };

export default FormWizard
