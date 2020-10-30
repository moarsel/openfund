import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const DonationForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.donation?.id)
  }
  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error} className="space-y-4">
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="amount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Amount
        </Label>
        <NumberField
          name="amount"
          defaultValue={props.donation?.amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="amount" className="rw-field-error" />

        <Label
          name="donationTime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Donation time
        </Label>
        <TextField
          name="donationTime"
          defaultValue={props.donation?.donationTime}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="donationTime" className="rw-field-error" />

        <Label
          name="transactionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Transaction id
        </Label>
        <NumberField
          name="transactionId"
          defaultValue={props.donation?.transactionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="transactionId" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        <NumberField
          name="userId"
          defaultValue={props.donation?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="projectId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Project id
        </Label>
        <NumberField
          name="projectId"
          defaultValue={props.donation?.projectId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="projectId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DonationForm
