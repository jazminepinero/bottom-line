import React from 'react'
import { render } from 'react-dom'
import { Field } from 'react-final-form'
import Wizard from '../components/Wizard'
import Style from '../components/Style'
import { Typography } from '@material-ui/core'




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
        <h3>
         Where is your business located?
        </h3>
        </div>
        <div>
          <h5>Business Location</h5>
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
        <div>
          <Typography>
            Business formation
          </Typography>
        </div>
  
        <div>
          <h3>You are currently in business as?</h3>
          </div>
          <div>
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
          <Error name="favoriteColor" />
        </div>
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
        <div>
          <label>Employed?</label>
          <Field name="employed" component="input" type="checkbox" />
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
          <label>Best Stooge?</label>
          <div>
            <label>
              <Field
                name="stooge"
                component="input"
                type="radio"
                value="larry"
              />{' '}
              Larry
            </label>
            <label>
              <Field name="stooge" component="input" type="radio" value="moe" />{' '}
              Moe
            </label>
            <label>
              <Field
                name="stooge"
                component="input"
                type="radio"
                value="curly"
              />{' '}
              Curly
            </label>
          </div>
        </div>
        <div>
          <label>Notes</label>
          <Field name="notes" component="textarea" placeholder="Notes" />
          <Error name="notes" />
        </div>
      </Wizard.Page>
    </Wizard>
 </Style>
)

export default Form;