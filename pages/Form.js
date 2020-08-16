import React from 'react'
import { render } from 'react-dom'
import { Field } from 'react-final-form'
import Wizard from '../components/Wizard'
import Style from '../components/Style'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'



const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)

}

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Required')
const Div = styled.div`
display: flex;
justify-content: center;
padding: 2px;
`;



const Form = () => (
  <Style>
    <br />
    <h1>Hey, let's talk about your bookkeeping</h1>
   <br />
    <Wizard
      
      onSubmit={onSubmit}
    >
      <Wizard.Page>
        <div>
        <h5>
         Where is your business located?
        </h5>
        </div>
          <div>
          <Field
            name="state"
            component="input"
            type="text"
            placeholder="State"
            validate={required}
          />
          <Error name="state" />
        </div>
     
      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.state) {
            errors.state = 'Required'
          }
        
          return errors
        }}
      >
       
  
        <Div>
          <h5>What is your current business formation?</h5>
          </Div>
          <Div>
          <Field name="businessType" placeholder="Business Type" component="select">
      
            <option />
            <option>Sole Proprietor</option>
            <option>LLC (Single member)</option>
            <option>LLC (Multi member)</option>
            <option>S - Corp (SM-LLC)</option>
            <option>S - Corp (MM-LLC)</option>
            <option>S - Corp (C Corp)</option>
            <option>Other</option>
            
          </Field>
          <Error name="businessType" />
        </Div>
      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.toppings) {
            errors.toppings = 'Required'
          } else if (values.toppings.length < 2) {
            errors.toppings = 'Choose more'
          }
          return errors
        }}
      >
        <Div>
          <h5>Please describe your business very simply to us.</h5>
          </Div>
          <div>
          
          <Field name="notes" component="textarea" placeholder="We just want a general idea of your business so we know how to best handle your books!" />
        </div>
        <div>
          <label>Toppings</label>
          <Field name="toppings" component="select" multiple>
            <option value="ham">🐷 Ham</option>
            <option value="mushrooms">🍄 Mushrooms</option>
            <option value="cheese">🧀 Cheese</option>
            <option value="chicken">🐓 Chicken</option>
            <option value="pineapple">🍍 Pinapple</option>
          </Field>
          <Error name="toppings" />
        </div>
      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.notes) {
            errors.notes = 'Required'
          }
          return errors
        }}
      >
        <div>
          <h4>What are you currently handling your books with?</h4>
          </div>
            <Div>
            <p>
              <Field
                name="Quickbooks"
                component="input"
                type="radio"
                value="QB"
              />{' '}
              Quickbooks
            </p>
            </Div>
            <Div>
            <p>
              <Field
                name="Xero"
                component="input"
                type="radio"
                value="QB"
              />{' '}
              Xero
            </p>
            </Div>
            <Div>
            <p>
              <Field name="stooge" component="input" type="radio" value="moe" />{' '}
             Self Maintained
            </p>
            </Div>
            <Div>
            <p>
              <Field
                name="stooge"
                component="input"
                type="radio"
                value="curly"
              />{' '}
             Haven't really been keeping up
            </p>
            </Div>
            <Div>
            <p>
              <Field
                name="other"
                component="input"
                type="radio"
                value="other"
              />{' '}
             Other
            </p>
            </Div>
       
        <Div>
          <option>Anything else we should know about your books?</option>
          </Div>
          <div>
          <Field name="notes" component="textarea" placeholder="Help us, help you!" />
          <Error name="notes" />
        </div>
      </Wizard.Page>
    </Wizard>
 </Style>
)

export default Form;