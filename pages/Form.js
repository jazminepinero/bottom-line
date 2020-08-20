import React from 'react'
import { render } from 'react-dom'
import { Field } from 'react-final-form'
import Wizard from '../components/Wizard'
import Style from '../components/Style'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import Search from '../components/Search'




const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)

}

const Error = ({ name }) => (
  <Field
    name={name}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)





const Div = styled.div`
justify-content: center;
text-align: center;
padding: 2px;
`;

//useplaces hooks



 







const Form = () => (
  <Style>
    <br />
    <h1>Hey, let's talk about your bookkeeping</h1>
   <br />
    <Wizard
      
      onSubmit={onSubmit}
    >
      <Wizard.Page>
        <Div>
        <h5>
         Where is your business located?
        </h5>
        </Div>
       
      
          <Div>
        <Search />
          <Error name="state" />
        </Div>
     
      </Wizard.Page>
      <Wizard.Page
       
      >
       
  
        <Div>
          <h5>What is your current business structure?</h5>
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
          if (!values.needs) {
            errors.needs = 'Required'
          } 
          return errors
        }}
      >
        <Div>
          <h5>Please describe your business very simply to us.</h5>
          </Div>
          <div>
          
          <Field name="general" component="textarea" placeholder="We just want a general idea of your business so we know how to best handle your books!" />
        </div>
        <br />
        <Div>
          <h5>What are some of your needs? 
            <div>(select all that apply)</div></h5>
          </Div>
          <div>
          <Field name="needs" component="select" multiple>
            <option value="financial"> Monthly financial Statements</option>
            <option value="bookkeeping"> Monthly Bookkeeping</option>
            <option value="tax">Income Tax Preparation</option>
            <option value="clean">QuickBooks Cleanup</option>
            <option value="entity">Entity Formation</option>
            <option value="salesTax">Sales Tax</option>
            <option value="payrollTax">Payroll Tax</option>
            <option value="consulting">Business Consulting</option>
            <option value="other">Other</option>
          </Field>
          <Error name="needs" />
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
);


export default Form;